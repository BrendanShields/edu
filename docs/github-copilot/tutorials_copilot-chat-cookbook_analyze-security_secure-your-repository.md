Securing your repository - GitHub Docs

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

# Securing your repository

Copilot Chat can help you to secure your repository and your code.

Copy as Markdown

## In this article

## [Configure essential security features](#configure-essential-security-features)

### [Example scenario](#example-scenario)

Let's say you recently created a repository for a new web application, you want to secure it and you don't know where to start.

Copilot Chat can walk you through configuring the most essential security features to ensure your repository remains secure.

### [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=Provide%20step-by-step%20instructions%20on%20how%20to%20enable%20the%20following%20essential%20security%20features%20in%20my%20GitHub%20repository%3A%0A%0A*%20Secret%20scanning%0A*%20Push%20protection%0A*%20Dependabot%20alerts%0A*%20Dependabot%20security%20updates%0A*%20Branch%20protection%20rules%2C%20including%20enforced%20code%20reviews%20before%20merging%0A%0AExplain%20why%20each%20feature%20is%20important%20and%20how%20it%20helps%20secure%20my%20repository.)

Provide step-by-step instructions on how to enable the following essential security features in my GitHub repository:

\* Secret scanning
\* Push protection
\* Dependabot alerts
\* Dependabot security updates
\* Branch protection rules, including enforced code reviews before merging

Explain why each feature is important and how it helps secure my repository.

Provide step-by-step instructions on how to enable the following essential security features in my GitHub repository:

\* Secret scanning
\* Push protection
\* Dependabot alerts
\* Dependabot security updates
\* Branch protection rules, including enforced code reviews before merging

Explain why each feature is important and how it helps secure my repository.

```copilot
Provide step-by-step instructions on how to enable the following essential security features in my GitHub repository:

* Secret scanning
* Push protection
* Dependabot alerts
* Dependabot security updates
* Branch protection rules, including enforced code reviews before merging

Explain why each feature is important and how it helps secure my repository.
```

### [Example response](#example-response)

Copilot Chat provides information on each security feature and explains how to enable it.

```markdown
Why it's important:

Secret scanning automatically detects accidentally committed secrets (API keys, credentials, etc.) in your repository.

How it helps:

Leaked secrets can allow attackers to access systems, steal data, or cause other harm. Early detection prevents misuse.

How to Enable:

1. Go to your repository on GitHub.
1. Click on Settings.
1. In the left sidebar, click Code security.
1. Scroll to Secret scanning.
1. Ensure "Secret scanning" and "Push protection" are both enabled.
1. If not, click Enable.
```

## [Encourage secure contributions and best practices with a security policy](#encourage-secure-contributions-and-best-practices-with-a-security-policy)

### [Example scenario](#example-scenario-1)

Let's say you want to share your project publicly, and want to set out a clear security policy to guide users on how to safely report vulnerabilities found in your repository.

Copilot Chat can write a security policy for your repository.

### [Example prompt](#example-prompt-1)

Copilot prompt[](https://github.com/copilot?prompt=Write%20a%20GitHub%20security%20policy%20\(SECURITY.md\)%20for%20my%20repository.%20The%20policy%20should%20include%3A%0A%0A*%20A%20clear%20description%20of%20how%20users%20can%20report%20security%20vulnerabilities.%0A*%20A%20response%20timeline%20for%20security%20issues.%0A*%20Guidelines%20for%20responsible%20disclosure.%0A*%20Supported%20versions%20of%20the%20software.%0A%0AFormat%20it%20as%20a%20well-structured%20Markdown%20document.)

Write a GitHub security policy (SECURITY.md) for my repository. The policy should include:

\* A clear description of how users can report security vulnerabilities.
\* A response timeline for security issues.
\* Guidelines for responsible disclosure.
\* Supported versions of the software.

Format it as a well-structured Markdown document.

Write a GitHub security policy (SECURITY.md) for my repository. The policy should include:

\* A clear description of how users can report security vulnerabilities.
\* A response timeline for security issues.
\* Guidelines for responsible disclosure.
\* Supported versions of the software.

Format it as a well-structured Markdown document.

```copilot
Write a GitHub security policy (SECURITY.md) for my repository. The policy should include:

* A clear description of how users can report security vulnerabilities.
* A response timeline for security issues.
* Guidelines for responsible disclosure.
* Supported versions of the software.

Format it as a well-structured Markdown document.
```

### [Example output](#example-output)

Copilot Chat produces a `SECURITY.md` file that you can commit to your repository.

```markdown
# Security Policy

Thank you for helping to keep this project and its users secure! This document outlines the security policy and responsible disclosure guidelines for this repository.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by emailing **security@yourdomain.com** or by using the GitHub [security advisories](https://github.com/octocat/octocat-repo/security/advisories) feature.
**Do not** report security vulnerabilities via public GitHub issues or pull requests.

When reporting a vulnerability, please include as much information as possible to help us understand and reproduce the issue:
- A clear description of the vulnerability.
- Steps to reproduce the issue.
- Any relevant logs, screenshots, or proof-of-concept code.
- Your assessment of the potential impact.

## Response Timeline

We take security issues seriously and will respond according to the following guidelines:
- **Acknowledgment:** We will acknowledge receipt of your report within **3 business days**.
- **Investigation:** We will investigate and assess the report as quickly as possible, usually within **7 business days**.
- **Resolution:** Once a fix is identified, we will work to release a security update promptly. We will coordinate with you as needed, especially if you are the reporter.
- **Disclosure:** We will notify the community of the vulnerability and fix via a GitHub security advisory, and credit the reporter as appropriate.

## Responsible Disclosure Guidelines

To protect users of this project, we ask that you:
- Avoid public disclosure of the vulnerability until it has been investigated and patched.
- Allow us a reasonable amount of time to resolve the issue before any public disclosure.
- Provide relevant details privately (see "Reporting a Vulnerability" above).
- Act in good faith and avoid exploiting the vulnerability beyond what is necessary for your report.

We are committed to working with security researchers and the community to ensure a safe and secure software ecosystem.
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)