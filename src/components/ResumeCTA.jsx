import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiMail, FiArrowRight, FiTerminal } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function ResumeCTA({ onOpenTerminal }) {
  const { personalInfo } = portfolioData;

  const scrollToContact = () => {
    soundFx.playClick(620);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="resume-cta" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cyber-card p-8 sm:p-14 bg-[#0a0f1d]/90 border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden scanlines"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#030712] border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <FiFileText size={28} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight font-mono">
            Ready to Engineer Intelligent Solutions?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Seeking opportunities in Data Science, Machine Learning, AI Engineering, and Full-Stack Development. Let's build something remarkable.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick(500)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-extrabold font-mono text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <FiFileText size={16} />
              <span>Download Dossier PDF</span>
            </a>

            <button
              onClick={scrollToContact}
              onMouseEnter={() => soundFx.playHover()}
              className="px-6 py-3.5 rounded-xl bg-[#030712] hover:bg-white/10 text-white font-bold font-mono text-xs border border-white/20 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <FiMail size={16} className="text-cyan-400" />
              <span>Direct Transmission</span>
              <FiArrowRight size={14} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
