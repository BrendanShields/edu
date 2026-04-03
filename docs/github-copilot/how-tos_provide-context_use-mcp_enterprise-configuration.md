# Configuring the GitHub MCP Server for GitHub Enterprise

Learn how to configure the GitHub Model Context Protocol (MCP) server to work with GitHub Enterprise Server or GitHub Enterprise Cloud with data residency.

## Tool navigation

Copy as Markdown

## In this article

The GitHub MCP server can be configured to work with GitHub Enterprise Server and GitHub Enterprise Cloud with data residency. The configuration steps differ depending on whether you are using the remote or local MCP server.

## [About enterprise MCP server configuration](#about-enterprise-mcp-server-configuration)

The GitHub MCP server supports two enterprise deployment types:

-   **[GitHub Enterprise Cloud with data residency](#configuring-the-remote-mcp-server-for-github-enterprise-cloud-with-data-residency)**: Supports both remote and local MCP server configurations
-   **[GitHub Enterprise Server](#configuring-the-local-mcp-server-for-enterprise)**: Supports **only local MCP server configuration**

Important

GitHub Enterprise Server does **not** support remote MCP server hosting. If you are using GitHub Enterprise Server, you **must** use the local MCP server configuration described in [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise). Skip the remote MCP server configuration section below.

## [Prerequisites](#prerequisites)

-   A GitHub Enterprise Server instance or GitHub Enterprise Cloud account with data residency
-   The GitHub MCP server configured in your editor. See [Setting up the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).

## [Configuring the remote MCP server for GitHub Enterprise Cloud with data residency](#configuring-the-remote-mcp-server-for-github-enterprise-cloud-with-data-residency)

Note

This section applies **only** to GitHub Enterprise Cloud with data residency. If you are using GitHub Enterprise Server, skip to [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise).

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1.  In Visual Studio Code, open the command palette by pressing Ctrl+Shift+P (Windows/Linux) / Command+Shift+P (Mac).
    
2.  Type and select **MCP: Open User Configuration**.
    
3.  In the settings file, locate the `servers` section. If you have already configured the GitHub MCP server, you will see a `github` entry.
    
4.  Update the `url` field to point to your GitHub Enterprise Cloud instance.
    
    **Option A: With PAT authentication**
    
    ```json
    {
      "servers": {
        "github": {
          "type": "http",
          "url": "https://copilot-api.SUBDOMAIN.ghe.com/mcp",
          "headers": {
            "Authorization": "Bearer ${input:github_mcp_pat}"
          }
        }
      },
      "inputs": [
        {
          "type": "promptString",
          "id": "github_mcp_pat",
          "description": "GitHub PAT",
          "password": true
        }
      ]
    }
    ```
    
    **Option B: With OAuth authentication**
    
    ```json
    {
      "servers": {
        "github": {
          "type": "http",
          "url": "https://copilot-api.SUBDOMAIN.ghe.com/mcp"
        }
      }
    }
    ```
    
    Replace `SUBDOMAIN.ghe.com` with your GHE.com subdomain.
    
5.  Save the file.
    
6.  When using OAuth with GitHub Enterprise Cloud with data residency, configure your VS Code settings to point to your GitHub Enterprise Cloud instance. Add the following to your [VS Code user settings](https://code.visualstudio.com/docs/configure/settings#_user-settings):
    
    ```json
    {
      "github-enterprise.uri": "https://copilot-api.SUBDOMAIN.ghe.com/mcp"
    }
    ```
    
7.  Restart Visual Studio Code or reload the window for the changes to take effect.
    

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1.  In the Visual Studio menu bar, click **View**, then click **GitHub Copilot Chat**.
2.  At the bottom of the chat panel, select **Agent** from the mode dropdown.
3.  In the Copilot Chat window, click the tools icon, then click the plus icon in the tool picker window.
4.  In the "Configure MCP server" pop-up window, fill out the fields.
    1.  For "Server ID", type `github`.
    2.  For "Type", select "HTTP/SSE" from the dropdown.
    3.  For "URL", type `https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp`, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    4.  Add a new header under "Headers", called "Authorization" and set to the value `Bearer YOUR_GITHUB_PAT`, replacing "YOUR\_GITHUB\_PAT" with your personal access token.
5.  Click **Save**.

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1.  In the lower right corner, click .
    
2.  From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
    
3.  Click **Add MCP Tools**.
    
4.  In the `mcp.json` file, add the following configuration, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:
    
    ```json
    {
      "servers": {
        "github": {
          "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
          "requestInit": {
            "headers": {
              "Authorization": "Bearer YOUR_GITHUB_PAT"
            }
          }
        }
      }
    }
    ```
    

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1.  Open the GitHub Copilot for Xcode extension and go to "Settings".
    
    -   Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
2.  Select the **MCP** tab, then click **Edit Config**.
    
3.  Add the following configuration, replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:
    
    ```json
    {
      "servers": {
        "github": {
          "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
          "requestInit": {
            "headers": {
              "Authorization": "Bearer YOUR_GITHUB_PAT"
            }
          }
        }
      }
    }
    ```
    

GitHub Enterprise Cloud with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your GitHub Enterprise Cloud instance.

For example, if your GitHub Enterprise Cloud instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1.  Click the Copilot icon () in the status bar at the bottom of Eclipse.
    
2.  From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
    
    -   Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.
3.  Add the following configuration under "Server Configurations", replacing `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain and `YOUR_GITHUB_PAT` with your personal access token:
    
    ```json
    {
      "servers": {
        "github": {
          "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
          "requestInit": {
            "headers": {
              "Authorization": "Bearer YOUR_GITHUB_PAT"
            }
          }
        }
      }
    }
    ```
    
4.  Click **Apply**.
    

## [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise)

Both GitHub Enterprise Server and GitHub Enterprise Cloud with data residency support the local MCP server. You can configure the local server using either the `GITHUB_HOST` environment variable or the `--gh-host` command-line flag.

### [Important considerations](#important-considerations)

-   **For GitHub Enterprise Server**: Prefix the hostname with the `https://` URI scheme, as it otherwise defaults to `http://`, which GitHub Enterprise Server does not support.
-   **For GitHub Enterprise Cloud with data residency**: Use `https://YOURSUBDOMAIN.ghe.com` as the hostname.

### [Configuration with Docker](#configuration-with-docker)

To configure the local MCP server with Docker in Visual Studio Code:

1.  In Visual Studio Code, open the command palette by pressing Ctrl+Shift+P (Windows/Linux) / Command+Shift+P (Mac).
    
2.  Type and select **MCP: Open User Configuration**.
    
3.  In the settings file, locate the `servers` section or create it if it doesn't exist.
    
4.  Add the following configuration:
    
    **For GitHub Enterprise Server:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
          }
        }
      }
    }
    ```
    
    Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).
    
    **For GitHub Enterprise Cloud with data residency:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
          }
        }
      }
    }
    ```
    
    Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    
5.  Save the file.
    
6.  Restart Visual Studio Code or reload the window for the changes to take effect.
    

To configure the local MCP server with Docker in Visual Studio, you need to manually edit the `mcp.json` file.

1.  Open the `mcp.json` file in Visual Studio. The file is typically located in your user profile directory.
    
2.  Add the following configuration:
    
    **For GitHub Enterprise Server:**
    
    ```json
    {
      "mcp": {
        "inputs": [
          {
            "type": "promptString",
            "id": "github_token",
            "description": "GitHub PAT",
            "password": true
          }
        ],
        "servers": {
          "github": {
            "command": "docker",
            "args": [
              "run",
              "-i",
              "--rm",
              "-e",
              "GITHUB_PERSONAL_ACCESS_TOKEN",
              "-e",
              "GITHUB_HOST",
              "ghcr.io/github/github-mcp-server"
            ],
            "env": {
              "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
              "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
            }
          }
        }
      }
    }
    ```
    
    Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).
    
    **For GitHub Enterprise Cloud with data residency:**
    
    ```json
    {
      "mcp": {
        "inputs": [
          {
            "type": "promptString",
            "id": "github_token",
            "description": "GitHub PAT",
            "password": true
          }
        ],
        "servers": {
          "github": {
            "command": "docker",
            "args": [
              "run",
              "-i",
              "--rm",
              "-e",
              "GITHUB_PERSONAL_ACCESS_TOKEN",
              "-e",
              "GITHUB_HOST",
              "ghcr.io/github/github-mcp-server"
            ],
            "env": {
              "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
              "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
            }
          }
        }
      }
    }
    ```
    
    Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    
3.  Save the file.
    

To configure the local MCP server with Docker in JetBrains IDEs:

1.  In the lower right corner, click .
    
2.  From the menu, select "Open Chat", make sure you are in Agent mode, then click the tools icon (called "Configure your MCP server") at the bottom of the chat window.
    
3.  Click **Add MCP Tools**.
    
4.  Add the following configuration:
    
    **For GitHub Enterprise Server:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
          }
        }
      }
    }
    ```
    
    Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).
    
    **For GitHub Enterprise Cloud with data residency:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
          }
        }
      }
    }
    ```
    
    Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    

To configure the local MCP server with Docker in Xcode:

1.  Open the GitHub Copilot for Xcode extension and go to "Settings".
    
    -   Alternatively, in an active Xcode workspace, you can find the settings by clicking **Editor** in the menu bar, selecting **GitHub Copilot**, then clicking **Open GitHub Copilot for Xcode Settings**.
2.  Select the **MCP** tab, then click **Edit Config**.
    
3.  Add the following configuration:
    
    **For GitHub Enterprise Server:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
          }
        }
      }
    }
    ```
    
    Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).
    
    **For GitHub Enterprise Cloud with data residency:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
          }
        }
      }
    }
    ```
    
    Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    

To configure the local MCP server with Docker in Eclipse:

1.  Click the Copilot icon () in the status bar at the bottom of Eclipse.
    
2.  From the menu, select **Open Chat** and, in the chat window, click the "Configure Tools..." icon.
    
    -   Alternatively, you can select **Edit preferences**, then in the left pane, expand GitHub Copilot and click **MCP**.
3.  Add the following configuration under "Server Configurations":
    
    **For GitHub Enterprise Server:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
          }
        }
      }
    }
    ```
    
    Replace `YOUR_GHES_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`).
    
    **For GitHub Enterprise Cloud with data residency:**
    
    ```json
    {
      "inputs": [
        {
          "type": "promptString",
          "id": "github_token",
          "description": "GitHub PAT",
          "password": true
        }
      ],
      "servers": {
        "github": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e",
            "GITHUB_PERSONAL_ACCESS_TOKEN",
            "-e",
            "GITHUB_HOST",
            "ghcr.io/github/github-mcp-server"
          ],
          "env": {
            "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
            "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
          }
        }
      }
    }
    ```
    
    Replace `YOURSUBDOMAIN` with your GitHub Enterprise Cloud subdomain.
    
4.  Click **Apply**.
    

### [Configuration when building from source](#configuration-when-building-from-source)

If you are building the MCP server from source instead of using Docker, you can set the `GITHUB_HOST` environment variable or use the `--gh-host` command-line flag:

**Using environment variable:**

```bash
export GITHUB_HOST="https://YOUR_GHES_OR_GHEC_HOSTNAME"
./github-mcp-server stdio
```

**Using command-line flag:**

```bash
./github-mcp-server --gh-host \
  "https://YOUR_GHES_OR_GHEC_HOSTNAME" stdio
```

Replace `YOUR_GHES_OR_GHEC_HOSTNAME` with your GitHub Enterprise Server hostname (for example, `https://github.example.com`) or GitHub Enterprise Cloud hostname (for example, `https://octocorp.ghe.com`).

## [Next steps](#next-steps)

-   To learn how to use the GitHub MCP server, see [Using the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).
-   To learn how to configure toolsets for the GitHub MCP server, see [Configuring toolsets for the GitHub MCP Server](/en/copilot/how-tos/provide-context/use-mcp/configure-toolsets).