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
import { fontFamily, monoFontFamily } from "../../fonts";
import { EpisodeTitle } from "../../components/EpisodeTitle";
import { CaptionPill } from "../../components/CaptionPill";
import { ChatWindow } from "../../components/ChatWindow";
import { Typewriter } from "../../components/Typewriter";
import { TopologyGraph, GraphNode } from "../../components/TopologyGraph";
import { BeatProps, FreezeAtBeat } from "./beatHelpers";

// E2 — Programmatic Tool Calling
// 420 frames at 30fps (14s)
// Handoff from E1: chat starts at the same left-shifted position with no entrance animation.

export const BEAT_FRAMES = [0, 30, 75, 150, 210, 300, 360, 405] as const;

export const APPS: GraphNode[] = [
  { id: "chatgpt", label: "ChatGPT", x: 720, y: 200, icon: "💬" },
  { id: "claude", label: "Claude", x: 720, y: 400, icon: "✦" },
  { id: "cursor", label: "Cursor", x: 720, y: 600, icon: "▷" },
  { id: "ide", label: "Your IDE", x: 720, y: 800, icon: "▤" },
];

export const SERVICES: GraphNode[] = [
  { id: "sentry", label: "Sentry", x: 1660, y: 200, icon: "🐛" },
  { id: "postgres", label: "Postgres", x: 1660, y: 400, icon: "🐘" },
  { id: "figma", label: "Figma", x: 1660, y: 600, icon: "🎨" },
  { id: "github", label: "GitHub", x: 1660, y: 800, icon: "🐙" },
];

export const HUB_POS = { x: 1190, y: 500 } as const;

export const FunctionCalling: React.FC<BeatProps> = ({ activeBeat }) => (
  <ThemeProvider value={lightTheme}>
    <FreezeAtBeat beats={BEAT_FRAMES} activeBeat={activeBeat}>
      <FunctionCallingInner />
    </FreezeAtBeat>
  </ThemeProvider>
);

const FunctionCallingInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Outro fade — but the topology graph is allowed to hold for the E2→E3 handoff.
  const outro = spring({
    frame: frame - (durationInFrames - fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);
  // Graph stays at full opacity through the outro so E3 can pick it up.
  const graphOpacity = 1;

  // At B5, the chat+sidebar shrinks left to make room for the topology graph.
  const shrink = spring({
    frame: frame - 210,
    fps,
    config: { damping: 200 },
    durationInFrames: 36,
  });
  const chatScale = interpolate(shrink, [0, 1], [1, 0.62]);
  const chatExtraShift = interpolate(shrink, [0, 1], [0, -340]);
  const chatTranslateX = -260 + chatExtraShift;

  return (
    <AbsoluteFill
      style={{
        background: lightTheme.bg,
        fontFamily,
      }}
    >
      {/* Topology graph — does NOT fade with outro. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: graphOpacity,
        }}
      >
        <TopologyGraph
          apps={APPS}
          services={SERVICES}
          mode="mesh"
          appearAt={210}
          hubX={HUB_POS.x}
          hubY={HUB_POS.y}
          width={1920}
          height={1080}
        />
      </div>

      {/* Everything else fades with outro */}
      <AbsoluteFill style={{ opacity: outroOpacity }}>
        <EpisodeTitle
          eyebrow="MCP · episode 2"
          title="Programmatic Tool Calling"
          appearAt={0}
          exitAt={300}
        />

        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 80,
          }}
        >
          <div
            style={{
              transform: `translateX(${chatTranslateX}px) scale(${chatScale})`,
              transformOrigin: "center center",
            }}
          >
            <ChatWindow
              appearAt={-30}
              width={580}
              height={420}
              title="chat"
              sidebar={<FunctionCallSidebar />}
              messages={[
                {
                  role: "user",
                  content: "what errors spiked today?",
                  appearAt: -20,
                  charsPerSecond: 60,
                },
                {
                  role: "assistant",
                  content: "I'll call get_sentry_issues.",
                  appearAt: 75,
                  charsPerSecond: 22,
                },
              ]}
            />
          </div>
        </AbsoluteFill>

        <CaptionPill
          text="Every team rewrote the same wires."
          appearAt={360}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FunctionCallSidebar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Arrow pulse between request and response (B4 @ frame 150)
  const arrowProgress = spring({
    frame: frame - 150,
    fps,
    config: { damping: 200 },
    durationInFrames: 26,
  });
  const arrowOpacity = interpolate(arrowProgress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        flex: 1,
        padding: "22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <SidebarLabel text="function_call" />
      <CodeBlock>
        <Typewriter
          text={`{
  "name": "get_sentry_issues",
  "arguments": {
    "query": "error",
    "since": "24h"
  }
}`}
          startAt={84}
          charsPerSecond={32}
          showCursor={false}
        />
      </CodeBlock>

      <div
        style={{
          opacity: arrowOpacity,
          textAlign: "center",
          fontSize: 24,
          color: lightTheme.accent,
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        ↓
      </div>

      <SidebarLabel text="function_response" />
      <CodeBlock>
        <Typewriter
          text={`{
  "issues": [
    { "id": "err_847",
      "count": 1284 },
    { "id": "err_531",
      "count": 902 }
  ]
}`}
          startAt={170}
          charsPerSecond={32}
          showCursor={false}
        />
      </CodeBlock>
    </div>
  );
};

const SidebarLabel: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      fontSize: 12,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: lightTheme.inkSoft,
      fontWeight: 700,
    }}
  >
    {text}
  </div>
);

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: lightTheme.file,
      border: `1.5px solid ${lightTheme.line}`,
      borderRadius: 10,
      padding: "12px 14px",
      fontFamily: monoFontFamily,
      fontSize: 13,
      lineHeight: 1.45,
      color: lightTheme.ink,
      whiteSpace: "pre-wrap",
      minHeight: 110,
    }}
  >
    {children}
  </div>
);
