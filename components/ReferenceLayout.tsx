'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import type { CourseOutlineModule } from '@/lib/lessons/types';

interface ReferenceLayoutProps {
  children: ReactNode;
  title: string;
  prevHref?: string;
  prevTitle?: string;
  nextHref?: string;
  nextTitle?: string;
  courseOutline?: CourseOutlineModule[];
}

export function ReferenceLayout({ children, title, prevHref, prevTitle, nextHref, nextTitle, courseOutline }: ReferenceLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: 720, width: '100%' }}>
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
        </div>
      </div>

      {/* Navigation island — top right */}
      <div ref={menuRef} style={{
        position: 'fixed', top: 0, right: 0, zIndex: 50,
        padding: '12px 16px',
      }}>
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
    </>
  );
}
