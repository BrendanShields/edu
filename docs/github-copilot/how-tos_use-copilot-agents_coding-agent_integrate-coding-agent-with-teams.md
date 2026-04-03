# Integrating Copilot coding agent with Teams

You can use the GitHub integration in Teams to provide context and open pull requests all from within your Teams channels.

Copy as Markdown

## In this article

Note

This feature is currently in public preview and subject to change.

The GitHub integration in Microsoft Teams allows you to interact with Copilot coding agent all from within your Teams channels. From within a Teams thread you can initiate coding agent sessions and open pull requests, using the context of your conversation.

For information about additional Copilot integrations, see [About Copilot integrations](/en/copilot/concepts/tools/about-copilot-integrations).

Note

When you mention @GitHub in a Teams thread, the agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request.

## [Prerequisites](#prerequisites)

-   You must have a GitHub account with access to Copilot through Copilot Pro, Copilot Pro+, Copilot Business, or Copilot Enterprise.
-   You must have a Teams account and be a member of a channel.

## [Installing the GitHub app in Teams](#installing-the-github-app-in-teams)

The GitHub app only needs to be installed once in a team. After the app is installed, any member of the team can connect their GitHub account to the app and start using it.

1.  Open the [GitHub integration installation link](https://teams.microsoft.com/l/app/836ecc9e-6dca-4696-a2e9-15e252cd3f31) in your web browser to launch Teams and the installation dialog.
2.  Click **Add** to add the app to your team.
3.  Follow the prompts on screen to authenticate and authorize the app.

## [Connecting the GitHub app to your GitHub account](#connecting-the-github-app-to-your-github-account)

The first time you use the GitHub app in Teams, you need to connect it to your GitHub account and set a default repository. The default repository provides the context that Copilot uses when responding to prompts, and it’s also where pull requests created by Copilot coding agent sessions will be opened unless you specify a repository in your prompt.

To get started, mention `@GitHub <YOUR_TASK>` in any Teams thread. The app will guide you through signing in and setting a default repository. Or you can connect your GitHub account and set the default repository manually by following these steps:

1.  In Teams, mention the app in a thread by typing `@GitHub`.
2.  Click **signin** from the list of suggestions.
3.  Follow the prompts to sign in to your GitHub account.
4.  In the thread, mention the app by typing `@GitHub`.
5.  Click **settings** to set the default repository.

## [Using the Copilot app in Teams](#using-the-copilot-app-in-teams)

You can interact with the GitHub app in Teams by mentioning it in a thread. The agent will respond to your messages and perform tasks based on your requests. Only users with **write** access to the default repository—or the repository specified in their prompt—can trigger Copilot coding agent to work. Contributors to the thread without **write** access can help guide Copilot by providing input to the conversation, which will be used as context when making changes in the pull request.

1.  In Teams, mention the app in a thread by typing @GitHub.
    
2.  Type your message or request, then send it. Optionally, you can specify a repository or branch using the following syntax:
    
    ```text
    @GitHub Add "Hello World" to the README in repo=REPO_OWNER/REPO_NAME branch=BRANCH_NAME
    ```
    
    The `repo` parameter tells Copilot coding agent which repository to use for the request, and the `branch` parameter specifies an existing branch of the repository that should be used as the base branch for a pull request. By default, Copilot uses your configured default repository and the repository’s default branch.
    
    Copilot will initiate a coding agent session and respond with a summary of the changes it plans to make, including a link to the pull request it has created in the repository.
    

You can continue to iterate on the pull request in the same Teams thread. Mention @GitHub with your suggested change, and the Copilot coding agent will use all of the messages in the thread since the previous mention to iterate on the existing pull request.

## [Further reading](#further-reading)

-   [About GitHub Copilot coding agent](/en/copilot/concepts/coding-agent/coding-agent)
-   [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/coding-agent/enable-coding-agent)