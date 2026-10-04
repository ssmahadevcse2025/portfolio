import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiTerminal, FiTrendingUp, FiCheckCircle, FiCpu, FiLayers, FiActivity } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Hero({ onOpenTerminal }) {
  const { personalInfo } = portfolioData;

  // Typing effect for subtitle keywords
  const titles = [
    'Data Science & AI/ML Engineer',
    'Full-Stack Web Architect',
    'Algorithm & Problem Solver (440+ LeetCode)',
    'Data Visualizer & Analytics Specialist'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          fullText.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const scrollToSection = (id) => {
    soundFx.playClick(620);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      {/* Subtle background ambient radial light */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column — Cyber Identity (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0f1d]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wider uppercase font-semibold">
                SYSTEM ONLINE // CSE @ CIT CHENNAI (2025–2029)
              </span>
            </div>

            {/* Name Heading with Glitch & Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-3">
              I'm <span className="text-gradient-cinematic text-glow-cyan">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 flex items-center mb-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 font-mono flex items-center gap-1">
                <span>{currentText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
              </h2>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 pl-4 border-l-2 border-cyan-500/50 bg-gradient-to-r from-cyan-950/20 to-transparent py-2 rounded-r-lg">
              {personalInfo.positioning}
            </p>

            {/* Live Stats Matrix */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
              <div className="p-3 rounded-xl bg-[#0a0f1d]/80 border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="text-xs font-mono text-slate-400">LeetCode</div>
                <div className="text-lg sm:text-xl font-black text-amber-400 group-hover:scale-105 transition-transform">440+</div>
                <div className="text-[10px] text-slate-500 font-mono">100 Day Badge</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0f1d]/80 border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="text-xs font-mono text-slate-400">AI Deployments</div>
                <div className="text-lg sm:text-xl font-black text-cyan-400 group-hover:scale-105 transition-transform">3+ Live</div>
                <div className="text-[10px] text-slate-500 font-mono">DataHawks & more</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0f1d]/80 border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="text-xs font-mono text-slate-400">Education</div>
                <div className="text-lg sm:text-xl font-black text-purple-400 group-hover:scale-105 transition-transform">CIT</div>
                <div className="text-[10px] text-slate-500 font-mono">BE CSE 2025–29</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Projects</span>
                <FiArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(680);
                  onOpenTerminal();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-5 py-3.5 rounded-xl bg-[#0a0f1d] hover:bg-cyan-950/60 text-cyan-400 font-mono font-bold text-xs border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <FiTerminal size={15} />
                <span>Command Matrix</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick(500)}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs border border-white/15 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <FiDownload className="text-cyan-400" size={15} />
                <span>Resume Dossier</span>
              </a>
            </div>

            {/* Social Transmission Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                CHANNELS:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                  title="GitHub Profile"
                >
                  <FiGithub size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                  title="LinkedIn Profile"
                >
                  <FiLinkedin size={18} />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all shadow-sm"
                  title="LeetCode (440+ Solved)"
                >
                  <SiLeetcode size={18} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all shadow-sm"
                  title="Email Direct Transmission"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Hero Right Column — Cyber HUD Visualizer (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="cyber-card p-6 border-cyan-500/30 relative overflow-hidden bg-[#0a0f1d]/90 shadow-[0_0_40px_rgba(0,0,0,0.8)] scanlines">
              
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono font-bold text-cyan-400 ml-2 tracking-wider">
                    AI PIPELINE // LIVE STREAM
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 animate-pulse">
                  SYSTEM READY
                </span>
              </div>

              {/* Real-time Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-[#030712]/80 border border-cyan-500/20">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    PRIMARY MODEL
                  </span>
                  <span className="text-xs font-extrabold text-cyan-400 block mt-0.5 font-mono">
                    DataHawks ML
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Spatial DBSCAN Clustering</span>
                </div>
                <div className="p-3 rounded-xl bg-[#030712]/80 border border-purple-500/20">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    HOSPITAL QUEUE AI
                  </span>
                  <span className="text-xs font-extrabold text-purple-400 block mt-0.5 font-mono">
                    Queue Cure System
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Full-Stack MERN Hub</span>
                </div>
              </div>

              {/* Animated Crime & Neural Wave Graph */}
              <div className="p-4 rounded-xl bg-[#030712] border border-white/10 mb-5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <FiActivity className="animate-pulse" /> Crime Analytics Radar
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Scikit-learn Active</span>
                </div>

                {/* SVG Visual Graph */}
                <svg className="w-full h-24 stroke-cyan-400 fill-none" viewBox="0 0 300 80">
                  <defs>
                    <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 240, 255, 0.4)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.0)" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Wave Area */}
                  <path d="M0 60 Q 50 15, 100 45 T 200 10 T 300 35 L 300 80 L 0 80 Z" fill="url(#cyberGrad)" stroke="none" />
                  {/* Main Line */}
                  <path d="M0 60 Q 50 15, 100 45 T 200 10 T 300 35" strokeWidth="2.5" stroke="url(#cyberGradLine)" />

                  <linearGradient id="cyberGradLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>

                  {/* Hotspot Nodes */}
                  <circle cx="100" cy="45" r="4" fill="#00f0ff" />
                  <circle cx="200" cy="10" r="4" fill="#a855f7" />
                  <circle cx="260" cy="22" r="5" fill="#10b981" className="animate-pulse" />
                </svg>

                <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-2 pt-2 border-t border-white/10">
                  <span className="text-cyan-400">DBSCAN Spatial Hotspots</span>
                  <span className="text-purple-400">Temporal Crime Cycles</span>
                  <span className="text-emerald-400">Confidence: 94.8%</span>
                </div>
              </div>

              {/* Institution / Cyber Verification */}
              <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 font-mono">
                  <FiCheckCircle className="text-cyan-400 text-sm" />
                  <span>Chennai Institute of Technology</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400">BE CSE (2025–2029)</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
