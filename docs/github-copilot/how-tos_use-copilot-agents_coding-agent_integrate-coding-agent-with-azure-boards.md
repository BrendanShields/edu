# Integrating Copilot coding agent with Azure Boards

Use the Copilot integration in Azure Boards to send work items directly to Copilot coding agent and generate pull requests, all from within your Azure DevOps workspace.

Copy as Markdown

## In this article

The Azure Boards GitHub integration allows you to invoke Copilot coding agent without leaving your workspace. From within a Azure Boards work item you can initiate coding agent sessions and open pull requests, using the context of your work item description and comments.

For information about additional Copilot integrations, see [About Copilot integrations](/en/copilot/concepts/tools/about-copilot-integrations).

Note

When you send a work item to Copilot coding agent, the agent will capture content from text fields (such as the description and reproduction steps), along with the last 50 comments. This context is stored in the pull request, and is visible to anyone with access to the repository.

## [Prerequisites](#prerequisites)

-   You must have a GitHub account with access to Copilot through Copilot Pro, Copilot Pro+, Copilot Business, or Copilot Enterprise.
-   The repositories connected to the Azure DevOps project must have Copilot coding agent enabled.

## [Installing the Azure Boards application on GitHub](#installing-the-azure-boards-application-on-github)

Note

To install the Azure Boards application, you must be an owner or App manager of the organization or enterprise on GitHub.

The Azure Boards app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their GitHub account to the app and start using it.

1.  Go to the [Azure Boards installation page](https://github.com/marketplace/azure-boards).
2.  Scroll to the bottom of the page, then use the **Account** dropdown menu to select an account you would like to install the app in.
3.  Click **Install**.
4.  Select the repositories you would like the Azure Boards app to have access to.
5.  Follow the prompts on screen to configure and authorize the app in your Azure DevOps organization and project.

## [Approving the Azure Boards application permissions](#approving-the-azure-boards-application-permissions)

If you already have the Azure Boards application installed on GitHub, you will need to approve the required permission changes to allow the app to communicate with GitHub Copilot.

1.  Navigate to [your installed GitHub Apps](https://github.com/settings/installations).
2.  Find the Azure Boards application, then click the **Review request** link.
3.  Review the permissions, then click **Accept new permission**.

## [Creating a pull request from a work item](#creating-a-pull-request-from-a-work-item)

1.  In Azure Boards, open the work item you want to send to Copilot coding agent.
2.  Click the icon on the work item.
3.  Select **Create a pull request with Copilot**.
4.  Under **GitHub repository**, select the repository where Copilot should create the pull request.
5.  Optionally, change the base branch that Copilot should use for the pull request.
6.  Optionally, add any additional instructions to provide Copilot with more context.
7.  Click **Create**.

Copilot coding agent will begin processing the work item and create a draft pull request linked back to the work item.

## [Further reading](#further-reading)

-   [About GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/about-coding-agent)
-   [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/access-management)