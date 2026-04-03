# Adding GitHub Copilot coding agent to your organization

Enable Copilot coding agent for your members and control the repositories where it is available.

## Who can use this feature?

Organization owners

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=trial&ref_style=button&ref_plan=enterprise)

Copy as Markdown

## In this article

Note

For an introduction to Copilot coding agent, see [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent).

## [Prerequisites](#prerequisites)

-   For general information, see [Piloting GitHub Copilot coding agent in your organization](/en/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org).
-   For information on premium requests and Actions minutes, see [Allowance usage for Copilot coding agent](/en/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).
-   For information on MCP servers, see [Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)](/en/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## [Enabling Copilot coding agent for your members](#enabling-copilot-coding-agent-for-your-members)

Note

Copilot policies are also managed at the enterprise level. If your organization is part of an enterprise, and explicit settings have been selected at the enterprise level, you cannot override those settings at the organization level. For information on how policies combine, see [GitHub Copilot policies to control availability of features and models](/en/copilot/concepts/policies).

Copilot coding agent and use of third-party MCP servers are disabled by default for organization members assigned a GitHub Copilot Enterprise or Copilot Business license by your organization.

Organizations with Copilot Enterprise or Copilot Business can enable these features for members on the Copilot policies page for their organization. See [Enabling Copilot features in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization).

-   For the "Copilot coding agent" policy, select "Enabled".
-   For the "MCP servers on GitHub.com" policy, select "Enabled".

## [Disabling or enabling Copilot coding agent in your repositories](#disabling-or-enabling-copilot-coding-agent-in-your-repositories)

By default, Copilot coding agent is available in all repositories for users who have access to the agent, but you can block it from being used in some or all repositories owned by your organization. You can manage repository availability using the following instructions, or programmatically using the [REST API](/en/rest/copilot/copilot-coding-agent-management).

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
2.  Next to the organization, click **Settings**.
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**, and then click **coding agent**.
4.  Use the "Repository access" control to define which repositories allow Copilot coding agent.
5.  If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow Copilot coding agent, then click **Select**.

Once Copilot coding agent is enabled for a repository, any user with access to Copilot coding agent and write permission for the repository can delegate work to Copilot.

## [Next steps](#next-steps)

-   Tell the members of repositories where Copilot coding agent is available that they can delegate work to the coding agent.
    
-   Encourage members to educate themselves about setting up their repository to get the most from Copilot coding agent. Useful resources:
    
    -   [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices)
    -   [Customizing the development environment for GitHub Copilot coding agent](/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
    -   [Security best practices](/en/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org#security-best-practices)