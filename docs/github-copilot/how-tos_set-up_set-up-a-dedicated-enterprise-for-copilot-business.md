# Setting up a dedicated enterprise for GitHub Copilot Business

Learn how to configure an enterprise account for use with GitHub Copilot only.

Copy as Markdown

## In this article

You can create an enterprise account specifically for managing Copilot Business licenses, without adopting GitHub Enterprise. With this account, you will have access to enterprise-grade integrations with identity providers for authentication and provisioning, without needing to pay for GitHub Enterprise licenses. See [About enterprise accounts for Copilot Business](/en/copilot/concepts/about-enterprise-accounts-for-copilot-business).

## [1\. Create an enterprise account](#1-create-an-enterprise-account)

Important

If you're purchasing Copilot Business through GitHub's sales team, your enterprise account will be created for you. Skip to step 2.

You need to create an enterprise account, and the way to do that is to start a trial of GitHub Enterprise Cloud.

[Set up a trial of GitHub Enterprise Cloud](https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise)

Don’t create any organizations during setup. Adding users to organizations assigns them GitHub Enterprise licenses, while adding users directly to the enterprise keeps your setup limited to Copilot Business.

## [2\. Add users to your enterprise](#2-add-users-to-your-enterprise)

Once you have an enterprise account, add the people who will receive Copilot Business licenses. How you add users depends on your enterprise type.

### [Enterprise with personal accounts](#enterprise-with-personal-accounts)

Invite users directly to your enterprise. For detailed steps, see [Inviting users to your enterprise directly](/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).

### [Enterprise with managed users](#enterprise-with-managed-users)

If your enterprise uses Enterprise Managed Users, you must provision user accounts from your identity provider (IdP) through SCIM. For setup and provisioning guidance, see [Getting started with Enterprise Managed Users](/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

Provisioned users will appear automatically in your enterprise’s **People** list. Later, you'll assign Copilot Business licenses directly to these users or to enterprise teams synced with your IdP.

## [3\. Create teams (optional)](#3-create-teams-optional)

You can group users to scale license assignment by creating and managing enterprise teams. If you plan to manage access in groups, create those groups now. See [Creating enterprise teams](/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## [4\. Enable Copilot for the enterprise](#4-enable-copilot-for-the-enterprise)

Before you can assign licenses, an **enterprise owner** must enable Copilot for the enterprise.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **Billing and licensing**.
3.  In the left sidebar, click **Licensing**.
4.  Next to "Copilot", click **Enable**.

## [5\. Assign Copilot licenses](#5-assign-copilot-licenses)

Next, give people access to Copilot by assigning Copilot Business licenses to users or enterprise teams directly from the enterprise level.

For detailed steps, see [Granting users access to GitHub Copilot in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## [6\. Convert your trial to a paid enterprise account](#6-convert-your-trial-to-a-paid-enterprise-account)

To continue using Copilot Business after your trial, convert your trial to a paid enterprise account. See [Setting up a trial of GitHub Enterprise Cloud](/en/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud#purchasing-github-enterprise).

## [Next steps](#next-steps)

After setting up Copilot Business for your enterprise, you can help your developers start using Copilot and measure its impact across your organization. See [Driving GitHub Copilot adoption in your company](/en/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).

If you ever want to access the full range of GitHub features in the future, you can create organizations and add users to them.