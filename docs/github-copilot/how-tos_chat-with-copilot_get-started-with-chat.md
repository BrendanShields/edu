# Getting started with prompts for GitHub Copilot Chat

Get an overview of ways to use Copilot Chat.

## Tool navigation

Copy as Markdown

## In this article

You can ask Copilot Chat specific questions about your project or general software questions. You can also ask Copilot Chat to write code, fix errors, write tests, and document code.

Use the tabs above to select the environment where you are using Copilot Chat.

Some of the following example prompts use chat participants (preceded by `@`), slash commands (preceded by `/`), or chat variables (preceded by `#`). For more information on keywords in prompts, see [Asking GitHub Copilot questions in your IDE](/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt).

## [Ask general software questions](#ask-general-software-questions)

You can ask Copilot Chat general software questions. For example:

-   `tell me about nodejs web server frameworks`
-   `how can I create an Express app`
-   `@terminal how to update an npm package`

## [Ask questions about your project](#ask-questions-about-your-project)

You can ask Copilot Chat questions about your project.

-   `what sorting algorithm does this function use`
-   `@workspace how are notifications scheduled`
-   `#file:gameReducer.js #file:gameInit.js how are these files related`

To give Copilot the correct context, try some of these strategies:

-   Highlight relevant lines of code.
-   Use chat variables like `#selection`, `#file`, `#editor`, `#codebase`, or `#git`.
-   Use the `@workspace` chat participant.

## [Write code](#write-code)

You can ask Copilot to write code for you. For example:

-   `write a function to sum all numbers in a list`
-   `add error handling to this function`
-   `@workspace add form validation, similar to the newsletter page`

When Copilot returns a code block, the response includes options to copy the code, or to insert the code at your cursor, into a new file, or into the terminal.

## [Ask questions about alerts from GitHub Advanced Security features](#ask-questions-about-alerts-from-github-advanced-security-features)

You can ask Copilot about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

-   `How would I fix this alert?`
-   `How many alerts do I have on this pull request?`
-   `Which line of code is this code scanning alert referencing?`
-   `What library is affected by this Dependabot alert?`

## [Set up a new project](#set-up-a-new-project)

Use the `/new` slash command to set up a new project. For example:

-   `/new react app with typescript`
-   `/new python django web application`
-   `/new node.js express server`

Copilot will suggest a directory structure and provide a button to create the suggested files and contents. To preview a suggested file, select the file name in the suggested directory structure.

Use the `/newNotebook` slash command to set up a new Jupyter notebook. For example:

-   `/newNotebook retrieve the titanic dataset and use Seaborn to plot the data`

## [Fix, improve, and refactor code](#fix-improve-and-refactor-code)

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

-   `how would you improve this code?`
-   `translate this code to C#`
-   `add error handling to this function`

## [Write tests](#write-tests)

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

-   `/tests`
-   `/tests using the Jest framework`
-   `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

-   `Add tests for a JavaScript function that should sum a list of integers`

## [Ask questions about Visual Studio Code](#ask-questions-about-visual-studio-code)

Use the `@vscode` chat participant to ask specific questions about Visual Studio Code. For example:

-   `@vscode tell me how to debug a node.js app`
-   `@vscode how do I change my Visual Studio Code colors`
-   `@vscode how can I change key bindings`

## [Ask questions about the command line](#ask-questions-about-the-command-line)

Use the `@terminal` chat participant to ask specific questions about the command line. For example:

-   `@terminal find the largest file in the src directory`
-   `@terminal #terminalLastCommand` to explain the last command and any errors

## [Ask general software questions](#ask-general-software-questions-1)

You can ask Copilot Chat general software questions. For example:

-   `tell me about nodejs web server frameworks`
-   `how can I create an Express app`
-   `what's the process for updating an npm package`

## [Ask questions about your project](#ask-questions-about-your-project-1)

You can ask Copilot Chat questions about your project. To give Copilot the correct context, try some of these strategies:

-   Highlight relevant lines of code.
-   Open the relevant file.
-   Use `#file` to tell Copilot to reference specific files.
-   Use `#solution` to tell Copilot to reference the active file.

For example:

-   `what sorting algorithm does this function use`
-   `#file:gameReducer.js what happens when a new game is requested`

## [Write code](#write-code-1)

You can ask Copilot to write code for you. For example:

-   `write a function to sum all numbers in a list`
-   `add error handling to this function`

When Copilot returns a code block, the response includes options to copy the code, insert the code into a new file, or preview the code output.

## [Ask questions about alerts from GitHub Advanced Security features](#ask-questions-about-alerts-from-github-advanced-security-features-1)

You can ask Copilot about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

-   `How would I fix this alert?`
-   `How many alerts do I have on this pull request?`
-   `Which line of code is this code scanning alert referencing?`
-   `What library is affected by this Dependabot alert?`

## [Fix, improve, and refactor code](#fix-improve-and-refactor-code-1)

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

-   `how would you improve this code?`
-   `translate this code to C#`
-   `add error handling to this function`

## [Write tests](#write-tests-1)

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

-   `/tests`
-   `/tests using the Jest framework`
-   `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

-   `Add tests for a JavaScript function that should sum a list of integers`

## [Ask general software questions](#ask-general-software-questions-2)

You can ask Copilot Chat general software questions. For example:

-   `tell me about nodejs web server frameworks`
-   `how can I create an Express app`
-   `what's the process for updating an npm package`

## [Ask questions about your project](#ask-questions-about-your-project-2)

You can ask Copilot Chat questions about your project. To give Copilot the correct context, try some of these strategies:

-   Highlight relevant lines of code.
-   Open the relevant file.
-   Add the file as a reference. For information about how to use file references, see [Asking GitHub Copilot questions in your IDE](/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide?tool=jetbrains#file-references).
-   Use the `@project` chat participant.

For example:

-   `what sorting algorithm does this function use`
-   `how are these files related` (with references to the files in question)
-   `@project how are notifications scheduled`

## [Write code](#write-code-2)

You can ask Copilot to write code for you. For example:

-   `write a function to sum all numbers in a list`
-   `add error handling to this function`

When Copilot returns a code block, the response includes options to copy the code or to insert the code at your cursor.

## [Fix, improve, and refactor code](#fix-improve-and-refactor-code-2)

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

-   `how would you improve this code?`
-   `translate this code to C#`
-   `add error handling to this function`

## [Write tests](#write-tests-2)

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

-   `/tests`
-   `/tests using the Jest framework`
-   `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

-   `Add tests for a JavaScript function that should sum a list of integers`

Some of the example prompts require you to be in a specific context on the GitHub website. For more information on how to access those contexts, see [Asking Copilot Chat questions in different contexts](/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-in-different-contexts).

## [Ask general software questions](#ask-general-software-questions-3)

You can ask Copilot Chat general software questions. For example:

-   `tell me about nodejs web server frameworks`[](https://github.com/copilot?prompt=tell%20me%20about%20nodejs%20web%20server%20frameworks)[](https://github.com/copilot?prompt=tell%20me%20about%20nodejs%20web%20server%20frameworks)
-   `how can I create an Express app`[](https://github.com/copilot?prompt=how%20can%20I%20create%20an%20Express%20app)[](https://github.com/copilot?prompt=how%20can%20I%20create%20an%20Express%20app)
-   `what is the best way to update an npm package`[](https://github.com/copilot?prompt=what%20is%20the%20best%20way%20to%20update%20an%20npm%20package)[](https://github.com/copilot?prompt=what%20is%20the%20best%20way%20to%20update%20an%20npm%20package)

## [Ask questions about a repository](#ask-questions-about-a-repository)

You can ask Copilot Chat questions about a repository. For example:

-   `what is the purpose of this repository?`
-   `When was the most recent release?`
-   `Where is rate limiting implemented in our API?`
-   `What was the last merged PR by USERNAME`

## [Ask questions about a specific file or symbol](#ask-questions-about-a-specific-file-or-symbol)

You can ask Copilot Chat questions about a specific file or symbol. For example:

-   `what sorting algorithm does this function use`
-   `how are these files related`
-   `what is the purpose of this function`

## [Ask questions about a specific piece of code](#ask-questions-about-a-specific-piece-of-code)

You can ask Copilot Chat questions about a specific piece of code. You might ask a question about a whole file, or a specific line. For example:

If you are asking about a whole file, you could enter:

-   `Explain this file.`
-   `How could I improve this code?`
-   `How can I test this script?`

If you are asking about specific lines, you could enter:

-   `Explain the function at the selected lines.`
-   `How could I improve this class?`
-   `Add error handling to this code.`
-   `Write a unit test for this method.`

## [Ask questions about alerts from GitHub Advanced Security products](#ask-questions-about-alerts-from-github-advanced-security-products)

You can ask Copilot Chat questions about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

-   `How would I fix this alert?`
-   `How many alerts do I have on this pull request?`
-   `Which line of code is this code scanning alert referencing?`
-   `What library is affected by this Dependabot alert?`

## [Ask Copilot Chat questions in a pull request](#ask-copilot-chat-questions-in-a-pull-request)

You can ask Copilot Chat questions in a pull request. Your question could relate to various elements of the pull request For example:

You might ask for a summary of the changes in the pull request:

-   `Summarize this PR for me.`
-   `Summarize the comments in this PR.`
-   `Summarize the changes in this PR.`

You might ask about the changes in a specific file in the pull request:

-   `What's the purpose of this file?`
-   `Why has this module been included?`

You might ask about the changes in a specific line in the pull request:

-   `What is "actorData" in this line?`
-   `Explain this "do..end" block.`

You might ask why a workflow failed:

-   `Tell me why this job failed`
-   `Suggest a fix for this error`

## [Ask Copilot Chat questions about a specific issue or discussion](#ask-copilot-chat-questions-about-a-specific-issue-or-discussion)

You can ask Copilot Chat questions about a specific issue or discussion. For example:

-   `what is the purpose of this issue?`

## [Ask Copilot Chat questions about a specific commit](#ask-copilot-chat-questions-about-a-specific-commit)

You can ask Copilot Chat questions about a specific commit. For example:

-   `what is the purpose of this commit?`
-   `what is the expected output of this commit?`
-   `what is the best way to test this commit?`

## [Ask general software questions](#ask-general-software-questions-4)

You can ask Copilot Chat general software questions. For example:

-   `tell me about nodejs web server frameworks`
-   `how can I create an Express app`
-   `what's the process for updating an npm package`

## [Ask questions about files your project](#ask-questions-about-files-your-project)

You can ask Copilot Chat questions about the file that's currently displayed in the editor, or about files you have attached to your conversation in the Copilot Chat panel. To give Copilot the correct context:

-   Open the relevant file in the editor.
-   Click the paperclip icon in the Copilot Chat panel, then search for and select files you want to attach to the conversation.

For example:

-   `how can I make this file run faster`
-   `how are these files related` (with two or more attached files)
-   `explain the getSearchReplaceRules function`

## [Write code](#write-code-3)

You can ask Copilot to write code for you. For example:

-   `write a TypeScript function to sum all numbers in a list`
-   `using the comments in this file, create appropriate Node JavaScript`

When Copilot returns a code block, the response includes options to copy the code.

## [Fix, improve, and refactor code](#fix-improve-and-refactor-code-3)

If your active file contains an error, use the `/fix` slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

-   `how would you improve the code in this file`
-   `translate this code to C#`
-   `add error handling to the main function`

## [Write tests](#write-tests-3)

Use the `/tests` slash command to ask Copilot to write tests for the active file or selected code. For example:

-   `/tests`
-   `/tests using the Jest framework`
-   `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

-   `Add tests for a JavaScript function that should sum a list of integers`