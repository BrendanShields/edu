# Using your LLM provider API keys with Copilot

Learn how to integrate your preferred custom models with GitHub Copilot by using your own LLM API keys, and make them available to your organization members.

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

As an organization owner, you may have specific requirements for governance, data security, and compliance. Setting up your own API keys allows you to address:

-   **Governance and compliance:** Choose LLM providers that comply with your organization's policies and regulatory requirements.
-   **Cost management:** Align with your existing payment methods, contracts, credits, or negotiated rates, and avoid usage overages.
-   **Visibility and control:** Manage which models your team can access, and monitor usage through your provider's existing dashboards and billing.
-   **Flexibility:** Support custom or specialized models that your organization already uses.

## [Adding your key to an organization account](#adding-your-key-to-an-organization-account)

Important

We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

After you've added your key and selected one or more models, you and your organization members will be able to use them with GitHub Copilot Chat. Your models will appear at the bottom of the model picker, under the organization name.

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**.
    
4.  Under "Copilot", click **Models**.
    
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
     

## [Further reading](#further-reading)

-   [Using your LLM provider API keys with Copilot](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys) in our documentation for enterprise accounts.
-   [About GitHub Copilot Chat](/en/copilot/concepts/chat)