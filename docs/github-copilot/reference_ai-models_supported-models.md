# Supported AI models in GitHub Copilot

Learn about the supported AI models in GitHub Copilot.

Copy as Markdown

## In this article

GitHub Copilot supports multiple models, each with different strengths. Some models prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or working with multimodal inputs (like images and code together).

Depending on your Copilot plan and where you're using it—such as GitHub.com or an IDE—you may have access to different models.

Note

-   Model availability is subject to change. Some models may be replaced or updated over time.
-   In Visual Studio Code you can add more models than those that are available by default with your Copilot subscription. See [Changing the AI model for GitHub Copilot Chat](/en/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode#adding-more-models).

For all of the default AI models, input prompts and output completions run through GitHub Copilot's content filters for harmful, offensive, or off-topic content, and for public code matching when enabled.

## [Supported AI models in Copilot](#supported-ai-models-in-copilot)

This table lists the AI models available in Copilot, along with their release status and availability in different modes.

Model name

Provider

Release status

Agent mode

Ask mode

Edit mode

GPT-4.1

OpenAI

GA

GPT-5 mini

OpenAI

GA

GPT-5.1

OpenAI

GA

GPT-5.1-Codex

OpenAI

GA

GPT-5.1-Codex-Mini

OpenAI

Public preview

GPT-5.1-Codex-Max

OpenAI

GA

GPT-5.2

OpenAI

GA

GPT-5.2-Codex

OpenAI

GA

GPT-5.3-Codex

OpenAI

GA

GPT-5.4

OpenAI

GA

GPT-5.4 mini

OpenAI

GA

Claude Haiku 4.5

Anthropic

GA

Claude Opus 4.5

Anthropic

GA

Claude Opus 4.6

Anthropic

GA

Claude Opus 4.6 (fast mode) (preview)

Anthropic

Public preview

Claude Sonnet 4

Anthropic

GA

Claude Sonnet 4.5

Anthropic

GA

Claude Sonnet 4.6

Anthropic

GA

Gemini 2.5 Pro

Google

GA

Gemini 3 Flash

Google

Public preview

Gemini 3 Pro

Google

Public preview

Gemini 3.1 Pro

Google

Public preview

Grok Code Fast 1

xAI

GA

Raptor mini

Fine-tuned GPT-5 mini

Public preview

Goldeneye

Fine-tuned GPT-5.1-Codex

Public preview

## [Model retirement history](#model-retirement-history)

The following table lists AI models that are retired or scheduled for retirement from Copilot, along with their retirement dates and suggested alternatives.

Model name

Retirement date

Suggested alternative

Claude Opus 4.1

2026-02-17

Claude Opus 4.6

GPT-5

2026-02-17

GPT-5.2

GPT-5-Codex

2026-02-17

GPT-5.2-Codex

Claude Sonnet 3.5

2025-11-06

Claude Haiku 4.5

Claude Opus 4

2025-10-23

Claude Opus 4.6

Claude Sonnet 3.7

2025-10-23

Claude Sonnet 4.6

Claude Sonnet 3.7 Thinking

2025-10-23

Claude Sonnet 4.6

Gemini 2.0 Flash

2025-10-23

Gemini 2.5 Pro

o1-mini

2025-10-23

GPT-5 mini

o3

2025-10-23

GPT-5.2

o3-mini

2025-10-23

GPT-5 mini

o4-mini

2025-10-23

GPT-5 mini

## [Supported AI models per client](#supported-ai-models-per-client)

The following table shows which models are available in each client.

Note

-   When you use Copilot Chat in supported IDEs, **Auto** will automatically select the best model for you based on availability. You can manually choose a different model to override this selection. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection) and [Changing the AI model for GitHub Copilot Chat](/en/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode).
-   GPT-5-Codex is supported in Visual Studio Code v1.104.1 or higher.
-   GPT-5.1-Codex and GPT-5.1-Codex-Mini are supported in:
    -   Visual Studio Code versions 1.104.1 or higher
    -   JetBrains, Copilot plugin versions 1.5.61 or higher
    -   Xcode, Copilot plugin versions 0.45.0 or later
    -   Eclipse, Copilot plugin versions 0.13.0 or later

Model

GitHub.com

Copilot CLI

Visual Studio Code

Visual Studio

Eclipse

Xcode

JetBrains IDEs

Claude Haiku 4.5

Claude Opus 4.5

Claude Opus 4.6

Claude Opus 4.6 (fast mode) (preview)

Claude Sonnet 4

Claude Sonnet 4.5

Claude Sonnet 4.6

Gemini 2.5 Pro

Gemini 3 Flash

Gemini 3 Pro

Gemini 3.1 Pro

GPT-4.1

GPT-5 mini

GPT-5.1

GPT-5.1-Codex

GPT-5.1-Codex-Mini

GPT-5.1-Codex-Max

GPT-5.2

GPT-5.2-Codex

GPT-5.3-Codex

GPT-5.4

GPT-5.4 mini

Grok Code Fast 1

Raptor mini

Goldeneye

## [Supported AI models per Copilot plan](#supported-ai-models-per-copilot-plan)

The following table shows which AI models are available in each Copilot plan. For more information about the plans, see [Plans for GitHub Copilot](/en/copilot/about-github-copilot/plans-for-github-copilot).

Available models in chat

Copilot Free

Copilot Student

Copilot Pro

Copilot Pro+

Copilot Business

Copilot Enterprise

Claude Haiku 4.5

Claude Opus 4.5

Claude Opus 4.6

Claude Opus 4.6 (fast mode) (preview)

Claude Sonnet 4

Claude Sonnet 4.5

Claude Sonnet 4.6

Gemini 2.5 Pro

Gemini 3 Flash

Gemini 3 Pro

Gemini 3.1 Pro

GPT-4.1

GPT-5 mini

GPT-5.1

GPT-5.1-Codex

GPT-5.1-Codex-Mini

GPT-5.1-Codex-Max

GPT-5.2

GPT-5.2-Codex

GPT-5.3-Codex

GPT-5.4

GPT-5.4 mini

Grok Code Fast 1

Raptor mini

Goldeneye

## [Model multipliers](#model-multipliers)

Note

The multiplier for these models are subject to change.

-   Claude Sonnet 4.6
-   GPT-5.4 mini

Each model has a premium request multiplier, based on its complexity and resource usage. If you are on a paid Copilot plan, your premium request allowance is deducted according to this multiplier.

For more information about premium requests, see [Requests in GitHub Copilot](/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

Model

Multiplier for **paid plans**

Multiplier for **Copilot Free**

Claude Haiku 4.5

0.33

1

Claude Opus 4.5

3

Not applicable

Claude Opus 4.6

3

Not applicable

Claude Opus 4.6 (fast mode) (preview)

30

Not applicable

Claude Sonnet 4

1

Not applicable

Claude Sonnet 4.5

1

Not applicable

Claude Sonnet 4.6

1

Not applicable

Gemini 2.5 Pro

1

Not applicable

Gemini 3 Flash

0.33

Not applicable

Gemini 3 Pro

1

Not applicable

Gemini 3.1 Pro

1

Not applicable

GPT-4.1

0

1

GPT-4o

0

1

GPT-5 mini

0

1

GPT-5.1

1

Not applicable

GPT-5.1-Codex

1

Not applicable

GPT-5.1-Codex-Mini

0.33

Not applicable

GPT-5.1-Codex-Max

1

Not applicable

GPT-5.2

1

Not applicable

GPT-5.2-Codex

1

Not applicable

GPT-5.3-Codex

1

Not applicable

GPT-5.4

1

Not applicable

GPT-5.4 mini

0.33

Not applicable

Grok Code Fast 1

0.25

1

Raptor mini

0

1

Goldeneye

Not applicable

1

## [Fallback and long-term support (LTS) models](#fallback-and-long-term-support-lts-models)

For more information about fallback and LTS models, see [Base and long-term support (LTS) models](/en/copilot/concepts/fallback-and-lts-models).

## [Next steps](#next-steps)

-   For task-based guidance on selecting a model, see [AI model comparison](/en/copilot/reference/ai-models/model-comparison).
-   To configure which models are available to you, see [Configuring access to AI models in GitHub Copilot](/en/copilot/using-github-copilot/ai-models/configuring-access-to-ai-models-in-copilot).
-   To learn how to change your current model, see [Changing the AI model for GitHub Copilot Chat](/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [Changing the AI model for GitHub Copilot inline suggestions](/en/copilot/how-tos/use-ai-models/change-the-completion-model).
-   To learn more about Responsible Use and Responsible AI, see [Copilot Trust Center](https://copilot.github.trust.page/) and [Responsible use of GitHub Copilot features](/en/copilot/responsible-use-of-github-copilot-features).
-   To learn how Copilot Chat serves different AI models, see [Hosting of models for GitHub Copilot Chat](/en/copilot/reference/ai-models/model-hosting).