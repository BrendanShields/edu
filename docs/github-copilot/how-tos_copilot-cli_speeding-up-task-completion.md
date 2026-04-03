# Speeding up task completion with the /fleet command

Learn how you can speed up the completion of a multi-step implementation plan by using the `/fleet` slash command.

Copy as Markdown

## In this article

Where a task involves multiple operations, some or all of which can be worked on in parallel, the `/fleet` slash command can speed up task completion. When you use this command, Copilot assigns separate parts of the work to subagents.

For more information, see [Running tasks in parallel with the /fleet command](/en/copilot/concepts/agents/copilot-cli/fleet).

## [Using the `/fleet` slash command](#using-the-fleet-slash-command)

To use the `/fleet` slash command, enter the command followed by your prompt.

### [Typical workflow](#typical-workflow)

Typically, you'll use the `/fleet` slash command after creating an implementation plan.

1.  In an interactive CLI session, press Shift+Tab to switch into plan mode.
    
2.  Enter a prompt describing the feature you want to add or the change you want to make.
    
3.  Work with Copilot in plan mode to create an implementation plan.
    
4.  Once the plan is complete, select one of the following options:
    
    -   **Accept plan and build on autopilot + /fleet** to allow Copilot to use subagents and work autonomously to implement the plan without any further input.
    -   **Exit plan mode and I will prompt myself** and then enter a prompt such as `/fleet implement the plan`. Copilot will start working on the plan, using subagents to run parts of the work in parallel where possible. It may ask you to answer questions or make decisions as it works through the plan.

### [Monitoring progress](#monitoring-progress)

Use the `/tasks` slash command to see a list of background tasks relating to the current session. This will include any subtasks handled by subagents when you use the `/fleet` command.

Use up and down keyboard keys to navigate through the list of background tasks. For each subagent task, you can:

-   Press Enter to view details. When the subtask is complete, you will see a summary of what was done.
-   Press k to kill the process.
-   Press r to remove completed or killed subtasks from the list.

Press Esc to exit the task list and return to the main CLI prompt.

## [Further reading](#further-reading)

-   [GitHub Copilot CLI command reference](/en/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface)