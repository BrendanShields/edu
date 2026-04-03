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
      <div className="text-6xl mb-6">{icon}</div>
      <div className={`text-lg font-semibold mb-2 ${titleColor}`}>{title}</div>
      <div className="text-sm text-text-muted max-w-[280px]">{subtitle}</div>
    </div>
  );
}
