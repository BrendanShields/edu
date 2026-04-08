import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { lightTheme } from "../../theme";
import { ThemeProvider } from "../../theme-context";
import { fontFamily } from "../../fonts";
import { EpisodeTitle } from "../../components/EpisodeTitle";
import { CaptionPill } from "../../components/CaptionPill";
import { ChatWindow } from "../../components/ChatWindow";
import { PastedScrap } from "../../components/PastedScrap";
import { BeatProps, FreezeAtBeat } from "./beatHelpers";

// E1 — The Copy-Paste Era
// 420 frames at 30fps (14s)

export const BEAT_FRAMES = [0, 30, 90, 150, 210, 300, 360, 405] as const;

export const CopyPasteEra: React.FC<BeatProps> = ({ activeBeat }) => (
  <ThemeProvider value={lightTheme}>
    <FreezeAtBeat beats={BEAT_FRAMES} activeBeat={activeBeat}>
      <CopyPasteEraInner />
    </FreezeAtBeat>
  </ThemeProvider>
);

const CopyPasteEraInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const outro = spring({
    frame: frame - (durationInFrames - fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);

  // Chat slides leftward as scraps start landing.
  const shiftProgress = spring({
    frame: frame - 150,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const chatTranslateX = interpolate(shiftProgress, [0, 1], [0, -260]);

  return (
    <AbsoluteFill
      style={{
        background: lightTheme.bg,
        opacity: outroOpacity,
        fontFamily,
      }}
    >
      <EpisodeTitle
        eyebrow="MCP · episode 1"
        title="The Copy-Paste Era"
        appearAt={0}
        exitAt={270}
      />

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
        <div style={{ transform: `translateX(${chatTranslateX}px)` }}>
          <ChatWindow
            appearAt={30}
            width={580}
            height={420}
            title="chat"
            messages={[
              {
                role: "user",
                content: "what errors spiked today?",
                appearAt: 36,
                charsPerSecond: 22,
              },
              {
                role: "assistant",
                content: "I'd need the Sentry data.",
                appearAt: 96,
                charsPerSecond: 22,
              },
            ]}
          />
        </div>
      </AbsoluteFill>

      {/* Pasted scraps pile up around the chat */}
      <PastedScrap
        appearAt={150}
        x={1100}
        y={200}
        rotation={-4}
        width={300}
        label="stack trace"
      >
        {`TypeError: cannot read
  property 'id' of undefined
  at line 47, app/api/users.ts
  at line 91, app/api/dashboard.ts`}
      </PastedScrap>

      <PastedScrap
        appearAt={210}
        x={1410}
        y={380}
        rotation={3}
        width={280}
        label="postgres rows"
      >
        {`event_id | count | last_seen
err_847   | 1284  | 2026-04-08
err_531   |  902  | 2026-04-08
err_204   |  311  | 2026-04-08`}
      </PastedScrap>

      <PastedScrap
        appearAt={232}
        x={1170}
        y={620}
        rotation={-2}
        width={300}
        label="figma frame"
      >
        {`https://figma.com/file/
  abc123/dashboard
  ?node-id=42:128
  (3 review comments)`}
      </PastedScrap>

      <PastedScrap
        appearAt={300}
        x={1480}
        y={150}
        rotation={5}
        width={260}
        label="another stack"
      >
        {`ReferenceError:
  user is not defined
  at handleClick
  /components/Nav.tsx:31`}
      </PastedScrap>

      <PastedScrap
        appearAt={322}
        x={1280}
        y={800}
        rotation={-3}
        width={300}
        label="another query"
      >
        {`SELECT * FROM events
WHERE user_id = $1
ORDER BY created_at DESC
LIMIT 50`}
      </PastedScrap>

      <CaptionPill
        text="Every integration was a person."
        appearAt={360}
      />
    </AbsoluteFill>
  );
};
