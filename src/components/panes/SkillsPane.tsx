import React, { useState } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../../data/skills';
import type { SkillItem } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { Layers, Terminal, CheckCircle2 } from 'lucide-react';

export const SkillsPane: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const categories = SKILL_CATEGORIES[language];
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS_DATA[0]);

  const isAll = selectedCategory === categories[0];
  const filtered = isAll
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category[language] === selectedCategory);

  return (
    <section aria-labelledby="skills-heading" className="space-y-6 max-w-6xl mx-auto py-2">
      {/* Header with Title and Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-om-border pb-4">
        <div>
          <h2 id="skills-heading" className="text-base font-bold text-om-fg flex items-center gap-2">
            <Layers className="w-4 h-4 text-om-cyan" />
            <span>{t.skills.title}</span>
          </h2>
          <p className="text-xs text-om-muted mt-1 font-mono">
            {t.skills.subtitle(filtered.length, selectedCategory.toLowerCase())}
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-1.5" role="toolbar" aria-label={t.skills.filterAria}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-xs border transition-all ${
                  isSelected
                    ? 'bg-om-purple-primary text-om-fg border-om-lilac font-semibold shadow-[0_0_8px_rgba(113,45,118,0.4)]'
                    : 'bg-om-bg text-om-muted border-om-border hover:border-om-lilac/50 hover:text-om-fg'
                }`}
                aria-pressed={isSelected}
              >
                [{cat}]
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Clean & Spacious Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Skills Cards List */}
        <div className="lg:col-span-7 space-y-3">
          {filtered.map((skill) => {
            const isSelected = activeSkill.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                className={`p-4 bg-om-surface border rounded-sm cursor-pointer transition-all duration-150 font-mono text-xs space-y-2 ${
                  isSelected
                    ? 'border-om-lilac bg-om-card shadow-[0_0_15px_rgba(113,45,118,0.3)]'
                    : 'border-om-border hover:border-om-lilac/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${isSelected ? 'text-om-lilac' : 'text-om-muted'}`}>
                      {isSelected ? '»' : '•'}
                    </span>
                    <span className="font-bold text-sm text-om-fg">{skill.name}</span>
                  </div>
                  <span className="text-[10px] text-om-muted px-2 py-0.5 bg-om-bg rounded-xs border border-om-border-subtle">
                    {skill.category[language]}
                  </span>
                </div>

                <p className="text-om-fg/80 text-xs leading-relaxed pl-5">
                  {skill.description[language]}
                </p>

                <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 bg-om-bg border border-om-border text-om-cyan rounded-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Focused Skill Inspector */}
        <div className="lg:col-span-5 bg-om-surface border border-om-border p-6 rounded-sm space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.3)] font-mono text-xs sticky top-4">
          <div className="flex items-center justify-between border-b border-om-border-subtle pb-3">
            <span className="text-om-cyan flex items-center gap-2 font-bold text-sm">
              <Terminal className="w-4 h-4" />
              <span>skill_inspector.sh</span>
            </span>
            <span className="text-om-green flex items-center gap-1 font-semibold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t.skills.verified}
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] text-om-muted uppercase font-semibold">{t.skills.selectedTitle}</div>
            <h3 className="text-lg font-bold text-om-fg">{activeSkill.name}</h3>
            <div className="text-om-lilac text-xs">{activeSkill.category[language]}</div>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] text-om-muted uppercase font-semibold">{t.skills.appTitle}</div>
            <p className="bg-om-bg p-3.5 rounded-xs border border-om-border-subtle text-om-fg/90 leading-relaxed text-xs">
              {activeSkill.description[language]}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] text-om-muted uppercase font-semibold">{t.skills.relatedTitle}</div>
            <div className="flex flex-wrap gap-1.5">
              {activeSkill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-om-purple-primary/40 border border-om-lilac/50 text-om-lilac rounded-xs text-[11px]"
                >
                  +{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-om-border-subtle text-[11px] text-om-muted leading-relaxed">
            {t.skills.tip}
          </div>
        </div>
      </div>
    </section>
  );
};
