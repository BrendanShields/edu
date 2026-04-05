export function AgentAppears() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px]">
      {/* Glow */}
      <div className="absolute w-44 h-44 rounded-full bg-accent/10 blur-2xl" />

      {/* Agent circle */}
      <div className="relative w-24 h-24 rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-[0_0_40px_rgba(255,107,53,0.15)] animate-[fadeScaleIn_0.6s_ease-out_both]">
        <span className="text-5xl">🤖</span>
      </div>

      <div className="mt-6 text-base font-semibold text-text-primary animate-[fadeUp_0.5s_0.3s_ease-out_both]">
        AI Coding Agent
      </div>
      <div className="mt-2 text-sm text-text-muted max-w-[260px] animate-[fadeUp_0.5s_0.5s_ease-out_both]">
        Not a chatbot — an agent that takes action in your codebase
      </div>
    </div>
  );
}
