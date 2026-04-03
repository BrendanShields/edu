# Content exclusion for GitHub Copilot

You can prevent Copilot from accessing certain files.

## Who can use this feature?

Organizations with a Copilot Business or Copilot Enterprise plan.

Copy as Markdown

## In this article

## [About content exclusion for Copilot](#about-content-exclusion-for-copilot)

You can use content exclusion to configure Copilot to ignore certain files. When you exclude content from Copilot:

-   Inline suggestions will not be available in the affected files.
-   The content in affected files will not inform inline suggestions in other files.
-   The content in affected files will not inform GitHub Copilot Chat's responses.
-   Affected files will not be reviewed in a Copilot code review.

### [Who can configure content exclusion](#who-can-configure-content-exclusion)

Repository administrators, organization owners, and enterprise owners can configure content exclusion.

-   **Repository administrators** can exclude content for their own repositories. This affects any Copilot users in the enterprise working within those specific repositories.
-   **Organization owners** can exclude content for users assigned a Copilot seat through their organization.

### [Availability of content exclusion](#availability-of-content-exclusion)

The Copilot Business and Copilot Enterprise plans provide the following level of support for content exclusion.

Tool

Inline suggestions support

Copilot Chat support

Visual Studio

Visual Studio Code

JetBrains IDEs

Vim/Neovim

Not applicable

Xcode

Eclipse

Azure Data Studio

Not applicable

The GitHub website

Not applicable

GitHub Mobile

Not applicable

Content exclusions also apply to Copilot code review on the GitHub website.

Note

-   Content exclusion is in public preview on the GitHub website and in GitHub Mobile and is subject to change.
-   Content exclusion is currently not supported in Edit and Agent modes of Copilot Chat in Visual Studio Code and other editors.

### [Limitations of content exclusion](#limitations-of-content-exclusion)

It's possible that Copilot may use semantic information from an excluded file if the information is provided by the IDE indirectly. Examples of such content include type information and hover-over definitions for symbols used in code, as well as general project properties such as build configuration information.

Currently, content exclusions do not apply to symbolic links (symlinks) and repositories located on remote filesystems.

### [Data sent to GitHub](#data-sent-to-github)

After you configure content exclusion, the client (for example, the Copilot extension for VS Code) sends the current repository URL to the GitHub server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## [Further reading](#further-reading)

-   [Excluding content from GitHub Copilot](/en/copilot/how-tos/content-exclusion/excluding-content-from-github-copilot)
-   [Reviewing changes to content exclusions for GitHub Copilot](/en/copilot/how-tos/content-exclusion/reviewing-changes-to-content-exclusions-for-github-copilot)