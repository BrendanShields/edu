# Granting users access to GitHub Copilot in your enterprise

Enable Copilot for entire organizations or grant access directly to specific users.

## Who can use this feature?

Enterprise owners

Copilot Enterprise or Copilot Business

Copy as Markdown

## In this article

There are two main ways to grant access to Copilot in an enterprise:

-   **Assign licenses directly to users or teams** in the enterprise. This approach simplifies license management at scale and provides the option of granting Copilot licenses to users who don't consume a GitHub Enterprise license. This approach is currently only available for **Copilot Business** licenses.
-   **Enable Copilot for organizations**. This approach allows you to choose Copilot Business or Copilot Enterprise for individual organizations and give organization owners control to grant licenses to the users who need them most.

## [Assigning licenses to users or teams](#assigning-licenses-to-users-or-teams)

You can assign Copilot Business licenses directly to users or enterprise teams.

When you assign licenses to an enterprise team, users receive or lose access to Copilot when they are added or removed from the team. If you use Enterprise Managed Users, you can sync the team with an identity provider (IdP) group and manage licensing from your IdP.

### [Prerequisites](#prerequisites)

-   Set the **Policies for enterprise-assigned users** policy to define a default setting for these users when other enterprise policies are set to "No policy". See [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
-   If you want to assign licenses to users who are not already in your enterprise, you must first invite the users (personal accounts) or provision them from your identity provider (Enterprise Managed Users). For personal accounts, see [Inviting users to your enterprise directly](/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).
-   If you want to assign a license to an enterprise team, you must create the team first. See [Creating enterprise teams](/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### [Assigning licenses](#assigning-licenses)

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **Billing and licensing**.
    
3.  In the left sidebar, click **Licensing**.
    
4.  Next to "Copilot", click **Manage**.
    
    ![Screenshot of the Licensing page, with the "Manage" button highlighted in orange.](/assets/cb-34168/images/help/copilot/manage-licenses.png)
    
5.  Click the **All members** or **Enterprise Teams** tab.
    
6.  Click **Assign licenses**.
    
7.  Search for users or teams, then click **Add licenses**.
    
8.  Optionally, disable Copilot for organizations to prevent organization owners from assigning licenses. See [Disabling Copilot for organizations in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations).
    

## [Enabling Copilot for organizations](#enabling-copilot-for-organizations)

If your enterprise has a Copilot Enterprise plan, you can assign licenses for either Copilot Enterprise or Copilot Business.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **Billing and licensing**.
    
3.  In the "Billing and licensing" sidebar, click **Licensing**.
    
4.  In the "Copilot" section, click **Manage**.
    
5.  Next to "Organization access", choose whether to enable Copilot for all organizations or allow for specific organizations.
    
    ![Screenshot of the the "Organization access" section, with the dropdown menu highlighted.](/assets/cb-33432/images/help/copilot/organization-access-menu.png)
    
6.  If you selected **Allow for specific organizations**:
    
    1.  Click the **Organizations** tab.
    2.  Locate the organization for which you want to enable Copilot.
    3.  To the right of the organization name, select the **Copilot** dropdown menu.
        -   If your enterprise has a Copilot Business plan, click **Enabled**.
        -   If your enterprise has a Copilot Enterprise plan, click either **Copilot: Enterprise** or **Copilot: Business** to assign a specific Copilot plan to the organization.

### [Next steps](#next-steps)

After you've enabled Copilot for an organization in your enterprise, owners of the organization can grant access to some or all members of the organization. See [Granting access to GitHub Copilot for members of your organization](/en/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization).

## [Further reading](#further-reading)

-   [GitHub Copilot licenses](/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
-   [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)