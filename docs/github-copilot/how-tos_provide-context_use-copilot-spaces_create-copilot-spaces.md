# Creating GitHub Copilot Spaces

Create spaces to organize and centralize relevant content that grounds Copilot's responses in the right context for a specific task.

## Who can use this feature?

Anyone with a Copilot license can use Spaces.

Copy as Markdown

## In this article

For an overview of Copilot Spaces, see [About GitHub Copilot Spaces](/en/copilot/concepts/about-organizing-and-sharing-context-with-copilot-spaces).

## [Creating a space](#creating-a-space)

1.  To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text), and click **Create space**.
    
2.  Give your space a name.
    
3.  Choose whether the space is owned by you or by an organization you belong to. Organization-owned Spaces can be shared using GitHub’s built-in permission model.
    
4.  Click **Create Space**.
    
5.  Optionally, once you are in the space, under the space name, add a description. This does not affect the responses Copilot gives in the space, but it can help others understand the context of the space.
    
    Note
    
    You can change the name and description of your space at any time by hovering over them and clicking .
    

## [Adding context to a space](#adding-context-to-a-space)

You can add two types of context to your space:

-   **Instructions**: Free text that describes what Copilot should focus on within this space. Include its areas of expertise, what kinds of tasks it should help with, and what it should avoid. This helps Copilot give more relevant responses based on your intent.
    
    For example:
    
    > You are a SQL generator. Your job is to take the sample queries and data schemas defined in the attached files and generate SQL queries based on the user's goals.
    
-   **Sources**: This context will be used to provide more relevant answers to your questions. Additionally, Spaces will always refer to the latest version of the code on the `main` branch of the repository.
    
    To add sources, click **Add sources**, then choose one of the following options:
    
    -   **Add files and repositories**: You can add files, folders, and entire GitHub repositories. When you add a repository, Copilot searches its contents to find relevant information, but adding specific files or folders that are most relevant to your work will give you the best results. This can include code files, documentation, and other content that helps Copilot understand the context of your space.
    -   **Link files, pull requests, and issues**: You can paste the URLs of the GitHub content, including pull requests and issues.
    -   **Upload a file**: You can upload files directly from your local machine. This includes images, text files, rich documents, and spreadsheets.
    -   **Add text content**: You can type or paste free-text content, such as transcripts, notes, or any other relevant information that can help Copilot understand the context of your space.

## [Choosing repositories or files as context](#choosing-repositories-or-files-as-context)

When adding sources to your space, you can choose to attach entire repositories or individual files. Understanding how each option works can help you get the best results from Copilot.

-   **Attach a repository**: When you attach a repository, Copilot doesn't load the entire project into memory. Instead, it searches the repository and retrieves only the most relevant content needed to answer your question. This is recommended for large-scale use cases (for example, answering questions across all documentation in a repository).
    
-   **Attach individual files**: When you attach a file, its full contents are loaded into Copilot's context window and considered for every query in that space. This is best when you want Copilot to consistently prioritize a specific document or small set of files.
    

## [Adding context as you're working](#adding-context-as-youre-working)

You can add files to a space directly from the code view on GitHub, so you don't need to break your flow when building context for your space.

1.  At the top of any file in the code view, click .
    
    ![Screenshot of a file in the code view. The "Add to space" icon is highlighted in orange.](/assets/cb-64714/images/help/copilot/add-to-copilot-space.png)
    
2.  From the dropdown, select the space you want to add the file to, or create a new space.
    

## [Next steps](#next-steps)

-   To learn more about using Spaces in GitHub and your IDE, see [Using GitHub Copilot Spaces](/en/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces).
-   To learn more about how to use Spaces to help you with development work, see [Speeding up development work with GitHub Copilot Spaces](/en/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
-   To learn how to share your space with your team, see [Collaborating with others using GitHub Copilot Spaces](/en/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).