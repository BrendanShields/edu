Integrating agentic AI into your enterprise's software development lifecycle - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Integrating agentic AI into your enterprise's software development lifecycle

See how agents can boost productivity across your enterprise.

Copy as Markdown

## In this article

## [About AI agents on GitHub](#about-ai-agents-on-github)

Developers in your enterprise may be used to using AI as a pair programming tool. In this model, developers work with AI assistants synchronously and receive code suggestions during the development phase of a project.

AI agents are more like peer programmers. Agents can:

-   Perform asynchronous tasks, such as running tests or fixing issues in your backlog, with less need for human intervention.
-   Contribute to workflows beyond the development phase, such as ideation or optimization after a release.

Collaborating with agents can give your employees more time to focus on other priorities, such as high-level planning, and bring the benefits of AI to non-developer roles by giving more power to natural language prompts.

GitHub Copilot's agentic AI features are integrated into GitHub's cohesive platform, providing a more streamlined user experience and simplified licensing and governance controls compared to adopting a range of third-party tools.

## [Example scenario](#example-scenario)

You're an engineering manager at Mona's, a boutique umbrella retailer. Your team has been tasked with adding an **AI-powered widget** to the company's online store. The widget will help customers to choose the right umbrella by making tailored recommendations based on factors like the user's location and local weather trends.

To hit a tight deadline, you're aiming to speed up each stage of the process, for both developers and non-developers in your team. You also want to make sure the team is not overwhelmed with maintenance tasks once the new feature is rolled out.

Note

GitHub is continually expanding its AI-powered platform. Some of the features described in this article are in public preview, and may not be enabled for enterprises by default. You will find resources for each feature in the [Get started with agentic AI](#get-started-with-agentic-ai) section.

## [1\. Plan with Copilot Chat](#1-plan-with-copilot-chat)

1.  To start planning, a product manager works with **Copilot Chat** at `https://github.com/copilot`.
    
    They ask Copilot high-level questions to get a sense of the development work required for the new feature. To give Copilot access to important context about the project, they upload mockup files and link to the repository where the codebase is stored.
    
2.  When the PM has worked with Copilot to get an overview of the tasks required, they ask Copilot to **create issues** for each part of the work.
    
    Copilot drafts the issues in `https://github.com/copilot`, where the PM can refine them and publish them to the repository.
    
    The PM marks some of the issues as nice-to-haves or maintenance. These may be good candidates for Copilot coding agent.
    
    ![Screenshot of Copilot Chat. Copilot asks if the user would like to proceed with creating a set of prioritized issues.](/assets/cb-83969/images/help/copilot/sdlc-guide/issue-creation.png)
    
3.  To help the developer get started quickly, the PM creates a space with **Copilot Spaces** at `https://github.com/copilot/spaces`. The PM collects resources like diagrams and references to code files, submits a few test questions, then shares the space with their organization.
    
    Now, the developer can ask questions in the space, and Copilot will already have all the context the PM added.
    

## [2\. Prototype with GitHub Spark](#2-prototype-with-github-spark)

1.  To prototype the feature, the PM opens GitHub Spark (`https://github.com/spark`) and prompts it to create the widget. They can write a prompt, paste in documentation from the last phase, or upload a screenshot. Spark generates a working app with an LLM already integrated to power recommendations—no IDE or coding required.
2.  To refine the prototype, the PM can prompt Spark again, use the visual editor, or edit the code directly. In the "Prompts" tab, they can adjust the text that powers recommendations without editing code. Each change instantly updates the live preview, so the PM can see how edits affect the app.
3.  To collaborate, the PM publishes the spark and updates the visibility so their organization can access it. They can also create a repository and invite collaborators. Code changes made in the repository sync back to Spark, letting the PM and designers see updates to the widget in real time.

## [3\. Create with GitHub Models and agent mode](#3-create-with-github-models-and-agent-mode)

1.  The PM shares the Copilot space and GitHub Spark prototype and repository with the developer and asks the developer to start by finding the best AI model to provide the tailored umbrella recommendations, based on the cost and effectiveness of the models.
    
2.  The developer asks **Copilot Chat** to recommend several AI models for the job and the pros and cons of each. To provide useful context, they ask Copilot to consider the information in the [AI model comparison](/en/copilot/reference/ai-models/model-comparison) GitHub Docs article.
    
3.  To settle on a model from the shortlist, the developer uses the **GitHub Models** playground to compare results from the same prompt across models. They can then also update the GitHub Spark prototype to use the specific model they've selected to see how it impacts the whole widget experience in the prototype (all models supported in GitHub Models are supported in Spark). They save time by testing models on a single platform, rather than needing to set up an API key for each model separately.
    
    ![Screenshot of the GitHub Models playground, with windows for sending prompts to two models side by side.](/assets/cb-154355/images/help/copilot/sdlc-guide/model-compare.png)
    
4.  With the model decided, the developer opens the code in **VS Code**.
    
5.  The developer starts writing code for the new widget. To speed up their work, they use **Copilot Chat** in "Ask" and "Edit" mode for syntax questions and high-level suggestions.
    
    Tip
    
    The developer works with AI in the way that works best for them, but your organization has control over the experience. For example, you can:
    
    -   **Control the models** that the developer can use for development work in order to meet compliance requirements and manage costs.
    -   **Exclude certain files** from Copilot Chat's reach.
    -   **Save effective prompts** that have been tested with GitHub Models, so other users can benefit.
    
6.  When the developer has written some code, they switch to **agent mode** to ask Copilot to refactor the code into several different functions for better readability.
    
    In agent mode, Copilot works more autonomously and is able to update multiple files and, with the developer's authorization, run commands for actions like installing dependencies or running tests.
    
    ![Screenshot of the Copilot Chat pane in VS Code. Copilot asks the user for permission to run a linting command.](/assets/cb-27766/images/help/copilot/sdlc-guide/agent-mode.png)
    
    Tip
    
    You can create a more consistent experience by adding a **custom instructions** file to the repository. For example, the file could help ensure that agent mode uses established naming conventions and runs the correct commands to build, test, and lint code according to your organization's standards.
    
7.  The developer reviews the diff of the agent's work and chooses which code to keep.
    

## [4\. Test with an MCP server](#4-test-with-an-mcp-server)

1.  When the code is finished, the developer wants to run tests on their local build of the site using Playwright, an automated in-browser testing service.
    
    -   A repository administrator has added the **Model Context Protocol (MCP) server** for Playwright, which gives the Copilot agent a predefined interface for integrating with Playwright.
    -   The developer asks Copilot to outline test scenarios in a `.feature` file, then tells Copilot to run the tests in the browser.
    -   In agent mode, Copilot asks the developer to authorize its actions as it opens the browser and clicks different elements in the UI. As the developer watches the tests in the browser, Copilot identifies a failing test and suggests a fix in the code.
2.  When they're satisfied with the tests, the developer asks agent mode to open a pull request for the work on GitHub.
    
    Tip
    
    -   With the **GitHub MCP server** enabled, Copilot can run the command to open a pull request directly from VS Code, with the title and description already filled in.
    -   Interactions with the GitHub MCP server are secured by **push protection**, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server (public repositories only). See [About push protection](/en/code-security/secret-scanning/introduction/about-push-protection).
    

## [5\. Review with Copilot code review and Copilot custom agents](#5-review-with-copilot-code-review-and-copilot-custom-agents)

1.  A repository owner has configured automatic **code reviews** by Copilot on the repository. Copilot provides an initial review on the pull request, identifying bugs and potential performance issues that the developer can fix before a human reviewer gets to the pull request.
2.  As an additional compliance check, an enterprise owner has created a **Copilot custom agent** with key context on industry regulations and internal policies. The developer selects the custom agent at `https://github.com/copilot/agents`, prompting Copilot to carefully review the pull request for compliance and applying any necessary changes before requesting a human review.
3.  The developer's colleague reviews and approves the pull request. The work is ready to merge.

## [6\. Optimize with Copilot coding agent](#6-optimize-with-copilot-coding-agent)

1.  After the release, the product manager collects customer feedback and identifies an opportunity to improve the widget's suggestions by switching to a more reliable API for weather data. They create an issue to implement this change, and **assign it to Copilot** directly on GitHub.
    
2.  Copilot coding agent works in the background and opens a pull request, which the product manager marks as ready for review.
    
    ![Screenshot of a pull request created by Copilot coding agent.](/assets/cb-69697/images/help/copilot/sdlc-guide/agent-pr.png)
    
3.  A developer reviews Copilot's pull request and leaves feedback, which Copilot incorporates. Finally, the developer merges the pull request.
    
    Tip
    
    Copilot coding agent comes with default guardrails. For example, Copilot cannot merge pull requests by itself. You can define additional protections for target branches using repository rulesets.
    
4.  Later, while working on a separate feature, the developer notices a small bug in the code for the AI widget. To avoid context switching, the developer instructs Copilot to open a pull request directly from VS Code.
    
    `@github Create a PR for the widget function to correctly validate that the user's age is a positive integer.`
    
5.  Copilot works in the background and opens a pull request on GitHub, ready for another developer to review.
    

## [7\. Secure with Copilot Autofix](#7-secure-with-copilot-autofix)

1.  An administrator has enabled code scanning on the repository, and a code scanning alert suggests a potential vulnerability in the code.
    
2.  A security manager requests **Copilot Autofix** to automatically suggest a fix for the vulnerability, which a developer reviews and approves.
    
    ![Screenshot of a code scanning alert on GitHub.com. A button labeled "Generate fix" is outlined in orange.](/assets/cb-39684/images/help/copilot/sdlc-guide/autofix.png)
    

## [Get started with agentic AI](#get-started-with-agentic-ai)

[Sign up for Copilot](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=trial&ref_style=button&ref_plan=enterprise)

To get started with the features mentioned in this article, use the links in the following table.

To integrate agentic AI features effectively into your workstreams, you'll need to invest in effective training, governance, and cultural shifts. We recommend experimenting with agentic features with a cross-functional cohort to gather feedback before a larger rollout.

Note

Some of these features use **premium requests**. See [Requests in GitHub Copilot](/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

Feature

More information

Copilot Chat in GitHub

[Asking GitHub Copilot questions in GitHub](/en/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github#submitting-a-question-to-copilot-chat)

Copilot Spaces (public preview)

[About GitHub Copilot Spaces](/en/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces)

GitHub Spark (public preview)

[Managing GitHub Spark in your enterprise](/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-spark)

Copilot Chat agent mode

[Use agent mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)

Content exclusions

[Excluding content from GitHub Copilot](/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot)

MCP servers (public preview)

[Extending GitHub Copilot Chat with Model Context Protocol (MCP) servers](/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp#configuring-mcp-servers-in-visual-studio-code)

GitHub Models playground (public preview)

[Prototyping with AI models](/en/github-models/prototyping-with-ai-models#experimenting-with-ai-models-in-the-playground)

Custom instructions

[Adding repository custom instructions for GitHub Copilot](/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=vscode)

Copilot code review

[Configuring automatic code review by GitHub Copilot](/en/copilot/how-tos/agents/copilot-code-review/automatic-code-review)

Copilot custom agents

[About custom agents](/en/copilot/concepts/agents/coding-agent/about-custom-agents)

Copilot coding agent

[Piloting GitHub Copilot coding agent in your organization](/en/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org)

Copilot Autofix

[Configuring default setup for code scanning](/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)