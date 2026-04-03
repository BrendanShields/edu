# Using GitHub Copilot with an account on GHE.com

Update your development environment to access a Copilot plan for an account on GHE.com.

## Tool navigation

Copy as Markdown

## In this article

To use GitHub Copilot in an IDE or the command line, you must authenticate to an account on GitHub that has a Copilot license.

If you receive access to Copilot through a managed user account owned by an enterprise on GHE.com, you may need to adjust some settings in your IDE before you can authenticate to your account.

Use the **tabs at the top of this article** to see instructions for your environment.

## [Authenticating from VS Code](#authenticating-from-vs-code)

1.  To open your VS Code settings, press Command+, (Mac) or Ctrl+, (Windows).
    
2.  In the search bar, search for `enterprise`.
    
3.  For the `Github-enterprise: Uri` setting, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
    
4.  In the VS Code settings, search for `copilot`.
    
5.  Under "GitHub > Copilot: Advanced," click **Edit in settings.json**.
    
6.  Inside the `github.copilot.advanced` property, add `"authProvider": "github-enterprise"`. For example:
    
    ```json
    "github.copilot.advanced": {
         "authProvider": "github-enterprise"
    },
    ```
    
7.  Save the `settings.json` file.
    
8.  You will be shown a prompt asking you to sign in to use GitHub Copilot. Click **Sign in to GitHub**, then follow the prompts to authorize your account.
    
    If you **don't see the prompt**, try restarting VS Code.
    

If you ever need to switch to an account on GitHub.com, remove the `authProvider` setting from `settings.json`.

## [Authenticating from JetBrains IDEs](#authenticating-from-jetbrains-ides)

To authenticate to GHE.com in a JetBrains editor, you must install version 1.4.11 or later of the Copilot extension. You must then configure the extension to work with GHE.com.

1.  To open the editor preferences or settings dialog, press Command+, (Mac) or Ctrl+Alt+S (Windows).
2.  In the left sidebar, expand the "Tools" section, then click **GitHub Copilot**.
3.  In the "General" section, look for the "Authentication Provider" field and enter the hostname where you access GitHub. For example: `octocorp.ghe.com`.
4.  To save your changes, click **OK**.
5.  Follow the prompts to sign in to use GitHub Copilot.

To sign in and out of GitHub at any time, click the **Copilot Chat** icon () in the status bar, then click **Login to GitHub**. Follow the prompts to sign in.

If you ever need to switch to an account on GitHub.com, remove the value you entered in the "Authentication Provider" field.

## [Authenticating from Xcode](#authenticating-from-xcode)

1.  Open the "GitHub Copilot for Xcode" application.
2.  Click the **Advanced** tab.
3.  In the "Auth provider URL" field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
4.  Authorize the extension by following the instructions in [Signing in to GitHub Copilot](/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment?tool=xcode#signing-in-to-github-copilot).

## [Authenticating from the command line](#authenticating-from-the-command-line)

To use the `gh-copilot` extension for the GitHub CLI, you must:

1.  Download and install the extension. To do this, you must be authenticated to an account on GitHub.com. See [Installing GitHub Copilot CLI](/en/copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli#installing-copilot-in-the-cli).
2.  Authenticate to the account on GHE.com where you receive your Copilot license.

GitHub.com is the default destination of GitHub CLI requests. To use `gh copilot`, you must ensure requests are sent to GHE.com, where you receive your license. You have the following options:

-   Include the flag `--hostname SUBDOMAIN.ghe.com` in all `gh copilot` commands.
-   Set the `GH_HOST` environment variable to change the default host for all GitHub CLI commands.
-   Sign out of GitHub.com with `gh auth logout`. However, you will need to sign back in to get updates to `gh-copilot`.

For general information on using the GitHub CLI across platforms, see [Using the GitHub CLI across GitHub platforms](/en/github-cli/github-cli/using-multiple-accounts).

## [Authenticating from Visual Studio](#authenticating-from-visual-studio)

To authenticate from Visual Studio, follow the steps in [Add your GitHub accounts to your Visual Studio keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022&ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise#enabling-github-enterprise-accounts) on Microsoft Learn.

For the "GitHub Enterprise URL" field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.

## [Authenticating from Eclipse](#authenticating-from-eclipse)

1.  In the IDE, click **Copilot** to open the menu.
2.  Click **Edit Preferences...**.
3.  In the **GitHub Enterprise Authentication Endpoint** field, enter the URL where you access GitHub. For example: `https://octocorp.ghe.com`.
4.  Click **Apply**.
5.  Open the **Copilot** menu again then click **Sign In to GitHub**.