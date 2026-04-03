'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { useScrollSections } from '@/lib/hooks/useScrollSections';
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

export function ScrollLayout({ children, visuals, title, prevHref, prevTitle, nextHref, nextTitle, courseOutline }: ScrollLayoutProps) {
  const { activeVisual, isEdge } = useScrollSections();
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const showCanvas = !isEdge && activeVisual && visuals[activeVisual];

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const VisualContent = ({ maxW }: { maxW: number }) => (
    <div style={{ width: '100%', maxWidth: maxW }}>
      {Object.entries(visuals).map(([key, visual]) => (
        <div key={key} style={{ display: activeVisual === key ? 'block' : 'none' }}>{visual}</div>
      ))}
    </div>
  );

  return (
    <>
      {/* Main layout */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>

        {/* Left column: narrative */}
        <div style={{
          width: expanded ? '0%' : '50%',
          overflow: expanded ? 'hidden' : 'visible',
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: expanded ? 0 : '1.5rem 3rem',
        }}>
          <div style={{ maxWidth: 'var(--content-max-width)' }}>
            <div style={{ height: '33vh' }} />
            <article className="dd-prose">{children}</article>

            {/* Prev / Next */}
            <nav style={{
              display: 'flex', justifyContent: 'space-between',
              marginTop: '4rem', paddingTop: '2rem',
              borderTop: '1px solid #2a2a2a',
            }}>
              {prevHref ? (
                <a href={prevHref} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666', marginBottom: 4 }}>&lsaquo; Previous</div>
                  <div style={{ fontSize: 15, color: '#fafafa', fontWeight: 500 }}>{prevTitle}</div>
                </a>
              ) : <div />}
              {nextHref ? (
                <a href={nextHref} style={{ textDecoration: 'none', textAlign: 'right' }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666', marginBottom: 4 }}>Next &rsaquo;</div>
                  <div style={{ fontSize: 15, color: '#fafafa', fontWeight: 500 }}>{nextTitle}</div>
                </a>
              ) : <div />}
            </nav>

            <div style={{ height: '33vh' }} />
          </div>
        </div>

        {/* Right column: canvas */}
        <div style={{
          width: expanded ? '100%' : '50%',
          opacity: (showCanvas || expanded) ? 1 : 0,
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease',
          pointerEvents: (showCanvas || expanded) ? 'auto' : 'none',
        }}>
          <div style={{
            position: expanded ? 'fixed' : 'sticky',
            top: 0,
            left: expanded ? 0 : undefined,
            right: expanded ? 0 : undefined,
            height: '100vh',
            padding: '1rem',
            zIndex: expanded ? 100 : undefined,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '1rem',
              background: '#141414', border: '1px solid #2a2a2a',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Action buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, padding: '16px 0 8px' }}>
                {[
                  { d: expanded
                      ? 'M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7'
                      : 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3',
                    onClick: () => setExpanded(!expanded),
                    highlight: expanded,
                  },
                  { d: 'M1 4v6h6M23 20v-6h-6' },
                  { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3' },
                  { d: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
                ].map((btn, i) => (
                  <button key={i} onClick={btn.onClick} style={{
                    width: 32, height: 32, borderRadius: 8,
                    border: '1px solid #333', background: '#1a1a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: btn.highlight ? '#FF6B35' : '#666', cursor: 'pointer',
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={btn.d} /></svg>
                  </button>
                ))}
              </div>

              {/* Visual content */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <VisualContent maxW={expanded ? 600 : 380} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation island — top right */}
      {!expanded && (
        <div ref={menuRef} style={{
          position: 'fixed', top: 0, right: 0, zIndex: 50,
          padding: '12px 16px',
        }}>
          {/* Pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'rgba(26,26,26,0.9)', backdropFilter: 'blur(8px)',
            border: '1px solid #2a2a2a', borderRadius: 9999,
            padding: '10px 20px',
          }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontFamily: 'inherit',
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF6B35' }} />
              <span style={{ fontSize: 14, fontWeight: 500, color: '#fafafa' }}>{title}</span>
              <span style={{ fontSize: 10, color: menuOpen ? '#FF6B35' : '#666', marginLeft: 4 }}>{menuOpen ? '▴' : '▾'}</span>
            </button>
          </div>

          {/* Dropdown */}
          {menuOpen && courseOutline && (
            <div style={{
              position: 'absolute', top: '100%', right: 16, marginTop: 8,
              width: 320, maxHeight: 'calc(100vh - 100px)', overflowY: 'auto',
              background: 'rgba(20,20,20,0.98)', backdropFilter: 'blur(12px)',
              border: '1px solid #2a2a2a', borderRadius: 16,
              padding: '12px 0',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}>
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 20px 12px',
                  textDecoration: 'none',
                  borderBottom: '1px solid #2a2a2a',
                  marginBottom: 4,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B35', flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: '#a0a0a0' }}>Workshop Home</span>
              </a>
              {courseOutline.map((mod) => (
                <div key={mod.slug}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '0.08em', color: '#666',
                    padding: '12px 20px 6px',
                  }}>
                    {mod.title}
                  </div>
                  {mod.lessons.map((lesson) => (
                    <a
                      key={lesson.slug}
                      href={lesson.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '8px 20px',
                        textDecoration: 'none',
                        background: lesson.active ? 'rgba(255,107,53,0.08)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => { if (!lesson.active) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = lesson.active ? 'rgba(255,107,53,0.08)' : 'transparent'; }}
                    >
                      <div style={{
                        width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                        background: lesson.active ? '#FF6B35' : '#333',
                      }} />
                      <span style={{
                        fontSize: 13, fontWeight: lesson.active ? 600 : 400,
                        color: lesson.active ? '#FF6B35' : '#a0a0a0',
                      }}>
                        {lesson.title}
                      </span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
