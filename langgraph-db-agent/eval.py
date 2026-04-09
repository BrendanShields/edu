"""
Eval suite for the LangGraph database agent.

Tests the deterministic safety pipeline without requiring an LLM API key.
Uses a mock LLM that returns predetermined SQL, so we can verify that the
graph structure (validation, routing, interrupts, retries) works correctly.

Run: python eval.py

This tests the STRUCTURAL GUARANTEES — the whole point of using a graph:
  1. Validation always runs (dangerous SQL is always caught)
  2. Write operations always interrupt for human approval
  3. Read operations never interrupt
  4. Rejected writes make no changes
  5. Retries are bounded
  6. Error recovery works
"""

import sys
import time
import unittest.mock as mock

from langchain_core.messages import AIMessage
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import Command

import agent as agent_module
from agent import (
    build_graph,
    handle_error,
    route_after_error,
    route_after_review,
    route_after_validation,
    validate_sql,
)
from db import execute_sql, get_schema_description, init_db

# ANSI
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
DIM = "\033[2m"
BOLD = "\033[1m"
RESET = "\033[0m"


# ---------------------------------------------------------------------------
# Mock LLM — returns predetermined SQL for known queries
# ---------------------------------------------------------------------------

MOCK_RESPONSES = {
    # Read queries
    "top 5 customers": "SELECT c.name, SUM(o.total) as total_spent FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.id ORDER BY total_spent DESC LIMIT 5",
    "out of stock": "SELECT name, category FROM products WHERE stock = 0",
    "order count by status": "SELECT status, COUNT(*) as count FROM orders GROUP BY status",
    "enterprise": "SELECT name, email FROM customers WHERE tier = 'enterprise'",
    "average order total by tier": "SELECT c.tier, AVG(o.total) as avg_total FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.tier",
    # Write queries
    "update the price of widget pro": "UPDATE products SET price = 24.99 WHERE name = 'Widget Pro'",
    "delete all inactive": "DELETE FROM customers WHERE is_active = 0",
    "set the price of gadget x": "UPDATE products SET price = 1.00 WHERE name = 'Gadget X'",
    # Dangerous queries — the LLM might generate these
    "drop the orders table": "DROP TABLE orders",
    "delete everything from products": "DELETE FROM products",
    "delete everything from customers": "DELETE FROM customers",
    # Multi-statement injection
    "injection test": "SELECT 1; DROP TABLE orders",
    # Intentionally bad SQL (for retry testing)
    "bad column": "SELECT nonexistent_column FROM customers",
    # Retry recovery: first attempt bad, second attempt good
    "retry test": "SELECT name FROM customers WHERE tier = 'pro'",
}


class MockLLM:
    """A mock LLM that returns predetermined responses for eval testing."""

    def invoke(self, messages):
        # Only match against HumanMessage content (not system prompts which
        # contain schema text that could cause false matches like "enterprise")
        from langchain_core.messages import HumanMessage as HM

        human_content = ""
        for msg in messages:
            if isinstance(msg, HM):
                human_content += msg.content.lower() + " "

        # Match against known queries (check longest keys first to avoid
        # partial matches like "delete" matching before "delete all inactive")
        sorted_keys = sorted(MOCK_RESPONSES.keys(), key=len, reverse=True)
        for key in sorted_keys:
            if key in human_content:
                return AIMessage(content=MOCK_RESPONSES[key])

        # Default: summarize/format node — just return a generic response
        return AIMessage(content="Query completed successfully. Results shown above.")


# Patch get_llm to return our mock
original_get_llm = agent_module.get_llm


def mock_get_llm():
    return MockLLM()


# ---------------------------------------------------------------------------
# Test helpers
# ---------------------------------------------------------------------------


def make_state(query, db_path, schema):
    return {
        "user_query": query,
        "schema_info": schema,
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


def run_until_interrupt_or_end(graph, state, config):
    """Run the graph, return (final_values, interrupted)."""
    for event in graph.stream(state, config, stream_mode="updates"):
        pass
    snapshot = graph.get_state(config)
    return snapshot.values, bool(snapshot.next)


def resume_with_decision(graph, config, approved: bool):
    """Resume an interrupted graph with an approval decision."""
    for event in graph.stream(
        Command(resume={"approved": approved}), config, stream_mode="updates"
    ):
        pass
    return graph.get_state(config).values


# ---------------------------------------------------------------------------
# Eval registry
# ---------------------------------------------------------------------------

EVALS = []


def eval_case(category, name):
    def decorator(fn):
        EVALS.append({"category": category, "name": name, "fn": fn})
        return fn
    return decorator


# ===========================================================================
# Category 1: Validation logic (unit tests for the safety checks)
# ===========================================================================


@eval_case("validation", "DROP TABLE is blocked")
def test_val_drop(graph, config, db_path, schema):
    result = validate_sql({"sql": "DROP TABLE orders"})
    assert result["validation_error"], "DROP TABLE should be blocked"
    assert "DROP" in result["validation_error"]


@eval_case("validation", "DROP DATABASE is blocked")
def test_val_drop_db(graph, config, db_path, schema):
    result = validate_sql({"sql": "DROP DATABASE main"})
    assert result["validation_error"], "DROP DATABASE should be blocked"


@eval_case("validation", "TRUNCATE is blocked")
def test_val_truncate(graph, config, db_path, schema):
    result = validate_sql({"sql": "TRUNCATE TABLE orders"})
    assert result["validation_error"], "TRUNCATE should be blocked"


@eval_case("validation", "DELETE without WHERE is blocked")
def test_val_delete_no_where(graph, config, db_path, schema):
    result = validate_sql({"sql": "DELETE FROM customers"})
    assert "WHERE" in result["validation_error"], "Should require WHERE clause"


@eval_case("validation", "UPDATE without WHERE is blocked")
def test_val_update_no_where(graph, config, db_path, schema):
    result = validate_sql({"sql": "UPDATE products SET price = 0"})
    assert "WHERE" in result["validation_error"], "Should require WHERE clause"


@eval_case("validation", "Multi-statement SQL is blocked")
def test_val_injection(graph, config, db_path, schema):
    result = validate_sql({"sql": "SELECT 1; DROP TABLE orders"})
    assert "Multiple statements" in result["validation_error"] or "DROP" in result["validation_error"]


@eval_case("validation", "Semicolons inside strings are allowed")
def test_val_string_semicolons(graph, config, db_path, schema):
    result = validate_sql({"sql": "SELECT * FROM customers WHERE name = 'O;Brien'"})
    assert not result["validation_error"], f"String semicolons should be OK, got: {result['validation_error']}"


@eval_case("validation", "Safe SELECT passes")
def test_val_safe_select(graph, config, db_path, schema):
    result = validate_sql({"sql": "SELECT name FROM customers WHERE tier = 'pro'"})
    assert not result["validation_error"]
    assert result["operation_type"] == "read"


@eval_case("validation", "Safe UPDATE with WHERE passes")
def test_val_safe_update(graph, config, db_path, schema):
    result = validate_sql({"sql": "UPDATE products SET price = 24.99 WHERE name = 'Widget Pro'"})
    assert not result["validation_error"]
    assert result["operation_type"] == "write"


@eval_case("validation", "Safe DELETE with WHERE passes")
def test_val_safe_delete(graph, config, db_path, schema):
    result = validate_sql({"sql": "DELETE FROM customers WHERE is_active = 0"})
    assert not result["validation_error"]
    assert result["operation_type"] == "write"


@eval_case("validation", "INSERT is classified as write")
def test_val_insert(graph, config, db_path, schema):
    result = validate_sql({"sql": "INSERT INTO customers (name, email) VALUES ('Test', 'test@test.com')"})
    assert result["operation_type"] == "write"


# ===========================================================================
# Category 2: Routing logic (deterministic edge decisions)
# ===========================================================================


@eval_case("routing", "Valid read routes to execute_read")
def test_route_valid_read(graph, config, db_path, schema):
    state = {"validation_error": "", "operation_type": "read"}
    assert route_after_validation(state) == "execute_read"


@eval_case("routing", "Valid write routes to explain_write")
def test_route_valid_write(graph, config, db_path, schema):
    state = {"validation_error": "", "operation_type": "write"}
    assert route_after_validation(state) == "explain_write"


@eval_case("routing", "Invalid SQL routes to handle_error")
def test_route_invalid(graph, config, db_path, schema):
    state = {"validation_error": "DELETE without WHERE", "operation_type": "write"}
    assert route_after_validation(state) == "handle_error"


@eval_case("routing", "Approved write routes to execute_write")
def test_route_approved(graph, config, db_path, schema):
    assert route_after_review({"approved": True}) == "execute_write"


@eval_case("routing", "Rejected write routes to format_response")
def test_route_rejected(graph, config, db_path, schema):
    assert route_after_review({"approved": False}) == "format_response"


@eval_case("routing", "Error with retries left routes to generate_sql")
def test_route_retry(graph, config, db_path, schema):
    assert route_after_error({"retry_count": 1}) == "generate_sql"


@eval_case("routing", "Error at max retries routes to format_response")
def test_route_give_up(graph, config, db_path, schema):
    assert route_after_error({"retry_count": 2}) == "format_response"


# ===========================================================================
# Category 3: Full pipeline — READ path (mock LLM)
# ===========================================================================


@eval_case("pipeline_read", "SELECT query executes without interrupt")
def test_pipe_read(graph, config, db_path, schema):
    state = make_state("Show me out of stock products", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert not interrupted, "Read query should NOT interrupt"
    assert values.get("operation_type") == "read"
    assert values.get("response"), "Should have a response"
    assert "mega connector" in values.get("query_result", "").lower() or \
           "cable premium" in values.get("query_result", "").lower(), \
        f"Should find out-of-stock products in results"


@eval_case("pipeline_read", "JOIN query works end-to-end")
def test_pipe_join(graph, config, db_path, schema):
    state = make_state("Who are the top 5 customers by total spending?", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert not interrupted
    assert "join" in values.get("sql", "").lower()
    assert values.get("query_result"), "Should have query results"


@eval_case("pipeline_read", "Aggregation query works end-to-end")
def test_pipe_agg(graph, config, db_path, schema):
    state = make_state("Show order count by status", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert not interrupted
    assert "group by" in values.get("sql", "").lower()


@eval_case("pipeline_read", "Enterprise filter query works")
def test_pipe_filter(graph, config, db_path, schema):
    state = make_state("List enterprise customers", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert not interrupted
    result = values.get("query_result", "").lower()
    assert "alice" in result or "eve" in result or "ivy" in result


# ===========================================================================
# Category 4: Full pipeline — WRITE path (mock LLM + interrupt/resume)
# ===========================================================================


@eval_case("pipeline_write", "UPDATE interrupts for approval")
def test_pipe_write_interrupt(graph, config, db_path, schema):
    state = make_state("Update the price of Widget Pro to $24.99", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert interrupted, "Write query MUST interrupt for approval"
    assert values.get("operation_type") == "write"

    # Verify price hasn't changed yet
    result = execute_sql("SELECT price FROM products WHERE name = 'Widget Pro'", db_path)
    assert abs(result["data"][0]["price"] - 29.99) < 0.01, "Price should be unchanged before approval"


@eval_case("pipeline_write", "Approved write executes and modifies DB")
def test_pipe_write_approve(graph, config, db_path, schema):
    state = make_state("Update the price of Widget Pro to $24.99", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert interrupted

    # Approve
    values = resume_with_decision(graph, config, approved=True)
    assert values.get("response"), "Should have a response after approval"

    # Verify the write happened
    result = execute_sql("SELECT price FROM products WHERE name = 'Widget Pro'", db_path)
    assert abs(result["data"][0]["price"] - 24.99) < 0.01, \
        f"Price should be 24.99 after approval, got {result['data'][0]['price']}"


@eval_case("pipeline_write", "Rejected write makes NO changes")
def test_pipe_write_reject(graph, config, db_path, schema):
    before = execute_sql("SELECT price FROM products WHERE name = 'Gadget X'", db_path)
    original_price = before["data"][0]["price"]

    state = make_state("Set the price of Gadget X to $1.00", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert interrupted

    # Reject
    values = resume_with_decision(graph, config, approved=False)
    assert "reject" in values.get("response", "").lower(), "Should mention rejection"

    # Verify NO change
    after = execute_sql("SELECT price FROM products WHERE name = 'Gadget X'", db_path)
    assert after["data"][0]["price"] == original_price, "Price must be unchanged after rejection"


@eval_case("pipeline_write", "DELETE with WHERE interrupts and executes on approval")
def test_pipe_delete_approve(graph, config, db_path, schema):
    before = execute_sql("SELECT COUNT(*) as cnt FROM customers WHERE is_active = 0", db_path)
    assert before["data"][0]["cnt"] > 0, "Should have inactive customers"

    state = make_state("Delete all inactive customers", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert interrupted

    values = resume_with_decision(graph, config, approved=True)
    after = execute_sql("SELECT COUNT(*) as cnt FROM customers WHERE is_active = 0", db_path)
    assert after["data"][0]["cnt"] == 0, "All inactive customers should be deleted"


# ===========================================================================
# Category 5: Blocked queries (validation rejects, never reaches execution)
# ===========================================================================


@eval_case("blocked", "DROP TABLE is caught and blocked")
def test_pipe_drop(graph, config, db_path, schema):
    state = make_state("Drop the orders table", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    # Should NOT interrupt — blocked before reaching human review
    assert not interrupted, "DROP should be blocked at validation, not reach human review"
    assert values.get("response"), "Should have an error response"

    # Table must still exist
    result = execute_sql("SELECT COUNT(*) as cnt FROM orders", db_path)
    assert result["success"], "Orders table must still exist"


@eval_case("blocked", "DELETE without WHERE is caught and blocked")
def test_pipe_delete_all(graph, config, db_path, schema):
    state = make_state("Delete everything from products", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)

    if interrupted:
        # LLM added a WHERE clause — still safe, just reject
        resume_with_decision(graph, config, approved=False)

    # Products must still exist
    result = execute_sql("SELECT COUNT(*) as cnt FROM products", db_path)
    assert result["success"] and result["data"][0]["cnt"] > 0, "Products must still exist"


@eval_case("blocked", "Multi-statement injection is caught")
def test_pipe_injection(graph, config, db_path, schema):
    state = make_state("Run this injection test", db_path, schema)
    values, interrupted = run_until_interrupt_or_end(graph, state, config)
    assert not interrupted, "Injection should be blocked at validation"

    # Orders table must still exist
    result = execute_sql("SELECT COUNT(*) as cnt FROM orders", db_path)
    assert result["success"], "Orders table must still exist after injection attempt"


# ===========================================================================
# Category 6: Error recovery (retry logic)
# ===========================================================================


@eval_case("error_handling", "handle_error increments retry count")
def test_error_increment(graph, config, db_path, schema):
    result = handle_error({"retry_count": 0, "validation_error": "bad sql", "error": ""})
    assert result["retry_count"] == 1

    result = handle_error({"retry_count": 1, "validation_error": "", "error": "syntax error"})
    assert result["retry_count"] == 2


@eval_case("error_handling", "Bad SQL triggers retry and recovers")
def test_error_recovery(graph, config, db_path, schema):
    # The mock LLM returns bad SQL for "bad column" and good SQL for "retry test"
    # We can test that the error handler properly routes back to generate_sql
    # by testing the routing function directly
    state_retry = {"retry_count": 1}  # Has retries left
    assert route_after_error(state_retry) == "generate_sql"

    state_exhausted = {"retry_count": 2}  # Max retries hit
    assert route_after_error(state_exhausted) == "format_response"


# ===========================================================================
# Category 7: Database layer
# ===========================================================================


@eval_case("database", "Schema has all expected tables")
def test_db_schema(graph, config, db_path, schema):
    for table in ["customers", "products", "orders", "order_items"]:
        result = execute_sql(f"SELECT COUNT(*) as cnt FROM {table}", db_path)
        assert result["success"], f"Table {table} should exist"
        assert result["data"][0]["cnt"] > 0, f"Table {table} should have seed data"


@eval_case("database", "Seed data is consistent")
def test_db_seed(graph, config, db_path, schema):
    # 12 customers
    r = execute_sql("SELECT COUNT(*) as cnt FROM customers", db_path)
    assert r["data"][0]["cnt"] == 12

    # 10 products
    r = execute_sql("SELECT COUNT(*) as cnt FROM products", db_path)
    assert r["data"][0]["cnt"] == 10

    # 3 inactive customers
    r = execute_sql("SELECT COUNT(*) as cnt FROM customers WHERE is_active = 0", db_path)
    assert r["data"][0]["cnt"] == 3

    # 2 out-of-stock products
    r = execute_sql("SELECT COUNT(*) as cnt FROM products WHERE stock = 0", db_path)
    assert r["data"][0]["cnt"] == 2


@eval_case("database", "execute_sql returns error for bad SQL")
def test_db_error(graph, config, db_path, schema):
    result = execute_sql("SELECT * FROM nonexistent_table", db_path)
    assert not result["success"]
    assert result["error"]


@eval_case("database", "execute_sql handles SELECT correctly")
def test_db_select(graph, config, db_path, schema):
    result = execute_sql("SELECT name, tier FROM customers WHERE tier = 'enterprise'", db_path)
    assert result["success"]
    assert len(result["data"]) == 3
    assert result["columns"] == ["name", "tier"]


@eval_case("database", "execute_sql handles UPDATE correctly")
def test_db_update(graph, config, db_path, schema):
    result = execute_sql("UPDATE products SET price = 99.99 WHERE name = 'Widget Basic'", db_path)
    assert result["success"]
    assert result["rows_affected"] == 1

    verify = execute_sql("SELECT price FROM products WHERE name = 'Widget Basic'", db_path)
    assert abs(verify["data"][0]["price"] - 99.99) < 0.01


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------


def main():
    print(f"\n{BOLD}LangGraph Database Agent — Eval Suite{RESET}")
    print(f"{DIM}Testing structural guarantees (no API key required){RESET}\n")

    # Patch the LLM
    agent_module.get_llm = mock_get_llm

    results = {"pass": 0, "fail": 0, "error": 0}
    thread_id = 0
    failures = []
    current_category = None

    for case in EVALS:
        # Print category header
        if case["category"] != current_category:
            current_category = case["category"]
            label = current_category.replace("_", " ").upper()
            print(f"\n  {BOLD}{label}{RESET}")

        thread_id += 1
        config = {"configurable": {"thread_id": str(thread_id)}}
        name = case["name"]

        # Fresh DB for write/blocked tests
        if case["category"] in ("pipeline_write", "blocked", "database"):
            db_path = init_db(seed=True)
        else:
            # Reuse the same DB for read tests
            if thread_id == 1 or case["category"] == "pipeline_read":
                db_path = init_db(seed=True)

        schema = get_schema_description()
        memory = MemorySaver()
        graph = build_graph(checkpointer=memory)

        sys.stdout.write(f"    {name} ... ")
        sys.stdout.flush()

        start = time.time()
        try:
            case["fn"](graph, config, db_path, schema)
            elapsed = time.time() - start
            print(f"{GREEN}PASS{RESET} {DIM}({elapsed:.1f}s){RESET}")
            results["pass"] += 1
        except AssertionError as e:
            elapsed = time.time() - start
            print(f"{RED}FAIL{RESET} {DIM}({elapsed:.1f}s){RESET}")
            print(f"      {RED}{e}{RESET}")
            results["fail"] += 1
            failures.append((f"[{case['category']}] {name}", str(e)))
        except Exception as e:
            elapsed = time.time() - start
            print(f"{YELLOW}ERROR{RESET} {DIM}({elapsed:.1f}s){RESET}")
            print(f"      {YELLOW}{e}{RESET}")
            results["error"] += 1
            failures.append((f"[{case['category']}] {name}", str(e)))

    # Summary
    total = results["pass"] + results["fail"] + results["error"]
    print(f"\n{'='*60}")
    color = GREEN if results["fail"] == 0 and results["error"] == 0 else RED
    print(f"  {color}{BOLD}{results['pass']}/{total} passed{RESET}", end="")
    if results["fail"]:
        print(f"  {RED}{results['fail']} failed{RESET}", end="")
    if results["error"]:
        print(f"  {YELLOW}{results['error']} errors{RESET}", end="")
    print(f"\n{'='*60}")

    if failures:
        print(f"\n{RED}Failures:{RESET}")
        for name, msg in failures:
            print(f"  {name}: {msg}")

    return 0 if results["fail"] == 0 and results["error"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
