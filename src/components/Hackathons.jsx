import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const badgeStyles = {
  winner: 'bg-emerald-950 text-emerald-400 border-emerald-800/50',
  shortlisted: 'bg-amber-950 text-amber-300 border-amber-800/50',
  finalist: 'bg-cyan-950 text-cyan-300 border-cyan-800/50',
  participated: 'bg-blue-950 text-sky-400 border-blue-800/50'
};

export default function Hackathons() {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FiAward />
            <span>Innovation & Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hackathons & <span className="text-gradient">Competitions</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Demonstrating teamwork, rapid technical prototyping, and problem solving under competition constraints.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all hover:shadow-xl group"
            >
              <div>
                {/* Header Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold uppercase ${badgeStyles[hack.statusBadge] || badgeStyles.participated}`}>
                    ● {hack.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <FiCalendar size={12} />
                    {hack.year}
                  </span>
                </div>

                {/* Title & Domain */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {hack.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 mb-4">{hack.domain}</p>

                {/* Role */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-4 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <FiUsers className="text-sky-400" />
                  <span>Role: <strong>{hack.role}</strong></span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {hack.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-2 mb-6">
                  {hack.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <FiCheckCircle className="text-sky-400 text-xs mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between items-center">
                <span>Verification: Event Records</span>
                <span className="text-sky-400 font-semibold">{hack.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
