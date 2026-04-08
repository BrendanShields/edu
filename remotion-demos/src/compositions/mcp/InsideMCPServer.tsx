import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { darkTheme, radii } from "../../theme";
import { ThemeProvider } from "../../theme-context";
import { fontFamily, monoFontFamily } from "../../fonts";
import { EpisodeTitle } from "../../components/EpisodeTitle";
import { CaptionPill } from "../../components/CaptionPill";
import { ChatWindow } from "../../components/ChatWindow";
import { ConceptCard } from "../../components/ConceptCard";
import { Typewriter } from "../../components/Typewriter";
import { BeatProps, FreezeAtBeat } from "./beatHelpers";

// E4 — Inside an MCP Server (dark theme)
// 480 frames at 30fps (16s)
// Handoff from E3: Sentry card at (1500, 130) scales up and re-centers as the "we're going inside" gesture.

export const BEAT_FRAMES = [0, 45, 120, 180, 250, 330, 420, 460] as const;

export const InsideMCPServer: React.FC<BeatProps> = ({ activeBeat }) => (
  <ThemeProvider value={darkTheme}>
    <FreezeAtBeat beats={BEAT_FRAMES} activeBeat={activeBeat}>
      <InsideMCPServerInner />
    </FreezeAtBeat>
  </ThemeProvider>
);

const InsideMCPServerInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const outro = spring({
    frame: frame - (durationInFrames - fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);

  // Match-cut intro: Sentry card grows from E3's position to canvas center, then dissolves.
  const matchCut = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  // Card travels from (1500, 130) to (960, 540).
  const startCx = 1500 + 130; // card center x at start (left + width/2)
  const startCy = 130 + 100;
  const targetCx = 960;
  const targetCy = 540;
  const cardCx = interpolate(matchCut, [0, 1], [startCx, targetCx]);
  const cardCy = interpolate(matchCut, [0, 1], [startCy, targetCy]);
  const cardScale = interpolate(matchCut, [0, 1], [1, 3]);
  // Card dissolves between frames 30-50.
  const cardDissolve = interpolate(frame, [30, 50], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Main diagram fades in from frame 45.
  const diagramAppear = spring({
    frame: frame - 45,
    fps,
    config: { damping: 200 },
    durationInFrames: 26,
  });
  const diagramOpacity = interpolate(diagramAppear, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: darkTheme.bg,
        fontFamily,
        opacity: outroOpacity,
      }}
    >
      {/* Match-cut card */}
      <div
        style={{
          position: "absolute",
          left: cardCx - 130,
          top: cardCy - 100,
          width: 260,
          opacity: cardDissolve,
          transform: `scale(${cardScale})`,
          transformOrigin: "center center",
        }}
      >
        <ConceptCard
          icon="🐛"
          title="Sentry"
          body="Errors & traces"
          appearAt={-30}
          width={260}
          highlight
        />
      </div>

      <EpisodeTitle
        eyebrow="MCP · episode 4"
        title="Inside an MCP Server"
        appearAt={45}
        exitAt={420}
      />

      {/* Main diagram layer */}
      <div style={{ opacity: diagramOpacity }}>
        {/* Pipes (SVG) sit behind everything */}
        <svg
          width={1920}
          height={1080}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* Pipe 1: chat → server */}
          <Pipe
            x1={540}
            y1={420}
            x2={780}
            y2={500}
            appearAt={120}
            stroke={darkTheme.accent}
          />
          {/* Pipe 2: server → Sentry API */}
          <Pipe
            x1={1140}
            y1={500}
            x2={1480}
            y2={520}
            appearAt={180}
            stroke={darkTheme.accent}
          />
        </svg>

        {/* Chat (top-left) */}
        <div style={{ position: "absolute", left: 90, top: 220 }}>
          <ChatWindow
            appearAt={45}
            width={460}
            height={400}
            title="agent"
            messages={[
              {
                role: "user",
                content: "what errors spiked today?",
                appearAt: 60,
                charsPerSecond: 28,
              },
              {
                role: "assistant",
                content:
                  "847 ReferenceErrors in /api/users.ts since this morning.",
                appearAt: 250,
                charsPerSecond: 28,
              },
            ]}
          />
        </div>

        {/* MCP Server box (center) */}
        <ServerBox
          left={780}
          top={380}
          width={360}
          height={240}
          appearAt={120}
        />

        {/* Sentry API label (right) */}
        <ApiLabel
          left={1480}
          top={460}
          width={300}
          height={140}
          title="Sentry API"
          subtitle="HTTPS"
          appearAt={180}
        />

        {/* Three primitive cards (bottom) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 110,
            display: "flex",
            justifyContent: "center",
            gap: 36,
          }}
        >
          <ConceptCard
            icon="🛠"
            title="Tools"
            body="Functions the agent calls"
            appearAt={330}
            width={300}
          />
          <ConceptCard
            icon="📄"
            title="Resources"
            body="Data the agent reads"
            appearAt={345}
            width={300}
          />
          <ConceptCard
            icon="💬"
            title="Prompts"
            body="Templates the agent uses"
            appearAt={360}
            width={300}
          />
        </div>

        <CaptionPill
          text="Tools, resources, prompts. That's the whole protocol."
          appearAt={420}
        />
      </div>
    </AbsoluteFill>
  );
};

const Pipe: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  appearAt: number;
  stroke: string;
}> = ({ x1, y1, x2, y2, appearAt, stroke }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const draw = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const length = Math.hypot(x2 - x1, y2 - y1);
  const dashOffset = interpolate(draw, [0, 1], [length, 0]);

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeDasharray={length}
      strokeDashoffset={dashOffset}
    />
  );
};

const ServerBox: React.FC<{
  left: number;
  top: number;
  width: number;
  height: number;
  appearAt: number;
}> = ({ left, top, width, height, appearAt }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 26,
  });
  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [12, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        opacity,
        transform: `translateY(${translateY}px)`,
        background: darkTheme.file,
        border: `2px solid ${darkTheme.accent}`,
        borderRadius: radii.lg,
        padding: "22px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: `0 0 0 6px ${darkTheme.accentSoft}, 0 32px 60px -28px rgba(0,0,0,0.6)`,
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          color: darkTheme.inkSoft,
          fontWeight: 700,
        }}
      >
        mcp server
      </div>
      <div
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: darkTheme.ink,
          letterSpacing: -0.5,
        }}
      >
        sentry-mcp
      </div>
      <div
        style={{
          fontFamily: monoFontFamily,
          fontSize: 14,
          color: darkTheme.inkSoft,
          marginTop: 6,
          padding: "8px 12px",
          background: darkTheme.bg,
          borderRadius: 8,
          border: `1px solid ${darkTheme.line}`,
        }}
      >
        <Typewriter
          text={`stdio · JSON-RPC 2.0`}
          startAt={140}
          charsPerSecond={28}
          showCursor={false}
        />
      </div>
      <div
        style={{
          fontSize: 14,
          color: darkTheme.accent,
          fontWeight: 600,
          marginTop: 4,
        }}
      >
        translates tools → API calls
      </div>
    </div>
  );
};

const ApiLabel: React.FC<{
  left: number;
  top: number;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  appearAt: number;
}> = ({ left, top, width, height, title, subtitle, appearAt }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 26,
  });
  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateX = interpolate(enter, [0, 1], [12, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        opacity,
        transform: `translateX(${translateX}px)`,
        background: darkTheme.file,
        border: `1.5px solid ${darkTheme.lineStrong}`,
        borderRadius: radii.lg,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          color: darkTheme.inkSoft,
          fontWeight: 700,
        }}
      >
        external service
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: darkTheme.ink,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: monoFontFamily,
          fontSize: 14,
          color: darkTheme.inkSoft,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};
