import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiCode } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  const { githubInfo } = portfolioData;

  return (
    <section className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-sky-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FiGithub />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub & <span className="text-gradient">Open Source</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Repository highlights, project codebases, and developer contributions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* GitHub Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
              <FiGithub size={28} />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">@{githubInfo.username}</h3>
              <p className="text-xs text-slate-400">Data Science, AI & Web Development Repositories</p>
            </div>
          </div>

          <a
            href={githubInfo.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 font-bold text-xs border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
          >
            <span>Visit GitHub Profile</span>
            <FiExternalLink size={14} />
          </a>
        </motion.div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubInfo.repos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-sky-400 font-semibold">{repo.language}</span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><FiStar size={12} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><FiGitBranch size={12} /> {repo.forks}</span>
                  </div>
                </div>

                <h4 className="font-bold text-white text-base mb-2 group-hover:text-sky-300 transition-colors">
                  {repo.name}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>View Code Repository</span>
                <FiExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
