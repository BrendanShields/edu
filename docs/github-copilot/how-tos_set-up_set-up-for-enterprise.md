# Setting up GitHub Copilot for your enterprise

Follow these steps to set up GitHub Copilot in your enterprise.

## Who can use this feature?

Enterprise owners

Enterprises with a Copilot Enterprise or Copilot Business plan

Copy as Markdown

## In this article

## [1\. Enable GitHub Copilot in your Enterprise through payment verification](#1-enable-github-copilot-in-your-enterprise-through-payment-verification)

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **Settings**.
3.  Click the **Getting Started** tab.
4.  Under "Next steps", click **Verify your payment method**. This will enable GitHub Copilot in your enterprise.

After you've completed these steps, you will be able to confirm that GitHub Copilot is enabled in your enterprise's **AI Controls** tab.

## [2\. Set policies](#2-set-policies)

Control which Copilot features are available in your enterprise. See [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## [3\. Set up networking (if necessary)](#3-set-up-networking-if-necessary)

If your enterprise users connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [Copilot allowlist reference](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install custom SSL certificates on your users' machines. See [Configuring network settings for GitHub Copilot](/en/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#installing-custom-certificates).

## [4\. Assign licenses](#4-assign-licenses)

There are two main ways to grant access to Copilot in an enterprise:

-   **Assign licenses directly to users or teams** in the enterprise. This approach simplifies license management at scale and provides the option of granting Copilot licenses to users who don't consume a GitHub Enterprise license. This approach is currently only available for **Copilot Business** licenses.
-   **Enable Copilot for organizations**. This approach allows you to choose Copilot Business or Copilot Enterprise for individual organizations and give organization owners control to grant licenses to the users who need them most.

For instructions, see [Granting users access to GitHub Copilot in your enterprise](/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise).

Tip

If your enterprise is on GHE.com, users must perform some additional setup to authenticate to their account from their development environment. See [Using GitHub Copilot with an account on GHE.com](/en/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## [Next steps](#next-steps)

-   **Explore self-service license management options**. Many successful rollouts use a self-service model where developers can claim a license without approval. See [Setting up a self-serve process for GitHub Copilot licenses](/en/copilot/rolling-out-github-copilot-at-scale/setting-up-a-self-serve-process-for-github-copilot-licenses).
-   **Learn how to plan and implement an effective enablement process to drive Copilot adoption**. See [Driving GitHub Copilot adoption in your company](/en/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company).
-   **Enhance the development experience by enabling and training developers on the latest features**. For example, share context with Copilot Spaces, enable Copilot code review on pull requests, and allow developers to experiment with prompts using GitHub Models. For an example showing how these features fit together, see [Integrating agentic AI into your enterprise's software development lifecycle](/en/copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai).
-   **Add Copilot coding agent as a team member for asynchronous issue work**. See [Piloting GitHub Copilot coding agent in your organization](/en/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org).