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
            <strong>Your agent can read files and run commands, but
            your bugs live in Sentry, your data lives in Postgres,
            and your designs live in Figma.</strong> Look at the
            title card on the canvas &mdash; &quot;Connect your agent
            to databases, APIs, and services.&quot;
          </p>
          <p>
            Model Context Protocol (MCP) is the bridge. It gives the
            agent a standardized way to call external services and get
            structured data back, no tab-switching or copy-paste
            required.
          </p>
          <p>
            The next panel shows the before-and-after of working
            without MCP versus with it &mdash; and the difference is
            dramatic.
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
            <strong>Without MCP, you are the middleware.</strong>{' '}
            Compare the two panels on the canvas. On the left: open
            Sentry, copy stack trace, paste into agent, open DB
            client, copy query results, paste again. On the right:
            one conversation, zero tab switches.
          </p>
          <p>
            Notice what changes on the &quot;With MCP&quot; side.
            The agent calls Sentry and your database directly and
            gets structured data back &mdash; not screenshots, not
            truncated pastes. The entire investigation stays in one
            unbroken conversation thread.
          </p>
          <p>
            That structured data means better answers. The agent
            parses JSON fields, not OCR artifacts. Setting up that
            connection takes about three commands, which the next
            panel walks through.
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
            <strong>Two flavors, one command.</strong> Read the bash
            commands on the canvas top to bottom. The first adds a
            remote HTTP server (Notion), the second adds a local
            stdio server (Sentry) with an environment variable for
            the token.
          </p>
          <p>
            Notice the <code>--env SENTRY_TOKEN=xxx</code> flag.
            Secrets stay in your local environment, never in the
            committed config. Once added, run{' '}
            <code>claude mcp list</code> to confirm the agent sees
            the server&apos;s tools.
          </p>
          <p>
            Commit <code>.mcp.json</code> to share server configs
            with your team &mdash; each developer supplies their own
            tokens locally. The ecosystem of available servers is
            growing fast, as the next panel shows.
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
            <strong>Which copy-paste pain do you want to kill
            first?</strong> Scan the six cards on the canvas.
            Context7 gives the agent up-to-date library docs. Sentry
            lets it investigate errors without leaving your terminal.
            PostgreSQL lets it query your data directly.
          </p>
          <p>
            Pick the one card that matches your biggest friction and
            add that server first. You can always wire up more
            later &mdash; each one is a single{' '}
            <code>claude mcp add</code> command.
          </p>
          <p>
            More power means more risk surface. The final section
            covers how MCP servers are scoped and secured so you can
            connect with confidence.
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
            <strong>MCP servers are code running on your machine
            &mdash; treat them like any dependency.</strong> Watch the
            terminal on the canvas. The agent asks about production
            errors and gets structured Sentry data back, but notice
            the permission prompt before each MCP tool call.
          </p>
          <p>
            Servers run at three scope levels: local (your machine
            only), project (shared via <code>.mcp.json</code>), and
            user (your global config). Audit what tools each server
            exposes, limit permissions where possible, and never
            hardcode secrets in committed config files.
          </p>
          <p>
            The takeaway: connect one server this week. Pick your
            biggest copy-paste bottleneck, wire it up with{' '}
            <code>claude mcp add</code>, and see how much faster
            your investigations become.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
