import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { HookLifecycle } from '@/components/visuals/lesson/HookLifecycle';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'hooks-and-automation',
  module: 'advanced',
  title: 'Hooks & Automation',
  visuals: {
    hooksIntro: (
      <TitleCard
        icon="⚡"
        title="Hooks & Automation"
        subtitle="Deterministic automation at every step of the AI lifecycle"
      />
    ),
    hookEvents: <HookLifecycle />,
    formatHook: (
      <CodeExample
        title="Auto-Format Hook"
        language="json"
        code={`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $FILE_PATH"
          }
        ]
      }
    ]
  }
}`}
      />
    ),
    blockingHook: (
      <CodeExample
        title="Blocking Dangerous Actions"
        language="json"
        code={`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo $FILE_PATH | grep -qE '(\\.env|package-lock\\.json|\\.git/)' && exit 2 || exit 0"
          }
        ]
      }
    ]
  }
}`}
      />
    ),
    headlessMode: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Headless Mode',
            content: 'Run without a human. CI pipelines, automated migrations, scheduled maintenance. Hooks still fire.',
            command: 'claude -p "Run tests and fix failures" --allowedTools "Bash,Read,Edit"',
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'hooksIntro',
      content: (
        <>
          <h1>Hooks &amp; Automation</h1>
          <p>
            The agent makes decisions. Hooks make guarantees. Every time
            the agent edits a file, runs a command, or finishes
            responding, your hooks fire automatically.
          </p>
          <p>
            Formatting, linting, security checks, notifications &mdash;
            hooks handle the things that should happen every time,
            without relying on the agent to remember.
          </p>
        </>
      ),
    },
    {
      id: 'events',
      visual: 'hookEvents',
      content: (
        <>
          <h3>The hook lifecycle</h3>
          <p>
            Four events, four opportunities to inject deterministic
            behavior into the AI loop.
          </p>
          <p>
            <strong>PreToolUse</strong> fires before a tool runs. Exit
            code 2 blocks the action entirely &mdash; the agent never
            touches the file.
          </p>
          <p>
            <strong>PostToolUse</strong> fires after a tool completes.
            Perfect for formatting, linting, or logging what changed.
          </p>
          <p>
            <strong>Stop</strong> fires when the agent finishes its
            response. Run cleanup, commit, or generate a summary.
            {' '}<strong>Notification</strong> fires when the agent needs
            your attention &mdash; send a Slack message or play a sound.
          </p>
        </>
      ),
    },
    {
      id: 'autoFormat',
      visual: 'formatHook',
      content: (
        <>
          <h3>Auto-formatting: the essential hook</h3>
          <p>
            The agent doesn&apos;t always match your formatting
            conventions. A PostToolUse hook on Edit and Write runs
            Prettier (or your formatter) on every changed file
            automatically.
          </p>
          <p>
            This is deterministic &mdash; it runs your tool, not the
            AI&apos;s judgment. The result is always consistent with
            your project&apos;s style, every time, without asking.
          </p>
        </>
      ),
    },
    {
      id: 'blocking',
      visual: 'blockingHook',
      content: (
        <>
          <h3>Blocking dangerous actions</h3>
          <p>
            Some files should never be touched by the agent. A
            PreToolUse hook can check the file path and block edits
            to <code>.env</code>, <code>package-lock.json</code>,
            or anything in <code>.git/</code>.
          </p>
          <p>
            Exit code 2 means &quot;block this action.&quot; The agent
            gets told the action was blocked and adjusts. This is
            stronger than a CLAUDE.md rule &mdash; the agent
            literally cannot proceed.
          </p>
        </>
      ),
    },
    {
      id: 'headless',
      visual: 'headlessMode',
      content: (
        <>
          <h3>Headless mode: AI in CI</h3>
          <p>
            Headless mode runs the agent without a human in the loop.
            Pass a prompt via <code>-p</code>, restrict available
            tools with <code>--allowedTools</code>, and let it run
            in your CI pipeline.
          </p>
          <p>
            Hooks still fire in headless mode. Your formatting,
            security, and notification hooks work exactly the same
            whether a human is watching or not. This is how you build
            reliable AI automation.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
