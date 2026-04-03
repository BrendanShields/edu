# Managing GitHub Copilot policies as an individual subscriber

Find out how to change your personal settings on GitHub to configure GitHub Copilot's behavior.

## Who can use this feature?

Copilot Pro, Copilot Pro+, and Copilot Free

Copy as Markdown

## In this article

## [About GitHub Copilot settings on GitHub](#about-github-copilot-settings-on-github)

In addition to the configuration for the GitHub Copilot plugin in your supported IDE, you can configure settings for GitHub Copilot on GitHub. The settings apply wherever you use GitHub Copilot.

## [Enabling or disabling suggestions matching public code](#enabling-or-disabling-suggestions-matching-public-code)

Note

If you are a member of an organization on GitHub Enterprise Cloud who has been assigned a GitHub Copilot seat through your organization, you will not be able to configure suggestions matching public code in your personal account settings. Your setting for suggestions matching public code will be inherited from your organization or enterprise.

Your personal settings for GitHub Copilot include an option to either allow or block code suggestions that match publicly available code.

If you choose to block suggestions matching public code, in most GitHub Copilot products, GitHub Copilot checks code suggestions with their surrounding code of about 150 characters against public code on GitHub. If there is a match, or a near match, the suggestion is not shown to you.

If you choose to allow suggestions matching public code or use a product that does not support "Block" mode, when Copilot suggests matching code you can display details of the matches and click through to the relevant repositories on GitHub. For more information, see [Finding public code that matches GitHub Copilot suggestions](/en/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

1.  In the upper-right corner of any page on GitHub, click your profile picture, then click **Copilot settings**.
2.  To the right of **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.

## [Disabling or enabling Copilot coding agent in your repositories](#disabling-or-enabling-copilot-coding-agent-in-your-repositories)

Copilot coding agent allows you to assign Copilot to GitHub issues, or ask Copilot to raise a pull request from a prompt in Copilot Chat.

Note

-   Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.

Copilot coding agent is enabled in all repositories by default, but you can block it from being used in repositories owned by your own personal account by changing your account settings.

1.  In the upper-right corner of any page on GitHub, click your profile picture, then click **Copilot settings**.
2.  In the sidebar, under **Copilot**, click **Coding agent**.
3.  On the Copilot coding agent page, under "Policies," click the dropdown button for "Repository access," then choose either **No repositories**, **All repositories**, or **Only selected repositories**.
4.  If you choose **Only selected repositories**, click **Select repositories** and choose the repositories where you want to enable Copilot coding agent.

For GitHub Copilot Business and GitHub Copilot Enterprise subscribers, the ability to use Copilot coding agent is controlled by policy settings defined at the organization level. See [Adding GitHub Copilot coding agent to your organization](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

If the organization is owned by an enterprise, enablement may be controlled at the enterprise level. See [Managing GitHub Copilot coding agent in your enterprise](/en/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-copilot-coding-agent-in-your-enterprise).

## [Enabling or disabling third-party coding agents in your repositories](#enabling-or-disabling-third-party-coding-agents-in-your-repositories)

Note

Third-party agents are available in the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business, and GitHub Copilot Enterprise plans.

You can choose whether to allow the following coding agents to be enabled in your personal account:

-   Anthropic Claude
-   OpenAI Codex

Coding agents have access to the same repositories that Copilot coding agent has been enabled in.

To enable coding agents:

1.  Navigate to your account's [coding agent settings](https://github.com/settings/copilot/coding_agent?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-cca-settings-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026).
2.  On the Copilot coding agent page, under "Partner agents", click the toggle to enable the third-party agent you want to use.

## [Enabling or disabling web search for GitHub Copilot Chat](#enabling-or-disabling-web-search-for-github-copilot-chat)

You can enable web search for GitHub Copilot Chat. This setting is disabled by default. If you enable this setting, Copilot Chat will use Bing to search the internet for information related to a question. Bing search is particularly helpful when discussing new technologies or highly specific subjects.

1.  In the upper-right corner of any page on GitHub, click your profile picture, then click **Copilot settings**.
2.  To the right of **Copilot access to Bing**, select the dropdown menu, and then click **Enabled** or **Disabled**.

## [Model training and improvements](#model-training-and-improvements)

Note

GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models. Copilot Business and Copilot Enterprise customers' data is protected under GitHub's Data Protection Agreement, which prohibits such use without customer authorization.

Starting on April 24, 2026, if you have a **Copilot Free**, **Copilot Pro**, or **Copilot Pro+** plan, GitHub may use your interactions with GitHub features and services—including inputs, outputs, code snippets, and associated context—to train and improve AI models. This change allows us to build more intelligent, context-aware coding assistance based on real-world development patterns. You can opt-out from allowing your data to be used for training in your personal settings for GitHub Copilot. For information about how we use and share data, see our [Privacy Statement](/en/github/site-policy/github-privacy-statement).

1.  In the upper-right corner of any page on GitHub, click your profile picture, then click **Copilot settings**.
    
2.  Select the "Allow GitHub to use my data for AI model training" dropdown menu and click **Disabled**.