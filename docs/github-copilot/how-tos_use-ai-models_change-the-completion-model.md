# Changing the AI model for GitHub Copilot inline suggestions

Learn how to change the default LLM for Copilot inline suggestions to a different model.

## Tool navigation

Copy as Markdown

## In this article

The following instructions are for VS Code. If you are using Visual Studio, or a JetBrains IDE, click the appropriate tab at the start of this article.

## [Prerequisites](#prerequisites)

You can switch the AI model that's used for Copilot inline suggestions if:

-   An alternative model is currently available
-   You are using the latest releases of VS Code with the latest version of the GitHub Copilot extension

Note

The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.

For more information, see [GitHub Copilot code suggestions in your IDE](/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## [Changing the AI model for inline suggestions](#changing-the-ai-model-for-inline-suggestions)

1.  Open the command palette by pressing Ctrl+Shift+P (Windows/Linux) / Command+Shift+P (Mac).
2.  Type `change completions model` and select the "GitHub Copilot: Change Completions Model" command.
3.  In the dropdown menu, select the model you want to use.

## [Checking which model is being used](#checking-which-model-is-being-used)

1.  Open the Settings editor by pressing Ctrl+, (Linux/Windows) / Command+, (Mac).
    
2.  Type `copilot completion` and look for the "GitHub > Copilot: Selected Completion Model" section.
    
    The field in this section displays the currently selected model. If the field is empty, the default model is being used.
    

The following instructions are for Visual Studio. If you are using VS Code, or a JetBrains IDE, click the appropriate tab at the start of this article.

## [Prerequisites](#prerequisites-1)

You can switch the AI model that's used for Copilot inline suggestions if:

-   An alternative model is currently available
-   You are using Visual Studio 17.14 Preview 2 or later

Note

The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.

For more information, see [GitHub Copilot code suggestions in your IDE](/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## [Changing the AI model for inline suggestions](#changing-the-ai-model-for-inline-suggestions-1)

1.  Click the icon in the top right corner.
2.  Click **Settings**, then click **Options**.
3.  Under **Copilot Completions**, use the dropdown menu to select the model you want to use.

The following instructions are for JetBrains IDEs. If you are using Visual Studio, or VS Code, click the appropriate tab at the start of this article.

## [Prerequisites](#prerequisites-2)

You can switch the AI model that's used for Copilot inline suggestions if:

-   An alternative model is currently available
-   You are using the latest release of JetBrains IDEs with the latest version of the GitHub Copilot extension

Note

The list of available models will change over time. When only one inline suggestion model is available, the model picker will only show that model. Preview models and additional inline suggestion models will be added to the picker as they become available.

For more information, see [GitHub Copilot code suggestions in your IDE](/en/copilot/concepts/completions/code-suggestions#changing-the-model-used-for-inline-suggestions).

## [Changing the AI model for inline suggestions](#changing-the-ai-model-for-inline-suggestions-2)

1.  In your JetBrains IDE, click the **File** menu (Windows) or the name of the application in the menu bar (macOS), then click **Settings**.
2.  In the left sidebar click **Tools**, click **GitHub Copilot**, then click **Completions**.
3.  Click the dropdown menu for **Model for completions** and select the model you want to use.
4.  Click **OK**.