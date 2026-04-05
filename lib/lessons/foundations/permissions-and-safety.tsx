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
            <strong>An AI coding tool can run any shell command on your machine. That sentence should make you pay attention.</strong>
          </p>
          <p>
            Look at the canvas — &quot;controlling what the AI can do without asking.&quot; Every tool
            gives you a permission dial. Learning to set it correctly is the difference between a
            productive assistant and an incident report.
          </p>
          <p>
            This lesson teaches you to turn that dial with confidence.
          </p>
        </>
      ),
    },
    {
      id: 'stories',
      visual: 'stories',
      content: (
        <>
          <h3>Real damage, real fast</h3>
          <p>
            Look at the left side of the canvas. <code>rm -rf</code> in the wrong directory.
            Silent <code>git push --force</code> to main. A dropped production table during
            &quot;cleanup.&quot;
          </p>
          <p>
            Now look at the right side. Same tool, same power — but with checkpoints before
            destructive actions, review gates on shell commands, scoped permissions per tool.
            Every mistake becomes recoverable.
          </p>
          <p>
            None of those developers were careless. They just hadn&apos;t configured guardrails.
            The tool did exactly what it was <em>allowed</em> to do.
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
            <strong>Click each permission level on the canvas. Watch what happens to the same command.</strong>
          </p>
          <p>
            The spectrum isn&apos;t good-to-bad — it&apos;s a trust dial. Plan Mode is read-only:
            the AI explains what it <em>would</em> do but touches nothing. Default Mode asks
            before every edit and every command. Auto modes let the AI decide what needs
            approval — risky actions still get flagged.
          </p>
          <p>
            Notice how the same <code>npm run build</code> behaves differently at each level.
            That&apos;s the control surface you&apos;re learning to operate.
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
            Would you give a new hire <code>sudo</code> access on day one? Apply the same logic here.
          </p>
          <p>
            Follow the three steps on the canvas. Day 1: Plan Mode — watch what the AI would do,
            learn its patterns and blind spots. Day 3: Default Mode — approve each action, but
            notice how rarely you reject. Week 3: Auto Mode — the classifier handles routine
            actions, you review only what gets flagged.
          </p>
          <p>
            The permission level you land on isn&apos;t permanent. Ratchet up as trust builds,
            dial back for unfamiliar codebases.
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
            <strong>Look at the three panels on the canvas. Same concept, very different controls.</strong>
          </p>
          <p>
            Claude Code: press <kbd>Shift+Tab</kbd> to cycle through six modes — Plan, Default,
            Accept Edits, Auto, Full Auto, and custom profiles. OpenCode: per-tool rules
            declared in config — allow file reads, ask before edits, deny dangerous commands.
            Copilot: IDE acceptance model — Tab for inline suggestions, explicit Apply for chat
            changes, PR review as a second gate.
          </p>
          <p>
            Different surfaces, same underlying principle: you decide the trust boundary, the tool enforces it.
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
            <strong>Look at the four safety rules on the canvas. These are non-negotiable.</strong>
          </p>
          <p>
            Start restrictive and open up — it&apos;s easy to grant permission, hard to undo
            damage. Always run <code>git commit</code> before starting a task so you have a
            clean state to return to. Remember: file edits are reversible, but shell commands
            often aren&apos;t — that&apos;s why every tool gates commands more strictly.
          </p>
          <p>
            Never bypass permissions in production. Full Auto is for local development only.
            Period. No exceptions. Not even &quot;just this once.&quot;
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
