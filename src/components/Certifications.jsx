import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaShieldAlt className="text-cyan-400" />
            <span>AUTHENTICATED CREDENTIALS // 09</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan text-glow-cyan">Licenses</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Verified qualifications from global technology organizations, academies, and data science platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              onMouseEnter={() => soundFx.playHover()}
              className="cyber-card p-6 border-white/10 hover:border-cyan-500/50 transition-all bg-[#0a0f1d]/90 flex flex-col justify-between group scanlines cursor-default"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#030712] border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <FaCertificate size={18} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-[#030712] px-2 py-0.5 rounded border border-cyan-500/30 block w-fit mb-2">
                  {cert.category}
                </span>
                <h3 className="font-bold text-white text-base mb-1 font-mono group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-xs text-slate-400 font-mono">{cert.issuer}</h4>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <FaCheckCircle size={13} className="text-emerald-400" />
                <span>VERIFIED CREDENTIAL</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
