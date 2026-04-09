"""
LangGraph agent for safe, natural-language database queries.

This agent demonstrates why deterministic control flow matters for database
operations. Instead of letting an LLM freely decide what to do, the graph
enforces a fixed pipeline:

  1. Every query goes through SQL generation → validation → execution
  2. Write operations ALWAYS require human approval (no exceptions)
  3. Validation is deterministic (regex + syntax checks, not LLM judgment)
  4. Retries are bounded (max 2 attempts, then fail gracefully)

A free-form ReAct agent might skip validation, execute destructive queries
without confirmation, or retry forever. The graph makes these guarantees
structural, not probabilistic.
"""

import json
import os
import re
from typing import Literal, Optional, TypedDict

from langchain_core.messages import HumanMessage, SystemMessage
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import END, START, StateGraph
from langgraph.types import Command, interrupt

from db import execute_sql, get_schema_description

# ---------------------------------------------------------------------------
# State
# ---------------------------------------------------------------------------


class AgentState(TypedDict):
    # Input
    user_query: str
    schema_info: str
    db_path: str

    # SQL generation
    sql: str
    operation_type: Literal["read", "write"]

    # Validation
    validation_error: str

    # Write path
    write_plan: str
    approved: Optional[bool]

    # Execution
    query_result: str

    # Control flow
    error: str
    retry_count: int

    # Output
    response: str


# ---------------------------------------------------------------------------
# LLM setup
# ---------------------------------------------------------------------------


def get_llm():
    """Auto-detect available LLM provider."""
    if os.environ.get("ANTHROPIC_API_KEY"):
        from langchain_anthropic import ChatAnthropic

        return ChatAnthropic(model="claude-sonnet-4-20250514", temperature=0)
    elif os.environ.get("OPENAI_API_KEY"):
        from langchain_openai import ChatOpenAI

        return ChatOpenAI(model="gpt-4o-mini", temperature=0)
    else:
        raise ValueError(
            "Set ANTHROPIC_API_KEY or OPENAI_API_KEY environment variable"
        )


# ---------------------------------------------------------------------------
# Nodes
# ---------------------------------------------------------------------------


def generate_sql(state: AgentState) -> dict:
    """Use the LLM to convert natural language to SQL."""
    llm = get_llm()

    system = f"""You are a SQL expert. Convert the user's question into a single SQLite query.

Database schema:
{state['schema_info']}

Rules:
- Return ONLY the SQL query, no explanation or markdown
- Use SQLite syntax
- Never use DROP TABLE, DROP DATABASE, or TRUNCATE
- For aggregations, always alias computed columns
- Use double quotes for identifiers only if they contain spaces"""

    # Include error context if this is a retry
    user_msg = state["user_query"]
    if state.get("error"):
        user_msg += f"\n\nPrevious attempt failed with: {state['error']}\nPlease fix the query."

    messages = [SystemMessage(content=system), HumanMessage(content=user_msg)]
    response = llm.invoke(messages)

    # Strip markdown code fences if the LLM wraps the SQL
    sql = response.content.strip()
    sql = re.sub(r"^```(?:sql)?\s*", "", sql)
    sql = re.sub(r"\s*```$", "", sql)

    return {"sql": sql.strip(), "error": "", "validation_error": ""}


def validate_sql(state: AgentState) -> dict:
    """
    Deterministic safety checks on the generated SQL.

    This is the core of why a graph beats a free-form agent:
    these checks run EVERY TIME, guaranteed. An LLM might skip them.
    """
    sql = state["sql"].strip().upper()
    original_sql = state["sql"].strip()
    errors = []

    # --- Blocked operations (never allowed) ---
    blocked = [
        (r"\bDROP\s+(TABLE|DATABASE|INDEX|VIEW)\b", "DROP operations are blocked"),
        (r"\bTRUNCATE\b", "TRUNCATE is blocked"),
        (r"\bALTER\s+TABLE\s+\w+\s+DROP\b", "Dropping columns is blocked"),
    ]
    for pattern, msg in blocked:
        if re.search(pattern, sql, re.IGNORECASE):
            errors.append(msg)

    # --- Dangerous patterns (require guardrails) ---
    if re.search(r"\bDELETE\b", sql) and not re.search(r"\bWHERE\b", sql):
        errors.append("DELETE without WHERE clause — this would delete ALL rows")

    if re.search(r"\bUPDATE\b", sql) and not re.search(r"\bWHERE\b", sql):
        errors.append("UPDATE without WHERE clause — this would update ALL rows")

    # --- Multi-statement injection check ---
    # Strip string literals before checking for semicolons
    stripped = re.sub(r"'[^']*'", "", original_sql)
    if ";" in stripped.rstrip(";"):
        errors.append("Multiple statements detected — potential SQL injection")

    # --- Classify operation type ---
    if sql.startswith("SELECT"):
        op_type = "read"
    else:
        op_type = "write"

    if errors:
        return {
            "validation_error": "; ".join(errors),
            "operation_type": op_type,
        }

    return {
        "validation_error": "",
        "operation_type": op_type,
    }


def execute_read(state: AgentState) -> dict:
    """Execute a SELECT query and return formatted results."""
    result = execute_sql(state["sql"], state["db_path"])

    if not result["success"]:
        return {"error": result["error"], "query_result": ""}

    if not result["data"]:
        return {"query_result": "Query returned no results.", "error": ""}

    # Format as a readable table
    columns = result["columns"]
    rows = result["data"]

    # Build text table
    lines = []
    lines.append(" | ".join(columns))
    lines.append("-" * len(lines[0]))
    for row in rows[:50]:  # Cap at 50 rows for readability
        lines.append(" | ".join(str(row.get(c, "")) for c in columns))

    if len(rows) > 50:
        lines.append(f"... and {len(rows) - 50} more rows")

    return {"query_result": "\n".join(lines), "error": ""}


def explain_write(state: AgentState) -> dict:
    """Use the LLM to explain what a write operation will do, for human review."""
    llm = get_llm()

    # First, run a dry-run analysis: check what rows would be affected
    # For UPDATE/DELETE, convert to a SELECT to preview affected rows
    sql = state["sql"].strip()
    preview_sql = None

    if re.match(r"(?i)^DELETE\s+FROM\s+", sql):
        # Convert DELETE FROM table WHERE ... → SELECT * FROM table WHERE ...
        preview_sql = re.sub(r"(?i)^DELETE\s+FROM", "SELECT * FROM", sql)
    elif re.match(r"(?i)^UPDATE\s+", sql):
        # Convert UPDATE table SET ... WHERE ... → SELECT * FROM table WHERE ...
        match = re.search(r"(?i)\bWHERE\b(.+)$", sql)
        table = re.match(r"(?i)^UPDATE\s+(\w+)", sql)
        if match and table:
            preview_sql = f"SELECT * FROM {table.group(1)} WHERE {match.group(1)}"

    preview_result = ""
    if preview_sql:
        result = execute_sql(preview_sql, state["db_path"])
        if result["success"] and result["data"]:
            preview_result = f"\n\nRows that will be affected ({len(result['data'])} total):\n"
            for row in result["data"][:10]:
                preview_result += f"  {json.dumps(row, default=str)}\n"
            if len(result["data"]) > 10:
                preview_result += f"  ... and {len(result['data']) - 10} more\n"

    messages = [
        SystemMessage(
            content="Explain what this SQL query will do to the database in 2-3 sentences. "
            "Be specific about which rows will be affected and what will change. "
            "If the operation seems risky, say so."
        ),
        HumanMessage(content=f"SQL: {sql}{preview_result}"),
    ]
    response = llm.invoke(messages)

    plan = response.content
    if preview_result:
        plan += f"\n\n--- Preview of affected rows ---{preview_result}"

    return {"write_plan": plan}


def human_review(state: AgentState) -> dict:
    """
    Pause the graph for human approval.

    Uses LangGraph's interrupt() — the graph saves its state and returns
    control to the caller. The caller collects the user's decision and
    resumes the graph with Command(resume=...).

    This is a STRUCTURAL guarantee: write operations can never bypass
    this node. A free-form agent might "decide" to skip approval.
    """
    decision = interrupt(
        {
            "message": "Write operation requires approval",
            "sql": state["sql"],
            "plan": state["write_plan"],
        }
    )

    return {"approved": decision.get("approved", False)}


def execute_write(state: AgentState) -> dict:
    """Execute a write operation after approval."""
    result = execute_sql(state["sql"], state["db_path"])

    if not result["success"]:
        return {"error": result["error"], "query_result": ""}

    return {
        "query_result": f"Write operation completed. {result['rows_affected']} row(s) affected.",
        "error": "",
    }


def format_response(state: AgentState) -> dict:
    """Generate the final natural-language response."""

    # Handle rejection
    if state.get("approved") is False:
        return {"response": "Write operation was rejected. No changes were made."}

    # Handle errors that exhausted retries
    if state.get("error") and state.get("retry_count", 0) >= 2:
        return {
            "response": f"I wasn't able to complete your request after multiple attempts. "
            f"Last error: {state['error']}"
        }

    # Handle validation failures that exhausted retries
    if state.get("validation_error") and state.get("retry_count", 0) >= 2:
        return {
            "response": f"The generated query failed safety validation: {state['validation_error']}. "
            f"This operation may not be supported for safety reasons."
        }

    # Successful execution — use LLM to format nicely
    if state.get("query_result"):
        llm = get_llm()
        messages = [
            SystemMessage(
                content="Summarize the query results concisely for the user. "
                "Include key numbers and insights. Keep it to 2-4 sentences, "
                "then show the data if it's a table."
            ),
            HumanMessage(
                content=f"User asked: {state['user_query']}\n\n"
                f"SQL executed: {state['sql']}\n\n"
                f"Results:\n{state['query_result']}"
            ),
        ]
        response = llm.invoke(messages)
        return {"response": response.content}

    return {"response": "Query completed but returned no results."}


def handle_error(state: AgentState) -> dict:
    """Increment retry count and prepare error context for regeneration."""
    retry_count = state.get("retry_count", 0) + 1
    error = state.get("validation_error") or state.get("error") or "Unknown error"
    return {"retry_count": retry_count, "error": error}


# ---------------------------------------------------------------------------
# Routing functions (deterministic edges)
# ---------------------------------------------------------------------------


def route_after_validation(state: AgentState) -> str:
    """Route based on validation result and operation type."""
    if state.get("validation_error"):
        return "handle_error"
    if state["operation_type"] == "read":
        return "execute_read"
    return "explain_write"


def route_after_execution(state: AgentState) -> str:
    """Route based on execution result (for reads)."""
    if state.get("error"):
        return "handle_error"
    return "format_response"


def route_after_review(state: AgentState) -> str:
    """Route based on human approval decision."""
    if state.get("approved"):
        return "execute_write"
    return "format_response"


def route_after_write(state: AgentState) -> str:
    """Route based on write execution result."""
    if state.get("error"):
        return "handle_error"
    return "format_response"


def route_after_error(state: AgentState) -> str:
    """Retry or give up based on retry count."""
    if state.get("retry_count", 0) < 2:
        return "generate_sql"  # Try again with error context
    return "format_response"  # Give up gracefully


# ---------------------------------------------------------------------------
# Graph construction
# ---------------------------------------------------------------------------


def build_graph(checkpointer=None):
    """
    Build and compile the LangGraph agent.

    The graph structure:

        START
          |
        generate_sql
          |
        validate_sql
          |
        +-- [valid + read] --> execute_read --> format_response --> END
        |
        +-- [valid + write] --> explain_write --> human_review
        |                                           |
        |                         [approved] --> execute_write --> format_response --> END
        |                         [rejected] --> format_response --> END
        |
        +-- [invalid] --> handle_error
                            |
                  [retries left] --> generate_sql (loop back)
                  [max retries]  --> format_response --> END
    """
    builder = StateGraph(AgentState)

    # Add all nodes
    builder.add_node("generate_sql", generate_sql)
    builder.add_node("validate_sql", validate_sql)
    builder.add_node("execute_read", execute_read)
    builder.add_node("explain_write", explain_write)
    builder.add_node("human_review", human_review)
    builder.add_node("execute_write", execute_write)
    builder.add_node("format_response", format_response)
    builder.add_node("handle_error", handle_error)

    # Wire edges
    builder.add_edge(START, "generate_sql")
    builder.add_edge("generate_sql", "validate_sql")

    # After validation: route by validity + operation type
    builder.add_conditional_edges(
        "validate_sql",
        route_after_validation,
        ["execute_read", "explain_write", "handle_error"],
    )

    # Read path: execute → check for errors → format
    builder.add_conditional_edges(
        "execute_read",
        route_after_execution,
        ["format_response", "handle_error"],
    )

    # Write path: explain → review → conditional execute
    builder.add_edge("explain_write", "human_review")
    builder.add_conditional_edges(
        "human_review",
        route_after_review,
        ["execute_write", "format_response"],
    )
    builder.add_conditional_edges(
        "execute_write",
        route_after_write,
        ["format_response", "handle_error"],
    )

    # Error handling: retry or give up
    builder.add_conditional_edges(
        "handle_error",
        route_after_error,
        ["generate_sql", "format_response"],
    )

    # Terminal
    builder.add_edge("format_response", END)

    return builder.compile(checkpointer=checkpointer)
