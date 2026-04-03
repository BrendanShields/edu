# Customizing or disabling the firewall for GitHub Copilot coding agent

Learn how to control the domains and URLs that Copilot coding agent can access.

Copy as Markdown

## In this article

Note

Firewall configuration has moved to the Copilot coding agent settings page. Previous configurations saved as Actions variables will be maintained on that page.

## [Overview](#overview)

By default, Copilot's access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from Copilot, or malicious instructions given to it, could lead to code or other sensitive information being leaked to remote locations.

The firewall always allows access to a number of hosts that Copilot uses to interact with GitHub. By default, a recommended allowlist is also enabled to allow the agent to download dependencies.

If Copilot tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if Copilot is creating a pull request for the first time) or to a comment (if Copilot is responding to a pull request comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from Copilot about being blocked by the firewall.](/assets/cb-58205/images/help/copilot/coding-agent/firewall-warning.png)

## [Limitations](#limitations)

The agent firewall has important limitations that affect its security coverage.

-   **Only applies to processes started by the agent**: The firewall only applies to processes started by the agent via its Bash tool. It does not apply to Model Context Protocol (MCP) servers or processes started in configured Copilot setup steps.
-   **Only applies within the GitHub Actions appliance**: The firewall only operates within the GitHub Actions appliance environment. It does not apply to processes running outside of this environment.
-   **Bypass potential**: Sophisticated attacks may bypass the firewall, potentially allowing unauthorized network access and data exfiltration.

These limitations mean that the firewall provides a layer of protection for common scenarios, but should not be considered a comprehensive security solution.

## [Understanding the recommended firewall allowlist](#understanding-the-recommended-firewall-allowlist)

The recommended allowlist, enabled by default, allows access to:

-   Common operating system package repositories (for example, Debian, Ubuntu, Red Hat).
-   Common container registries (for example, Docker Hub, Azure Container Registry, AWS Elastic Container Registry).
-   Packages registries used by popular programming languages (C#, Dart, Go, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, Rust, Swift).
-   Common certificate authorities (to allow SSL certificates to be validated).
-   Hosts used to download web browsers for the Playwright MCP server.

For the complete list of hosts included in the recommended allowlist, see [Copilot allowlist reference](/en/copilot/reference/copilot-allowlist-reference#copilot-coding-agent-recommended-allowlist).

## [Disabling the recommended allowlist](#disabling-the-recommended-allowlist)

You can choose to turn off the recommended allowlist. Disabling the recommended allowlist is likely to increase the risk of unauthorized access to external resources.

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Settings**. If you cannot see the "Settings" tab, select the dropdown menu, then click **Settings**.
    
    ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/cb-28260/images/help/repository/repo-actions-settings.png)
    
3.  In the "Code & automation" section of the sidebar, click **Copilot** then **coding agent**.
    
4.  Toggle the **Recommended allowlist** setting **off**.
    

To use the recommended allowlist in addition to your own allowlist, keep the **Recommended allowlist** setting **on**, and add your additional addresses in the **Custom allowlist** page.

## [Allowlisting additional hosts in the agent's firewall](#allowlisting-additional-hosts-in-the-agents-firewall)

You can allowlist additional addresses in the agent's firewall.

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Settings**. If you cannot see the "Settings" tab, select the dropdown menu, then click **Settings**.
    
    ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/cb-28260/images/help/repository/repo-actions-settings.png)
    
3.  In the "Code & automation" section of the sidebar, click **Copilot** then **coding agent**.
    
4.  Click **Custom allowlist**
    
5.  Add the addresses you want to include in the allowlist. You can include:
    
    -   **Domains** (for example, `packages.contoso.corp`). Traffic will be allowed to the specified domain and any subdomains.
        
        **Example**: `packages.contoso.corp` will allow traffic to `packages.contoso.corp` and `prod.packages.contoso.corp`, but not `artifacts.contoso.corp`.
        
    -   **URLs** (for example, `https://packages.contoso.corp/project-1/`). Traffic will only be allowed on the specified scheme (`https`) and host (`packages.contoso.corp`), and limited to the specified path and descendant paths.
        
        **Example**: `https://packages.contoso.corp/project-1/` will allow traffic to `https://packages.contoso.corp/project-1/` and `https://packages.contoso.corp/project-1/tags/latest`, but not `https://packages.consoto.corp/project-2`, `ftp://packages.contoso.corp` or `https://artifacts.contoso.corp`.
        
6.  Click **Add Rule**.
    
7.  After validating your list, click **Save changes**.
    

### [Disabling the firewall](#disabling-the-firewall)

Warning

Disabling the firewall will allow Copilot to connect to any host, increasing risks of exfiltration of code or other sensitive information.

The firewall is enabled by default. To disable the firewall, toggle the **Enable firewall** setting to **off**.

## [Further reading](#further-reading)

-   [Store information in variables](/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository)
-   [Customizing the development environment for GitHub Copilot coding agent](/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)