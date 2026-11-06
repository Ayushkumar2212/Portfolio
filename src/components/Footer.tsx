import React from 'react';
import { Github, Linkedin, Twitter, Cloud, ArrowUp, Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenLedger: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLedger }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & AWS Amplify Hosting Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-heading font-bold text-zinc-900 dark:text-white tracking-tight text-base">
            Ayush Kumar
          </span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
          <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <Cloud className="w-3.5 h-3.5 text-amber-500" />
            <span>Hosted globally on <strong className="text-zinc-900 dark:text-zinc-200 font-medium">AWS Amplify</strong></span>
          </div>
        </div>

        {/* Links & Ledger Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Achievements</a>
          <button 
            onClick={onOpenLedger} 
            className="text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold cursor-pointer flex items-center gap-1"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>8+ Hackathons & Startup Wins</span>
          </button>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800"
            aria-label="Twitter/X"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800 cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-600 gap-2">
        <p>© 2026 Ayush Kumar. Built with React, TypeScript & Tailwind CSS.</p>
        <p className="flex items-center gap-1">
          <span>8+ Hackathons & 2+ Startup Wins</span>
          <span>·</span>
          <span>Amity University Patna</span>
        </p>
      </div>
    </footer>
  );
};
