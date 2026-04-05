import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Img,
  Easing,
} from 'remotion';

const BG = '#0A0A0A';
const SURFACE = '#141414';
const BORDER = '#2A2A2A';
const ACCENT = '#FF6B35';
const MUTED = '#666666';
const TEXT = '#FAFAFA';
const TEXT_SEC = '#A0A0A0';

// Scene durations (frames at 30fps)
const CHATBOT_DUR = 170;     // "before" — copy-paste dance (~5.7s)
const TRANSITION_DUR = 45;   // morph between states (~1.5s)
const AGENT_DUR = 170;       // "after" — agent at computer (~5.7s)
const HOLD_DUR = 60;         // hold before looping (~2s)

export const TOTAL_FRAMES = CHATBOT_DUR + TRANSITION_DUR + AGENT_DUR + HOLD_DUR;

// If you have a pair-programming image/video, place it in public/ and
// update this path. Otherwise the composition uses animated illustrations.
const PAIR_PROG_IMAGE: string | null = null; // e.g. '/pair-programming.jpg'

// ------------------------------------------------------------------
// Scene A — The chatbot copy-paste loop
// ------------------------------------------------------------------
function SceneChatbot() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animated clipboard bouncing back and forth
  const loopFrame = frame % 75; // one copy-paste round (~2.5s)
  const clipX = interpolate(loopFrame, [0, 25, 50, 75], [-60, 60, -60, 60]);
  const clipY = interpolate(loopFrame, [0, 25, 50, 75], [0, -8, 0, -8]);

  const labelOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Label */}
      <div style={{
        position: 'absolute', top: 40,
        fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const,
        letterSpacing: '0.1em', color: MUTED, opacity: labelOpacity,
        fontFamily: 'Inter, sans-serif',
      }}>
        The Chatbot Way
      </div>

      {/* Two panels: You ↔ Chatbot */}
      <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        {/* Your editor */}
        <div style={{
          width: 120, height: 140, borderRadius: 14,
          background: SURFACE, border: `1px solid ${BORDER}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 28 }}>👤</span>
          <span style={{ fontSize: 11, color: TEXT_SEC, fontFamily: 'Inter, sans-serif' }}>Your Editor</span>
          {/* Mini code lines */}
          {[0.6, 0.8, 0.5, 0.7].map((w, i) => (
            <div key={i} style={{
              width: `${w * 80}%`, height: 3, borderRadius: 2,
              background: `${BORDER}`,
            }} />
          ))}
        </div>

        {/* Clipboard bouncing */}
        <div style={{
          transform: `translate(${clipX}px, ${clipY}px)`,
          fontSize: 20, opacity: 0.8,
        }}>
          📋
        </div>

        {/* Chatbot */}
        <div style={{
          width: 120, height: 140, borderRadius: 14,
          background: SURFACE, border: `1px solid ${BORDER}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 28 }}>💬</span>
          <span style={{ fontSize: 11, color: TEXT_SEC, fontFamily: 'Inter, sans-serif' }}>Chatbot</span>
          {/* Message bubbles */}
          {[0.7, 0.9, 0.6].map((w, i) => (
            <div key={i} style={{
              width: `${w * 80}%`, height: 3, borderRadius: 2,
              background: `${BORDER}`,
            }} />
          ))}
        </div>
      </div>

      {/* Frustration indicator */}
      <div style={{
        position: 'absolute', bottom: 50,
        fontSize: 12, color: '#f87171', fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
      }}>
        Copy → Paste → Fail → Repeat…
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Scene B — The agent at your computer
// ------------------------------------------------------------------
function SceneAgent() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Agent activity indicators appearing one by one
  const actions = [
    { text: 'Reads your files', icon: '📄', delay: 20 },
    { text: 'Edits your code', icon: '✏️', delay: 50 },
    { text: 'Runs your tests', icon: '⚡', delay: 80 },
    { text: 'Verifies the fix', icon: '✅', delay: 110 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: 'center', alignItems: 'center' }}>
      {/* Optional background image */}
      {PAIR_PROG_IMAGE && (
        <Img
          src={PAIR_PROG_IMAGE}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.15, filter: 'blur(2px)',
          }}
        />
      )}

      {/* Label */}
      <div style={{
        position: 'absolute', top: 40,
        fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const,
        letterSpacing: '0.1em', color: ACCENT, opacity: labelOpacity,
        fontFamily: 'Inter, sans-serif',
      }}>
        The Agent Way
      </div>

      {/* Unified workspace */}
      <div style={{
        width: 260, borderRadius: 16,
        background: SURFACE, border: `1px solid ${ACCENT}40`,
        padding: '20px 24px',
        boxShadow: `0 0 60px ${ACCENT}10`,
      }}>
        {/* Agent + your project together */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
          paddingBottom: 14, borderBottom: `1px solid ${BORDER}`,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: `${ACCENT}15`, border: `2px solid ${ACCENT}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 20 }}>🤖</span>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, fontFamily: 'Inter, sans-serif' }}>Agent at your computer</div>
            <div style={{ fontSize: 10, color: MUTED, fontFamily: 'Inter, sans-serif' }}>Working in your project</div>
          </div>
        </div>

        {/* Actions */}
        {actions.map((action, i) => {
          const appear = spring({ frame: frame - action.delay, fps, config: { damping: 15 } });
          const opacity = interpolate(frame - action.delay, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 0', opacity,
              transform: `translateX(${interpolate(appear, [0, 1], [20, 0])}px)`,
            }}>
              <span style={{ fontSize: 14 }}>{action.icon}</span>
              <span style={{ fontSize: 12, color: TEXT_SEC, fontFamily: 'Inter, sans-serif' }}>{action.text}</span>
            </div>
          );
        })}
      </div>

      {/* Result */}
      <div style={{
        position: 'absolute', bottom: 45,
        fontSize: 12, color: ACCENT, fontWeight: 500, fontFamily: 'Inter, sans-serif',
        opacity: interpolate(frame, [130, 150], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
      }}>
        One prompt. Two minutes. Done.
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------
// Main composition
// ------------------------------------------------------------------
export const MentalShiftAnimation = () => {
  const frame = useCurrentFrame();

  // Chatbot scene
  const chatbotOpacity = interpolate(
    frame,
    [0, CHATBOT_DUR - 15, CHATBOT_DUR],
    [1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  // Agent scene
  const agentStart = CHATBOT_DUR + TRANSITION_DUR;
  const agentOpacity = interpolate(
    frame,
    [CHATBOT_DUR, agentStart],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad) },
  );

  // Transition flash
  const flashOpacity = interpolate(
    frame,
    [CHATBOT_DUR - 5, CHATBOT_DUR + 10, CHATBOT_DUR + 25],
    [0, 0.4, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Chatbot scene */}
      <Sequence from={0} durationInFrames={CHATBOT_DUR + 15} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: chatbotOpacity }}>
          <SceneChatbot />
        </div>
      </Sequence>

      {/* Transition flash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
        opacity: flashOpacity,
      }} />

      {/* Agent scene */}
      <Sequence from={CHATBOT_DUR} durationInFrames={TRANSITION_DUR + AGENT_DUR + HOLD_DUR} layout="none">
        <div style={{ position: 'absolute', inset: 0, opacity: agentOpacity }}>
          <SceneAgent />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
