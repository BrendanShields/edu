import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  text: string;
  startAt: number;
  charsPerSecond?: number;
  style?: React.CSSProperties;
  showCursor?: boolean;
};

export const Typewriter: React.FC<Props> = ({
  text,
  startAt,
  charsPerSecond = 18,
  style,
  showCursor = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const elapsed = Math.max(0, frame - startAt);
  const charsToShow = Math.min(
    text.length,
    Math.floor((elapsed / fps) * charsPerSecond),
  );
  const visible = text.slice(0, charsToShow);

  // Blinking cursor: 2 blinks per second.
  const cursorOn = Math.floor((frame / fps) * 2) % 2 === 0;

  return (
    <span style={style}>
      {visible}
      {showCursor ? (
        <span
          style={{
            display: "inline-block",
            width: "0.6ch",
            opacity: cursorOn ? 1 : 0,
            marginLeft: 1,
          }}
        >
          |
        </span>
      ) : null}
    </span>
  );
};
