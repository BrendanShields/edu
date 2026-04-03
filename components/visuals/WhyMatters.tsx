export function WhyMatters() {
  return (
    <div className="space-y-6">
      <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
        <div className="text-[10px] uppercase tracking-wider text-red-400 mb-2">Instead of</div>
        <div className="font-mono text-sm text-text-secondary">&quot;Write me a function that validates emails&quot;</div>
      </div>

      <div className="flex justify-center text-text-muted text-lg">↓</div>

      <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
        <div className="text-[10px] uppercase tracking-wider text-green-400 mb-2">Try this</div>
        <div className="font-mono text-sm text-text-secondary">&quot;Fix the failing test in auth.test.ts — the email validation rejects valid addresses with + characters&quot;</div>
      </div>

      <div className="text-center text-xs text-text-muted mt-4">
        Specific context. Clear intent. Verifiable outcome.
      </div>
    </div>
  );
}
