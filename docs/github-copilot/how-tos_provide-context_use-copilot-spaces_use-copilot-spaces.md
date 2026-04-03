# Using GitHub Copilot Spaces

Use spaces to ground Copilot's responses in the right context for a specific task.

## Who can use this feature?

Anyone with a Copilot license can use Spaces.

Copy as Markdown

## In this article

For information on creating Copilot Spaces, see [Creating GitHub Copilot Spaces](/en/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces).

## [Using Copilot Spaces in GitHub](#using-copilot-spaces-in-github)

Once you've added context to your space, you can ask Copilot questions in the space's chat interface in GitHub. Your chat will be grounded in the context you've added. You can view all conversations you have had in the space's "Conversations" tab.

You can also change the large language model (LLM) used for your space by selecting the **CURRENT-MODEL** dropdown menu, then clicking the AI model of your choice. For more information, see [AI model comparison](/en/copilot/reference/ai-models/model-comparison).

To star your favorite spaces so that you can easily find them later, you can click in the top right corner of the space. To view all spaces available to you, including starred spaces, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text).

## [Using Copilot Spaces in your IDE](#using-copilot-spaces-in-your-ide)

You can also access the information and context from Spaces directly in your IDE using the GitHub MCP server. This allows you to leverage your curated context while coding without switching between your IDE and the web interface.

This functionality is available in any IDE that supports the GitHub Copilot extension and the GitHub MCP server.

Note

When using Spaces in your IDE, repository context is not supported. You will have access to all other sources and instructions from the space.

Once you've accessed space context from your IDE:

-   The space's context will inform Copilot's responses
-   You can reference the space's content when generating code, getting explanations, or working on development tasks
-   Your spaces stay in sync as your project evolves. GitHub files and other GitHub-based sources added to a space are automatically updated as they change, making Copilot an evergreen expert in your project

### [Prerequisites](#prerequisites)

To use Spaces in your IDE, you need to:

-   Set up the remote GitHub MCP server for your IDE. For more information, see [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server) and [Remote GitHub MCP Server](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) in the GitHub MCP server documentation.
    
-   Configure the set up of the remote GitHub MCP server so that the Spaces toolset is enabled.
    
    The Spaces toolset is not included in the default configuration, so you must explicitly enable it using the `X-MCP-Toolsets` header. The following example configuration enables both the default tools and Spaces:
    
    ```json
    {
      "servers": {
        "github": {
          "type": "http",
          "url": "https://api.githubcopilot.com/mcp/",
          "headers": {
            "X-MCP-Toolsets": "default,copilot_spaces"
          }
        }
      }
    }
    ```
    
    Alternatively, you can use the dedicated Spaces toolset URL: `https://api.githubcopilot.com/mcp/x/copilot_spaces`. Note that this configuration provides _only_ Spaces tools, without other default GitHub MCP server functionality.
    

### [Accessing space context from your IDE](#accessing-space-context-from-your-ide)

For more detailed information on using the GitHub MCP server in a specific IDE, see [Using the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).

Note that Spaces can only be used in agent mode in your IDE, since spaces are accessed via the GitHub MCP server.

1.  In your IDE, open Copilot Chat and select **Agent** from the mode dropdown or select the **Agent** tab.
    
    -   To confirm that the Spaces tools are enabled, in the Copilot Chat box, click the tools icon. In the dropdown, expand the list of available tools for **MCP Server: github**, and confirm that the `get_copilot_space` and `list_copilot_spaces` tools are enabled.
2.  In the Copilot Chat box, enter a prompt that references the space that you want to use as context. If you know the exact name of the space and the name of the user or organization that owns the space, you can provide that. Otherwise, Copilot will automatically use the `list_copilot_spaces` tool to find spaces that match the name or text you provide and access the context from those spaces.
    
    For example, you could use either of these two prompts:
    
    -   `Using the Copilot space 'Checkout Flow Redesign' owned by myorganization, summarize the implementation plan.`
    -   `Summarize the implementation plan from the Copilot space for the checkout flow redesign.`
    
    Follow-up prompts in the same chat conversation will have access to the same spaces, without you having to reference it explicitly.
    

## [Next steps](#next-steps)

-   To learn more about how to use Spaces to help you with development work, see [Speeding up development work with GitHub Copilot Spaces](/en/copilot/using-github-copilot/copilot-spaces/speeding-up-development-work-with-copilot-spaces).
-   To learn how to share your space with your team, see [Collaborating with others using GitHub Copilot Spaces](/en/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).