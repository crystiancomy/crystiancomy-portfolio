import React, { useEffect, useRef } from 'react';
import { X, Keyboard, ArrowRight } from 'lucide-react';
import { PANES } from '../../hooks/useTuiNavigation';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-om-surface border-2 border-om-lilac shadow-[0_0_30px_rgba(113,45,118,0.6)] rounded-sm p-5 text-sm font-mono text-om-fg focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-om-border pb-3 mb-4">
          <div className="flex items-center gap-2 text-om-cyan">
            <Keyboard className="w-5 h-5 text-om-lilac" />
            <h2 id="help-title" className="font-bold text-base">
              {language === 'pt' ? 'Atalhos de Teclado do Terminal' : 'TUI Keyboard Navigation Cheatsheet'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t.footer.closeModal}
            className="text-om-muted hover:text-om-red transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="space-y-3 mb-5">
          <div className="text-xs text-om-muted uppercase font-semibold">
            {language === 'pt' ? 'Navegação entre Telas' : 'Pane Navigation'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {PANES.map((pane) => (
              <div
                key={pane.id}
                className="flex items-center justify-between p-2 bg-om-bg border border-om-border rounded-xs"
              >
                <div className="flex items-center gap-1.5">
                  <kbd className="bg-om-purple-primary text-om-fg px-1.5 py-0.5 rounded-xs font-bold">
                    {pane.index}
                  </kbd>
                  <ArrowRight className="w-3 h-3 text-om-muted" />
                  <span className="text-om-fg">{t.nav[pane.id]}</span>
                </div>
                <span className="text-om-muted text-[10px]">#{pane.id}</span>
              </div>
            ))}
          </div>

          <div className="text-xs text-om-muted uppercase font-semibold pt-2">
            {language === 'pt' ? 'Controles do Sistema' : 'System Controls'}
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 bg-om-bg border border-om-border rounded-xs">
              <div className="flex items-center gap-2">
                <kbd className="bg-om-card border border-om-border text-om-lilac px-2 py-0.5 rounded-xs font-bold">
                  ?
                </kbd>
                <span>{language === 'pt' ? 'Abrir / fechar esta ajuda' : 'Toggle this cheatsheet'}</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-om-bg border border-om-border rounded-xs">
              <div className="flex items-center gap-2">
                <kbd className="bg-om-card border border-om-border text-om-lilac px-2 py-0.5 rounded-xs font-bold">
                  ESC
                </kbd>
                <span>{language === 'pt' ? 'Fechar modal de atalhos' : 'Close modal'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-om-border pt-3 text-xs text-om-muted flex items-center justify-between">
          <span>Om Theme · Accessible TUI</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-om-purple-primary hover:bg-[#8b3691] text-om-fg rounded-xs transition-colors font-medium"
          >
            [ {t.footer.closeModal} ]
          </button>
        </div>
      </div>
    </div>
  );
};
