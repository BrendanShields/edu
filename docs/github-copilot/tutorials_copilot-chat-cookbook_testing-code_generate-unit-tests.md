Generating unit tests - GitHub Docs

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

# Generating unit tests

Copilot Chat can help with generating unit tests for a function.

Copy as Markdown

## In this article

A good suite of unit tests is critical to the success of any project. However, writing these tests can be time-consuming and are often neglected. Copilot Chat can help generate these tests for you.

## [Example scenario](#example-scenario)

Imagine you have a Python function which validates data before updating the database. You need to create unit tests to ensure the validation performs the way you expect. You can ask Copilot Chat to generate these tests for you.

```python
def validate_price(price: float):
  if price <= 0:
    raise ValueError("Price must be greater than 0")
  if price > 1000:
    raise ValueError("Price must be less than or equal to 1000")
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=def%20validate_price\(price%3A%20float\)%3A%0A%20%20if%20price%20%3C%3D%200%3A%0A%20%20%20%20raise%20ValueError\(%22Price%20must%20be%20greater%20than%200%22\)%0A%20%20if%20price%20%3E%201000%3A%0A%20%20%20%20raise%20ValueError\(%22Price%20must%20be%20less%20than%20or%20equal%20to%201000%22\)%0A%0A%2Ftests%20Generate%20unit%20tests%20for%20this%20function.%20Validate%20both%20success%20and%20failure%2C%20and%20include%20edge%20cases.)

/tests Generate unit tests for this function. Validate both success and failure, and include edge cases.

def validate\_price(price: float):
  if price <= 0:
    raise ValueError("Price must be greater than 0")
  if price > 1000:
    raise ValueError("Price must be less than or equal to 1000")

/tests Generate unit tests for this function. Validate both success and failure, and include edge cases.

```copilot
/tests Generate unit tests for this function. Validate both success and failure, and include edge cases.
```

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

If this is your first time asking Copilot Chat to generate unit tests, it may ask you if you wish to configure unit tests for your project. For this example, we are assuming you decline this offer.

Copilot will provide a strategy for generating the tests, and then provide the tests themselves.

```python
import unittest
from generate_unit_tests import validate_price

class TestValidateProduct(unittest.TestCase):
  def test_price_zero(self):
    with self.assertRaises(ValueError) as context:
      validate_price(0)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_negative(self):
    with self.assertRaises(ValueError) as context:
      validate_price(-10)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_above_limit(self):
    with self.assertRaises(ValueError) as context:
      validate_price(1500)
    self.assertEqual(str(context.exception), "Price must be less than or equal to 1000")

  def test_price_edge_case_zero(self):
    with self.assertRaises(ValueError) as context:
      validate_price(0)
    self.assertEqual(str(context.exception), "Price must be greater than 0")

  def test_price_edge_case_max(self):
    try:
      validate_price(1000)
    except ValueError:
      self.fail("validate_price() raised ValueError unexpectedly!")

if __name__ == '__main__':
  unittest.main()
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)