'use client';

import { useState, type ReactNode } from 'react';

type Tab = 'explore' | 'plan' | 'build';

const tabs: { id: Tab; label: string }[] = [
  { id: 'explore', label: 'Explore' },
  { id: 'plan', label: 'Plan' },
  { id: 'build', label: 'Build' },
];

const subtitles: Record<Tab, string> = {
  explore: 'Understand before acting.',
  plan: 'Agree on approach before writing code.',
  build: 'Execute with verification at every step.',
};

function ExploreContent() {
  return (
    <div className="space-y-1">
      <div>
        <span className="text-text-muted">$ </span>
        <span className="text-text-secondary">grep -r &quot;authenticate&quot; src/</span>
      </div>
      <div className="text-text-muted pl-0">
        <div>
          <span className="text-text-secondary">src/auth/login.ts</span>
          <span className="text-text-muted">:14</span>
          {'  '}
          <span className="text-text-muted">export async function authenticate(...)</span>
        </div>
        <div>
          <span className="text-text-secondary">src/auth/middleware.ts</span>
          <span className="text-text-muted">:8</span>
          {'   '}
          <span className="text-text-muted">{'if (!authenticate(req)) { ...'}</span>
        </div>
        <div>
          <span className="text-text-secondary">src/tests/auth.test.ts</span>
          <span className="text-text-muted">:22</span>
          {'  '}
          <span className="text-text-muted">{"describe('authenticate', () => {"}</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50">
        <div>
          <span className="text-text-muted">$ </span>
          <span className="text-text-secondary">cat src/auth/login.ts | head -30</span>
        </div>
        <div className="text-text-muted mt-1">
          <div>{'export async function authenticate(email: string, password: string) {'}</div>
          <div>{'  const user = await db.users.findByEmail(email);'}</div>
          <div>{"  if (!user) throw new AuthError('not_found');"}</div>
          <div className="text-amber-400/80">{'  // BUG: comparing hash to plaintext'}</div>
          <div>{'  if (user.passwordHash === password) { ...'}</div>
        </div>
      </div>
    </div>
  );
}

function PlanContent() {
  return (
    <div className="space-y-1">
      <div className="text-text-secondary font-semibold mb-2">Plan:</div>
      <div className="text-text-muted space-y-2">
        <div>
          <span className="text-text-secondary">1.</span>{' '}
          Fix password comparison in{' '}
          <span className="text-text-secondary">src/auth/login.ts</span>
          <div className="pl-4 text-text-muted">
            — Replace direct comparison with bcrypt.compare()
          </div>
        </div>
        <div>
          <span className="text-text-secondary">2.</span>{' '}
          Add missing import for bcrypt
        </div>
        <div>
          <span className="text-text-secondary">3.</span>{' '}
          Update test expectations in{' '}
          <span className="text-text-secondary">auth.test.ts</span>
        </div>
        <div>
          <span className="text-text-secondary">4.</span>{' '}
          Run test suite to verify
        </div>
      </div>
    </div>
  );
}

function BuildContent() {
  return (
    <div className="space-y-1">
      <div className="space-y-1.5">
        <div>
          <span className="text-emerald-400">&#10003;</span>{' '}
          <span className="text-text-muted">Edited </span>
          <span className="text-text-secondary">src/auth/login.ts</span>
          <span className="text-text-muted"> — replaced === with bcrypt.compare()</span>
        </div>
        <div>
          <span className="text-emerald-400">&#10003;</span>{' '}
          <span className="text-text-muted">Added </span>
          <span className="text-text-secondary">{"import { compare } from 'bcrypt'"}</span>
        </div>
        <div>
          <span className="text-emerald-400">&#10003;</span>{' '}
          <span className="text-text-muted">Updated </span>
          <span className="text-text-secondary">auth.test.ts</span>
          <span className="text-text-muted"> expectations</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50">
        <div>
          <span className="text-text-muted">$ </span>
          <span className="text-text-secondary">npm test</span>
        </div>
        <div className="text-text-muted mt-1.5 pl-2 space-y-0.5">
          <div className="text-text-secondary">auth/login</div>
          <div className="pl-2">
            <span className="text-emerald-400">&#10003;</span>
            {' rejects wrong password '}
            <span className="text-text-muted/60">(12ms)</span>
          </div>
          <div className="pl-2">
            <span className="text-emerald-400">&#10003;</span>
            {' accepts correct password '}
            <span className="text-text-muted/60">(8ms)</span>
          </div>
          <div className="pl-2">
            <span className="text-emerald-400">&#10003;</span>
            {' handles missing user '}
            <span className="text-text-muted/60">(3ms)</span>
          </div>
          <div className="mt-1.5 text-emerald-400 font-semibold">
            3 passed, 0 failed
          </div>
        </div>
      </div>
    </div>
  );
}

const contentMap: Record<Tab, () => ReactNode> = {
  explore: ExploreContent,
  plan: PlanContent,
  build: BuildContent,
};

export function ExplorePlanBuild() {
  const [activeTab, setActiveTab] = useState<Tab>('explore');

  const Content = contentMap[activeTab];

  return (
    <div className="space-y-3" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Agentic Workflow
      </p>

      <div className="rounded-xl border border-border overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 px-3 py-2.5 text-sm font-medium transition-all duration-200
                  cursor-pointer border-b-2 -mb-px
                  ${
                    isActive
                      ? 'text-accent border-accent'
                      : 'text-text-muted border-transparent hover:text-text-secondary'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Terminal content */}
        <div className="bg-surface p-4 min-h-[220px]">
          <div
            className="font-mono text-xs leading-relaxed"
            style={{ animation: 'fadeIn 0.3s ease-out' }}
            key={activeTab}
          >
            <Content />
          </div>

          {/* Subtitle */}
          <p className="text-center text-text-muted italic text-xs mt-5">
            {subtitles[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
}
