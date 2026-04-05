import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { SkillMapping } from '@/components/visuals/lesson/SkillMapping';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'skills-and-workflows',
  module: 'advanced',
  title: 'Skills & Workflows',
  visuals: {
    repetitionProblem: (
      <BeforeAfter
        before={{
          label: 'Repeat every time',
          icon: '🔁',
          text: 'Explaining the deployment process for the 5th time this week. From scratch. Again.',
        }}
        after={{
          label: 'Skill once, invoke forever',
          icon: '⚡',
          text: 'Type /deploy and the agent follows your recipe. Every step, every time.',
        }}
      />
    ),
    skillCreation: (
      <CodeExample
        title="Creating a Skill"
        language="markdown"
        code={`---
name: fix-issue
description: Fix a GitHub issue by number
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS.

1. Read the issue with \`gh issue view $ARGUMENTS\`
2. Search the codebase for relevant files
3. Implement the fix and write tests
4. Create a commit`}
      />
    ),
    dynamicContext: (
      <CodeExample
        title="Dynamic Context Injection"
        language="markdown"
        code={`---
name: pr-summary
description: Summarize the current PR
context: fork
---

PR diff: !\`gh pr diff\`
Changed files: !\`gh pr diff --name-only\`

Summarize this pull request concisely.`}
      />
    ),
    crossToolSkills: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            content: '.claude/skills/SKILL.md files. Invoke with /skill-name. Supports $ARGUMENTS and shell injection.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            content: 'Reads .claude/skills/ for compatibility. Same SKILL.md format works across both tools.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: '.github/copilot/prompts/*.md files. Reference with #prompt-name in chat.',
          },
        ]}
      />
    ),
    mapping: <SkillMapping />,
    whenToCreate: (
      <StepFlow
        title="When to Create a Skill"
        steps={[
          { n: '1', label: 'Same instructions 3+ times', desc: 'repetition is the signal' },
          { n: '2', label: 'Multiple steps', desc: 'workflows that need ordering' },
          { n: '3', label: 'Needs live data', desc: 'shell injection pulls fresh context' },
          { n: '4', label: 'Team should share it', desc: 'commit the recipe to the repo' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'repetitionProblem',
      content: (
        <>
          <h1>Skills &amp; Workflows</h1>
          <p>
            <strong>You&apos;ve explained the deploy process five
            times this week.</strong> Look at the &quot;Before&quot;
            panel on the canvas &mdash; from scratch, every time,
            hoping the agent infers the right steps.
          </p>
          <p>
            Now look at the &quot;After&quot; panel. Type{' '}
            <code>/deploy</code> and the agent follows your recipe.
            Every step, every time, no reinterpretation. That&apos;s
            a skill: a reusable workflow written once as a markdown
            file.
          </p>
          <p>
            The next panel breaks down exactly how a skill maps rules
            to behavior.
          </p>
        </>
      ),
    },
    {
      id: 'creating',
      visual: 'mapping',
      content: (
        <>
          <h3>Anatomy of a skill</h3>
          <p>
            <strong>Watch the arrows pulse on the canvas &mdash; each
            rule on the left produces the behavior on the
            right.</strong> See how &quot;Run tests after every
            edit&quot; maps directly to the npm test output? That
            one-to-one mapping is what makes skills predictable.
          </p>
          <p>
            A skill lives in <code>.claude/skills/</code> as a
            markdown file with YAML frontmatter.{' '}
            <code>$ARGUMENTS</code> gets replaced with whatever you
            type after the slash command, so{' '}
            <code>/fix-issue 423</code> becomes &quot;Fix GitHub
            issue 423.&quot;
          </p>
          <p>
            Set <code>disable-model-invocation: true</code> in the
            frontmatter to make the skill fully deterministic &mdash;
            no AI improvisation, just your exact steps. But some
            skills need live data, which is where dynamic context
            injection comes in.
          </p>
        </>
      ),
    },
    {
      id: 'dynamic',
      visual: 'dynamicContext',
      content: (
        <>
          <h3>Dynamic context injection</h3>
          <p>
            <strong>What if your skill needs data that changes every
            time it runs?</strong> Read the skill file on the canvas.
            See the <code>!`gh pr diff`</code> syntax? That shell
            command executes at invocation time, and its output gets
            injected into the prompt before the agent sees it.
          </p>
          <p>
            Try imagining what the agent receives when you
            invoke <code>/pr-summary</code>. It gets the current PR
            diff, the list of changed files, and the instruction to
            summarize &mdash; all in one prompt, all live data.
          </p>
          <p>
            Notice <code>context: fork</code> in the frontmatter.
            That runs the skill in an isolated context so the
            injected data doesn&apos;t pollute your main session.
            The same skill format works across multiple tools, as the
            next panel compares.
          </p>
        </>
      ),
    },
    {
      id: 'crossTool',
      visual: 'crossToolSkills',
      content: (
        <>
          <h3>Skills across tools</h3>
          <p>
            <strong>Write a skill once, run it in two tools with zero
            changes.</strong> Compare the three rows on the canvas.
            Claude Code and OpenCode share the same directory
            (<code>.claude/skills/</code>) and the same SKILL.md
            format.
          </p>
          <p>
            Notice Copilot&apos;s different path:{' '}
            <code>.github/copilot/prompts/*.md</code>. The concept is
            identical, but the invocation style differs &mdash; you
            reference prompts with <code>#prompt-name</code> in chat
            instead of a slash command.
          </p>
          <p>
            If your team is single-tool, pick one directory and move
            on. If multiple tools coexist, duplicate only the skills
            that matter most. The final panel helps you decide which
            workflows deserve to become skills at all.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'whenToCreate',
      content: (
        <>
          <h3>When to create a skill</h3>
          <p>
            <strong>Not everything deserves to be a skill.</strong>{' '}
            Follow the four steps on the canvas top to bottom. The
            first signal is repetition: if you&apos;ve given the same
            instructions three or more times, that&apos;s your cue.
          </p>
          <p>
            Notice step 3 &mdash; &quot;needs live data.&quot; If
            the workflow requires pulling fresh context at runtime
            (a PR diff, a log tail, a deploy status), a skill with
            shell injection handles it cleanly. A prompt you retype
            each time cannot.
          </p>
          <p>
            Start with one skill this week. Your first skill might be
            as simple as &quot;run tests and fix failures.&quot; As
            you get comfortable, layer in dynamic context, forked
            sessions, and team-shared recipes committed to the repo.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
