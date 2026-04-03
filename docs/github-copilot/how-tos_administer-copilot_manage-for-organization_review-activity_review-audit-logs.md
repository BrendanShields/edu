# Reviewing audit logs for GitHub Copilot Business

Review the audit logs for your Copilot Business plan to understand what actions have been taken by which users.

## Who can use this feature?

Organization owners can interact with the audit logs.

Audit logs for GitHub Copilot are available for organizations with a Copilot Business plan.

Copy as Markdown

## In this article

## [About audit logs for Copilot Business](#about-audit-logs-for-copilot-business)

You can use the audit logs for Copilot Business to review actions taken by users in your organization, such as:

-   Changes to Copilot settings and policies
-   The addition or removal of seats from your Copilot Business plan

The audit log lists events related to your Copilot Business plan for the last 180 days.

## [Viewing your organization's audit logs](#viewing-your-organizations-audit-logs)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
2.  Next to the organization, click **Settings**.
3.  In the "Archive" section of the sidebar, click **Logs**, then click **Audit log**.

## [Searching audit log events for Copilot Business](#searching-audit-log-events-for-copilot-business)

You can search for any of the GitHub Copilot audit log events using the `action` qualifier and the `copilot` category. Some example searches that use this syntax are:

-   `action:copilot`: Returns all GitHub Copilot audit log events for your organization.
-   `action:copilot.cfb_seat_assignment_created`: Returns all audit log events related to a Copilot Business seat being assigned to a new user.

For a full list of GitHub Copilot audit log events, see [Audit log events for your organization](/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#copilot).

## [Further reading](#further-reading)

-   [Reviewing the audit log for your organization](/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)