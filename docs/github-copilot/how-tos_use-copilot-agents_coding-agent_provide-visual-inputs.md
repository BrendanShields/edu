# Provide visual inputs to GitHub Copilot

You can attach images to issues or Copilot Chat prompts to help Copilot understand your task.

## Who can use this feature?

Copilot coding agent is available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Business and GitHub Copilot Enterprise plans. The agent is available in all repositories stored on GitHub, except repositories owned by managed user accounts and where it has been explicitly disabled.  
[Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button)

Copy as Markdown

## In this article

Note

For an overview of Copilot coding agent, see [About GitHub Copilot coding agent](/en/copilot/concepts/about-copilot-coding-agent).

## [Introduction](#introduction)

Coding agent can process images, such as a photo or screenshot of a sketch or design, as part of your task description. This is useful when you want to show Copilot what you're trying to achieve visually, for example, when updating a UI or implementing a design.

You can provide images to Copilot in two ways:

-   **In an issue**: Add an image to the issue body, with a description of the task you want Copilot to complete, then assign the issue to Copilot.
-   **In Copilot Chat**: Attach images to your prompt when you ask Copilot to create a pull request.

## [Attaching images to an issue](#attaching-images-to-an-issue)

1.  Navigate to the repository where you want to create the issue.
2.  Create a new issue or open an existing issue.
3.  In the issue body, drag and drop your image.
4.  Add a clear description of what you want Copilot to do with the image. For example, "Let's update the login form to match this mockup".
5.  Assign the issue to Copilot. For detailed instructions, see [Assign an issue to Copilot on GitHub.com](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#assigning-an-issue-to-copilot-on-githubcom).

Copilot will analyze the image along with your description when working on the task.

## [Attaching images in Copilot Chat](#attaching-images-in-copilot-chat)

1.  Open Copilot Chat.
    
2.  Attach your image to the chat prompt, and use `/task` to describe what you want Copilot to do. For example, "Update the notification badge to match this mockup".
    
    For detailed instructions, see [Asking Copilot to create a pull request from Copilot Chat in GitHub.com](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-githubcom).
    
3.  Copilot will create a pull request using the image as context for the task.
    

## [Further reading](#further-reading)

-   [Asking GitHub Copilot to create a pull request](/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr)
-   [Best practices for using GitHub Copilot to work on tasks](/en/copilot/tutorials/coding-agent/best-practices)
-   [Reviewing a pull request created by GitHub Copilot](/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs)