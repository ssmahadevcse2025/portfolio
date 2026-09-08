import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaExternalLinkAlt, FaCheckCircle, FaMapMarkedAlt, FaHospitalUser, FaGopuram, FaServer } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const filterTabs = ['All', 'Data Science', 'AI/ML', 'Full Stack'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaLaptopCode />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mt-2 font-medium">
            Building practical solutions with Data Science, AI, and modern software technologies.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="light-card-interactive p-6 border border-slate-200 bg-white flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  
                  {/* Custom Project Illustration Box */}
                  <div className="w-full h-44 rounded-2xl mb-5 overflow-hidden border border-slate-100 relative bg-slate-900 p-4 text-slate-100 flex flex-col justify-between">
                    {project.id === 'datahawks' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
                          <span className="flex items-center gap-1 font-bold"><FaMapMarkedAlt /> KSP Crime Analytics</span>
                          <span className="px-2 py-0.5 rounded bg-blue-900/80 text-blue-300">STREAMLIT DEMO</span>
                        </div>

                        {/* Crime Hotspot Chart Graphic */}
                        <div className="my-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400 mb-1">
                            <span>Crime Density Hotspots</span>
                            <span className="text-emerald-400 font-bold">Predictive Risk: High</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                            <div className="bg-red-500 w-1/3"></div>
                            <div className="bg-amber-400 w-1/3"></div>
                            <div className="bg-emerald-400 w-1/3"></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                          <span>Scikit-learn • Pandas</span>
                          <span className="text-cyan-300 font-semibold">Click to view details</span>
                        </div>
                      </>
                    )}

                    {project.id === 'queue-cure' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                          <span className="flex items-center gap-1 font-bold"><FaHospitalUser /> Healthcare Queue Portal</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">MERN STACK</span>
                        </div>

                        {/* Queue Token Mockup */}
                        <div className="my-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 block">Token #042</span>
                            <span className="text-xs font-extrabold text-white">Dr. Availability: Live</span>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                            WAIT: 4 MIN
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                          <span>React • Node • Express</span>
                          <span className="text-emerald-300 font-semibold">Click to view details</span>
                        </div>
                      </>
                    )}

                    {project.id === 'darshan-ai' && (
                      <>
                        <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
                          <span className="flex items-center gap-1 font-bold"><FaGopuram /> Smart Temple AI Dashboard</span>
                          <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">REAL-TIME AI</span>
                        </div>

                        {/* Crowd density indicator mockup */}
                        <div className="my-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400 mb-1">
                            <span>Crowd Density Alerts</span>
                            <span className="text-purple-400 font-bold">Monitoring Active</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="flex-1 bg-purple-900/60 text-purple-200 text-[9px] font-mono py-1 text-center rounded">Density: Normal</span>
                            <span className="flex-1 bg-blue-900/60 text-blue-200 text-[9px] font-mono py-1 text-center rounded">Queue Flow: Optimal</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                          <span>Real-Time Maps & Dashboards</span>
                          <span className="text-purple-300 font-semibold">Click to view details</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Header Badge */}
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-mono font-bold uppercase inline-block mb-2">
                    {project.categoryDisplay}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <FaCheckCircle className="text-blue-600 text-xs flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Buttons & Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{project.buttonText}</span>
                    </a>

                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-1"
                        title="Backend API"
                      >
                        <FaServer className="text-purple-600" />
                        <span>Backend</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
