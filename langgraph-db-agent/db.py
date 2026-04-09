"""
E-commerce SQLite database for the LangGraph agent demo.

Creates a realistic schema with customers, products, orders, and order items.
Seeds with enough data to make queries interesting.
"""

import sqlite3
import os
from datetime import datetime, timedelta
import random

DB_PATH = os.path.join(os.path.dirname(__file__), "ecommerce.db")

SCHEMA = """
CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    tier TEXT CHECK(tier IN ('free', 'pro', 'enterprise')) DEFAULT 'free',
    created_at TEXT DEFAULT (datetime('now')),
    is_active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    status TEXT CHECK(status IN ('pending', 'shipped', 'delivered', 'cancelled')) DEFAULT 'pending',
    total REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price REAL NOT NULL
);
"""


def get_schema_description() -> str:
    """Return the database schema as a string for LLM context."""
    return """Tables:
- customers (id, name, email, tier[free/pro/enterprise], created_at, is_active[0/1])
- products (id, name, category, price, stock)
- orders (id, customer_id, status[pending/shipped/delivered/cancelled], total, created_at)
- order_items (id, order_id, product_id, quantity, unit_price)

Foreign keys: orders.customer_id -> customers.id, order_items.order_id -> orders.id, order_items.product_id -> products.id"""


def init_db(seed: bool = True) -> str:
    """Initialize the database. Returns the path to the DB file."""
    # Remove existing DB for a clean demo
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    conn.executescript(SCHEMA)

    if seed:
        _seed_data(conn)

    conn.close()
    return DB_PATH


def _seed_data(conn: sqlite3.Connection):
    """Populate the database with realistic e-commerce data."""
    random.seed(42)  # Reproducible data

    # Customers
    customers = [
        ("Alice Chen", "alice@example.com", "enterprise", "2023-01-15", 1),
        ("Bob Martinez", "bob@example.com", "pro", "2023-03-22", 1),
        ("Carol White", "carol@example.com", "free", "2023-06-10", 1),
        ("Dan Kowalski", "dan@example.com", "pro", "2023-02-28", 1),
        ("Eve Johnson", "eve@example.com", "enterprise", "2023-01-05", 1),
        ("Frank Nguyen", "frank@example.com", "free", "2023-08-14", 0),
        ("Grace Park", "grace@example.com", "pro", "2023-04-01", 1),
        ("Hank Wilson", "hank@example.com", "free", "2023-09-20", 0),
        ("Ivy Thompson", "ivy@example.com", "enterprise", "2023-05-11", 1),
        ("Jack Brown", "jack@example.com", "free", "2024-01-03", 1),
        ("Karen Liu", "karen@example.com", "pro", "2024-02-14", 1),
        ("Leo Davis", "leo@example.com", "free", "2024-03-01", 0),
    ]
    conn.executemany(
        "INSERT INTO customers (name, email, tier, created_at, is_active) VALUES (?, ?, ?, ?, ?)",
        customers,
    )

    # Products
    products = [
        ("Widget Pro", "widgets", 29.99, 150),
        ("Widget Basic", "widgets", 9.99, 500),
        ("Gadget X", "gadgets", 49.99, 75),
        ("Gadget Mini", "gadgets", 19.99, 200),
        ("Super Connector", "connectors", 14.99, 300),
        ("Mega Connector", "connectors", 39.99, 0),  # Out of stock
        ("Starter Kit", "kits", 59.99, 50),
        ("Pro Kit", "kits", 129.99, 25),
        ("Cable Standard", "accessories", 4.99, 1000),
        ("Cable Premium", "accessories", 12.99, 0),  # Out of stock
    ]
    conn.executemany(
        "INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)",
        products,
    )

    # Orders (spread across 2023-2024)
    base_date = datetime(2023, 1, 1)
    orders = []
    order_items_list = []
    order_id = 1

    for customer_id in range(1, 13):
        # Each customer gets 1-8 orders
        num_orders = random.randint(1, 8)
        for _ in range(num_orders):
            days_offset = random.randint(0, 500)
            order_date = (base_date + timedelta(days=days_offset)).strftime(
                "%Y-%m-%d %H:%M:%S"
            )
            status = random.choice(
                ["pending", "shipped", "delivered", "delivered", "delivered", "cancelled"]
            )

            # 1-4 items per order
            num_items = random.randint(1, 4)
            total = 0
            for _ in range(num_items):
                product_id = random.randint(1, 10)
                quantity = random.randint(1, 3)
                # Look up price from products list
                unit_price = products[product_id - 1][2]
                total += quantity * unit_price
                order_items_list.append((order_id, product_id, quantity, unit_price))

            orders.append((customer_id, status, round(total, 2), order_date))
            order_id += 1

    conn.executemany(
        "INSERT INTO orders (customer_id, status, total, created_at) VALUES (?, ?, ?, ?)",
        orders,
    )
    conn.executemany(
        "INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)",
        order_items_list,
    )
    conn.commit()


def execute_sql(sql: str, db_path: str = DB_PATH) -> dict:
    """
    Execute a SQL query and return results.

    Returns:
        dict with keys:
        - success: bool
        - data: list of dicts (for SELECT) or None
        - rows_affected: int (for INSERT/UPDATE/DELETE)
        - columns: list of column names (for SELECT)
        - error: str or None
    """
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    try:
        cursor.execute(sql)

        if sql.strip().upper().startswith("SELECT"):
            rows = cursor.fetchall()
            columns = [desc[0] for desc in cursor.description] if cursor.description else []
            data = [dict(row) for row in rows]
            return {
                "success": True,
                "data": data,
                "columns": columns,
                "rows_affected": 0,
                "error": None,
            }
        else:
            conn.commit()
            return {
                "success": True,
                "data": None,
                "columns": [],
                "rows_affected": cursor.rowcount,
                "error": None,
            }
    except Exception as e:
        return {
            "success": False,
            "data": None,
            "columns": [],
            "rows_affected": 0,
            "error": str(e),
        }
    finally:
        conn.close()
