# Configure MCP server access for your organization or enterprise

You can configure an MCP registry URL and access control policy to determine which MCP servers developers can discover and use in supported IDEs with GitHub Copilot.

## Who can use this feature?

Enterprise owners and organization owners

Copilot Enterprise or Copilot Business

Copy as Markdown

## In this article

Note

The MCP registry URL and allowlist are in public preview and subject to change.

## [Prerequisites](#prerequisites)

Before you can fully configure MCP server access for your company, you need to create an MCP registry. See [Configure an MCP registry for your organization or enterprise](/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).

## [Configuring the MCP allowlist policy for an enterprise](#configuring-the-mcp-allowlist-policy-for-an-enterprise)

To ensure uniform access, you can set and maintain your MCP registry URL and allowlist policy at the enterprise level. Otherwise, if your teams have different needs, you should configure separate policies for each organization.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **AI controls**.
    
3.  In the sidebar, click **MCP**.
    
4.  Ensure **MCP servers in Copilot** is set to **Enabled everywhere**.
    
5.  In the **MCP Registry URL** section, enter the URL of your registry, then click **Save**.
    
    Note
    
    If you set up your MCP registry using Azure API Center, enter the base URL for your API Center. Including route suffixes like `/v0.1/servers` will cause the registry to error out.
    
6.  In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
    
    -   **Allow all**: No restrictions. All MCP servers can be used.
    -   **Registry only**: Only servers from the registry may run.
    
    Your chosen policy will immediately apply to developers in your enterprise.
    

## [Configuring the MCP allowlist policy for an organization](#configuring-the-mcp-allowlist-policy-for-an-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**, then click **Policies**.
    
4.  In the "Features" section, ensure **MCP servers in Copilot** is set to **Enabled**.
    
5.  In the **MCP Registry URL (optional)** field, enter the URL of your registry, then click **Save**.
    
    Note
    
    If you set up your MCP registry using Azure API Center, enter the base URL for your API Center. Including route suffixes like `/v0.1/servers` will cause the registry to error out.
    
6.  In the **Restrict MCP access to registry servers** section, select the dropdown menu, then click one of the following options:
    
    -   **Allow all**: No restrictions. All MCP servers can be used.
    -   **Registry only**: Only servers from the registry may run.
    
    Your chosen policy will immediately apply to developers in your organization.
    

## [Next steps](#next-steps)

For detailed information on MCP allowlist enforcement and limitations, see [MCP allowlist enforcement](/en/copilot/reference/mcp-allowlist-enforcement).