# Reviewing user activity data for GitHub Copilot in your organization

Review GitHub Copilot usage in your organization to make informed decisions about seat assignment.

## Who can use this feature?

Organization owners

Organizations with a plan to Copilot Business

Copy as Markdown

## In this article

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the "Code, planning, and automation" section of the sidebar, click **Copilot**, and then click **Access**.
    
4.  At the top of the page, under "GitHub Copilot," you can see an overview of your organization's GitHub Copilot usage. You can see the number seats assigned through your Copilot Business plan, and the estimated monthly cost.
    
    ![Screenshot of the GitHub Copilot usage overview.](/assets/cb-26806/images/help/copilot/copilot-usage-overview.png)
    
5.  Alternatively, under "Access management," you can use the **Sort** options to sort the list of users by when they last used GitHub Copilot.
    
6.  For more detailed information, you can retrieve the **Activity report**. GitHub generates a report for you, which you can download as a CSV file.
    

## [Using the API to retrieve assignment information](#using-the-api-to-retrieve-assignment-information)

You can use GitHub's REST API to get details about the assignment of GitHub Copilot seats in your organization. See [Get Copilot seat information and settings for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-information-and-settings-for-an-organization), [List all Copilot seat assignments for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#list-all-copilot-seat-assignments-for-an-organization), and [Get Copilot seat assignment details for a user](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#get-copilot-seat-assignment-details-for-a-user).

## [Troubleshooting `last_activity_at` data](#troubleshooting-last_activity_at-data)

If you believe a user's `last_activity_at` date should be more recent than shown in the CSV or API report, wait 24 hours and check again. If their recent Copilot usage is still not reflected in their `last_activity_at` date, have the user check that telemetry is enabled in their IDE settings.

For more information about this property and other data in the activity report, see [Metrics data properties for GitHub Copilot](/en/copilot/reference/metrics-data).

## [Further reading](#further-reading)

-   [GitHub Copilot Trust Center](https://copilot.github.trust.page)
-   [Granting access to GitHub Copilot for members of your organization](/en/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)
-   [Revoking access to GitHub Copilot for members of your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)
-   [Reviewing changes to content exclusions for GitHub Copilot](/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/reviewing-changes-to-content-exclusions-for-github-copilot)