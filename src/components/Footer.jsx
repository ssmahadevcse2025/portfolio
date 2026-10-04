import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTerminal, FiCpu } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Footer({ onOpenTerminal }) {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    soundFx.playClick(800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] text-slate-400 py-12 relative border-t border-cyan-500/20 scanlines font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Left Column Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-base text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                AI ARCHITECT
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Data Science • AI/ML • Full-Stack Development • Algorithmic Engineering
            </p>
          </div>

          {/* Quick Terminal & Back to top action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick(680);
                onOpenTerminal();
              }}
              className="px-3 py-1.5 rounded-xl bg-[#0a0f1d] hover:bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FiTerminal size={14} />
              <span>TERMINAL OS</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
              title="Hyperdrive to Top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Status Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Shenbaga Maha Devan S. Engineered with React & Tailwind.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ALL SYSTEMS NOMINAL
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">NODE: CIT-CHENNAI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
