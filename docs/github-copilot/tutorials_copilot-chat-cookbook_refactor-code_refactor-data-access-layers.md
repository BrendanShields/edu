Refactoring data access layers - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Refactoring data access layers

Copilot Chat can suggest ways to decouple your data access code from your business logic, making an application easier to maintain and scale.

Copy as Markdown

## In this article

Hardcoded SQL queries and tightly coupled data access code can make it difficult to scale or switch databases, and they often lead to repeated logic.

Copilot Chat can recommend implementing a repository pattern or data access layer that abstracts database interactions, making the code more modular and reducing redundancy. It can also help refactor SQL queries into optimized versions, improving performance and maintainability.

Note

The responses described in this article are examples. Copilot Chat responses are non-deterministic, so you may get different responses from the ones shown here.

## [Example scenario](#example-scenario)

This Python code connects to a SQLite database, retrieves a user record, and returns the user data. However, it fails to abstract the database connection logic and uses a hardcoded query that's vulnerable to SQL injection.

```python
import sqlite3

def get_user_by_id(user_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT display_name FROM users WHERE id = {user_id}")
    user = cursor.fetchone()
    conn.close()
    return user
```

## [Example prompt 1](#example-prompt-1)

You can start by asking Copilot a general question about how to improve the code.

Copilot prompt[](https://github.com/copilot?prompt=import%20sqlite3%0A%0Adef%20get_user_by_id\(user_id\)%3A%0A%20%20%20%20conn%20%3D%20sqlite3.connect\('database.db'\)%0A%20%20%20%20cursor%20%3D%20conn.cursor\(\)%0A%20%20%20%20cursor.execute\(f%22SELECT%20display_name%20FROM%20users%20WHERE%20id%20%3D%20%7Buser_id%7D%22\)%0A%20%20%20%20user%20%3D%20cursor.fetchone\(\)%0A%20%20%20%20conn.close\(\)%0A%20%20%20%20return%20user%0A%0AHow%20can%20I%20improve%20this%20code%20to%20make%20it%20safe%20and%20easier%20to%20update%20and%20expand%3F%20List%20possible%20improvements%20but%20don't%20show%20revised%20code.)

How can I improve this code to make it safe and easier to update and expand? List possible improvements but don't show revised code.

import sqlite3

def get\_user\_by\_id(user\_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT display\_name FROM users WHERE id = {user\_id}")
    user = cursor.fetchone()
    conn.close()
    return user

How can I improve this code to make it safe and easier to update and expand? List possible improvements but don't show revised code.

```copilot
How can I improve this code to make it safe and easier to update and expand? List possible improvements but don't show revised code.
```

## [Example response 1](#example-response-1)

Copilot makes several suggestions for improving the code:

-   Abstract the database connection details.
-   Use parameterized queries to prevent SQL injection.
-   Use a context manager to ensure that the database connection is properly closed if an error occurs.
-   Add error handling.

## [Example prompt 2](#example-prompt-2)

You can use the response to your first prompt to write a more specific prompt.

Copilot prompt[](https://github.com/copilot?prompt=import%20sqlite3%0A%0Adef%20get_user_by_id\(user_id\)%3A%0A%20%20%20%20conn%20%3D%20sqlite3.connect\('database.db'\)%0A%20%20%20%20cursor%20%3D%20conn.cursor\(\)%0A%20%20%20%20cursor.execute\(f%22SELECT%20display_name%20FROM%20users%20WHERE%20id%20%3D%20%7Buser_id%7D%22\)%0A%20%20%20%20user%20%3D%20cursor.fetchone\(\)%0A%20%20%20%20conn.close\(\)%0A%20%20%20%20return%20user%0A%0ARewrite%20this%20code%20to%20make%20it%20more%20scalable%20and%20easier%20to%20maintain.%20Use%20a%20context%20manager.%20Avoid%20hardcoded%20SQL%20queries%20and%20tightly%20coupled%20data%20access%20code.%20Instead%2C%20use%20a%20repository%20pattern%20to%20abstract%20database%20interactions%20and%20make%20the%20code%20more%20modular%20and%20reusable.%20Where%20possible%20optimize%20the%20code%20to%20improve%20performance.%20Include%20error%20trapping%2C%20and%20make%20sure%20the%20code%20is%20not%20vulnerable%20to%20SQL%20injection.)

Rewrite this code to make it more scalable and easier to maintain. Use a context manager. Avoid hardcoded SQL queries and tightly coupled data access code. Instead, use a repository pattern to abstract database interactions and make the code more modular and reusable. Where possible optimize the code to improve performance. Include error trapping, and make sure the code is not vulnerable to SQL injection.

import sqlite3

def get\_user\_by\_id(user\_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT display\_name FROM users WHERE id = {user\_id}")
    user = cursor.fetchone()
    conn.close()
    return user

Rewrite this code to make it more scalable and easier to maintain. Use a context manager. Avoid hardcoded SQL queries and tightly coupled data access code. Instead, use a repository pattern to abstract database interactions and make the code more modular and reusable. Where possible optimize the code to improve performance. Include error trapping, and make sure the code is not vulnerable to SQL injection.

```copilot
Rewrite this code to make it more scalable and easier to maintain. Use a context manager. Avoid hardcoded SQL queries and tightly coupled data access code. Instead, use a repository pattern to abstract database interactions and make the code more modular and reusable. Where possible optimize the code to improve performance. Include error trapping, and make sure the code is not vulnerable to SQL injection.
```

## [Example response 2](#example-response-2)

Copilot suggests splitting the code into separate files, each with a specific purpose. It also provides example code for returning a user's details.

The suggested changes implement a repository pattern and use parameterized queries to avoid SQL injection.

```python
# database.py
import sqlite3

class Database:
    def __init__(self, db_path):
        self.db_path = db_path

    def __enter__(self):
        self.conn = sqlite3.connect(self.db_path)
        self.cursor = self.conn.cursor()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type or exc_val or exc_tb:
            self.conn.rollback()
        else:
            self.conn.commit()
        self.conn.close()

# user_repository.py
class UserRepository:
    def __init__(self, db):
        self.db = db

    def get_user_by_id(self, user_id):
        try:
            self.db.cursor.execute("SELECT display_name FROM users WHERE id = ?", (user_id,))
            user = self.db.cursor.fetchone()
            return user
        except sqlite3.Error as e:
            print(f"An error occurred: {e}")
            return None

# main.py
from database import Database
from user_repository import UserRepository

def get_user_by_id(user_id):
    with Database('database.db') as db:
        user_repo = UserRepository(db)
        return user_repo.get_user_by_id(user_id)

# Example usage
if __name__ == "__main__":
    user = get_user_by_id(1)
    if user:
        print(user)
    else:
        print("User not found or an error occurred.")
```

The revised code improves on the original in several ways:

-   The code now implements a basic data access layer.
-   The `Database` class handles the connection to the SQLite database, implementing the context manager protocol with the `__enter__` and `__exit__` methods. This ensures that the database connection is properly managed, including committing transactions and closing the connection.
-   The `UserRepository` class encapsulates the logic for accessing user data.
-   Values for the queries are parameterized to prevent SQL injection.
-   Errors are caught, with details printed to the console.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)