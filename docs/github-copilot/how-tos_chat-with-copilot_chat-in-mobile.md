# Asking GitHub Copilot questions in GitHub Mobile

You can use GitHub Copilot Chat in GitHub Mobile to answer general questions about software development, or specific questions about the code in a repository.

Copy as Markdown

## In this article

## [Overview](#overview)

GitHub Copilot Chat is a chat interface that lets you ask and receive answers to coding-related questions in GitHub Mobile. You can also use GitHub Copilot Chat on either GitHub or within a supported IDE. For information about GitHub Copilot Chat, see [About GitHub Copilot Chat](/en/copilot/concepts/about-github-copilot-chat).

Copilot Chat in GitHub Mobile can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code. For more information, see [Responsible use of GitHub Copilot Chat in GitHub Mobile](/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/about-github-copilot-chat-in-github-mobile).

In GitHub Mobile, you can use Copilot Chat to ask:

-   General software-related questions, without a particular context. See [Asking a general question about software development](#asking-a-general-question-about-software-development).
-   Questions asked in the context of your project. See [Asking questions about a specific repository](#asking-exploratory-questions-about-a-repository).
-   Questions about a specific file or specified lines of code within a file. See [Asking questions about specific pieces of code](#asking-questions-about-specific-pieces-of-code).

## [Limitations](#limitations)

The following limitations apply to Copilot Chat in GitHub Mobile:

-   The quality of the results from Copilot Chat may, in some situations, be degraded if very large files, or a large number of files, are used as a context for a question.
    
-   If you reach your premium request limit on mobile, Copilot will automatically fall back to a free, non-premium model. Your access to premium models will reset at the start of the next billing cycle.
    
-   If you purchased Copilot Pro or Copilot Pro+ through GitHub Mobile (via in-app purchase on iOS or Android), you cannot enable additional premium requests.
    
    -   To enable additional premium requests, you'll need to cancel your mobile subscription and re-subscribe on GitHub.com through a web browser.
    -   For help, contact us through the [GitHub Support portal](https://support.github.com).

## [Prerequisites](#prerequisites)

To use Copilot Chat in GitHub Mobile, click the Copilot icon in GitHub Mobile to initiate a chat. If you don't already have an active GitHub Copilot subscription, you will automatically get subscribed to Copilot Free.

If you are part of an organization with a GitHub Copilot Business subscription, the organization owner may need to grant you access to Copilot Chat in GitHub Mobile. For more information, see [Managing policies and features for GitHub Copilot in your organization](/en/copilot/github-copilot-chat/copilot-chat-in-github-mobile/enabling-github-copilot-chat-for-github-mobile).

## [Asking a general question about software development](#asking-a-general-question-about-software-development)

You can ask a general question about software development.

1.  In GitHub Mobile, tap the icon in the bottom right corner of the screen.
    
    Note
    
    The icon is not shown on every page in GitHub Mobile. If you don't see the icon, navigate to a different page in GitHub Mobile and look for the icon there.
    
2.  If the page displays a previous conversation you had with Copilot, tap in the top right corner of the screen, and then tap **New conversation** .
    
3.  At the bottom of the page, in the "Ask Copilot" box, type a question and send the message.
    
    Some examples of general questions you could ask are:
    
    -   `What are the advantages of the Go programming language?`
    -   `What is Agile software development?`
    -   `What is the most popular JavaScript framework?`
    -   `Give me some examples of regular expressions.`
    -   `Write a bash script to output today's date.`
4.  Within a conversation thread, you can ask follow-up questions. Copilot will answer within the context of the conversation. For example, you could type "tell me more" to get Copilot to expand on its last comment.
    
    You can use your initial question as a foundation for follow-up questions. A detailed foundational prompt can help Copilot provide more relevant answers to your follow-up questions. For more information, see [Prompting GitHub Copilot Chat to become your personal AI assistant for accessibility](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) on the GitHub Blog.
    
5.  To jump back into a previous conversation you had with Copilot, tap in the top right corner of the screen. Either tap on one of the last three recently modified conversations shown, or tap **View all conversations** . This takes you to a list of all your previous conversations with Copilot.
    
6.  To delete a conversation, tap in the top right corner of the screen, and then tap **Delete conversation** . This removes the conversation from the list of previous conversations you've had with Copilot.
    
7.  To start over, with a new conversation, tap in the top right corner of the screen, and then tap **New conversation** .
    
    You should always start a new conversation if you want to ask a question that's unrelated to the current conversation.
    

## [Asking exploratory questions about a repository](#asking-exploratory-questions-about-a-repository)

You can ask questions about a specific repository, to get help with understanding the code, or to get help with a specific task you're working on.

1.  In GitHub Mobile, navigate to a repository, and tap the icon in the bottom right corner of the screen.
    
2.  At the bottom of the page, use the "Ask Copilot" box, type a question and send the message.
    
    For example, if you chose the repository you are working in as the context, you could ask:
    
    -   `What is the main purpose of this repo? What problem does it solve or what functionality does it provide?`
        
    -   `What web frameworks are used in this project?`
        
    -   `Where is rate limiting implemented in our API?`
        
    -   `How is the code organized? Explain the project architecture.`
        
    -   `Are there any specific environment requirements for working on this project?`
        
    
    Important
    
    Copilot's ability to answer natural language questions like these in a repository context is improved when the repository has been indexed for semantic code search. Without indexing, Copilot Chat in GitHub Mobile may not be able to provide the most relevant answers to your questions.
    
    You can't trigger the creation of a semantic code search index for a repository from GitHub Mobile. Instead you must use Copilot Chat in a web browser. See [Indexing repositories for GitHub Copilot](/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat).
    
3.  To jump back into a previous conversation you had with Copilot, tap in the top right corner of the screen. Either tap on one of the last three recently modified conversations shown, or tap **View all conversations** . This takes you to a list of all your previous conversations with Copilot.
    
4.  To delete a conversation, tap in the top right corner of the screen, and then tap **Delete conversation** . This removes the conversation from the list of previous conversations you've had with Copilot.
    
5.  To start over, with a new conversation, tap in the top right corner of the screen, and then tap **New conversation** .
    
    You should always start a new conversation if you want to ask a question that's unrelated to the current conversation.
    

## [Asking questions about specific pieces of code](#asking-questions-about-specific-pieces-of-code)

You can chat with Copilot about a file in your repository, or about specific lines of code within a file.

1.  In GitHub Mobile, navigate to a repository and open a file.
    
2.  Do one of the following:
    
    -   To ask a question about the entire file, tap the Copilot icon () in the bottom right corner of the file view.
    -   To ask a question about specific lines within the file, select and copy the lines you want to ask about. Then tap the Copilot icon () and paste the copied lines in the Copilot Chat input field.
3.  Type a question in the "Ask Copilot" box at the bottom of the chat panel and send the message.
    
    For example, if you are asking about the entire file, you could enter:
    
    -   `Explain this file.`
    -   `How could I improve this code?`
    -   `How can I test this script?`
    
    If you are asking about specific lines, you could enter:
    
    -   `How could I improve this class?`
    -   `Add error handling to this code.`
    -   `Write a unit test for this method.`
    
    Copilot responds to your request in the panel.
    
4.  You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get Copilot to expand on its last comment.
    

## [Extending Copilot Chat in GitHub Mobile](#extending-copilot-chat-in-github-mobile)

GitHub Copilot Extensions integrate the power of external tools into Copilot Chat, helping you reduce context switching and receive responses with domain-specific context. You can install Copilot Extensions from the GitHub Marketplace or build private ones within your organization, then type `@` in a chat window to see a list of your available extensions. To use an extension, select the extension from the list or type the full slug name, then type your prompt.

## [Hiding Copilot Chat](#hiding-copilot-chat)

You can hide the floating Copilot button in GitHub Mobile.

1.  In the bottom menu, tap **Profile**.
2.  To view your settings, tap .
3.  Tap **Copilot**.
4.  Next to "Hide Copilot", use the toggle to hide Copilot.

## [Sharing feedback about GitHub Copilot Chat in GitHub Mobile](#sharing-feedback-about-github-copilot-chat-in-github-mobile)

To give feedback about a particular Copilot Chat response:

1.  Tap the ellipsis (**...**) in the top right corner above the chat response you want to provide feedback on, and tap either **Like Copilot response** or **Dislike Copilot response** ,
2.  Optionally, provide information about why you liked or disliked the response.
3.  Tap **Submit**.