Your first spark - GitHub Docs

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

# Your first spark

Learn how to build your first GitHub Spark app in minutes, without writing any code.

## Who can use this feature?

Anyone with a Copilot Pro+ or Copilot Enterprise license can use Spark.

Copy as Markdown

## In this article

Have you ever had a great idea for an app, but you didn't have the tools to build it? With the help of AI, you can now bring your app ideas to life in minutes using only natural language. In this article, we'll use GitHub Spark to build, improve, and share a word search app without writing a single line of code ourselves.

Note

GitHub Spark is in public preview with [data protection](https://gh.io/dpa) and subject to change.

## [Creating a prototype of your app](#creating-a-prototype-of-your-app)

Let's start by generating an initial, basic version of our app that we can build on later.

1.  Navigate to [https://github.com/spark](https://github.com/spark).
    
2.  Send the following prompt to generate the first iteration of your app:
    
    Copilot prompt
    
    Please create a word search game. The game should take in a set of words from the user, then create a word search puzzle containing those words, as well as a word bank listing the words. Words in the puzzle can be horizontal, vertical, diagonal, forwards, and backwards, and are "found" when the user clicks and drags their mouse across them. Once all words are found, give the user the option to create a new puzzle.
    
    ```copilot
    Please create a word search game. The game should take in a set of words from the user, then create a word search puzzle containing those words, as well as a word bank listing the words. Words in the puzzle can be horizontal, vertical, diagonal, forwards, and backwards, and are "found" when the user clicks and drags their mouse across them. Once all words are found, give the user the option to create a new puzzle.
    ```
    
3.  Watch as Spark builds your app in real time! You'll know the app is done generating when the preview appears.
    
4.  To test your app, create and solve a puzzle using the preview.
    

## [Improving your app](#improving-your-app)

Just like that, we have a working app! However, it still needs some tweaks. Let's give Spark some additional prompts to polish our project.

1.  At the left side of the page, in the **Iterate** tab, send the following prompt:
    
    Copilot prompt
    
    Please add a leaderboard and a timer to the game. The timer should start when the user generates a new puzzle, then stop when all words are found. The user should then be able to enter their name, and their name, time, and the number of words in their puzzle should be displayed on the leaderboard. The leaderboard should be sortable in ascending and descending order by each of the three categories.
    
    ```copilot
    Please add a leaderboard and a timer to the game. The timer should start when the user generates a new puzzle, then stop when all words are found. The user should then be able to enter their name, and their name, time, and the number of words in their puzzle should be displayed on the leaderboard. The leaderboard should be sortable in ascending and descending order by each of the three categories.
    ```
    
2.  Once the app is updated, create and solve another puzzle to see the new features in action.
    
3.  Get creative and make your own improvements to the app! If you're feeling stuck, pick one of the suggestions Spark provides above the prompt text box. You can also make changes using the visual editing controls in the "Theme", "Data", and "Prompts" tabs, without ever having to touch code.
    

## [Debugging your app](#debugging-your-app)

While you're building your app, you may encounter some errors. Often, Spark will identify these issues and list them in an "Errors" pop up above the prompt text box. To fix the errors, click **Fix all**.

![Screenshot of errors identified by GitHub Spark. The "Fix all" button is outlined in orange.](/assets/cb-34810/images/help/copilot/spark-fix-all-errors.png)

If you find an error that Spark itself didn't flag, write a prompt to fix it. For best results, provide a detailed description of the error, as well as the ideal fixed state. For example, if you notice that adding words over a certain number of characters causes the puzzle to render incorrectly, send the following prompt:

Copilot prompt

Please prevent users from entering words longer than the number of rows or columns in the puzzle. Additionally, add an option to change the size of a puzzle. If the user tries to enter a word that's longer than the current size of the puzzle, display an error message telling them that provided words must be less than or equal to the size of the puzzle.

```copilot
Please prevent users from entering words longer than the number of rows or columns in the puzzle. Additionally, add an option to change the size of a puzzle. If the user tries to enter a word that's longer than the current size of the puzzle, display an error message telling them that provided words must be less than or equal to the size of the puzzle.
```

## [Sharing your app](#sharing-your-app)

Now that you're happy with your app, let's publish it so you can share it with others. You can also choose to share your spark as **read-only** so that other users can view your app's content, but they cannot edit content, delete files or records, or create new items.

Note

-   If you make your spark accessible to all GitHub users, all users will be able to access and edit the data stored in your spark. Make sure to delete any private or sensitive data from your app prior to making it visible to other users. **This option is not available for managed user accounts**

1.  In the top-right corner of the page, click **Publish**.
    
2.  By default, your spark is published as private and only accessible to you. To let other GitHub users access your app, in the **Visibility** section of the publish dropdown, choose **Organization** to make your spark accessible to all members of your selected organization, or **All GitHub users**. This allows anyone with a GitHub account to access your spark.
    
    ![Screenshot of the GitHub Spark publication menu. The "All GitHub users" visibility option is outlined in orange.](/assets/cb-48680/images/help/copilot/spark-github-user-visibility.png)
    
3.  If you make your spark visible to other users (i.e. any setting besides private), a "Data Access" option appears in the publication dropdown. This gives you the option to control who has access to edit the content and data in your spark.
    
    ![Screenshot of the GitHub Spark publication menu. The "Data Access" visibility option is outlined in orange.](/assets/cb-45470/images/help/copilot/spark-data-access.png)
    
    Choose **Read-Only** to let others view your app, without allowing them to create, edit or delete content or data. Choose **Write Access** to allow users to both edit and view content and data in your spark.
    
    For example, if you've created a family calendar app and you want to showcase the app, but you don't want users to be able to create, edit or delete events in the calendar yet, choose "Read-Only".
    
4.  Click **View site** to see your deployed app, then copy and share your app's URL.
    

## [Next steps](#next-steps)

We just created a word search app, but Spark can make all kinds of web apps! Try [creating a new app](https://github.com/spark) on your own. If you need some inspiration, here are a few ideas to get you started:

-   Try building a **news aggregator app** or an **intelligent recipe generator**.
-   Build a **budget tracker** that lets you set a budget, takes in a list of expenses, and displays your total remaining budget. You can give each expense a category and date, then sort the expenses by the many different categories.

## [Further reading](#further-reading)

-   [Responsible use of GitHub Spark](/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
-   [GitHub Spark billing](/en/copilot/concepts/copilot-billing/about-billing-for-github-spark)