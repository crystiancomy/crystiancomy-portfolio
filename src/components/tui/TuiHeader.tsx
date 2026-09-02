import React from 'react';
import { PANES } from '../../hooks/useTuiNavigation';
import type { PaneId } from '../../hooks/useTuiNavigation';
import { PROFILE_DATA } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { MapPin, Languages } from 'lucide-react';

interface TuiHeaderProps {
  activePane: PaneId;
  onSelectPane: (pane: PaneId) => void;
  lastCommand: string;
}

export const TuiHeader: React.FC<TuiHeaderProps> = ({
  activePane,
  onSelectPane,
  lastCommand
}) => {
  const { language, setLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="border-b border-om-border bg-om-surface/90 backdrop-blur-sm px-4 py-3 select-none">
      {/* Top Telemetry & Controls Bar */}
      <div className="flex items-center justify-between text-xs text-om-muted mb-3 pb-2 border-b border-om-border-subtle gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-om-green">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-om-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-om-green"></span>
            </span>
            <span className="font-semibold">{t.header.status}</span>
          </span>
          <span className="hidden sm:inline text-om-dim">|</span>
          <span className="hidden sm:flex items-center gap-1 text-om-cyan">
            <MapPin className="w-3.5 h-3.5" />
            <span>{PROFILE_DATA.telemetry.location[language]}</span>
          </span>
        </div>

        {/* Language Switcher [ PT | EN ] */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <Languages className="w-3.5 h-3.5 text-om-lilac mr-1 hidden sm:inline" />
          <button
            onClick={() => setLanguage('pt')}
            className={`px-2 py-0.5 rounded-xs transition-all ${
              language === 'pt'
                ? 'bg-om-purple-primary text-om-fg font-bold border border-om-lilac shadow-[0_0_8px_rgba(113,45,118,0.5)]'
                : 'text-om-muted hover:text-om-fg'
            }`}
            title="Mudar para Português"
            aria-label="Português"
          >
            PT
          </button>
          <span className="text-om-dim">/</span>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 rounded-xs transition-all ${
              language === 'en'
                ? 'bg-om-purple-primary text-om-fg font-bold border border-om-lilac shadow-[0_0_8px_rgba(113,45,118,0.5)]'
                : 'text-om-muted hover:text-om-fg'
            }`}
            title="Switch to English"
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>

      {/* Terminal Prompt Line */}
      <div className="flex items-center gap-2 font-mono text-sm mb-3">
        <span className="text-om-green font-semibold">crystian@portfolio</span>
        <span className="text-om-lilac">:</span>
        <span className="text-om-cyan">~</span>
        <span className="text-om-fg">$</span>
        <span className="text-om-fg font-medium">{lastCommand}</span>
        <span className="inline-block w-2.5 h-4 bg-om-cyan animate-cursor-blink ml-0.5"></span>
      </div>

      {/* TUI Navigation Tabs */}
      <nav aria-label="Terminal Navigation Tabs" className="flex flex-wrap gap-1.5 pt-1">
        {PANES.map((pane) => {
          const isActive = pane.id === activePane;
          const label = t.nav[pane.id];
          return (
            <button
              key={pane.id}
              onClick={() => onSelectPane(pane.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all border rounded-xs focus:outline-none focus:ring-1 focus:ring-om-cyan ${
                isActive
                  ? 'bg-om-purple-primary text-om-fg border-om-lilac shadow-[0_0_12px_rgba(113,45,118,0.5)] font-semibold'
                  : 'bg-om-bg text-om-fg/70 border-om-border hover:border-om-lilac/60 hover:text-om-fg hover:bg-om-card'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={`px-1 rounded-xs text-[10px] ${
                isActive ? 'bg-om-lilac text-om-bg font-bold' : 'bg-om-border-subtle text-om-lilac'
              }`}>
                [{pane.index}]
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};
