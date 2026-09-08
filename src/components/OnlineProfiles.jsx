import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink, FiCompass } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function OnlineProfiles() {
  const { personalInfo, currentlyExploring } = portfolioData;

  const profiles = [
    {
      name: "GitHub",
      subtitle: "Projects & Code Repositories",
      url: personalInfo.github,
      icon: FiGithub,
      color: "text-slate-900",
      bgColor: "bg-slate-100"
    },
    {
      name: "LinkedIn",
      subtitle: "Professional Profile & Network",
      url: personalInfo.linkedin,
      icon: FiLinkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "LeetCode",
      subtitle: "440+ Problems Solved | 100 Day Badge",
      url: personalInfo.leetcode,
      icon: SiLeetcode,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Find Me Online Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <FiExternalLink />
            <span>Online Presence</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Find Me <span className="text-gradient-accent">Online</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 3 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {profiles.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="light-card p-6 border border-slate-200 bg-white flex flex-col justify-between hover:border-blue-300 transition-all hover:shadow-md group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${p.bgColor} ${p.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    <span>{p.name}</span>
                    <FiExternalLink size={14} className="text-slate-400 group-hover:text-blue-600" />
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{p.subtitle}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Currently Exploring Interest Tags Section */}
        <div className="max-w-4xl mx-auto light-card p-6 sm:p-8 bg-white border border-slate-200 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <FiCompass />
            <span>Learning Horizon</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Currently Exploring</h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto mb-6">
            Areas of interest and technical subjects I am actively exploring through coursework and self-study.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {currentlyExploring.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
