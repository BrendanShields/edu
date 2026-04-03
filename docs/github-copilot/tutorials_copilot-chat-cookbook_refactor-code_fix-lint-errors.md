Fixing lint errors - GitHub Docs

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

# Fixing lint errors

Copilot Chat can suggest ways to fix issues identified by a code linter.

Copy as Markdown

## In this article

It's good practice to use a linter to check your code for potential errors, style violations, or deviations from best practices. Linters can help you to catch bugs early, improve the readability of your code, and ensure that your code is consistent and maintainable.

## [Example scenario](#example-scenario)

You have run a linter on your code and it has identified some issues that need to be fixed. Rather than fixing these manually, you can ask Copilot Chat to fix them for you.

## [Example prompts](#example-prompts)

-   Select all of the code in the editor, then type:
    
    Copilot prompt
    
    Fix the lint errors
    
    ```copilot
    Fix the lint errors
    ```
    
-   You can specify a particular set of coding guidelines for a language, such as PEP8 for Python:
    
    Copilot prompt
    
    Use PEP8 to fix the lint errors
    
    ```copilot
    Use PEP8 to fix the lint errors
    ```
    
-   If you have a local file that defines your coding conventions and rules, you can drag the file into the chat window to add it as an attachment, then type:
    
    Copilot prompt
    
    Use the attached style guide to fix the lint errors
    
    ```copilot
    Use the attached style guide to fix the lint errors
    ```
    
-   Alternatively, you can ask Copilot Chat to fix only a specific type of lint error:
    
    Copilot prompt
    
    Make sure all functions use snake\_case naming style
    
    ```copilot
    Make sure all functions use snake_case naming style
    ```
    

## [Example response](#example-response)

Copilot tells you what needs to be changed, and then gives you the corrected code. You should review the suggested code thoroughly before using it. The code that Copilot suggests may not fix all of the issues identified by your linter, so you should always run the linter again if you choose to use the suggested code.

Linting issues that Copilot can help you fix include:

-   Adding necessary imports that are missing.
-   Removing imports that are not used in the code.
-   Splitting import statements into separate lines.
-   Using method and function names that follow style guidelines.
-   Adding spaces around operators.
-   Ensuring consistent indentation.
-   Removing trailing whitespace.
-   Splitting multiple statements that are on a single line into separate lines.
-   Breaking long line into multiple lines.
-   Removing unused variables.
-   Adding or removing blank lines to adhere to style guidelines.
-   Adding docstrings to functions, classes, and modules.
-   Removing code that will never be executed.
-   Ensuring that all return statements in a function either return a value or none.
-   Reducing or eliminating the use of global variables.
-   Ensuring that functions are called with the correct number and type of arguments.
-   Ensuring that comments are placed correctly and are meaningful.
-   Replacing print statements with proper logging.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)