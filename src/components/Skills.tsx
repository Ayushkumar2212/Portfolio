import React, { useState } from 'react';
import { Cloud, Cpu, Code, Layers, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Cloud & DevOps', 'AI / ML & Vision', 'Full Stack Development'];

  const filteredCategories = activeTab === 'All'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.name === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-500" />;
      default:
        return <Layers className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/75 backdrop-blur-[2px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <span>Technical Competencies</span>
              <span aria-hidden="true">·</span>
              <span>02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
              Skills & Superpowers
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
              Architecting production applications on AWS, building low-latency computer vision pipelines, and creating fluid modern web interfaces.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto max-w-full shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-zinc-900 dark:bg-zinc-800 text-white shadow-sm border border-transparent dark:border-zinc-700'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                    {category.name}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white font-heading">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0 font-mono">
                          <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{skill.level}</span>
                          <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
                          <span>{skill.experience}</span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Production tested in real builds</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* AWS Amplify Highlight Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white dark:via-zinc-900 to-cyan-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Cloud Specialization</span>
              <span aria-hidden="true">·</span>
              <span>AWS Global Community</span>
            </div>
            <h4 className="text-base font-bold text-zinc-900 dark:text-white font-heading">
              Ready for AWS Serverless & Bedrock Generative AI Architectures
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-xl">
              Deep expertise in deploying full-stack applications on AWS Amplify with event-driven Lambda backends, S3 asset buckets, and Foundation Models on AWS Bedrock.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.awsProfile}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            AWS Community Profile
          </a>
        </div>

      </div>
    </section>
  );
};
