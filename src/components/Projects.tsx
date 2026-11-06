import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X, Layers, CheckCircle, Award } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'AI & Vision', 'Cloud & Full Stack', 'Startup & Community'];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-[2px] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <span>Featured Engineering</span>
              <span aria-hidden="true">·</span>
              <span>03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading">
              Intelligent Systems & Hackathon Flagships
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
              Selected production platforms, computer vision edge detectors, and pan-university developer initiatives.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto max-w-full shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-zinc-900 dark:bg-zinc-800 text-white shadow-sm border border-transparent dark:border-zinc-700'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group cursor-pointer rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-cyan-500/5 ${
                  isWide ? 'md:col-span-2 lg:grid lg:grid-cols-12 lg:items-stretch' : 'col-span-1'
                }`}
              >
                {/* Media Image Showcase */}
                <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-950 ${
                  isWide ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[260px]' : 'aspect-[16/10]'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Category & Award Badge on image */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-950/80 backdrop-blur-sm text-cyan-300 border border-zinc-700/80 font-mono">
                      {project.category}
                    </span>
                    {project.award && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/90 backdrop-blur-sm text-zinc-950 font-sans shadow-sm flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{project.award}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className={`p-6 sm:p-8 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-5' : 'flex-1'
                }`}>
                  <div>
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
                      <span>{project.tags[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tags[1]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.tags[2]}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-heading group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-300 mt-1">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric KPIs */}
                    <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                      {project.metrics.map(metric => (
                        <div key={metric.label}>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-mono block">
                            {metric.label}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white font-heading tabular-nums">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action footer */}
                  <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                      <span>Explore Architecture & Code</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>

                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Deep Dive
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Expansion Modal / Lightbox */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 dark:bg-zinc-950/90 backdrop-blur-md p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80">
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <span>{activeModalProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{activeModalProject.title}</span>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-700 cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Project Hero Image */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title, Award & Tagline */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {activeModalProject.award && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      🏆 {activeModalProject.award}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-300 mt-1">
                  {activeModalProject.tagline}
                </p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                {activeModalProject.metrics.map(metric => (
                  <div key={metric.label} className="text-center">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-mono block">
                      {metric.label}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-heading tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* System Architecture Highlights */}
              <div>
                <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Key Architecture & Pipeline Highlights</span>
                </h4>
                <div className="space-y-2">
                  {activeModalProject.architecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Metadata List */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2 font-mono">Technologies & Frameworks:</span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                  {activeModalProject.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < activeModalProject.tags.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-semibold text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
