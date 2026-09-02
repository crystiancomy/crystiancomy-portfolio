import React, { useState } from 'react';
import {
  TECH_EXPERIENCE_DATA,
  PRE_DEV_EXPERIENCE_DATA,
  EDUCATION_DATA,
  LANGUAGES_DATA
} from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { History, MapPin, Calendar, GraduationCap, Award, ChevronRight, Check, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperiencePane: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [showPreDev, setShowPreDev] = useState(true);

  return (
    <section aria-labelledby="experience-heading" className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Header */}
      <div className="border-b border-om-border pb-4">
        <h2 id="experience-heading" className="text-base font-bold text-om-fg flex items-center gap-2">
          <History className="w-4 h-4 text-om-green" />
          <span>{t.experience.title}</span>
        </h2>
        <p className="text-xs text-om-muted mt-1 font-mono">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Experiência Técnica em TI */}
      <div className="space-y-4">
        <div className="text-xs font-mono text-om-lilac uppercase tracking-wider font-semibold">
          {t.experience.techExpTitle}
        </div>

        {TECH_EXPERIENCE_DATA.map((exp) => (
          <article
            key={exp.id}
            className="relative pl-6 sm:pl-8 border-l-2 border-om-purple-primary space-y-4 bg-om-surface p-6 rounded-r-sm border border-y-om-border border-r-om-border font-mono text-xs shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            {/* Timeline bullet dot */}
            <div className="absolute -left-2.25 top-6 w-4 h-4 rounded-full bg-om-bg border-2 border-om-lilac flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-om-green"></div>
            </div>

            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-om-border-subtle pb-3">
              <div>
                <h3 className="text-base font-bold text-om-fg">
                  {exp.role[language]}
                </h3>
                <div className="text-om-lilac text-xs font-medium mt-0.5">
                  @{exp.organization}
                </div>
              </div>

              <div className="flex items-center gap-3 text-om-muted text-xs">
                <span className="flex items-center gap-1.5 text-om-yellow">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period[language]}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-om-fg/70">
                  <MapPin className="w-3.5 h-3.5 text-om-cyan" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-om-fg/90 leading-relaxed text-xs sm:text-sm">
              {exp.summary[language]}
            </p>

            {/* Key Achievements */}
            <div className="space-y-2 bg-om-bg p-4 rounded-xs border border-om-border-subtle">
              <div className="text-[10px] text-om-muted uppercase font-semibold tracking-wider">
                {t.experience.activitiesTitle}
              </div>
              <ul className="space-y-2">
                {exp.achievements[language].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-om-fg/80 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-om-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Applied */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-2.5 py-1 bg-om-card border border-om-border text-om-cyan rounded-xs"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Experiências Profissionais Pré-Dev */}
      <div className="space-y-4 pt-2 font-mono">
        <div className="flex items-center justify-between border-b border-om-border-subtle pb-2">
          <div className="flex items-center gap-2 text-xs text-om-cyan uppercase tracking-wider font-semibold">
            <Briefcase className="w-4 h-4 text-om-lilac" />
            <span>{t.experience.preDevExpTitle}</span>
          </div>
          <button
            onClick={() => setShowPreDev(!showPreDev)}
            className="flex items-center gap-1 text-xs text-om-muted hover:text-om-fg transition-colors"
          >
            <span>{showPreDev ? '[ Recolher ]' : '[ Expandir ]'}</span>
            {showPreDev ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        <p className="text-xs text-om-muted leading-relaxed">
          {t.experience.preDevNotice}
        </p>

        {showPreDev && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {PRE_DEV_EXPERIENCE_DATA.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-om-surface border border-om-border rounded-xs space-y-2 text-xs"
              >
                <div className="flex items-center justify-between text-om-muted text-[11px] border-b border-om-border-subtle pb-1.5">
                  <span className="text-om-lilac font-semibold">{item.organization}</span>
                  <span className="text-om-yellow flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </span>
                </div>
                <div className="font-bold text-sm text-om-fg">
                  {item.role[language]}
                </div>
                {item.note && (
                  <p className="text-om-fg/75 text-[11px] leading-relaxed">
                    {item.note[language]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Formação Acadêmica & Idiomas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-mono">
        {/* Formação Acadêmica */}
        <div className="bg-om-surface border border-om-border p-6 rounded-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 text-om-yellow font-bold text-sm border-b border-om-border-subtle pb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{t.experience.educationTitle}</span>
          </div>

          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="space-y-3">
              <div>
                <h4 className="font-bold text-sm text-om-fg">{edu.degree[language]}</h4>
                <div className="text-om-lilac mt-0.5">{edu.institution}</div>
                <div className="text-om-muted text-[11px] mt-0.5">
                  {edu.period[language]} ({edu.status[language]})
                </div>
              </div>

              <div className="space-y-1.5 bg-om-bg p-3.5 rounded-xs border border-om-border-subtle">
                <div className="text-[10px] text-om-muted uppercase font-semibold">
                  {t.experience.completedCourses}
                </div>
                <ul className="space-y-1 text-om-fg/80 text-[11px]">
                  {edu.topics[language].map((course, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-om-green shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className="bg-om-surface border border-om-border p-6 rounded-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 text-om-cyan font-bold text-sm border-b border-om-border-subtle pb-2">
            <Award className="w-4 h-4" />
            <span>{t.experience.languagesTitle}</span>
          </div>

          <div className="space-y-3">
            {LANGUAGES_DATA.map((lang, idx) => (
              <div key={idx} className="p-3.5 bg-om-bg border border-om-border-subtle rounded-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-om-fg">{lang.language[language]}</span>
                  <span className="text-om-green font-semibold text-xs">{lang.level[language]}</span>
                </div>
                {lang.certification && (
                  <div className="text-om-muted text-[11px]">
                    {lang.certification[language]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 bg-om-bg border border-om-border-subtle rounded-xs text-om-muted text-[11px] leading-relaxed">
            {t.experience.langNote}
          </div>
        </div>
      </div>
    </section>
  );
};
