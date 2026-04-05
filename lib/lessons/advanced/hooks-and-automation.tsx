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
            Picture an assembly line. Parts move down the belt,
            and at specific stations, a mechanical arm inspects each
            one &mdash; no matter who&apos;s managing the floor, no
            matter the time of day.
          </p>
          <p>
            <strong>That&apos;s exactly what hooks are.</strong> The
            agent decides what to build. Hooks are the quality gates
            bolted to the line itself &mdash; your code, running every
            time, unconditionally.
          </p>
          <p>
            AI judgment picks the task. Mechanical certainty enforces
            the rules. That split is the foundation of everything in
            this lesson.
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
            Four stations on the assembly line, four moments where
            your code can intervene. PreToolUse fires before the
            agent touches anything &mdash; the first inspection gate.
          </p>
          <p>
            PreToolUse and PostToolUse bracket every single tool call.
            Exit code 2 on PreToolUse rejects the part off the belt
            entirely. PostToolUse is where you run formatters and
            linters on whatever just changed.
          </p>
          <p>
            Stop and Notification cover the gaps between tool calls.
            Stop fires when the agent finishes responding &mdash;
            ideal for auto-commits. Notification fires when it needs
            a human decision.
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
            Three lines of JSON. Every file the agent edits gets
            auto-formatted. The matcher targets Edit and Write;
            the command runs{' '}
            <code>npx prettier --write $FILE_PATH</code>.
          </p>
          <p>
            Swap <code>prettier</code> for your own formatter
            mentally. The <code>$FILE_PATH</code> variable resolves
            to whichever file the agent just touched, so the right
            tool always hits the right target.
          </p>
          <p>
            Why does this beat a prompt instruction? Because the
            agent can&apos;t forget, skip, or creatively reinterpret
            a mechanical gate. The inspection arm doesn&apos;t have
            opinions &mdash; it just runs.
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
            What if the agent tries to edit your{' '}
            <code>.env</code> file? Think of this hook as a bouncer
            at the door. It checks the ID &mdash; the file path
            &mdash; and <code>.env</code> gets turned away. So
            does <code>package-lock.json</code> and anything
            inside <code>.git/</code>.
          </p>
          <p>
            The exit codes are simple: <code>exit 2</code> means
            &quot;blocked,&quot; <code>exit 0</code> means
            &quot;you&apos;re in.&quot; The agent receives a rejection
            notice and adjusts its plan automatically.
          </p>
          <p>
            Three lines of config turned a potential disaster into a
            non-event. A CLAUDE.md instruction can be misinterpreted.
            An exit code 2 physically prevents the tool call from
            executing &mdash; no negotiation, no edge cases.
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
            The factory running the night shift. Same quality gates,
            no foreman on the floor. The command{' '}
            <code>claude -p &quot;Run tests and fix failures&quot;
            --allowedTools &quot;Bash,Read,Edit&quot;</code> runs the
            agent in your CI pipeline with zero human interaction.
          </p>
          <p>
            The <code>--allowedTools</code> flag restricts which tools
            the agent can reach. Combine that with your PreToolUse
            blocking hooks, and you get a tightly scoped agent that
            cannot wander into dangerous territory.
          </p>
          <p>
            Every hook you built in this lesson fires identically in
            headless mode. Formatting, blocking, notifications &mdash;
            the mechanical arms don&apos;t care whether a human is
            watching. That is how you build reliable AI automation.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
