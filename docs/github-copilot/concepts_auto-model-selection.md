# About Copilot auto model selection

Automatically select models for Copilot Chat and Copilot coding agent.

## Who can use this feature?

Auto model selection for Copilot Chat is available with all GitHub Copilot plans.  
Auto model selection for Copilot coding agent is available for GitHub Copilot Pro and GitHub Copilot Pro+ plans.

Copy as Markdown

## In this article

## [Overview](#overview)

Experience less rate limiting and reduce the mental load of choosing a model by letting Copilot auto model selection choose the best available model on your behalf.

Copilot auto model selection intelligently chooses models based on real time system health and model performance. You benefit from:

-   Reduced rate limiting
-   Lower latency and errors
-   Discounted multipliers for paid plans (Copilot Chat only)

Auto model selection **won't** include these models:

-   Models excluded by administrator policies. See [Configuring access to AI models in GitHub Copilot](/en/copilot/how-tos/use-ai-models/configure-access-to-ai-models).
-   Models with premium request multipliers greater than one. See [Supported AI models in GitHub Copilot](/en/copilot/reference/ai-models/supported-models#model-multipliers).
-   Models not available in your plan. See [Supported AI models in GitHub Copilot](/en/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

Note

Soon Copilot auto model selection will choose the best model for you based on your task.

## [Auto model selection in Copilot Chat](#auto-model-selection-in-copilot-chat)

Auto model selection is generally available in the following IDEs:

-   VS Code
-   JetBrains IDEs

Auto model selection is in public preview for the following IDEs:

-   Visual Studio
-   Eclipse
-   Xcode

When you select **Auto** in Copilot Chat, Auto model selection may choose from the following list of models, subject to your policies and subscription type. Models may change over time.

-   GPT-4.1
-   GPT-5.2-Codex
-   GPT-5.3-Codex
-   Claude Haiku 4.5
-   Claude Sonnet 4.5
-   Grok Code Fast 1
-   Raptor mini

Tip

To see which model was used for each response, hover over the response in Copilot Chat.

You can change the model Copilot uses to generate responses to chat prompts. You may find that different models perform better, or provide more useful responses, depending on the type of questions you ask. Options include premium models with advanced capabilities. See [Changing the AI model for GitHub Copilot Chat](/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).

### [Multiplier discounts](#multiplier-discounts)

If you are on a paid Copilot plan and use auto model selection, models qualify for a 10% multiplier discount. See [Requests in GitHub Copilot](/en/copilot/concepts/billing/copilot-requests#model-multipliers).

### [Enabling access during public preview](#enabling-access-during-public-preview)

During the public preview, if you're using a Copilot Business or Copilot Enterprise plan, the organization or enterprise that provides your plan must have the **Editor preview features** policy enabled. See [Managing policies and features for GitHub Copilot in your organization](/en/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [Managing policies and features for GitHub Copilot in your enterprise](/en/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom).

## [Auto model selection in Copilot coding agent](#auto-model-selection-in-copilot-coding-agent)

When you select **Auto** in Copilot coding agent, Auto model selection currently chooses from the following list of models, subject to your policies and subscription type:

-   Claude Sonnet 4.5

You can change the model Copilot uses. You may find that different models perform better, or provide more useful responses, depending on the type of task you give Copilot. See [Changing the AI model for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/changing-the-ai-model).