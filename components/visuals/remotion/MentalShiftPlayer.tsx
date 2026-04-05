'use client';

import { RemotionPlayer } from './RemotionPlayer';
import { MentalShiftAnimation, TOTAL_FRAMES } from './MentalShiftAnimation';

export function AnimatedMentalShift() {
  return (
    <RemotionPlayer
      component={MentalShiftAnimation}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={380}
      height={420}
    />
  );
}
