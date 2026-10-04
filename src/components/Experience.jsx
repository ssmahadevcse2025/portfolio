import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaUniversity, FaCheckCircle, FaAward, FaTerminal } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaBriefcase className="text-cyan-400" />
            <span>OPERATIONAL TIMELINE // 07</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Engineering <span className="text-gradient-cyan text-glow-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Practical projects, AI pipelines, predictive models, and full-stack software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Experience Cyber Node */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-card p-6 sm:p-8 border-cyan-500/30 bg-[#0a0f1d]/90 scanlines relative"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase inline-block mb-2">
                  // ACADEMIC & PRACTICAL ENGINEERING
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-mono">
                  Student Developer & AI Data Practitioner
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mt-1">
                  Chennai Institute of Technology
                </h4>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#030712] border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                <FaCalendarAlt className="text-cyan-400" />
                <span>2025 – PRESENT</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">
                [OPERATIONAL MILESTONES & CORE DELIVERABLES]
              </h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#030712]/60 p-3 rounded-xl border border-white/5">
                  <FaCheckCircle className="text-cyan-400 text-sm mt-0.5 flex-shrink-0" />
                  <span>
                    Developed AI-powered crime analytics dashboard (<strong className="text-cyan-300">DataHawks</strong>) using Python, Streamlit, Scikit-learn, and spatial clustering algorithms.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#030712]/60 p-3 rounded-xl border border-white/5">
                  <FaCheckCircle className="text-purple-400 text-sm mt-0.5 flex-shrink-0" />
                  <span>
                    Built healthcare queue management portal (<strong className="text-purple-300">Queue Cure</strong>) using React, Node.js, Express, and MongoDB document storage.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#030712]/60 p-3 rounded-xl border border-white/5">
                  <FaCheckCircle className="text-emerald-400 text-sm mt-0.5 flex-shrink-0" />
                  <span>
                    Created smart temple crowd and pilgrim safety monitoring platform (<strong className="text-emerald-300">DarshanAI</strong>) with real-time maps and alert triggers.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-[#030712]/60 p-3 rounded-xl border border-white/5">
                  <FaCheckCircle className="text-amber-400 text-sm mt-0.5 flex-shrink-0" />
                  <span>
                    Completed industry learning credentials from Cisco Networking Academy (Python), IBM SkillsBuild (Data Fundamentals), and MongoDB.
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {['Python', 'Data Analytics', 'Machine Learning', 'Streamlit', 'MERN Stack', 'Scikit-learn', 'DBSCAN'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[#030712] text-slate-400 text-xs font-mono border border-white/10"
                  >
                    #{skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
