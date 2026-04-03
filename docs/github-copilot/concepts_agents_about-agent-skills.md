# About agent skills

Skills allow Copilot to perform specialized tasks.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
  
GitHub Copilot CLI is available with all Copilot plans. If you receive Copilot from an organization, the Copilot CLI policy must be enabled in the organization's settings.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button)

Copy as Markdown

## In this article

Note

Agent Skills work with Copilot coding agent, the GitHub Copilot CLI and agent mode in Visual Studio Code Insiders. Support in the stable version of VS Code is coming soon.

## [About agent skills](#about-agent-skills)

Agent skills are folders of instructions, scripts, and resources that Copilot can load when relevant to improve its performance in specialized tasks. The Agent Skills specification is an [open standard](https://github.com/agentskills/agentskills), used by a range of different AI systems.

You can create your own skills to teach Copilot to perform tasks in a specific, repeatable way—or use skills shared online, for example in the [`anthropics/skills`](https://github.com/anthropics/skills) repository or GitHub's community created [`github/awesome-copilot`](https://github.com/github/awesome-copilot) collection.

Copilot supports:

-   Project skills, stored in your repository (`.github/skills` or `.claude/skills`)
-   Personal skills, stored in your home directory and shared across projects (`~/.copilot/skills` or `~/.claude/skills`) (Copilot coding agent and GitHub Copilot CLI only)

Support for organization-level and enterprise-level skills is coming soon.

## [Next steps](#next-steps)

To create an agent skill, see:

-   [Creating agent skills for GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
-   [Creating agent skills for GitHub Copilot CLI](/en/copilot/how-tos/copilot-cli/customize-copilot/create-skills)
-   [Copilot customization cheat sheet](/en/copilot/reference/customization-cheat-sheet)