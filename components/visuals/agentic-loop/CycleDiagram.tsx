export function CycleDiagram() {
  // Layout: 360x360 coordinate space, circle centered at 180,180, radius 100
  const cx = 180;
  const cy = 180;
  const r = 100;

  const steps = [
    { n: '1', label: 'Read', desc: 'files, errors, context', color: '#4ADE80', angle: -90 },
    { n: '2', label: 'Think', desc: 'analyze, plan approach', color: '#79C0FF', angle: 0 },
    { n: '3', label: 'Act', desc: 'edit, run commands', color: '#FF6B35', angle: 90 },
    { n: '4', label: 'Verify', desc: 'test, check output', color: '#4ADE80', angle: 180 },
  ];

  // Arrow dot positions (between nodes)
  const arrowAngles = [315, 45, 135, 225];

  return (
    <div className="flex items-center justify-center" style={{ height: 380 }}>
      <div style={{ position: 'relative', width: 360, height: 360 }}>
        {/* Dashed circle + arrow dots */}
        <svg
          width={360} height={360}
          className="absolute inset-0 animate-[fadeIn_0.5s_0.3s_ease-out_both]"
          style={{ opacity: 0 }}
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2A2A2A" strokeWidth={1.5} strokeDasharray="6 4" />
          {arrowAngles.map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <circle
                key={deg}
                cx={cx + Math.cos(rad) * r}
                cy={cy + Math.sin(rad) * r}
                r={3}
                fill="#FF6B35"
              />
            );
          })}
        </svg>

        {/* Center agent */}
        <div
          className="absolute animate-[fadeScaleIn_0.5s_ease-out_both]"
          style={{ left: cx - 24, top: cy - 24, width: 48, height: 48, zIndex: 2 }}
        >
          <div className="w-12 h-12 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
        </div>

        {/* Step nodes */}
        {steps.map((step, i) => {
          const rad = (step.angle * Math.PI) / 180;
          // Position the center of each node on the circle, then offset by half the node size
          const nodeW = 90;
          const nodeH = 70;
          const x = cx + Math.cos(rad) * (r + 50) - nodeW / 2;
          const y = cy + Math.sin(rad) * (r + 50) - nodeH / 2;

          return (
            <div
              key={step.label}
              className="absolute flex flex-col items-center gap-1 animate-[fadeScaleIn_0.4s_ease-out_both]"
              style={{
                left: x, top: y, width: nodeW, height: nodeH,
                animationDelay: `${300 + i * 150}ms`,
                opacity: 0,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                style={{
                  background: `${step.color}15`,
                  border: `1.5px solid ${step.color}60`,
                  color: step.color,
                }}
              >
                {step.n}
              </div>
              <div className="text-xs font-semibold text-text-primary">{step.label}</div>
              <div className="text-[9px] text-text-muted text-center leading-tight">{step.desc}</div>
            </div>
          );
        })}

        {/* Repeat label */}
        <div
          className="absolute left-0 right-0 text-center text-xs text-accent font-medium animate-[fadeUp_0.5s_1s_ease-out_both]"
          style={{ bottom: -10, opacity: 0 }}
        >
          ↻ repeat until done
        </div>
      </div>
    </div>
  );
}
