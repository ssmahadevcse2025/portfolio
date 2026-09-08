import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiEye, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection() {
  const { personalInfo } = portfolioData;

  return (
    <section id="resume" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FiFileText />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Download or view the comprehensive, recruiter-friendly PDF portfolio document.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Resume Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 text-center relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] mx-auto mb-6 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-sky-400">
              <FiFileText size={28} />
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-2">
            Shenbaga_maha_devan_S_Professional_Portfolio.pdf
          </h3>
          <p className="text-xs font-mono text-sky-400 mb-6">
            BE Computer Science • Chennai Institute of Technology (2025)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <FiCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
              <span>ATS & Recruiter Optimized</span>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <FiCheckCircle className="text-sky-400 text-sm flex-shrink-0" />
              <span>IBM & MongoDB Certified</span>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <FiCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
              <span>100% Verified Profile Data</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <FiDownload size={16} />
              <span>Download PDF Resume</span>
            </a>

            <a
              href={personalInfo.digitalResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
            >
              <FiEye className="text-sky-400" size={16} />
              <span>View Interactive Digital Version</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
