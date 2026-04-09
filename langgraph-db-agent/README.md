# LangGraph Database Agent — When Deterministic Agents Win

A text-to-SQL agent that demonstrates **why graph-based control flow matters** for database operations.

## The Problem

When you give an LLM free rein over a database (e.g., a ReAct agent with SQL tools), it *decides* what to do next at every step. That means:

- It might **skip validation** and execute `DELETE FROM orders` without a WHERE clause
- It might **skip confirmation** and run a destructive UPDATE without asking
- It might **retry forever** when a query fails, burning tokens
- The execution path is **non-deterministic** — you can't audit or guarantee the safety pipeline ran

For most use cases, this is fine. For databases, it's unacceptable. You can't undo a dropped table.

## The Solution: Structural Guarantees

This agent uses **LangGraph** to enforce a fixed pipeline. The LLM is used for what it's good at — understanding intent, generating SQL, explaining results — but the **control flow is deterministic**:

```
                    ┌─────────────────────── retry (max 2) ──────────┐
                    │                                                │
START → generate_sql → validate_sql ─┬─ [read]  → execute → respond → END
                                     │
                                     ├─ [write] → explain → human_review
                                     │                        ├─ [yes] → execute → respond → END
                                     │                        └─ [no]  → respond → END
                                     │
                                     └─ [invalid] → error_handler ─┬─ retry
                                                                   └─ give up → END
```

### What's deterministic (not left to LLM judgment):

| Check | Implementation | Why not LLM? |
|-------|---------------|---------------|
| `DROP TABLE` blocked | Regex on SQL | LLM might comply with cleverly-worded requests |
| `DELETE` requires `WHERE` | Regex on SQL | LLM might generate `DELETE FROM users` for "remove old users" |
| Multi-statement blocked | Semicolon detection | Prevents injection via `; DROP TABLE` |
| Writes require approval | Graph edge → interrupt | LLM can't skip this node — it's structural |
| Retries bounded to 2 | Counter in state | No infinite retry loops |

### What the LLM handles (where intelligence is needed):

- Converting natural language → SQL
- Explaining what a write operation will do
- Formatting query results into readable summaries
- Incorporating error context on retries

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Set your API key (Anthropic or OpenAI)
export ANTHROPIC_API_KEY=sk-ant-...
# OR
export OPENAI_API_KEY=sk-...

# Run the interactive demo
python main.py
```

## Example Queries

**Read path** (executes automatically):
- "Who are our top 5 customers by total spending?"
- "Show me products that are out of stock"
- "How many orders were cancelled?"

**Write path** (requires your approval):
- "Update the price of Widget Pro to $24.99"
- "Delete all inactive customers"

**Blocked by validation** (deterministic rejection):
- "Drop the orders table"
- "Delete everything from customers"

## Project Structure

```
├── agent.py    # Graph definition, nodes, state, routing
├── db.py       # SQLite schema, seed data, query execution
├── main.py     # Interactive CLI with interrupt handling
└── README.md
```

## Key Takeaway

Use LLMs for intelligence. Use graphs for control flow.

A free-form agent is great when the stakes are low and flexibility matters. But when operations are **irreversible**, **affect shared state**, or **require audit trails** — databases, payment systems, infrastructure — you want the control flow to be a **structural guarantee**, not a probabilistic hope.
