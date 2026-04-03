# About agent management

Use one centralized control page to jump between agent sessions, check progress, and stay in control without losing your place.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button)

Copy as Markdown

## In this article

## [About agents](#about-agents)

AI agents are autonomous systems that can evaluate their environment, make decisions, and take actions to complete tasks. Agents can break down complex tasks into steps, use various tools and resources, plan their approach, and adapt based on human feedback until they accomplish their assigned objective.

Agents bring automation and assistance to every stage of the software development process on GitHub. You can run multiple agent sessions concurrently, allowing you to efficiently delegate work items.

Alongside Copilot, you can use Anthropic Claude and OpenAI Codex, giving you more flexibility and choice to find the right agent for a task. See [About third-party agents](/en/copilot/concepts/agents/about-third-party-agents).

Utilizing custom agents you can build out a team of task-specific agents with customized system prompts to handle simpler tasks like writing tests and refactoring, giving you bandwidth to prioritize problem-solving and collaboration. See [About custom agents](/en/copilot/concepts/agents/coding-agent/about-custom-agents).

Model choice allows you to choose from a selection of AI models to use with your agents, each with its own particular strengths. See [Supported AI models in GitHub Copilot](/en/copilot/reference/ai-models/supported-models).

To learn more about Copilot coding agent, see [About GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/about-coding-agent).

## [Managing agents](#managing-agents)

When utilizing GitHub's agentic features, you can use the **Agents** tab within a repository that has Copilot coding agent enabled to initiate, monitor, and manage agent sessions without leaving your workflow. You can also use the [Agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) to view and start agent sessions. To learn how to enable Copilot coding agent, see [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/access-management).

From the Agents tab, you can:

-   **Kick off new agent tasks**: Select an AI model of your choice, and optionally choose from third-party agents or custom agents best suited for the task. See [Asking GitHub Copilot to create a pull request](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
-   **Monitor live session logs**: Once the agent starts working, you can click any agent session to open the session log and follow its progress and thought process in real time.
-   **Track active sessions**: You can view all active agent sessions that have been started in the repository.
-   **Steer agents mid-session**: If you realize you didn't scope a request correctly, or want the agent to use a specific tool or service, you can step in and provide **steering input** without stopping the run. Steering uses **one premium request** per message. See [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions#steering-a-copilot-session-from-the-agents-tab).
-   **Open a session in VS Code or GitHub Copilot CLI**: When you want to start working on changes to an agent session in your local development environment, click **Open in VS Code** or **Continue in GitHub Copilot CLI** to bring the session to your local machine.
    
    Note
    
    Opening a session in VS Code requires the latest versions of VS Code, the GitHub Copilot extension, and the GitHub Pull Requests extension.
    
-   **Review and merge agent code**: Once the agent completes a session, you can jump to the pull request to review the changes, request further improvements, or approve and merge. See [Reviewing a pull request created by GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

## [Next steps](#next-steps)

To start managing agents, see [Managing coding agents](/en/copilot/how-tos/use-copilot-agents/manage-agents).