import React, { useState, useEffect } from 'react';
import type { PaneId } from '../../hooks/useTuiNavigation';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { HelpCircle, Clock, Terminal } from 'lucide-react';

interface TuiStatusBarProps {
  activePane: PaneId;
  onOpenHelp: () => void;
}

export const TuiStatusBar: React.FC<TuiStatusBarProps> = ({
  activePane,
  onOpenHelp
}) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toTimeString().split(' ')[0]);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      aria-label="Terminal Status Bar"
      className="border-t border-om-border bg-om-bg px-4 py-2 text-xs font-mono flex flex-wrap items-center justify-between gap-2 select-none"
    >
      {/* Left: Active Session */}
      <div className="flex items-center gap-2 text-om-muted">
        <Terminal className="w-3.5 h-3.5 text-om-cyan" />
        <span className="text-om-fg/90">crystian@portfolio</span>
        <span className="text-om-dim">:</span>
        <span className="text-om-lilac font-medium uppercase">
          /{activePane}
        </span>
      </div>

      {/* Middle: Shortcuts Hint */}
      <div className="hidden sm:flex items-center gap-3 text-om-muted">
        <span className="flex items-center gap-1.5">
          <kbd className="bg-om-card border border-om-border text-om-lilac px-1.5 py-0.5 rounded-xs text-[10px]">1-5</kbd>
          <span>{t.footer.shortcutsHint}</span>
        </span>
        <span className="text-om-dim">·</span>
        <button
          onClick={onOpenHelp}
          className="flex items-center gap-1 text-om-fg/80 hover:text-om-cyan transition-colors"
        >
          <kbd className="bg-om-card border border-om-border text-om-lilac px-1.5 py-0.5 rounded-xs text-[10px]">?</kbd>
          <span>{t.footer.help}</span>
        </button>
      </div>

      {/* Right: Clock & Mobile help */}
      <div className="flex items-center gap-3 text-om-muted">
        <button
          onClick={onOpenHelp}
          className="sm:hidden flex items-center gap-1 text-om-cyan hover:underline"
          title="Shortcuts"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>[?]</span>
        </button>
        <span className="flex items-center gap-1.5 text-om-fg/90">
          <Clock className="w-3.5 h-3.5 text-om-lilac" />
          <span>{time || '00:00:00'}</span>
        </span>
      </div>
    </footer>
  );
};
