import React, { useState, useEffect } from 'react';
import StarBackground from './components/StarBackground';
import TerminalView from './components/TerminalView';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import WhatIDo from './components/WhatIDo';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import OnlineProfiles from './components/OnlineProfiles';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { soundFx } from './utils/sound';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global hotkey listener (~ or ` to open terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        soundFx.playClick(680);
        setTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 relative">
      {/* Dynamic Starfield & Nebula Canvas Background */}
      <StarBackground />

      {/* Interactive Hacker Terminal Command Center */}
      <TerminalView isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Main UI Layer */}
      <div className="relative z-10">
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
        <main>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
          <About />
          <Education />
          <Skills />
          <WhatIDo />
          <Workflow />
          <Projects />
          <Experience />
          <Achievements />
          <Certifications />
          <OnlineProfiles />
          <ResumeCTA onOpenTerminal={() => setTerminalOpen(true)} />
          <Contact />
        </main>
        <Footer onOpenTerminal={() => setTerminalOpen(true)} />
      </div>
    </div>
  );
}
