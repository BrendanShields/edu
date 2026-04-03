import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { PermissionSpectrum } from '@/components/visuals/lesson/PermissionSpectrum';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'permissions-and-safety',
  module: 'foundations',
  title: 'Permissions & Safety',
  visuals: {
    intro: (
      <TitleCard
        icon="🛡️"
        title="Permissions & Safety"
        subtitle="Controlling what the AI can do without asking"
      />
    ),
    stories: (
      <BeforeAfter
        before={{
          label: 'No guardrails',
          icon: '💥',
          text: 'Wrong directory rm -rf. Silent force-push to main. Dropped a production table. One bad command, no confirmation step.',
        }}
        after={{
          label: 'With guardrails',
          icon: '🛡️',
          text: 'Checkpoints before destructive actions. Review gates on shell commands. Scoped permissions per tool. Mistakes become recoverable.',
        }}
      />
    ),
    spectrum: <PermissionSpectrum />,
    findingLevel: (
      <StepFlow
        title="Building Trust"
        steps={[
          {
            n: '1',
            label: 'Day 1 — Plan Mode',
            desc: 'Read only. Watch what the AI would do.',
          },
          {
            n: '2',
            label: 'Day 3 — Default Mode',
            desc: 'Approve each edit and command individually.',
          },
          {
            n: '3',
            label: 'Week 3 — Auto Mode',
            desc: 'Let the classifier decide. Review only flagged actions.',
          },
        ]}
      />
    ),
    tools: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: '6 Permission Modes',
            content:
              'Shift+Tab cycles through Plan, Default, Accept Edits, Auto, Full Auto, and custom profiles. Granular control per session.',
          },
          {
            tool: 'opencode',
            title: 'Allow / Ask / Deny',
            content:
              'Per-tool permission rules. Allow file reads, ask before edits, deny dangerous commands. Fine-grained and declarative.',
          },
          {
            tool: 'copilot',
            title: 'IDE + PR Gates',
            content:
              'Accept or reject inline suggestions. Chat changes require explicit apply. PR review adds a second layer before merge.',
          },
        ]}
      />
    ),
    notes: (
      <CardGrid
        title="Safety Rules"
        columns={2}
        cards={[
          { icon: '🔒', label: 'Start Restrictive', desc: 'Open up as trust builds' },
          { icon: '💾', label: 'Commit First', desc: 'Always commit before starting a task' },
          { icon: '↩️', label: 'Edits Are Reversible', desc: 'File changes can be undone' },
          { icon: '🚫', label: 'Never Bypass in Prod', desc: 'Full auto is for local dev only' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'intro',
      content: (
        <>
          <h1>Permissions &amp; Safety</h1>
          <p>
            AI coding tools can read files, write code, and run shell commands. That&apos;s what
            makes them powerful — and what makes permissions essential.
          </p>
          <p>
            Every tool gives you a way to control <strong>what the AI can do without asking</strong>.
            Learning to set these correctly is the difference between a productive assistant and a
            liability.
          </p>
        </>
      ),
    },
    {
      id: 'stories',
      visual: 'stories',
      content: (
        <>
          <h3>Why this matters</h3>
          <p>
            Real stories from early adopters: an agent ran <code>rm -rf</code> in the wrong
            directory. Another force-pushed to main without review. A third dropped a database
            table while &quot;cleaning up.&quot;
          </p>
          <p>
            None of these developers were careless. They just hadn&apos;t set up guardrails yet.
            The tool did exactly what it was allowed to do.
          </p>
          <p>
            <strong>Permissions aren&apos;t about limiting the AI.</strong> They&apos;re about
            making mistakes recoverable.
          </p>
        </>
      ),
    },
    {
      id: 'spectrum',
      visual: 'spectrum',
      content: (
        <>
          <h3>The permission spectrum</h3>
          <p>
            Every tool offers a range from fully supervised to fully autonomous. The spectrum
            isn&apos;t good-to-bad — it&apos;s a trust dial you turn up over time.
          </p>
          <p>
            <strong>Plan Mode</strong> is read-only. The AI explains what it would do but
            touches nothing. Perfect for understanding a new codebase.
          </p>
          <p>
            <strong>Default Mode</strong> asks before every change. You approve each edit and
            each command. This is where most people should start.
          </p>
          <p>
            <strong>Auto modes</strong> let the AI decide what needs approval. Risky actions
            still get flagged. This is the productivity sweet spot once you trust the tool.
          </p>
        </>
      ),
    },
    {
      id: 'findingLevel',
      visual: 'findingLevel',
      content: (
        <>
          <h3>Building trust gradually</h3>
          <p>
            Don&apos;t jump to auto mode on day one. Build trust the same way you would with a
            new team member.
          </p>
          <p>
            <strong>Day 1:</strong> Use plan mode. Watch what the AI would do. Learn its
            patterns and blind spots.
          </p>
          <p>
            <strong>Day 3:</strong> Switch to default. Approve each action but notice how rarely
            you reject. That&apos;s your trust building.
          </p>
          <p>
            <strong>Week 3:</strong> Move to auto. Let the classifier handle routine actions.
            You only review what gets flagged. Your velocity jumps.
          </p>
        </>
      ),
    },
    {
      id: 'tools',
      visual: 'tools',
      content: (
        <>
          <h3>How each tool handles it</h3>
          <p>
            <strong>Claude Code</strong> has six permission modes you cycle through with
            Shift+Tab. Each mode changes what gets auto-approved vs. what requires confirmation.
          </p>
          <p>
            <strong>OpenCode</strong> uses per-tool rules: allow, ask, or deny. You declare
            exactly which capabilities run freely and which need a gate.
          </p>
          <p>
            <strong>Copilot</strong> works through the IDE&apos;s acceptance model. Inline
            suggestions need Tab to accept. Chat changes need explicit apply. PR reviews add
            another layer.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'notes',
      content: (
        <>
          <h3>Rules to code by</h3>
          <p>
            <strong>Start restrictive, open up later.</strong> It&apos;s easy to grant more
            permission. It&apos;s hard to undo damage.
          </p>
          <p>
            <strong>Always commit before starting a task.</strong> If something goes wrong, you
            have a clean state to return to. This is your safety net.
          </p>
          <p>
            <strong>File edits are reversible.</strong> Shell commands often aren&apos;t. That&apos;s
            why every tool gates commands more strictly than file changes.
          </p>
          <p>
            <strong>Never bypass permissions in production.</strong> Full auto is for local
            development only. Period.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
