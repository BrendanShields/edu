# Managing and curating Copilot Memory

Learn how to manage agentic memory settings, and how to view and delete stored memories.

## Who can use this feature?

-   Enterprises and organizations with a Copilot Enterprise or Copilot Business plan.
-   Individual users with a Copilot Pro or Copilot Pro+ plan.  
    [Sign up for Copilot](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse)

Copy as Markdown

## In this article

Note

This feature is currently in public preview and is subject to change.

Copilot Memory allows Copilot to learn about your codebase, helping Copilot coding agent, Copilot code review, and Copilot CLI to work more effectively in a repository.

For more information, see [About agentic memory for GitHub Copilot](/en/copilot/concepts/agents/copilot-memory).

## [Enabling Copilot Memory](#enabling-copilot-memory)

For users with an individual Copilot subscription to Copilot Pro or Copilot Pro+, Copilot Memory is enabled by default. These users can manage the setting in their personal Copilot settings.

For enterprise and organization-managed Copilot subscriptions, Copilot Memory is turned off by default and must be enabled in the enterprise or organization settings.

Users who receive Copilot from an organization must have Copilot Memory enabled in the organization or enterprise settings.

Note

If a user is assigned a Copilot subscription by more than one organization, the most restrictive setting applies—that is, Copilot Memory will not be used unless all of those organizations have enabled this feature.

### [Enabling Copilot Memory for an enterprise](#enabling-copilot-memory-for-an-enterprise)

Enterprise owners can define an enablement policy for the whole enterprise, or delegate the decision to individual organization owners.

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **AI controls**.
    
3.  In the sidebar, click **Copilot**.
    
4.  Under "Features", scroll down to the **Copilot Memory** setting and select a policy from the dropdown.
    
    -   **Let organizations decide** devolves the decision of whether to enable Copilot Memory to organization owners.
    -   **Enabled everywhere** enables Copilot Memory for all members of organizations in this enterprise who have a Copilot license.
    -   **Disabled everywhere** disables Copilot Memory and prevents it being enabled by organizations in this enterprise.

### [Enabling Copilot Memory for an organization](#enabling-copilot-memory-for-an-organization)

Organization owners can enable or disable Copilot Memory for all members of the organization with a Copilot license.

If the organization belongs to an enterprise, the ability for organization owners to enable or disable Copilot Memory may be controlled by the enterprise-level policy.

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the sidebar, under "Code, planning, and automation", click **Copilot**, then click **Policies**.
    
4.  Under "Features", scroll down to the setting for **Copilot Memory**.
    
5.  Click the dropdown button and select **Enabled**.
    
    Copilot Memory is enabled for all members of the organization who have a Copilot license.
    

### [Managing Copilot Memory for an individual user](#managing-copilot-memory-for-an-individual-user)

If you have an individual Copilot subscription, from a Copilot Pro or Copilot Pro+ plan, Copilot Memory is enabled by default. You can disable or re-enable Copilot Memory in your personal Copilot settings on GitHub.

When enabled, Copilot Memory will be used in any repository in which you use Copilot coding agent, Copilot code review, or Copilot CLI.

1.  In the upper-right corner of any page on GitHub, click your profile picture, then click **Copilot settings**.
2.  Under "Features", scroll down to the setting for **Copilot Memory**.
3.  Click the dropdown button and select **Enabled** or **Disabled**.

## [Viewing and deleting memories](#viewing-and-deleting-memories)

As an owner of a repository in which Copilot Memory is in use, you can review the currently stored memories. If you think any are inappropriate, misleading, or incorrect you can delete them.

### [Viewing Copilot's memories for a repository](#viewing-copilots-memories-for-a-repository)

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Settings**. If you cannot see the "Settings" tab, select the dropdown menu, then click **Settings**.
    
    ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/cb-28260/images/help/repository/repo-actions-settings.png)
    
3.  In the "Code & automation" section of the sidebar, click Copilot then **Memory**.
    
    A list of stored memories is displayed in chronological order, with the most recently stored memory at the top of the list.
    
    ![Screenshot of the "Memories" list showing an example set of memories.](/assets/cb-332961/images/help/copilot/copilot-memory-list.png)
    

### [Deleting a memory](#deleting-a-memory)

You can delete a memory if you don't want it to be used by Copilot. It's worth noting, however, that Copilot validates memories before they are used, which ensures that a memory is only used if the code that caused it to be generated still exists in the codebase.

1.  View the memories for a repository.
    
2.  Click the trashcan icon to the right of a memory you want to delete.
    
    Alternatively, use the checkboxes to select multiple memories, then click **Delete**.
    

Note

Memories are automatically deleted after 28 days to avoid stale information adversely affecting agentic decision making.