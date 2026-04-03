# Asking GitHub Copilot to create a pull request

You can ask Copilot to create a pull request from many places, including GitHub Issues, the agents panel, Copilot Chat, the GitHub CLI, and agentic coding tools and IDEs with Model Context Protocol (MCP) support.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button)

Copy as Markdown

## In this article

Note

For an overview of Copilot coding agent, see [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent).

## [Introduction](#introduction)

You can ask Copilot to create a new pull request from:

-   GitHub Issues, by [assigning an issue to Copilot](#assigning-an-issue-to-copilot)
-   The [agents tab or panel](#asking-copilot-to-create-a-pull-request-from-the-agents-tab-or-panel) on GitHub
-   The [dashboard](#asking-copilot-to-create-a-pull-request-from-the-dashboard) on GitHub
-   Copilot Chat in [Visual Studio Code](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-code), [JetBrains IDEs](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-jetbrains-ides), [Eclipse](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-eclipse) and [Visual Studio 2026](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-2026)
-   Copilot Chat on [GitHub.com](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-githubcom)
-   The [GitHub CLI](#asking-copilot-to-create-a-pull-request-from-the-github-cli)
-   On [GitHub Mobile](#asking-copilot-to-create-a-pull-request-from-github-mobile)
-   Your preferred IDE or agentic coding tool with [Model Context Protocol (MCP)](#asking-copilot-to-create-a-pull-request-from-the-github-mcp-server) support
-   The [Raycast](#asking-copilot-to-create-a-pull-request-from-raycast) launcher
-   The ["New repository" form](#asking-copilot-to-create-a-pull-request-from-the-new-repository-page) on GitHub

Copilot will start working on the task, raise a pull request, then request a review from you when it's finished working. For more information, see [About GitHub Copilot coding agent](/en/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

## [Assigning an issue to Copilot](#assigning-an-issue-to-copilot)

You can ask Copilot to start working on an issue by assigning the issue to Copilot.

You can assign an issue to Copilot:

-   On GitHub.com (see the [next section](#assigning-an-issue-to-copilot-on-githubcom))
-   On [GitHub Mobile](#assigning-an-issue-to-copilot-on-github-mobile)
-   Via the GitHub API (see [later in this article](#assigning-an-issue-to-copilot-via-the-github-api))
-   Using the [Raycast launcher](#assigning-an-issue-to-copilot-from-raycast)
-   Using GitHub CLI (see [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit))

### [Assigning an issue to Copilot on GitHub.com](#assigning-an-issue-to-copilot-on-githubcom)

Note

This feature is in public preview and subject to change.

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Issues**.
    
    ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Issues," is outlined in dark orange.](/assets/cb-51267/images/help/repository/repo-tabs-issues-global-nav-update.png)
    
3.  Open the issue that you want to assign to Copilot.
    
4.  In the right side menu, click **Assignees**.
    
    ![Screenshot of the right sidebar of an issue. A header, labeled "Assignees", is outlined in dark orange.](/assets/cb-19901/images/help/issues/assignee-menu.png)
    
5.  Click **Copilot** from assignees list.
    
    ![Screenshot of "Assignees" window on an issue. Copilot is available in the list.](/assets/cb-25260/images/help/copilot/coding-agent/assign-to-copilot.png)
    
    Additional options are displayed.
    
    ![Screenshot of "Assign to Copilot" dialog showing options for target repository, starting branch, custom agent, and additional instructions.](/assets/cb-103529/images/help/copilot/coding-agent/assign-to-copilot-dialog.png)
    
6.  In the **Optional prompt** field you can add specific guidance for Copilot. Add any context, constraints, or specific requirements that will help Copilot to understand and complete the task.
    
    For example, you might include instructions about specific coding patterns or frameworks to use, testing requirements, code style preferences, files or directories that should or shouldn't be modified.
    
    In addition to the details you supply here, Copilot will use any custom instructions that have been configured for the target repository. See [Adding repository custom instructions for GitHub Copilot](/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
    
7.  You can use the dropdown menus in the dialog to change the repository that Copilot will work in and the branch that it will branch off from.
    
    All repositories where you have **at least** read access will be displayed in the repository dropdown menu. However, you can only select a repository if you have write access to it, **and** if Copilot coding agent is enabled for that repository.
    
    If you select a repository in a different organization than the issue's source organization, or if you select a public repository when the issue is in a private repository, a warning will be displayed.
    
    If you don't specify a repository, Copilot will work in the same repository as the issue. If you don't specify a branch, Copilot will work from the default branch of the selected repository.
    
    Tip
    
    When you assign an issue to Copilot, it gets sent the issue title, description, any comments that currently exist, and any additional instructions you provide. After assigning the issue, Copilot will not be aware of, and therefore won't react to, any further comments that are added to the issue. If you have more information, or changes to the original requirement, add this as a comment in the pull request that Copilot raises.
    
8.  Optionally, you can click to open the agent dropdown menu, if you want to assign a coding agent or a custom agent with specialized behavior and tools. You can select an existing custom agent from your repository, organization, or enterprise. You can also click **Create an agent** to create a new agent profile in your selected repository and branch. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
    Note
    
    Third-party coding agents are available in the GitHub Copilot Pro+ and Copilot Enterprise plans.
    
9.  Optionally, if you are a GitHub Copilot Pro or GitHub Copilot Pro+ user, you can use the dropdown menu to select the model that Copilot will use. For more information, see [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).
    

You can also assign issues to Copilot from other places on GitHub.com:

-   From the list of issues on a repository's **Issues** page.
-   When viewing an issue in GitHub Projects.

### [Assigning an issue to Copilot on GitHub Mobile](#assigning-an-issue-to-copilot-on-github-mobile)

1.  In GitHub Mobile, navigate to the repository that contains the issue you want to assign to Copilot.
2.  Click **Issues**.
3.  Open the issue that you want to assign to Copilot.
4.  Tap the icon.
5.  Beside "Assignees", tap **Edit**.
6.  Beside "Copilot", click the plus sign.
7.  Click **Done**.

### [Assigning an issue to Copilot via the GitHub API](#assigning-an-issue-to-copilot-via-the-github-api)

Note

This feature is in public preview and subject to change.

You can assign issues to Copilot using either the GraphQL API or the REST API. Both APIs support an optional Agent Assignment input to customize the task:

GraphQL parameter

REST parameter

Description

`targetRepositoryId`

`target_repo`

The repository where Copilot will work

`baseRef`

`base_branch`

The branch that Copilot will branch from

`customInstructions`

`custom_instructions`

Additional instructions for Copilot

`customAgent`

`custom_agent`

A custom agent to use for the task

`model`

`model`

The model for Copilot to use

#### [Using the GraphQL API](#using-the-graphql-api)

Note

You must include the `GraphQL-Features` header with the values `issues_copilot_assignment_api_support` and `coding_agent_model_selection`.

You can use the following GraphQL mutations to assign issues to Copilot:

-   [`updateIssue`](/en/graphql/reference/mutations#updateissue)
-   [`createIssue`](/en/graphql/reference/mutations#createissue)
-   [`addAssigneesToAssignable`](/en/graphql/reference/mutations#addassigneestoassignable)
-   [`replaceActorsForAssignable`](/en/graphql/reference/mutations#replaceactorsforassignable)

##### [Creating and assigning a new issue](#creating-and-assigning-a-new-issue)

1.  Make sure you're authenticating with the API using a user token, for example a personal access token or a GitHub App user-to-server token.
    
    Note
    
    If using a fine-grained personal access token, it needs the following permissions to assign Copilot to an issue:
    
    -   Read access to metadata
    -   Read and write access to actions, contents, issues and pull requests
    
    If using a personal access token (classic), it needs the `repo` scope to assign Copilot to an issue.
    
2.  Verify that Copilot coding agent is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes Copilot. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.
    
    ```graphql
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename
    
            ... on Bot {
              id
            }
    
            ... on User {
              id
            }
          }
        }
      }
    }
    ```
    
    If Copilot coding agent is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.
    
3.  Make a note of the `id` value of this login.
    
4.  Fetch the GraphQL global ID of the repository you want to create the issue in, replacing `octo-org` with the repository owner, and `octo-repo` with the repository name.
    
    ```graphql
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        id
      }
    }
    ```
    
5.  Create the issue with the `createIssue` mutation. Replace `REPOSITORY_ID` with the ID returned from the previous step, and `BOT_ID` with the ID returned from the step before that. You can optionally include the `agentAssignment` input to customize the task.
    
    ```shell
    gh api graphql -f query='mutation {
      createIssue(input: {
        repositoryId: "REPOSITORY_ID",
        title: "Implement comprehensive unit tests",
        body: "DETAILS",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Add comprehensive test coverage",
          customAgent: "",
          model: ""
        }
      }) {
        issue {
          id
          title
          assignees(first: 10) {
            nodes {
              login
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```
    

##### [Assigning an existing issue](#assigning-an-existing-issue)

1.  Make sure you're authenticating with the API using a user token, for example a personal access token or a GitHub App user-to-server token.
    
2.  Verify that Copilot coding agent is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes Copilot. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.
    
    ```graphql
    query {
      repository(owner: "monalisa", name: "octocat") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename
    
            ... on Bot {
              id
            }
    
            ... on User {
              id
            }
          }
        }
      }
    }
    ```
    
    If Copilot coding agent is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.
    
3.  Fetch the GraphQL global ID of the issue you want to assign to Copilot, replacing `monalisa` with the repository owner, `octocat` with the name and `9000` with the issue number.
    
    ```graphql
    query {
      repository(owner: "monalisa", name: "octocat") {
        issue(number: 9000) {
          id
          title
        }
      }
    }
    ```
    
4.  Assign the existing issue to Copilot using the `replaceActorsForAssignable` mutation. Replace `ISSUE_ID` with the ID returned from the previous step, `BOT_ID` with the ID returned from the step before that, and `REPOSITORY_ID` with the repository ID. You can optionally include the `agentAssignment` input to customize the task.
    
    ```shell
    gh api graphql -f query='mutation {
      replaceActorsForAssignable(input: {
        assignableId: "ISSUE_ID",
        actorIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Fix the reported bug",
          customAgent: "",
          model: ""
        }
      }) {
        assignable {
          ... on Issue {
            id
            title
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```
    
5.  Alternatively, you can use the `updateIssue` mutation to update an existing issue and assign it to Copilot. Replace `ISSUE_ID` with the issue ID and `BOT_ID` with the bot ID.
    
    ```shell
    gh api graphql -f query='mutation {
      updateIssue(input: {
        id: "ISSUE_ID",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Update feature implementation",
          customAgent: "",
          model: ""
        }
      }) {
        issue {
          id
          title
          assignees(first: 10) {
            nodes {
              login
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```
    
6.  You can also use the `addAssigneesToAssignable` mutation to add Copilot to an existing issue while keeping other assignees. Replace `ISSUE_ID` with the issue ID and `BOT_ID` with the bot ID.
    
    ```shell
    gh api graphql -f query='mutation {
      addAssigneesToAssignable(input: {
        assignableId: "ISSUE_ID",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Collaborate on this task",
          customAgent: "",
          model: ""
        }
      }) {
        assignable {
          ... on Issue {
            id
            title
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```
    

#### [Using the REST API](#using-the-rest-api)

You can use the following REST API endpoints to assign issues to Copilot:

-   [Add assignees to an issue](/en/rest/issues/assignees#add-assignees-to-an-issue)
-   [Create an issue](/en/rest/issues/issues#create-an-issue)
-   [Update an issue](/en/rest/issues/issues#update-an-issue)

##### [Adding assignees to an existing issue](#adding-assignees-to-an-existing-issue)

```shell
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues/ISSUE_NUMBER/assignees \
  --input - <<< '{
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```

##### [Creating a new issue](#creating-a-new-issue)

```shell
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues \
  --input - <<< '{
  "title": "Issue title",
  "body": "Issue description.",
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```

##### [Updating an existing issue](#updating-an-existing-issue)

```shell
gh api \
  --method PATCH \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues/ISSUE_NUMBER \
  --input - <<< '{
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```

### [Assigning an issue to Copilot from Raycast](#assigning-an-issue-to-copilot-from-raycast)

[Raycast](https://www.raycast.com/) is an extensible launcher for Windows and macOS. With the GitHub Copilot extension for Raycast, you can start and track Copilot coding agent tasks wherever you are on your computer.

1.  Install Raycast from the [Raycast website](https://www.raycast.com).
    
2.  Install the GitHub Copilot extension for Raycast by clicking the **Install Extension** button on the [extension's page](https://www.raycast.com/github/github-copilot).
    
3.  Open Raycast, search for "Copilot," find the **Assign Issues to Copilot** command, then press Enter.
    
4.  Click **Sign in with GitHub**, then complete the authentication flow. Raycast will re-open.
    
5.  Select the repository you want Copilot to work in.
    
6.  Select the issue you want to assign to Copilot.
    
7.  Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
    
8.  Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
9.  Optionally, if you are a GitHub Copilot Pro or GitHub Copilot Pro+ user, you can use the dropdown menu to select the model that Copilot will use. For more information, see [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).
    
10.  Optionally, provide additional instructions. These will be passed to Copilot alongside your issue contents.
     
11.  Press Command+Enter to assign the issue.
     
     Copilot will start a new session. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
     

Note

If you are unable to select a specific repository when starting a task, the organization that owns the repository may have enabled OAuth app access restrictions. To learn how to request approval for the "GitHub Copilot for Raycast" OAuth app, see [Requesting organization approval for OAuth apps](/en/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps).

## [Asking Copilot to create a pull request from the agents tab or panel](#asking-copilot-to-create-a-pull-request-from-the-agents-tab-or-panel)

You can ask Copilot to open a pull request from either the agents tab or the agents panel. The only difference is the entry point - once you see the "New agent task" form, the steps are the same.

1.  Open the agents panel or tab:
    
    -   Open the **Agents** tab in a repository.
    -   **Navigate to the agents page**: Go to [github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text). You can also get here by opening the agents panel, then clicking **View all**.
    -   **Open the agents panel**: Click in the navigation bar at the top right of GitHub.
2.  Using the dropdown menu in the prompt field, select the repository you want Copilot to work in.
    
3.  Type a prompt describing your request. You can also add visual inputs like screenshots or UI mockups by pasting, dragging, or uploading an image. Files supported: image/png, image/jpeg, image/gif, image/webp.
    
    For example, `Implement a user friendly message for common errors.`
    
4.  Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
    
5.  1.  Optionally, you can click to open the agent dropdown menu, if you want to assign a coding agent or a custom agent with specialized behavior and tools. You can select an existing custom agent from your repository, organization, or enterprise. You can also click **Create an agent** to create a new agent profile in your selected repository and branch. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
    Note
    
    Third-party coding agents are available in the GitHub Copilot Pro+ and Copilot Enterprise plans.
    
6.  Optionally, if you are a GitHub Copilot Pro or GitHub Copilot Pro+ user, you can use the dropdown menu to select the model that Copilot will use. For more information, see [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).
    
7.  Click or press Enter.
    
    Copilot will start a new session, which will appear in the list below the prompt box. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
    

## [Asking Copilot to create a pull request from the dashboard](#asking-copilot-to-create-a-pull-request-from-the-dashboard)

You can ask Copilot to open a pull request from the Copilot prompt box in the dashboard. The dashboard is your personalized overview of your activity on GitHub, seen when you visit [https://github.com](https://github.com) while logged in.

1.  Navigate to the dashboard at [https://github.com](https://github.com/?ref_product=desktop&ref_type=engagement&ref_style=text).
    
2.  Click the **Task** button.
    
3.  Using the dropdown menu in the prompt field, select the repository you want Copilot to work in.
    
4.  Type a prompt describing your request.
    
    For example, `Implement a user friendly message for common errors.`
    
5.  Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request.
    
6.  Optionally, you can click to open the agent dropdown menu, if you want to assign a coding agent or a custom agent with specialized behavior and tools. You can select an existing custom agent from your repository, organization, or enterprise. You can also click **Create an agent** to create a new agent profile in your selected repository and branch. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
    Note
    
    Third-party coding agents are available in the GitHub Copilot Pro+ and Copilot Enterprise plans.
    
7.  Click **Send now** or press Return.
    
    You will be taken to the agents tab, and Copilot will start a new session, which will appear in the "Recent sessions" list below the prompt box. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
    
    Note
    
    If you have enabled the **New Dashboard Experience** in feature preview, the new session will appear in "Agent sessions" under the prompt box in your dashboard. For more information, see [Personal dashboard](/en/account-and-profile/reference/personal-dashboard#home-dashboard-view).
    

## [Asking Copilot to create a pull request from Copilot Chat in Visual Studio Code](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-code)

1.  Install the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) for Visual Studio Code.
    
2.  Open GitHub Copilot Chat in Visual Studio Code.
    
3.  Type a prompt explaining what you want Copilot to do.
    
    For example, `Put backticks around file names and variables in output`
    
    Tip
    
    To help Copilot, you can select the relevant line(s) of code before submitting your prompt.
    
4.  Submit your prompt by clicking the **Delegate this task to the GitHub Copilot coding agent** button, next to the **Send** button
    
5.  If you have local changes, a dialog will be displayed asking if you want to push those changes so Copilot can start from your current state. Click **Include changes** to push your changes, or **Ignore changes** to ask Copilot to start its work from your repository's default branch.
    
    Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.
    

## [Asking Copilot to create a pull request from Copilot Chat in JetBrains IDEs](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-jetbrains-ides)

Note

Copilot coding agent in JetBrains IDEs is in public preview, and subject to change.

1.  Open GitHub Copilot Chat in your JetBrains IDE.
    
2.  Type a prompt explaining what you want Copilot to do
    
    For example, `Put backticks around file names and variables in output`
    
3.  Click the **Delegate to Coding Agent** button next to the **Send** button.
    
    Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification from GitHub and in the IDE.
    

## [Asking Copilot to create a pull request from Copilot Chat in Eclipse](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-eclipse)

Note

Copilot coding agent in Eclipse is in public preview, and subject to change.

1.  Open GitHub Copilot Chat in Eclipse.
    
2.  Type a prompt explaining what you want Copilot to do.
    
    For example, `Put backticks around file names and variables in output`
    
3.  Click next to the **Send** button.
    
4.  In the dialog box that opens, select the repository you want Copilot to work in, then click **Continue**.
    
    Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification from GitHub and in the IDE.
    

## [Asking Copilot to create a pull request from Copilot Chat in Visual Studio 2026](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-visual-studio-2026)

Note

To use Copilot coding agent in Visual Studio, you'll need to be running at least [December Update 18.1.0](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes#github-copilot-1) of Visual Studio 2026.

1.  Enable Copilot coding agent support in Visual Studio.
    
    1.  Open the **Tools** menu, then click **Options**.
    2.  In the sidebar, select **GitHub**.
    3.  Check the **Enable Copilot Coding agent (preview)** box.
    4.  Restart Visual Studio.
2.  Open GitHub Copilot Chat in Visual Studio.
    
3.  Enter a prompt, giving details of what you want Copilot to change.
    
    For example, `Put backticks around file names and variables in log output.`
    
4.  Submit your prompt by clicking the **Delegate this task to the GitHub Copilot coding agent** button, next to the **Send** button.
    
    Copilot asks you to confirm that you want to use the coding agent to create a pull request.
    
5.  Click **Confirm**.
    
    Copilot will start a new session and respond with a link to the pull request it creates. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.
    

## [Asking Copilot to create a pull request from Copilot Chat in GitHub.com](#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-githubcom)

1.  Open GitHub Copilot Chat on GitHub.com.
    
2.  Type `/task` to ask Copilot to create a pull request, and give details of what you want Copilot to change.
    
    For example, `/task Put backticks around file names and variables in output.`
    
3.  Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
    
4.  Optionally, you can click to open the agent dropdown menu, if you want to assign a coding agent or a custom agent with specialized behavior and tools. You can select an existing custom agent from your repository, organization, or enterprise. You can also click **Create an agent** to create a new agent profile in your selected repository and branch. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
    Note
    
    Third-party coding agents are available in the GitHub Copilot Pro+ and Copilot Enterprise plans.
    
5.  Click or press Enter.
    
    Copilot will start a new session, which will appear in the list below the prompt box. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
    

## [Asking Copilot to create a pull request from GitHub Mobile](#asking-copilot-to-create-a-pull-request-from-github-mobile)

1.  In GitHub Mobile, navigate to the repository where you want to create a pull request.
    
2.  Tap the icon in the bottom right corner of the screen.
    
3.  Enter a prompt to ask Copilot to create a pull request.
    
    For example: `Create a pull request to ...`.
    
    Copilot responds with a brief summary of the task it will perform, asking for your confirmation before it proceeds.
    
4.  Check that Copilot has interpreted your prompt correctly, then tap **Accept** or **Dismiss**.
    
    Copilot creates a pull request and gives you a link to it. It will work on the task and push changes to the pull request, and then add you as a reviewer when it has finished, triggering a notification.
    

## [Asking Copilot to create a pull request from the GitHub CLI](#asking-copilot-to-create-a-pull-request-from-the-github-cli)

Note

The `agent-task` command set is only available in v2.80.0 or later of the GitHub CLI. This command set is a public preview and is subject to change.

You can start a new Copilot coding agent session with the `gh agent-task create` command in the GitHub CLI.

When you run the command without any arguments, you are asked to enter a prompt. Copilot coding agent acts on the prompt and opens a pull request in the current repository.

You can use command line options to:

-   Provide the prompt (`gh agent-task create "Example prompt"`)
-   Choose a base branch, instead of using the repository's default branch (`--base`)
-   Select a repository, instead of targeting the current repository (`--repo`)
-   Follow the session log in real time (`--follow`)

To see all of the available options, run `gh agent-task create --help`.

## [Asking Copilot to create a pull request from the GitHub MCP server](#asking-copilot-to-create-a-pull-request-from-the-github-mcp-server)

Note

-   This capability is only available on the remote GitHub MCP server and host applications where remote MCP servers are supported.

1.  Install the GitHub MCP server in your preferred IDE or agentic coding tool. See [Using the GitHub MCP Server](/en/copilot/how-tos/context/model-context-protocol/using-the-github-mcp-server).
    
2.  Ensure the `create_pull_request_with_copilot` tool is enabled.
    
3.  Open chat.
    
4.  Type a prompt asking Copilot to create a pull request, with the details of what you want to change.
    
    For example, `Open a PR in my repository to expand unit test coverage.`
    
    Tip
    
    -   You can ask Copilot to open a pull request using a specific branch as the base branch by including it in your prompt.
    
5.  Submit your prompt.
    
    Copilot will start a new session, open a draft pull request and work on the task in the background. As it works, it will push changes to the pull request, and once it has finished, it will add you as a reviewer. In most cases, the MCP host will show you the URL of the created pull request.
    

## [Asking Copilot to create a pull request from Raycast](#asking-copilot-to-create-a-pull-request-from-raycast)

[Raycast](https://www.raycast.com/) is an extensible launcher for Windows and macOS. With the GitHub Copilot extension for Raycast, you can start and track Copilot coding agent tasks wherever you are on your computer.

1.  Install Raycast from the [Raycast website](https://www.raycast.com).
    
2.  Install the GitHub Copilot extension for Raycast by clicking the **Install Extension** button on the [extension's page](https://www.raycast.com/github/github-copilot).
    
3.  Open Raycast, search for "Copilot," find the **Create Task** command, then press Enter.
    
4.  Click **Sign in with GitHub**, then complete the authentication flow. Raycast will re-open.
    
5.  Type a prompt describing what you want Copilot to do.
    
    For example, `Implement a user friendly message for common errors.`
    
6.  Select the repository you want Copilot to work in.
    
7.  Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
    
8.  Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
    
9.  Optionally, if you are a GitHub Copilot Pro or GitHub Copilot Pro+ user, you can use the dropdown menu to select the model that Copilot will use. For more information, see [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).
    
10.  Press Command+Enter to start the task.
     
     Copilot will start a new session. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
     

Note

If you are unable to select a specific repository when starting a task, the organization that owns the repository may have enabled OAuth app access restrictions. To learn how to request approval for the "GitHub Copilot for Raycast" OAuth app, see [Requesting organization approval for OAuth apps](/en/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps).

## [Asking Copilot to create a pull request from the "New repository" page](#asking-copilot-to-create-a-pull-request-from-the-new-repository-page)

When creating a new repository, you can ask Copilot to seed the new repository by entering a prompt.

1.  In the upper-right corner of any page, select , then click **New repository**.
    
    ![Screenshot of a GitHub dropdown menu showing options to create new items. The menu item "New repository" is outlined in dark orange.](/assets/cb-29762/images/help/repository/repo-create-global-nav-update.png)
    
2.  Use the **Owner** dropdown menu to select the account you want to own the repository.
    
    ![Screenshot of the owner menu for a new GitHub repository. The menu shows two options, octocat and github.](/assets/cb-80933/images/help/repository/create-repository-owner.png)
    
3.  In the **Prompt** field, enter a prompt describing what you want Copilot to build.
    
    For example, `Create a Rust CLI for converting CSV spreadsheets to Markdown`
    
4.  Click **Create repository**.
    
    Copilot will immediately open a draft pull request. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
    

## [Monitoring progress](#monitoring-progress)

You can view your current and past Copilot sessions from the agents panel, [agents page](https://github.com/copilot/agents), Visual Studio Code, and more. See [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions).

## [Further reading](#further-reading)

-   [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent)
-   [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices)
-   [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
-   [Troubleshooting GitHub Copilot coding agent](/en/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)