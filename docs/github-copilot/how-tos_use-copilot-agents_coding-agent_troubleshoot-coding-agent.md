# Troubleshooting GitHub Copilot coding agent

Learn how to resolve problems that may occur when you assign tasks to Copilot.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button)

Copy as Markdown

## In this article

## [Copilot is not available in the "Assignees" list on my issue](#copilot-is-not-available-in-the-assignees-list-on-my-issue)

You can only assign issues to Copilot if you have access to Copilot through either the **GitHub Copilot Pro** plan, **GitHub Copilot Pro+** plan, the **GitHub Copilot Business** plan, or the **GitHub Copilot Enterprise** plan.

If you do not already have a subscription for one of these plans, click this button for more information:  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button)

If you _do_ have GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business, or GitHub Copilot Enterprise, check that Copilot coding agent has not been manually disabled for the repository:

-   For organization-owned repositories, the availability of Copilot coding agent in the repository is managed by the organization and/or enterprise administrators. See [Adding GitHub Copilot coding agent to your organization](/en/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).
    
-   For personal repositories, the availability of Copilot coding agent in the repository is configured in your account settings. See [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-copilot-coding-agent).
    

Note

You can check whether Copilot coding agent has been enabled for you in the features page of your Copilot settings: [github.com/settings/copilot/features](https://github.com/settings/copilot/features).

## [I have an Enterprise Managed User account and Copilot won't work in my personal repository](#i-have-an-enterprise-managed-user-account-and-copilot-wont-work-in-my-personal-repository)

Copilot coding agent is not available in personal repositories owned by managed user accounts. This is because Copilot coding agent runs on GitHub-hosted runners, which are not available to personal repositories owned by managed user accounts. For more information, see [GitHub-hosted runners](/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners).

If you have an managed user account and try to assign Copilot to an issue in a personal repository, you may see an error message reporting that GitHub Actions are not available for your repository.

To use Copilot coding agent, you'll need to work with repositories owned by your organization instead of personal repositories.

## [Copilot can't create a pull request from Copilot Chat](#copilot-cant-create-a-pull-request-from-copilot-chat)

If you asked Copilot to create a pull request and it responds that it cannot directly create a pull request, check that Copilot coding agent is available.

Important

In VS Code, Visual Studio, and JetBrains IDEs, you must mention the `@github` chat participant in your prompt. You can omit this in Copilot Chat on GitHub.com.

## [I assigned an issue to Copilot, but nothing is happening](#i-assigned-an-issue-to-copilot-but-nothing-is-happening)

Wait a while, then refresh the page. You should see Copilot leave an 👀 reaction on the issue. Shortly after this, Copilot will open a draft pull request linked to the issue, which will be shown in the issue timeline.

## [Copilot has opened a pull request, but nothing is happening](#copilot-has-opened-a-pull-request-but-nothing-is-happening)

If there is a "Copilot started work" event in the pull request timeline, click **View session** to see the session logs. These will stream live, and you will be able to see what Copilot is doing.

## [Copilot won't respond to my pull request comments](#copilot-wont-respond-to-my-pull-request-comments)

Copilot only responds to comments from people who have write access to the repository.

If you do have write access, and you mention `@copilot` on a pull request that is assigned to Copilot, the comment is passed to Copilot coding agent. An eyes emoji (👀) is added to your comment to indicate that Copilot coding agent has seen your comment. Shortly after, a "Copilot started work" event is added to the pull request timeline.

If this doesn't happen, Copilot may have been unassigned from the pull request, or you may not have write access. Note that Copilot only responds to mentions in open pull requests. Once a pull request is merged or closed, Copilot coding agent will not respond to new mentions or comments to better focus on active development work.

## [Based on the agent session logs, Copilot appears to be stuck](#based-on-the-agent-session-logs-copilot-appears-to-be-stuck)

Copilot can appear to be stuck for a while, and then get moving again.

If the session remains stuck, it will time out after an hour. You can retry by unassigning the issue and then reassigning it to Copilot.

If Copilot got stuck while responding to a comment, try adding the same comment to the pull request again.

## [My GitHub Actions workflows are not running when Copilot pushes](#my-github-actions-workflows-are-not-running-when-copilot-pushes)

GitHub Actions workflows will not run automatically when Copilot pushes changes to a pull request.

To allow GitHub Actions workflows to run, click the **Approve and run workflows** button in the pull request's merge box. See [Reviewing a pull request created by GitHub Copilot](/en/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).

## [Copilot is pushing changes which don't pass my CI checks](#copilot-is-pushing-changes-which-dont-pass-my-ci-checks)

While working on an issue, Copilot has access to its own ephemeral development environment, powered by GitHub Actions, where it can execute automated tests and linters to validate its work before it pushes.

It is most likely to do this if given clear instructions on what to do. The best way to do this is with a `.github/copilot-instructions.md` file. See [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices#adding-custom-instructions-to-your-repository).

## [There is a warning from GitHub Copilot about the firewall](#there-is-a-warning-from-github-copilot-about-the-firewall)

By default, Copilot's access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from Copilot or malicious instructions given to it could lead to code or other sensitive information being leaked to remote locations.

If Copilot tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if Copilot is responding to an issue assignment) or to a comment (if Copilot is responding to a comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from Copilot about being blocked by the firewall.](/assets/cb-58205/images/help/copilot/coding-agent/firewall-warning.png)

For more information, see [Customizing or disabling the firewall for GitHub Copilot coding agent](/en/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

## [Copilot is not picking up attached screenshots](#copilot-is-not-picking-up-attached-screenshots)

The maximum image size allowed by Copilot coding agent is 3.00 MiB. Images larger than this will be removed from the request.

## [Further reading](#further-reading)

-   [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices)
-   [Customizing the development environment for GitHub Copilot coding agent](/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)