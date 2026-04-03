# Using GitHub Copilot code review

Learn how to request a code review from GitHub Copilot.

## Tool navigation

Copy as Markdown

## In this article

## [Introduction](#introduction)

GitHub Copilot can review your code and provide feedback. Where possible, Copilot's feedback includes suggested changes which you can apply with a couple of clicks.

For a full introduction to GitHub Copilot code review, see [About GitHub Copilot code review](/en/copilot/concepts/code-review).

Copilot code review is also available for organization members without a Copilot license, when enabled by an enterprise administrator or organization owner. See [Copilot code review for organization members without a Copilot license](/en/copilot/concepts/agents/code-review#copilot-code-review-for-organization-members-without-a-copilot-license).

## [Using Copilot code review](#using-copilot-code-review)

These instructions explain how to use Copilot code review in the GitHub website. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1.  On GitHub.com, create a pull request or navigate to an existing pull request.
    
2.  Open the **Reviewers** menu, then select **Copilot**.
    
    ![Screenshot of selecting 'Copilot' from the 'Reviewers' menu.](/assets/cb-33497/images/help/copilot/code-review/request-review@2x.png)
    
3.  Wait for Copilot to review your pull request. This usually takes less than 30 seconds.
    
4.  Scroll down and read through Copilot's comments.
    
    ![Screenshot of a code review left by Copilot.](/assets/cb-132888/images/help/copilot/code-review/review-comment@2x.png)
    
    Copilot always leaves a "Comment" review, not an "Approve" review or a "Request changes" review. This means that Copilot's reviews do not count toward required approvals for the pull request, and Copilot's reviews will not block merging changes. For more details, see [Approving a pull request with required reviews](/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews).
    
5.  Copilot's review comments behave like review comments from humans. You can add reactions to them, comment on them, resolve them and hide them.
    
    Any comments you add to Copilot's review comments will be visible to humans, but they won't be visible to Copilot, and Copilot won't reply.
    

## [Working with suggested changes provided by Copilot](#working-with-suggested-changes-provided-by-copilot)

Where possible, Copilot's feedback includes suggested changes which you can apply with a couple of clicks.

If you're happy with the changes, you can accept a single suggestion from Copilot and commit it, or accept a group of suggestions together in a single commit. For more information, see [Incorporating feedback in your pull request](/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request).

You can also invoke Copilot coding agent to implement suggested changes. To do this, you must:

-   Opt into the public preview for tools in Copilot code review and enable Copilot coding agent.
-   On review comments from GitHub Copilot code review, click **Implement suggestion**. This creates a draft comment on the pull request, where you can instruct Copilot to address specific feedback. Copilot will create a new pull request against your branch with the suggestions applied.

## [Providing feedback on Copilot's reviews](#providing-feedback-on-copilots-reviews)

You can provide feedback on Copilot's comments directly within each comment. We use this information to improve the product and the quality of Copilot's suggestions.

1.  On a pull request review comment from Copilot, click the thumbs up (👍) or thumbs down (👎) button.
    
    ![Screenshot showing a Copilot code review comment with the thumbs up and thumbs down buttons.](/assets/cb-19709/images/help/copilot/code-review/feedback-controls@2x.png)
    
2.  If you click the thumbs down button, you're asked to provide additional information. You can, optionally, pick the reason for your negative feedback and leave a comment before clicking **Submit feedback**.
    
    ![Screenshot of the form for providing additional information when you give negative feedback on a comment from Copilot.](/assets/cb-90167/images/help/copilot/code-review/feedback-modal@2x.png)
    

## [Requesting a re-review from Copilot](#requesting-a-re-review-from-copilot)

When you push changes to a pull request that Copilot has reviewed, it won't automatically re-review your changes.

To request a re-review from Copilot, click the button next to Copilot's name in the **Reviewers** menu. For more information, see [Requesting a pull request review](/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).

Note

When re-reviewing a pull request, Copilot may repeat the same comments again, even if they have been dismissed with the "Resolve conversation" button or downvoted with the thumbs down (👎) button.

## [Enabling automatic reviews](#enabling-automatic-reviews)

By default, you manually request a review from Copilot on each pull request, in the same way you would request a review from a human. However, you can set up Copilot to automatically review all pull requests. See [Configuring automatic code review by GitHub Copilot](/en/copilot/how-tos/agents/copilot-code-review/automatic-code-review).

## [Customizing Copilot's reviews with custom instructions](#customizing-copilots-reviews-with-custom-instructions)

You can customize Copilot code review by adding custom instructions to your repository.

Repository custom instructions can either be repository wide or path specific. You specify repository-wide custom instructions in a `.github/copilot-instructions.md` file in your repository. You can use this file to store information that you want Copilot to consider when reviewing code anywhere in the repository.

You can also write instructions that Copilot will only use when reviewing code in files that match a specified path. You write these instructions in one or more `.github/instructions/**/*.instructions.md` files.

For more information, see [Adding repository custom instructions for GitHub Copilot](/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

Note

-   Copilot code review only reads the first 4,000 characters of any custom instruction file. Any instructions beyond this limit will not affect the reviews generated by Copilot code review. This limit does not apply to Copilot Chat or Copilot coding agent.
-   When reviewing a pull request, Copilot uses the custom instructions in the base branch of the pull request. For example, if your pull request seeks to merge `my-feature-branch` into `main`, Copilot will use the custom instructions in `main`.

### [Example](#example)

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all Copilot code reviews in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```

### [Reviewing a selection of code](#reviewing-a-selection-of-code)

You can request an initial review of a highlighted selection of code in Visual Studio Code.

1.  In Visual Studio Code, select the code you want to review.
2.  Right-click the selected code and choose **Generate Code** > **Review**.
3.  VS Code creates review comments in the **Comments** panel and also shows them inline in the editor.

### [Reviewing all uncommitted changes](#reviewing-all-uncommitted-changes)

You can request a review of your uncommitted changes in Visual Studio Code.

1.  In VS Code, click the **Source Control** button in the Activity Bar.
    
2.  At the top of the **Source Control** view, hover over **CHANGES**, then click the **Copilot Code Review - Uncommitted Changes** button.
    
    ![Screenshot of the "Source Control" view. The code review button is outlined in dark orange.](/assets/cb-26188/images/help/copilot/code-review/vscode-review-button.png)
    
3.  Wait for Copilot to review your changes. This usually takes less than 30 seconds.
    
4.  If Copilot has any comments, they will be shown inline in your file(s), and in the **Problems** tab.
    

## [Working with suggested changes provided by Copilot](#working-with-suggested-changes-provided-by-copilot-1)

Where possible, Copilot's feedback includes suggested changes which you can apply with a single click.

![Screenshot of a comment from Copilot in Visual Studio Code with a suggested change.](/assets/cb-73469/images/help/copilot/code-review/vscode-comment@2x.png)

If you're happy with the change, you can accept a suggestion from Copilot by clicking the **Apply and Go To Next** button. Any changes you apply will not be automatically committed.

If you don't want to apply Copilot's suggested change, click the **Discard and Go to Next** button.

## [Providing feedback on Copilot's reviews](#providing-feedback-on-copilots-reviews-1)

You can provide feedback on Copilot's comments directly within each comment. We use this information to improve the product and the quality of Copilot's suggestions.

To provide feedback, hover over the comment and click the thumbs up or thumbs down button.

![Screenshot of a comment from Copilot in Visual Studio Code with feedback buttons displayed. The buttons are outlined in dark orange.](/assets/cb-55468/images/help/copilot/code-review/vscode-comment-feedback@2x.png)

## [Customizing Copilot's reviews with custom instructions](#customizing-copilots-reviews-with-custom-instructions-1)

You can customize Copilot code review by adding custom instructions to your repository.

Repository custom instructions can either be repository wide or path specific. You specify repository-wide custom instructions in a `.github/copilot-instructions.md` file in your repository. You can use this file to store information that you want Copilot to consider when reviewing code anywhere in the repository.

You can also write instructions that Copilot will only use when reviewing code in files that match a specified path. You write these instructions in one or more `.github/instructions/**/*.instructions.md` files.

For more information, see [Adding repository custom instructions for GitHub Copilot](/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

Note

-   Copilot code review only reads the first 4,000 characters of any custom instruction file. Any instructions beyond this limit will not affect the reviews generated by Copilot code review. This limit does not apply to Copilot Chat or Copilot coding agent.
-   When reviewing a pull request, Copilot uses the custom instructions in the base branch of the pull request. For example, if your pull request seeks to merge `my-feature-branch` into `main`, Copilot will use the custom instructions in `main`.

### [Example](#example-1)

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all Copilot code reviews in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```

## [Prerequisite](#prerequisite)

To use Copilot code review, you must use Visual Studio version 17.14 or later. See the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).

## [Using Copilot code review](#using-copilot-code-review-1)

These instructions explain how to use Copilot code review in Visual Studio. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1.  In the Git Changes window, click **Review changes with Copilot**. This button appears as a comment icon with a sparkle.
    
2.  Copilot will begin reviewing your changes. After a few moments, a link showing the number of code review comments appears in the Git Changes window.
    
3.  Click the link to view and navigate the comments. If no issues are found, you’ll see the message: Copilot did not comment on any files.
    
4.  Copilot displays comments in your code with a summary of each potential issue. You can:
    
    -   Review and make changes based on the suggestions.
    -   Dismiss a comment using the downward arrow in the top-right corner of the comment box.
5.  To remove all review comments, click next to the code review link in the Git Changes window.
    

For more information on enabling and configuring Copilot code review in Visual Studio, see [Review local changes with Copilot Chat](https://learn.microsoft.com/en-us/visualstudio/version-control/git-make-commit?view=vs-2022#review-local-changes-with-copilot-chat) in the Visual Studio documentation.

## [Using Copilot code review](#using-copilot-code-review-2)

These instructions explain how to use Copilot code review in GitHub Mobile. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1.  In GitHub Mobile, open a pull request.
2.  Scroll down to the **Reviews** section and expand it.
3.  Click **Request Reviews**.
4.  Add Copilot as a reviewer, then click **Done**.

Copilot will review the changes and provide feedback.

## [Prerequisite](#prerequisite-1)

To use Copilot code review in Xcode, you must use version 0.41.0 or later of the GitHub Copilot Chat extension. Download the latest release from the [`github/CopilotForXcode` repository](https://github.com/github/CopilotForXcode/releases/latest).

## [Using Copilot code review](#using-copilot-code-review-3)

These instructions explain how to use Copilot code review in Xcode. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1.  In Xcode, make some changes to one or more files.
    
2.  Open the Copilot chat window by clicking **Editor** in the menu bar, clicking **GitHub Copilot** then **Open Chat**.
    
3.  Near the bottom right of the prompt box in the Copilot chat window, click the **Code Review** button (a speech bubble icon).
    
    ![Screenshot of the Copilot chat window in Xcode, with the 'Code Review' button outlined in dark orange.](/assets/cb-40849/images/help/copilot/code-review/xcode-ccr-button.png)
    
4.  Click either **Review Staged Changes** or **Review Unstaged Changes**.
    
5.  A list of files containing changes is displayed in the chat window. Click the check boxes to deselect any files you don't want Copilot to review.
    
6.  Click **Continue** to start the review process.
    
7.  If Copilot finds things to comment on, it displays a **Reviewed Changes** list in the chat window, listing the files it has commented on. Click a file in this list to see the comments.
    
    Each comment is shown in a popup, overlaid over the editor.
    
    ![Screenshot of a Copilot code review review comment.](/assets/cb-352404/images/help/copilot/code-review/xcode-review-popup.png)
    
8.  If there is more than one comment in the file, use the up and down arrows, at the top right of the popup, to navigate between comments.
    
9.  Copilot may suggest replacement code. You can apply the suggested change by clicking **Accept** or reject it by clicking **Dismiss**.
    
10.  Click another file in the **Reviewed Changes** list in the chat window, to see the review comments for another file.
     

## [Prerequisites](#prerequisites)

-   **Access to Copilot**. See [What is GitHub Copilot?](/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
    
-   **Compatible JetBrains IDE**. To use GitHub Copilot in JetBrains, you must have a compatible JetBrains IDE installed. GitHub Copilot is compatible with the following IDEs:
    
    -   IntelliJ IDEA (Ultimate, Community, Educational)
    -   Android Studio
    -   AppCode
    -   CLion
    -   Code With Me Guest
    -   DataGrip
    -   DataSpell
    -   GoLand
    -   JetBrains Client
    -   MPS
    -   PhpStorm
    -   PyCharm (Professional, Community, Educational)
    -   Rider
    -   RubyMine
    -   RustRover
    -   WebStorm
    -   Writerside
    
    See the [JetBrains IDEs](https://www.jetbrains.com/products/?ref_product=copilot&ref_type=engagement&ref_style=button) tool finder to download.
    
-   **Latest version of the GitHub Copilot extension**. See the [GitHub Copilot plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot?ref_product=copilot&ref_type=engagement&ref_style=text) in the JetBrains Marketplace. For installation instructions, see [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
    
-   **Sign in to GitHub in your JetBrains IDE**. For authentication instructions, see [Installing the GitHub Copilot extension in your environment](/en/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment?tool=jetbrains#installing-the-github-copilot-plugin-in-your-jetbrains-ide).
    

## [Using Copilot code review](#using-copilot-code-review-4)

These instructions explain how to use Copilot code review in JetBrains IDEs. To see instructions for other popular coding environments, click the appropriate tab at the top of the page.

1.  In a JetBrains IDE, make some changes to one or more files.
    
2.  Open the "Commit" tool window on the left-hand side.
    
3.  Above the commit message input field, click **Copilot: Review Code Changes**. This button appears as a magnifying glass icon with a sparkle.
    
4.  Copilot will begin reviewing your changes.
    
5.  Copilot displays comments in your code with a summary of each potential issue. You can:
    
    -   Review and make changes based on the suggestions.
    -   Dismiss a comment by clicking **Discard**.
6.  If there is more than one comment, use the up and down arrows, at the top right of the popup, to navigate between comments.