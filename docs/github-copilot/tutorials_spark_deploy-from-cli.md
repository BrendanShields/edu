Deploy your Spark app from the command line - GitHub Docs

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

# Deploy your Spark app from the command line

Learn how to deploy your Spark app from the command line.

## Who can use this feature?

Copilot Pro+, Copilot Enterprise

Copy as Markdown

## In this article

## [Introduction](#introduction)

If you’re developing your spark further in a GitHub codespace, you can deploy it directly from the command line using the Spark CLI, an extension of the GitHub CLI.

### [Prerequisites](#prerequisites)

-   **Access to GitHub Copilot**. You need a Copilot Pro+ or Copilot Enterprise license to use Spark. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
-   You must have **built a Spark app** (a "spark"). To start building, navigate to [Spark](https://github.com/spark).
-   You have **created a repository** for your spark on GitHub. For instructions, see [Building and deploying AI-powered apps with GitHub Spark](/en/copilot/tutorials/spark/build-apps-with-spark#step-8-invite-collaborators-with-a-repository).

## [Open your spark in a codespace](#open-your-spark-in-a-codespace)

The Spark CLI currently only works within a GitHub codespace.

1.  Navigate to the main page of your spark's repository on GitHub.
2.  Click the **Code** button, then click the **Codespaces** tab.
3.  Click to create a codespace. The codespace opens in a new browser tab.

## [Install the Spark CLI](#install-the-spark-cli)

1.  In the terminal in your codespace, run the following command to install the Spark CLI:
    
    Bash
    
    gh extensions install github/gh-runtime-cli
    
    ```bash
    gh extensions install github/gh-runtime-cli
    ```
    
2.  Once the installation is complete, to verify that the Spark CLI is installed, run:
    
    Bash
    
    gh runtime-cli version
    
    ```bash
    gh runtime-cli version
    ```
    

## [Build your spark](#build-your-spark)

1.  In the terminal in your codespace, run the following command to install the latest version of the Spark SDK:
    
    Bash
    
    npm install @github/spark@latest
    
    ```bash
    npm install @github/spark@latest
    ```
    
2.  Next, run the following command to compile your Spark app.
    
    Bash
    
    npm run build
    
    ```bash
    npm run build
    ```
    

## [Deploy your spark](#deploy-your-spark)

1.  To deploy your Spark app, run:
    
    Bash
    
    gh runtime-cli deploy --dir ./dist
    
    ```bash
    gh runtime-cli deploy --dir ./dist
    ```
    

## [Troubleshooting](#troubleshooting)

If you're being asked to supply the `--app` parameter when deploying your spark, update to the latest version of the Spark SDK by following step 1 in [Build your spark](#build-your-spark).