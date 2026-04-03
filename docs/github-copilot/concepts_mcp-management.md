# MCP server usage in your company

You can manage MCP server usage to provide your developers with valuable tools while maintaining security and compliance.

Copy as Markdown

## In this article

You can manage Model Context Protocol (MCP) server usage in your organization or enterprise by configuring a series of MCP policies on GitHub.com. Through these policies, you can allow or block MCP server usage entirely, or restrict access to a list of servers that you define in an MCP registry.

## [MCP registries](#mcp-registries)

An MCP registry is a directory of MCP servers that acts like a catalog for IDEs and Copilot. Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that server provides.

After you create your MCP registry, you can make it available to your company, allowing you to:

-   Curate a catalog of MCP servers your developers can discover and use without context switching
-   Restrict access to unapproved servers for increased security and compliance
-   Provide clarity to developers when a server is blocked by policy

## [MCP policy settings](#mcp-policy-settings)

The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise:

-   **MCP servers in Copilot**: Manage the use of MCP servers for all users with Copilot seats in your organization or enterprise.
-   **MCP Registry URL**: Specify the URL of your MCP registry, allowing your developers to discover and use approved MCP servers in supported surfaces.
-   **Restrict MCP access to registry servers**: Choose whether to allow all MCP servers or restrict access to only those listed in your configured registry.

## [Supported surfaces](#supported-surfaces)

MCP management features are supported as follows:

Surface

Registry display

Allowlist enforcement

Copilot CLI

Copilot coding agent

Eclipse

JetBrains

Visual Studio

VS Code

VS Code Insiders

Xcode

Note

For Eclipse, JetBrains, and Xcode, MCP management features are supported in the pre-release versions of Copilot.

## [Next steps](#next-steps)

To create your own MCP registry, see [Configure an MCP registry for your organization or enterprise](/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).