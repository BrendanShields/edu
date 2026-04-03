# Configuring runners for GitHub Copilot code review

Learn how to configure self-hosted runners or upgrade to larger GitHub-hosted runners for Copilot code review.

Copy as Markdown

## In this article

## [About GitHub Actions usage for code review tools](#about-github-actions-usage-for-code-review-tools)

Copilot code review uses GitHub Actions to run the agentic capabilities, including full project context gathering and any capabilities in public preview. By default, Copilot code review uses GitHub-hosted runners.

If your organization has disabled GitHub-hosted runners, the agentic capabilities will not be available. In this case, code reviews will fall back to a more limited review. Organizations in this situation can use self-hosted runners.

You can also upgrade to larger GitHub-hosted runners for better performance.

## [Configuring self-hosted runners for code review](#configuring-self-hosted-runners-for-code-review)

You can run Copilot code review using self-hosted GitHub Actions runners with ARC (Actions Runner Controller). You must first set up ARC-managed scale sets in your environment. For more information on ARC, see [Actions Runner Controller](/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).

Warning

ARC is the only officially supported solution for self-hosting Copilot code review. For security reasons, we do not recommend using non-ARC self-hosted runners.

Note

Copilot code review is only compatible with Ubuntu x64 Linux runners. Runners with Windows, macOS or other operating systems are not supported.

To configure self-hosted runners for Copilot code review:

1.  Configure network security controls for your GitHub Actions runners to ensure that Copilot code review does not have open access to your network or the public internet.
    
    You must configure your firewall to allow connections to the [standard hosts required for GitHub Actions self-hosted runners](/en/actions/reference/runners/self-hosted-runners#accessible-domains-by-function), plus the following hosts:
    
    -   `api.githubcopilot.com`
    -   `uploads.github.com`
    -   `user-images.githubusercontent.com`
2.  In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to your ARC-managed scale set name. For more information, see [Customizing the development environment for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment).
    
    ```yaml
    # ...
    
    jobs:
      copilot-setup-steps:
        runs-on: arc-scale-set-name
        # ...
    ```
    

## [Upgrading to larger GitHub-hosted GitHub Actions runners](#upgrading-to-larger-github-hosted-github-actions-runners)

By default, Copilot code review works in a standard GitHub Actions runner. You can upgrade to larger runners for better performance (CPU and memory), more disk space, and advanced features like Azure private networking. For more information, see [Larger runners](/en/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).

Note

Usage of larger GitHub-hosted runners is billed per-minute and may incur additional GitHub Actions charges.

1.  Set up larger runners for your organization. For more information, see [Managing larger runners](/en/actions/using-github-hosted-runners/managing-larger-runners).
    
2.  If you are using larger runners with Azure private networking, configure your Azure private network to allow outbound access to the following hosts:
    
    -   `api.githubcopilot.com`
    -   `uploads.github.com`
    -   `user-images.githubusercontent.com`
3.  In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to the label for the larger runners you want Copilot code review to use. For more information on specifying larger runners with `runs-on`, see [Running jobs on larger runners](/en/actions/using-github-hosted-runners/running-jobs-on-larger-runners).
    
    ```yaml
    # ...
    
    jobs:
      copilot-setup-steps:
        runs-on: ubuntu-4-core
        # ...
    ```