'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    __scrollTrackerInitialized?: boolean;
  }
}

export function ScrollTracker() {
  useEffect(() => {
    // True global singleton — survives React unmounts
    if (window.__scrollTrackerInitialized) return;
    window.__scrollTrackerInitialized = true;

    let current: string | null = null;

    function update() {
      const sections = document.querySelectorAll('[data-section]');
      if (!sections.length) return;

      const scrollTop = window.scrollY;
      const vpH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      let el: Element | null = null;

      if (scrollTop < 100) {
        el = sections[0];
      } else if (scrollTop + vpH >= docH - 100) {
        el = sections[sections.length - 1];
      } else {
        const line = vpH * 0.3;
        sections.forEach((s) => {
          if (s.getBoundingClientRect().top <= line) el = s;
        });
      }

      if (el) {
        const id = el.getAttribute('data-section');
        if (id !== current) {
          current = id;
          sections.forEach((s) => s.classList.remove('active'));
          el.classList.add('active');
          const visual = el.getAttribute('data-visual') || '';
          const firstId = sections[0].getAttribute('data-section');
          const lastId = sections[sections.length - 1].getAttribute('data-section');
          window.dispatchEvent(new CustomEvent('sectionchange', {
            detail: { id, visual, isEdge: id === firstId || id === lastId }
          }));
        }
      }
    }

    // Scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    // Poll forever — catches navigation, back/forward, any edge case
    setInterval(() => {
      const sections = document.querySelectorAll('[data-section]');
      if (sections.length > 0 && !document.querySelector('.dd-section.active')) {
        current = null;
        update();
      }
    }, 150);

    update();
  }, []);

  return null;
}
