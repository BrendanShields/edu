import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { theme } from "../theme";
import { fontFamily, monoFontFamily } from "../fonts";
import { FileTree } from "../components/FileTree";
import { BrowserFrame } from "../components/BrowserFrame";
import { Typewriter } from "../components/Typewriter";

// Composition timeline (at 30 fps):
//  0–60   Title fades in
//  30–150 Project root + app/ + page.tsx land into the file tree
// 120–270 Browser slides up, URL "/" types in
// 240–360 dashboard/ folder + page.tsx slide in, URL morphs to "/dashboard"
// 330–420 Caption fades in then everything holds, then exits.

export const CreatingRoutes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Outro fade for the whole scene.
  const outro = spring({
    frame: frame - (durationInFrames - 1 * fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);

  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily, opacity: outroOpacity }}>
      <Sequence from={0} durationInFrames={2 * fps} layout="none">
        <Title />
      </Sequence>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 80,
          paddingTop: 120,
        }}
      >
        <FileTreeStage />
        <BrowserStage />
      </AbsoluteFill>

      <Caption />
    </AbsoluteFill>
  );
};

const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 20 });
  const exit = spring({
    frame: frame - 1.4 * fps,
    fps,
    config: { damping: 200 },
    durationInFrames: 16,
  });
  const opacity = interpolate(enter - exit, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [16, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 56,
        left: 0,
        right: 0,
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: theme.inkSoft,
          fontWeight: 600,
        }}
      >
        Next.js Explained
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 56,
          color: theme.ink,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        Creating Routes
      </div>
    </div>
  );
};

const FileTreeStage: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <FileTree
      nodes={[
        {
          kind: "folder",
          name: "my-app",
          appearAt: Math.round(1.0 * fps),
          children: [
            {
              kind: "folder",
              name: "app",
              appearAt: Math.round(1.5 * fps),
              children: [
                { kind: "file", name: "page.tsx", appearAt: Math.round(2.0 * fps) },
                {
                  kind: "folder",
                  name: "dashboard",
                  appearAt: Math.round(7.5 * fps),
                  children: [
                    {
                      kind: "file",
                      name: "page.tsx",
                      appearAt: Math.round(8.2 * fps),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  );
};

const BrowserStage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // The URL morph: type "/" first, then later replace with "/dashboard"
  const dashStart = Math.round(8.6 * fps);
  const showDash = frame >= dashStart;

  return (
    <BrowserFrame
      appearAt={Math.round(4.0 * fps)}
      width={720}
      height={460}
      url={
        showDash ? (
          <Typewriter
            text="/dashboard"
            startAt={dashStart}
            charsPerSecond={20}
            showCursor
          />
        ) : (
          <Typewriter
            text="/"
            startAt={Math.round(5.0 * fps)}
            charsPerSecond={14}
            showCursor
          />
        )
      }
    >
      <BrowserContent showDash={showDash} dashStart={dashStart} />
    </BrowserFrame>
  );
};

const BrowserContent: React.FC<{ showDash: boolean; dashStart: number }> = ({
  showDash,
  dashStart,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const homeShow = spring({
    frame: frame - Math.round(5.4 * fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });
  const homeOpacity = showDash ? 0 : interpolate(homeShow, [0, 1], [0, 1]);

  const dashShow = spring({
    frame: frame - (dashStart + 12),
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });
  const dashOpacity = showDash ? interpolate(dashShow, [0, 1], [0, 1]) : 0;

  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: homeOpacity,
          fontFamily,
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 700, color: theme.ink }}>
          Welcome home.
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            color: theme.inkSoft,
            fontFamily: monoFontFamily,
          }}
        >
          app/page.tsx
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: dashOpacity,
          fontFamily,
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 700, color: theme.ink }}>
          Dashboard
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            color: theme.inkSoft,
            fontFamily: monoFontFamily,
          }}
        >
          app/dashboard/page.tsx
        </div>
      </div>
    </div>
  );
};

const Caption: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const enter = spring({
    frame: frame - Math.round(10 * fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 22,
  });
  const exit = spring({
    frame: frame - (durationInFrames - 1.5 * fps),
    fps,
    config: { damping: 200 },
    durationInFrames: 16,
  });
  const opacity = interpolate(enter - exit, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(enter, [0, 1], [12, 0]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 70,
        left: 0,
        right: 0,
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "14px 26px",
          borderRadius: 999,
          background: theme.accentSoft,
          color: theme.accent,
          fontWeight: 600,
          fontSize: 22,
        }}
      >
        Folders define routes. Files render them.
      </div>
    </div>
  );
};
