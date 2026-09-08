import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiCode, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 bg-light-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content — Left Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>CSE Student • Data Science • AI/ML</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Hi, I'm <span className="text-gradient-accent">{personalInfo.name}</span>
            </h1>

            {/* Main Professional Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-3 tracking-tight">
              {personalInfo.primaryIdentity}
            </h2>

            {/* Secondary Line */}
            <h3 className="text-sm sm:text-base font-bold text-slate-600 mb-6 font-mono">
              {personalInfo.secondaryIdentity}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 border-l-3 border-blue-600 pl-4 py-1">
              {personalInfo.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <FiArrowRight size={16} />
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <FiDownload className="text-blue-600" size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-200/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
                  title="GitHub Profile"
                >
                  <FiGithub size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
                  title="LinkedIn Profile"
                >
                  <FiLinkedin size={18} />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-amber-600 hover:border-amber-300 transition-all shadow-2xs"
                  title="LeetCode Profile (440+ Solved)"
                >
                  <SiLeetcode size={18} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
                  title="Email Me"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Hero Visual Widget — Right Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="light-card p-6 border border-slate-200/90 shadow-md relative overflow-hidden bg-white">
              
              {/* Widget Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-mono font-bold text-slate-700 ml-2">Data Science & AI Pipeline</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  LIVE MODEL
                </span>
              </div>

              {/* Data Science Metric Cards */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Featured AI Project</span>
                  <span className="text-xs font-extrabold text-blue-600 block mt-0.5">DataHawks Analytics</span>
                  <span className="text-[10px] text-slate-500">Crime Prediction & Hotspots</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Problem Solving</span>
                  <span className="text-xs font-extrabold text-amber-600 block mt-0.5">440+ Solved</span>
                  <span className="text-[10px] text-slate-500">LeetCode 100 Day Badge</span>
                </div>
              </div>

              {/* Prediction Graph SVG */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-100 mb-5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-sky-400 font-bold flex items-center gap-1.5">
                    <FiTrendingUp /> Crime Trend Clustering Graph
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Scikit-learn Model</span>
                </div>

                {/* SVG Visual Graph */}
                <svg className="w-full h-24 stroke-blue-400 fill-none" viewBox="0 0 300 80">
                  <path d="M0 60 Q 50 20, 100 45 T 200 15 T 300 35" strokeWidth="3" />
                  <path d="M0 60 Q 50 20, 100 45 T 200 15 T 300 35 L 300 80 L 0 80 Z" fill="rgba(56, 189, 248, 0.1)" stroke="none" />
                  <circle cx="100" cy="45" r="4" className="fill-cyan-400" />
                  <circle cx="200" cy="15" r="4" className="fill-purple-400" />
                  <circle cx="250" cy="25" r="4" className="fill-emerald-400 animate-pulse" />
                </svg>

                <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-1 pt-2 border-t border-slate-800">
                  <span>Input: Spatial Data</span>
                  <span>Clustering: DBSCAN / K-Means</span>
                  <span>Output: Hotspot Alert</span>
                </div>
              </div>

              {/* Academic Badge Footer */}
              <div className="flex items-center justify-between text-xs text-slate-600 font-medium pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-blue-600 text-sm" />
                  <span>Chennai Institute of Technology</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">BE CSE (2025–2029)</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
