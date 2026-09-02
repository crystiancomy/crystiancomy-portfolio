import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import type { PaneId } from '../../hooks/useTuiNavigation';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { Terminal, Check, Globe, MapPin, Mail, Phone, GraduationCap, Award } from 'lucide-react';

interface WhoamiPaneProps {
  onNavigate: (pane: PaneId) => void;
}

export const WhoamiPane: React.FC<WhoamiPaneProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [lastActionFeedback, setLastActionFeedback] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setLastActionFeedback(`${t.whoami.copied}: ${label}`);
    setTimeout(() => {
      setLastActionFeedback(null);
    }, 2500);
  };

  const handleQuickCommand = (cmd: (typeof PROFILE_DATA.quickCommands)['pt'][0]) => {
    if (cmd.actionType === 'navigate') {
      onNavigate(cmd.target as PaneId);
    } else if (cmd.actionType === 'copy') {
      handleCopy(cmd.target, 'Email');
    }
  };

  return (
    <section aria-labelledby="whoami-heading" className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Top Banner: Monospace Identity */}
      <div className="bg-om-surface border border-om-border p-6 sm:p-8 rounded-sm shadow-[0_0_30px_rgba(113,45,118,0.15)] space-y-6">
        <div className="flex items-center justify-between border-b border-om-border-subtle pb-3 text-xs text-om-muted">
          <span className="flex items-center gap-2 text-om-cyan font-bold">
            <Terminal className="w-4 h-4" />
            <span>{t.whoami.asciiTitle}</span>
          </span>
          <span className="text-om-green flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-om-green animate-pulse"></span>
            {t.header.status}
          </span>
        </div>

        {/* ASCII Art for @crystiancomy */}
        <pre
          aria-label="Monospace ASCII Art banner representing @crystiancomy"
          className="text-[10px] sm:text-xs md:text-sm leading-tight font-mono text-om-lilac overflow-x-auto py-3 text-center select-none font-bold tracking-wider"
        >
          {PROFILE_DATA.asciiAvatar}
        </pre>

        {/* Name, Title & Coordinates */}
        <div className="pt-4 border-t border-om-border-subtle flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-om-cyan tracking-wide uppercase">
              {PROFILE_DATA.handle}
            </div>
            <h1 id="whoami-heading" className="text-xl sm:text-2xl font-bold text-om-fg tracking-tight">
              {PROFILE_DATA.fullName}
            </h1>
            <p className="text-sm text-om-lilac font-medium">
              {PROFILE_DATA.title[language]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-om-muted font-mono">
            <span className="flex items-center gap-1.5 text-om-fg/80">
              <MapPin className="w-3.5 h-3.5 text-om-lilac" />
              <span>{PROFILE_DATA.telemetry.location[language]}</span>
            </span>
            <span className="text-om-dim">|</span>
            <span className="flex items-center gap-1.5 text-om-fg/80">
              <Globe className="w-3.5 h-3.5 text-om-cyan" />
              <span>{PROFILE_DATA.telemetry.availability[language]}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Professional Summary & Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: Resumo Profissional */}
        <div className="md:col-span-7 bg-om-surface border border-om-border p-6 rounded-sm space-y-4">
          <div className="flex items-center justify-between border-b border-om-border-subtle pb-2 text-xs text-om-muted">
            <span className="text-om-lilac font-semibold uppercase tracking-wider">{t.whoami.resumoTitle}</span>
            <span>{t.whoami.resumoSubtitle}</span>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-om-fg/90 leading-relaxed font-mono">
            {PROFILE_DATA.bio[language].map((paragraph, index) => (
              <p key={index} className="flex gap-2.5 items-start">
                <span className="text-om-purple-primary select-none font-bold mt-0.5">&gt;</span>
                <span>{paragraph}</span>
              </p>
            ))}
          </div>

          {/* Quick Command Launcher */}
          <div className="pt-4 border-t border-om-border-subtle space-y-2">
            <div className="text-[11px] text-om-muted font-semibold uppercase tracking-wider">
              {t.whoami.quickTitle}
            </div>
            <div className="flex flex-wrap gap-2">
              {PROFILE_DATA.quickCommands[language].map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickCommand(cmd)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-om-bg hover:bg-om-purple-primary border border-om-border hover:border-om-lilac text-xs text-om-fg rounded-xs transition-all font-mono group"
                >
                  <span className="text-om-green font-bold group-hover:text-om-fg">$</span>
                  <span>{cmd.command}</span>
                  <span className="text-om-muted group-hover:text-om-fg/80 text-[10px]">
                    ({cmd.label})
                  </span>
                </button>
              ))}
            </div>

            {lastActionFeedback && (
              <div className="mt-3 p-2.5 bg-om-purple-primary/30 border border-om-lilac text-xs text-om-green rounded-xs flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-om-green" />
                <span>{lastActionFeedback}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Telemetria & Credenciais Reais */}
        <div className="md:col-span-5 space-y-4">
          {/* Card Formação & Idiomas */}
          <div className="bg-om-surface border border-om-border p-5 rounded-sm space-y-4 text-xs font-mono">
            <div className="text-om-cyan font-bold border-b border-om-border-subtle pb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-om-lilac" />
              <span>{t.whoami.certTitle}</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs space-y-1">
                <div className="flex items-center justify-between text-om-fg font-semibold">
                  <span>{language === 'pt' ? 'Inglês' : 'English'}</span>
                  <span className="text-om-green text-[11px]">{t.whoami.englishLevel}</span>
                </div>
                <div className="text-om-muted text-[11px]">{t.whoami.englishCert}</div>
              </div>

              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs space-y-1">
                <div className="flex items-center justify-between text-om-fg font-semibold">
                  <span>{language === 'pt' ? 'Português' : 'Portuguese'}</span>
                  <span className="text-om-cyan text-[11px]">{t.whoami.portugueseLevel}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-om-border-subtle space-y-2">
              <div className="flex items-center gap-2 text-om-yellow font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>{t.whoami.educationTitle}</span>
              </div>
              <p className="text-om-fg/90 text-xs">
                {t.whoami.educationDegree}
              </p>
              <p className="text-om-muted text-[11px]">
                {t.whoami.educationInst}
              </p>
            </div>
          </div>

          {/* Card Contato Direto */}
          <div className="bg-om-surface border border-om-border p-5 rounded-sm space-y-3 text-xs font-mono">
            <div className="text-om-lilac font-bold border-b border-om-border-subtle pb-2">
              {t.whoami.contactsTitle}
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between p-2 bg-om-bg border border-om-border-subtle rounded-xs">
                <span className="flex items-center gap-1.5 text-om-muted">
                  <Mail className="w-3.5 h-3.5 text-om-pink" />
                  <span>Email:</span>
                </span>
                <span className="text-om-fg font-medium truncate max-w-47.5">
                  {PROFILE_DATA.contacts.email}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 bg-om-bg border border-om-border-subtle rounded-xs">
                <span className="flex items-center gap-1.5 text-om-muted">
                  <Phone className="w-3.5 h-3.5 text-om-green" />
                  <span>{language === 'pt' ? 'Telefone:' : 'Phone:'}</span>
                </span>
                <span className="text-om-fg font-medium">
                  {PROFILE_DATA.contacts.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
