'use client';

import { Player } from '@remotion/player';
import { MentalShiftAnimation, TOTAL_FRAMES } from './MentalShiftAnimation';

// Default export so this whole module — including the heavy `remotion` core
// imports inside MentalShiftAnimation and the `@remotion/player` package —
// can be code-split via `next/dynamic` and never enters the main bundle.
export default function MentalShiftPlayerLazy() {
  return (
    <Player
      component={MentalShiftAnimation}
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
