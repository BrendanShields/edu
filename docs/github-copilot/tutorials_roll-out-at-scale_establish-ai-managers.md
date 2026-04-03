Establishing AI managers in your enterprise - GitHub Docs

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

# Establishing AI managers in your enterprise

Reduce your administrative burden and empower your SMEs by creating a team of AI managers.

## Who can use this feature?

Enterprise owners

Copy as Markdown

## In this article

Note

Enterprise custom roles and enterprise teams are in public preview and subject to change.

## [Overview](#overview)

You can use custom roles and enterprise teams to delegate AI administration permissions without granting enterprise ownership. AI managers can view and manage **nearly all AI features in your enterprise's AI Controls**, including agentic AI features, Copilot features, and Model Context Protocol (MCP) features.

Unless you grant additional permissions beyond those listed in this article, AI managers **cannot access** the following:

-   Access management settings for Copilot
-   Settings in the "Billing" section of the Copilot page
-   Settings in the "Metrics" section of the Copilot page

## [1\. Create a custom role for AI management](#1-create-a-custom-role-for-ai-management)

To get started, you need to create a custom role with the necessary permissions for AI management.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **People**.
    
3.  In the left sidebar, click **Enterprise roles**, then click **Role management**.
    
4.  Click **Create custom role**.
    
5.  To clarify the purpose of the role, give it a name and description.
    
6.  In the "Add permissions" section, use the search bar to find and select the following permissions:
    
    -   **Manage enterprise AI controls**: Allows this role to view and manage all settings in the "AI Controls" tab for your enterprise
    -   **Read enterprise audit logs**: Allows this role to view **all** audit log events for your enterprise, helping your AI managers monitor agentic activity
    -   **View Enterprise Copilot Metrics**: Allows this role to view Copilot usage metrics under the "Insights" tab
7.  Click **Create role**.
    

## [2\. Create an enterprise team for AI management](#2-create-an-enterprise-team-for-ai-management)

Now that you have created your AI manager role, you need to set up an enterprise team and add your future AI managers as members.

1.  In the sidebar of the "People" tab, click **Enterprise teams**.
2.  Click **Create Enterprise team**.
3.  Give your team a name, then click **Create Enterprise team**.
4.  On the team page, select the **Add members** dropdown menu, then click the members of your enterprise you want to grant AI management permissions to.
5.  To confirm your selections, click **Add**.

## [3\. Assign the AI management role to your team](#3-assign-the-ai-management-role-to-your-team)

With both your AI management role and team created, you can now assign the role to your team, granting management permissions to your team members.

1.  In the sidebar of the "People" tab, select **Enterprise roles**, then click **Role assignments**.
2.  On the "Enterprise role assignments" page, click **Assign role**.
3.  In the "Assign role to" section, select the **Select user or team** dropdown menu, then click your AI management team.
4.  In the "Select role" section, click your AI management role.
5.  At the bottom of the page, click **Assign role**.

## [4\. Grant your AI managers bypass permissions for agent profiles](#4-grant-your-ai-managers-bypass-permissions-for-agent-profiles)

If you have created a ruleset targeting agent profiles in your enterprise, you can grant bypass access to allow your AI managers to create and edit those profiles. This access also lets your AI managers merge pull requests modifying those files, allowing your developers to propose custom agents while maintaining your enterprise's security standards.

1.  At the top of the page, click **AI controls**.
    
2.  In the "Only enterprise admins can edit agent files" field, click **Edit ruleset** .
    
    ![Screenshot of the "Installed agents" section of the agent settings page. A button labeled "Edit ruleset" is outlined in dark orange.](/assets/cb-114250/images/help/enterprises/edit-agent-profile-ruleset.png)
    
3.  In the "Bypass list" section, select the **Add bypass** dropdown menu, then click your AI management team.
    
4.  At the bottom of the page, click **Save changes**.
    

## [Next steps](#next-steps)

Now that you have established AI managers for your enterprise, help them customize and manage your enterprise's AI experience by sharing the following resources:

-   [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
-   [Testing and releasing custom agents in your organization or enterprise](/en/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents)