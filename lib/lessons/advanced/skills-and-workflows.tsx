import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
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
            You&apos;ve explained the deploy process five times this week.
            Each time you type it from scratch, adjusting wording, hoping
            the agent infers the right steps.
          </p>
          <p>
            Skills are reusable recipes. Write the workflow once as a
            markdown file, invoke it with a slash command, and the agent
            follows it precisely every time.
          </p>
        </>
      ),
    },
    {
      id: 'creating',
      visual: 'skillCreation',
      content: (
        <>
          <h3>Anatomy of a skill</h3>
          <p>
            A skill is a markdown file in <code>.claude/skills/</code> with
            YAML frontmatter and a body. The body is the prompt the agent
            receives when you invoke it.
          </p>
          <p>
            <code>$ARGUMENTS</code> gets replaced with whatever you type
            after the slash command. <code>/fix-issue 423</code> becomes
            &quot;Fix GitHub issue 423.&quot;
          </p>
          <p>
            Set <code>disable-model-invocation: true</code> to make the
            skill deterministic &mdash; no AI improvisation, just your
            exact steps.
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
            Skills can run shell commands at invocation time using
            the <code>!`command`</code> syntax. The output gets injected
            into the prompt before the agent sees it.
          </p>
          <p>
            This is powerful: your skill can pull the current PR diff,
            the latest error from logs, or the output of any CLI tool.
            The agent gets live data, not stale instructions.
          </p>
          <p>
            Set <code>context: fork</code> to run the skill in an
            isolated context that won&apos;t pollute your main session.
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
            Claude Code and OpenCode share the same skill format and
            directory. Write a skill once, and it works in both tools.
          </p>
          <p>
            Copilot uses a different path and invocation style, but the
            concept is identical. If your team uses multiple tools, you
            may want skills in both locations &mdash; or pick one and
            let the other tool&apos;s users adapt.
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
            Not everything needs a skill. If you&apos;ve given the same
            instructions three or more times, that&apos;s the signal.
            Multi-step workflows, processes that need live data, and
            recipes the team should share are all good candidates.
          </p>
          <p>
            Start small. Your first skill might just be &quot;run tests
            and fix failures.&quot; As you get comfortable, add dynamic
            context and more complex workflows.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
