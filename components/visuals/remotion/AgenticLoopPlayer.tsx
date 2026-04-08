'use client';

import dynamic from 'next/dynamic';

// Lazy-load the entire player chain (the `remotion` core, `@remotion/player`,
// and the animation composition) so none of it ships in the main bundle. The
// fallback keeps the visual slot from collapsing while the chunk loads.
export const AnimatedAgenticLoop = dynamic(
  () => import('./AgenticLoopPlayer.lazy'),
  {
    ssr: false,
    loading: () => <div className="remotion-fallback" aria-hidden />,
  },
);
