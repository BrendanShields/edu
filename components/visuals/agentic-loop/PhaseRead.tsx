export function PhaseRead() {
  const files = [
    { name: 'auth.test.ts', icon: '📄' },
    { name: 'src/auth/handler.ts', icon: '📄' },
    { name: 'package.json', icon: '📦' },
    { name: 'git log --oneline', icon: '🔀' },
    { name: '.env.local', icon: '🔒' },
  ];

  return (
    <div className="flex flex-col items-center h-full min-h-[320px]">
      {/* Agent — consistent top position */}
      <div className="w-14 h-14 rounded-full bg-surface border-2 border-green-400 flex items-center justify-center mt-2">
        <span className="text-2xl">🤖</span>
      </div>
      <div className="mt-2 mb-4 text-[11px] font-semibold uppercase tracking-wider text-green-400">
        Reading Context
      </div>

      {/* Files flowing in */}
      <div className="w-full space-y-2 px-2">
        {files.map((file, i) => (
          <div
            key={file.name}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border animate-[fadeSlideIn_0.4s_ease-out_both]"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <span className="text-sm">{file.icon}</span>
            <span className="text-xs font-mono text-text-secondary flex-1">{file.name}</span>
            <span className="text-xs text-green-400 animate-[fadeIn_0.3s_ease-out_both]" style={{ animationDelay: `${i * 120 + 300}ms` }}>✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
