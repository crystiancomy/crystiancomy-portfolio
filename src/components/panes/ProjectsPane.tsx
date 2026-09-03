import React, { useState } from 'react';
import { SHOWCASE_DATA, PROJECT_CATEGORIES } from '../../data/showcase';
import type { ShowcaseItem } from '../../data/showcase';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { FolderGit2, Check, ChevronRight } from 'lucide-react';

export const ProjectsPane: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = PROJECT_CATEGORIES[language];

  const filteredProjects = selectedCategory === 'ALL'
    ? SHOWCASE_DATA
    : SHOWCASE_DATA.filter(p => p.category === selectedCategory);

  const handleCopy = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section aria-labelledby="projects-heading" className="space-y-6 max-w-6xl mx-auto py-2">
      {/* Header and Concise Filter Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-om-border pb-4">
        <div>
          <h2 id="projects-heading" className="text-base font-bold text-om-fg flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-om-lilac" />
            <span>{t.projects.title}</span>
          </h2>
          <p className="text-xs text-om-muted mt-1 font-mono">
            {t.projects.subtitle(filteredProjects.length, selectedCategory.toLowerCase())}
          </p>
        </div>

        {/* Clean, concise 4 filter buttons */}
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label={t.projects.filterAria}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xs transition-all border ${
                  isSelected
                    ? 'bg-om-purple-primary text-om-fg border-om-lilac font-semibold shadow-[0_0_8px_rgba(113,45,118,0.4)]'
                    : 'bg-om-bg text-om-muted border-om-border hover:border-om-lilac/50 hover:text-om-fg'
                }`}
                aria-pressed={isSelected}
              >
                [{cat.label}]
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: Spacious & Professional Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project: ShowcaseItem) => (
          <article
            key={project.id}
            className="bg-om-surface border border-om-border hover:border-om-lilac/70 rounded-sm p-4 sm:p-6 space-y-5 transition-all duration-150 shadow-[0_4px_25px_rgba(0,0,0,0.25)]"
          >
            {/* Header: Title, Subtitle, and Clone Command */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-om-border-subtle pb-3">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-om-fg font-mono">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-om-purple-primary text-om-fg text-[10px] px-2 py-0.5 rounded-xs font-semibold uppercase tracking-wider">
                      {t.projects.featured}
                    </span>
                  )}
                </div>
                <p className="text-xs text-om-lilac font-mono mt-0.5">
                  {project.subtitle[language]}
                </p>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 bg-om-bg border border-om-border-subtle px-2.5 py-1.5 rounded-xs text-xs font-mono max-w-full overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0 overflow-hidden flex-1">
                  <span className="text-om-green font-bold shrink-0">$</span>
                  <span className="text-om-cyan truncate text-[11px] sm:text-xs">
                    {project.command}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(project.command, project.id)}
                  className="text-om-muted hover:text-om-lilac ml-1 transition-colors shrink-0"
                  title={t.projects.copyCommand}
                  aria-label={`${t.projects.copyCommand} ${project.title}`}
                >
                  {copiedId === project.id ? (
                    <Check className="w-3.5 h-3.5 text-om-green" />
                  ) : (
                    <span className="text-[11px]">[{t.projects.copy}]</span>
                  )}
                </button>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-om-fg/90 leading-relaxed font-mono">
              {project.summary[language]}
            </p>

            {/* Technical Highlights / Bullets */}
            <div className="space-y-2 bg-om-bg p-4 rounded-xs border border-om-border-subtle font-mono text-xs">
              <div className="text-[10px] text-om-muted uppercase font-semibold tracking-wider">
                {t.projects.archTitle}
              </div>
              <ul className="space-y-2 text-om-fg/80">
                {project.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-om-cyan shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 font-mono text-xs">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2.5 py-1 bg-om-card border border-om-border text-om-lilac rounded-xs"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-om-cyan hover:text-om-fg transition-colors self-end sm:self-auto"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>{t.projects.repoLink}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
