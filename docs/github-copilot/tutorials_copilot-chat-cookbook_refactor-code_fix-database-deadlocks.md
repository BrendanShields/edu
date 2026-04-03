Fixing database deadlocks or data integrity issues - GitHub Docs

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

# Fixing database deadlocks or data integrity issues

Copilot Chat can help you avoid code that causes slow or blocked database operations, or tables with missing or incorrect data.

Copy as Markdown

## In this article

Complex database operations–particularly those involving transactions–can lead to deadlocks or data inconsistencies that are hard to debug.

Copilot Chat can help by identifying points in a transaction where locking or deadlocks could occur, and can suggest best practices for transaction isolation or deadlock resolution, such as adjusting locking strategies or handling deadlock exceptions gracefully.

Note

The responses shown in this article are examples. Copilot Chat responses are non-deterministic, so you may get different responses from the ones shown here.

## [Avoiding simultaneous updates on interdependent rows](#avoiding-simultaneous-updates-on-interdependent-rows)

When two or more transactions attempt to update the same rows in a database table, but in different orders, it can cause a circular wait condition.

### [Example scenario](#example-scenario)

The following SQL snippet updates one row of a table, then performs an operation that takes several seconds, then updates another row in the same table. This is problematic because the transaction locks the `id = 1` row for several seconds before the transaction completes, releasing the lock. If another transaction starts during this time that performs a similar operation, but locks the `id = 2` row first, so that it can update the row, and then attempts to lock the `id = 1` row, then both transactions will be left waiting for the other to complete, resulting in deadlock.

```sql
BEGIN TRANSACTION;
UPDATE my_table SET value = 'Some value' WHERE id = 301;
-- Simulate a process taking 5 seconds:
WAITFOR DELAY '00:00:05';
UPDATE my_table SET value = 'Another value' WHERE id = 127;
COMMIT TRANSACTION;
```

### [Example prompt 1](#example-prompt-1)

You can check whether there are any problems with this transaction.

In the editor, select the transaction code, then ask Copilot Chat:

Copilot prompt[](https://github.com/copilot?prompt=BEGIN%20TRANSACTION%3B%0AUPDATE%20my_table%20SET%20value%20%3D%20'Some%20value'%20WHERE%20id%20%3D%20301%3B%0A--%20Simulate%20a%20process%20taking%205%20seconds%3A%0AWAITFOR%20DELAY%20'00%3A00%3A05'%3B%0AUPDATE%20my_table%20SET%20value%20%3D%20'Another%20value'%20WHERE%20id%20%3D%20127%3B%0ACOMMIT%20TRANSACTION%3B%0A%0AIs%20this%20transaction%20good%3F)

Is this transaction good?

BEGIN TRANSACTION;
UPDATE my\_table SET value = 'Some value' WHERE id = 301;
-- Simulate a process taking 5 seconds:
WAITFOR DELAY '00:00:05';
UPDATE my\_table SET value = 'Another value' WHERE id = 127;
COMMIT TRANSACTION;

Is this transaction good?

```copilot
Is this transaction good?
```

### [Example response 1](#example-response-1)

Copilot tells you that "the transaction in your SQL code is generally fine," but lists some things you may want to consider: lock duration, error handling, and concurrency. It mentions that "the transaction holds locks for an extended period, potentially leading to blocking or deadlocks." The response also includes revised code that adds error handling.

In this case, you decide not to add error handling. Right now you want to address the potential for deadlocks.

### [Example prompt 2](#example-prompt-2)

Enter this follow-up prompt:

Copilot prompt[](https://github.com/copilot?prompt=BEGIN%20TRANSACTION%3B%0AUPDATE%20my_table%20SET%20value%20%3D%20'Some%20value'%20WHERE%20id%20%3D%20301%3B%0A--%20Simulate%20a%20process%20taking%205%20seconds%3A%0AWAITFOR%20DELAY%20'00%3A00%3A05'%3B%0AUPDATE%20my_table%20SET%20value%20%3D%20'Another%20value'%20WHERE%20id%20%3D%20127%3B%0ACOMMIT%20TRANSACTION%3B%0A%0AHow%20can%20I%20rewrite%20this%20code%20to%20reduce%20the%20chance%20of%20deadlock%20to%20a%20minimum%20while%20not%20adversely%20affecting%20performance.%20Tell%20me%20anything%20else%20I%20can%20do%20to%20avoid%20a%20deadlock.%20Note%3A%20I%20don't%20want%20to%20add%20error%20handling%20at%20this%20time.)

How can I rewrite this code to reduce the chance of deadlock to a minimum while not adversely affecting performance. Tell me anything else I can do to avoid a deadlock. Note: I don't want to add error handling at this time.

BEGIN TRANSACTION;
UPDATE my\_table SET value = 'Some value' WHERE id = 301;
-- Simulate a process taking 5 seconds:
WAITFOR DELAY '00:00:05';
UPDATE my\_table SET value = 'Another value' WHERE id = 127;
COMMIT TRANSACTION;

How can I rewrite this code to reduce the chance of deadlock to a minimum while not adversely affecting performance. Tell me anything else I can do to avoid a deadlock. Note: I don't want to add error handling at this time.

```copilot
How can I rewrite this code to reduce the chance of deadlock to a minimum while not adversely affecting performance. Tell me anything else I can do to avoid a deadlock. Note: I don't want to add error handling at this time.
```

### [Example response 2](#example-response-2)

Copilot gives the following advice:

> -   **Order of Access:** Ensure that all transactions access tables and rows in the same order.
> -   **Keep Transactions Short:** Minimize the time a transaction holds locks.
> -   **Use Appropriate Isolation Levels:** Use the lowest isolation level that meets your requirements.
> 
> Here is a revised version of your code:

```sql
BEGIN TRANSACTION;
-- Update the rows in a consistent order
UPDATE my_table SET value = 'Another value' WHERE id = 127;
UPDATE my_table SET value = 'Some value' WHERE id = 301;
-- Simulate a process taking 5 seconds:
WAITFOR DELAY '00:00:05';
COMMIT TRANSACTION;
```

## [Avoiding non-index searches](#avoiding-non-index-searches)

Searching table columns that have not been indexed will typically result in a full table scan. This can be very slow and resource-intensive, increasing the likelihood of performance bottlenecks.

### [Example scenario](#example-scenario-1)

The following SQL will result in a full table scan if `some_column` is not indexed:

```sql
BEGIN TRANSACTION;
SELECT * FROM my_table WHERE some_column = 'some_value';
-- More actions here, then:
COMMIT TRANSACTION;
```

### [Example prompt](#example-prompt)

Asking Copilot the following question will usually reveal the potential problem.

Copilot prompt[](https://github.com/copilot?prompt=BEGIN%20TRANSACTION%3B%0ASELECT%20*%20FROM%20my_table%20WHERE%20some_column%20%3D%20'some_value'%3B%0A--%20More%20actions%20here%2C%20then%3A%0ACOMMIT%20TRANSACTION%3B%0A%0AHow%20can%20I%20optimize%20this%20transaction%3F)

How can I optimize this transaction?

BEGIN TRANSACTION;
SELECT \* FROM my\_table WHERE some\_column = 'some\_value';
-- More actions here, then:
COMMIT TRANSACTION;

How can I optimize this transaction?

```copilot
How can I optimize this transaction?
```

### [Example response](#example-response)

Copilot gives some advice, and mentions that the column should be indexed:

> To optimize the transaction, you should ensure that the transaction is as short as possible to reduce locking and improve performance. Here are a few tips:
> 
> 1.  **Minimize the work done in the transaction:** Only include the necessary operations within the transaction.
> 2.  **Use appropriate indexes:** Ensure that the columns used in the WHERE clause are indexed.
> 3.  **Avoid long-running transactions:** Keep the transaction duration short to avoid locking issues.

The suggested code in the response includes the SQL command for indexing the column:

```sql
`CREATE INDEX idx_some_column ON my_table(some_column);`
```

## [Avoiding long-running transactions](#avoiding-long-running-transactions)

It's important to avoid long-running queries and transactions, where possible, as these can severely degrade performance and cause bottlenecks for other operations. Additionally, they can consume significant memory and log space, making your application more prone to failure in high-load environments.

### [Example scenario](#example-scenario-2)

The following SQL creates new rows in `target_table`, containing data from selected fields of rows in `source_table` where various conditions are met. If `source_table` is extremely large this may result in a long-running transaction.

```sql
BEGIN TRANSACTION;

INSERT INTO target_table (first_name, last_name, email, dept, role, hire_date)
SELECT first_name, last_name, email, department, job_title, start_date
FROM source_table
WHERE (department = 'Engineering' AND (salary > 95000 OR grade > 5))
  OR (department = 'Marketing' AND performance_rating = 'Excellent');

COMMIT;
```

### [Example prompt](#example-prompt-3)

You can ask Copilot whether it's possible to avoid long-running transactions.

Copilot prompt[](https://github.com/copilot?prompt=BEGIN%20TRANSACTION%3B%0A%0AINSERT%20INTO%20target_table%20\(first_name%2C%20last_name%2C%20email%2C%20dept%2C%20role%2C%20hire_date\)%0ASELECT%20first_name%2C%20last_name%2C%20email%2C%20department%2C%20job_title%2C%20start_date%0AFROM%20source_table%0AWHERE%20\(department%20%3D%20'Engineering'%20AND%20\(salary%20%3E%2095000%20OR%20grade%20%3E%205\)\)%0A%20%20OR%20\(department%20%3D%20'Marketing'%20AND%20performance_rating%20%3D%20'Excellent'\)%3B%0A%0ACOMMIT%3B%0A%0Asource_table%20is%20an%20extremely%20large%20table.%20Without%20altering%20the%20table%2C%20how%20can%20I%20ensure%20this%20SQL%20doesn't%20become%20a%20long-running%20query%2C%20that%20blocks%20other%20operations%3F)

source\_table is an extremely large table. Without altering the table, how can I ensure this SQL doesn't become a long-running query, that blocks other operations?

BEGIN TRANSACTION;

INSERT INTO target\_table (first\_name, last\_name, email, dept, role, hire\_date)
SELECT first\_name, last\_name, email, department, job\_title, start\_date
FROM source\_table
WHERE (department = 'Engineering' AND (salary > 95000 OR grade > 5))
  OR (department = 'Marketing' AND performance\_rating = 'Excellent');

COMMIT;

source\_table is an extremely large table. Without altering the table, how can I ensure this SQL doesn't become a long-running query, that blocks other operations?

```copilot
source_table is an extremely large table. Without altering the table, how can I ensure this SQL doesn't become a long-running query, that blocks other operations?
```

### [Example response](#example-response-3)

Copilot suggests the following strategies:

-   **Batch Processing:** Process the data in smaller batches instead of a single large transaction. This can be done using a loop with a limit and offset.
-   **Indexing:** Ensure that the columns used in the `WHERE` clause (`department`, `salary`, `grade`, and `performance_rating`) are indexed to speed up the query.
-   **Locking:** Use row-level locking to avoid locking the entire table.

It supplies the following example of how you can implement batch processing. This SQL processes the data in batches of 1000 rows at a time, reducing the load on the database and preventing long-running transactions.

```sql
DECLARE @BatchSize INT = 1000;
DECLARE @Offset INT = 0;
DECLARE @RowCount INT;

SET @RowCount = @BatchSize;

WHILE @RowCount = @BatchSize
BEGIN
    BEGIN TRANSACTION;

    INSERT INTO target_table (first_name, last_name, email, dept, role, hire_date)
    SELECT first_name, last_name, email, department, job_title, start_date
    FROM source_table
    WHERE (department = 'Engineering' AND salary > 95000)
       OR (department = 'Engineering' AND years_of_experience > 5)
       OR (department = 'Marketing' AND performance_rating = 'Excellent');
    ORDER BY primary_key_column
    OFFSET @Offset ROWS FETCH NEXT @BatchSize ROWS ONLY;

    SET @RowCount = @@ROWCOUNT;
    SET @Offset = @Offset + @BatchSize;

    COMMIT;
END;
```

Copilot tells you to replace `primary_key_column` in the suggested code with the name of the actual primary key column of `source_table`.

## [Avoiding data integrity issues](#avoiding-data-integrity-issues)

It's important that the information in your databases remains accurate, consistent, and complete. Poorly designed queries can result in missing or incorrect data.

### [Example scenario](#example-scenario-3)

The following SQL transaction deletes an employee record and creates a deletion log. However, it's possible for the `DELETE` operation to succeed and the `INSERT` operation to fail, in which case there is no log record for the deletion.

```sql
BEGIN TRANSACTION;

DELETE FROM employees
WHERE employee_id = 101;

INSERT INTO deletion_log (employee_id, deletion_date, reason)
VALUES (101, GETDATE(), 'Voluntary Resignation');

COMMIT TRANSACTION;
```

### [Example prompt](#example-prompt-4)

Copilot prompt[](https://github.com/copilot?prompt=BEGIN%20TRANSACTION%3B%0A%0ADELETE%20FROM%20employees%0AWHERE%20employee_id%20%3D%20101%3B%0A%0AINSERT%20INTO%20deletion_log%20\(employee_id%2C%20deletion_date%2C%20reason\)%0AVALUES%20\(101%2C%20GETDATE\(\)%2C%20'Voluntary%20Resignation'\)%3B%0A%0ACOMMIT%20TRANSACTION%3B%0A%0AHow%20can%20I%20ensure%20that%20the%20DELETE%20and%20INSERT%20operations%20are%20only%20performed%20if%20both%20succeed%3F)

How can I ensure that the DELETE and INSERT operations are only performed if both succeed?

BEGIN TRANSACTION;

DELETE FROM employees
WHERE employee\_id = 101;

INSERT INTO deletion\_log (employee\_id, deletion\_date, reason)
VALUES (101, GETDATE(), 'Voluntary Resignation');

COMMIT TRANSACTION;

How can I ensure that the DELETE and INSERT operations are only performed if both succeed?

```copilot
How can I ensure that the DELETE and INSERT operations are only performed if both succeed?
```

### [Example response](#example-response-4)

Copilot tells you that you achieve this by using a transaction with error handling. It gives the following example using SQL Server's `TRY...CATCH` construct:

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    DELETE FROM employees
    WHERE employee_id = 101;

    INSERT INTO deletion_log (employee_id, deletion_date, reason)
    VALUES (101, GETDATE(), 'Voluntary Resignation');

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    -- Handle the error, e.g., log it or re-throw
    DECLARE @ErrorMessage NVARCHAR(4000);
    DECLARE @ErrorSeverity INT;
    DECLARE @ErrorState INT;

    SELECT
        @ErrorMessage = ERROR_MESSAGE(),
        @ErrorSeverity = ERROR_SEVERITY(),
        @ErrorState = ERROR_STATE();

    RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
END CATCH;
```

The suggested code ensures that if either the `DELETE` or `INSERT` operation fails, the transaction is rolled back and no changes are made to the database.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)