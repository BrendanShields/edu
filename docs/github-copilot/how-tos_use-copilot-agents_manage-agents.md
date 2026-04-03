# Managing coding agents

View your agent's progress and keep it on task.

## Who can use this feature?

Coding agents are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button)

Copy as Markdown

## In this article

When utilizing GitHub's agentic features, you can use the **Agents** tab within a repository that has Copilot coding agent enabled to initiate, monitor, and manage agent sessions without leaving your workflow. You can also use the [Agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) to view and start agent sessions. To learn how to enable Copilot coding agent, see [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/access-management).

## [1\. Select a repository and choose your agent](#1-select-a-repository-and-choose-your-agent)

1.  Start a new agent task.
    
    -   Open the **Agents** tab in a repository
    -   Open the [Agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text)
    -   Use the **Task** button or `/task` command from [Copilot Chat](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)
    -   Open the Agents panel by clicking the at the top of any page on GitHub
2.  Using the dropdown menu, select the repository you want the coding agent to work in.
    
3.  Optionally, select a base branch for Copilot's pull request.
    
4.  Optionally, you can click to open the agent dropdown menu, if you want to assign a coding agent or a custom agent with specialized behavior and tools. You can select an existing custom agent from your repository, organization, or enterprise. You can also click **Create an agent** to create a new agent profile in your selected repository and branch. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
    Note
    
    Third-party coding agents are available in the GitHub Copilot Pro+ and Copilot Enterprise plans.
    
5.  Optionally, select the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.
    
6.  Type a prompt describing your request. For example:
    
    ```text
    Implement a user-friendly message for common errors.
    ```
    
7.  Click or press Enter.
    

Copilot will start work on the task and begin pushing changes to a new pull request, where it will automatically add you as a reviewer.

For more information on ways to start new agent tasks, see [Asking GitHub Copilot to create a pull request](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

## [2\. Monitor agent activity](#2-monitor-agent-activity)

Once the agent starts working, it will continue to update the session log and overview with its progress and thought process.

Each session displays its status. Click on a session to open the session log, where you can monitor the agent's progress, see the tools it's using, and track how long the session has been running.

Copilot coding agent sessions can also be tracked from the GitHub CLI, GitHub Mobile, Visual Studio Code, Raycast, and JetBrains IDEs. For more information, see [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

## [3\. Redirect agents as needed](#3-redirect-agents-as-needed)

You can step in and provide **steering input** to Copilot without stopping the run. Steering uses **one premium request** per message.

Note

Steering a session is currently not available for **third-party coding agents**.

Reasons you might want to steer a session include:

-   Copilot appears to be going in a wrong direction, and you want to give it more clarity.
-   You made a mistake in your description of the required work, and you've decided to start over.

In the prompt box under the agent session log, prompt Copilot as it is working on a task. For example:

```text
Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.
```

Copilot will start implementing your input after it has finished its current tool call.

## [4\. Open an agent session in your local development environment](#4-open-an-agent-session-in-your-local-development-environment)

You can guide the agent in your local development environment on further changes, or make any edits that require human expertise.

### [VS Code](#vs-code)

At the bottom of the agent session view, click the **Open in VS Code** button to launch the session directly in VS Code.

Note

Opening a session in VS Code requires the latest versions of VS Code, the GitHub Copilot extension, and the GitHub Pull Requests extension.

### [GitHub Copilot CLI](#github-copilot-cli)

1.  At the bottom of the agent session view, click the dropdown list next to **Open in VS Code**.
2.  Click **Continue in GitHub Copilot CLI** to copy the `copilot --resume=SESSION-ID` command to your clipboard.
    
    ![Screenshot of the session action dropdown list, "Continue in Copilot CLI" is highlighted with a dark orange outline.](/assets/cb-171917/images/help/copilot/coding-agent/open-agent-session-in-copilot-cli.png)
    
3.  In your terminal, paste and run the command to resume the agent session.

## [5\. Review and merge agent code](#5-review-and-merge-agent-code)

Once the agent completes a session, you can navigate to the pull request to review the changes. From the pull request, you can scan the diff, request further improvements, or approve and merge the changes. See [Reviewing a pull request created by GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

## [6\. Archive agent sessions](#6-archive-agent-sessions)

Sessions that have been stopped can be archived to remove them from the sessions list.

1.  Open the agent session you want to archive.
2.  In the top right corner, click , then click **Archive session**.
3.  In the dialog box that opens, click **Yes, archive**.