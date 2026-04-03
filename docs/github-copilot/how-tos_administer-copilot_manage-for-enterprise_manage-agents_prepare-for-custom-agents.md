# Preparing to use custom agents in your enterprise

Set up your enterprise for custom agents by configuring their source organization and repository, availability, and management permissions.

## Who can use this feature?

Enterprise owners

Copy as Markdown

## In this article

Enterprise-level custom agents are defined in a specific repository within an organization in your enterprise. Before you can create and use custom agents, you need to create this repository and configure the relevant enterprise settings.

## [Creating a repository for your custom agents](#creating-a-repository-for-your-custom-agents)

1.  Choose an organization in your enterprise to own the repository containing your enterprise-level custom agents.
2.  Using the [custom agents template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise), create a new repository in your chosen organization named `.github-private`. Set the visibility of the repository as follows:
    -   To grant **read access to all members** of your enterprise, choose **Internal**.
    -   To **manually grant access after creation**, choose **Private**.
3.  Update the template README as needed. Consider including creation guidelines for custom agents or compliance considerations specific to your enterprise.

## [Enabling and protecting custom agents in your enterprise](#enabling-and-protecting-custom-agents-in-your-enterprise)

1.  Navigate to your enterprise. For example, from the [Enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text) page on GitHub.com.
    
2.  At the top of the page, click **AI controls**.
    
3.  In the "Custom agents" section, select the **Select organization** dropdown menu, then click the organization that contains your custom agent repository.
    
4.  To automatically configure a ruleset that allows only enterprise owners to edit agent profiles, in the "Protect agent files using rulesets" section, click **Create ruleset**.
    
    Note
    
    -   Members of your enterprise with write access to the custom agent repository can still create pull requests proposing changes to your agent profiles. Enterprise members with bypass access to the ruleset can then merge those pull requests as they see fit.
    -   Creating this ruleset will also block organization owners in your enterprise from creating or editing organization-level custom agents. To prevent this, you can edit the ruleset to target only the organization containing your enterprise-level custom agents.
    

## [Next steps](#next-steps)

To reduce your administrative burden and empower your SMEs, you can delegate the creation and management of custom agents in your enterprise by creating a team of AI managers. See [Establishing AI managers in your enterprise](/en/copilot/tutorials/roll-out-at-scale/establish-ai-managers).

If you prefer to maintain full control over your enterprise's tooling to ensure security and compliance, you can create and manage custom agents yourself. See [Testing and releasing custom agents in your organization or enterprise](/en/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents).