export function AgentAppears() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center h-full min-h-80">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] w-44 h-44 rounded-full bg-accent/10 blur-2xl pointer-events-none" />

      {/* Agent circle */}
      <div className="relative w-28 h-28 rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-[0_0_40px_rgba(255,107,53,0.15)] animate-[fadeScaleIn_0.6s_ease-out_both]">
        <span className="text-6xl">🤖</span>
      </div>

      <div className="mt-8 text-xl font-semibold text-text-primary animate-[fadeUp_0.5s_0.3s_ease-out_both]">
        AI Coding Agent
      </div>
      <div className="mt-3 text-sm text-text-muted max-w-[320px] leading-relaxed animate-[fadeUp_0.5s_0.5s_ease-out_both]">
        Not a chatbot — an agent that takes action in your codebase
      </div>
    </div>
  );
}
