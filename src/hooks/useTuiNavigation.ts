import { useState, useEffect, useCallback } from 'react';

export type PaneId = 'whoami' | 'projects' | 'skills' | 'experience' | 'contact';

export interface PaneInfo {
  id: PaneId;
  index: number;
  label: string;
  command: string;
}

export const PANES: PaneInfo[] = [
  { id: 'whoami', index: 1, label: 'whoami', command: 'whoami' },
  { id: 'projects', index: 2, label: 'projects', command: 'ls -la ./projects' },
  { id: 'skills', index: 3, label: 'skills', command: 'cat ./skills.txt' },
  { id: 'experience', index: 4, label: 'experience', command: 'journalctl -u career' },
  { id: 'contact', index: 5, label: 'contact', command: 'ping crystian' }
];

export function useTuiNavigation() {
  const getInitialPane = (): PaneId => {
    if (typeof window === 'undefined') return 'whoami';
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const found = PANES.find(p => p.id === hash);
    return found ? found.id : 'whoami';
  };

  const [activePane, setActivePaneState] = useState<PaneId>(getInitialPane);
  const [showHelp, setShowHelp] = useState(false);
  const [lastCommand, setLastCommand] = useState<string>('whoami');

  const setPane = useCallback((paneId: PaneId) => {
    setActivePaneState(paneId);
    if (typeof window !== 'undefined') {
      window.location.hash = paneId;
      const paneObj = PANES.find(p => p.id === paneId);
      if (paneObj) {
        setLastCommand(paneObj.command);
      }
    }
  }, []);

  // Sync hash changes from browser history (back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const match = PANES.find(p => p.id === hash);
      if (match && match.id !== activePane) {
        setActivePaneState(match.id);
        setLastCommand(match.command);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePane]);

  // Global keyboard shortcuts (1-5, ?, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Never intercept when user is actively typing in a form field
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === '1') {
        e.preventDefault();
        setPane('whoami');
      } else if (e.key === '2') {
        e.preventDefault();
        setPane('projects');
      } else if (e.key === '3') {
        e.preventDefault();
        setPane('skills');
      } else if (e.key === '4') {
        e.preventDefault();
        setPane('experience');
      } else if (e.key === '5') {
        e.preventDefault();
        setPane('contact');
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShowHelp(prev => !prev);
      } else if (e.key === 'Escape') {
        setShowHelp(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setPane]);

  return {
    activePane,
    setPane,
    showHelp,
    setShowHelp,
    lastCommand,
    panes: PANES
  };
}
