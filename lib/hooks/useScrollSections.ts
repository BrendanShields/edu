'use client';

import { useState, useEffect } from 'react';

export function useScrollSections() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeVisual, setActiveVisual] = useState<string | null>(null);
  const [isEdge, setIsEdge] = useState(true);

  useEffect(() => {
    // Listen for section changes from the global scroll tracking script
    function onSectionChange(e: Event) {
      const { id, visual, isEdge: edge } = (e as CustomEvent).detail;
      setActiveSection(id);
      setActiveVisual(visual || null);
      setIsEdge(edge);
    }

    window.addEventListener('sectionchange', onSectionChange);
    return () => window.removeEventListener('sectionchange', onSectionChange);
  }, []);

  return { activeSection, activeVisual, isEdge };
}
