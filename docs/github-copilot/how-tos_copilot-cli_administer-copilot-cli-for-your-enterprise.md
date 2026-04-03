# Administering Copilot CLI for your enterprise

Control the use of Copilot CLI within your enterprise.

Copy as Markdown

## In this article

## [Enabling or disabling Copilot CLI](#enabling-or-disabling-copilot-cli)

**Enterprise owners** can control the use of Copilot CLI by configuring a policy.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **AI controls**.
3.  To manage policies for **Copilot**, in the sidebar, click **Copilot**.
4.  In the "Copilot Clients" section, for Copilot CLI, select your preferred policy.

## [How do other AI controls affect Copilot CLI?](#how-do-other-ai-controls-affect-copilot-cli)

Not all enterprise-level AI controls and policies apply to Copilot CLI. These are the controls that **do apply**:

### [Copilot CLI enablement](#copilot-cli-enablement)

You can enable or disable Copilot CLI at the enterprise or organization level.

### [Model selection](#model-selection)

Users can only access AI models that are enabled at the enterprise level. When you enable or disable models in your enterprise settings, those changes are reflected in Copilot CLI. Users can view which models are available to them using the `/model` command.

### [Custom agents](#custom-agents)

Enterprise-configured custom agents are available to use with Copilot CLI.

### [Copilot coding agent enablement](#copilot-coding-agent-enablement)

Both the Copilot CLI policy and the Copilot coding agent policy must be enabled for users to be able to use the `/delegate` command in Copilot CLI.

### [Audit logging](#audit-logging)

Updates to enterprise policies that affect Copilot CLI are recorded as events in the enterprise audit log.

### [Seat assignment](#seat-assignment)

Users must have an assigned GitHub Copilot seat to access Copilot CLI.

### [Controls that do not apply](#controls-that-do-not-apply)

All other controls do **not** affect Copilot CLI, notably:

-   **Model Context Protocol (MCP) server policies**: Enterprise policies that control whether MCP servers can be used, or which MCP registry servers are allowed
-   **IDE-specific policies**: Policies configured for specific IDEs or editor extensions
-   **Content exclusions**: File path-based content exclusions

## [Why can't my developers access Copilot CLI?](#why-cant-my-developers-access-copilot-cli)

If you expect a user to have access to Copilot CLI and they don't:

1.  Ensure the user has a valid GitHub Copilot seat assignment from an organization in your enterprise.
2.  Verify the **enterprise-level policy.** If you set the policy to "Enabled everywhere" or "Disabled everywhere," this overrides all organization-level settings.
3.  If the enterprise policy is set to "Let organizations decide," check the organizations where the user receives their GitHub Copilot license. Copilot CLI must be enabled in **at least one** of the organization granting them a GitHub Copilot license.

One way to ensure consistent access across all organizations is to set the policy to **Enabled everywhere** at the enterprise level.

## [Further reading](#further-reading)

-   [Best practices for GitHub Copilot CLI](/en/copilot/how-tos/copilot-cli/cli-best-practices)