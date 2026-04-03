Feature availability when GitHub Copilot policies conflict in organizations - GitHub Docs

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

# Feature availability when GitHub Copilot policies conflict in organizations

Learn how delegating Copilot policy decisions to organizations affects users granted a license by organizations with different policies.

Copy as Markdown

## In this article

## [About delegating policy decisions to organizations](#about-delegating-policy-decisions-to-organizations)

Policies can be defined for a whole enterprise, or set at the organization level. See [GitHub Copilot policies to control availability of features and models](/en/copilot/concepts/policies).

When an enterprise owner delegates control of a policy to organization owners by setting "No policy," some organizations may enable a feature while others disable it. Users may be granted a Copilot license by organizations with different policies for the same feature.

## [How availability is determined](#how-availability-is-determined)

Feature, model, and privacy settings for users are set according to the **least restrictive** or the **most restrictive** policy defined by any of the organizations where they are granted a Copilot license.

-   **Least restrictive:** if any of the organizations has **enabled** a feature, this feature is enabled for the user everywhere. This applies to all but the more sensitive Copilot features.
    
-   **Most restrictive:** if any of the organizations has **disabled** a feature, this feature is disabled for the user in all their organizations. This applies only to the most sensitive Copilot features, for example: access to Copilot metrics using the API.
    

## [Availability for members with Copilot from multiple organizations](#availability-for-members-with-copilot-from-multiple-organizations)

Policy

Availability matches

More information

Copilot Metrics API

Most restrictive organization

[REST API endpoints for Copilot metrics](/en/rest/copilot/copilot-metrics)

Suggestions matching public code (privacy policy)

Most restrictive organization

[GitHub Copilot code suggestions in your IDE](/en/copilot/concepts/completions/code-suggestions)

Allow members without a Copilot license to use Copilot code review in GitHub.com

Most restrictive organization

[Responsible use of GitHub Copilot code review](/en/copilot/responsible-use/code-review)

Copilot can search the web

Least restrictive organization

[Responsible use of GitHub Copilot Chat in GitHub](/en/copilot/responsible-use/chat-in-github#leveraging-a-web-search-to-answer-a-question)

Copilot Chat in GitHub Mobile

Least restrictive organization

[Responsible use of GitHub Copilot Chat in GitHub Mobile](/en/copilot/responsible-use/chat-in-github-mobile)

Copilot Chat in the IDE

Least restrictive organization

[Responsible use of GitHub Copilot Chat in your IDE](/en/copilot/responsible-use/chat-in-your-ide)

Copilot code review

Least restrictive organization

[Responsible use of GitHub Copilot code review](/en/copilot/responsible-use/code-review)

Copilot coding agent

Least restrictive organization

[Responsible use of GitHub Copilot coding agent on GitHub.com](/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)

Spark

Least restrictive organization

[Responsible use of GitHub Spark](/en/copilot/responsible-use/spark)

Copilot in GitHub.com

Least restrictive organization

[Responsible use of GitHub Copilot Chat in GitHub](/en/copilot/responsible-use/chat-in-github)

Copilot in GitHub Desktop

Least restrictive organization

[Responsible use of GitHub Copilot in GitHub Desktop](/en/copilot/responsible-use/copilot-in-github-desktop)

Copilot CLI

Least restrictive organization

[Responsible use of GitHub Copilot CLI](/en/copilot/responsible-use/copilot-cli)

Editor preview features

Least restrictive organization

[GitHub Pre-release License Terms](/en/site-policy/github-terms/github-pre-release-license-terms)

GitHub Models, one policy per model

Least restrictive organization

[Managing your team's model usage](/en/github-models/github-models-at-scale/manage-models-at-scale)

MCP servers in Copilot

Least restrictive organization

[Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)](/en/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)

Copilot-generated commit messages

Least restrictive organization

[Responsible use of GitHub Copilot commit message generation](/en/copilot/responsible-use/copilot-commit-message-generation)

## [Next steps](#next-steps)

-   [Managing policies and features for GitHub Copilot in your organization](/en/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization)
-   [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/how-tos/administer/enterprises/managing-policies-and-features-for-copilot-in-your-enterprise)