import React, { useState } from 'react';
import { X, Trophy, Rocket, Award, CheckCircle2, Briefcase, FileText, BookmarkCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HackathonShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HackathonShowcaseModal: React.FC<HackathonShowcaseModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'All' | 'Hackathons' | 'Research & Papers' | 'Inter-IIT' | 'Leadership'>('All');

  if (!isOpen) return null;

  const records = [
    {
      id: 'techphilia-9',
      title: 'Techphilia 9.0 Hackathon',
      category: 'Hackathons',
      award: 'Winner (1st Place)',
      organizer: 'Amity University Patna',
      year: '2026',
      problem: 'Developing rapid agentic AI workflows and resilient edge vision for high-impact campus and municipal systems.',
      solution: 'Architected and shipped an autonomous multi-modal processing pipeline with live video stream classification and cloud triage.',
      tags: ['Winner 1st Place', 'Amity Patna', 'FastAPI', 'OpenCV'],
      impact: 'Secured 1st Place Champion trophy among dozens of contending engineering teams.',
    },
    {
      id: 'sih-2026',
      title: 'Internal Smart India Hackathon (SIH\'26)',
      category: 'Hackathons',
      award: '3rd Position Podium',
      organizer: 'Ministry of Education & Institutional Screening',
      year: '2026',
      problem: 'Resolving massive civic report deduplication and urgent municipal dispatch routing.',
      solution: 'AI Kiosk: OSINT, multimodal computer vision, and Gemini NLP pipeline reducing duplicates by 82%.',
      tags: ['SIH\'26', '3rd Position', 'Gemini API', 'OSINT'],
      impact: 'Selected at 3rd Position in competitive institutional screening for Smart India Hackathon 2026.',
    },
    {
      id: 'uxathon-bit-sindri',
      title: 'UXATHON, Tech Mahotsav\'26',
      category: 'Hackathons',
      award: '3rd Position Podium',
      organizer: 'HnCC, BIT Sindri',
      year: '2026',
      problem: 'Building high-converting, accessible, and intuitive digital interfaces for complex multi-role workflows.',
      solution: 'Engineered an accessible clinical dashboard with instant visual telemetry and keyboard-first accessibility.',
      tags: ['BIT Sindri', '3rd Position', 'UXATHON', 'React'],
      impact: 'Recognized for highest visual discipline and seamless responsive interaction flow.',
    },
    {
      id: 'technova-hackathon',
      title: 'Technova Hackathon (Aagman Competition)',
      category: 'Hackathons',
      award: '3rd Position Podium',
      organizer: 'Impact Group of Colleges',
      year: '2026',
      problem: 'Real-time object classification and hardware sensor integration under 24-hour sprint constraints.',
      solution: 'Lightweight YOLO computer vision model optimized for rapid low-power edge inferencing.',
      tags: ['Technova', '3rd Position', 'Inter-College', 'Edge AI'],
      impact: 'Awarded 3rd Position trophy in the Aagman Inter-College Competition.',
    },
    {
      id: 'ncicir-2026',
      title: 'National Conference on Intelligent Computing (NCICIR-2026)',
      category: 'Research & Papers',
      award: '3rd Position & Paper Presenter',
      organizer: 'ISM Patna',
      year: '2026',
      problem: 'Clinical drug contraindication analysis and automated electronic health record safety verification.',
      solution: 'SafeScript AI: A deep graph reasoning framework using AWS Bedrock foundation models to flag adverse reactions.',
      tags: ['Paper Presenter', 'NCICIR-2026', 'SafeScript AI', 'Research'],
      impact: 'Delivered peer-reviewed oral paper presentation; awarded 3rd Position among national scholarly entries.',
    },
    {
      id: 'efos-skillup-india',
      title: 'EFOS Skill Up India Hackathon',
      category: 'Hackathons',
      award: '4th Position (AIR 4)',
      organizer: 'EFOS National Talent Assessment',
      year: '2024',
      problem: 'Competitive algorithmic design, system scalability, and high-throughput microservice engineering.',
      solution: 'Sub-50ms REST API architecture with real-time vector embeddings and robust error handling.',
      tags: ['AIR 4', '4th Position', 'Cloud Systems', 'Algorithms'],
      impact: 'Outperformed 10,000+ national contenders; placed in top 0.04 percentile.',
    },
    {
      id: 'et-ai-hackathon',
      title: 'ET-AI Hackathon 2026',
      category: 'Hackathons',
      award: 'National Semi-Finalist',
      organizer: 'The Economic Times Digital',
      year: '2026',
      problem: 'Enterprise GenAI problem statements addressing high-scale information synthesis and document reasoning.',
      solution: 'Chained retrieval-augmented generation (RAG) agent capable of parsing dense regulatory filings.',
      tags: ['ET Digital', 'Semi-Finalist', 'GenAI', 'LangChain'],
      impact: 'Advanced to Semi-Finalist stage in the flagship national AI competition by ET Digital.',
    },
    {
      id: 'vittarth-inter-iit',
      title: 'Vittarth 2.0 (Inter-IIT Challenge)',
      category: 'Inter-IIT',
      award: 'Round 2 Qualifier',
      organizer: 'IIT Roorkee, IIT Kharagpur, IIT Delhi, IIT Bombay & IIT Guwahati',
      year: '2025 - 2026',
      problem: 'Quantitative finance modeling, macro-economic forecasting, and algorithmic valuation.',
      solution: 'Data analytics model assessing systemic volatility and predictive macro indicators.',
      tags: ['Inter-IIT', 'IIT Consortium', 'Round 2', 'Quantitative'],
      impact: 'Successfully cleared Round 1 to qualify for Round 2 across 5 premier IIT institutes.',
    },
    {
      id: 'iit-kgp-fugacity',
      title: 'IIT Kharagpur FUGACITY Innovation Sprint',
      category: 'Inter-IIT',
      award: 'Top 10 National Finalist',
      organizer: 'Indian Institute of Technology, Kharagpur',
      year: '2024',
      problem: 'Hospital biomedical waste cross-contamination and infectious hazard classification.',
      solution: 'AyurVed: 24 FPS OpenCV & YOLOv8 computer vision classification triggering automated bin relays.',
      tags: ['IIT Kharagpur', 'Top 10 Finalist', 'YOLOv8', 'Edge AI'],
      impact: 'Top 10 National Finalist at India\'s premier technical institution.',
    },
    {
      id: 'aws-leadership-roles',
      title: 'AWS Builder & User Group Leadership',
      category: 'Leadership',
      award: 'AWS Group & Campus Leader',
      organizer: 'Amazon Web Services (AWS) & AWS User Group Bihar',
      year: '2023 - Present',
      problem: 'Bridging cloud computing and generative AI skills gaps across eastern India developer ecosystems.',
      solution: 'Spearheaded Prompt2Pixel across 5 universities, ran cloud immersion days, and mentored 1,500+ builders.',
      tags: ['AWS Intern', 'Group Leader', 'Campus Leader', 'AWS UG Bihar', 'HackerRank'],
      impact: 'Core Team Member AWS User Group Bihar & HackerRank Campus Ambassador.',
    },
  ];

  const filteredRecords = filter === 'All' 
    ? records 
    : records.filter(r => r.category === filter);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 dark:bg-zinc-950/90 backdrop-blur-md p-3 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Accolades & Competitions Ledger"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold">
              <Trophy className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white font-heading">
                Comprehensive Honors & Competitions Ledger
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                8+ Hackathon Podiums (SIH'26, Techphilia, BIT Sindri), NCICIR-2026 Paper, Inter-IIT Vittarth, and AWS Leadership.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-700 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar & Stats */}
        <div className="px-6 py-3 bg-zinc-100/70 dark:bg-zinc-950/40 border-b border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">Filter:</span>
            {(['All', 'Hackathons', 'Research & Papers', 'Inter-IIT', 'Leadership'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span><strong className="text-amber-600 dark:text-amber-400">10</strong> Tracked Entries</span>
            <span>·</span>
            <span><strong className="text-cyan-600 dark:text-cyan-400">AWS</strong> Intern & Lead</span>
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {filteredRecords.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white font-heading">
                    {item.title}
                  </h4>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    ({item.year})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${
                    item.award.includes('1st')
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                      : item.award.includes('3rd') || item.award.includes('Paper')
                      ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
                  }`}>
                    {item.award}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                Organized by: <strong className="text-zinc-700 dark:text-zinc-300">{item.organizer}</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 block mb-0.5">Problem / Focus:</span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.problem}</p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="font-semibold text-cyan-700 dark:text-cyan-400 block mb-0.5">Engineered Solution:</span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/80 text-xs">
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
                  {item.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            AWS Intern · AWS Student Builder Leader · HackerRank Ambassador
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Ledger
          </button>
        </div>

      </div>
    </div>
  );
};
