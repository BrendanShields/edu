interface TitleCardProps {
  icon: string;
  title: string;
  subtitle: string;
  tool?: 'claude' | 'opencode' | 'copilot';
}

const toolColors: Record<string, string> = {
  claude: 'text-tool-claude',
  opencode: 'text-tool-opencode',
  copilot: 'text-tool-copilot',
};

export function TitleCard({ icon, title, subtitle, tool }: TitleCardProps) {
  const titleColor = tool ? toolColors[tool] : 'text-text-primary';

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-6xl mb-6 animate-[fadeScaleIn_0.4s_ease-out_both]">{icon}</div>
      <div className={`text-lg font-semibold mb-2 ${titleColor} animate-[fadeUp_0.4s_0.15s_ease-out_both]`} style={{ opacity: 0 }}>{title}</div>
      <div className="text-sm text-text-muted max-w-[280px] animate-[fadeUp_0.4s_0.3s_ease-out_both]" style={{ opacity: 0 }}>{subtitle}</div>
    </div>
  );
}
