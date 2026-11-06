import React from 'react';
import { Cpu, Cloud, Trophy, GraduationCap, ArrowUpRight, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onOpenLedger: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenLedger }) => {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-[2px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <span>Background & Engineering DNA</span>
            <span aria-hidden="true">·</span>
            <span>01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
            Rapid prototyping, national hackathon podiums & cloud architectures.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I am a Computer Science & Engineering undergraduate at <strong className="text-zinc-900 dark:text-white">Amity University Patna</strong> specializing in Artificial Intelligence and Machine Learning. With <strong className="text-zinc-900 dark:text-white">8+ national hackathon wins (including Smart India Hackathon - SIH)</strong> and <strong className="text-zinc-900 dark:text-white">2+ startup pitch victories</strong>, I thrive at transforming complex algorithmic ideas into production-ready software under tight timelines.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: AI & Vision Systems */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading mb-2">
                Intelligent Vision & Agents
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Specialized in practical AI deployment: real-time edge computer vision using OpenCV & YOLOv8, and autonomous agents using LangChain and Gemini API. I build models that operate reliably in high-stakes environments like healthcare clinics and municipal triage.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2 font-mono">
              <span>OpenCV</span>
              <span aria-hidden="true">/</span>
              <span>FastAPI</span>
              <span aria-hidden="true">/</span>
              <span>LangChain</span>
              <span aria-hidden="true">/</span>
              <span>Gemini API</span>
            </div>
          </div>

          {/* Pillar 2: 8+ Hackathons & Startup Ideation Podiums */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading">
                  8+ Hackathons & Research
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Winner of Techphilia 9.0 (1st Place), 3rd Position at Internal SIH'26, 3rd at BIT Sindri UXATHON, 3rd at Technova, 4th at EFOS Skill Up India, and ET-AI Semi-Finalist. Additionally authored & presented research paper at NCICIR-2026 (SafeScript AI) and qualified for Vittarth 2.0 Inter-IIT challenge.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold font-mono">
                Techphilia 1st · SIH'26 3rd · NCICIR Paper
              </span>
              <button
                onClick={onOpenLedger}
                className="text-xs text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Ledger</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 3: AWS Student Builder & Community Leadership */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading mb-2">
                AWS Industry & Community Leadership
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Internship at AWS (Amazon Web Services), AWS Student Builder Group Leader, AWS Campus Leader, Core Team Member at AWS User Group Bihar, and HackerRank Campus Ambassador. Empowering 1,500+ builders through bootcamps and hackathons.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2 font-mono">
              <span>AWS Intern</span>
              <span aria-hidden="true">/</span>
              <span>Group Leader</span>
              <span aria-hidden="true">/</span>
              <span>Campus Lead</span>
              <span aria-hidden="true">/</span>
              <span>HackerRank</span>
            </div>
          </div>

        </div>

        {/* Education & Academic Credentials Strip */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/80 shrink-0">
              <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <span>Undergraduate Degree</span>
                <span aria-hidden="true">·</span>
                <span>2022 - 2026</span>
              </div>
              <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white font-heading mt-0.5">
                Bachelor of Technology in Computer Science & Engineering
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-0.5">
                Specialization in Artificial Intelligence & Machine Learning · <span className="text-zinc-900 dark:text-white font-medium">Amity University Patna</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
