# About GitHub Copilot coding agent

You can ask Copilot to open a new pull request or make changes to an existing pull request. Copilot works in the background, then requests a review from you.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button)

Copy as Markdown

## In this article

## [Overview of Copilot coding agent](#overview-of-copilot-coding-agent)

With Copilot coding agent, GitHub Copilot can work independently in the background to complete tasks, just like a human developer.

Copilot coding agent can:

-   Fix bugs
-   Implement incremental new features
-   Improve test coverage
-   Update documentation
-   Address technical debt

To delegate tasks to Copilot coding agent, you can:

-   Ask Copilot to open a new pull request from many places, including GitHub Issues, Visual Studio Code and the agents panel available on every page on GitHub. See [Asking GitHub Copilot to create a pull request](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
-   Mention `@copilot` in a comment on an existing pull request to ask it to make changes. See [Asking GitHub Copilot to make changes to an existing pull request](/en/copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr).
-   Assign security alerts to Copilot from security campaigns. See [Fixing alerts in a security campaign](/en/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-coding-agent).

Copilot coding agent will evaluate the task it has been assigned based on the prompt you give it—whether that's from the issue description or a chat message. Then Copilot coding agent will make the required changes and open a pull request. When Copilot coding agent finishes, it will request a review from you, and you can leave pull request comments to ask Copilot coding agent to iterate.

While working on a coding task, Copilot coding agent has access to its own ephemeral development environment, powered by GitHub Actions, where it can explore your code, make changes, execute automated tests and linters and more.

### [Benefits over traditional AI workflows](#benefits-over-traditional-ai-workflows)

When used effectively, Copilot coding agent offers productivity benefits over traditional AI assistants in IDEs:

-   With **AI assistants in IDEs**, coding happens **locally**. Individual developers pair in **synchronous** sessions with the AI assistant. Decisions made during the session are **untracked** and lost to time unless committed. Although the assistant helps write code, the developer still has a lot of **manual steps** to do: create the branch, write commit messages, push the changes, open the PR, write the PR description, get a review, iterate in the IDE, and repeat. These steps take time and effort that may be hard to justify for simple or routine issues.
    
-   With **Copilot coding agent**, all coding and iterating happens **on GitHub** as part of the pull request workflow. You can create multiple custom agents that specialize in different types of tasks. Copilot **automates** branch creation, commit message writing and pushing, PR opening, and PR description writing. Developers let the agents **work in the background** and then steer Copilot to a final solution using PR reviews. Working on GitHub adds **transparency**, with every step happening in a commit and being viewable in logs, and opens up **collaboration** opportunities for the entire team.
    

## [Copilot coding agent versus agent mode](#copilot-coding-agent-versus-agent-mode)

Copilot coding agent is distinct from the "agent mode" feature available in your IDE. Copilot coding agent works autonomously in a GitHub Actions-powered environment to complete development tasks assigned through GitHub issues or GitHub Copilot Chat prompts, and creates pull requests with the results. In contrast, agent mode in your IDE makes autonomous edits directly in your local development environment. For more information about agent mode, see [Asking GitHub Copilot questions in your IDE](/en/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide).

## [Streamlining software development with Copilot coding agent](#streamlining-software-development-with-copilot-coding-agent)

Assigning tasks to Copilot coding agent can enhance your software development workflow.

For example, you can assign Copilot coding agent to straightforward issues on your backlog by selecting "Copilot" as the assignee. This allows you to spend less time on these issues and more time on more complex or interesting work, or work that requires a high degree of creative thinking. Copilot coding agent can work on "nice to have" issues that improve the quality of your codebase or product, but often remain on the backlog while you focus on more urgent work.

Having Copilot coding agent as an additional coding resource also allows you to start tasks that you might not have otherwise started due to lack of resources. For example, you might create issues to refactor code or add more logging, and then immediately assign these to Copilot.

Copilot coding agent can start a task, which you then pick up and continue working on yourself. By assigning the initial work to Copilot, you free up time that you would otherwise have spent doing repetitive tasks, such as setting up the scaffolding for a new project.

You can create specialized custom agents for different tasks. For example, you might create a custom agent specialized for frontend development that focuses on React components and styling, a documentation agent that excels at writing and updating technical documentation, or a testing agent that specializes in generating comprehensive unit tests. Each custom agent can be tailored with specific prompts and tools suited to its particular task.

## [Measuring pull request outcomes for Copilot coding agent](#measuring-pull-request-outcomes-for-copilot-coding-agent)

Enterprise administrators and organization owners can use Copilot usage metrics to analyze pull request outcomes for pull requests created by Copilot coding agent.

The Copilot usage metrics APIs include pull request lifecycle metrics such as:

-   The total number of pull requests created and merged
-   The number of pull requests created by Copilot coding agent that have been merged
-   Median time to merge for merged pull requests, including pull requests created by Copilot coding agent

These metrics can help you track adoption of Copilot coding agent and monitor changes in pull request throughput and time to merge over time. See [GitHub Copilot usage metrics](/en/copilot/concepts/copilot-usage-metrics/copilot-metrics).

## [Integrating Copilot coding agent with third-party tools](#integrating-copilot-coding-agent-with-third-party-tools)

You can also invoke Copilot coding agent from external tools, allowing you to assign tasks to Copilot, provide context, and open pull requests without leaving your workflow. See [About Copilot integrations](/en/copilot/concepts/tools/about-copilot-integrations)

## [Making Copilot coding agent available](#making-copilot-coding-agent-available)

Before you can assign tasks to Copilot coding agent, it must be enabled.

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans.

If you are a GitHub Copilot Business or GitHub Copilot Enterprise subscriber, an administrator must enable the relevant policy before you can use the agent.

Repository owners can choose to opt out some or all repositories from Copilot coding agent.

For more information, see [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/managing-access).

## [AI models for Copilot coding agent](#ai-models-for-copilot-coding-agent)

Depending on how you start your Copilot coding agent task, you may be able to select the model used by Copilot coding agent. You may find that different models perform better, or provide more useful responses, depending on the type of tasks you give Copilot.

For more information, see [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).

## [Enhancing Copilot coding agent's knowledge of a repository](#enhancing-copilot-coding-agents-knowledge-of-a-repository)

The more Copilot coding agent knows about the code in your repository, the tools you use, and your coding standards and practices, the more effective it will become. There are two ways you can enhance Copilot coding agent's knowledge of a repository.

-   **Custom instructions**
    
    These are short, natural‑language statements that you write and store as one or more files in a repository. If you are the owner of an organization on GitHub you can also define custom instructions in the settings for your organization. For more information, see [About customizing GitHub Copilot responses](/en/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).
    
-   **Copilot Memory** (public preview)
    
    If you have a Copilot Pro or Copilot Pro+ plan, you can enable Copilot Memory. This allows Copilot to store useful details it has worked out for itself about a repository. Copilot coding agent can then use this information when it is working in that repository. For more information, see [About agentic memory for GitHub Copilot](/en/copilot/concepts/agents/copilot-memory).
    

## [Copilot coding agent usage costs](#copilot-coding-agent-usage-costs)

Copilot coding agent uses GitHub Actions minutes and Copilot premium requests.

Within your monthly usage allowance for GitHub Actions and premium requests, you can ask Copilot coding agent to work on coding tasks without incurring any additional costs.

For more information, see [GitHub Copilot licenses](/en/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).

## [Customizing Copilot coding agent](#customizing-copilot-coding-agent)

You can customize Copilot coding agent in a number of ways:

-   **Custom instructions**: Custom instructions allow you to give Copilot additional context on your project and how to build, test and validate its changes. For more information, see [Adding repository custom instructions for GitHub Copilot](/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
-   **Model Context Protocol (MCP) servers**: MCP servers allow you to give Copilot access to different data sources and tools. For more information, see [Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)](/en/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp).
-   **Custom agents**: Custom agents allow you to create different specialized versions of Copilot for different tasks. For example, you could customize Copilot to be an expert frontend engineer following your team's guidelines. For more information, see [About custom agents](/en/copilot/concepts/agents/coding-agent/about-custom-agents).
-   **Hooks**: Hooks allow you to execute custom shell commands at key points during agent execution, enabling you to add validation, logging, security scanning, or workflow automation. For more information, see [About hooks](/en/copilot/concepts/agents/coding-agent/about-hooks).
-   **Skills**: Skills allow you to enhance the ability of Copilot to perform specialized tasks with instructions, scripts, and resources. For more information, see [About agent skills](/en/copilot/concepts/agents/about-agent-skills).

## [Built-in security protections](#built-in-security-protections)

Security is a fundamental consideration when you enable Copilot coding agent, as with any other AI agent. Copilot coding agent has a strong base of built-in security protections that you can supplement by following best practice guidance.

-   **Validated for code quality and security issues**: By default, Copilot coding agent checks code it generates for security issues and gets a second opinion on its code with Copilot code review. It attempts to resolve issues identified prior to completing the pull request. This improves code quality and reduces the likelihood of the code generated by Copilot coding agent introducing problems such as hardcoded secrets, insecure dependencies, and other vulnerabilities.
    -   **CodeQL** is used to identify code security issues.
    -   Newly introduced dependencies are checked against the **GitHub Advisory Database** for malware advisories, and for any CVSS-rated High or Critical vulnerabilities.
    -   **Secret scanning** is used to detect sensitive information such as API keys, tokens, and other secrets.
    -   Details about the analysis performed and the actions taken by Copilot coding agent can be reviewed in the session log. See [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).
    -   Optionally, you can disable one or more of the code quality and security validation tools used by Copilot coding agent. See [Configuring settings for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/configuring-agent-settings).
    -   Copilot coding agent's security validation **does not require** a GitHub Secret Protection, GitHub Code Security, or GitHub Advanced Security license.
-   **Subject to existing governance**: Organization settings and enterprise policies control availability. Any security policies and practices set up for the organization also apply to Copilot coding agent.
-   **Restricted development environment**: Copilot coding agent works in a sandbox development environment with internet access controlled by a firewall. It has read-only access to the repository it's assigned to work in.
-   **Limited access to branches**
    -   Copilot coding agent only has the ability to push to a single branch. When the agent is triggered by mentioning `@copilot` on an existing pull request, Copilot has write access to the pull request's branch. In other cases, a new `copilot/` branch is created for Copilot, and the agent can only push to that branch.
    -   Copilot coding agent is subject to any branch protections and required checks for the working repository.
-   **Responds only to users with write permissions**: Copilot coding agent will not respond to feedback from users with lower levels of access.
-   **Treated as an outside collaborator**
    -   Draft pull requests created by Copilot coding agent must be reviewed and merged by a human. Copilot coding agent cannot mark its pull requests as "Ready for review" and cannot approve or merge a pull request.
    -   By default, GitHub Actions workflows are not triggered for Copilot coding agent's pull requests until a user with write access to the repository clicks the **Approve and run workflows** button. Optionally, you can configure Copilot to allow workflows to run automatically. See [Reviewing a pull request created by GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs#managing-github-actions-workflow-runs).
-   **Tracked for compliance**
    -   Copilot coding agent's commits are authored by Copilot, with the developer who assigned the issue or requested the change to the pull request marked as the co-author. This makes it easier to identify code generated by Copilot coding agent and who started the task.
    -   The commit message for each agent-authored commit includes a link to the agent session logs, for code review and auditing. See [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).
    -   The developer who asked Copilot to create a pull request cannot approve that pull request. In repositories where an approving review is required, this ensures that at least one independent developer reviews Copilot coding agent's work.

For more information, see:

-   [Piloting GitHub Copilot coding agent in your organization](/en/copilot/tutorials/pilot-copilot-coding-agent#2-secure) (information on how organization owners can further enhance security)
-   [Responsible use of GitHub Copilot coding agent on GitHub.com](/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)
-   [GitHub Copilot Trust Center](https://copilot.github.trust.page/)

## [Risks and mitigations](#risks-and-mitigations)

Copilot coding agent is an autonomous agent that has access to your code and can push changes to your repository. This entails certain risks. Where possible, GitHub has applied appropriate mitigations.

### [Risk: Copilot coding agent can push code changes to your repository](#risk-copilot-coding-agent-can-push-code-changes-to-your-repository)

To mitigate this risk, GitHub:

-   **Limits who can assign tasks to Copilot coding agent.** Only users with write access to the repository can trigger Copilot coding agent to work. Comments from users without write access are never presented to the agent.
-   **Limits the branch that Copilot coding agent can push to.** The agent only has the ability to push to a single branch. When the agent is triggered by mentioning `@copilot` on an existing pull request, Copilot has write access to the pull request's branch. In other cases, a new `copilot/` branch is created for Copilot, and the agent can only push to that branch.
-   **Limits Copilot coding agent's credentials.** Copilot coding agent can only perform simple push operations. It cannot directly run `git push` or other Git commands.
-   **Restricts GitHub Actions workflow runs.** By default, workflows are not triggered until Copilot coding agent's code is reviewed and a user with write access to the repository clicks the **Approve and run workflows** button. Optionally, you can configure Copilot to allow workflows to run automatically. See [Reviewing a pull request created by GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs#managing-github-actions-workflow-runs).
-   **Prevents the user who asked Copilot coding agent to create a pull request from approving it.** This maintains the expected controls in the "Required approvals" rule and branch protection. See [Available rules for rulesets](/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

### [Risk: Copilot coding agent has access to sensitive information](#risk-copilot-coding-agent-has-access-to-sensitive-information)

Copilot coding agent has access to code and other sensitive information, and could leak it, either accidentally or due to malicious user input. To mitigate this risk, GitHub:

-   **Restricts Copilot coding agent's access to the internet.** See [Customizing or disabling the firewall for GitHub Copilot coding agent](/en/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

### [Risk: Prompt injection vulnerabilities](#risk-prompt-injection-vulnerabilities)

Users can include hidden messages in issues assigned to Copilot coding agent or comments left for Copilot coding agent as a form of [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). To mitigate this risk, GitHub:

-   **Filters hidden characters before passing user input to Copilot coding agent**: For example, text entered as an HTML comment in an issue or pull request comment is not passed to Copilot coding agent.

## [Limitations of Copilot coding agent](#limitations-of-copilot-coding-agent)

Copilot coding agent has certain limitations in its software development workflow and compatibility with other features.

### [Limitations in Copilot coding agent's software development workflow](#limitations-in-copilot-coding-agents-software-development-workflow)

-   **Copilot can only make changes in the repository specified when you start a task**. Copilot cannot make changes across multiple repositories in one run.
-   **By default, Copilot can only access context in the repository specified when you start a task**. The Copilot MCP server is configured by default to allow Copilot to access context (for example issues and historic pull requests) in the repository where it is working. You can, however, configure broader access. See [Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)](/en/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).
-   **Copilot can only open one pull request at a time**. Copilot will open exactly one pull request to address each task it is assigned.

### [Limitations in Copilot coding agent's compatibility with other features](#limitations-in-copilot-coding-agents-compatibility-with-other-features)

-   **Copilot isn't able to comply with certain rules that may be configured for your repository**. If you have configured a ruleset or branch protection rule that isn't compatible with Copilot coding agent (for example the "Require signed commits" rule), access to the agent will be blocked. If the rule is configured using rulesets, you can add Copilot as a bypass actor to enable access. See [Creating rulesets for a repository](/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-branch-or-tag-ruleset).
-   **Copilot coding agent doesn't account for content exclusions**. Content exclusions allow administrators to configure Copilot to ignore certain files. When using Copilot coding agent, Copilot will not ignore these files, and will be able to see and update them. See [Excluding content from GitHub Copilot](/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot).
-   **Copilot coding agent only works with repositories hosted on GitHub**. If your repository is stored using a different code hosting platform, Copilot won't be able to work on it.

## [Hands-on practice](#hands-on-practice)

Try the [Expand your team with Copilot coding agent](https://github.com/skills/expand-your-team-with-copilot/?ref_product=copilot&ref_type=engagement&ref_style=text) Skills exercise for practical experience with Copilot coding agent.

## [Further reading](#further-reading)

-   [GitHub Copilot coding agent](/en/copilot/using-github-copilot/coding-agent) how-to articles
-   [About custom agents](/en/copilot/concepts/agents/coding-agent/about-custom-agents)
-   [Responsible use of GitHub Copilot coding agent on GitHub.com](/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)