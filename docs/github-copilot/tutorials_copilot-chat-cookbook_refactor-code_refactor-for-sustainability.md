Refactoring for environmental sustainability - GitHub Docs

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

# Refactoring for environmental sustainability

Copilot Chat can suggest ways to make code more environmentally friendly.

Copy as Markdown

## In this article

Code that is inefficient in its use of computational resources can lead to higher energy consumption, which has a negative impact on the environment. Examples of such code include algorithms with high time complexity, excessive memory usage, and unnecessary processing.

Copilot Chat can help identify inefficient algorithms or resource-intensive operations in your code that contribute to higher energy consumption. By suggesting more efficient alternatives, it can help reduce the environmental impact of your software.

## [Example scenario](#example-scenario)

The following Python code reads a large text file and counts the number of lines. However, it loads the entire file into memory, which can be inefficient for large files and lead to higher energy consumption. It also manually counts the lines instead of using built-in functions.

```python
def count_lines(filename):
    with open(filename, 'r') as f:
        data = f.read()
        lines = data.split('\n')
        count = 0
        for line in lines:
            count += 1
        return count

print(count_lines('largefile.txt'))
```

## [Example prompt](#example-prompt)

Here is an example prompt you can use with Copilot Chat to refactor the above code for better environmental sustainability:

Copilot prompt[](https://github.com/copilot?prompt=def%20count_lines\(filename\)%3A%0A%20%20%20%20with%20open\(filename%2C%20'r'\)%20as%20f%3A%0A%20%20%20%20%20%20%20%20data%20%3D%20f.read\(\)%0A%20%20%20%20%20%20%20%20lines%20%3D%20data.split\('%5Cn'\)%0A%20%20%20%20%20%20%20%20count%20%3D%200%0A%20%20%20%20%20%20%20%20for%20line%20in%20lines%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20count%20%2B%3D%201%0A%20%20%20%20%20%20%20%20return%20count%0A%0Aprint\(count_lines\('largefile.txt'\)\)%0A%0ARefactor%20this%20code%20to%20improve%20its%20environmental%20sustainability%20by%20reducing%20memory%20usage%20and%20computational%20overhead.)

Refactor this code to improve its environmental sustainability by reducing memory usage and computational overhead.

def count\_lines(filename):
    with open(filename, 'r') as f:
        data = f.read()
        lines = data.split('\\n')
        count = 0
        for line in lines:
            count += 1
        return count

print(count\_lines('largefile.txt'))

Refactor this code to improve its environmental sustainability by reducing memory usage and computational overhead.

```copilot
Refactor this code to improve its environmental sustainability by reducing memory usage and computational overhead.
```

## [Example response](#example-response)

Note

Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot suggests using a generator expression to read the file line by line, which reduces memory usage. It also uses the built-in `sum` function to count the lines more efficiently.

```python
def count_lines(filename):
    with open(filename, 'r') as f:
        return sum(1 for _ in f)  # Efficiently counts lines without loading all into memory

print(count_lines('largefile.txt'))
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)