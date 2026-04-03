export function MentalShift() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-8">
        {/* Chatbot */}
        <div className="w-full p-5 rounded-xl border border-border bg-surface/50 text-center">
          <div className="text-2xl mb-2">💬</div>
          <div className="text-xs uppercase tracking-wider text-text-muted mb-1">Chatbot</div>
          <div className="text-sm text-text-secondary">You copy-paste code back and forth</div>
        </div>

        <div className="text-text-muted text-lg">↓</div>

        {/* AI Coding Tool */}
        <div className="w-full p-5 rounded-xl border border-accent/30 bg-accent/5 text-center">
          <div className="text-2xl mb-2">🖥️</div>
          <div className="text-xs uppercase tracking-wider text-accent mb-1">AI Coding Tool</div>
          <div className="text-sm text-text-secondary">The expert sits at your computer</div>
        </div>
      </div>
    </div>
  );
}
