'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { CourseOutlineModule } from '@/lib/lessons/types';

interface NavIslandProps {
  title: string;
  courseOutline?: CourseOutlineModule[];
}

export function NavIsland({ title, courseOutline }: NavIslandProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonId = useId();
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="nav-island">
      <div className="nav-island__pill">
        <button
          id={buttonId}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          className="nav-island__toggle"
        >
          <span className="nav-island__dot" aria-hidden />
          <span className="nav-island__title">{title}</span>
          <span className="nav-island__caret" aria-hidden>{open ? '▴' : '▾'}</span>
        </button>
      </div>

      {open && courseOutline && (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          className="nav-island__menu"
        >
          <Link
            href="/"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="nav-island__home"
            prefetch={false}
          >
            <span className="nav-island__bullet" aria-hidden />
            <span>Workshop Home</span>
          </Link>
          {courseOutline.map((mod) => (
            <div key={mod.slug} className="nav-island__group">
              <div className="nav-island__group-label">{mod.title}</div>
              {mod.lessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={lesson.href}
                  role="menuitem"
                  aria-current={lesson.active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`nav-island__item${lesson.active ? ' is-active' : ''}`}
                  // Without this, opening the menu fires 22 prefetch requests
                  // at once. With prefetch={false}, the route is still
                  // prefetched on hover/focus but not on viewport entry.
                  prefetch={false}
                >
                  <span className="nav-island__bullet" aria-hidden />
                  <span className="nav-island__item-title">{lesson.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
