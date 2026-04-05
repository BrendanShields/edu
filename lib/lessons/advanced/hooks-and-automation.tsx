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
            <strong>The agent decides what to do. Hooks guarantee what
            always happens.</strong> Look at the title card on the
            canvas &mdash; &quot;deterministic automation at every
            step.&quot;
          </p>
          <p>
            Notice the word &quot;deterministic.&quot; Hooks don&apos;t
            ask the AI to remember your formatting rules or security
            policies. They run your code, every time, unconditionally.
          </p>
          <p>
            That distinction &mdash; AI judgment vs. mechanical guarantee
            &mdash; is the foundation of everything that follows.
            The lifecycle on the next panel shows you exactly where
            hooks fire.
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
            <strong>Four events give you four injection points into
            every agent action.</strong> Expand the PreToolUse panel
            on the canvas &mdash; that one fires before the agent
            touches anything.
          </p>
          <p>
            Notice how PreToolUse and PostToolUse bracket every tool
            call. Exit code 2 on PreToolUse blocks the action entirely;
            PostToolUse is where you run formatters and linters on
            whatever just changed.
          </p>
          <p>
            Stop and Notification cover the moments between tool calls.
            Stop fires when the agent finishes responding &mdash;
            perfect for commits or summaries. Notification fires when
            it needs you. Next, you&apos;ll see the most common hook
            in practice.
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
            <strong>Three lines of JSON, and every file the agent
            edits gets auto-formatted.</strong> Read the config on
            the canvas &mdash; the matcher targets Edit and Write,
            the command runs{' '}
            <code>npx prettier --write $FILE_PATH</code>.
          </p>
          <p>
            Try changing <code>prettier</code> to your own formatter
            mentally. The <code>$FILE_PATH</code> variable resolves
            to whichever file the agent just touched, so your linter
            or formatter always runs on exactly the right target.
          </p>
          <p>
            This is why hooks beat prompting: the agent can&apos;t
            forget, skip, or reinterpret your formatting rules. The
            next section shows the same pattern used defensively
            &mdash; blocking actions instead of running them.
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
            <strong>What if the agent tries to edit your{' '}
            <code>.env</code> file?</strong> Look at the blocking
            hook on the canvas. The grep pattern
            matches <code>.env</code>, <code>package-lock.json</code>,
            and anything inside <code>.git/</code>.
          </p>
          <p>
            Notice the exit codes: <code>exit 2</code> means
            &quot;block this action,&quot; <code>exit 0</code> means
            &quot;allow it.&quot; The agent receives a blocked
            notification and adjusts its plan automatically.
          </p>
          <p>
            This is stronger than a CLAUDE.md instruction. A prompt
            rule can be misinterpreted; an exit code 2 physically
            prevents the tool call from executing. When you need
            the agent to run without a human at all, that guarantee
            matters even more.
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
            <strong>What happens when no human is watching?</strong>{' '}
            Read the command on the canvas: <code>claude -p
            &quot;Run tests and fix failures&quot;
            --allowedTools &quot;Bash,Read,Edit&quot;</code>. That
            runs the agent in your CI pipeline with no interactive
            session.
          </p>
          <p>
            Notice the <code>--allowedTools</code> flag &mdash; it
            restricts which tools the agent can use. Combined with
            your PreToolUse blocking hooks, you get a tightly scoped
            agent that can&apos;t wander into dangerous territory.
          </p>
          <p>
            Every hook you wrote in this lesson fires identically in
            headless mode. Formatting, blocking, notifications &mdash;
            they all work whether a human is present or not. That is
            how you build reliable AI automation.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
