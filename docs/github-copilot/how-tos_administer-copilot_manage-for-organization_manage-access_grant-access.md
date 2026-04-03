# Granting access to GitHub Copilot for members of your organization

Grant access to GitHub Copilot for some or all of the members of your organization.

## Who can use this feature?

Organization owners for organizations with a Copilot Business plan.

Copy as Markdown

## In this article

## [Configuring access to GitHub Copilot in your organization](#configuring-access-to-github-copilot-in-your-organization)

After setting up a Copilot Business plan, an organization owner can grant GitHub Copilot access to members of their organization.

Billing for GitHub Copilot starts when you grant an organization member access, irrespective of when they first use Copilot. If you grant an organization member access midway through a billing cycle, the cost is prorated for the remainder of the cycle. For more information, see [GitHub Copilot licenses](/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## [Granting access to GitHub Copilot for all current and future users in your organization](#granting-access-to-github-copilot-for-all-current-and-future-users-in-your-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
2.  Next to the organization, click **Settings**.
3.  In the "Code, planning, and automation" section of the sidebar, click **Copilot**, and then click **Access**.
4.  If the **Allow this organization to assign seats** button is displayed, click this button.
5.  Click **Start adding seats**.
6.  To enable GitHub Copilot for all current and future users in your organization, select **Purchase for all members**.
7.  In the "Confirm seats purchase for all members" dialog, to confirm that you want to enable GitHub Copilot for all current and future users in your organization, click **Purchase seats**.

## [Granting access to GitHub Copilot for specific users in your organization](#granting-access-to-github-copilot-for-specific-users-in-your-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the "Code, planning, and automation" section of the sidebar, click **Copilot**, and then click **Access**.
    
4.  If the **Allow this organization to assign seats** button is displayed, click this button.
    
5.  Click **Start adding seats**.
    
6.  To enable GitHub Copilot for selected teams or users in your organization, select **Purchase for selected members**.
    
7.  In the "Enable Copilot access for users and teams" dialog, click one of the two tabs.
    
    ![Screenshot of the "enable access for selected members" dialog.](/assets/cb-36645/images/help/copilot/enable-access-for-selected-members.png)
    
    -   Click **Users and teams** to search for and add individual users or teams.
        
        To search for a user, type their username or full name in the search bar. If you select a user who is not currently a member of your organization, they will be invited to join your organization when you click **Continue to purchase** followed by **Purchase seats**. Outside collaborators will receive a Copilot seat but will not be sent an organization invite.
        
    -   Click **Upload CSV** to add users in bulk by uploading a CSV file.
        
        To add members in bulk, click **Choose CSV to upload**, and then upload a CSV file including either the username or email address for each member you want to add, separated by a comma. The file can contain a mixture of usernames and email addresses.
        
        Warning
        
        When you upload a CSV file, unless you're using Enterprise Managed Users, GitHub Copilot will search all users on GitHub.com for matches. If the CSV includes users who are not members of your organization, they will be invited to join your organization when you click **Continue to purchase** followed by **Purchase seats**. Outside collaborators will receive a Copilot seat but will not be sent an organization invite. This warning does not apply to accounts using Enterprise Managed Users.
        
        Review the list of users generated from your CSV file. Clear the selection of any users you do not want to add.
        
8.  Click **Continue to purchase**, then click **Purchase seats**.
    

## [Using the API to grant access to GitHub Copilot](#using-the-api-to-grant-access-to-github-copilot)

You can use GitHub's REST API to grant access to GitHub Copilot for teams, or specific users, in your organization. See [Add teams to the Copilot subscription for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-teams-to-the-copilot-subscription-for-an-organization) and [Add users to the Copilot subscription for an organization](/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-users-to-the-copilot-subscription-for-an-organization).

GitHub has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval. To learn about options for setting up this process, see [Setting up a self-serve process for GitHub Copilot licenses](/en/copilot/rolling-out-github-copilot-at-scale/setting-up-a-self-serve-process-for-github-copilot-licenses).

## [Further reading](#further-reading)

-   [GitHub Copilot Trust Center](https://copilot.github.trust.page)
-   [Managing policies and features for GitHub Copilot in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization)
-   [Reviewing user activity data for GitHub Copilot in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)
-   [Revoking access to GitHub Copilot for members of your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)