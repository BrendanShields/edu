import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Easing,
} from 'remotion';

// ------------------------------------------------------------------
// Shared constants
// ------------------------------------------------------------------
const BG = '#0A0A0A';
const SURFACE = '#141414';
const BORDER = '#2A2A2A';
const ACCENT = '#FF6B35';
const GREEN = '#4ADE80';
const BLUE = '#79C0FF';
const MUTED = '#666666';
const TEXT = '#FAFAFA';
const TEXT_SEC = '#A0A0A0';

// Scene durations (frames at 30fps)
const AGENT_DUR = 50;       // Scene 1 — agent appears
const READ_DUR = 80;        // Scene 2 — reading
const THINK_DUR = 70;       // Scene 3 — thinking
const ACT_DUR = 80;         // Scene 4 — acting
const VERIFY_DUR = 70;      // Scene 5 — verifying
const ZOOM_DUR = 90;        // Scene 6 — zoom out to cycle
const HOLD_DUR = 60;        // Hold on the final diagram

export const TOTAL_FRAMES = AGENT_DUR + READ_DUR + THINK_DUR + ACT_DUR + VERIFY_DUR + ZOOM_DUR + HOLD_DUR;

// ------------------------------------------------------------------
// Scene 1 — Agent appears
// ------------------------------------------------------------------
function SceneAgent() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const glowOpacity = interpolate(frame, [20, 40], [0, 0.6], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const labelOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', width: 180, height: 180, borderRadius: '50%',
        background: `radial-gradient(circle, ${ACCENT}40 0%, transparent 70%)`,
        opacity: glowOpacity,
      }} />
      {/* Agent circle */}
      <div style={{
        width: 100, height: 100, borderRadius: '50%',
        background: `linear-gradient(135deg, ${SURFACE} 0%, #1a1a1a 100%)`,
        border: `2px solid ${ACCENT}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${scale})`,
        boxShadow: `0 0 40px ${ACCENT}30`,
      }}>
        <span style={{ fontSize: 40 }}>🤖</span>
      </div>
      {/* Label */}
      <div style={{
        position: 'absolute', bottom: 120,
        fontSize: 16, fontWeight: 600, color: TEXT, letterSpacing: '0.05em',
        opacity: labelOpacity,
        fontFamily: 'Inter, sans-serif',
      }}>
        AI Coding Agent
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene 2 — Read: gathering context
// ------------------------------------------------------------------
function SceneRead() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const agentScale = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 15 });

  const files = [
    { name: 'auth.test.ts', icon: '📄', delay: 5 },
    { name: 'src/auth/handler.ts', icon: '📄', delay: 15 },
    { name: 'package.json', icon: '📦', delay: 25 },
    { name: 'git log --oneline', icon: '🔀', delay: 35 },
    { name: '.env.local', icon: '🔒', delay: 45 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Agent — smaller, top area */}
      <div style={{
        position: 'absolute', top: 50,
        width: 60, height: 60, borderRadius: '50%',
        background: SURFACE, border: `2px solid ${ACCENT}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${agentScale})`,
      }}>
        <span style={{ fontSize: 26 }}>🤖</span>
      </div>

      {/* Label */}
      <div style={{
        position: 'absolute', top: 120, fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: GREEN,
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
      }}>
        Reading Context
      </div>

      {/* Files flowing in */}
      {files.map((file, i) => {
        const progress = spring({ frame: frame - file.delay, fps, config: { damping: 15, stiffness: 80 } });
        const opacity = interpolate(frame - file.delay, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        const y = interpolate(progress, [0, 1], [40, 0]);
        const checkOpacity = interpolate(frame - file.delay, [15, 25], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

        return (
          <div key={file.name} style={{
            position: 'absolute', top: 155 + i * 42,
            left: 50, right: 50,
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 14px', borderRadius: 10,
            background: SURFACE, border: `1px solid ${BORDER}`,
            opacity, transform: `translateY(${y}px)`,
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            <span style={{ fontSize: 14 }}>{file.icon}</span>
            <span style={{ fontSize: 12, color: TEXT_SEC, flex: 1 }}>{file.name}</span>
            <span style={{ fontSize: 12, color: GREEN, opacity: checkOpacity }}>✓</span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene 3 — Think: analysing
// ------------------------------------------------------------------
function SceneThink() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const agentScale = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 15 });
  const pulsePhase = (frame % 40) / 40;
  const pulseOpacity = interpolate(pulsePhase, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  const thoughts = [
    { text: 'Off-by-one in validation logic', delay: 10, color: BLUE },
    { text: 'Token expiry check is wrong', delay: 25, color: ACCENT },
    { text: 'Fix: adjust boundary condition', delay: 40, color: GREEN },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Thinking pulse ring */}
      <div style={{
        position: 'absolute', top: 30, width: 90, height: 90, borderRadius: '50%',
        border: `2px solid ${BLUE}`, opacity: pulseOpacity,
        transform: `scale(${1 + pulsePhase * 0.3})`,
      }} />

      {/* Agent */}
      <div style={{
        position: 'absolute', top: 45, width: 60, height: 60, borderRadius: '50%',
        background: SURFACE, border: `2px solid ${BLUE}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${agentScale})`,
      }}>
        <span style={{ fontSize: 26 }}>🧠</span>
      </div>

      <div style={{
        position: 'absolute', top: 115, fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: BLUE,
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
      }}>
        Analyzing
      </div>

      {/* Thought bubbles */}
      {thoughts.map((t, i) => {
        const progress = spring({ frame: frame - t.delay, fps, config: { damping: 18 } });
        const opacity = interpolate(frame - t.delay, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        const x = interpolate(progress, [0, 1], [-30, 0]);

        return (
          <div key={i} style={{
            position: 'absolute', top: 155 + i * 60,
            left: 40, right: 40,
            padding: '14px 18px', borderRadius: 12,
            background: SURFACE, border: `1px solid ${t.color}30`,
            borderLeft: `3px solid ${t.color}`,
            opacity, transform: `translateX(${x}px)`,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12, color: TEXT_SEC, lineHeight: '1.5',
          }}>
            {t.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene 4 — Act: making changes
// ------------------------------------------------------------------
function SceneAct() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const agentScale = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 15 });

  const codeLines = [
    { text: '  if (token.expiry <= now) {', type: 'old' as const, delay: 10 },
    { text: '  if (token.expiry < now) {', type: 'new' as const, delay: 25 },
    { text: '    return refreshToken(user);', type: 'ctx' as const, delay: 35 },
    { text: '  }', type: 'ctx' as const, delay: 40 },
  ];

  const terminalLines = [
    { text: '$ npm test -- auth.test.ts', delay: 50 },
    { text: 'Running 4 tests...', delay: 60 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Agent */}
      <div style={{
        position: 'absolute', top: 45, width: 60, height: 60, borderRadius: '50%',
        background: SURFACE, border: `2px solid ${ACCENT}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${agentScale})`,
      }}>
        <span style={{ fontSize: 26 }}>✏️</span>
      </div>

      <div style={{
        position: 'absolute', top: 115, fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: ACCENT,
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
      }}>
        Making Changes
      </div>

      {/* Code editor mock */}
      <div style={{
        position: 'absolute', top: 145, left: 30, right: 30,
        background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 12,
        padding: '12px 0', overflow: 'hidden',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
      }}>
        <div style={{ padding: '0 14px 8px', fontSize: 10, color: MUTED, borderBottom: `1px solid ${BORDER}`, marginBottom: 8 }}>
          src/auth/handler.ts
        </div>
        {codeLines.map((line, i) => {
          const opacity = interpolate(frame - line.delay, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          const bg = line.type === 'old' ? '#ff000015' : line.type === 'new' ? '#00ff0015' : 'transparent';
          const prefix = line.type === 'old' ? '−' : line.type === 'new' ? '+' : ' ';
          const prefixColor = line.type === 'old' ? '#f87171' : line.type === 'new' ? GREEN : MUTED;

          return (
            <div key={i} style={{
              padding: '3px 14px', background: bg, opacity,
              display: 'flex', gap: 8, color: TEXT_SEC,
              textDecoration: line.type === 'old' ? 'line-through' : 'none',
            }}>
              <span style={{ color: prefixColor, width: 10 }}>{prefix}</span>
              <span>{line.text}</span>
            </div>
          );
        })}
      </div>

      {/* Terminal */}
      <div style={{
        position: 'absolute', bottom: 40, left: 30, right: 30,
        background: '#0d0d0d', border: `1px solid ${BORDER}`, borderRadius: 12,
        padding: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
      }}>
        {terminalLines.map((line, i) => {
          const opacity = interpolate(frame - line.delay, [0, 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <div key={i} style={{ color: TEXT_SEC, opacity, marginBottom: 4 }}>{line.text}</div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene 5 — Verify: checking results
// ------------------------------------------------------------------
function SceneVerify() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const agentScale = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 15 });

  const tests = [
    { name: 'validates expired tokens', delay: 10 },
    { name: 'refreshes on boundary', delay: 20 },
    { name: 'rejects tampered tokens', delay: 30 },
    { name: 'handles clock skew', delay: 40 },
  ];

  const allPassDelay = 55;
  const allPassOpacity = interpolate(frame - allPassDelay, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const allPassScale = spring({ frame: frame - allPassDelay, fps, config: { damping: 10, stiffness: 120 } });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Agent */}
      <div style={{
        position: 'absolute', top: 45, width: 60, height: 60, borderRadius: '50%',
        background: SURFACE, border: `2px solid ${GREEN}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${agentScale})`,
      }}>
        <span style={{ fontSize: 26 }}>🔍</span>
      </div>

      <div style={{
        position: 'absolute', top: 115, fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: GREEN,
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
      }}>
        Verifying
      </div>

      {/* Test results */}
      <div style={{
        position: 'absolute', top: 150, left: 30, right: 30,
        background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 12,
        padding: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
      }}>
        {tests.map((test, i) => {
          const opacity = interpolate(frame - test.delay, [0, 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          const checkScale = spring({ frame: frame - test.delay - 5, fps, config: { damping: 8, stiffness: 150 } });

          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 0', opacity, color: TEXT_SEC,
            }}>
              <span style={{ color: GREEN, transform: `scale(${checkScale})`, display: 'inline-block' }}>✓</span>
              <span>{test.name}</span>
            </div>
          );
        })}
      </div>

      {/* All pass badge */}
      <div style={{
        position: 'absolute', bottom: 60,
        padding: '12px 24px', borderRadius: 99,
        background: `${GREEN}15`, border: `1px solid ${GREEN}40`,
        color: GREEN, fontSize: 14, fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        opacity: allPassOpacity,
        transform: `scale(${allPassScale})`,
      }}>
        4/4 Tests Passing
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene 6 — Zoom out to abstract cycle diagram
// ------------------------------------------------------------------
function SceneZoomOut() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // The previous scene shrinks down into the center, then the cycle appears
  const shrink = interpolate(frame, [0, 25], [1, 0.3], {
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.quad),
  });
  const shrinkOpacity = interpolate(frame, [15, 30], [1, 0], { extrapolateRight: 'clamp' });

  const steps = [
    { label: 'Read', desc: 'files, errors, context', color: GREEN, angle: -90 },
    { label: 'Think', desc: 'analyze, plan approach', color: BLUE, angle: 0 },
    { label: 'Act', desc: 'edit, run commands', color: ACCENT, angle: 90 },
    { label: 'Verify', desc: 'test, check output', color: GREEN, angle: 180 },
  ];

  const radius = 100;

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Previous scene fading out */}
      <div style={{
        position: 'absolute', opacity: shrinkOpacity,
        transform: `scale(${shrink})`,
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: SURFACE, border: `2px solid ${GREEN}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 26 }}>🔍</span>
        </div>
      </div>

      {/* Cycle diagram */}
      {steps.map((step, i) => {
        const delay = 25 + i * 12;
        const appear = spring({ frame: frame - delay, fps, config: { damping: 14 } });
        const angleRad = (step.angle * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        return (
          <div key={step.label} style={{
            position: 'absolute',
            left: '50%', top: '50%',
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${appear})`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            width: 100,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `${step.color}15`, border: `2px solid ${step.color}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: step.color,
              fontFamily: 'Inter, sans-serif',
            }}>
              {i + 1}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, fontFamily: 'Inter, sans-serif' }}>{step.label}</div>
            <div style={{ fontSize: 9, color: MUTED, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>{step.desc}</div>
          </div>
        );
      })}

      {/* Center agent */}
      {(() => {
        const centerAppear = spring({ frame: frame - 70, fps, config: { damping: 12 } });
        return (
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: SURFACE, border: `2px solid ${ACCENT}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: `scale(${centerAppear})`,
            zIndex: 10,
          }}>
            <span style={{ fontSize: 22 }}>🤖</span>
          </div>
        );
      })()}

      {/* Cycle arrows */}
      {(() => {
        const arrowOpacity = interpolate(frame, [65, 80], [0, 0.5], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        return (
          <svg width="280" height="280" style={{ position: 'absolute', opacity: arrowOpacity }} viewBox="-140 -140 280 280">
            <circle cx={0} cy={0} r={radius - 10} fill="none" stroke={BORDER} strokeWidth={1.5} strokeDasharray="6 4" />
            {/* Arrow heads at quarter points */}
            {[45, 135, 225, 315].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const ax = Math.cos(rad) * (radius - 10);
              const ay = Math.sin(rad) * (radius - 10);
              return (
                <circle key={deg} cx={ax} cy={ay} r={3} fill={ACCENT} />
              );
            })}
          </svg>
        );
      })()}

      {/* "repeat until done" label */}
      <div style={{
        position: 'absolute', bottom: 30,
        fontSize: 11, color: ACCENT, fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [75, 90], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
      }}>
        ↻ repeat until done
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Main composition
// ------------------------------------------------------------------
export const AgenticLoopAnimation = () => {
  const frame = useCurrentFrame();

  // Cross-fade opacity between scenes
  const sceneStarts = [0, AGENT_DUR, AGENT_DUR + READ_DUR, AGENT_DUR + READ_DUR + THINK_DUR, AGENT_DUR + READ_DUR + THINK_DUR + ACT_DUR, AGENT_DUR + READ_DUR + THINK_DUR + ACT_DUR + VERIFY_DUR];
  const fadeDuration = 12;

  function sceneOpacity(sceneIndex: number) {
    const start = sceneStarts[sceneIndex];
    const nextStart = sceneIndex < sceneStarts.length - 1
      ? sceneStarts[sceneIndex + 1]
      : TOTAL_FRAMES;

    // Fade in
    const fadeIn = sceneIndex === 0
      ? 1
      : interpolate(frame, [start, start + fadeDuration], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    // Fade out (not for the last scene)
    const fadeOut = sceneIndex >= sceneStarts.length - 1
      ? 1
      : interpolate(frame, [nextStart - fadeDuration, nextStart], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    return fadeIn * fadeOut;
  }

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <Sequence from={sceneStarts[0]} durationInFrames={AGENT_DUR + fadeDuration} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(0) }}><SceneAgent /></div>
      </Sequence>
      <Sequence from={sceneStarts[1] - fadeDuration} durationInFrames={READ_DUR + fadeDuration * 2} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(1) }}><SceneRead /></div>
      </Sequence>
      <Sequence from={sceneStarts[2] - fadeDuration} durationInFrames={THINK_DUR + fadeDuration * 2} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(2) }}><SceneThink /></div>
      </Sequence>
      <Sequence from={sceneStarts[3] - fadeDuration} durationInFrames={ACT_DUR + fadeDuration * 2} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(3) }}><SceneAct /></div>
      </Sequence>
      <Sequence from={sceneStarts[4] - fadeDuration} durationInFrames={VERIFY_DUR + fadeDuration * 2} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(4) }}><SceneVerify /></div>
      </Sequence>
      <Sequence from={sceneStarts[5] - fadeDuration} durationInFrames={ZOOM_DUR + HOLD_DUR + fadeDuration} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: sceneOpacity(5) }}><SceneZoomOut /></div>
      </Sequence>
    </AbsoluteFill>
  );
};
