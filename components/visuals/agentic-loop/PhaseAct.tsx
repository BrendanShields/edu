export function PhaseAct() {
  const codeLines = [
    { text: '  if (token.expiry <= now) {', type: 'old' as const },
    { text: '  if (token.expiry < now) {', type: 'new' as const },
    { text: '    return refreshToken(user);', type: 'ctx' as const },
    { text: '  }', type: 'ctx' as const },
  ];

  return (
    <div className="flex flex-col items-center h-full min-h-[320px]">
      {/* Agent */}
      <div className="w-14 h-14 rounded-full bg-surface border-2 border-accent flex items-center justify-center mt-2">
        <span className="text-2xl">✏️</span>
      </div>
      <div className="mt-2 mb-4 text-[11px] font-semibold uppercase tracking-wider text-accent">
        Making Changes
      </div>

      {/* Code editor */}
      <div className="w-full rounded-xl bg-surface border border-border overflow-hidden px-2 animate-[fadeUp_0.4s_ease-out_both]">
        <div className="px-4 py-2 text-[10px] text-text-muted border-b border-border">
          src/auth/handler.ts
        </div>
        <div className="py-2">
          {codeLines.map((line, i) => {
            const bg = line.type === 'old' ? 'bg-red-500/5' : line.type === 'new' ? 'bg-green-500/5' : '';
            const prefix = line.type === 'old' ? '−' : line.type === 'new' ? '+' : ' ';
            const prefixColor = line.type === 'old' ? 'text-red-400' : line.type === 'new' ? 'text-green-400' : 'text-text-muted';

            return (
              <div
                key={i}
                className={`flex gap-2 px-4 py-1 font-mono text-[11px] text-text-secondary ${bg} animate-[fadeIn_0.3s_ease-out_both]`}
                style={{ animationDelay: `${200 + i * 150}ms`, textDecoration: line.type === 'old' ? 'line-through' : 'none' }}
              >
                <span className={`w-3 ${prefixColor}`}>{prefix}</span>
                <span>{line.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal */}
      <div className="w-full mt-3 rounded-xl bg-[#0d0d0d] border border-border p-4 font-mono text-[11px] text-text-secondary px-2 animate-[fadeUp_0.4s_0.5s_ease-out_both]">
        <div>$ npm test -- auth.test.ts</div>
        <div className="mt-1 text-text-muted">Running 4 tests...</div>
      </div>
    </div>
  );
}
