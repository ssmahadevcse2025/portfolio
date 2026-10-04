import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiTerminal, FiVolume2, FiVolumeX, FiCpu } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Dossier' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Rankings' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Transmission' }
];

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'education', 'skills', 'what-i-do', 'workflow', 'projects', 'experience', 'achievements', 'certifications', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const unmuted = soundFx.toggleMute();
    setIsMuted(!unmuted);
  };

  const scrollToSection = (id) => {
    soundFx.playClick(580);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl py-3 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#030712]/40 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          onClick={() => scrollToSection('hero')}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all">
              SM
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-sm tracking-tight block group-hover:text-cyan-400 transition-colors">
                Shenbaga Maha Devan S
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold hidden sm:inline-block">
                AI/ML
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Data Science • Full Stack
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0f1d]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.25)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls (Terminal + Sound + Resume) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundFx.playClick(680);
              onOpenTerminal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
            title="Launch Interactive Terminal (Press ~)"
          >
            <FiTerminal className="animate-pulse" size={13} />
            <span>&gt;_ TERMINAL</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              !isMuted
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-slate-900/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
            }`}
            title={!isMuted ? 'Sound FX: ON (Click to Mute)' : 'Sound FX: MUTED (Click to Enable Audio)'}
          >
            {!isMuted ? <FiVolume2 size={15} /> : <FiVolumeX size={15} />}
          </button>

          {/* Resume CTA */}
          <a
            href={portfolioData.personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick(500)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02]"
          >
            <FiFileText size={13} />
            <span>Dossier</span>
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick(680);
              onOpenTerminal();
            }}
            className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400"
            title="Terminal"
          >
            <FiTerminal size={16} />
          </button>

          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border ${
              !isMuted
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
                : 'bg-slate-900 border-white/10 text-slate-400'
            }`}
          >
            {!isMuted ? <FiVolume2 size={16} /> : <FiVolumeX size={16} />}
          </button>

          <button
            onClick={() => {
              soundFx.playClick(450);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Cyber Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-4 pt-3 pb-6 mt-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold"
              >
                <FiTerminal size={14} />
                <span>TERMINAL</span>
              </button>

              <a
                href={portfolioData.personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold shadow-md"
              >
                <FiFileText size={14} />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
