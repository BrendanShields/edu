import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ComparisonTable } from '@/components/visuals/lesson/ComparisonTable';
import { CodeAlong } from '@/components/visuals/CodeAlong';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'claude-code-cheatsheet',
  module: 'reference',
  title: 'Claude Code Cheatsheet',
  visuals: {
    quickStart: (
      <CodeAlong
        title="Sixty-second sanity check"
        time="~60 seconds"
        needs="Node 18+, a terminal, an Anthropic account"
        steps={[
          { text: 'Install Claude Code globally with npm.', code: 'npm install -g @anthropic-ai/claude-code' },
          { text: 'Open your project and start a session.', code: 'cd ~/your-project\nclaude' },
          { text: 'Sign in when the browser opens.' },
          { text: 'Ask one question about your codebase.', code: '> what does this project do?' },
        ]}
        checkpoint="Claude reads several files in your project and writes a project-specific summary — naming directories you actually have, not generic descriptions."
        recovery="Auth fails: re-run the printed login command. Generic answer: try a more specific question that names a folder, e.g. 'how does src/auth/ work?'"
      />
    ),
    slashCommands: (
      <CardGrid
        title="Essential Commands"
        columns={2}
        cards={[
          { icon: '⚡', label: '/init', desc: 'Setup project' },
          { icon: '🧹', label: '/clear', desc: 'Reset context' },
          { icon: '📦', label: '/compact', desc: 'Compress context' },
          { icon: '🔄', label: '/model', desc: 'Switch model' },
          { icon: '📝', label: '/diff', desc: 'View changes' },
          { icon: '🗺️', label: '/plan', desc: 'Enter plan mode' },
          { icon: '🧠', label: '/memory', desc: 'Edit CLAUDE.md' },
          { icon: '🛠️', label: '/skills', desc: 'List skills' },
        ]}
      />
    ),
    keyboardShortcuts: (
      <CardGrid
        title="Keyboard Shortcuts"
        columns={2}
        cards={[
          { icon: '⇥', label: 'Shift+Tab', desc: 'Cycle permission modes' },
          { icon: '⎋', label: 'Esc Esc', desc: 'Rewind checkpoint' },
          { icon: '📋', label: 'Ctrl+G', desc: 'Open plan in editor' },
          { icon: '🔀', label: 'Option+P', desc: 'Switch model' },
          { icon: '🔲', label: 'Ctrl+B', desc: 'Background task' },
          { icon: '✋', label: 'Ctrl+C', desc: 'Cancel generation' },
        ]}
      />
    ),
    permissionModes: (
      <ComparisonTable
        title="Permission Modes"
        columns={['File Reads', 'File Edits', 'Shell Cmds']}
        rows={[
          { label: 'Plan', values: ['✓', '✗', '✗'] },
          { label: 'Default', values: ['✓', '~', '~'] },
          { label: 'Accept Edits', values: ['✓', '✓', '~'] },
          { label: 'Auto', values: ['✓', '~', '~'] },
          { label: 'DontAsk', values: ['✓', '✓', '✓'] },
          { label: 'Bypass', values: ['✓', '✓', '✓'] },
        ]}
      />
    ),
    cliFlags: (
      <CodeExample
        title="Common CLI Flags"
        language="bash"
        code={`claude                    # Interactive session
claude "fix the test"     # Start with prompt
claude -c                 # Continue last session
claude -p "query"         # Print mode (non-interactive)
--model opus              # Use specific model
--permission-mode plan    # Start in plan mode
--allowedTools Bash,Read  # Restrict tools
--max-turns 10            # Limit agentic turns`}
      />
    ),
    promptPatterns: (
      <CodeExample
        title="Common Prompt Patterns"
        language="prompt"
        code={`# Explore
"How does the auth system work?"

# Fix
"Fix the failing test in auth.test.ts"

# Refactor
"Refactor UserService to use the repository pattern"

# Plan
"Plan how to add Google OAuth, don&apos;t code yet"

# Commit
"Commit these changes with a descriptive message"

# Subagent
"Use subagents to investigate the billing module"`}
      />
    ),
  },
  sections: [
    {
      id: 'quickstart',
      visual: 'quickStart',
      content: (
        <>
          <h1>Claude Code Cheatsheet</h1>
          <p>
            Quick reference for Claude Code&apos;s slash commands, shortcuts, and CLI flags.
            Keep this open while you work — and if you just installed it for the first time,
            run the sixty-second check on the right before you go any further.
          </p>
          <p>
            <strong>If anything below is unfamiliar</strong>, the rest of the workshop walks
            through it in detail. This page is the lookup, not the explanation.
          </p>
        </>
      ),
    },
    {
      id: 'commands',
      visual: 'slashCommands',
      content: (
        <>
          <h2>Slash commands</h2>
          <table>
            <thead>
              <tr><th>Command</th><th>What it does</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/init</code></td><td>Create CLAUDE.md with project context</td></tr>
              <tr><td><code>/clear</code></td><td>Wipe conversation, start fresh</td></tr>
              <tr><td><code>/compact</code></td><td>Summarize context to free tokens</td></tr>
              <tr><td><code>/model</code></td><td>Switch between Opus, Sonnet, Haiku</td></tr>
              <tr><td><code>/diff</code></td><td>Review pending file changes</td></tr>
              <tr><td><code>/plan</code></td><td>Enter plan mode (read-only)</td></tr>
              <tr><td><code>/memory</code></td><td>Open CLAUDE.md for editing</td></tr>
              <tr><td><code>/skills</code></td><td>List installed skill commands</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'shortcuts',
      visual: 'keyboardShortcuts',
      content: (
        <>
          <h2>Keyboard shortcuts</h2>
          <p>
            These work in the interactive REPL. Learn the top three and you&apos;ll
            navigate sessions twice as fast.
          </p>
          <table>
            <thead>
              <tr><th>Keys</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr><td><code>Shift+Tab</code></td><td>Cycle through permission modes</td></tr>
              <tr><td><code>Esc Esc</code></td><td>Undo to last checkpoint (rewind)</td></tr>
              <tr><td><code>Ctrl+G</code></td><td>Open the current plan in your editor</td></tr>
              <tr><td><code>Option+P</code></td><td>Quick-switch model</td></tr>
              <tr><td><code>Ctrl+B</code></td><td>Send current task to background</td></tr>
              <tr><td><code>Ctrl+C</code></td><td>Cancel the current generation</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'permissions',
      visual: 'permissionModes',
      content: (
        <>
          <h2>Permission modes</h2>
          <p>
            Six levels from read-only to fully autonomous. Press <strong>Shift+Tab</strong> to
            cycle, or start with <code>--permission-mode</code>.
          </p>
          <ul>
            <li><strong>Plan</strong> — Read-only. No edits, no commands.</li>
            <li><strong>Default</strong> — Asks before every edit and command.</li>
            <li><strong>Accept Edits</strong> — Auto-approves file changes, asks for commands.</li>
            <li><strong>Auto</strong> — AI classifier decides what needs approval.</li>
            <li><strong>DontAsk</strong> — Uses explicit allow rules. Designed for CI.</li>
            <li><strong>Bypass</strong> — No safety checks. Containers only.</li>
          </ul>
          <p>
            <strong>Tip:</strong> Start in Default, escalate to Accept Edits once you
            trust the session&apos;s direction.
          </p>
        </>
      ),
    },
    {
      id: 'flags',
      visual: 'cliFlags',
      content: (
        <>
          <h2>CLI flags</h2>
          <p>
            Claude Code&apos;s CLI accepts flags for scripting and automation.
          </p>
          <table>
            <thead>
              <tr><th>Flag</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><code>-c</code></td><td>Continue the most recent session</td></tr>
              <tr><td><code>-p &quot;query&quot;</code></td><td>Print mode — single response, no REPL</td></tr>
              <tr><td><code>--model</code></td><td>Choose model (opus, sonnet, haiku)</td></tr>
              <tr><td><code>--permission-mode</code></td><td>Set initial permission level</td></tr>
              <tr><td><code>--allowedTools</code></td><td>Restrict available tools (comma-separated)</td></tr>
              <tr><td><code>--max-turns</code></td><td>Limit agentic loop iterations</td></tr>
            </tbody>
          </table>
          <p>
            Combine <code>-p</code> with <code>--max-turns</code> for predictable CI jobs.
          </p>
        </>
      ),
    },
    {
      id: 'patterns',
      visual: 'promptPatterns',
      content: (
        <>
          <h2>Prompt patterns</h2>
          <p>
            Effective prompts follow a pattern. Here are the six you&apos;ll use most:
          </p>
          <ul>
            <li><strong>Explore</strong> — Ask how something works. Great for onboarding.</li>
            <li><strong>Fix</strong> — Point at a failing test or error. Be specific.</li>
            <li><strong>Refactor</strong> — Name the pattern you want. The agent handles the rest.</li>
            <li><strong>Plan</strong> — Add &quot;don&apos;t code yet&quot; to get a plan first.</li>
            <li><strong>Commit</strong> — Let Claude write semantic commit messages.</li>
            <li><strong>Subagent</strong> — Delegate investigation to lightweight subagents.</li>
          </ul>
          <p>
            The key insight: <em>be specific about the goal, flexible about the method.</em>
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
