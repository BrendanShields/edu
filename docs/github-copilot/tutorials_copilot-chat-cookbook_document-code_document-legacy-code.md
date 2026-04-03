Documenting legacy code - GitHub Docs

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

# Documenting legacy code

Copilot Chat can help with documenting legacy code.

Copy as Markdown

## In this article

Working with legacy code can be challenging for developers, especially when the code is complex or not well-documented. In such cases, it can be helpful to use Copilot Chat to explain unclear or complex code to other developers or to document it for future reference.

## [Example scenario](#example-scenario)

The block of COBOL below connects to a database and inserts a record. The code lacks documentation, which makes it difficult to understand what it does and how it works.

```text
IDENTIFICATION DIVISION.
PROGRAM-ID. INSERT-RECORD.

ENVIRONMENT DIVISION.

DATA DIVISION.
WORKING-STORAGE SECTION.
01  WS-STATUS-FLAGS.
    05 WS-DB-STATUS     PIC X(2).
       88 WS-SUCCESS    VALUE "00".
    05 WS-SQLCODE       PIC S9(9) COMP.
    05 WS-ERROR-MSG     PIC X(50).

LINKAGE SECTION.
01  LS-PARAMETERS.
    05 LS-PERSON-RECORD.
       10 PERSON-ID     PIC 9(6).
       10 PERSON-NAME   PIC X(50).
       10 PERSON-AGE    PIC 9(3).
    05 LS-RESULT        PIC X.
       88 SUCCESS       VALUE 'T'.
       88 FAILED        VALUE 'F'.

PROCEDURE DIVISION USING LS-PARAMETERS.
    PERFORM INSERT-AND-VALIDATE
    GOBACK
    .

INSERT-AND-VALIDATE.
    EXEC SQL
        INSERT INTO persons (id, name, age)
        VALUES (:PERSON-ID, :PERSON-NAME, :PERSON-AGE)
    END-EXEC

    IF SQLCODE = 0
        EXEC SQL COMMIT END-EXEC
        SET SUCCESS TO TRUE
    ELSE
        EXEC SQL ROLLBACK END-EXEC
        SET FAILED TO TRUE
        STRING "DB Error: " SQLCODE
            DELIMITED BY SIZE
            INTO WS-ERROR-MSG
        DISPLAY WS-ERROR-MSG
    END-IF
    .
```

## [Example prompt](#example-prompt)

We can use a simple prompt to ask Copilot Chat to add documentation to the code.

Copilot prompt[](https://github.com/copilot?prompt=IDENTIFICATION%20DIVISION.%0APROGRAM-ID.%20INSERT-RECORD.%0A%0AENVIRONMENT%20DIVISION.%0A%0ADATA%20DIVISION.%0AWORKING-STORAGE%20SECTION.%0A01%20%20WS-STATUS-FLAGS.%0A%20%20%20%2005%20WS-DB-STATUS%20%20%20%20%20PIC%20X\(2\).%0A%20%20%20%20%20%20%2088%20WS-SUCCESS%20%20%20%20VALUE%20%2200%22.%0A%20%20%20%2005%20WS-SQLCODE%20%20%20%20%20%20%20PIC%20S9\(9\)%20COMP.%0A%20%20%20%2005%20WS-ERROR-MSG%20%20%20%20%20PIC%20X\(50\).%0A%0ALINKAGE%20SECTION.%0A01%20%20LS-PARAMETERS.%0A%20%20%20%2005%20LS-PERSON-RECORD.%0A%20%20%20%20%20%20%2010%20PERSON-ID%20%20%20%20%20PIC%209\(6\).%0A%20%20%20%20%20%20%2010%20PERSON-NAME%20%20%20PIC%20X\(50\).%0A%20%20%20%20%20%20%2010%20PERSON-AGE%20%20%20%20PIC%209\(3\).%0A%20%20%20%2005%20LS-RESULT%20%20%20%20%20%20%20%20PIC%20X.%0A%20%20%20%20%20%20%2088%20SUCCESS%20%20%20%20%20%20%20VALUE%20'T'.%0A%20%20%20%20%20%20%2088%20FAILED%20%20%20%20%20%20%20%20VALUE%20'F'.%0A%0APROCEDURE%20DIVISION%20USING%20LS-PARAMETERS.%0A%20%20%20%20PERFORM%20INSERT-AND-VALIDATE%0A%20%20%20%20GOBACK%0A%20%20%20%20.%0A%0AINSERT-AND-VALIDATE.%0A%20%20%20%20EXEC%20SQL%0A%20%20%20%20%20%20%20%20INSERT%20INTO%20persons%20\(id%2C%20name%2C%20age\)%0A%20%20%20%20%20%20%20%20VALUES%20\(%3APERSON-ID%2C%20%3APERSON-NAME%2C%20%3APERSON-AGE\)%0A%20%20%20%20END-EXEC%0A%0A%20%20%20%20IF%20SQLCODE%20%3D%200%0A%20%20%20%20%20%20%20%20EXEC%20SQL%20COMMIT%20END-EXEC%0A%20%20%20%20%20%20%20%20SET%20SUCCESS%20TO%20TRUE%0A%20%20%20%20ELSE%0A%20%20%20%20%20%20%20%20EXEC%20SQL%20ROLLBACK%20END-EXEC%0A%20%20%20%20%20%20%20%20SET%20FAILED%20TO%20TRUE%0A%20%20%20%20%20%20%20%20STRING%20%22DB%20Error%3A%20%22%20SQLCODE%0A%20%20%20%20%20%20%20%20%20%20%20%20DELIMITED%20BY%20SIZE%0A%20%20%20%20%20%20%20%20%20%20%20%20INTO%20WS-ERROR-MSG%0A%20%20%20%20%20%20%20%20DISPLAY%20WS-ERROR-MSG%0A%20%20%20%20END-IF%0A%20%20%20%20.%0A%0AComment%20this%20code%20thoroughly)

Comment this code thoroughly

IDENTIFICATION DIVISION.
PROGRAM-ID. INSERT-RECORD.

ENVIRONMENT DIVISION.

DATA DIVISION.
WORKING-STORAGE SECTION.
01  WS-STATUS-FLAGS.
    05 WS-DB-STATUS     PIC X(2).
       88 WS-SUCCESS    VALUE "00".
    05 WS-SQLCODE       PIC S9(9) COMP.
    05 WS-ERROR-MSG     PIC X(50).

LINKAGE SECTION.
01  LS-PARAMETERS.
    05 LS-PERSON-RECORD.
       10 PERSON-ID     PIC 9(6).
       10 PERSON-NAME   PIC X(50).
       10 PERSON-AGE    PIC 9(3).
    05 LS-RESULT        PIC X.
       88 SUCCESS       VALUE 'T'.
       88 FAILED        VALUE 'F'.

PROCEDURE DIVISION USING LS-PARAMETERS.
    PERFORM INSERT-AND-VALIDATE
    GOBACK
    .

INSERT-AND-VALIDATE.
    EXEC SQL
        INSERT INTO persons (id, name, age)
        VALUES (:PERSON-ID, :PERSON-NAME, :PERSON-AGE)
    END-EXEC

    IF SQLCODE = 0
        EXEC SQL COMMIT END-EXEC
        SET SUCCESS TO TRUE
    ELSE
        EXEC SQL ROLLBACK END-EXEC
        SET FAILED TO TRUE
        STRING "DB Error: " SQLCODE
            DELIMITED BY SIZE
            INTO WS-ERROR-MSG
        DISPLAY WS-ERROR-MSG
    END-IF
    .

Comment this code thoroughly

```copilot
Comment this code thoroughly
```

Note

If you want the documentation generated in another format like Markdown, you can specify the desired output format in the prompt. For example: `Document this code in Markdown`.

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot will provide a text overview of the code block, and an updated version with comments explaining the logic and purpose of each section.

For example:

```text
*****************************************************************
* Program: INSERT-RECORD
* Purpose: Inserts a person record into the database with
*          transaction management and error handling
*****************************************************************
 IDENTIFICATION DIVISION.
 PROGRAM-ID. INSERT-RECORD.

 ENVIRONMENT DIVISION.

 DATA DIVISION.
 WORKING-STORAGE SECTION.
* Status flags and error handling variables
 01  WS-STATUS-FLAGS.
     05 WS-DB-STATUS     PIC X(2).              *> Database status
        88 WS-SUCCESS    VALUE "00".            *> Success flag
     05 WS-SQLCODE       PIC S9(9) COMP.        *> SQL return code
     05 WS-ERROR-MSG     PIC X(50).             *> Error message

 LINKAGE SECTION.
* Input/Output parameters
 01  LS-PARAMETERS.
     05 LS-PERSON-RECORD.
        10 PERSON-ID     PIC 9(6).              *> Person ID
        10 PERSON-NAME   PIC X(50).             *> Person name
        10 PERSON-AGE    PIC 9(3).              *> Person age
     05 LS-RESULT        PIC X.                 *> Operation result
        88 SUCCESS       VALUE 'T'.             *> Success flag
        88 FAILED        VALUE 'F'.             *> Failure flag

 PROCEDURE DIVISION USING LS-PARAMETERS.
     PERFORM INSERT-AND-VALIDATE
     GOBACK
     .

*****************************************************************
* Handles database insertion with transaction management
*****************************************************************
 INSERT-AND-VALIDATE.
     EXEC SQL
         INSERT INTO persons (id, name, age)
         VALUES (:PERSON-ID, :PERSON-NAME, :PERSON-AGE)
     END-EXEC

     IF SQLCODE = 0
         EXEC SQL COMMIT END-EXEC                *> Commit if successful
         SET SUCCESS TO TRUE
     ELSE
         EXEC SQL ROLLBACK END-EXEC              *> Rollback if failed
         SET FAILED TO TRUE
         STRING "DB Error: " SQLCODE
             DELIMITED BY SIZE
             INTO WS-ERROR-MSG
         DISPLAY WS-ERROR-MSG
     END-IF
     .
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)