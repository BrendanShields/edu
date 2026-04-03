# Managing policies and features for GitHub Copilot in your organization

Control the availability of GitHub Copilot features and models for users granted a license by your organization.

## Who can use this feature?

Organization owners

Organizations with a GitHub Copilot Business or GitHub Copilot Enterprise plan

Copy as Markdown

## In this article

Copilot policies are also managed at the enterprise level. If your organization is part of an enterprise, and explicit settings have been selected at the enterprise level, you cannot override those settings at the organization level. For information on how policies combine, see [GitHub Copilot policies to control availability of features and models](/en/copilot/concepts/policies).

## [Enabling Copilot features and models in your organization](#enabling-copilot-features-and-models-in-your-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
2.  Next to the organization, click **Settings**.
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**.
    -   Click **Policies** to edit the policies that control privacy and availability of features.
    -   Click **Models** to edit the policies that control availability of models beyond the basic models provided with Copilot, which may incur additional costs.
4.  For each policy you want to configure, click the dropdown menu and select an enforcement option.

Note

The **MCP servers in Copilot** policy controls use where MCP server support is generally available (GA). This policy does not control access and permissions for the GitHub MCP server in third-party host applications (like Cursor, Windsurf or Claude). For more information on controlling access to the GitHub MCP server, see the [Policies and Governance](https://github.com/github/github-mcp-server/blob/main/docs/policies-and-governance.md#control-mechanisms) documentation in the GitHub MCP Server repository.

## [Enabling or disabling third-party coding agents in your repositories](#enabling-or-disabling-third-party-coding-agents-in-your-repositories)

Note

-   Third-party agents are available in the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business, and GitHub Copilot Enterprise plans.

You can choose whether to allow the following coding agents to be enabled in your organization:

-   Anthropic Claude
-   OpenAI Codex

Coding agents have access to the same repositories that Copilot coding agent has been enabled in.

To enable coding agents:

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
2.  Next to the organization, click **Settings**.
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**, and then click **coding agent**.
4.  In the sidebar, under **Copilot**, click **Coding agent**.
5.  On the Copilot coding agent page, under "Partner agents", click the toggle to enable the third-party agent you want to use.

## [Opting in to previews or feedback](#opting-in-to-previews-or-feedback)

If your organization has a Copilot Business or Copilot Enterprise plan and you enable "Copilot in GitHub.com", two additional options are displayed:

-   **Opt in to user feedback collection:** If enabled, users will see options to provide feedback on selected Copilot features.
-   **Opt in to preview features:** If enabled, users can test new Copilot features that are not yet generally available. Be aware that previews of features may have flaws, and the features may be changed or discontinued at any time.

## [Further reading](#further-reading)

-   [GitHub Copilot Trust Center](https://copilot.github.trust.page)
-   [Finding public code that matches GitHub Copilot suggestions](/en/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions)
-   [Setting up GitHub Copilot for your enterprise](/en/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise)