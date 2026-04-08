'use client';

import { Player } from '@remotion/player';
import { AgenticLoopAnimation, TOTAL_FRAMES } from './AgenticLoopAnimation';

// Default export so this whole module — including the heavy `remotion` core
// imports inside AgenticLoopAnimation and the `@remotion/player` package —
// can be code-split via `next/dynamic` and never enters the main bundle.
export default function AgenticLoopPlayerLazy() {
  return (
    <Player
      component={AgenticLoopAnimation}
      compositionWidth={380}
      compositionHeight={420}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      loop
      autoPlay
      style={{ width: '100%', borderRadius: 12 }}
      acknowledgeRemotionLicense
    />
  );
}
