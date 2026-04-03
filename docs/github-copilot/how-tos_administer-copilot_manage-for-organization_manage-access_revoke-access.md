# Revoking access to GitHub Copilot for members of your organization

Remove access to GitHub Copilot for some or all of the members of your organization.

## Who can use this feature?

Organization owners for organizations with a Copilot Business plan.

Copy as Markdown

## In this article

## [How revoking access affects billing](#how-revoking-access-affects-billing)

Revoking access takes effect from the start of the next billing cycle. If you remove a seat during a cycle, the user will have access to Copilot for the remainder of the billing cycle. For more information, see [GitHub Copilot licenses](/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## [Revoking access to Copilot for your whole organization](#revoking-access-to-copilot-for-your-whole-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the "Access" section of the sidebar, click **Billing & licensing** and then **Licensing** (new platform). Alternatively, in the "Code planning, and automation" section of the sidebar, click **Copilot**, and then click **Access** (original platform).
    
    Important
    
    If you have not configured all policies for Copilot, you will not be able to complete the following steps. If that is the case, click **Go to policies** and ensure all policies are configured before proceeding.
    
4.  Under "Copilot Business is active in your organization," to revoke GitHub Copilot access for all users in your organization, select **Disabled**.
    
5.  In the "Remove Copilot access" dialog, click **Confirm and remove seats**.
    

## [Revoking access to Copilot for specific users in your organization](#revoking-access-to-copilot-for-specific-users-in-your-organization)

Removing a user from the organization(s) that had granted them Copilot access will automatically revoke their Copilot access. Alternatively, you can revoke Copilot access while preserving their organization membership.

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the "Code, planning, and automation" section of the sidebar, click **Copilot**, and then click **Access**.
    
4.  Under "Copilot Business is active in your organization," select **Enabled For: selected members**.
    
    -   In the "Confirm policy update" dialog, click **Renew seats**.
5.  Under "Access management," in the search bar, type the member's username or full name.
    
6.  To remove the member from the list of users who have access to Copilot, select the checkbox to the left of their username, then click **Cancel seat**.
    
    ![Screenshot of the Access management section, with a user selected and the 'Cancel seat' button highlighted.](/assets/cb-31963/images/help/copilot/cancel-copilot-seat.png)
    
7.  In the "Confirm seat removal" dialog, click **Remove seats**.
    

## [Using the API to revoke access to Copilot](#using-the-api-to-revoke-access-to-copilot)

You can use GitHub's REST API to revoke access to Copilot for teams, or specific users, in your organization. For example, you might want to write a script to automatically revoke seats for organization members who have not been using Copilot. See [Remove teams from the Copilot subscription for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-teams-from-the-copilot-subscription-for-an-organization) and [Remove users from the Copilot subscription for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-users-from-the-copilot-subscription-for-an-organization).

## [Further reading](#further-reading)

-   [GitHub Copilot Trust Center](https://copilot.github.trust.page)
-   [Granting access to GitHub Copilot for members of your organization](/en/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).
-   [Reviewing user activity data for GitHub Copilot in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)