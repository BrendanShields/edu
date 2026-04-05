export function PhaseThink() {
  const thoughts = [
    { text: 'Off-by-one in validation logic', color: 'border-l-blue-400' },
    { text: 'Token expiry check uses <= instead of <', color: 'border-l-accent' },
    { text: 'Fix: adjust boundary condition in handler.ts', color: 'border-l-green-400' },
  ];

  return (
    <div className="flex flex-col items-center h-full min-h-[320px]">
      {/* Agent */}
      <div className="relative w-14 h-14 rounded-full bg-surface border-2 border-blue-400 flex items-center justify-center mt-2">
        <span className="text-2xl">🧠</span>
        {/* Pulse ring */}
        <div className="absolute inset-[-8px] rounded-full border-2 border-blue-400/30 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
      <div className="mt-2 mb-6 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
        Analyzing
      </div>

      {/* Thought bubbles */}
      <div className="w-full space-y-4 px-2">
        {thoughts.map((t, i) => (
          <div
            key={i}
            className={`px-5 py-4 rounded-xl bg-surface border border-border ${t.color} border-l-[3px] animate-[fadeSlideIn_0.5s_ease-out_both]`}
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="text-xs font-mono text-text-secondary leading-relaxed">{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
