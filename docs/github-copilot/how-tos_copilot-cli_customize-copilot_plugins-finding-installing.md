# Finding and installing plugins for GitHub Copilot CLI

Extend Copilot's functionality by installing plugins created by the community or by your team.

Copy as Markdown

## In this article

## [Introduction](#introduction)

Plugins are packages that extend the functionality of Copilot CLI. You can install a plugin from a marketplace that you have registered with the CLI, from a Git repository, or from a local path.

For more information, see [About plugins for GitHub Copilot CLI](/en/copilot/concepts/agents/copilot-cli/about-cli-plugins).

Note

You can find help on using plugins by entering `copilot plugin [SUBCOMMAND] --help` in the terminal.

## [Finding plugins](#finding-plugins)

Plugins are collected together in marketplaces. A marketplace is a registry of plugins that you can browse and install from. You can add a marketplace to your CLI configuration, which allows you to use the CLI to browse and install plugins from that marketplace—see [Adding plugin marketplaces](#adding-plugin-marketplaces). Copilot comes with two marketplaces already registered by default: `copilot-plugins` and `awesome-copilot`.

Alternatively, you can search for plugin marketplaces online and then add a plugin directly from a repository.

To use the CLI to browse the plugins in one of your registered marketplaces:

1.  **Check which marketplaces are currently registered.**
    
    In the terminal, list the available marketplaces by entering:
    
    ```shell
    copilot plugin marketplace list
    ```
    
    Alternatively, in an interactive session, enter:
    
    ```copilot
    /plugin marketplace list
    ```
    
2.  **Browse the plugins in a registered marketplace.**
    
    From the list of registered marketplaces, copy the name of the marketplace you want to browse—for example, `awesome-copilot`—then enter the following command, replacing `MARKETPLACE-NAME`:
    
    ```shell
    copilot plugin marketplace browse MARKETPLACE-NAME
    
    ```
    

## [Installing plugins](#installing-plugins)

Typically, you'll install a plugin from one of your registered marketplaces. However, you can also install a plugin directly from a Git repository, or from a local path.

For information on how to register additional marketplaces, see [Adding and removing plugin marketplaces](#adding-and-removing-plugin-marketplaces).

### [Install from a registered marketplace](#install-from-a-registered-marketplace)

```shell
copilot plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

For example, to install the `database-data-management` plugin from the `awesome-copilot` marketplace enter:

```shell
copilot plugin install database-data-management@awesome-copilot
```

Alternatively, in an interactive session, enter:

```copilot
/plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

### [Install directly from an online Git repository](#install-directly-from-an-online-git-repository)

You can install a plugin directly from a repository, rather than doing so using a registered marketplace.

To install a plugin directly from a repository **on GitHub.com**, enter:

```shell
copilot plugin install OWNER/REPO
```

To install a plugin from **any online Git repository**, enter:

```shell
copilot plugin install URL-OF-GIT-REPO
```

For example, `copilot plugin install https://gitlab.com/OWNER/REPO.git`.

Important

For these commands to work, the repository must contain a `plugin.json` file in a `.github/plugin` or `.claude-plugin` directory, or at the root of the repository.

To install a plugin directly from a repository on GitHub.com where the `plugin.json` file is located somewhere other than `.github/plugin`, `.claude-plugin`, or the repository root—for example, if you are installing a plugin directly from a marketplace repository such as [anthropics/claude-code](https://github.com/anthropics/claude-code)—enter:

```shell
copilot plugin install OWNER/REPO:PATH/TO/PLUGIN
```

Where `PATH/TO/PLUGIN` is the path from the root of the repository to a directory that contains `plugin.json`, `.github/plugin/plugin.json` or `.claude-plugin/plugin.json`.

For example, `copilot plugin install anthropics/claude-code:plugins/frontend-design`

### [Install from a local path](#install-from-a-local-path)

```shell
copilot plugin install ./PATH/TO/PLUGIN
```

## [Managing installed plugins](#managing-installed-plugins)

```bash
copilot plugin list                    # View installed plugins
copilot plugin update PLUGIN-NAME      # Update plugin to latest version
copilot plugin uninstall PLUGIN-NAME   # Remove plugin completely
```

## [Where plugins are stored](#where-plugins-are-stored)

Plugins installed from a marketplace are stored at: `~/.copilot/state/installed-plugins/MARKETPLACE/PLUGIN-NAME/`. Plugins installed directly (for example, from a local path) are stored at: `~/.copilot/state/installed-plugins/PLUGIN-NAME/`.

## [Adding plugin marketplaces](#adding-plugin-marketplaces)

To add a marketplace to the list of registered marketplaces, enter the following command in the terminal:

```shell
copilot plugin marketplace add OWNER/REPO
```

Where OWNER/REPO identifies a repository on GitHub.com that has been configured as a CLI plugin marketplace.

For example to add the `claude-code-plugins` marketplace, hosted at [https://github.com/anthropics/claude-code](https://github.com/anthropics/claude-code), enter:

```shell
copilot plugin marketplace add anthropics/claude-code
```

Alternatively, in an interactive session, enter:

```copilot
/plugin marketplace add OWNER/REPO
```

If a marketplace is located on the local file system, instead of on GitHub.com, use the path to the marketplace directory instead of OWNER/REPO. For example:

```shell
copilot plugin marketplace add /PATH/TO/MARKETPLACE-DIRECTORY
```

If a marketplace is located in a Git repository that is not hosted on GitHub.com, use the URL of the Git repository. For example:

```shell
copilot plugin marketplace add https://gitlab.com/OWNER/REPO.git
```

## [Removing plugin marketplaces](#removing-plugin-marketplaces)

To remove a marketplace from the CLI enter:

```shell
copilot plugin marketplace remove MARKETPLACE-NAME
```

Or, in an interactive session:

```copilot
/plugin marketplace remove MARKETPLACE-NAME
```

Note

-   When adding a marketplace you reference the marketplace using the OWNER/REPO of the GitHub repository that has been configured as a marketplace. When removing a marketplace, however, you reference the name of the marketplace as it appears in your list of registered marketplaces.
-   If you attempt to remove a marketplace that has plugins installed, the command will fail with an error message that lists the plugins that are currently installed from that marketplace. Add the `--force` option to the command to remove the marketplace and uninstall all plugins that were installed from that marketplace.

## [Further reading](#further-reading)

-   [Creating a plugin for GitHub Copilot CLI](/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating)
-   [Creating a plugin marketplace for GitHub Copilot CLI](/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace)