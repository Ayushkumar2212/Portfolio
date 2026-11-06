import React from 'react';
import { ArrowRight, Github, Linkedin, Trophy, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenLedger: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLedger }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 bg-grid-pattern transition-colors duration-200">
      {/* Subtle radial ambient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-amber-500/10 dark:bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Left Column Typography, Right Column Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-cyan-700 dark:text-cyan-400">
              <span className="text-zinc-600 dark:text-zinc-400">AWS Intern & Student Builder Leader</span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Winner Techphilia 9.0 · 3rd SIH'26 & BIT Sindri</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-heading leading-[1.08] [text-wrap:balance]">
              Building intelligent agentic systems, vision pipelines & leading developer communities.
            </h1>

            {/* Role & Bio Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-zinc-900 dark:text-white font-semibold">{PORTFOLIO_DATA.personal.name}</strong>. AWS Intern, AWS Student Builder Group & Campus Leader, Core Team Member at AWS User Group Bihar, and HackerRank Campus Ambassador. Winner of Techphilia 9.0, 3rd Position at Internal SIH'26, 3rd at BIT Sindri UXATHON, and NCICIR-2026 Research Paper Presenter.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg shadow-sm transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* Hackathon & Startup Ledger Trigger */}
              <button
                onClick={onOpenLedger}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>8+ Hackathons & Startup Wins</span>
              </button>
            </div>

            {/* Context meta line */}
            <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              <span>Amity University Patna</span>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
              <span>Available for high-stakes AI & Cloud initiatives</span>
            </div>

          </div>

          {/* Right Column Visual Container (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative border frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl">
                
                {/* Developer Studio Portrait */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                  <img
                    src={PORTFOLIO_DATA.personal.avatar}
                    alt={PORTFOLIO_DATA.personal.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/public/')) {
                        target.src = '/public' + PORTFOLIO_DATA.personal.avatar;
                      }
                    }}
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient scrim at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-zinc-950 via-white/70 dark:via-zinc-950/70 to-transparent" />
                </div>

                {/* Overlaid Bio Card at bottom of photo */}
                <div className="p-5 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-sm border-t border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h2 className="text-base font-bold text-zinc-900 dark:text-white font-heading">
                        {PORTFOLIO_DATA.personal.name}
                      </h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Amity University Patna · AI/ML
                      </p>
                    </div>

                    <button
                      onClick={onOpenLedger}
                      className="px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-md hover:bg-amber-500/20 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Trophy className="w-3 h-3 text-amber-500" />
                      <span>8+ Wins</span>
                    </button>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    AWS Intern & Student Builder Group Leader. Winner of Techphilia 9.0, 3rd at Internal SIH'26, 3rd at BIT Sindri UXATHON, and NCICIR-2026 Paper Presenter.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Placed Below the Split */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PORTFOLIO_DATA.highlights.map((item) => (
            <div 
              key={item.label}
              className="p-4 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-sm"
            >
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-medium">
                {item.label}
              </span>
              <span className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white font-heading tracking-tight mt-0.5 block">
                {item.value}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
