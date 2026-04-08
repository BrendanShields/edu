'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollSectionState {
  activeSection: string | null;
  activeVisual: string | null;
  isEdge: boolean;
}

const INITIAL: ScrollSectionState = {
  activeSection: null,
  activeVisual: null,
  isEdge: true,
};

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
 */
export function useScrollSections() {
  const [state, setState] = useState<ScrollSectionState>(INITIAL);
  const lastDispatchedId = useRef<string | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]'),
    );
    if (sections.length === 0) return;

    const lastIndex = sections.length - 1;
    const visibility = new Map<HTMLElement, boolean>();
    sections.forEach((s) => visibility.set(s, false));

    function recompute() {
      let active: HTMLElement | null = null;
      for (const s of sections) {
        if (visibility.get(s)) active = s;
      }
      // Fallback: nothing intersecting (e.g. very top of page) → first section.
      if (!active) active = sections[0];

      const id = active.dataset.section ?? null;
      const visual = active.dataset.visual || null;
      const isEdge = active === sections[lastIndex];

      // Mirror an `is-active` class onto each section so CSS can drive the
      // dimming without forcing every section to subscribe to React state.
      for (const s of sections) {
        s.classList.toggle('is-active', s === active);
      }

      setState((prev) => {
        if (
          prev.activeSection === id &&
          prev.activeVisual === visual &&
          prev.isEdge === isEdge
        ) {
          return prev;
        }
        return { activeSection: id, activeVisual: visual, isEdge };
      });

      // Side effect: bridge to the legacy `sectionchange` window event.
      // Dedupe by id so listeners don't see noop transitions.
      if (id !== lastDispatchedId.current) {
        lastDispatchedId.current = id;
        window.dispatchEvent(
          new CustomEvent('sectionchange', { detail: { id, visual, isEdge } }),
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
      for (const s of sections) s.classList.remove('is-active');
    };
  }, []);

  return state;
}
