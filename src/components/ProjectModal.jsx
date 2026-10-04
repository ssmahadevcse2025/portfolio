import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiCheckCircle, FiCode, FiLayers, FiServer, FiTerminal } from 'react-icons/fi';
import { soundFx } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        
        {/* Modal Backdrop click */}
        <div className="absolute inset-0" onClick={onClose}></div>

        {/* Cyber Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0a0f1d] rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto scanlines"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              soundFx.playClick(400);
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#030712] border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <FiX size={18} />
          </button>

          {/* Header Metadata */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              {project.categoryDisplay}
            </span>
            <span className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              DEPLOYED
            </span>
          </div>

          {/* Title & Overview */}
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight font-mono">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
            {project.overview}
          </p>

          {/* Problem & Solution HUD Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#030712] border border-red-500/30">
              <span className="text-xs font-bold text-red-400 uppercase font-mono block mb-1">
                // Problem Statement
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#030712] border border-emerald-500/30">
              <span className="text-xs font-bold text-emerald-400 uppercase font-mono block mb-1">
                // Technical Solution
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-cyan-400 uppercase font-mono tracking-wider mb-3">
              [SYSTEM SPECIFICATIONS & FEATURES]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-slate-200 bg-[#030712] p-3 rounded-xl border border-white/10 font-mono"
                >
                  <FiCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Modules */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-purple-400 uppercase font-mono tracking-wider mb-2.5">
              [INTEGRATED TECHNOLOGIES]
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#030712] text-slate-300 text-xs font-mono font-semibold border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick(600)}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>{project.buttonText || 'Launch Live System ↗'}</span>
                <FiExternalLink size={14} />
              </a>
            )}

            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick(600)}
                className="py-3 px-5 rounded-xl bg-[#030712] hover:bg-white/10 text-slate-200 font-bold font-mono text-xs border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <FiServer size={14} className="text-purple-400" />
                <span>Backend Gateway ↗</span>
              </a>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
