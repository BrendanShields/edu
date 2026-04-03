Creating end-to-end tests for a webpage - GitHub Docs

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

# Creating end-to-end tests for a webpage

Copilot Chat can help with generating end-to-end tests.

Copy as Markdown

## In this article

Creating end-to-end tests for a webpage can be time-consuming and complex as the HTML will be generated dynamically. Copilot Chat can help you create end-to-end tests for a webpage by suggesting the necessary code to interact with the webpage and validate the expected results.

## [Example scenario](#example-scenario)

Imagine a React application that displays product details on a webpage. You need to create end-to-end tests to ensure the product details are displayed correctly. You can ask Copilot Chat to generate these tests for you.

```javascript
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ productId = '1' }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
    return;
  }, [productId]); // Add productId to dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.string
};

export default ProductDetails;
```

## [Example prompt](#example-prompt)

Note

This example uses Playwright for end-to-end testing, but you can use other frameworks like Selenium or Cypress.

Copilot prompt[](https://github.com/copilot?prompt=import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%0Aimport%20PropTypes%20from%20'prop-types'%3B%0A%0Aconst%20ProductDetails%20%3D%20\(%7B%20productId%20%3D%20'1'%20%7D\)%20%3D%3E%20%7B%0A%20%20const%20%5Bproduct%2C%20setProduct%5D%20%3D%20useState\(null\)%3B%0A%20%20const%20%5Bloading%2C%20setLoading%5D%20%3D%20useState\(true\)%3B%0A%20%20const%20%5Berror%2C%20setError%5D%20%3D%20useState\(null\)%3B%0A%0A%20%20useEffect\(\(\)%20%3D%3E%20%7B%0A%20%20%20%20const%20fetchProduct%20%3D%20async%20\(\)%20%3D%3E%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20const%20response%20%3D%20await%20fetch\(%60%2Fapi%2Fproduct%2F%24%7BproductId%7D%60\)%3B%0A%20%20%20%20%20%20%20%20if%20\(!response.ok\)%20%7B%0A%20%20%20%20%20%20%20%20%20%20throw%20new%20Error\('Product%20not%20found'\)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20data%20%3D%20await%20response.json\(\)%3B%0A%20%20%20%20%20%20%20%20setProduct\(data\)%3B%0A%20%20%20%20%20%20%20%20setLoading\(false\)%3B%0A%20%20%20%20%20%20%7D%20catch%20\(err\)%20%7B%0A%20%20%20%20%20%20%20%20setError\(err.message\)%3B%0A%20%20%20%20%20%20%20%20setLoading\(false\)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20fetchProduct\(\)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%2C%20%5BproductId%5D\)%3B%20%2F%2F%20Add%20productId%20to%20dependency%20array%0A%0A%20%20if%20\(loading\)%20return%20%3Cdiv%3ELoading...%3C%2Fdiv%3E%3B%0A%20%20if%20\(error\)%20return%20%3Cdiv%3EError%3A%20%7Berror%7D%3C%2Fdiv%3E%3B%0A%0A%20%20return%20\(%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%7Bproduct%20%26%26%20\(%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch2%3E%7Bproduct.name%7D%3C%2Fh2%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cp%3E%7Bproduct.description%7D%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cp%3EPrice%3A%20%24%7Bproduct.price%7D%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20\)%7D%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20\)%3B%0A%7D%3B%0A%0AProductDetails.propTypes%20%3D%20%7B%0A%20%20productId%3A%20PropTypes.string%0A%7D%3B%0A%0Aexport%20default%20ProductDetails%3B%0A%0AUsing%20Playwright%2C%20generate%20an%20e2e%20test%20to%20ensure%20the%20product%20displays%20correctly.)

Using Playwright, generate an e2e test to ensure the product displays correctly.

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ productId = '1' }) => {
  const \[product, setProduct\] = useState(null);
  const \[loading, setLoading\] = useState(true);
  const \[error, setError\] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(\`/api/product/${productId}\`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
    return;
  }, \[productId\]); // Add productId to dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.string
};

export default ProductDetails;

Using Playwright, generate an e2e test to ensure the product displays correctly.

```copilot
Using Playwright, generate an e2e test to ensure the product displays correctly.
```

If you have an existing test you wish Copilot to use as a model, you can use `#file: path/to/test-file.js` to provide the path to the file, and include this information in the prompt.

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot will respond with an end-to-end test that you can use for your application.

```typescript
import { test, expect } from '@playwright/test';

test.describe('ProductDetails Component', () => {
  test.beforeEach(async ({ page }) => {
    // Set up API mocking
    await page.route('/api/product/1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          name: 'Test Product',
          description: 'This is a test product',
          price: 99.99
        })
      });
    });

    // Mock error response for product ID 999
    await page.route('/api/product/999', async (route) => {
      await route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Product not found' })
      });
    });
  });

  test('displays loading state initially', async ({ page }) => {
    await page.goto('/product/1');
    const loadingElement = page.locator('text=Loading...');
    await expect(loadingElement).toBeVisible();
  });

  test('displays product details correctly', async ({ page }) => {
    await page.goto('/product/1');

    // Wait for loading to disappear
    await expect(page.getByText('Loading...')).toBeHidden();

    // Check all product details
    await expect(page.locator('h2')).toHaveText('Test Product');
    await expect(page.locator('text=This is a test product')).toBeVisible();
    await expect(page.locator('text=Price: $99.99')).toBeVisible();
  });

  test('displays error message when product not found', async ({ page }) => {
    await page.goto('/product/999');

    // Wait for loading to disappear
    await expect(page.getByText('Loading...')).toBeHidden();

    // Check error message
    await expect(page.locator('text=Error: Product not found')).toBeVisible();
  });
});
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)