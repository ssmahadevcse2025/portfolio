import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 py-10 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column */}
        <div className="text-center md:text-left">
          <div className="font-extrabold text-base text-white tracking-tight">
            Shenbaga Maha Devan S
          </div>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Data Science • AI/ML • Data Analytics • Software Development
          </p>
        </div>

        {/* Center Copyright */}
        <div className="text-xs text-slate-400 text-center">
          © 2026 Shenbaga Maha Devan S. All rights reserved.
        </div>

        {/* Right Column: Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
              title="LeetCode"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Email"
            >
              <FiMail size={16} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all ml-2"
            title="Back to Top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
