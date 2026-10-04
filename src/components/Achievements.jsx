import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaAward, FaCheckCircle, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FaAward className="text-amber-400" />
            <span>COMPETITIVE RANKINGS // 08</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Algorithm <span className="text-gradient-purple text-glow-purple">Mastery</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Extensive problem-solving track record across algorithmic complexity, data structures, and dynamic programming.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        {/* LeetCode Main Cyber Achievement Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => soundFx.playHover()}
            className="cyber-card p-6 sm:p-8 border-amber-500/30 bg-[#0a0f1d]/90 scanlines"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  <SiLeetcode size={36} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase block tracking-wider">
                    {achievements.platform} COMPETITIVE PROFILE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                    {achievements.solved}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/40">
                      BADGE: {achievements.badge}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">@{achievements.username}</span>
                  </div>
                </div>
              </div>

              <a
                href={achievements.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick(650)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold font-mono text-xs shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2"
              >
                <span>Verify Profile ↗</span>
              </a>
            </div>

            {/* Algorithm Problem Categories Breakdown */}
            <div className="mt-6 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider block mb-3">
                [TOPOLOGY BREAKDOWN]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {achievements.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#030712] border border-white/10 flex items-center justify-between font-mono"
                  >
                    <span className="text-xs font-semibold text-slate-300">{cat.label}</span>
                    <span className="text-sm font-extrabold text-cyan-400">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Algorithm Visualizer Code Window */}
            <div className="mt-6 p-4 rounded-xl bg-[#030712] border border-white/10 font-mono text-xs text-slate-100">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <FaTerminal /> Pattern: Dynamic Programming & High Performance Graph Optimization
                </span>
                <span className="text-emerald-400">Time: O(N) | Space: O(1)</span>
              </div>
              <p className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                <span className="text-purple-400">class</span> <span className="text-cyan-400">OptimalSubstructure</span> &#123;<br/>
                &nbsp;&nbsp;<span className="text-purple-400">public</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">int</span> computeMaxSubarray(<span className="text-cyan-400">vector&lt;int&gt;&amp; nums</span>) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// Kadane's Algorithm execution</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">int</span> currentMax = nums[0], globalMax = nums[0];<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">for</span> (<span className="text-amber-400">size_t</span> i = 1; i &lt; nums.size(); ++i) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentMax = std::max(nums[i], currentMax + nums[i]);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;globalMax = std::max(globalMax, currentMax);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> globalMax;<br/>
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
