import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ComparisonTable } from '@/components/visuals/lesson/ComparisonTable';
import { CodeAlong } from '@/components/visuals/CodeAlong';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'copilot-cheatsheet',
  module: 'reference',
  title: 'GitHub Copilot Cheatsheet',
  visuals: {
    quickStart: (
      <CodeAlong
        title="Sixty-second sanity check"
        time="~60 seconds"
        needs="VS Code, a GitHub account with Copilot access"
        steps={[
          { text: 'Install the GitHub Copilot extension from the VS Code marketplace.' },
          { text: 'Sign in via the GitHub icon in the activity bar — confirms your subscription.' },
          { text: 'Open any TypeScript file and start typing a function signature.', code: 'function calculateTax(' },
          { text: 'Watch for the ghosted gray text — that\u2019s an inline suggestion. Press Tab to accept.' },
          { text: 'Open the Chat panel (⌃⌘I on macOS) and ask a question about your project.', code: '@workspace what does this project do?' },
        ]}
        checkpoint="You see ghosted suggestions while typing AND get a project-specific answer in the Chat panel that mentions actual files from your workspace."
        recovery="No suggestions appearing: check the Copilot status icon at the bottom-right of VS Code, sign in if needed. Generic Chat answer: prefix with @workspace so Copilot indexes your project first."
      />
    ),
    inlineShortcuts: (
      <CardGrid
        title="Inline Suggestion Shortcuts"
        columns={2}
        cards={[
          { icon: '⇥', label: 'Tab', desc: 'Accept suggestion' },
          { icon: '⎋', label: 'Esc', desc: 'Dismiss' },
          { icon: '→', label: 'Alt+]', desc: 'Next suggestion' },
          { icon: '←', label: 'Alt+[', desc: 'Previous suggestion' },
          { icon: '⏩', label: 'Cmd+→', desc: 'Accept word' },
          { icon: '📋', label: 'Alt+Enter', desc: 'See all suggestions' },
          { icon: '📄', label: 'Ctrl+Enter', desc: 'Open Completions Panel' },
          { icon: '⇥⇥', label: 'Tab+Tab', desc: 'Accept line' },
        ]}
      />
    ),
    chatCommands: (
      <CardGrid
        title="Chat Commands & Participants"
        columns={2}
        cards={[
          { icon: '💡', label: '/explain', desc: 'Explain code' },
          { icon: '🔧', label: '/fix', desc: 'Fix problems' },
          { icon: '🧪', label: '/tests', desc: 'Generate tests' },
          { icon: '✨', label: '/new', desc: 'New scaffold' },
          { icon: '📁', label: '@workspace', desc: 'Full project context' },
          { icon: '🖥️', label: '@terminal', desc: 'Terminal context' },
          { icon: '📄', label: '#file', desc: 'Reference specific file' },
          { icon: '✂️', label: '#selection', desc: 'Current selection' },
        ]}
      />
    ),
    copilotModes: (
      <ComparisonTable
        title="Copilot Modes"
        columns={['You Pick Files', 'Runs Commands', 'Creates PRs', 'Works Async']}
        rows={[
          { label: 'Edit Mode', values: ['✓', '✗', '✗', '✗'] },
          { label: 'Agent Mode', values: ['✗', '✓', '✗', '✗'] },
          { label: 'Coding Agent', values: ['✗', '✓', '✓', '✓'] },
        ]}
      />
    ),
    customInstructions: (
      <CodeExample
        title=".github/copilot-instructions.md"
        language="markdown"
        code={`# Project
Next.js 14 app with TypeScript

# Style
- Use functional components
- Prefer named exports
- Test with vitest

# Constraints
- No default exports in components/
- Keep bundle size under 200KB
- All API routes need auth middleware`}
      />
    ),
    pricingOverview: (
      <ComparisonTable
        title="Plans & Pricing"
        columns={['Completions', 'Chat', 'Agent Mode', 'Coding Agent']}
        rows={[
          { label: 'Free', values: ['~', '~', '✗', '✗'] },
          { label: 'Pro ($10/mo)', values: ['✓', '✓', '✓', '~'] },
          { label: 'Pro+ ($39/mo)', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Business ($19/seat)', values: ['✓', '✓', '✓', '✓'] },
          { label: 'Enterprise ($39/seat)', values: ['✓', '✓', '✓', '✓'] },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'quickstart',
      visual: 'quickStart',
      content: (
        <>
          <h1>GitHub Copilot Cheatsheet</h1>
          <p>
            Quick reference for Copilot&apos;s inline completions, chat features, and modes.
            If you&apos;ve never used Copilot before, run the sixty-second check on the right
            before you read the rest.
          </p>
          <p>
            Copilot has three distinct modes — inline completions, Chat, and Agent. The
            keyboard shortcuts and prompts that work in one don&apos;t always work in another;
            this page covers all three.
          </p>
        </>
      ),
    },
    {
      id: 'inline',
      visual: 'inlineShortcuts',
      content: (
        <>
          <h2>Inline suggestions</h2>
          <table>
            <thead>
              <tr><th>Shortcut</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr><td><code>Tab</code></td><td>Accept the current suggestion</td></tr>
              <tr><td><code>Esc</code></td><td>Dismiss the suggestion</td></tr>
              <tr><td><code>Alt+]</code> / <code>Alt+[</code></td><td>Cycle through alternatives</td></tr>
              <tr><td><code>Cmd+→</code></td><td>Accept one word at a time</td></tr>
              <tr><td><code>Alt+Enter</code></td><td>Show all available suggestions</td></tr>
              <tr><td><code>Ctrl+Enter</code></td><td>Open the Completions Panel</td></tr>
            </tbody>
          </table>
          <p>
            <strong>Tip:</strong> Use <code>Cmd+→</code> to accept word-by-word when you want
            the start of a suggestion but not the end.
          </p>
        </>
      ),
    },
    {
      id: 'chat',
      visual: 'chatCommands',
      content: (
        <>
          <h2>Chat commands &amp; participants</h2>
          <p>
            Type these in the Copilot Chat panel. Commands start with <code>/</code>,
            participants with <code>@</code>, and variables with <code>#</code>.
          </p>
          <table>
            <thead>
              <tr><th>Command</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/explain</code></td><td>Explain selected code or a concept</td></tr>
              <tr><td><code>/fix</code></td><td>Suggest a fix for problems in selection</td></tr>
              <tr><td><code>/tests</code></td><td>Generate test cases for the selection</td></tr>
              <tr><td><code>/new</code></td><td>Scaffold a new file or project</td></tr>
              <tr><td><code>@workspace</code></td><td>Include full project as context</td></tr>
              <tr><td><code>@terminal</code></td><td>Include recent terminal output</td></tr>
              <tr><td><code>#file</code></td><td>Reference a specific file by name</td></tr>
              <tr><td><code>#selection</code></td><td>Reference the current editor selection</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'modes',
      visual: 'copilotModes',
      content: (
        <>
          <h2>Edit, Agent, and Coding Agent</h2>
          <p>
            Copilot has three distinct modes, each with different levels of autonomy:
          </p>
          <ul>
            <li>
              <strong>Edit Mode</strong> — You select the files. Copilot suggests changes
              within them. No commands, no side effects.
            </li>
            <li>
              <strong>Agent Mode</strong> — Copilot picks files, runs terminal commands,
              and iterates. You approve each step.
            </li>
            <li>
              <strong>Coding Agent</strong> — Fully async. Runs in the cloud, creates
              branches, opens PRs. Assign it an issue and walk away.
            </li>
          </ul>
          <p>
            Start with Edit Mode for precision work. Use Agent Mode for multi-file tasks.
            Reserve Coding Agent for well-defined issues with clear acceptance criteria.
          </p>
        </>
      ),
    },
    {
      id: 'instructions',
      visual: 'customInstructions',
      content: (
        <>
          <h2>Custom instructions</h2>
          <p>
            Create <code>.github/copilot-instructions.md</code> in your repo. Copilot reads it
            on every interaction — like CLAUDE.md or AGENTS.md but for Copilot.
          </p>
          <ul>
            <li>Define your tech stack so suggestions match your framework.</li>
            <li>Set style rules so generated code follows team conventions.</li>
            <li>List constraints that every suggestion should respect.</li>
          </ul>
          <p>
            You can also set user-level instructions in VS Code settings under{' '}
            <code>github.copilot.chat.codeGeneration.instructions</code>.
          </p>
        </>
      ),
    },
    {
      id: 'pricing',
      visual: 'pricingOverview',
      content: (
        <>
          <h2>Plans &amp; pricing</h2>
          <p>
            Copilot&apos;s free tier gives limited completions and chat. Paid tiers unlock
            full features:
          </p>
          <ul>
            <li><strong>Free</strong> — Limited completions and chat. Good for trying it out.</li>
            <li><strong>Pro ($10/mo)</strong> — Unlimited completions, chat, and Agent Mode.</li>
            <li><strong>Pro+ ($39/mo)</strong> — Everything in Pro plus Coding Agent and premium models.</li>
            <li><strong>Business ($19/seat)</strong> — Organization management, policy controls, audit logs.</li>
            <li><strong>Enterprise ($39/seat)</strong> — Everything in Business plus fine-tuned models and knowledge bases.</li>
          </ul>
          <p>
            For individual use, Pro is the sweet spot. Teams should start with Business.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
