# About third-party agents

You can incorporate coding agents into your development workflows on GitHub.

## Who can use this feature?

Third-party agents are available in the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business, and GitHub Copilot Enterprise plans.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button)

Copy as Markdown

## In this article

Note

Third-party coding agents are currently in public preview.

## [Introduction](#introduction)

You can use third-party coding agents alongside Copilot coding agent to work asynchronously on your development tasks. You can assign an existing issue or give a prompt to an agent, which will work on the required changes and create a pull request. When the agent finishes, it will request a review from you, and you can leave pull request comments to ask the agent to iterate.

Coding agents are subject to the same security protections, mitigations, and limitations as Copilot coding agent. To learn more about how you can use coding agents, see [About GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/about-coding-agent).

### [Where you can use coding agents](#where-you-can-use-coding-agents)

You can kick off tasks with coding agents in the following locations:

-   **The Agents tab**: Select an agent under the prompt box in the [Agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-tab-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026), then kick off a new task and watch the agent get to work on a pull request.
-   **Issues**: Assign the agent to an existing issue in a repository.
-   **Pull requests**: Mention `@AGENT_NAME` in a comment on an existing pull request to ask it to make changes.
-   On [**GitHub Mobile**](/en/copilot/how-tos/chat-with-copilot/chat-in-mobile): From the **Home** view, click to start a new agent session.
-   In [**Visual Studio Code**](https://code.visualstudio.com/docs/copilot/agents/overview#_create-an-agent-session): Start a new session in the chat view, or delegate an existing session to a different agent.

### [Making coding agents available](#making-coding-agents-available)

Note

Third-party agents are available in the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business, and GitHub Copilot Enterprise plans.

Before you can assign tasks to coding agents on GitHub, they must be enabled in your account policies.

-   For **GitHub Copilot Pro and GitHub Copilot Pro+ subscribers**, see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories).
-   For **GitHub Copilot Business and GitHub Copilot Enterprise subscribers**, see [Managing policies and features for GitHub Copilot in your organization](/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [Managing policies and features for GitHub Copilot in your enterprise](/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

These policies do not apply to **local** agents in Visual Studio Code, which cannot be disabled. They _do_ apply to **cloud** agents in Visual Studio Code. See [Types of agents](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) in the Visual Studio Code documentation.

## [Supported coding agents](#supported-coding-agents)

The following third-party agents are supported on GitHub:

-   [Anthropic Claude](/en/copilot/concepts/agents/anthropic-claude)
-   [OpenAI Codex](/en/copilot/concepts/agents/openai-codex)

## [Usage costs](#usage-costs)

Coding agents consume **GitHub Actions minutes** and **GitHub Copilot premium requests**. Each agent **session** consumes one premium request.

Within your monthly usage allowance for GitHub Actions and premium requests, you can ask agents to work on coding tasks without incurring any additional costs.

For more information, see [GitHub Copilot licenses](/en/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## [Next steps](#next-steps)

-   To start managing agents, see [Managing coding agents](/en/copilot/how-tos/use-copilot-agents/manage-agents).
-   To learn how AI models are hosted and served, see [Hosting of models for GitHub Copilot Chat](/en/copilot/reference/ai-models/model-hosting).