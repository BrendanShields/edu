# Asking GitHub Copilot questions in GitHub

You can use GitHub Copilot Chat in GitHub to answer general questions about software development, or specific questions about the issues or code in a repository.

Copy as Markdown

## In this article

## [Introduction](#introduction)

This guide describes how to use Copilot Chat to ask questions about software development in GitHub. You can ask general questions about software development, or specific questions about the issues or code in a repository. For more information, see [About GitHub Copilot Chat](/en/copilot/concepts/about-github-copilot-chat).

## [Submitting a question to Copilot Chat](#submitting-a-question-to-copilot-chat)

You can open Copilot Chat from any page on GitHub. Certain questions may require you to be in a specific context, such as a repository, issue, or pull request. The following procedure describes how to ask a general software related question, and demonstrates the core functionality of Copilot Chat on GitHub. For more information on other scenarios, see [Asking Copilot Chat questions in different contexts](/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-in-different-contexts).

Depending on the question you ask, and your enterprise and organization settings, Copilot may respond using information based on the results of a Bing search. By using Bing search, Copilot can answer a broad range of tech-related questions with up-to-date details based on information currently available on the internet. For information on how to enable or disable Bing search integration, see [Managing GitHub Copilot policies as an individual subscriber](/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-web-search-for-github-copilot-chat) and [Managing policies and features for GitHub Copilot in your enterprise](/en/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

1.  At the top right of any page on GitHub, click the button next to the search bar.
    
    Copilot Chat is displayed.
    
2.  In the prompt box, type a question and press Enter.
    
    Some examples of general questions you could ask are:
    
    -   `What are the advantages of the Go programming language?`[](https://github.com/copilot?prompt=What%20are%20the%20advantages%20of%20the%20Go%20programming%20language%3F)[](https://github.com/copilot?prompt=What%20are%20the%20advantages%20of%20the%20Go%20programming%20language%3F)
    -   `What is Agile software development?`[](https://github.com/copilot?prompt=What%20is%20Agile%20software%20development%3F)[](https://github.com/copilot?prompt=What%20is%20Agile%20software%20development%3F)
    -   `What is the most popular JavaScript framework?`[](https://github.com/copilot?prompt=What%20is%20the%20most%20popular%20JavaScript%20framework%3F)[](https://github.com/copilot?prompt=What%20is%20the%20most%20popular%20JavaScript%20framework%3F)
    -   `Give me some examples of regular expressions.`[](https://github.com/copilot?prompt=Give%20me%20some%20examples%20of%20regular%20expressions.)[](https://github.com/copilot?prompt=Give%20me%20some%20examples%20of%20regular%20expressions.)
    -   `Write a bash script to output today's date.`[](https://github.com/copilot?prompt=Write%20a%20bash%20script%20to%20output%20today's%20date.)[](https://github.com/copilot?prompt=Write%20a%20bash%20script%20to%20output%20today's%20date.)
3.  Optionally, after submitting a question, you can click in the text box to stop the response.
    
4.  If Copilot uses a Bing search to answer your question, you can click the **_n_ references** link at the top of the response to see the search results that Copilot used to answer your question.
    
5.  Within a conversation thread, you can ask follow-up questions. Copilot will answer within the context of the conversation. For example, you could type "tell me more" to get Copilot to expand on its last comment.
    
    You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help Copilot provide more relevant answers to your follow-up questions. For more information, see [Prompting GitHub Copilot Chat to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) on the GitHub Blog.
    
6.  To start a new conversation, click at the top left of the page.
    
7.  To see a list of your previous conversations, click at the top left of the page.
    

Copilot Chat stores up to 100 of your most recent conversations. Messages within each conversation are kept for 28 days before being permanently deleted. Once a conversation has no messages left, it's automatically removed from your history.

### [Viewing and editing generated files within Copilot Chat](#viewing-and-editing-generated-files-within-copilot-chat)

Note

This feature is currently in public preview and subject to change.

When you ask a question, Copilot may generate one or more files as part of its response. The generated files are displayed in a side panel. You can view and edit the files in the panel, or download them to your computer.

For example, asking `Generate a simple calculator using HTML, CSS, and JavaScript`[](https://github.com/copilot?prompt=Generate%20a%20simple%20calculator%20using%20HTML%2C%20CSS%2C%20and%20JavaScript)[](https://github.com/copilot?prompt=Generate%20a%20simple%20calculator%20using%20HTML%2C%20CSS%2C%20and%20JavaScript) may generate multiple files, such as `index.html`, `styles.css`, and `script.js`.

You can also preview how some file formats, such as Markdown, render by toggling to the "Preview" tab in the side panel.

### [Regenerating a response with a different model](#regenerating-a-response-with-a-different-model)

After Copilot responds to your question, you can regenerate the same prompt using a different model by clicking the retry icon () below the response. The new response will use your selected model and maintain the full context of the conversation.

You can switch between responses to compare the results from different models.

For help deciding which model to use, see [AI model comparison](/en/copilot/reference/ai-models/model-comparison).

### [Using subthreads in a conversation](#using-subthreads-in-a-conversation)

Subthreads are branches of a conversation that are created from a point in a conversation where you asked a question. Subthreads offer more control and flexibility for exploring aspects of a topic, or new topics, all within the same thread.

You can create and navigate through subthreads in Copilot Chat.

You can create a subthread in Copilot Chat by either editing or retrying any of your questions in the conversation.

To edit a question:

1.  Hover over the question you want to edit.
    
2.  Click the button that's displayed.
    
    ![Screenshot of the 'Edit message' button, highlighted with a dark orange outline.](/assets/cb-12010/images/help/copilot/subthread-edit-button.png)
    
3.  Edit the question, then click **Send**.
    

Note

You can only edit the text of a question. You can't edit any attachments.

To retry a question:

1.  Hover over the response to a question you want to retry. Resubmitting a question to Copilot may generate a different response.
    
2.  Click the button.
    
    ![Screenshot of the 'Retry' button, highlighted with a dark orange outline.](/assets/cb-13323/images/help/copilot/subthread-retry-button.png)
    

The response to your edited or retried question is displayed in a new subthread.

To navigate between subthreads:

-   If you have retried a question, a retry counter is displayed under the response, alongside the retry button.
    
    ![Screenshot of the retry counter, highlighted with a dark orange outline.](/assets/cb-15825/images/help/copilot/subthread-retry-counter.png)
    
    Click or to navigate to the previous or next subthread.
    
-   If you have edited a question, an edit counter is added below the question.
    
    ![Screenshot of the edit counter, highlighted with a dark orange outline.](/assets/cb-8983/images/help/copilot/subthread-edit-counter.png)
    
    Hover over the counter to display the edit and navigation buttons, then click or to navigate to the previous or next subthread.
    

## [Powered by skills](#powered-by-skills)

Copilot has access to a collection of skills to fetch data from GitHub, which are dynamically selected based on the question you ask.

You can explicitly ask GitHub Copilot Chat in GitHub to use a particular skill - for example, `Use the Bing skill to find the latest GPT4 model from OpenAI.`[](https://github.com/copilot?prompt=Use%20the%20Bing%20skill%20to%20find%20the%20latest%20GPT4%20model%20from%20OpenAI.)[](https://github.com/copilot?prompt=Use%20the%20Bing%20skill%20to%20find%20the%20latest%20GPT4%20model%20from%20OpenAI.)

Generate a list of currently available skills by asking Copilot: `What skills are available?`[](https://github.com/copilot?prompt=What%20skills%20are%20available%3F)[](https://github.com/copilot?prompt=What%20skills%20are%20available%3F)

## [Asking Copilot Chat questions in different contexts](#asking-copilot-chat-questions-in-different-contexts)

You can ask Copilot Chat different types of questions depending on where you are on GitHub. For example, to ask a question about a specific repository, you must be in the context of that repository. The following sections describe how to access the different contexts.

For examples of the types of questions you can ask in different contexts, see [Getting started with prompts for GitHub Copilot Chat](/en/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat?tool=webui).

## [Using images in Copilot Chat](#using-images-in-copilot-chat)

Note

-   Attaching images to chat prompts is currently in public preview and is subject to change.

You can attach an image to Copilot and then ask about the image. For example, you can attach:

-   A screenshot of a code snippet and ask Copilot to explain the code.
-   A mockup of the user interface for an application and ask Copilot to generate the code.
-   A flowchart and ask Copilot to describe the processes shown in the image.
-   A screenshot of a web page and ask Copilot to generate HTML for a similar page.

Note

The following types of image file are supported: JPEG (`.jpg`, `.jpeg`), PNG (`.png`), GIF (`.gif`), or WEBP (`.webp`).

### [Attaching an image to your chat prompt](#attaching-an-image-to-your-chat-prompt)

1.  Go to Copilot Chat ([https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)).
    
2.  If you see the AI model picker at the top of the page, select one of the models that supports adding images to prompts:
    
    ![Screenshot of the model picker with the list of models expanded.](/assets/cb-34214/images/help/copilot/model-picker-copilot-immersive.png)
    
3.  Do one of the following:
    
    -   Copy an image and paste it into the prompt box at the bottom of the page.
    -   Click in the prompt box, then click **Image**. Browse to the image file you want to attach, select it and click **Open**.
    -   Drag and drop an image file from your operating system's file explorer into the prompt box.
4.  Type your prompt into the chat view to accompany the image. For example, `explain this diagram`, `describe each of these images in detail`, `what does this error message mean`.
    

## [Accessing Copilot Chat from the search bar](#accessing-copilot-chat-from-the-search-bar)

You can ask Copilot a question about an entire repository by typing your question in the main search box of the repository.

1.  Navigate to a repository on GitHub.
    
2.  Press /, or click in the main search box at the top of the page.
    
3.  In the search box, after `repo:OWNER/REPO`, type the question you want to ask Copilot.
    
    For example, you could enter:
    
    -   `What does this repo do?`
    -   `Where is authentication implemented in this codebase?`
    -   `How does license file detection work in this repo?`
4.  Click **Ask Copilot**.
    
    ![Screenshot of the main search box on GitHub. The drop-down option "Ask Copilot" is highlighted with an orange outline.](/assets/cb-58192/images/help/copilot/ask-copilot-from-search-bar.png)
    
    The GitHub Copilot Chat panel is displayed and Copilot responds to your request.
    
5.  Optionally, after submitting a question, you can click in the text box to stop the response.
    

## [Accessing Copilot Chat from the dashboard](#accessing-copilot-chat-from-the-dashboard)

You can access Copilot Chat from the dashboard. The dashboard is your personalized overview of your activity on GitHub, seen when you visit [https://github.com](https://github.com) while logged in.

1.  Go to the dashboard at [https://github.com](https://github.com).
    
2.  In the prompt box, type a question and press Enter.
    
    ![Screenshot of the dashboard with the Copilot Chat prompt box.](/assets/cb-17459/images/help/copilot/copilot-chat-dashboard.png)
    
    You will be taken to Copilot Chat where Copilot responds to your request.
    

Note

If you don't see the Copilot Chat prompt box on your dashboard, check that **Dashboard entry point** in enabled in your GitHub Copilot settings.

## [Sharing Copilot Chat conversations](#sharing-copilot-chat-conversations)

Note

This feature is currently in public preview and subject to change. During the public preview, this feature is only available to users without enterprise or team memberships.

Shared conversations are public or private (i.e. permission-based), depending on the referenced content, for example, a conversation about a private repository. If you share a private conversation, the recipient must have the necessary permissions to view the content.

Once you share a conversation, the conversation and future messages will be visible to anyone with the link.

1.  At the top right of any page on GitHub, click the button next to the search bar.
    
    Copilot Chat is displayed.
    
2.  After you submit your first prompt, a share button is displayed in the upper right corner.
    
3.  Click **Share** to open the share dialog.
    
    ![Screenshot of the main search box on GitHub. The share button is highlighted with an orange outline.](/assets/cb-42459/images/help/copilot/chat-share-button.png)
    
4.  To share the conversation, click **Share**. This will generate a link to the conversation.
    
5.  To copy the conversation link, click the copy icon. The link is copied to your clipboard.
    

## [Sharing feedback about GitHub Copilot Chat in GitHub](#sharing-feedback-about-github-copilot-chat-in-github)

Note

The ability to provide feedback to GitHub about Copilot pull request summaries is dependent on enterprise settings. For more information, see [Managing policies and features for GitHub Copilot in your enterprise](/en/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

To give feedback about a particular Copilot Chat response, click either the thumbs up or thumbs down icon at the bottom of each chat response.

To give feedback about Copilot Chat in general, click the ellipsis (**...**) at the top right of the chat panel, then click **Give feedback**.

## [Further reading](#further-reading)

-   [Asking GitHub Copilot questions in your IDE](/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide)
-   [Asking GitHub Copilot questions in GitHub Mobile](/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile)
-   [Using GitHub Copilot to explore a codebase](/en/copilot/tutorials/using-copilot-to-explore-a-codebase)