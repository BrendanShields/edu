Using GitHub Copilot to explore pull requests - GitHub Docs

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

# Using GitHub Copilot to explore pull requests

GitHub Copilot Chat can help you understand the content, functionality, and status of a pull request.

Copy as Markdown

## In this article

## [Introduction](#introduction)

You can ask Copilot different questions about a pull request, from different views within the pull request. For example, you can ask Copilot to summarize a pull request, or explain what has changed within specific files or lines of code in a pull request.

## [Get a summary of a pull request](#get-a-summary-of-a-pull-request)

You can ask Copilot to summarize a pull request, or to provide information about the status of a pull request.

1.  On GitHub, navigate to a pull request in a repository.
    
2.  In the top right corner of the page, click the Copilot icon () to open Copilot Chat.
    
    Copilot will use the pull request as context for your question.
    
3.  At the bottom of the Copilot Chat panel, in the prompt box, type a question and press Enter.
    

### [Example prompts](#example-prompts)

The following prompts are examples of the kind of questions you can ask Copilot to help you find out about a pull request.

-   `Summarize this pull request`
-   `What is the current status of this pull request?`
-   `What are the main changes in this pull request?`

## [Ask about changes to a specific file in a pull request](#ask-about-changes-to-a-specific-file-in-a-pull-request)

You can ask Copilot to explain the changes made to a specific file in a pull request, or to provide information about the status of a file in a pull request.

1.  On GitHub, navigate to a pull request in a repository.
    
2.  Click the **Files changed** tab.
    
3.  To the right side of a line in the file you want to ask about, click the icon, then click **Copilot**, and select **Ask about this diff**.
    
    This opens Copilot Chat with the file changes indicated as the context of your question.
    
4.  Type a question in the prompt box at the bottom of the chat panel and press Enter.
    

### [Example prompts](#example-prompts-1)

-   `What are the changes in this file?`
-   `What is the status of this file in the pull request?`

## [Ask about specific lines within a file in a pull request](#ask-about-specific-lines-within-a-file-in-a-pull-request)

You can ask Copilot to explain specific lines of code in a pull request, or to provide information about the status of those lines.

1.  On GitHub, navigate to a pull request in a repository.
    
2.  Click the **Files changed** tab.
    
3.  Click the line number for the first line you want to select, then hold down Shift and click the line number for the last line you want to select.
    
4.  To the right side of one of the selected lines, click the icon, then click **Copilot**, and select **Ask about this diff**.
    
    This opens Copilot Chat with the selected lines indicated as the context of your question.
    
5.  Type a question in the prompt box at the bottom of the chat panel and press Enter.
    

### [Example prompts](#example-prompts-2)

-   `Explain the selected lines of code`
-   `What do these lines of code do?`

## [Ask why a workflow has failed](#ask-why-a-workflow-has-failed)

You can ask Copilot to explain why a workflow has failed in a pull request, and provide suggestions for how to fix the issue.

1.  On GitHub, navigate to a pull request in a repository.
    
2.  Scroll to the bottom of the page, then, next to one of the failing checks, click the ellipsis, and then click **Explain error.**
    
    This opens Copilot Chat with the workflow failure indicated as the context of your question and a prompt pre-filled in the chat input box. Copilot responds with information about why the pull request failed. Copilot may also provide suggestions for how to fix the issue.
    
3.  If Copilot has provided steps to fix the issue, you can follow the steps to resolve the problem.
    

### [Example prompts](#example-prompts-3)

-   `Why has this workflow failed?`
-   `What can I do to fix this issue?`

## [Further reading](#further-reading)

-   [Using GitHub Copilot to explore a codebase](/en/copilot/tutorials/using-copilot-to-explore-a-codebase)