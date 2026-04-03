# Monitoring your GitHub Copilot usage and entitlements

Learn how you can monitor your monthly usage of Copilot and get the most value out of your Copilot plan.

## Who can use this feature?

Individual users on a paid Copilot plan can view their own usage and entitlements. For Copilot Business or Copilot Enterprise plans, organization admins and billing managers can view usage reports for members.

Copy as Markdown

## In this article

You can track your monthly usage of premium requests to help you get the most value from your Copilot plan.

Note

Premium request counters reset on the 1st of each month at 00:00:00 UTC.

## [Viewing premium request usage](#viewing-premium-request-usage)

There are multiple ways to view your premium request usage:

-   [View current usage directly within your IDE](#viewing-usage-in-your-ide)
-   [Viewing an overview in your Billing and licensing settings](#viewing-an-overview-in-your-billing-and-licensing-settings)
-   [View detailed analytics of your usage](#viewing-detailed-analytics-of-your-usage)

If you reach your limit for premium requests, you will be notified with a message in each of the Copilot interfaces you use. To download a usage report, see [Downloading usage reports](/en/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

For information about viewing premium request usage for an organization or enterprise, see [Viewing your usage of metered products and licenses](/en/billing/how-tos/products/view-productlicense-use).

### [Viewing usage in your IDE](#viewing-usage-in-your-ide)

If you're using Copilot in an editor, you can view your usage directly in the editor. For example, in Visual Studio Code, you can view information about features included in your plan, your progress towards any limits on your plan, and the date your allowance resets.

You can access usage information in the following IDEs.

-   **In Visual Studio Code**, click the Copilot icon () in the status bar.
-   **In Visual Studio**, click the Copilot icon () in the top right corner, then click **Copilot Consumptions**.
-   **In JetBrains IDEs**, click the Copilot icon () in the status bar, then select **View quota usage**.
-   **In Xcode**, click the Copilot icon () in the menu bar.
-   **In Eclipse**, click the Copilot icon () in the status bar at the bottom of Eclipse.

### [Viewing an overview in your Billing and licensing settings](#viewing-an-overview-in-your-billing-and-licensing-settings)

You can view an overview of your premium request usage at any time in your "Billing and licensing" settings on GitHub.com.

1.  Open your billing overview page: [https://github.com/settings/billing](https://github.com/settings/billing?ref_product=github&ref_type=engagement&ref_style=text). The "Overview" page shows a summary of your current GitHub usage.
2.  Scroll down to the "Metered usage" area and click **Copilot** to show only your Copilot use.

### [Viewing detailed analytics of your usage](#viewing-detailed-analytics-of-your-usage)

Note

Premium request analytics data are available from **August 1, 2025** onward. Separate usage data for features that use premium requests is available from **November 1, 2025** for Copilot, Spark, and Copilot coding agent.

User-level analytics have different access permissions depending on your role.

-   Enterprise owners and billing managers can see premium request analytics by user.
-   Organization owners cannot view premium request analytics by user or use the `user` parameter in the API. To view user-level usage, these users can download a premium request usage report. See [Viewing your usage of metered products and licenses](/en/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

1.  Open your billing overview page: [https://github.com/settings/billing](https://github.com/settings/billing?ref_product=github&ref_type=engagement&ref_style=text).
    
2.  In the side bar, click **Premium request analytics** to show detailed analytics.
    
3.  Use the filter, "Group by", and "Timeframe" options to change the data displayed in the chart and table.
    
4.  Optionally, to download the data shown in the chart, click the button and select your preferred format.
    
    ![Screenshot of the usage chart on the "Premium request analytics" page with "Chart options" open and outlined in dark orange.](/assets/cb-28062/images/help/billing/premium-request-analytics-chart-download.png)
    

### [Downloading a usage report](#downloading-a-usage-report)

For details on how to request a usage report, see [Viewing your usage of metered products and licenses](/en/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

## [Optimizing usage of premium requests](#optimizing-usage-of-premium-requests)

You can use the following strategies to maximize the value of your premium requests:

-   **Choose the right model for the task**. Some models are better suited to different tasks. If you're using a premium request, you can strategically choose which model you use to get the best result from Copilot. See [AI model comparison](/en/copilot/reference/ai-models/model-comparison).
    
-   **Setting a budget**. Set a budget to track your overages and receive alerts when you reach 75%, 90%, or 100% of your budget. See [Setting up budgets to control spending on metered products](/en/billing/managing-your-billing/preventing-overspending#managing-budgets-for-your-personal-account).
    
-   **Monitor your usage regularly**. Check your usage in your GitHub account settings to see how many premium requests you’ve used. This helps you plan how much you can use for the rest of the month.
    
-   **Upgrade if needed**. If you find yourself consistently hitting your monthly allowance, consider upgrading to a plan with more premium requests included.
    
-   **Avoid retrying large prompts unnecessarily**. Submitting the same long or complex prompt multiple times may use more premium requests. Try rephrasing or simplifying your request when needed.
    
-   **Define whether users can use premium requests over their included allowance** (enterprises and organizations only). Set a policy to control whether users can incur extra costs for premium requests when they use up their included allowance. See [Managing the premium request allowance for your organization or enterprise](/en/copilot/how-tos/manage-and-track-spending/manage-request-allowances).
    

## [Managing premium request billing with multiple Copilot licenses](#managing-premium-request-billing-with-multiple-copilot-licenses)

If you have Copilot licenses from multiple standalone organizations or enterprises, you must define which entity is charged for your use of premium requests. Until you define a billing entity, all premium requests you make will be rejected.

In the Copilot feature settings for your personal account, a **Usage billed to** dropdown is displayed in the "Billing" section if you are assigned Copilot licenses by two or more enterprises or standalone organizations.

![Screenshot of the Copilot feature settings. The "Usage billed to" dropdown is open.](/assets/cb-42069/images/help/billing/copilot-billing-entity-dropdown.png)

You can change your billing entity selection at any time. All subsequent premium requests are billed to the newly selected entity.