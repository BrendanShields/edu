import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  visual?: string;
  /**
   * Resolved visual node for this section. Rendered inline on narrow
   * viewports (where the sticky right canvas is hidden) so the prose still
   * has its companion visual nearby. Hidden on desktop via CSS.
   *
   * Important: this is the *same* React node that's also rendered in the
   * sticky right canvas. Rendering the same element twice can cause SVG
   * <defs> id collisions and other duplication oddities, so the inline
   * version is wrapped in a container that hides it from layout *and*
   * the accessibility tree on desktop.
   */
  visualNode?: ReactNode;
  children: ReactNode;
}

export function Section({ id, visual, visualNode, children }: SectionProps) {
  return (
    <section
      data-section={id}
      data-visual={visual || ''}
      className="dd-section"
    >
      {children}
      {visualNode ? (
        <div className="dd-section__inline-visual" aria-hidden>
          {visualNode}
        </div>
      ) : null}
    </section>
  );
}
