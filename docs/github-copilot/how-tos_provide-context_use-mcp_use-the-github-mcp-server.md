# Using the GitHub MCP Server

Learn how to use the GitHub Model Context Protocol (MCP) server to interact with repositories, issues, pull requests, and other GitHub features, directly from Copilot Chat.

## Tool navigation

Copy as Markdown

## In this article

The GitHub MCP server is available to all GitHub users regardless of plan type. However, specific tools within the MCP server inherit the same access requirements as their corresponding GitHub features. If a feature requires a paid GitHub or Copilot license, the equivalent MCP tool will require the same subscription. For example, tools that interact with Copilot Coding Agent require a paid Copilot license.

## [About the GitHub MCP server](#about-the-github-mcp-server)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [About Model Context Protocol (MCP)](/en/copilot/concepts/about-mcp).

## [Prerequisites](#prerequisites)

-   A GitHub account.
-   Visual Studio Code.
-   The GitHub MCP server, configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
-   If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

## [Using the GitHub MCP server in Visual Studio Code](#using-the-github-mcp-server-in-visual-studio-code)

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Visual Studio Code.

1.  Open Copilot Chat by clicking the icon in the title bar of Visual Studio Code.
2.  In the Copilot Chat box, select **Agent** from the popup menu.
3.  To see the available actions, in the Copilot Chat box, click the **Select tools** icon.
    -   In the **Tools** dropdown, under **MCP Server: GitHub**, you will see a list of available actions.
4.  In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    -   For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
5.  The GitHub MCP server will process your request and provide a response in the chat interface.
    -   In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
6.  Follow the prompts to complete the action.

## [Troubleshooting](#troubleshooting)

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### [Authorization issues](#authorization-issues)

If you are having trouble authorizing the MCP server, ensure that:

-   You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:

-   Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
-   You have entered the correct PAT.

### [Copilot agent mode problems](#copilot-agent-mode-problems)

If you are having trouble with the Copilot Chat agent mode, ensure that:

-   You have selected the correct agent in the Copilot Chat box.
-   You have configured the MCP server correctly in your IDE.
-   You have the necessary permissions to perform the actions you are trying to execute.

### [Push protection block](#push-protection-block)

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Working with push protection and the GitHub MCP server](/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server#resolving-a-block).

### [General tips](#general-tips)

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

-   Check the output logs of the MCP server for any error messages.
-   If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
-   Try restarting the MCP server or your IDE.

## [About the GitHub MCP server](#about-the-github-mcp-server-1)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [About Model Context Protocol (MCP)](/en/copilot/concepts/about-mcp).

## [Prerequisites](#prerequisites-1)

-   **Access to Copilot**. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
-   **Visual Studio version 17.14 or later**. For more information on installing Visual Studio, see the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).
-   The GitHub MCP server, configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
-   **Sign in to GitHub from Visual Studio**.
-   If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

## [Using the GitHub MCP server in Visual Studio](#using-the-github-mcp-server-in-visual-studio)

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Visual Studio.

1.  In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
2.  At the bottom of the chat panel, select **Agent** from the mode dropdown.
3.  In the Copilot Chat window, click the tools icon.
    -   Under **GitHub**, you will see a list of available tools.
4.  In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    -   For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
5.  The GitHub MCP server will process your request and provide a response in the chat interface.
    -   In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
6.  Follow the prompts to complete the action.

## [About the GitHub MCP server](#about-the-github-mcp-server-2)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [About Model Context Protocol (MCP)](/en/copilot/concepts/about-mcp).

## [Prerequisites](#prerequisites-2)

-   **Access to Copilot**. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
    
-   **A compatible JetBrains IDE**. GitHub Copilot is compatible with the following IDEs:
    
    -   IntelliJ IDEA (Ultimate, Community, Educational)
    -   Android Studio
    -   AppCode
    -   CLion
    -   Code With Me Guest
    -   DataGrip
    -   DataSpell
    -   GoLand
    -   JetBrains Client
    -   MPS
    -   PhpStorm
    -   PyCharm (Professional, Community, Educational)
    -   Rider
    -   RubyMine
    -   RustRover
    -   WebStorm
    -   Writerside
    
    See the [JetBrains IDEs](https://www.jetbrains.com/products/?ref_product=copilot&ref_type=engagement&ref_style=button) tool finder to download.
    
-   **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
    
-   **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).
    
-   **The GitHub MCP server**, configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
    
-   If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.
    

## [Using the GitHub MCP server in JetBrains IDEs](#using-the-github-mcp-server-in-jetbrains-ides)

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in JetBrains IDEs.

1.  Open the Copilot Chat window by clicking the **GitHub Copilot Chat** icon at the right side of the JetBrains IDE window.
    
    ![Screenshot of the GitHub Copilot Chat icon in the Activity Bar.](/assets/cb-37277/images/help/copilot/jetbrains-copilot-chat-icon.png)
    
2.  At the top of the chat panel, click the **Agent** tab.
    
3.  To see the available actions, in the Copilot Chat box, click the tools icon.
    
    -   Under **MCP Server: GitHub**, you will see a list of available actions.
4.  In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    
    -   For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
5.  The GitHub MCP server will process your request and provide a response in the chat interface.
    
    -   In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
6.  Follow the prompts to complete the action.
    

## [Troubleshooting](#troubleshooting-1)

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### [Authorization issues](#authorization-issues-1)

If you are having trouble authorizing the MCP server, ensure that:

-   You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:

-   Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
-   You have entered the correct PAT.

### [Copilot agent mode problems](#copilot-agent-mode-problems-1)

If you are having trouble with the Copilot Chat agent mode, ensure that:

-   You have selected the correct agent in the Copilot Chat box.
-   You have configured the MCP server correctly in your IDE.
-   You have the necessary permissions to perform the actions you are trying to execute.

### [Push protection block](#push-protection-block-1)

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Working with push protection and the GitHub MCP server](/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server#resolving-a-block).

### [General tips](#general-tips-1)

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

-   Check the output logs of the MCP server for any error messages.
-   If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
-   Try restarting the MCP server or your IDE.

## [About the GitHub MCP server](#about-the-github-mcp-server-3)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [About Model Context Protocol (MCP)](/en/copilot/concepts/about-mcp).

## [Prerequisites](#prerequisites-3)

-   **Access to Copilot**. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
-   **GitHub Copilot for Xcode extension**. See [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
-   The GitHub MCP server, configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
-   If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.

## [Using the GitHub MCP server in Xcode](#using-the-github-mcp-server-in-xcode)

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Xcode.

1.  To open the chat view, click **Editor** in the menu bar, then click **Copilot** then **Open Chat**. Copilot Chat opens in a new window.
2.  At the bottom of the chat panel, select **Agent**.
3.  To see the available actions, in the Copilot Chat box, click the tools icon.
    -   Under **MCP Server: GitHub**, you will see a list of available actions.
4.  In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    -   For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
5.  The GitHub MCP server will process your request and provide a response in the chat interface.
    -   In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
6.  Follow the prompts to complete the action.

## [Troubleshooting](#troubleshooting-2)

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### [Authorization issues](#authorization-issues-2)

If you are having trouble authorizing the MCP server, ensure that:

-   You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:

-   Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
-   You have entered the correct PAT.

### [Copilot agent mode problems](#copilot-agent-mode-problems-2)

If you are having trouble with the Copilot Chat agent mode, ensure that:

-   You have selected the correct agent in the Copilot Chat box.
-   You have configured the MCP server correctly in your IDE.
-   You have the necessary permissions to perform the actions you are trying to execute.

### [Push protection block](#push-protection-block-2)

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Working with push protection and the GitHub MCP server](/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server#resolving-a-block).

### [General tips](#general-tips-2)

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

-   Check the output logs of the MCP server for any error messages.
-   If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
-   Try restarting the MCP server or your IDE.

## [About the GitHub MCP server](#about-the-github-mcp-server-4)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For a full introduction to the GitHub MCP server and an overview of MCP, see [About Model Context Protocol (MCP)](/en/copilot/concepts/about-mcp).

## [Prerequisites](#prerequisites-4)

-   **Access to Copilot**. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
-   **Compatible version of Eclipse**. To use the GitHub Copilot extension, you must have Eclipse version 2024-09 or above. See the [Eclipse download page](https://www.eclipse.org/downloads/packages/).
-   If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot.
-   The GitHub MCP server, configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).
-   **Latest version of the GitHub Copilot extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [Installing the GitHub Copilot extension in your environment](/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment?tool=eclipse).
-   **Sign in to GitHub from Eclipse**.

## [Using the GitHub MCP server in Eclipse](#using-the-github-mcp-server-in-eclipse)

The GitHub MCP server enables you to perform a wide range of actions on GitHub, via Copilot Chat in Eclipse.

1.  To open the Copilot Chat panel, click the Copilot icon () in the status bar at the bottom of Eclipse, then click **Open Chat**.
2.  At the bottom of the chat panel, select **Agent** from the mode dropdown.
3.  To see the available actions, in the Copilot Chat box, click the tools icon.
    -   Under `github`, you will see a list of available actions.
4.  In the Copilot Chat box, type a command or question related to the action you want to perform, and press **Enter**.
    -   For example, you can ask the GitHub MCP server to create a new issue, list pull requests, or retrieve repository information.
5.  The GitHub MCP server will process your request and provide a response in the chat interface.
    -   In the Copilot Chat box, you may be asked to give additional permissions or provide more information to complete the action.
6.  Follow the prompts to complete the action.

## [Troubleshooting](#troubleshooting-3)

If you encounter issues while using the GitHub MCP server, there are a few common troubleshooting steps you can take.

### [Authorization issues](#authorization-issues-3)

If you are having trouble authorizing the MCP server, ensure that:

-   You are signed in to GitHub in your choice of IDE.

If you are authenticating with a personal access token (PAT), ensure that:

-   Your GitHub PAT is valid and has the necessary scopes for the actions you want to perform.
-   You have entered the correct PAT.

### [Copilot agent mode problems](#copilot-agent-mode-problems-3)

If you are having trouble with the Copilot Chat agent mode, ensure that:

-   You have selected the correct agent in the Copilot Chat box.
-   You have configured the MCP server correctly in your IDE.
-   You have the necessary permissions to perform the actions you are trying to execute.

### [Push protection block](#push-protection-block-3)

If you are using the GitHub MCP server and push protection blocks a secret that you believe is safe to expose, you may be able to bypass the block by specifying a reason for allowing the secret. See [Working with push protection and the GitHub MCP server](/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server#resolving-a-block).

### [General tips](#general-tips-3)

If you are experiencing other issues with the GitHub MCP server, here are some general tips to help you troubleshoot:

-   Check the output logs of the MCP server for any error messages.
-   If you are running the MCP server locally, ensure that your local environment is set up correctly for running Docker containers.
-   Try restarting the MCP server or your IDE.

## [About MCP in Copilot Chat in GitHub](#about-mcp-in-copilot-chat-in-github)

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub. MCP allows you to integrate AI capabilities with other tools and services, enhancing your development experience by providing context-aware AI assistance.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction).

Within Copilot Chat in GitHub, the GitHub MCP server is automatically configured, with a limited set of skills available. This allows you to instruct Copilot Chat to perform tasks such as creating branches or merging pull requests on your behalf. For a full list of available skills, see [GitHub Copilot Chat cheat sheet](/en/copilot/reference/github-copilot-chat-cheat-sheet#mcp-skills).

## [Using the GitHub MCP server in Copilot Chat in GitHub](#using-the-github-mcp-server-in-copilot-chat-in-github)

The GitHub MCP server is automatically configured in Copilot Chat in GitHub. You can start using it immediately without any additional setup.

1.  At the top right of any page on GitHub, click the button next to the search bar.
    
    Copilot Chat is displayed.
    
2.  In the prompt box, type a request related to the skill you want Copilot Chat to perform, and press **Enter**.
    
    Some examples of requests you can make are:
    
    `Create a new branch called [BRANCH-NAME] in the repository [OWNER/REPO-NAME].`[](https://github.com/copilot?prompt=Create%20a%20new%20branch%20called%20%5BBRANCH-NAME%5D%20in%20the%20repository%20%5BOWNER%2FREPO-NAME%5D.)[](https://github.com/copilot?prompt=Create%20a%20new%20branch%20called%20%5BBRANCH-NAME%5D%20in%20the%20repository%20%5BOWNER%2FREPO-NAME%5D.)
    
    `Search for users with the name [USER-NAME]`[](https://github.com/copilot?prompt=Search%20for%20users%20with%20the%20name%20%5BUSER-NAME%5D)[](https://github.com/copilot?prompt=Search%20for%20users%20with%20the%20name%20%5BUSER-NAME%5D)
    
    `Merge the pull request [PR-NUMBER] in the repository [OWNER/REPO-NAME].`[](https://github.com/copilot?prompt=Merge%20the%20pull%20request%20%5BPR-NUMBER%5D%20in%20the%20repository%20%5BOWNER%2FREPO-NAME%5D.)[](https://github.com/copilot?prompt=Merge%20the%20pull%20request%20%5BPR-NUMBER%5D%20in%20the%20repository%20%5BOWNER%2FREPO-NAME%5D.)
    
3.  Copilot Chat will ask you to confirm that you want to proceed with the action. Click **Allow** to confirm.
    
4.  Copilot Chat will use the relevant skill from the GitHub MCP server to perform the action you requested. Copilot Chat will show you the result of the action in the chat interface.
    

## [Limitations](#limitations)

The GitHub MCP server in Copilot Chat in GitHub is currently limited to a set of predefined skills. If you ask Copilot Chat to perform an action that is not supported by the MCP server, it will still attempt to provide a helpful response, but it may not be able to perform the action as expected. For example, if you ask Copilot Chat to create a new issue, it may provide you with a draft issue template, but you will still need to manually create the issue.

## [Further reading](#further-reading)

-   [Enhancing GitHub Copilot agent mode with MCP](/en/copilot/tutorials/enhancing-copilot-agent-mode-with-mcp)
-   [Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)](/en/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)