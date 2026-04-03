# Testing and releasing custom agents in your organization or enterprise

Ensure your custom agents are performant and compliant before releasing them to your company.

Copy as Markdown

## In this article

Note

Copilot custom agents are in public preview and subject to change.

## [Introduction](#introduction)

Before you release or update a custom agent in your organization or enterprise, you can test the agent privately to ensure it meets your standards. Once you are satisfied, you can then easily change the location of your agent profile to make it available across your company.

## [Prerequisites](#prerequisites)

Before you can test a custom agent, you need to set up your organization or enterprise for custom agents. See [Preparing to use custom agents in your organization](/en/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents) or [Preparing to use custom agents in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

## [1\. Create your test custom agent](#1-create-your-test-custom-agent)

1.  In your organization or enterprise's `.github-private` repository, create a new directory called `.github/agents`. Agents stored in this directory are only available to members of your organization or enterprise who have access to the `.github-private` repository, and can only be used when they start a task within that repository.
2.  In your `.github/agents` directory, create the agent profile for your test agent. You can create a net-new profile or duplicate an existing profile to test potential updates. For information on configuring an agent profile, see [Creating custom agents for Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents#configuring-an-agent-profile).
3.  Merge your test agent profile into the default branch of your repository.

## [2\. Test your custom agent](#2-test-your-custom-agent)

1.  Navigate to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).
2.  Using the dropdown menu in the prompt box, select your `.github-private` repository.
3.  Select , then click your test agent.
4.  To test your custom agent, send Copilot a prompt.
5.  In the "Recent sessions" section, click your session to see detailed information about your results.
6.  Continue making changes and testing your custom agent as needed until you are satisfied with its performance.

## [3\. Release your custom agent](#3-release-your-custom-agent)

1.  In your `.github-private` repository, move your agent profile from the `.github/agents` directory into the `agents` directory.
2.  Merge your changes into the default branch. Your custom agent is now available to all users in your organization or enterprise.

## [Next steps](#next-steps)

To monitor the usage of custom agents in your organization, filter your organization's audit log by `actor:Copilot`. See [Reviewing the audit log for your organization](/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

To monitor the usage of custom agents in your enterprise, see [Monitoring agentic activity in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity).