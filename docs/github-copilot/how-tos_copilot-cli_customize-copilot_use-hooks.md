# Using hooks with GitHub Copilot CLI

Extend GitHub Copilot agent behavior with custom shell commands at key points during agent execution.

Copy as Markdown

## In this article

Hooks allow you to extend and customize the behavior of GitHub Copilot agents by executing custom shell commands at key points during agent execution. For a conceptual overview of hooks—including details of the available hook triggers—see [About hooks](/en/copilot/concepts/agents/coding-agent/about-hooks).

## [Creating a hook in a repository on GitHub](#creating-a-hook-in-a-repository-on-github)

1.  Create a new `hooks.json` file with the name of your choice in the `.github/hooks/` folder of your repository. The hooks configuration file **must be present** on your repository's default branch to be used by Copilot coding agent. For GitHub Copilot CLI, hooks are loaded from your current working directory.
    
2.  In your text editor, copy and paste the following hook template. Remove any hooks you don't plan on using from the `hooks` array.
    
    ```json
    {
      "version": 1,
      "hooks": {
        "sessionStart": [...],
        "sessionEnd": [...],
        "userPromptSubmitted": [...],
        "preToolUse": [...],
        "postToolUse": [...],
        "errorOccurred": [...]
      }
    }
    ```
    
3.  Configure your hook syntax under the `bash` or `powershell` keys, or directly reference script files you have created.
    
    -   This example runs a script that outputs the start date of the session to a log file using the `sessionStart` hook:
        
        ```json
        "sessionStart": [
          {
            "type": "command",
            "bash": "echo \"Session started: $(date)\" >> logs/session.log",
            "powershell": "Add-Content -Path logs/session.log -Value \"Session started: $(Get-Date)\"",
            "cwd": ".",
            "timeoutSec": 10
          }
        ],
        ```
        
    -   This example calls out to an external `log-prompt` script:
        
        ```json
        "userPromptSubmitted": [
          {
            "type": "command",
            "bash": "./scripts/log-prompt.sh",
            "powershell": "./scripts/log-prompt.ps1",
            "cwd": "scripts",
            "env": {
              "LOG_LEVEL": "INFO"
            }
          }
        ],
        ```
        
        For a full reference on the input JSON from agent sessions along with sample scripts, see [Hooks configuration](/en/copilot/reference/hooks-configuration).
        
4.  Commit the file to the repository and merge it into the default branch. Your hooks will now run during agent sessions.
    

## [Troubleshooting](#troubleshooting)

If you run into problems using hooks, use the following table to troubleshoot.

Issue

Action

Hooks are not executing

-   Verify the JSON file is in the `.github/hooks/` directory.
-   Check for valid JSON syntax (for example, `jq . hooks.json`).
-   Ensure `version: 1` is specified in your `hooks.json` file.
-   Verify the script you are calling from your hook is executable (`chmod +x script.sh`)
-   Check that the script has a proper shebang (for example, `#!/bin/bash`)

Hooks are timing out

-   The default timeout is 30 seconds. Increase `timeoutSec` in the configuration if needed.
-   Optimize script performance by avoiding unnecessary operations.

Invalid JSON output

-   Ensure the output is on a single line.
-   On Unix, use `jq -c` to compact and validate the JSON output.
-   On Windows, use the `ConvertTo-Json -Compress` command in PowerShell to do the same.

## [Debugging](#debugging)

You can debug hooks using the following methods:

-   **Enable verbose logging** in the script to inspect the input data and trace script execution.
    
    ```shell
    #!/bin/bash
    set -x  # Enable bash debug mode
    INPUT=$(cat)
    echo "DEBUG: Received input" >&2
    echo "$INPUT" >&2
    # ... rest of script
    ```
    
-   **Test hooks locally** by piping test input into your hook to validate its behavior:
    
    ```shell
    # Create test input
    echo '{"timestamp":1704614400000,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}' | ./my-hook.sh
    
    # Check exit code
    echo $?
    
    # Validate output is valid JSON
    ./my-hook.sh | jq .
    ```
    

## [Further reading](#further-reading)

-   [Hooks configuration](/en/copilot/reference/hooks-configuration)
-   [About GitHub Copilot coding agent](/en/copilot/concepts/agents/coding-agent/about-coding-agent)
-   [About GitHub Copilot CLI](/en/copilot/concepts/agents/about-copilot-cli)
-   [Customizing the development environment for GitHub Copilot coding agent](/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment)