import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { Mail, Send, Terminal, Check, ExternalLink, Phone, MapPin, AlertCircle } from 'lucide-react';

export const ContactPane: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([
    t.contact.logReady,
    t.contact.logInstruction
  ]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setLogs(prev => [...prev, `[CLIPBOARD] Copied ${label}: ${text}`]);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    const startTime = Date.now();
    setLogs(prev => [
      ...prev,
      t.contact.logConnecting,
      `${t.contact.logEncrypting} <${PROFILE_DATA.contacts.email}>...`
    ]);

    try {
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "cd243901-f22d-4a63-825d-30ec1b6a34ba");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject || `Portfolio Inquiry from ${name}`);
      formData.append("message", message);
      formData.append("from_name", "Portfolio TUI (@crystiancomy)");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      const latency = Date.now() - startTime;

      if (data.success) {
        setStatus('success');
        setLogs(prev => [
          ...prev,
          `[200 OK] ${language === 'pt' ? 'Mensagem despachada com sucesso!' : 'Message dispatched successfully!'} (${latency}ms)`,
          t.contact.logResponse
        ]);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error(data.message || "Falha na resposta do servidor");
      }
    } catch (err) {
      setStatus('error');
      setLogs(prev => [
        ...prev,
        `[ERROR] ${err instanceof Error ? err.message : 'Falha na transmissão'}.`,
        `[FALLBACK] ${language === 'pt' ? 'Você também pode enviar diretamente para' : 'You can also send directly to'} ${PROFILE_DATA.contacts.email}`
      ]);
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="space-y-6 max-w-5xl mx-auto py-2">
      {/* Header */}
      <div className="border-b border-om-border pb-4">
        <h2 id="contact-heading" className="text-base font-bold text-om-fg flex items-center gap-2">
          <Mail className="w-4 h-4 text-om-pink" />
          <span>{t.contact.title}</span>
        </h2>
        <p className="text-xs text-om-muted mt-1 font-mono">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive TUI Form */}
        <div className="lg:col-span-7 bg-om-surface border border-om-border p-6 rounded-sm space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.3)] font-mono text-xs">
          <div className="flex items-center justify-between border-b border-om-border-subtle pb-3">
            <span className="text-om-cyan flex items-center gap-2 font-bold text-sm">
              <Terminal className="w-4 h-4" />
              <span>{t.contact.formTitle}</span>
            </span>
            <span className="text-om-green text-[11px] font-semibold">{t.contact.encrypted}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="input-name" className="block text-om-muted mb-1.5 font-semibold">
                {t.contact.nameLabel}
              </label>
              <input
                id="input-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-om-bg border border-om-border focus:outline-none focus:ring-1 focus:ring-om-lilac p-2.5 rounded-xs placeholder:text-om-muted/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="input-email" className="block text-om-muted mb-1.5 font-semibold">
                {t.contact.emailLabel}
              </label>
              <input
                id="input-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-om-bg border border-om-border focus:outline-none focus:ring-1 focus:ring-om-lilac p-2.5 rounded-xs placeholder:text-om-muted/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="input-subject" className="block text-om-muted mb-1.5 font-semibold">
                {t.contact.subjectLabel}
              </label>
              <input
                id="input-subject"
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t.contact.subjectPlaceholder}
                className="w-full bg-om-bg border border-om-border focus:outline-none focus:ring-1 focus:ring-om-lilac p-2.5 rounded-xs placeholder:text-om-muted/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="input-message" className="block text-om-muted mb-1.5 font-semibold">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="input-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-om-bg border border-om-border focus:outline-none focus:ring-1 focus:ring-om-lilac p-2.5 rounded-xs placeholder:text-om-muted/50 transition-colors resize-none leading-relaxed"
              />
            </div>

            {status === 'success' && (
              <div className="p-3 bg-om-green/10 border border-om-green text-om-green rounded-xs flex items-center gap-2 text-xs">
                <Check className="w-4 h-4 shrink-0" />
                <span>{language === 'pt' ? 'Mensagem transmitida com sucesso!' : 'Message transmitted successfully!'}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 bg-om-red/10 border border-om-red text-om-red rounded-xs flex items-center gap-2 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{language === 'pt' ? 'Erro no envio. Tente novamente ou use o email direto.' : 'Dispatch error. Please try again or email directly.'}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-om-purple-primary hover:bg-[#8b3691] disabled:opacity-50 disabled:pointer-events-none text-om-fg border border-om-lilac font-bold rounded-xs transition-all shadow-[0_0_15px_rgba(113,45,118,0.4)] flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'sending' ? t.contact.dispatching : t.contact.dispatch}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Real Contact Channels & Console */}
        <div className="lg:col-span-5 space-y-5 font-mono text-xs">
          {/* Canais Diretos de Contato */}
          <div className="bg-om-surface border border-om-border p-5 rounded-sm space-y-4">
            <div className="text-om-lilac font-bold text-sm border-b border-om-border-subtle pb-2">
              {t.contact.contactsTitle}
            </div>

            <div className="space-y-2.5">
              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-om-muted">
                    <Mail className="w-3.5 h-3.5 text-om-pink" />
                    <span>Email:</span>
                  </span>
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.contacts.email, 'Email')}
                    className="text-om-lilac hover:text-om-cyan transition-colors"
                    title="Copy Email"
                  >
                    {copiedKey === 'Email' ? <Check className="w-3.5 h-3.5 text-om-green" /> : '[copiar]'}
                  </button>
                </div>
                <div className="text-om-fg font-medium truncate">
                  {PROFILE_DATA.contacts.email}
                </div>
              </div>

              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-om-muted">
                    <Phone className="w-3.5 h-3.5 text-om-green" />
                    <span>{language === 'pt' ? 'Telefone:' : 'Phone:'}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.contacts.phone, 'Telefone')}
                    className="text-om-lilac hover:text-om-cyan transition-colors"
                    title="Copy Phone"
                  >
                    {copiedKey === 'Telefone' ? <Check className="w-3.5 h-3.5 text-om-green" /> : '[copiar]'}
                  </button>
                </div>
                <div className="text-om-fg font-medium">
                  {PROFILE_DATA.contacts.phone}
                </div>
              </div>

              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs flex items-center justify-between">
                <span className="text-om-muted">LinkedIn:</span>
                <a
                  href={PROFILE_DATA.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-om-cyan hover:underline flex items-center gap-1"
                >
                  <span>Crystian Fernando</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs flex items-center justify-between">
                <span className="text-om-muted">GitHub:</span>
                <a
                  href={PROFILE_DATA.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-om-cyan hover:underline flex items-center gap-1"
                >
                  <span>@crystiancomy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-om-muted">
                  <MapPin className="w-3.5 h-3.5 text-om-yellow" />
                  <span>{language === 'pt' ? 'Localização:' : 'Location:'}</span>
                </span>
                <span className="text-om-fg">{PROFILE_DATA.telemetry.location[language]}</span>
              </div>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="bg-om-bg border border-om-border p-4 rounded-sm space-y-2">
            <div className="flex items-center justify-between border-b border-om-border-subtle pb-2 text-om-muted">
              <span className="text-om-green flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>{t.contact.terminalLog}</span>
              </span>
              <span className="text-[10px]">TTY 1</span>
            </div>

            <div className="h-40 overflow-y-auto space-y-1.5 text-[11px] text-om-fg/80 leading-relaxed font-mono">
              {logs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-om-lilac select-none font-bold">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
