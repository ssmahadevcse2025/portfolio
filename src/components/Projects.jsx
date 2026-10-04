import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaExternalLinkAlt, FaCheckCircle, FaMapMarkedAlt, FaHospitalUser, FaGopuram, FaServer, FaTerminal, FaCodeBranch } from 'react-icons/fa';
import { FiArrowUpRight, FiLayers, FiMaximize2 } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';
import ProjectModal from './ProjectModal';

const filterTabs = ['All', 'Data Science', 'AI/ML', 'Full Stack'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaCodeBranch className="text-cyan-400" />
            <span>DEPLOYED SYSTEMS // 06</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-cyan text-glow-cyan">Deployments</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Production-ready AI models, spatial analytics platforms, and full-stack web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Cyber Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0a0f1d] border border-white/10 shadow-lg">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundFx.playClick(620);
                  setActiveTab(tab);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cyber Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => {
                  soundFx.playClick(700);
                  setSelectedProject(project);
                }}
                className="cyber-card p-6 border-white/10 hover:border-cyan-500/50 transition-all bg-[#0a0f1d]/90 flex flex-col justify-between group cursor-pointer scanlines"
              >
                <div>
                  
                  {/* Cyber Project Visual Screen */}
                  <div className="w-full h-44 rounded-2xl mb-5 overflow-hidden border border-white/10 relative bg-[#030712] p-4 text-slate-100 flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
                    {project.id === 'datahawks' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
                          <span className="flex items-center gap-1.5 font-bold">
                            <FaMapMarkedAlt /> KSP Crime Analytics
                          </span>
                          <span className="px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-500/30 text-[9px]">
                            STREAMLIT
                          </span>
                        </div>

                        {/* Visual Mockup Bar */}
                        <div className="my-2 bg-[#080d1a] p-2.5 rounded-xl border border-white/5">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400 mb-1.5">
                            <span>Spatial Crime Clustering</span>
                            <span className="text-emerald-400 font-bold">DBSCAN Active</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex gap-1">
                            <div className="bg-red-500 w-1/3 rounded-l"></div>
                            <div className="bg-amber-400 w-1/3"></div>
                            <div className="bg-emerald-400 w-1/3 rounded-r"></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-white/5">
                          <span>Scikit-learn • Pandas</span>
                          <span className="text-cyan-300 flex items-center gap-1 group-hover:text-cyan-200">
                            Inspect Dossier <FiMaximize2 size={10} />
                          </span>
                        </div>
                      </>
                    )}

                    {project.id === 'queue-cure' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                          <span className="flex items-center gap-1.5 font-bold">
                            <FaHospitalUser /> Healthcare Queue Portal
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 text-[9px]">
                            MERN
                          </span>
                        </div>

                        {/* Queue Token Mockup */}
                        <div className="my-2 bg-[#080d1a] p-2.5 rounded-xl border border-white/5 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 block">Token #042 Live</span>
                            <span className="text-xs font-bold text-white font-mono">Dr. Status: Active</span>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold">
                            WAIT: 4 MIN
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-white/5">
                          <span>React • Express • MongoDB</span>
                          <span className="text-emerald-300 flex items-center gap-1">
                            Inspect Dossier <FiMaximize2 size={10} />
                          </span>
                        </div>
                      </>
                    )}

                    {project.id === 'darshan-ai' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
                          <span className="flex items-center gap-1.5 font-bold">
                            <FaGopuram /> Smart Temple AI Dashboard
                          </span>
                          <span className="px-2 py-0.5 rounded bg-purple-950/90 text-purple-300 border border-purple-500/30 text-[9px]">
                            AI REALTIME
                          </span>
                        </div>

                        {/* Crowd density indicator mockup */}
                        <div className="my-2 bg-[#080d1a] p-2.5 rounded-xl border border-white/5">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400 mb-1.5">
                            <span>Crowd Density Alerts</span>
                            <span className="text-purple-400 font-bold">Live Stream</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="flex-1 bg-purple-950/60 border border-purple-500/30 text-purple-200 text-[9px] font-mono py-1 text-center rounded">
                              Density: Normal
                            </span>
                            <span className="flex-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 text-[9px] font-mono py-1 text-center rounded">
                              Flow: Optimal
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-white/5">
                          <span>Real-Time Maps & Dashboards</span>
                          <span className="text-purple-300 flex items-center gap-1">
                            Inspect Dossier <FiMaximize2 size={10} />
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Header Badge */}
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold uppercase inline-block mb-2">
                    {project.categoryDisplay}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-mono">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <FaCheckCircle className="text-cyan-400 text-xs flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Buttons & Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#030712] text-slate-400 border border-white/10 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => soundFx.playHover()}
                      onClick={() => soundFx.playClick(600)}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{project.buttonText}</span>
                      <FiArrowUpRight size={14} />
                    </a>

                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => soundFx.playHover()}
                        onClick={() => soundFx.playClick(600)}
                        className="py-2.5 px-3 rounded-xl bg-[#030712] hover:bg-white/10 text-slate-300 font-bold font-mono text-xs border border-white/10 transition-all flex items-center justify-center gap-1"
                        title="Backend API"
                      >
                        <FaServer className="text-purple-400" />
                        <span>API</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Cyber Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
