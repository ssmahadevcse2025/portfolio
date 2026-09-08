import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiCheckCircle, FiCode, FiLayers, FiServer } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
        
        {/* Modal Backdrop click */}
        <div className="absolute inset-0" onClick={onClose}></div>

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all"
            aria-label="Close modal"
          >
            <FiX size={18} />
          </button>

          {/* Category Tag */}
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold uppercase inline-block mb-3">
            {project.categoryDisplay}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{project.title}</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">{project.overview}</p>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-900 uppercase block mb-1">Problem Statement</span>
              <p className="text-xs text-slate-600 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60">
              <span className="text-xs font-bold text-blue-900 uppercase block mb-1">Technical Solution</span>
              <p className="text-xs text-slate-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Features:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <FiCheckCircle className="text-blue-600 text-sm flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Links Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>{project.buttonText || 'View Live Demo ↗'}</span>
              </a>
            )}

            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <FiServer size={14} className="text-purple-600" />
                <span>Backend API ↗</span>
              </a>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
