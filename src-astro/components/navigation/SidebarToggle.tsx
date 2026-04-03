import { useState, useEffect } from 'preact/hooks';

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('sidebar-open');
    if (saved !== null) {
      setIsOpen(saved === 'true');
    }
  }, []);

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    if (sidebar) {
      sidebar.style.transform = isOpen ? 'translateX(0)' : 'translateX(-100%)';
    }
    if (content) {
      content.style.marginLeft = isOpen ? 'var(--sidebar-width)' : '0';
    }
    localStorage.setItem('sidebar-open', String(isOpen));
  }, [isOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      class="fixed top-4 left-4 z-50 p-2 bg-surface border border-border rounded-lg hover:bg-surface-hover transition-colors"
      style={{ display: isOpen ? 'none' : 'block' }}
      aria-label="Toggle sidebar"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    </button>
  );
}
