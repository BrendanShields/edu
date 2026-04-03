export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-8">
        <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-8" />
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Welcome to the Workshop.
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed mb-12">
          A full-day deep dive into AI-assisted coding. Learn Claude Code,
          OpenCode, and GitHub Copilot — from foundations to advanced customization.
        </p>
        <a
          href="/foundations/how-tools-work"
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full text-lg hover:bg-accent-hover transition-colors"
        >
          Start with Foundations
        </a>
      </div>
    </div>
  );
}
