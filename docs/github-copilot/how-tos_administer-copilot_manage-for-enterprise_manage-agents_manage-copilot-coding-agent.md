# Managing GitHub Copilot coding agent in your enterprise

Enable members of your enterprise to use Copilot coding agent and control the repositories where it is available.

## Who can use this feature?

Enterprise owners

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

## [Enabling Copilot coding agent for your Copilot subscribers](#enabling-copilot-coding-agent-for-your-copilot-subscribers)

Copilot coding agent and use of third-party MCP servers are blocked by default for users to whom you have assigned a Copilot license. You can allow members to use these features from the AI Controls tab for your enterprise. See [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#configuring-policies-for-github-copilot).

-   On the "Agents" page, click **Copilot coding agent**, then select **Enabled everywhere** or **Let organizations decide**.
-   On the "MCP" page, for the "MCP servers in Copilot" policy, select **Enabled everywhere** or **Let organizations decide**.

### [Next steps](#next-steps)

-   If you selected **Enabled everywhere**, tell organization owners that Copilot coding agent is enabled for all members. By default, the agent will be available in all repositories, but it is possible to opt out some or all repositories.
-   If you selected **Let organizations decide**, discuss member enablement with organization owners.

For more information, see [Adding GitHub Copilot coding agent to your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

## [Disabling Copilot coding agent in your repositories](#disabling-copilot-coding-agent-in-your-repositories)

Copilot policies, like the "Copilot coding agent" and "MCP servers on GitHub.com" policies described above, affect only the users you assign a Copilot license to.

If there are GitHub Copilot Pro+ users with access to your enterprise's repositories, they will be able to use Copilot coding agent and will not be restricted by your policies.

You can choose to stop anyone using the agent in some or all of your repositories using organization-level settings. For more information, see [Adding GitHub Copilot coding agent to your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

Alternatively, you can disable the agent for all repositories owned by your enterprise.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **AI controls**.
3.  In the "Installed Agents" section, click **Copilot coding agent**.
4.  In the "Copilot coding agent" section, next to "Block Copilot coding agent in all repositories owned by ENTERPRISE-NAME", click the toggle.