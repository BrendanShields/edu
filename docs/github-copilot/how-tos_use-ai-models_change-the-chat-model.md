# Changing the AI model for GitHub Copilot Chat

Learn how to switch between models for Copilot Chat.

## Tool navigation

Copy as Markdown

## In this article

Choose from a selection of models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

To view the available models per client, see [Supported AI models in GitHub Copilot](/en/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot#supported-models-per-client).

Note

Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [Requests in GitHub Copilot](/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

Copilot allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

If you access Copilot Chat through a Copilot Business subscription, your organization must grant members the ability to switch to a different model. See [Managing policies and features for GitHub Copilot in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization).

Changing the model used by Copilot Chat does not affect the model used for Copilot inline suggestions. See [Changing the AI model for GitHub Copilot inline suggestions](/en/copilot/how-tos/use-ai-models/change-the-completion-model).

### [Limitations of AI models for Copilot Chat](#limitations-of-ai-models-for-copilot-chat)

Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

## [Changing the AI model](#changing-the-ai-model)

These instructions are for Copilot on the GitHub website. For instructions on different clients, click the appropriate tab at the top of this page.

Note

If you use Copilot Extensions, they may override the model you select.

If you access Copilot Chat through a Copilot Business subscription, your organization must grant members the ability to switch to a different model. See [Managing policies and features for GitHub Copilot in your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization).

1.  In the top right of any page on GitHub, click the icon.
    
    ![Screenshot of the 'Copilot' button, highlighted with a dark orange outline.](/assets/cb-4254/images/help/copilot/copilot-icon-top-right.png)
    
2.  At the bottom of Copilot Chat, select the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.
    
3.  Optionally, after submitting a prompt, you can regenerate the same prompt using a different model by clicking the retry icon () below the response. The new response will use your selected model and maintain the full context of the conversation.
    

## [Changing the AI model](#changing-the-ai-model-1)

These instructions are for Visual Studio Code. For instructions on different clients, click the appropriate tab at the top of this page.

Note

-   If you use Copilot Extensions, they may override the model you select.
-   Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

1.  Open Copilot Chat by clicking the icon in the title bar of Visual Studio Code.
2.  At the bottom of the chat view, select the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.

Note

If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection).

## [Adding more models](#adding-more-models)

You can expand the model options that are available to power Copilot Chat. You can add models from:

-   **A model provider**—such as Anthropic, Gemini, OpenAI, and others.
-   **The AI Toolkit for Visual Studio Code**.

Note

Using the AI Toolkit for VS Code is in public preview and subject to change.

### [Prerequisites](#prerequisites)

-   Depending on the provider or model you choose, you may need to supply an API key, or model ID, from the provider, or a GitHub personal access token (PAT).
-   To add models from the AI Toolkit for Visual Studio Code, you must [install the AI Toolkit extension](vscode:extension/ms-windows-ai-studio.windows-ai-studio?ref_product=copilot&ref_type=engagement&ref_style=text).

### [Adding models](#adding-models)

1.  In the Copilot chat view, click the **CURRENT-MODEL** dropdown menu.
    
2.  Click **Manage Models**.
    
    ![Screenshot of the 'Manage Models' option, highlighted with a dark orange outline.](/assets/cb-24419/images/help/copilot/vsc-manage-models-option.png)
    
    A list of providers is displayed.
    
    If you have installed the AI Toolkit, then additional providers, added via the AI Toolkit, are also listed.
    
    ![Screenshot of the 'Manage Language Models' list.](/assets/cb-34495/images/help/copilot/vsc-manage-models-list.png)
    
3.  Click the provider whose model(s) you want to add.
    
4.  Depending on which provider you selected, you may be prompted to enter a GitHub PAT, an API key for the provider, or a model ID for a specific model.
    
    Enter the required information, then press Enter.
    
    A list of available models is displayed.
    
5.  Select the model(s) you want to add, then click **OK**.
    

The models you selected are now available in the model picker in the chat view.

If you added a model from a provider via the AI Toolkit then the first time you use the model, you will be prompted to download it. You may also be prompted to authenticate with the provider.

Tip

If you're already using chat with auto model selection, you'll need to start a new chat session to switch models. To start a new session, in the top right of the chat view, click new chat.

## [Changing the AI model](#changing-the-ai-model-2)

These instructions are for Visual Studio. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model Copilot Chat, you must use Visual Studio 2022 version 17.12 or later. See the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).

Note

-   If you use Copilot Extensions, they may override the model you select.
-   Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

1.  In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
2.  In the bottom right of the chat view, select the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.

Note

If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection).

## [Changing the AI model](#changing-the-ai-model-3)

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

Note

-   If you use Copilot Extensions, they may override the model you select.
-   Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

1.  Click the icon in the status bar.
2.  In the popup menu, click **Open GitHub Copilot Chat**.
3.  In the bottom right of the chat view, select an AI model of your choice from the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.

Note

If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection).

## [Changing the AI model](#changing-the-ai-model-4)

These instructions are for the Eclipse IDE. For instructions on different clients, click the appropriate tab at the top of this page.

Note

-   If you use Copilot Extensions, they may override the model you select.
-   Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

1.  Click the icon in the status bar.
2.  In the popup menu, click **Open Chat**.
3.  In the bottom right of the chat panel, click the currently selected AI model, then select an alternative model from the popup menu.

Note

If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection).

## [Changing the AI model](#changing-the-ai-model-5)

These instructions are for Xcode. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model Copilot Chat, you must install the GitHub Copilot for Xcode extension. See [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).

Note

-   If you use Copilot Extensions, they may override the model you select.
-   Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

1.  To open the chat view, click **Editor** in the menu bar, then click **Copilot** then **Open Chat**. Copilot Chat opens in a new window.
2.  In the bottom right of the chat view, select the **CURRENT-MODEL** dropdown menu, then click the AI model of your choice.

Note

If you select **Auto**, Copilot auto model selection will select the best model based on availability and to help reduce rate limiting. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection).

## [Further reading](#further-reading)

-   [Changing the AI model for GitHub Copilot inline suggestions](/en/copilot/how-tos/use-ai-models/change-the-completion-model)
-   [AI model comparison](/en/copilot/reference/ai-models/model-comparison)

-   [AI language models in VS Code](https://code.visualstudio.com/docs/copilot/language-models#_bring-your-own-language-model-key) in the Visual Studio Code documentation.