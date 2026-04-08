import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { fontFamily, monoFontFamily } from "../fonts";
import { radii } from "../theme";
import { Typewriter } from "./Typewriter";

export type ChatMessage = {
  role: "user" | "assistant" | "tool";
  content: string;
  appearAt: number;
  // Optional: render content as a typewriter starting at this offset (frames after appearAt).
  // Defaults to 6 frames after the bubble springs in.
  typewriterOffset?: number;
  charsPerSecond?: number;
};

type Props = {
  messages: ChatMessage[];
  appearAt: number;
  sidebar?: React.ReactNode;
  width?: number;
  height?: number;
  title?: string;
};

export const ChatWindow: React.FC<Props> = ({
  messages,
  appearAt,
  sidebar,
  width = 720,
  height = 520,
  title = "chat",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 28,
  });

  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [40, 0]);
  const scale = interpolate(enter, [0, 1], [0.94, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        transformOrigin: "center bottom",
        display: "flex",
        background: theme.file,
        border: `2px solid ${theme.line}`,
        borderRadius: radii.lg,
        boxShadow: "0 40px 80px -40px rgba(27, 26, 25, 0.25)",
        overflow: "hidden",
        fontFamily,
      }}
    >
      {/* Main chat column */}
      <div
        style={{
          width,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header title={title} />
        <div
          style={{
            flex: 1,
            height: height - 70,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            overflow: "hidden",
          }}
        >
          {messages.map((msg, i) => (
            <Bubble key={i} message={msg} />
          ))}
        </div>
      </div>

      {/* Optional sidebar slot */}
      {sidebar ? (
        <div
          style={{
            width: 380,
            borderLeft: `1.5px solid ${theme.line}`,
            background: theme.bg,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {sidebar}
        </div>
      ) : null}
    </div>
  );
};

const Header: React.FC<{ title: string }> = ({ title }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 22px",
        borderBottom: `1.5px solid ${theme.line}`,
        background: theme.bg,
      }}
    >
      <Dot color="#FF6058" />
      <Dot color="#FFBE2E" />
      <Dot color="#28C941" />
      <span
        style={{
          marginLeft: 10,
          fontSize: 16,
          color: theme.inkSoft,
          fontWeight: 500,
        }}
      >
        {title}
      </span>
    </div>
  );
};

const Dot: React.FC<{ color: string }> = ({ color }) => (
  <div
    style={{ width: 14, height: 14, borderRadius: 999, background: color }}
  />
);

const Bubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();

  const enter = spring({
    frame: frame - message.appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 18,
  });
  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [10, 0]);

  const isUser = message.role === "user";
  const isTool = message.role === "tool";

  const align = isUser ? "flex-end" : "flex-start";
  const bg = isUser
    ? theme.accentSoft
    : isTool
      ? theme.highlight
      : theme.file;
  const color = isUser ? theme.accent : theme.ink;
  const border = isUser ? "transparent" : theme.line;

  const typewriterStartAt =
    message.appearAt + (message.typewriterOffset ?? 6);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        justifyContent: align,
      }}
    >
      <div
        style={{
          maxWidth: "82%",
          padding: "16px 22px",
          borderRadius: radii.lg,
          background: bg,
          color,
          fontSize: 24,
          lineHeight: 1.4,
          fontWeight: isUser ? 600 : 500,
          border: `1.5px solid ${border}`,
          fontFamily: isTool ? monoFontFamily : fontFamily,
        }}
      >
        <Typewriter
          text={message.content}
          startAt={typewriterStartAt}
          charsPerSecond={message.charsPerSecond ?? 24}
          showCursor={false}
        />
      </div>
    </div>
  );
};
