# Using GitHub Copilot to create or update issues

Use Copilot to quickly generate structured, high-quality issues from natural language or images, without filling out every field manually.

## Who can use this feature?

Anyone with a Copilot license can use Copilot to create issues or update existing issues.  
[Try Copilot for free](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free)

Copy as Markdown

## In this article

Note

This feature is in public preview and subject to change.

Creating or updating issues manually can be repetitive and time-consuming. With Copilot, you can create or update issues faster by prompting in natural language, or even by uploading a screenshot. Copilot fills out the title, body, labels, assignees, and more, using your repository’s issue forms or templates.

You stay in control of the process. You can review and refine what Copilot suggests before you submit the new or updated issue.

## [Creating an issue with Copilot](#creating-an-issue-with-copilot)

You can create issues from Copilot Chat in GitHub.

1.  Go to Copilot Chat ([https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)).
    
2.  In the prompt box, describe the issue you want to create.
    
    If you contribute issues to multiple repositories, use the `repo-owner/repo-name` format to specify the target repository for this issue. If you don't specify a repository, Copilot will infer the repository based on the repository you last created an issue in.
    
    For example:
    
    -   `In OWNER/REPOSITORY, create a feature request to add fuzzy matching to search.`[](https://github.com/copilot?prompt=In%20OWNER%2FREPOSITORY%2C%20create%20a%20feature%20request%20to%20add%20fuzzy%20matching%20to%20search.)[](https://github.com/copilot?prompt=In%20OWNER%2FREPOSITORY%2C%20create%20a%20feature%20request%20to%20add%20fuzzy%20matching%20to%20search.)
        
    -   `Log a bug for a 500 error. This happens consistently when I try to log into the site.`[](https://github.com/copilot?prompt=Log%20a%20bug%20for%20a%20500%20error.%20This%20happens%20consistently%20when%20I%20try%20to%20log%20into%20the%20site.)[](https://github.com/copilot?prompt=Log%20a%20bug%20for%20a%20500%20error.%20This%20happens%20consistently%20when%20I%20try%20to%20log%20into%20the%20site.)
        
    -   `Create a task to change the application logo background to red and add the label "needs design review".`[](https://github.com/copilot?prompt=Create%20a%20task%20to%20change%20the%20application%20logo%20background%20to%20red%20and%20add%20the%20label%20%22needs%20design%20review%22.)[](https://github.com/copilot?prompt=Create%20a%20task%20to%20change%20the%20application%20logo%20background%20to%20red%20and%20add%20the%20label%20%22needs%20design%20review%22.)
        
    -   `In octo-org/octo-repo, create an issue and add relevant code snippets to improve the API response format.`[](https://github.com/copilot?prompt=In%20octo-org%2Focto-repo%2C%20create%20an%20issue%20and%20add%20relevant%20code%20snippets%20to%20improve%20the%20API%20response%20format.)[](https://github.com/copilot?prompt=In%20octo-org%2Focto-repo%2C%20create%20an%20issue%20and%20add%20relevant%20code%20snippets%20to%20improve%20the%20API%20response%20format.)
        
    
    Note
    
    You can only use Copilot to create issues in repositories where you already have permission to create issues. This feature doesn't change your access or bypass repository permissions.
    
3.  Alternatively, you can use one of the following methods to include an image in your prompt:
    
    -   Copy an image and paste it into the prompt box at the bottom of the page.
    -   Click in the prompt box, then click **Image**. Browse to the image file you want to attach, select it and click **Open**.
    -   Drag and drop an image file from your operating system's file explorer into the prompt box.
    
    After you paste or upload the image, you can add text to your prompt, for example: `Create an issue because this error appears when trying to reset a password.`
    
4.  Copilot drafts an issue that includes:
    
    -   A suggested title.
        
    -   Details of the required changes.
        
        If your repository has issue forms or templates, Copilot will choose an appropriate form or template based on your prompt. If there are no forms or templates, Copilot will create a basic issue body for the details of the issue.
        
        If Copilot uses an issue form, it will break up the information in your prompt into the relevant fields of the form, without losing any data. Copilot will ask you to provide additional context if there are fields it does not have enough information to fill out.
        
    
    Based on your prompt, Copilot can also suggest metadata such as labels, assignees, and issue type.
    
5.  Review the draft. You can:
    
    -   Edit any part of the issue manually.
    -   Choose a different issue form or template without losing your input. Copilot reformats the content according to the form or template you choose.
    -   Ask Copilot to make changes with a follow-up prompt.
6.  Once the issue looks good, click **Create**.
    

## [Creating multiple issues at once](#creating-multiple-issues-at-once)

If your prompt includes multiple tasks or bugs, Copilot can draft more than one issue at a time.

For example: `In OWNER/REPOSITORY, create 3 issues: 1) DETAILS OF ONE TASK, 2) DETAILS OF ANOTHER TASK, 3) DETAILS OF A THIRD TASK`[](https://github.com/copilot?prompt=In%20OWNER%2FREPOSITORY%2C%20create%203%20issues%3A%201\)%20DETAILS%20OF%20ONE%20TASK%2C%202\)%20DETAILS%20OF%20ANOTHER%20TASK%2C%203\)%20DETAILS%20OF%20A%20THIRD%20TASK)[](https://github.com/copilot?prompt=In%20OWNER%2FREPOSITORY%2C%20create%203%20issues%3A%201\)%20DETAILS%20OF%20ONE%20TASK%2C%202\)%20DETAILS%20OF%20ANOTHER%20TASK%2C%203\)%20DETAILS%20OF%20A%20THIRD%20TASK)

Each draft appears separately, and you can review and edit them individually. To publish the issues, click **Create** on each one you want to submit.

## [Creating sub-issues](#creating-sub-issues)

You can use Copilot to draft multiple sub-issues.

For example:

`In octo-org/octo-repo, plan a new user dashboard. Break it down into an epic, and create sub-issues for each main feature and task.`

Copilot generates a draft issue tree, with a parent issue at the top level and sub-issues beneath it.

You can review the issue tree, expand or collapse sub-issues, and edit the details of each issue.

Click the parent issue to view its details in the workbench. The parent issue displays a list of sub-issues, and you can click each one to view and edit its details in the workbench. From a sub-issue, use the "Parent" dropdown to navigate through the issue tree. You can also click **Review and create** at the top of the workbench to see the full issue tree and navigate directly to any issue.

Copilot can modify the tree, by unlinking issues or by attaching new drafts.

For example, you can:

-   Remove a sub-issue from the issue tree: `Remove sub-issue NAME_OF_ISSUE from the issue tree`
-   Add an additional sub-issue to the issue tree: `Add an additional sub-issue with ISSUE_DETAILS to the issue tree`

Once you've finished editing the drafts and are ready to publish the issues, click **Review and create** then click **Create issues**.

## [Updating an existing issue](#updating-an-existing-issue)

You can use Copilot to update existing issues in your repository.

For example:

`In octo-org/octo-repo, update issue #123 to add more details about the bug and steps to reproduce it. Also, change the label to "bug" and assign it to @username.`

Copilot drafts the updated issue, which you can review and edit in the workbench. To publish the changes, click **Update**.

## [Working with existing parent issues and sub-issues](#working-with-existing-parent-issues-and-sub-issues)

You can use Copilot to connect new issues with issues that already exist in your repository.

For example, you can:

-   Add a sub-issue to an existing parent issue: `Create a sub-issue for octo-org/octo-repo issue #456.`
-   Add a parent issue to an existing issue: `Create a parent issue for octo-org/octo-repo issue #456.`
-   Add a parent issue to multiple existing issues: `Create a parent issue for octo-org/octo-repo issues #456, #457, and #458.`

The draft appears in the workbench, where you can review and edit it. To publish the issue, click **Review and create**, then click **Create issues**.

## [Assigning issues to Copilot](#assigning-issues-to-copilot)

To assign an issue to Copilot, you need to have Copilot coding agent enabled. See [Managing access to GitHub Copilot coding agent](/en/copilot/concepts/coding-agent/about-enabling-coding-agent).

You can assign the issue during creation in one of two ways:

-   **Natural language:** Prompt Copilot with something like `Assign this issue to Copilot.`
-   **Manually:** Select "Copilot" from the assignee list.

Once the issue is assigned and created, Copilot will start working on it automatically. You’ll see a 👀 emoji reaction on the issue to indicate that Copilot is working on it.

## [Further reading](#further-reading)

-   [Configuring issue templates for your repository](/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
-   [Planning a project with GitHub Copilot](/en/copilot/tutorials/plan-a-project)