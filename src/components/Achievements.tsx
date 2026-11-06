import React, { useState } from 'react';
import { Trophy, Award, Rocket, Cloud, ArrowRight, CheckCircle2, Briefcase, FileText, Users, BookmarkCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AchievementsProps {
  onOpenLedger: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenLedger }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hackathons & Contests', 'Research & Papers', 'Inter-IIT Challenges', 'Leadership & Experience'];

  const filteredAchievements = activeCategory === 'All'
    ? PORTFOLIO_DATA.achievements
    : PORTFOLIO_DATA.achievements.filter(item => item.category === activeCategory);

  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-cyan-500" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-purple-500" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-500" />;
      default:
        return <Award className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/75 backdrop-blur-[2px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <span>Track Record & Honors</span>
              <span aria-hidden="true">·</span>
              <span>04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
              Hackathon Podiums, Research & Leadership
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
              National hackathons (SIH'26, Techphilia 9.0, BIT Sindri), NCICIR paper presentation, Inter-IIT challenges, and AWS leadership.
            </p>
          </div>

          {/* Action Trigger */}
          <button
            onClick={onOpenLedger}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Interactive Accolades Ledger</span>
          </button>
        </div>

        {/* Industry & Community Leadership Roster (AWS Internship & Leaderships) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider font-heading">
              Industry Experience & Builder Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.leadershipRoles.map((role) => (
              <div
                key={role.role}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {role.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {role.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-zinc-900 dark:text-white font-heading">
                    {role.role}
                  </h4>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                    {role.organization}
                  </p>

                  <p className="mt-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>Verified Role & Leadership</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs for Competitions & Papers */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider font-heading">
              Competitive Podiums & Research ({PORTFOLIO_DATA.achievements.length})
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto max-w-full shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-800 text-white shadow-sm border border-transparent dark:border-zinc-700'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Header line with Category & Rank Badge */}
                <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{item.category}</span>
                    <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                    <span>{item.year}</span>
                  </div>
                  
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    item.rankBadge.includes('1st')
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                      : item.rankBadge.includes('3rd')
                      ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'
                  }`}>
                    {item.rankBadge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1">
                  {item.organization}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </span>

                <button
                  onClick={onOpenLedger}
                  className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
