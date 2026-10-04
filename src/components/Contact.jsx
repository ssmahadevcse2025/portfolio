import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiCopy, FiTerminal } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    soundFx.playClick(750);
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      soundFx.playClick(880);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FiTerminal className="text-cyan-400" />
            <span>TRANSMISSION PROTOCOL // 11</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Secure <span className="text-gradient-cyan text-glow-cyan">Transmission</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3 font-mono">
            Open for internships, collaborative research, project engineering, and technical discussions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Direct Coordinates Console (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="cyber-card p-6 sm:p-8 border-cyan-500/30 bg-[#0a0f1d]/90 flex-1 flex flex-col justify-between scanlines">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10 font-mono text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">COMMUNICATION FREQUENCIES</span>
                  <span className="text-emerald-400">RELAY: 24/7 ONLINE</span>
                </div>

                <div className="space-y-4">
                  {/* Email Coordinate */}
                  <div
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    onMouseEnter={() => soundFx.playHover()}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#030712] border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                        <FiMail size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          Email Coordinates
                        </span>
                        <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                          {personalInfo.email}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 group-hover:text-cyan-400 text-xs font-mono">
                      {copiedKey === 'email' ? '✔ COPIED' : <FiCopy />}
                    </span>
                  </div>

                  {/* Phone Coordinate */}
                  <div
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    onMouseEnter={() => soundFx.playHover()}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#030712] border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                        <FiPhone size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          Voice Relay
                        </span>
                        <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                          +91 {personalInfo.phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 group-hover:text-cyan-400 text-xs font-mono">
                      {copiedKey === 'phone' ? '✔ COPIED' : <FiCopy />}
                    </span>
                  </div>

                  {/* Location Coordinate */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#030712] border border-white/10">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                        Base Coordinates
                      </span>
                      <span className="text-xs font-bold text-white font-mono">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channels Grid */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 font-bold">EXTERNAL NODES:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-2.5 rounded-xl bg-[#030712] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    title="GitHub"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-2.5 rounded-xl bg-[#030712] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    title="LinkedIn"
                  >
                    <FiLinkedin size={16} />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-2.5 rounded-xl bg-[#030712] border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                    title="LeetCode"
                  >
                    <SiLeetcode size={16} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Encrypted Transmission Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="cyber-card p-6 sm:p-8 border-cyan-500/30 bg-[#0a0f1d]/90 scanlines">
              <h3 className="text-lg font-bold text-white font-mono mb-1">
                Send Encrypted Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Direct dispatch channel. Leave your message and return coordinates.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#030712] border border-emerald-500/40 text-center space-y-3">
                  <FiCheckCircle className="text-emerald-400 text-4xl mx-auto animate-bounce" />
                  <h4 className="font-extrabold text-white text-base font-mono">
                    TRANSMISSION LOGGED SUCCESSFULLY
                  </h4>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    Thank you, <strong className="text-cyan-400">{formData.name}</strong>! Your payload has been queued. I will dispatch a response to <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div>
                    <label className="block text-xs text-slate-400 uppercase mb-1 font-bold">
                      IDENTIFIER / NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 uppercase mb-1 font-bold">
                      RETURN EMAIL FREQUENCY
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 uppercase mb-1 font-bold">
                      TRANSMISSION PAYLOAD / MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Enter project specifications, internship requirements, or collaboration proposals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all font-mono resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-extrabold font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FiSend size={15} />
                    <span>TRANSMIT PAYLOAD</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
