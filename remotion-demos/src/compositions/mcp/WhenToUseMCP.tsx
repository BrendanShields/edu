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
import { ConceptCard } from "../../components/ConceptCard";
import { BeatProps, FreezeAtBeat } from "./beatHelpers";

// E5 — When to Use MCPs
// 360 frames at 30fps (12s)
// Handoff from E4: three primitive cards hold then slide off as the comparison grid arrives.

export const BEAT_FRAMES = [0, 30, 75, 120, 165, 210, 255, 300, 345] as const;

export const WhenToUseMCP: React.FC<BeatProps> = ({ activeBeat }) => (
  <ThemeProvider value={lightTheme}>
    <FreezeAtBeat beats={BEAT_FRAMES} activeBeat={activeBeat}>
      <WhenToUseMCPInner />
    </FreezeAtBeat>
  </ThemeProvider>
);

const WhenToUseMCPInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const outro = spring({
    frame: frame - (durationInFrames - fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);

  // Baton-pass: the three primitive cards from E4 slide left off-screen.
  const batonProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const batonTranslateX = interpolate(batonProgress, [0, 1], [0, -2000]);

  // Comparison grid slides in from right starting at frame 30.
  const gridIn = spring({
    frame: frame - 30,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const gridTranslateX = interpolate(gridIn, [0, 1], [400, 0]);
  const gridOpacity = interpolate(gridIn, [0, 1], [0, 1]);

  // Both columns dim slightly when the CTA pill appears at frame 300.
  const dimProgress = spring({
    frame: frame - 300,
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });
  const gridDim = interpolate(dimProgress, [0, 1], [1, 0.45]);

  return (
    <AbsoluteFill
      style={{
        background: lightTheme.bg,
        fontFamily,
        opacity: outroOpacity,
      }}
    >
      {/* Baton-pass cards from E4 — slide left off-screen */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 110,
          display: "flex",
          justifyContent: "center",
          gap: 36,
          transform: `translateX(${batonTranslateX}px)`,
        }}
      >
        <ConceptCard
          icon="🛠"
          title="Tools"
          body="Functions the agent calls"
          appearAt={-30}
          width={300}
        />
        <ConceptCard
          icon="📄"
          title="Resources"
          body="Data the agent reads"
          appearAt={-30}
          width={300}
        />
        <ConceptCard
          icon="💬"
          title="Prompts"
          body="Templates the agent uses"
          appearAt={-30}
          width={300}
        />
      </div>

      <EpisodeTitle
        eyebrow="MCP · episode 5"
        title="When to Use MCPs"
        appearAt={0}
        exitAt={320}
      />

      {/* Comparison grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: gridOpacity * gridDim,
          transform: `translateX(${gridTranslateX}px)`,
          paddingTop: 220,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 60,
            paddingLeft: 120,
            paddingRight: 120,
          }}
        >
          {/* Left column */}
          <div style={{ width: 700, display: "flex", flexDirection: "column", gap: 22 }}>
            <ColumnHeader text="Reach for MCP when…" tone="good" />
            <ConceptCard
              icon="🔁"
              title="Repeated workflow"
              body="You keep copy-pasting from the same service."
              variant="good"
              appearAt={75}
              width={700}
            />
            <ConceptCard
              icon="📊"
              title="Structured data"
              body="The agent should query, not parse screenshots."
              variant="good"
              appearAt={120}
              width={700}
            />
            <ConceptCard
              icon="🎯"
              title="A bottleneck you can name"
              body="One specific friction worth wiring up."
              variant="good"
              appearAt={165}
              width={700}
            />
          </div>

          {/* Right column */}
          <div style={{ width: 700, display: "flex", flexDirection: "column", gap: 22 }}>
            <ColumnHeader text="Skip MCP when…" tone="bad" />
            <ConceptCard
              icon="⚡"
              title="One-off task"
              body="Built-in tools are enough — no need to wire anything."
              variant="bad"
              appearAt={210}
              width={700}
            />
            <ConceptCard
              icon="🚫"
              title="Untrusted source"
              body="The server runs on your machine with your credentials."
              variant="bad"
              appearAt={255}
              width={700}
            />
          </div>
        </div>
      </div>

      <CaptionPill
        text="Start with one adapter this week."
        appearAt={300}
        variant="cta"
      />
    </AbsoluteFill>
  );
};

const ColumnHeader: React.FC<{ text: string; tone: "good" | "bad" }> = ({
  text,
  tone,
}) => {
  const color = tone === "good" ? lightTheme.good : lightTheme.bad;
  return (
    <div
      style={{
        fontSize: 26,
        fontWeight: 700,
        color,
        letterSpacing: -0.3,
        marginBottom: 4,
      }}
    >
      {text}
    </div>
  );
};
