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
import { TopologyGraph } from "../../components/TopologyGraph";
import { APPS, SERVICES, HUB_POS } from "./FunctionCalling";
import { BeatProps, FreezeAtBeat } from "./beatHelpers";

// E3 — Enter MCP: One Protocol, Many Services
// 480 frames at 30fps (16s)
// Handoff from E2: TopologyGraph nodes at identical positions, starting in mesh mode.

export const BEAT_FRAMES = [0, 30, 120, 180, 240, 330, 390, 450] as const;

const SERVICE_CARDS = [
  {
    id: "sentry",
    icon: "🐛",
    title: "Sentry",
    body: "Errors & traces",
    x: 1500,
    y: 130,
  },
  {
    id: "postgres",
    icon: "🐘",
    title: "Postgres",
    body: "Your data",
    x: 1500,
    y: 340,
  },
  {
    id: "figma",
    icon: "🎨",
    title: "Figma",
    body: "Design files",
    x: 1500,
    y: 550,
  },
  {
    id: "github",
    icon: "🐙",
    title: "GitHub",
    body: "Issues & PRs",
    x: 1500,
    y: 760,
  },
];

const CARD_WIDTH = 260;

export const EnterMCP: React.FC<BeatProps> = ({ activeBeat }) => (
  <ThemeProvider value={lightTheme}>
    <FreezeAtBeat beats={BEAT_FRAMES} activeBeat={activeBeat}>
      <EnterMCPInner />
    </FreezeAtBeat>
  </ThemeProvider>
);

const EnterMCPInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const outro = spring({
    frame: frame - (durationInFrames - fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);

  // Standardisation plug beat: 180–220
  const plugProgress = spring({
    frame: frame - 180,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const plugFade = spring({
    frame: frame - 220,
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });
  const plugOpacity = interpolate(plugProgress - plugFade, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Sentry card highlight at B6 (frame 330)
  const sentryHighlightActive = frame >= 330;

  return (
    <AbsoluteFill
      style={{
        background: lightTheme.bg,
        fontFamily,
      }}
    >
      {/* Topology graph — already visible from E2's last frame, transitions mesh→hub */}
      <TopologyGraph
        apps={APPS}
        services={SERVICES}
        mode="hub"
        transitionAt={30}
        transitionDurationFrames={60}
        hubLabel="MCP"
        hubX={HUB_POS.x}
        hubY={HUB_POS.y}
        width={1920}
        height={1080}
      />

      {/* Outro-faded layer — most things fade, Sentry card and topology hold */}
      <AbsoluteFill style={{ opacity: outroOpacity }}>
        <EpisodeTitle
          eyebrow="MCP · episode 3"
          title="Enter MCP"
          appearAt={0}
          exitAt={400}
        />

        {/* Standardisation plug beat: a small ✗ → ✓ pulse near the GitHub service */}
        <div
          style={{
            position: "absolute",
            left: 1620,
            top: 880,
            width: 220,
            opacity: plugOpacity,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            fontWeight: 700,
            color: lightTheme.ink,
          }}
        >
          <span style={{ color: lightTheme.bad }}>✗</span>
          <span style={{ fontSize: 22, color: lightTheme.inkSoft }}>
            bespoke
          </span>
          <span style={{ fontSize: 22 }}>→</span>
          <span style={{ color: lightTheme.good }}>✓</span>
          <span
            style={{
              fontSize: 22,
              color: lightTheme.accent,
              fontWeight: 700,
            }}
          >
            standard
          </span>
        </div>

        {/* Service ConceptCards (non-Sentry) — fade with outro */}
        {SERVICE_CARDS.filter((c) => c.id !== "sentry").map((card) => (
          <div
            key={card.id}
            style={{
              position: "absolute",
              left: card.x,
              top: card.y,
              width: CARD_WIDTH,
            }}
          >
            <ConceptCard
              icon={card.icon}
              title={card.title}
              body={card.body}
              appearAt={240}
              width={CARD_WIDTH}
            />
          </div>
        ))}

        <CaptionPill text="One adapter. Every service." appearAt={390} />
      </AbsoluteFill>

      {/* Sentry card — outside outro layer, holds for E3→E4 match-cut */}
      <div
        style={{
          position: "absolute",
          left: 1500,
          top: 130,
          width: CARD_WIDTH,
        }}
      >
        <ConceptCard
          icon="🐛"
          title="Sentry"
          body="Errors & traces"
          appearAt={240}
          width={CARD_WIDTH}
          highlight={sentryHighlightActive}
        />
      </div>
    </AbsoluteFill>
  );
};
