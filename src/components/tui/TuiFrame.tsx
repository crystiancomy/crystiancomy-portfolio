import React from 'react';
import type { PaneId } from '../../hooks/useTuiNavigation';
import { TuiHeader } from './TuiHeader';
import { TuiStatusBar } from './TuiStatusBar';
import { HelpModal } from './HelpModal';
import { PROFILE_DATA } from '../../data/profile';
import { HelpCircle, Terminal } from 'lucide-react';

interface TuiFrameProps {
  activePane: PaneId;
  onSelectPane: (pane: PaneId) => void;
  lastCommand: string;
  showHelp: boolean;
  onToggleHelp: () => void;
  children: React.ReactNode;
}

export const TuiFrame: React.FC<TuiFrameProps> = ({
  activePane,
  onSelectPane,
  lastCommand,
  showHelp,
  onToggleHelp,
  children
}) => {
  return (
    <div className="min-h-screen bg-om-bg text-om-fg flex flex-col justify-between selection:bg-om-purple-primary selection:text-om-fg font-mono relative">
      {/* Outer TUI Window Container */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col my-0 sm:my-3 border-x sm:border border-om-border sm:rounded-sm bg-om-bg shadow-[0_0_50px_rgba(113,45,118,0.2)] overflow-hidden">
        
        {/* Window Chrome Titlebar */}
        <div className="bg-om-surface px-4 py-2.5 border-b border-om-border flex items-center justify-between select-none">
          {/* Left: Window Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-om-red inline-block cursor-pointer hover:opacity-80 transition-opacity" title="Close"></span>
            <span className="w-3 h-3 rounded-full bg-om-yellow inline-block cursor-pointer hover:opacity-80 transition-opacity" title="Minimize"></span>
            <span className="w-3 h-3 rounded-full bg-om-green inline-block cursor-pointer hover:opacity-80 transition-opacity" title="Maximize"></span>
            <span className="ml-2 text-xs text-om-muted hidden sm:flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-om-cyan" />
              <span>pts/1</span>
            </span>
          </div>

          {/* Center: Window Title */}
          <div className="text-xs font-semibold text-om-fg flex items-center gap-2 truncate px-2">
            <span className="text-om-lilac">crystian@portfolio</span>
            <span className="text-om-muted">:</span>
            <span className="text-om-cyan">~/{activePane}</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 text-xs text-om-muted">
            <a
              href={PROFILE_DATA.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-om-fg transition-colors p-1"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <button
              onClick={onToggleHelp}
              className="hover:text-om-cyan transition-colors flex items-center gap-1"
              title="Keyboard shortcuts (?)"
              aria-label="Keyboard shortcuts"
            >
              <HelpCircle className="w-4 h-4 text-om-lilac" />
              <span className="hidden sm:inline">[?]</span>
            </button>
          </div>
        </div>

        {/* TUI Subheader & Tab Bar */}
        <TuiHeader
          activePane={activePane}
          onSelectPane={onSelectPane}
          lastCommand={lastCommand}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-om-bg">
          {children}
        </main>

        {/* Persistent TUI Status Bar */}
        <TuiStatusBar
          activePane={activePane}
          onOpenHelp={onToggleHelp}
        />
      </div>

      {/* Cheatsheet Modal */}
      <HelpModal isOpen={showHelp} onClose={onToggleHelp} />
    </div>
  );
};
