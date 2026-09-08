import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaAward, FaCheckCircle, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FaAward />
            <span>Problem Solving Milestone</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Achievements & <span className="text-gradient-accent">Coding</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* LeetCode Main Achievement Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="light-card p-6 sm:p-8 border border-slate-200 bg-white relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                  <SiLeetcode size={36} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase block">{achievements.platform} Profile</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{achievements.solved}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">Verified Badge: <span className="text-slate-900 font-bold">{achievements.badge}</span></p>
                </div>
              </div>

              <a
                href={achievements.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
              >
                <span>View LeetCode Profile ↗</span>
              </a>
            </div>

            {/* Algorithm Problem Categories Breakdown */}
            <div className="mt-6 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">Problem Solving Focus:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {achievements.categories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">{cat.label}</span>
                    <span className="text-xs font-extrabold text-blue-600 font-mono">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Algorithm Visualizer Window */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400"><FaTerminal /> Solution Pattern: Data Structures & Algorithms</span>
                <span>Language: C++ / Python</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                <span className="text-purple-400">class</span> <span className="text-blue-400">ProblemSolver</span> &#123;<br/>
                &nbsp;&nbsp;<span className="text-purple-400">public</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">int</span> maxSubArray(<span className="text-cyan-400">vector&lt;int&gt;&amp; nums</span>) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">// Kadane's Algorithm - Optimized O(N) Time</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">int</span> maxSoFar = nums[0], currMax = nums[0];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">/* 440+ problems solved across arrays, dynamic programming & graphs */</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &#125;;
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
