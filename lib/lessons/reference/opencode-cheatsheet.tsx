import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'opencode-cheatsheet',
  module: 'reference',
  title: 'OpenCode Cheatsheet',
  visuals: {
    tuiCommands: (
      <CardGrid
        title="TUI Commands"
        columns={2}
        cards={[
          { icon: '⚡', label: '/init', desc: 'Setup project' },
          { icon: '✨', label: '/new', desc: 'Fresh session' },
          { icon: '↩️', label: '/undo', desc: 'Revert changes' },
          { icon: '↪️', label: '/redo', desc: 'Restore changes' },
          { icon: '🔗', label: '/share', desc: 'Share session' },
          { icon: '🔌', label: '/connect', desc: 'Setup provider' },
          { icon: '❓', label: '/help', desc: 'Show help' },
          { icon: '🧹', label: '/clear', desc: 'Clear context' },
        ]}
      />
    ),
    keybinds: (
      <CardGrid
        title="Key Keybinds (Leader = Ctrl+X)"
        columns={2}
        cards={[
          { icon: '⇥', label: 'Tab', desc: 'Switch agent' },
          { icon: '@', label: '@', desc: 'Reference file' },
          { icon: '!', label: '!', desc: 'Inline shell' },
          { icon: '📦', label: 'Leader+C', desc: 'Compact' },
          { icon: '📋', label: 'Leader+L', desc: 'Session picker' },
          { icon: '🔄', label: 'Leader+M', desc: 'Switch model' },
          { icon: '🔧', label: 'F2', desc: 'Change model' },
          { icon: '📝', label: 'Leader+D', desc: 'Toggle diff' },
        ]}
      />
    ),
    configuration: (
      <CodeExample
        title="opencode.json"
        language="json"
        code={`{
  "provider": {
    "default": "anthropic",
    "anthropic": {
      "model": "claude-sonnet-4-6"
    }
  },
  "instructions": [
    "AGENTS.md",
    "docs/CONVENTIONS.md"
  ]
}`}
      />
    ),
    permissionConfig: (
      <CodeExample
        title="Permission Config"
        language="json"
        code={`{
  "permission": {
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    },
    "edit": "allow",
    "read": "allow"
  }
}`}
      />
    ),
    agentConfig: (
      <CodeExample
        title="Custom Agent"
        language="markdown"
        code={`---
name: reviewer
description: Code review specialist
model: claude-sonnet-4-6
tools:
  - read
  - grep
  - glob
---

Review code for clarity, bugs, and
performance issues.
Suggest improvements with examples.`}
      />
    ),
  },
  sections: [
    {
      id: 'commands',
      visual: 'tuiCommands',
      content: (
        <>
          <h1>OpenCode Cheatsheet</h1>
          <p>
            Quick reference for OpenCode&apos;s TUI commands, keybinds, and configuration.
            Everything you need at a glance.
          </p>
          <h3>TUI commands</h3>
          <table>
            <thead>
              <tr><th>Command</th><th>What it does</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/init</code></td><td>Initialize project with AGENTS.md</td></tr>
              <tr><td><code>/new</code></td><td>Start a fresh session, clear history</td></tr>
              <tr><td><code>/undo</code></td><td>Revert the last file change</td></tr>
              <tr><td><code>/redo</code></td><td>Restore a reverted change</td></tr>
              <tr><td><code>/share</code></td><td>Generate a shareable session link</td></tr>
              <tr><td><code>/connect</code></td><td>Configure an AI provider</td></tr>
              <tr><td><code>/help</code></td><td>Show all available commands</td></tr>
              <tr><td><code>/clear</code></td><td>Clear current context</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'keybinds',
      visual: 'keybinds',
      content: (
        <>
          <h3>Keybinds</h3>
          <p>
            OpenCode uses a <strong>Leader key</strong> pattern (Ctrl+X by default).
            Press Leader, then the action key.
          </p>
          <table>
            <thead>
              <tr><th>Keys</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr><td><code>Tab</code></td><td>Switch between agents</td></tr>
              <tr><td><code>@</code></td><td>Reference a file in your prompt</td></tr>
              <tr><td><code>!</code></td><td>Run an inline shell command</td></tr>
              <tr><td><code>Leader+C</code></td><td>Compact the conversation context</td></tr>
              <tr><td><code>Leader+L</code></td><td>Open the session picker</td></tr>
              <tr><td><code>Leader+M</code></td><td>Switch to a different model</td></tr>
              <tr><td><code>F2</code></td><td>Change model (alternative)</td></tr>
              <tr><td><code>Leader+D</code></td><td>Toggle diff view for changes</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'config',
      visual: 'configuration',
      content: (
        <>
          <h3>Configuration</h3>
          <p>
            OpenCode uses <code>opencode.json</code> at the project root. It controls the
            provider, model, and instruction files.
          </p>
          <ul>
            <li><strong>provider</strong> — Set the default provider and model. Supports 75+ providers.</li>
            <li><strong>instructions</strong> — Array of Markdown files loaded as system context (like CLAUDE.md).</li>
          </ul>
          <p>
            The instructions array is powerful: point it at your coding conventions,
            architecture docs, or team standards. They&apos;re loaded every session.
          </p>
        </>
      ),
    },
    {
      id: 'permissions',
      visual: 'permissionConfig',
      content: (
        <>
          <h3>Permissions</h3>
          <p>
            OpenCode uses pattern-based permission rules in <code>opencode.json</code>.
            Each tool type (bash, edit, read) has its own rules.
          </p>
          <ul>
            <li><strong>&quot;allow&quot;</strong> — Automatically approved, no prompt.</li>
            <li><strong>&quot;ask&quot;</strong> — Requires your confirmation each time.</li>
            <li><strong>&quot;deny&quot;</strong> — Blocked entirely, agent can&apos;t use it.</li>
          </ul>
          <p>
            Bash commands use glob patterns for fine-grained control. Allow <code>git *</code> and
            <code>npm *</code> while blocking <code>rm *</code>. The wildcard
            <code>*</code> sets the default for unmatched commands.
          </p>
        </>
      ),
    },
    {
      id: 'agents',
      visual: 'agentConfig',
      content: (
        <>
          <h3>Custom agents</h3>
          <p>
            Define specialized agents as Markdown files with YAML frontmatter.
            Each agent gets its own model, tools, and system prompt.
          </p>
          <ul>
            <li><strong>name</strong> — How you&apos;ll reference the agent (Tab to switch).</li>
            <li><strong>model</strong> — Can differ from your default model.</li>
            <li><strong>tools</strong> — Restrict to only what the agent needs.</li>
          </ul>
          <p>
            Use a <code>reviewer</code> agent with read-only tools for code review.
            Use a <code>writer</code> agent with full access for implementation.
            Switch between them with Tab.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
