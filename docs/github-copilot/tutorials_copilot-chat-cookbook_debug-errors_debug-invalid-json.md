Debugging invalid JSON - GitHub Docs

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

# Debugging invalid JSON

Copilot Chat can identify and resolve syntax errors or structural issues in JSON data.

Copy as Markdown

## In this article

When working with JSON data, you may encounter issues such as trailing commas, mismatched braces, or incorrect data types that make the JSON invalid. GitHub Copilot Chat can help you debug and fix these errors by suggesting corrections to fix invalid JSON.

## [Example scenario](#example-scenario)

Consider a scenario where an application consumes JSON data from an API, but the response fails to parse due to invalid formatting. You receive the error message:

```bash
Error: Parse error
----------------------^
Expecting 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[', got 'undefined'
```

Below is the JSON data that caused the error:

```json
{
  "location": "San Francisco",
  "current_weather": {
    "temperature": 18,
    "unit": "Celsius",
    "conditions": "Cloudy
  },
  "forecast": {
    "day": "Monday",
    "high": 22,
    "low": 15,
    "precipitation": 10
  }
}
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=%7B%0A%20%20%22location%22%3A%20%22San%20Francisco%22%2C%0A%20%20%22current_weather%22%3A%20%7B%0A%20%20%20%20%22temperature%22%3A%2018%2C%0A%20%20%20%20%22unit%22%3A%20%22Celsius%22%2C%0A%20%20%20%20%22conditions%22%3A%20%22Cloudy%0A%20%20%7D%2C%0A%20%20%22forecast%22%3A%20%7B%0A%20%20%20%20%22day%22%3A%20%22Monday%22%2C%0A%20%20%20%20%22high%22%3A%2022%2C%0A%20%20%20%20%22low%22%3A%2015%2C%0A%20%20%20%20%22precipitation%22%3A%2010%0A%20%20%7D%0A%7D%0A%0AWhy%20is%20my%20JSON%20object%20invalid%20and%20how%20can%20I%20fix%20it%3F)

Why is my JSON object invalid and how can I fix it?

{
  "location": "San Francisco",
  "current\_weather": {
    "temperature": 18,
    "unit": "Celsius",
    "conditions": "Cloudy
  },
  "forecast": {
    "day": "Monday",
    "high": 22,
    "low": 15,
    "precipitation": 10
  }
}

Why is my JSON object invalid and how can I fix it?

```copilot
Why is my JSON object invalid and how can I fix it?
```

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot might suggest that your JSON is invalid because it's missing a closing quote for the `conditions` value. Here is the corrected JSON:

```json
{
  "location": "San Francisco",
  "current_weather": {
    "temperature": 18,
    "unit": "Celsius",
    "conditions": "Cloudy"
  },
  "forecast": {
    "day": "Monday",
    "high": 22,
    "low": 15,
    "precipitation": 10
  }
}
```

In this example response, Copilot's suggestions include fixing the closing quote for the `conditions` value, which resolves the JSON parsing error.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)