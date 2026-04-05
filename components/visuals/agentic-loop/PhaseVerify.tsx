export function PhaseVerify() {
  const tests = [
    'validates expired tokens',
    'refreshes on boundary',
    'rejects tampered tokens',
    'handles clock skew',
  ];

  return (
    <div className="flex flex-col items-center h-full min-h-[320px]">
      {/* Agent */}
      <div className="w-14 h-14 rounded-full bg-surface border-2 border-green-400 flex items-center justify-center mt-2">
        <span className="text-2xl">🔍</span>
      </div>
      <div className="mt-2 mb-4 text-[11px] font-semibold uppercase tracking-wider text-green-400">
        Verifying
      </div>

      {/* Test results */}
      <div className="w-full rounded-xl bg-surface border border-border p-4 px-2 animate-[fadeUp_0.4s_ease-out_both]">
        <div className="space-y-1">
          {tests.map((test, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-1.5 font-mono text-xs text-text-secondary animate-[fadeSlideIn_0.3s_ease-out_both]"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="text-green-400 animate-[bounceIn_0.4s_ease-out_both]" style={{ animationDelay: `${i * 150 + 100}ms` }}>✓</span>
              <span>{test}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All pass badge */}
      <div className="mt-5 px-6 py-3 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-semibold animate-[fadeScaleIn_0.5s_0.7s_ease-out_both]">
        4/4 Tests Passing
      </div>
    </div>
  );
}
