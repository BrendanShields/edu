# Asking GitHub Copilot to make changes to an existing pull request

You can ask Copilot to make changes to an existing pull request by mentioning `@copilot`.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button)

Copy as Markdown

## In this article

Note

For an overview of Copilot coding agent, see [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent).

## [Introduction](#introduction)

You can ask Copilot to make changes to an existing pull request by mentioning `@copilot` in a comment.

By default, Copilot pushes commits directly to the pull request's branch. Once it has finished work on the changes you requested, it requests your review.

If you prefer Copilot to create a separate pull request instead, you can ask for this using natural language in your comment—for example, "open a PR to fix the tests."

## [Asking Copilot to make changes](#asking-copilot-to-make-changes)

1.  Navigate to the pull request that you want Copilot to make changes to.
2.  Write a comment or review mentioning Copilot with `@copilot`.
3.  Optionally, when leaving a pull request comment (not a review or review comment) through the GitHub web interface, select a model using the model picker.
4.  Submit your comment or review.

If you prefer not to use this default behavior, you can ask Copilot to create a new branch and a new pull request targeting your branch instead. Once the agent finishes work, it will request a review from you.

## [Monitoring progress](#monitoring-progress)

You can view your current and past Copilot sessions from the agents panel, [agents page](https://github.com/copilot/agents), Visual Studio Code, and more. See [Tracking GitHub Copilot's sessions](/en/copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions).

## [Further reading](#further-reading)

-   [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent)
-   [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices)
-   [Troubleshooting GitHub Copilot coding agent](/en/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent#copilot-cant-create-a-pull-request-from-copilot-chat)