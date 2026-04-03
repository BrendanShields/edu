# Excluding content from GitHub Copilot

Learn how to prevent Copilot from accessing certain content.

## Who can use this feature?

Repository administrators, organization owners, and enterprise owners can manage content exclusion settings. People with the "Maintain" role for a repository can view, but not edit, content exclusion settings for that repository.

Organizations with a Copilot Business or Copilot Enterprise plan.

Copy as Markdown

## In this article

## [Configuring content exclusion for your repository](#configuring-content-exclusion-for-your-repository)

You can use your repository settings to specify content in your repository that GitHub Copilot should ignore.

Note

GitHub Copilot CLI, Copilot coding agent, and Agent mode in Copilot Chat in IDEs, do not support content exclusion. For more information about these Copilot features, see [About GitHub Copilot CLI](/en/copilot/concepts/agents/about-copilot-cli), [About GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/about-coding-agent), and [Asking GitHub Copilot questions in your IDE](/en/copilot/how-tos/chat-with-copilot/chat-in-ide).

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Settings**. If you cannot see the "Settings" tab, select the dropdown menu, then click **Settings**.
    
    ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/cb-28260/images/help/repository/repo-actions-settings.png)
    
3.  In the "Code & automation" section of the sidebar, click **Copilot** then click **Content exclusion**.
    
    If your repository inherits any exclusions from its parent organization, or from organizations in the same enterprise, you'll see one or more gray boxes at the top of the page, containing details of these exclusions. You cannot edit these settings.
    
4.  In the box following "Paths to exclude in this repository," enter the paths to files from which Copilot should be excluded.
    
    Use the format: `- "/PATH/TO/DIRECTORY/OR/FILE"`, with each path on a separate line. You can add comments by starting a line with `#`.
    
    Tip
    
    You can use fnmatch pattern matching notation to specify file paths. Patterns are case insensitive. See [File](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch) in the ruby-doc.org documentation.
    

### [Example of paths specified in the repository settings](#example-of-paths-specified-in-the-repository-settings)

```yaml
- "/src/some-dir/kernel.rs"
```

Ignore the `/src/some-dir/kernel.rs` file in this repository.

```yaml
- "secrets.json"
```

Ignore files called `secrets.json` anywhere in this repository.

```yaml
- "secret*"
```

Ignore all files whose names begin with `secret` anywhere in this repository.

```yaml
- "*.cfg"
```

Ignore files whose names end with `.cfg` anywhere in this repository.

```yaml
- "/scripts/**"
```

Ignore all files in or below the `/scripts` directory of this repository.

```yaml
# Ignore the `/src/some-dir/kernel.rs` file in this repository.
- "/src/some-dir/kernel.rs"

# Ignore files called `secrets.json` anywhere in this repository.
- "secrets.json"

# Ignore all files whose names begin with `secret` anywhere in this repository.
- "secret*"

# Ignore files whose names end with `.cfg` anywhere in this repository.
- "*.cfg"

# Ignore all files in or below the `/scripts` directory of this repository.
- "/scripts/**"
```

## [Configuring content exclusion for your organization](#configuring-content-exclusion-for-your-organization)

You can use your organization settings to specify files that GitHub Copilot should ignore. The files can be within a Git repository or anywhere on the file system that is not under Git control.

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the left sidebar, click **Copilot** then click **Content exclusion**.
    
4.  In the box following "Repositories and paths to exclude," enter the details of files from which Copilot should be excluded.
    
    To exclude files located anywhere (within a Git repository or elsewhere), enter `"*":` followed by the path to the file, or files, you want to exclude. If you want to specify multiple file path patterns, list each pattern on a separate line.
    
    To exclude files in a Git repository from Copilot, enter a reference to the repository on one line, followed by paths to locations within the repository, with each path on a separate line. Use the following format, replacing `REPOSITORY-REFERENCE` with a reference to the repository that contains the files you'd like to exclude:
    
    ```yaml
    REPOSITORY-REFERENCE:
      - "/PATH/TO/DIRECTORY/OR/FILE"
      - "/PATH/TO/DIRECTORY/OR/FILE"
      - ...
    ```
    
    Repositories can be referenced using various protocols. You can use any of the following syntaxes for `REPOSITORY-REFERENCE` and Copilot will match them regardless of how the repository was cloned locally:
    
    ```text
    http[s]://host.xz[:port]/path/to/repo.git/
    
    git://host.xz[:port]/path/to/repo.git/
    
    [user@]host.xz:path/to/repo.git/
    
    ssh://[user@]host.xz[:port]/path/to/repo.git/
    ```
    
    The `user@` and `:port` parts of the `REPOSITORY-REFERENCE` are ignored in the calculation of which paths to ignore for a repository.
    
    For Azure DevOps, you can use the new (dev.azure.com) or old (visualstudio.com) host format when specifying `REPOSITORY-REFERENCE`, and Copilot will match them regardless of which host was used to clone the repository locally.
    
    Tip
    
    You can use fnmatch pattern matching notation to specify file paths. Patterns are case insensitive. See [File](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch) in the ruby-doc.org documentation.
    

### [Example of repositories and paths in organization settings](#example-of-repositories-and-paths-in-organization-settings)

```yaml
"*":
  - "**/.env"
```

Ignore all `.env` files from all file system roots (Git and non-Git). For example, this excludes `REPOSITORY-PATH/.env` and also `/.env`. This could also have been written on a single line as:

"\*": \["\*\*/.env"\]

```yaml
octo-repo:
```

In the `octo-repo` repository in this organization:

```yaml
  - "/src/some-dir/kernel.rs"
```

Ignore the `/src/some-dir/kernel.rs` file.

```yaml
https://github.com/primer/react.git:
```

In the `primer/react` repository on GitHub:

```yaml
  - "secrets.json"
```

Ignore files called `secrets.json` anywhere in this repository.

```yaml
  - "/src/**/temp.rb"
```

Ignore files called `temp.rb` in or below the `/src` directory.

```yaml
git@github.com:*/copilot:
```

In the `copilot` repository of any GitHub organization:

```yaml
  - "/__tests__/**"
```

Ignore any files in or below the `/__tests__` directory.

```yaml
  - "/scripts/*"
```

Ignore any files in the `/scripts` directory.

```yaml
git@gitlab.com:gitlab-org/gitlab-runner.git:
```

In the `gitlab-org/gitlab-runner` repository on GitLab:

```yaml
  - "/main_test.go"
```

Ignore the `/main_test.go` file.

```yaml
  - "{server,session}*"
```

Ignore any files with names beginning with `server` or `session` anywhere in this repository.

```yaml
  - "*.m[dk]"
```

Ignore any files with names ending with `.md` or `.mk` anywhere in this repository.

```yaml
  - "**/package?/*"
```

Ignore files directly within directories such as `packages` or `packaged` anywhere in this repository.

```yaml
  - "**/security/**"
```

Ignore files in or below any `security` directories, anywhere in this repository.

```yaml
# Ignore all `.env` files from all file system roots (Git and non-Git).
# For example, this excludes `REPOSITORY-PATH/.env` and also `/.env`.
# This could also have been written on a single line as:
#
# "*": ["**/.env"]
"*":
  - "**/.env"

# In the `octo-repo` repository in this organization:
octo-repo:
  # Ignore the `/src/some-dir/kernel.rs` file.
  - "/src/some-dir/kernel.rs"

# In the `primer/react` repository on GitHub:
https://github.com/primer/react.git:
  # Ignore files called `secrets.json` anywhere in this repository.
  - "secrets.json"
  # Ignore files called `temp.rb` in or below the `/src` directory.
  - "/src/**/temp.rb"

# In the `copilot` repository of any GitHub organization:
git@github.com:*/copilot:
  # Ignore any files in or below the `/__tests__` directory.
  - "/__tests__/**"
  # Ignore any files in the `/scripts` directory.
  - "/scripts/*"

# In the `gitlab-org/gitlab-runner` repository on GitLab:
git@gitlab.com:gitlab-org/gitlab-runner.git:
  # Ignore the `/main_test.go` file.
  - "/main_test.go"
  # Ignore any files with names beginning with `server` or `session` anywhere in this repository.
  - "{server,session}*"
  # Ignore any files with names ending with `.md` or `.mk` anywhere in this repository.
  - "*.m[dk]"
  # Ignore files directly within directories such as `packages` or `packaged` anywhere in this repository.
  - "**/package?/*"
  # Ignore files in or below any `security` directories, anywhere in this repository.
  - "**/security/**"
```

## [Configuring content exclusion for your enterprise](#configuring-content-exclusion-for-your-enterprise)

As an enterprise owner, you can use the enterprise settings to specify files that GitHub Copilot should ignore. The files can be within a Git repository or anywhere on the file system that is not under Git control.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
2.  At the top of the page, click **AI controls**.
3.  In the sidebar, click **Copilot**.
4.  Click **Content exclusion**.
5.  Use paths to specify which content to exclude. See the previous section, [Configuring content exclusion for your organization](#configuring-content-exclusion-for-your-organization).

Note

The key difference between setting content exclusion at the enterprise level and the organization level is that rules set at the enterprise level apply to all Copilot users in the enterprise, whereas the rules set by organization owners only apply to users who are assigned a Copilot seat by that organization.

## [Testing changes to content exclusions](#testing-changes-to-content-exclusions)

You can use your IDE to confirm that your changes to content exclusions are working as expected.

### [Propagate content exclusion changes to your IDE](#propagate-content-exclusion-changes-to-your-ide)

After you add or change content exclusions, it can take up to 30 minutes to take effect in IDEs where the settings are already loaded. If you don't want to wait, you can manually reload the content exclusion settings using the following instructions.

-   **For JetBrains IDEs and Visual Studio**, reload the content exclusion settings by closing and reopening the application.
-   **For Visual Studio Code**, use the following steps to reload the content exclusion settings:
    1.  Access the Command Palette. For example, by pressing Shift+Command+P (Mac) / Ctrl+Shift+P (Windows/Linux).
    2.  Type: `reload`.
    3.  Select **Developer: Reload Window**.
-   **For Vim/Neovim**, content exclusions are automatically fetched from GitHub each time you open a file.

### [Test your content exclusions](#test-your-content-exclusions)

You can verify that content exclusions you have configured are working as expected.

1.  First confirm that content exclusion is working in files that are not subject to content exclusion. To do this:
    -   In your IDE, open a file that is not subject to content exclusion.
    -   Make an edit that would normally generate an inline suggestion. A suggestion should be offered
2.  Open a file that should be excluded and make the same edit. No suggestion should be offered.
3.  To test content exclusion for Copilot Chat:
    -   In your IDE, open the Copilot Chat panel.
        
    -   Open a file that should be excluded and close any other files that are open in the editor.
        
    -   Make sure that the open file is attached to the prompt as the context file.
        
    -   Enter the prompt `explain this file`.
        
        If the file is excluded, Copilot Chat will not be able to use the file to generate a response. The file will not be listed as a reference in Copilot's response.
        

## [Manage content exclusions with the REST API](#manage-content-exclusions-with-the-rest-api)

Organization owners and enterprise owners can also manage content exclusions programmatically using the GitHub REST API.

For more information, see [REST API endpoints for Copilot content exclusion management](/en/rest/copilot/copilot-content-exclusion-management).

## [Further reading](#further-reading)

-   [Content exclusion for GitHub Copilot](/en/copilot/concepts/content-exclusion-for-github-copilot)
-   [Reviewing changes to content exclusions for GitHub Copilot](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot)
-   [Configuring content exclusion for Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-admin?view=vs-2022#configure-content-exclusion) in the Microsoft Learn documentation