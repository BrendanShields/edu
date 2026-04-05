import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { MCPArchitecture } from '@/components/visuals/lesson/MCPArchitecture';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'mcp-external-tools',
  module: 'advanced',
  title: 'MCP & External Tools',
  visuals: {
    mcpIntro: (
      <TitleCard
        icon="🔌"
        title="MCP & External Tools"
        subtitle="Connect your agent to databases, APIs, and services"
      />
    ),
    mcpComparison: (
      <BeforeAfter
        before={{
          label: 'Without MCP',
          icon: '📋',
          text: 'Open Sentry, copy stack trace, paste into agent. Open DB client, copy query results, paste again. Repeat forever.',
        }}
        after={{
          label: 'With MCP',
          icon: '🔌',
          text: 'Agent queries Sentry and your database directly. No tab switching. No copy-paste. One conversation.',
        }}
      />
    ),
    mcpSetup: (
      <CodeExample
        title="Setup in Claude Code"
        language="bash"
        code={`# Remote HTTP server
claude mcp add --transport http \\
  notion https://mcp.notion.com/mcp

# Local server with env vars
claude mcp add --transport stdio \\
  --env SENTRY_TOKEN=xxx sentry \\
  -- npx -y @sentry/mcp-server

# Share with team via .mcp.json
claude mcp list`}
      />
    ),
    popularServers: (
      <CardGrid
        title="Popular MCP Servers"
        columns={3}
        cards={[
          { icon: '📚', label: 'Context7', desc: 'Library docs' },
          { icon: '🐛', label: 'Sentry', desc: 'Error monitoring' },
          { icon: '🐘', label: 'PostgreSQL', desc: 'Database queries' },
          { icon: '🐙', label: 'GitHub', desc: 'Issues & PRs' },
          { icon: '🎨', label: 'Figma', desc: 'Design files' },
          { icon: '💳', label: 'Stripe', desc: 'Payments' },
        ]}
      />
    ),
    mcpSecurity: <MCPArchitecture />,
  },
  sections: [
    {
      id: 'intro',
      visual: 'mcpIntro',
      content: (
        <>
          <h1>MCP &amp; External Tools</h1>
          <p>
            Your agent can read files and run commands. But your bugs
            live in Sentry, your data lives in Postgres, and your
            designs live in Figma. How does the agent reach them?
          </p>
          <p>
            Think of power adapters for international travel. Your
            laptop has one plug type. Each country has a different
            outlet. You don&apos;t rewire the laptop &mdash; you
            carry the right adapter.
          </p>
          <p>
            <strong>MCP is that adapter.</strong> One protocol, many
            services. Sentry, Postgres, Figma &mdash; each gets its
            own server that translates the agent&apos;s requests into
            API calls and returns structured data.
          </p>
        </>
      ),
    },
    {
      id: 'withWithout',
      visual: 'mcpComparison',
      content: (
        <>
          <h3>The copy-paste tax</h3>
          <p>
            Without MCP, you are the middleware. Open Sentry, copy
            the stack trace, paste it into the agent. Open the DB
            client, copy query results, paste again. You&apos;re a
            human clipboard shuttling data between tabs.
          </p>
          <p>
            The &quot;With MCP&quot; side tells a different story.
            The agent calls Sentry and your database directly and
            gets structured JSON back &mdash; not screenshots, not
            truncated pastes. The entire investigation stays in one
            unbroken thread.
          </p>
          <p>
            Structured data means better answers. The agent parses
            JSON fields, not OCR artifacts. Setting up that connection
            takes about three commands.
          </p>
        </>
      ),
    },
    {
      id: 'setup',
      visual: 'mcpSetup',
      content: (
        <>
          <h3>Setting up MCP servers</h3>
          <p>
            Two flavors, one command. The first example adds a remote
            HTTP server (Notion). The second adds a local stdio server
            (Sentry) with an environment variable for the auth token.
          </p>
          <p>
            Notice <code>--env SENTRY_TOKEN=xxx</code>. Secrets stay
            in your local environment, never in committed config. Run{' '}
            <code>claude mcp list</code> afterward to confirm the
            agent sees the server&apos;s tools.
          </p>
          <p>
            Commit <code>.mcp.json</code> to share server configs
            with your team &mdash; each developer supplies their own
            tokens locally. One adapter config, many machines.
          </p>
        </>
      ),
    },
    {
      id: 'servers',
      visual: 'popularServers',
      content: (
        <>
          <h3>Popular servers</h3>
          <p>
            Which copy-paste pain do you want to kill first? Context7
            gives the agent up-to-date library docs. Sentry lets it
            investigate errors without leaving your terminal. PostgreSQL
            lets it query your data directly.
          </p>
          <p>
            Pick the adapter that matches your biggest friction. You
            can always wire up more later &mdash; each one is a
            single <code>claude mcp add</code> command.
          </p>
          <p>
            More adapters means more power &mdash; and more risk
            surface. The final section covers how to connect with
            confidence.
          </p>
        </>
      ),
    },
    {
      id: 'security',
      visual: 'mcpSecurity',
      content: (
        <>
          <h3>Scoping and security</h3>
          <p>
            You wouldn&apos;t install a random npm package without
            reading it. MCP servers deserve the same scrutiny &mdash;
            they&apos;re code running on your machine with access to
            your credentials.
          </p>
          <p>
            Servers run at three scope levels: local (your machine
            only), project (shared via <code>.mcp.json</code>), and
            user (your global config). Audit what tools each server
            exposes, limit permissions where possible, and never
            hardcode secrets in committed config files.
          </p>
          <p>
            Start with one adapter this week. Pick your biggest
            copy-paste bottleneck, wire it up with{' '}
            <code>claude mcp add</code>, and watch the tab-switching
            disappear.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
