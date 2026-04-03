# AI model comparison

Compare available AI models in Copilot Chat and choose the best model for your task.

Copy as Markdown

## In this article

## [Comparison of AI models for GitHub Copilot](#comparison-of-ai-models-for-github-copilot)

GitHub Copilot supports multiple AI models with different capabilities. The model you choose affects the quality and relevance of responses by Copilot Chat and Copilot inline suggestions. Some models offer lower latency, while others offer fewer hallucinations or better performance on specific tasks. This guide helps you pick the best model based on your task, not just model names.

Note

-   Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [Requests in GitHub Copilot](/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).
-   When you use Copilot Chat in supported IDEs, **Auto** will automatically select the best model for you based on availability. You can manually choose a different model to override this selection. See [About Copilot auto model selection](/en/copilot/concepts/auto-model-selection) and [Changing the AI model for GitHub Copilot Chat](/en/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode).

### [Recommended models by task](#recommended-models-by-task)

Use this table to find a suitable model quickly, see more detail in the sections below.

Model

Task area

Excels at (primary use case)

Further reading

GPT-4.1

General-purpose coding and writing

Fast, accurate code completions and explanations

[GPT-4.1 model card](https://openai.com/index/gpt-4-1/)

GPT-5 mini

General-purpose coding and writing

Fast, accurate code completions and explanations

[GPT-5 mini model card](https://cdn.openai.com/gpt-5-system-card.pdf)

GPT-5.1

Deep reasoning and debugging

Multi-step problem solving and architecture-level code analysis

[GPT-5.1 model card](https://cdn.openai.com/pdf/4173ec8d-1229-47db-96de-06d87147e07e/5_1_system_card.pdf)

GPT-5.1-Codex

Deep reasoning and debugging

Multi-step problem solving and architecture-level code analysis

Not available

GPT-5.1 Codex Max

Agentic software development

Agentic tasks

[GPT-5.1-Codex-Max model card](https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf)

GPT-5.1-Codex-Mini

Deep reasoning and debugging

Multi-step problem solving and architecture-level code analysis

Not available

GPT-5.2

Deep reasoning and debugging

Multi-step problem solving and architecture-level code analysis

[GPT-5.2 model card](https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf)

GPT-5.2-Codex

Agentic software development

Agentic tasks

[GPT-5.2-Codex model card](https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf)

GPT-5.3-Codex

Agentic software development

Agentic tasks

[GPT-5.3-Codex model card](https://deploymentsafety.openai.com/gpt-5-3-codex)

GPT-5.4

Deep reasoning and debugging

Multi-step problem solving and architecture-level code analysis

[GPT-5.4 model card](https://deploymentsafety.openai.com/gpt-5-4-thinking/introduction)

GPT-5.4 mini

Agentic software development

Codebase exploration and is especially effective when using grep-style tools

Not available

Claude Haiku 4.5

Fast help with simple or repetitive tasks

Fast, reliable answers to lightweight coding questions

[Claude Haiku 4.5 model card](https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf)

Claude Opus 4.5

Deep reasoning and debugging

Complex problem-solving challenges, sophisticated reasoning

[Claude Opus 4.5 model card](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf)

Claude Opus 4.6

Deep reasoning and debugging

Complex problem-solving challenges, sophisticated reasoning

[Claude Opus 4.6 model card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)

Claude Opus 4.6 (fast mode) (preview)

Deep reasoning and debugging

Complex problem-solving challenges, sophisticated reasoning

Not available

Claude Sonnet 4.0

Deep reasoning and debugging

Performance and practicality, perfectly balanced for coding workflows

[Claude Sonnet 4.0 model card](https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf)

Claude Sonnet 4.5

General-purpose coding and agent tasks

Complex problem-solving challenges, sophisticated reasoning

[Claude Sonnet 4.5 model card](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf)

Claude Sonnet 4.6

General-purpose coding and agent tasks

Complex problem-solving challenges, sophisticated reasoning

[Claude Sonnet 4.6 model card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)

Gemini 2.5 Pro

Deep reasoning and debugging

Complex code generation, debugging, and research workflows

[Gemini 2.5 Pro model card](https://storage.googleapis.com/model-cards/documents/gemini-2.5-pro.pdf)

Gemini 3 Flash

Fast help with simple or repetitive tasks

Fast, reliable answers to lightweight coding questions

[Gemini 3 Flash model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Flash-Model-Card.pdf)

Gemini 3 Pro

Deep reasoning and debugging

Complex code generation, debugging, and research workflows

[Gemini 3 Pro model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)

Gemini 3.1 Pro

Deep reasoning and debugging

Effective and efficient edit-then-test loops with high tool precision

not applicable

Grok Code Fast 1

General-purpose coding and writing

Fast, accurate code completions and explanations

[Grok Code Fast 1 model card](https://data.x.ai/2025-08-20-grok-4-model-card.pdf)

Qwen2.5

General-purpose coding and writing

Code generation, reasoning, and code repair / debugging

[Qwen2.5 model card](https://arxiv.org/pdf/2409.12186)

Raptor mini

General-purpose coding and writing

Fast, accurate code completions and explanations

Coming soon

## [Task: General-purpose coding and writing](#task-general-purpose-coding-and-writing)

Use these models for common development tasks that require a balance of quality, speed, and cost efficiency. These models are a good default when you don't have specific requirements.

Model

Why it's a good fit

GPT-5.3-Codex

Delivers higher-quality code on complex engineering tasks like features, tests, debugging, refactors, and reviews without lengthy instructions.

GPT-5 mini

Reliable default for most coding and writing tasks. Fast, accurate, and works well across languages and frameworks.

Grok Code Fast 1

Specialized for coding tasks. Performs well on code generation, and debugging across multiple languages.

Raptor mini

Specialized for fast, accurate inline suggestions and explanations.

### [When to use these models](#when-to-use-these-models)

Use one of these models if you want to:

-   Write or review functions, short files, or code diffs.
-   Generate documentation, comments, or summaries.
-   Explain errors or unexpected behavior quickly.
-   Work in a non-English programming environment.

### [When to use a different model](#when-to-use-a-different-model)

If you're working on complex refactoring, architectural decisions, or multi-step logic, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For faster, simpler tasks like repetitive edits or one-off code suggestions, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## [Task: Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks)

These models are optimized for speed and responsiveness. They’re ideal for quick edits, utility functions, syntax help, and lightweight prototyping. You’ll get fast answers without waiting for unnecessary depth or long reasoning chains.

### [Recommended models](#recommended-models)

Model

Why it's a good fit

Claude Haiku 4.5

Balances fast responses with quality output. Ideal for small tasks and lightweight code explanations.

### [When to use these models](#when-to-use-these-models-1)

Use one of these models if you want to:

-   Write or edit small functions or utility code.
-   Ask quick syntax or language questions.
-   Prototype ideas with minimal setup.
-   Get fast feedback on simple prompts or edits.

### [When to use a different model](#when-to-use-a-different-model-1)

If you’re working on complex refactoring, architectural decisions, or multi-step logic, see [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For tasks that need stronger general-purpose reasoning or more structured output, see [General-purpose coding and writing](#task-general-purpose-coding-and-writing).

## [Task: Deep reasoning and debugging](#task-deep-reasoning-and-debugging)

These models are designed for tasks that require step-by-step reasoning, complex decision-making, or high-context awareness. They work well when you need structured analysis, thoughtful code generation, or multi-file understanding.

### [Recommended models](#recommended-models-1)

Model

Why it's a good fit

GPT-5 mini

Delivers deep reasoning and debugging with faster responses and lower resource usage than GPT-5. Ideal for interactive sessions and step-by-step code analysis.

GPT-5.4

Great at complex reasoning, code analysis, and technical decision-making.

Claude Sonnet 4.6

Improves on Sonnet 4.5 with more reliable completions and smarter reasoning under pressure.

Claude Opus 4.6

Anthropic’s most powerful model. Improves on Claude Opus 4.5.

Gemini 3 Pro

Advanced reasoning across long contexts and scientific or technical analysis.

Goldeneye

Complex problem-solving challenges and sophisticated reasoning.

### [When to use these models](#when-to-use-these-models-2)

Use one of these models if you want to:

-   Debug complex issues with context across multiple files.
-   Refactor large or interconnected codebases.
-   Plan features or architecture across layers.
-   Weigh trade-offs between libraries, patterns, or workflows.
-   Analyze logs, performance data, or system behavior.

### [When to use a different model](#when-to-use-a-different-model-2)

For fast iteration or lightweight tasks, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks). For general development workflows or content generation, see [General-purpose coding and writing](#task-general-purpose-coding-and-writing).

## [Task: Working with visuals (diagrams, screenshots)](#task-working-with-visuals-diagrams-screenshots)

Use these models when you want to ask questions about screenshots, diagrams, UI components, or other visual input. These models support multimodal input and are well suited for front-end work or visual debugging.

Model

Why it's a good fit

GPT-5 mini

Reliable default for most coding and writing tasks. Fast, accurate, and supports multimodal input for visual reasoning tasks. Works well across languages and frameworks.

Claude Sonnet 4.6

Improves on Sonnet 4.5 with more reliable completions and smarter reasoning under pressure.

Gemini 3 Pro

Deep reasoning and debugging, ideal for complex code generation, debugging, and research workflows.

### [When to use these models](#when-to-use-these-models-3)

Use one of these models if you want to:

-   Ask questions about diagrams, screenshots, or UI components.
-   Get feedback on visual drafts or workflows.
-   Understand front-end behavior from visual context.

Tip

If you're using a model in a context that doesn’t support image input (like a code editor), you won’t see visual reasoning benefits. You may be able to use an MCP server to get access to visual input indirectly. See [Extending GitHub Copilot Chat with Model Context Protocol (MCP) servers](/en/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp).

### [When to use a different model](#when-to-use-a-different-model-3)

If your task involves deep reasoning or large-scale refactoring, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For text-only tasks or simpler code edits, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## [Next steps](#next-steps)

Choosing the right model helps you get the most out of Copilot. If you're not sure which model to use, start with a general-purpose option like GPT-4.1, then adjust based on your needs.

-   For detailed model specs and pricing, see [Supported AI models in GitHub Copilot](/en/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot).
-   For more examples of how to use different models, see [Comparing AI models using different tasks](/en/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks).
-   To switch between models, refer to [Changing the AI model for GitHub Copilot Chat](/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [Changing the AI model for GitHub Copilot inline suggestions](/en/copilot/how-tos/use-ai-models/change-the-completion-model).
-   To learn how Copilot Chat serves different AI models, see [Hosting of models for GitHub Copilot Chat](/en/copilot/reference/ai-models/model-hosting).