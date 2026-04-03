# Reviewing changes to content exclusions for GitHub Copilot

You can monitor changes to content exclusions in your repositories and organizations.

## Who can use this feature?

Organization owners

Organizations with a Copilot Business or Copilot Enterprise plan.

Copy as Markdown

## In this article

Organization and repository settings include the ability to exclude content from being used by GitHub Copilot. You can review any changes that are made to these content exclusion settings.

## [Reviewing changes in your repository](#reviewing-changes-in-your-repository)

1.  On GitHub, navigate to the main page of the repository.
    
2.  Under your repository name, click **Settings**. If you cannot see the "Settings" tab, select the dropdown menu, then click **Settings**.
    
    ![Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.](/assets/cb-28260/images/help/repository/repo-actions-settings.png)
    
3.  In the "Code & automation" section of the sidebar, click **Copilot**.
    
4.  Scroll to the bottom of the page.
    
    You will see the name of the person who last changed the content exclusion settings, and information about when they made this change.
    
5.  Click the time of the last change.
    
    ![Screenshot of the last edited information. The time of change link is highlighted with a dark orange outline.](/assets/cb-33836/images/help/copilot/content-exclusions-last-edited-by.png)
    
    The "Audit log" page for the organization is displayed, showing the most recently logged occurrences of the `copilot.content_exclusion_changed` action in the repository.
    
6.  Click the ellipsis (...) at the end of each entry to see more details.
    
    If the "excluded\_paths" entry is truncated, hover over the truncated value to show the full entry. This displays the content of the exclusion settings after the change was saved.
    
    ![Screenshot of audit log details for the 'copilot.content_exclusion_changed' action. The ellipsis button is highlighted.](/assets/cb-159905/images/help/copilot/copilot-audit-log.png)
    

## [Reviewing changes in your organization](#reviewing-changes-in-your-organization)

1.  In the upper-right corner of GitHub, click your profile picture, then click **Organizations**.
    
2.  Next to the organization, click **Settings**.
    
3.  In the left sidebar, click **Copilot** then click **Content exclusion**.
    
4.  Scroll to the bottom of the page.
    
    You will see the name of the person who last changed the content exclusion settings, and information about when they made this change.
    
5.  Click the time of the last change.
    
    ![Screenshot of the last edited information. The time of change link is highlighted with a dark orange outline.](/assets/cb-33836/images/help/copilot/content-exclusions-last-edited-by.png)
    
    The "Audit log" page for the organization is displayed, showing the most recently logged occurrences of the `copilot.content_exclusion_changed` action.
    
    Changes made at either the repository or organization level are listed.
    
6.  Click the ellipsis (...) at the end of each entry to see more details.
    
    If the "excluded\_paths" entry is truncated, hover over the truncated value to show the full entry. This displays the content of the exclusion settings after the change was saved.
    
    ![Screenshot of audit log details for the 'copilot.content_exclusion_changed' action. The ellipsis button is highlighted.](/assets/cb-159905/images/help/copilot/copilot-audit-log.png)
    

## [Further reading](#further-reading)

-   [Content exclusion for GitHub Copilot](/en/copilot/concepts/content-exclusion-for-github-copilot)