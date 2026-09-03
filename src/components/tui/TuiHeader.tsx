import React from 'react';
import { PANES } from '../../hooks/useTuiNavigation';
import type { PaneId } from '../../hooks/useTuiNavigation';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';

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
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="border-b border-om-border bg-om-surface/90 backdrop-blur-sm px-4 py-3 select-none">
      {/* Terminal Prompt Line */}
      <div className="flex items-center gap-2 font-mono text-sm mb-3">
        <span className="text-om-green font-semibold">crystiancomy@portfolio</span>
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
