'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tracks the section currently being read using a single IntersectionObserver
 * with a tracking line at 30% from the top of the viewport. Sections become
 * "active" while any part of them sits in that top band; the bottom-most
 * intersecting section in document order wins.
 *
 * Replaces the legacy `public/scroll-tracker.js` global script (a 150ms poll
 * + scroll listener pair). The IO is set up once per ScrollLayout mount and
 * disconnects on unmount.
 *
 * Side effect: dispatches a `sectionchange` window event on every transition
 * so a couple of legacy visual components (e.g. ScrollSyncedTerminal) can
 * sync their internal state without going through React context.
 *
 * Only `activeVisual` is exposed as React state; the active section id lives
 * in a ref so consumers don't re-render when scrolling between sections that
 * share the same visual (the common case for grouped phases).
 */
export function useScrollSections() {
  const [activeVisual, setActiveVisual] = useState<string | null>(null);
  const lastDispatchedId = useRef<string | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]'),
    );
    if (sections.length === 0) return;

    const visibility = new Map<HTMLElement, boolean>();
    sections.forEach((s) => visibility.set(s, false));

    let lastActive: HTMLElement | null = null;

    function recompute() {
      let active: HTMLElement | null = null;
      for (const s of sections) {
        if (visibility.get(s)) active = s;
      }
      // Fallback: nothing intersecting (e.g. very top of page) → first section.
      if (!active) active = sections[0];

      // Bail out early if nothing changed — avoids touching the DOM, the
      // window event bus, and React state on every IO callback.
      if (active === lastActive) return;

      // Targeted class toggle: only the previous and the new active section
      // need to change. Cheaper than iterating all sections each time.
      if (lastActive) lastActive.classList.remove('is-active');
      active.classList.add('is-active');
      lastActive = active;

      const id = active.dataset.section ?? null;
      const visual = active.dataset.visual || null;

      // Only triggers a re-render when the visual actually changes.
      setActiveVisual((prev) => (prev === visual ? prev : visual));

      // Side effect: bridge to the legacy `sectionchange` window event.
      // Dedupe by id so listeners don't see noop transitions.
      if (id !== lastDispatchedId.current) {
        lastDispatchedId.current = id;
        window.dispatchEvent(
          new CustomEvent('sectionchange', { detail: { id, visual } }),
        );
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target as HTMLElement, entry.isIntersecting);
        }
        recompute();
      },
      // Tracking band = top 30% of viewport. A section is "intersecting"
      // when any part of it overlaps that band.
      { rootMargin: '0% 0% -70% 0%', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    // Initial paint before IO has fired any callbacks.
    recompute();

    return () => {
      observer.disconnect();
      lastDispatchedId.current = null;
      if (lastActive) lastActive.classList.remove('is-active');
    };
  }, []);

  return { activeVisual };
}
