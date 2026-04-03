Syncing documentation with code changes - GitHub Docs

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

# Syncing documentation with code changes

Copilot Chat can help with keeping code documentation up-to-date.

Copy as Markdown

## In this article

It can be difficult to keep documentation up to date with changes to code. However, good documentation is essential for maintaining codebases and ensuring that developers can work effectively with the code. Copilot Chat can assist in updating existing code documentation.

## [Example scenario](#example-scenario)

Imagine a scenario where you have a TypeScript function that retrieves products by category name, but the documentation is out of date.

```typescript
/**
 * Retrieves all products belonging to a specific category.
 *
 * @param categoryId - The unique identifier of the product category
 * @returns Promise that resolves to an array of Product objects
 *
 * @example
 * const products = await getByCategoryName(5);
 * // Returns: [{id: 1, name: "Product 1", categoryId: 5}, ...]
 *
 * @throws {PrismaClientKnownRequestError} If database query fails
 * @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 */
async getByCategoryName(categoryId: number, page = 1, pageSize = 10): Promise<Products[]> {
  return await prisma.products.findMany({
    where: { categoryId },
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      reviews: {
        orderBy: { date: 'desc' },
        take: 5,
      },
    },
  });
}
```

## [Example prompt](#example-prompt)

You can ask Copilot Chat to update the documentation according to the current code.

Copilot prompt[](https://github.com/copilot?prompt=%2F**%0A%20*%20Retrieves%20all%20products%20belonging%20to%20a%20specific%20category.%0A%20*%0A%20*%20%40param%20categoryId%20-%20The%20unique%20identifier%20of%20the%20product%20category%0A%20*%20%40returns%20Promise%20that%20resolves%20to%20an%20array%20of%20Product%20objects%0A%20*%0A%20*%20%40example%0A%20*%20const%20products%20%3D%20await%20getByCategoryName\(5\)%3B%0A%20*%20%2F%2F%20Returns%3A%20%5B%7Bid%3A%201%2C%20name%3A%20%22Product%201%22%2C%20categoryId%3A%205%7D%2C%20...%5D%0A%20*%0A%20*%20%40throws%20%7BPrismaClientKnownRequestError%7D%20If%20database%20query%20fails%0A%20*%20%40see%20%7B%40link%20https%3A%2F%2Fwww.prisma.io%2Fdocs%2Freference%2Fapi-reference%2Fprisma-client-reference%23findmany%7D%0A%20*%2F%0Aasync%20getByCategoryName\(categoryId%3A%20number%2C%20page%20%3D%201%2C%20pageSize%20%3D%2010\)%3A%20Promise%3CProducts%5B%5D%3E%20%7B%0A%20%20return%20await%20prisma.products.findMany\(%7B%0A%20%20%20%20where%3A%20%7B%20categoryId%20%7D%2C%0A%20%20%20%20skip%3A%20\(page%20-%201\)%20*%20pageSize%2C%0A%20%20%20%20take%3A%20pageSize%2C%0A%20%20%20%20include%3A%20%7B%0A%20%20%20%20%20%20reviews%3A%20%7B%0A%20%20%20%20%20%20%20%20orderBy%3A%20%7B%20date%3A%20'desc'%20%7D%2C%0A%20%20%20%20%20%20%20%20take%3A%205%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D\)%3B%0A%7D%0A%0AUpdate%20the%20existing%20documentation%20for%20the%20getByCategoryName%20function%20to%20reflect%20the%20current%20implementation.)

Update the existing documentation for the getByCategoryName function to reflect the current implementation.

/\*\*
 \* Retrieves all products belonging to a specific category.
 \*
 \* @param categoryId - The unique identifier of the product category
 \* @returns Promise that resolves to an array of Product objects
 \*
 \* @example
 \* const products = await getByCategoryName(5);
 \* // Returns: \[{id: 1, name: "Product 1", categoryId: 5}, ...\]
 \*
 \* @throws {PrismaClientKnownRequestError} If database query fails
 \* @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 \*/
async getByCategoryName(categoryId: number, page = 1, pageSize = 10): Promise<Products\[\]> {
  return await prisma.products.findMany({
    where: { categoryId },
    skip: (page - 1) \* pageSize,
    take: pageSize,
    include: {
      reviews: {
        orderBy: { date: 'desc' },
        take: 5,
      },
    },
  });
}

Update the existing documentation for the getByCategoryName function to reflect the current implementation.

```copilot
Update the existing documentation for the getByCategoryName function to reflect the current implementation.
```

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot explains it will create the updated documentation for the `getByCategoryName` function. It then provides the updated documentation, which now includes the `page` and `pageSize` parameters, as well as the `PrismaClientKnownRequestError` error that can be thrown.

For example:

```typescript
/**
 * Retrieves all products belonging to a specific category with pagination and recent reviews.
 *
 * @param categoryId - The unique identifier of the product category
 * @param page - The page number for pagination (default: 1)
 * @param pageSize - Number of products per page (default: 10)
 * @returns Promise that resolves to an array of Product objects with their 5 most recent reviews
 *
 * @example
 * const products = await getByCategoryName(5, 2, 20);
 * // Returns: [{id: 1, name: "Product 1", categoryId: 5, reviews: [...5 recent reviews]}, ...]
 *
 * @throws {PrismaClientKnownRequestError} If database query fails
 * @see {@link https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany}
 */
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)