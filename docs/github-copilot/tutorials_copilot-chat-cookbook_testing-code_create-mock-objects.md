Creating mock objects to abstract layers - GitHub Docs

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

# Creating mock objects to abstract layers

Copilot Chat can help with creating mock objects that you can use for unit tests.

Copy as Markdown

## In this article

When creating unit tests, it's important to ensure they're isolated and not depending on external services. One way to achieve this is to create mock objects that abstract layers of your application. Copilot Chat can help you generate the code you need to create these mock objects.

## [Example scenario](#example-scenario)

Imagine a website built with TypeScript which displays a list of runners. You have a service which fetches the runners from a database, and the server-side code which uses this service. You want to test the server-side code, but you don't want to make a call to the database. You can ask Copilot Chat to generate a mock object for the service.

```typescript
// SvelteKit example at +page.server.ts
import service from './service';

export async function load({ params }) {
  const runner = await service.getRunner(params.id);

  return {
    runner
  };
}
```

## [Example prompt](#example-prompt)

This example assumes you are using [vitest](https://vitest.dev/) for your tests, but will work with other test runners.

Copilot prompt[](https://github.com/copilot?prompt=%2F%2F%20SvelteKit%20example%20at%20%2Bpage.server.ts%0Aimport%20service%20from%20'.%2Fservice'%3B%0A%0Aexport%20async%20function%20load\(%7B%20params%20%7D\)%20%7B%0A%20%20const%20runner%20%3D%20await%20service.getRunner\(params.id\)%3B%0A%0A%20%20return%20%7B%0A%20%20%20%20runner%0A%20%20%7D%3B%0A%7D%0A%0A%2Ftests%20Create%20a%20unit%20test%20to%20ensure%20the%20service%20is%20called%20correctly.%20Mock%20the%20service%20object.)

/tests Create a unit test to ensure the service is called correctly. Mock the service object.

// SvelteKit example at +page.server.ts
import service from './service';

export async function load({ params }) {
  const runner = await service.getRunner(params.id);

  return {
    runner
  };
}

/tests Create a unit test to ensure the service is called correctly. Mock the service object.

```copilot
/tests Create a unit test to ensure the service is called correctly. Mock the service object.
```

If you have an existing test you wish Copilot to use as a model, you can use `#file: path/to/test-file.js` to provide the path to the file, and include this information in the prompt.

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot provides the plan it will implement and the code text which includes the mocks.

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { load } from './+page.server.ts';

// Mock the entire service module
vi.mock('./service', () => ({
  default: {
    getRunner: vi.fn()
  }
}));

// Import the mocked service
import service from './service';

describe('load function', () => {
  const mockRunner = {
    id: '123',
    name: 'Test Runner',
    status: 'active'
  };

  beforeEach(() => {
    // Reset mock before each test
    vi.resetAllMocks();

    // Setup default mock implementation
    (service.getRunner as any).mockResolvedValue(mockRunner);
  });

  it('should fetch runner with correct id', async () => {
    const params = { id: '123' };
    const result = await load({ params });

    expect(service.getRunner).toHaveBeenCalledWith('123');
    expect(service.getRunner).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ runner: mockRunner });
  });
});
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)