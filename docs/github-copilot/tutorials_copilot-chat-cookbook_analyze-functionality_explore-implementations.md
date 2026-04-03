Exploring potential feature implementations - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Exploring potential feature implementations

Copilot Chat can help explore different approaches for implementing a single feature.

Copy as Markdown

## In this article

When tasked with implementing new features or enhancing existing ones, developers often face decisions about the best approach to take. Copilot Chat can assist by analyzing the problem and generating implementation options so that you can explore multiple solutions.

## [Example scenario](#example-scenario)

You're assigned the task of creating a new feature that displays the most recently viewed items on a user dashboard. Below is an example issue for implementing this functionality:

```text
[Feature Request] Add "Recent Items" section to user dashboard #753

## Issue Description
Users have requested a "Recent Items" section on their dashboard to quickly access the most recently viewed documents, projects, or files. This section should display the ten most recent items, sorted by the last access time.

## Requirements
* Display up to ten items that the user has accessed recently.
* Items must be sorted by the time they were last accessed.
* The solution should minimize database load.
* Data should reflect updates in near real-time.
* The solution should prioritize performance, especially for large datasets of items.

## Acceptance Criteria
* Dashboard loads the "Recent Items" section within 200ms under normal load.
* The solution must not degrade performance for users with thousands of items.
```

## [Example prompt](#example-prompt)

You want to evaluate different approaches to this implementation to see whether they fit with your needs and constraints. Here we'll ask Copilot Chat to suggest different approaches.

Navigate to the issue, then type:

Copilot prompt[](https://github.com/copilot?prompt=%5BFeature%20Request%5D%20Add%20%22Recent%20Items%22%20section%20to%20user%20dashboard%20%23753%0A%0A%23%23%20Issue%20Description%0AUsers%20have%20requested%20a%20%22Recent%20Items%22%20section%20on%20their%20dashboard%20to%20quickly%20access%20the%20most%20recently%20viewed%20documents%2C%20projects%2C%20or%20files.%20This%20section%20should%20display%20the%20ten%20most%20recent%20items%2C%20sorted%20by%20the%20last%20access%20time.%0A%0A%23%23%20Requirements%0A*%20Display%20up%20to%20ten%20items%20that%20the%20user%20has%20accessed%20recently.%0A*%20Items%20must%20be%20sorted%20by%20the%20time%20they%20were%20last%20accessed.%0A*%20The%20solution%20should%20minimize%20database%20load.%0A*%20Data%20should%20reflect%20updates%20in%20near%20real-time.%0A*%20The%20solution%20should%20prioritize%20performance%2C%20especially%20for%20large%20datasets%20of%20items.%0A%0A%23%23%20Acceptance%20Criteria%0A*%20Dashboard%20loads%20the%20%22Recent%20Items%22%20section%20within%20200ms%20under%20normal%20load.%0A*%20The%20solution%20must%20not%20degrade%20performance%20for%20users%20with%20thousands%20of%20items.%0A%0AGiven%20the%20criteria%20in%20Issue%20%23753%2C%20list%20options%20for%20implementation%20and%20tradeoffs%20for%20each%20option.)

Given the criteria in Issue #753, list options for implementation and tradeoffs for each option.

\[Feature Request\] Add "Recent Items" section to user dashboard #753

## Issue Description
Users have requested a "Recent Items" section on their dashboard to quickly access the most recently viewed documents, projects, or files. This section should display the ten most recent items, sorted by the last access time.

## Requirements
\* Display up to ten items that the user has accessed recently.
\* Items must be sorted by the time they were last accessed.
\* The solution should minimize database load.
\* Data should reflect updates in near real-time.
\* The solution should prioritize performance, especially for large datasets of items.

## Acceptance Criteria
\* Dashboard loads the "Recent Items" section within 200ms under normal load.
\* The solution must not degrade performance for users with thousands of items.

Given the criteria in Issue #753, list options for implementation and tradeoffs for each option.

```copilot
Given the criteria in Issue #753, list options for implementation and tradeoffs for each option.
```

Tip

When you are using Copilot to help identify implementation options, it's good practice to start with a general prompt to spark ideas, like in this example. Then you can follow up with more specific questions to dive more deeply into the options it suggests.

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot lists several different options for implementing this dashboard, along with tradeoffs for each option. Then it makes a recommendation.

For example:

```text
# Implementation Options and Tradeoffs for "Recent Items" Section

## 1. Client-Side Storage

- Description: Store recent items data in the user's browser using LocalStorage or IndexedDB.
- Tradeoffs:
  - Pros:
    - Reduces server load by handling data storage and retrieval on the client side.
    - Immediate updates and access without server communication.
  - Cons:
    - Limited by browser storage capacity.
    - Data lost if the user clears browser storage or switches devices.
    - Security concerns with storing sensitive data on the client side.

## 2. Server-Side Storage with Database Indexing

- Description: Store recent items in the database and use indexing to quickly retrieve the most recent items.
- Tradeoffs:
  - Pros:
    - Centralized data storage, accessible from any device.
    - Scalable and can handle large datasets efficiently with proper indexing.
  - Cons:
    - Increased database load, especially for frequent access updates.
    - Potential latency in updating the recent items list.

## 3. In-Memory Caching (e.g., Redis)

- Description: Use an in-memory data store like Redis to cache recent items for fast retrieval.
- Tradeoffs:
  - Pros:
    - Extremely fast data access and updates.
    - Reduces database load by offloading frequent read operations.
  - Cons:
    - Requires additional infrastructure and maintenance.
    - Data may be lost if the cache is cleared or server restarts.

## 4. Hybrid Approach

- Description: Combine server-side storage with in-memory caching to balance performance and persistence.
- Tradeoffs:
  - Pros:
    - Fast access through caching, with persistent storage in the database.
    - Can handle large datasets and frequent updates efficiently.
  - Cons:
    - Increased complexity in implementation and maintenance.
    - Potential consistency issues between cache and database.

## 5. Event-Driven Updates

- Description: Use event-driven architecture to update recent items in real-time as users access documents.
- Tradeoffs:
  - Pros:
    - Near real-time updates with minimal delay.
    - Efficient handling of updates through events rather than periodic polling.
  - Cons:
    - Requires setting up event handling infrastructure (e.g., message queues).
    - Increased complexity in managing events and ensuring consistency.

## Recommendation

The hybrid approach (option 4) is a balanced solution, offering fast access through caching and persistence through database storage. It meets performance requirements and scales well with a large dataset, although it involves a more complex implementation.
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)