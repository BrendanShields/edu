'use client';

import { RemotionPlayer } from './RemotionPlayer';
import { AgenticLoopAnimation, TOTAL_FRAMES } from './AgenticLoopAnimation';

export function AnimatedAgenticLoop() {
  return (
    <RemotionPlayer
      component={AgenticLoopAnimation}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={380}
      height={420}
    />
  );
}
