"""
Interactive demo of the LangGraph database agent.

Run: python main.py

Demonstrates:
  1. READ queries execute automatically through the safety pipeline
  2. WRITE queries pause for human approval (interrupt + resume)
  3. Dangerous queries are caught by deterministic validation
  4. Failed queries retry with error context (bounded retries)

Try these example queries:
  - "Who are our top 5 customers by total spending?"
  - "Show me products that are out of stock"
  - "How many orders were cancelled last year?"
  - "Update the price of Widget Pro to $24.99"
  - "Delete all inactive customers"
  - "Drop the orders table"  (blocked by validation)
"""

import sys

from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import Command

from agent import build_graph
from db import get_schema_description, init_db

# ANSI colors for terminal output
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
DIM = "\033[2m"
BOLD = "\033[1m"
RESET = "\033[0m"


def print_step(label: str, content: str, color: str = DIM):
    """Print a labeled step with color."""
    print(f"\n{color}[{label}]{RESET} {content}")


def run_query(graph, query: str, thread_id: str, db_path: str, schema_info: str):
    """Run a single query through the agent, handling interrupts for write approval."""
    config = {"configurable": {"thread_id": thread_id}}

    initial_state = {
        "user_query": query,
        "schema_info": schema_info,
        "db_path": db_path,
        "sql": "",
        "operation_type": "read",
        "validation_error": "",
        "write_plan": "",
        "approved": None,
        "query_result": "",
        "error": "",
        "retry_count": 0,
        "response": "",
    }

    # Stream events so we can show progress
    print(f"\n{'='*60}")
    print(f"{BOLD}Query:{RESET} {query}")
    print(f"{'='*60}")

    current_state = None
    for event in graph.stream(initial_state, config, stream_mode="updates"):
        for node_name, updates in event.items():
            if node_name == "generate_sql":
                print_step("SQL Generated", updates.get("sql", ""), CYAN)
            elif node_name == "validate_sql":
                op = updates.get("operation_type", "?")
                err = updates.get("validation_error", "")
                if err:
                    print_step("Validation FAILED", f"{RED}{err}{RESET}", RED)
                else:
                    print_step("Validation OK", f"operation={op}", GREEN)
            elif node_name == "execute_read":
                result = updates.get("query_result", "")
                if updates.get("error"):
                    print_step("Execution Error", updates["error"], RED)
                else:
                    # Truncate long results in the step view
                    preview = result[:200] + "..." if len(result) > 200 else result
                    print_step("Query Executed", f"\n{preview}", GREEN)
            elif node_name == "explain_write":
                print_step("Write Plan", updates.get("write_plan", ""), YELLOW)
            elif node_name == "execute_write":
                if updates.get("error"):
                    print_step("Write Error", updates["error"], RED)
                else:
                    print_step("Write Executed", updates.get("query_result", ""), GREEN)
            elif node_name == "handle_error":
                retry = updates.get("retry_count", 0)
                print_step("Error Handler", f"retry {retry}/2 — {updates.get('error', '')}", YELLOW)
            elif node_name == "format_response":
                pass  # We'll print this at the end

            current_state = updates

    # Check if we hit an interrupt (write operation needing approval)
    snapshot = graph.get_state(config)
    if snapshot.next:
        # We're paused at human_review — the interrupt payload is in snapshot
        interrupt_data = snapshot.tasks[0].interrupts[0].value if snapshot.tasks else {}

        print(f"\n{YELLOW}{'─'*60}")
        print(f"  WRITE OPERATION REQUIRES APPROVAL")
        print(f"{'─'*60}{RESET}")
        print(f"\n  SQL: {BOLD}{interrupt_data.get('sql', '')}{RESET}")
        print(f"\n  Plan: {interrupt_data.get('plan', '')}")
        print(f"\n{YELLOW}{'─'*60}{RESET}")

        while True:
            choice = input(f"\n{BOLD}Approve this write? (y/n): {RESET}").strip().lower()
            if choice in ("y", "n", "yes", "no"):
                break
            print("Please enter 'y' or 'n'")

        approved = choice in ("y", "yes")

        if approved:
            print_step("Approved", "Executing write operation...", GREEN)
        else:
            print_step("Rejected", "No changes will be made.", RED)

        # Resume the graph
        for event in graph.stream(
            Command(resume={"approved": approved}), config, stream_mode="updates"
        ):
            for node_name, updates in event.items():
                if node_name == "execute_write":
                    if updates.get("error"):
                        print_step("Write Error", updates["error"], RED)
                    else:
                        print_step("Write Executed", updates.get("query_result", ""), GREEN)
                elif node_name == "format_response":
                    current_state = updates

    # Print final response
    final = graph.get_state(config)
    response = final.values.get("response", "No response generated.")
    print(f"\n{GREEN}{BOLD}Response:{RESET}")
    print(f"{response}")
    print()


def main():
    print(f"""
{BOLD}╔══════════════════════════════════════════════════════════╗
║  LangGraph Database Agent — Deterministic Safety Demo   ║
╚══════════════════════════════════════════════════════════╝{RESET}

This agent converts natural language to SQL with {BOLD}structural{RESET}
safety guarantees:

  {GREEN}✓{RESET} Every query is validated (regex, not LLM judgment)
  {GREEN}✓{RESET} Write operations always require human approval
  {GREEN}✓{RESET} Dangerous patterns (DROP, DELETE *) are blocked
  {GREEN}✓{RESET} Failed queries retry with bounded attempts

Type a question, or try these examples:
  {DIM}1. Who are our top 5 customers by total spending?
  2. Show me products that are out of stock
  3. How many orders were cancelled?
  4. Update the price of Widget Pro to $24.99
  5. Delete all inactive customers
  6. Drop the orders table{RESET}

Type {BOLD}quit{RESET} to exit.
""")

    # Initialize
    print(f"{DIM}Initializing database...{RESET}")
    db_path = init_db(seed=True)
    schema_info = get_schema_description()
    print(f"{DIM}Database ready at {db_path}{RESET}")

    # Build graph with checkpointer (needed for interrupt/resume)
    memory = MemorySaver()
    graph = build_graph(checkpointer=memory)

    thread_counter = 0

    while True:
        try:
            query = input(f"\n{BOLD}Ask a question > {RESET}").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nGoodbye!")
            break

        if not query:
            continue
        if query.lower() in ("quit", "exit", "q"):
            print("Goodbye!")
            break

        thread_counter += 1
        run_query(
            graph,
            query,
            thread_id=str(thread_counter),
            db_path=db_path,
            schema_info=schema_info,
        )


if __name__ == "__main__":
    main()
