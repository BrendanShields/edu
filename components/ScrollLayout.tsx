'use client';

import { useState, type ReactNode } from 'react';
import { useScrollSections } from '@/lib/hooks/useScrollSections';
import { useSpringFollow } from '@/lib/hooks/useSpringFollow';
import { NavIsland } from '@/components/NavIsland';
import { PrevNextNav } from '@/components/PrevNextNav';
import type { CourseOutlineModule } from '@/lib/lessons/types';

interface VisualMap { [key: string]: ReactNode }

interface ScrollLayoutProps {
  children: ReactNode;
  visuals: VisualMap;
  title: string;
  prevHref?: string;
  prevTitle?: string;
  nextHref?: string;
  nextTitle?: string;
  courseOutline?: CourseOutlineModule[];
}

export function ScrollLayout({
  children,
  visuals,
  title,
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
  courseOutline,
}: ScrollLayoutProps) {
  const { activeVisual } = useScrollSections();
  const [expanded, setExpanded] = useState(false);
  const cursor = useSpringFollow();
  // Right canvas is always visible — every section is supposed to map to a
  // visual. We default to the first visual until the IO has fired so the
  // canvas never starts blank.
  const visualKeys = Object.keys(visuals);
  const resolvedVisual = activeVisual ?? visualKeys[0] ?? null;

  return (
    <>
      <main id="main-content" className={`scroll-layout${expanded ? ' is-expanded' : ''}`}>
        {/* Left column: narrative */}
        <div className="scroll-layout__left">
          <div className="scroll-layout__prose-wrap">
            <div className="scroll-layout__spacer-top" aria-hidden />
            <article className="dd-prose">{children}</article>
            <PrevNextNav
              prevHref={prevHref}
              prevTitle={prevTitle}
              nextHref={nextHref}
              nextTitle={nextTitle}
            />
            <div className="scroll-layout__spacer-bottom" aria-hidden />
          </div>
        </div>

        {/* Right column: canvas — always visible. */}
        <div className="scroll-layout__right is-visible">
          <div className="scroll-layout__sticky">
            <div {...cursor.handlers} className="scroll-layout__cursor-host">
              <div className="canvas">
                <div className="canvas__toolbar">
                  <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-pressed={expanded}
                    aria-label={expanded ? 'Collapse canvas' : 'Expand canvas to fullscreen'}
                    className={`canvas__btn${expanded ? ' is-active' : ''}`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={expanded
                        ? 'M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7'
                        : 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3'
                      } />
                    </svg>
                  </button>
                </div>

                <div className="canvas__stage">
                  <div className="canvas__visuals">
                    {Object.entries(visuals).map(([key, visual]) => (
                      <div
                        key={key}
                        className={`canvas__visual${resolvedVisual === key ? ' is-visible' : ''}`}
                        aria-hidden={resolvedVisual !== key}
                      >
                        {visual}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={cursor.dotRef} aria-hidden className="cursor-dot" />
            </div>
          </div>
        </div>
      </main>

      {!expanded && <NavIsland title={title} courseOutline={courseOutline} />}
    </>
  );
}
