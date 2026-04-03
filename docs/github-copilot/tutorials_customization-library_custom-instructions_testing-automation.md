Testing automation - GitHub Docs

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

# Testing automation

File-specific instructions for writing unit tests.

Copy as Markdown

Note

-   The examples in this library are intended for inspiration—you are encouraged to adjust them to be more specific to your projects, languages, and team processes.
-   For community-contributed examples of custom instructions for specific languages and scenarios, see the [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md) repository.
-   You can apply custom instructions across different scopes, depending on the platform or IDE where you are creating them. For more information, see "[About customizing GitHub Copilot responses](/en/copilot/concepts/response-customization)."

This example shows a path-specifc `python-tests.instructions.md` file that applies only to Python test files in your repository, using the `applyTo` field. For more information about path-specific instructions files, see [Adding repository custom instructions for GitHub Copilot](/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#using-one-or-more-instructionsmd-files).

Text

\---
applyTo: "tests/\*\*/\*.py"
---

When writing Python tests:

## Test Structure Essentials
- Use pytest as the primary testing framework
- Follow AAA pattern: Arrange, Act, Assert
- Write descriptive test names that explain the behavior being tested
- Keep tests focused on one specific behavior

## Key Testing Practices
- Use pytest fixtures for setup and teardown
- Mock external dependencies (databases, APIs, file operations)
- Use parameterized tests for testing multiple similar scenarios
- Test edge cases and error conditions, not just happy paths

## Example Test Pattern
\`\`\`python
import pytest
from unittest.mock import Mock, patch

class TestUserService:
    @pytest.fixture
    def user\_service(self):
        return UserService()

    @pytest.mark.parametrize("invalid\_email", \["", "invalid", "@test.com"\])
    def test\_should\_reject\_invalid\_emails(self, user\_service, invalid\_email):
        with pytest.raises(ValueError, match="Invalid email"):
            user\_service.create\_user({"email": invalid\_email})

    @patch('src.user\_service.email\_validator')
    def test\_should\_handle\_validation\_failure(self, mock\_validator, user\_service):
        mock\_validator.validate.side\_effect = ConnectionError()

        with pytest.raises(ConnectionError):
            user\_service.create\_user({"email": "test@example.com"})
\`\`\`

````text
---
applyTo: "tests/**/*.py"
---

When writing Python tests:

## Test Structure Essentials
- Use pytest as the primary testing framework
- Follow AAA pattern: Arrange, Act, Assert
- Write descriptive test names that explain the behavior being tested
- Keep tests focused on one specific behavior

## Key Testing Practices
- Use pytest fixtures for setup and teardown
- Mock external dependencies (databases, APIs, file operations)
- Use parameterized tests for testing multiple similar scenarios
- Test edge cases and error conditions, not just happy paths

## Example Test Pattern
```python
import pytest
from unittest.mock import Mock, patch

class TestUserService:
    @pytest.fixture
    def user_service(self):
        return UserService()

    @pytest.mark.parametrize("invalid_email", ["", "invalid", "@test.com"])
    def test_should_reject_invalid_emails(self, user_service, invalid_email):
        with pytest.raises(ValueError, match="Invalid email"):
            user_service.create_user({"email": invalid_email})

    @patch('src.user_service.email_validator')
    def test_should_handle_validation_failure(self, mock_validator, user_service):
        mock_validator.validate.side_effect = ConnectionError()

        with pytest.raises(ConnectionError):
            user_service.create_user({"email": "test@example.com"})
```
````