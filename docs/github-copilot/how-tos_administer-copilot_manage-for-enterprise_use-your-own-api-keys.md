# Using your LLM provider API keys with Copilot

Learn how to integrate your preferred custom models with GitHub Copilot by using your own LLM API keys, and make them available for organizations in your enterprise account.

Copy as Markdown

## In this article

Note

The ability to bring your own API keys to GitHub Copilot is in public preview and subject to change.

You can bring your own API keys to GitHub Copilot, and enable teams to use your preferred large language model (LLM) providers with GitHub Copilot Chat.

API keys from the following providers are supported:

-   Anthropic
-   AWS Bedrock
-   Google AI Studio
-   Microsoft Foundry
-   OpenAI
-   OpenAI-compatible providers
-   xAI

Fine-tuned models are also supported, but functionality and quality of results can vary depending on the fine-tuning setup. You should test your model and review its outputs carefully before using it in production.

## [Why bring your own API keys?](#why-bring-your-own-api-keys)

As an enterprise owner, you may have specific requirements for governance, data security, and compliance. Setting up your own API keys allows you to address:

-   **Governance and compliance:** Choose LLM providers that comply with your organization's policies and regulatory requirements.
-   **Cost management:** Align with your existing payment methods, contracts, credits, or negotiated rates, and avoid usage overages.
-   **Visibility and control:** Manage which models your team can access, and monitor usage through your provider's existing dashboards and billing.
-   **Flexibility:** Support custom or specialized models that your organization already uses.

## [Adding your key to an enterprise account](#adding-your-key-to-an-enterprise-account)

Important

We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

After you've added your key and selected one or more models, you and members of your organizations will be able to use them with GitHub Copilot Chat. Your models will appear at the bottom of the model picker, under the enterprise name.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **AI controls**.
    
3.  In the sidebar, click **Copilot**.
    
4.  Click **Configure allowed models**.
    
5.  Click the **Custom models** tab.
    
6.  Above the list of API keys, click **Add API key**.
    
7.  Under "Provider", select the LLM provider you want to use.
    
8.  Under "Name", type a name for this key. This will be shown in the model picker.
    
9.  Under "API key", type or paste your key.
    
10.  Depending on which provider you are using, select or add models.
     
     -   If you're using OpenAI, Anthropic, or xAI, click in the API key text field to fetch the models associated with your key. Next, under "Available models", select the models you want to use.
         
         ![Screenshot of the "Add API key" form. The "Fetch new models" button is highlighted with an orange outline.](/assets/cb-71871/images/help/copilot/byok-add.png)
         
     -   If you're using Microsoft Foundry, type your deployment URL in the field under "Deployment URL". Next, in the field under "Available models", type a Model ID and click to add it.
         
         If your models have different deployment URLs, they cannot be added to the same API key. Create a separate API key for each deployment URL.
         
         ![Screenshot of the "Add API key" form. The model text field and "Add model" button is highlighted with an orange outline.](/assets/cb-97361/images/help/copilot/byok-add-foundry.png)
         
11.  After you select or add the models you want to make available, click **Save**.
     

## [Managing availability of custom models in your organizations](#managing-availability-of-custom-models-in-your-organizations)

You can choose whether the models you have added are available to organizations in your enterprise account.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **AI controls**.
3.  In the sidebar, click **Copilot**.
4.  Click **Configure allowed models**.
5.  Click the **Custom models** tab.
6.  Above the list of API keys, click the **Added models** tab.
7.  Next to a model, click **Configure**. If any organizations already have access to the model, instead of "Configure", you will need to click **All organizations** or **X organizations**.
8.  In the modal that opens, click the **Access** tab.
    
    Note
    
    The model must be set to 'Enabled' before the "Access" tab will be available.
    
9.  Choose how the model should be made available to organizations:
    -   To make the model available to all organizations in your enterprise account, select **Allow for all organizations**.
    -   To only make the model available for specific organizations, select **Choose per organization**, and check or uncheck the organizations listed below.
10.  Click **Save**.

## [Further reading](#further-reading)

-   [Using your LLM provider API keys with Copilot](/en/copilot/how-tos/administer-copilot/manage-for-organization/use-your-own-api-keys) in our documentation for organizations.
-   [About GitHub Copilot Chat](/en/copilot/concepts/chat)