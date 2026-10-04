import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiX, FiMaximize2, FiMinimize2, FiCornerDownLeft } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const ASCII_BANNER = `
  ███████╗██╗  ██╗███████╗███╗   ██╗██████╗  █████╗  ██████╗  █████╗ 
  ██╔════╝██║  ██║██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔════╝ ██╔══██╗
  ███████╗███████║█████╗  ██╔██╗ ██║██████╔╝███████║██║  ███╗███████║
  ╚════██║██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗██╔══██║██║   ██║██╔══██║
  ███████║██║  ██║███████╗██║ ╚████║██████╔╝██║  ██║╚██████╔╝██║  ██║
  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
  SYSTEM: DATA SCIENCE • AI/ML • FULL STACK ARCHITECTURE
  TYPE 'help' FOR AVAILABLE PROTOCOLS.
`;

export default function TerminalView({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'banner',
      content: ASCII_BANNER
    },
    {
      type: 'output',
      content: "🚀 Welcome to Shenbaga Maha Devan's Cybernetic Command System v3.4. Type 'help' to inspect command matrix."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = inputVal.trim();
      soundFx.playTerminal();

      if (cmd) {
        setCommandHistory((prev) => [...prev, cmd]);
        setHistoryIndex(-1);
      }

      executeCommand(cmd);
      setInputVal('');
    }
  };

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.toLowerCase().trim();
    const newEntry = { type: 'command', content: `guest@shenbaga-cyber-os:~$ ${rawCmd}` };
    let outputEntry = null;

    switch (cmd) {
      case 'help':
        outputEntry = {
          type: 'output',
          content: `
AVAILABLE CYBER PROTOCOLS:
  • whoami       : Identification dossier of Shenbaga Maha Devan S
  • skills       : Neural skill matrix and technology proficiencies
  • projects     : Active AI/ML and software deployments with URLs
  • achievements : Competitive programming metrics (440+ LeetCode)
  • education    : Academic milestones at Chennai Institute of Technology
  • certs        : Verified cybersecurity & data science credentials
  • contact      : Communication frequencies & transmission channels
  • resume       : Download official PDF curriculum vitae
  • matrix       : Toggle digital rain matrix visualizer
  • clear / cls  : Purge terminal visual buffer
  • exit         : Terminate terminal session
`
        };
        break;

      case 'whoami':
      case 'about':
        outputEntry = {
          type: 'output',
          content: `
[IDENTITY MATRIX]
NAME       : Shenbaga Maha Devan S
ROLE       : Data Science & AI/ML Engineer | Full-Stack Developer
LOCATION   : Tenkasi, Tamil Nadu, India
COLLEGE    : Chennai Institute of Technology (BE CSE 2025–2029)
SUMMARY    : ${portfolioData.personalInfo.shortDescription}
`
        };
        break;

      case 'skills':
        outputEntry = {
          type: 'output',
          content: portfolioData.skillCategories
            .map(
              (cat) =>
                `\x1b[36m[${cat.category}]\x1b[0m\n  ` +
                cat.skills.map((s) => `• ${s}`).join('   ')
            )
            .join('\n\n')
        };
        break;

      case 'projects':
        outputEntry = {
          type: 'output',
          content: portfolioData.projects
            .map(
              (p, idx) => `
[0${idx + 1}] ${p.title} (${p.category})
    OVERVIEW : ${p.description}
    TECH     : ${p.technologies.join(', ')}
    LIVE     : ${p.liveUrl}`
            )
            .join('\n')
        };
        break;

      case 'achievements':
        outputEntry = {
          type: 'output',
          content: `
🏆 LEETCODE COMPETITIVE METRICS
• Username : ${portfolioData.achievements.username}
• Solved   : ${portfolioData.achievements.solved}
• Badge    : ${portfolioData.achievements.badge}
• URL      : ${portfolioData.achievements.url}
• Breakdown:
   - Data Structures: 180+ problems
   - Algorithms     : 160+ problems
   - Arrays/Strings : 100+ problems
`
        };
        break;

      case 'education':
        outputEntry = {
          type: 'output',
          content: portfolioData.education
            .map(
              (e) => `
INSTITUTION : ${e.institution}
DEGREE      : ${e.degree}
TIMELINE    : ${e.years} (${e.status})
DETAILS     : ${e.details}`
            )
            .join('\n')
        };
        break;

      case 'certs':
      case 'certifications':
        outputEntry = {
          type: 'output',
          content: portfolioData.certifications
            .map((c) => `  ✔ ${c.title} — Issued by ${c.issuer} [${c.category}]`)
            .join('\n')
        };
        break;

      case 'contact':
        outputEntry = {
          type: 'output',
          content: `
TRANSMISSION CHANNELS:
• Email    : ${portfolioData.personalInfo.email}
• Phone    : +91 ${portfolioData.personalInfo.phone}
• GitHub   : ${portfolioData.personalInfo.github}
• LinkedIn : ${portfolioData.personalInfo.linkedin}
• LeetCode : ${portfolioData.personalInfo.leetcode}
`
        };
        break;

      case 'resume':
        window.open(portfolioData.personalInfo.resumeUrl, '_blank');
        outputEntry = {
          type: 'output',
          content: `⚡ Initialized external download stream for: ${portfolioData.personalInfo.resumeUrl}`
        };
        break;

      case 'matrix':
        setIsMatrixMode((prev) => !prev);
        outputEntry = {
          type: 'output',
          content: `[MATRIX RAIN] Mode switched to: ${!isMatrixMode ? 'ACTIVE' : 'STANDBY'}`
        };
        break;

      case 'sudo':
        outputEntry = {
          type: 'output',
          content: '⚡ ACCESS GRANTED: User is elevated to Super-Architect status.'
        };
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        break;

      default:
        outputEntry = {
          type: 'error',
          content: `zsh: command not found: ${rawCmd}. Type 'help' for valid cyber commands.`
        };
    }

    setHistory((prev) => (outputEntry ? [...prev, newEntry, outputEntry] : [...prev, newEntry]));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className={`w-full bg-[#030712] border border-cyan-500/40 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col overflow-hidden relative font-mono text-xs sm:text-sm ${
            isFullScreen ? 'h-full max-w-full' : 'max-w-4xl h-[600px] max-h-[85vh]'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-cyan-500/30 select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    soundFx.playClick(400);
                    onClose();
                  }}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                  title="Close"
                />
                <button
                  onClick={() => {
                    soundFx.playClick(500);
                    setIsFullScreen(!isFullScreen);
                  }}
                  className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"
                  title="Resize"
                />
                <button
                  onClick={() => {
                    soundFx.playClick(600);
                    setHistory([]);
                  }}
                  className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"
                  title="Clear"
                />
              </div>
              <div className="flex items-center gap-2 ml-3 text-cyan-400 font-semibold text-xs tracking-wider">
                <FiTerminal className="animate-pulse text-cyan-400" />
                <span>SHENBAGA-CYBER-OS // v3.4 [NODE: CIT-CHENNAI]</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-1 hover:text-cyan-400 transition-colors"
                title="Toggle Fullscreen"
              >
                {isFullScreen ? <FiMinimize2 size={14} /> : <FiMaximize2 size={14} />}
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:text-red-400 transition-colors"
                title="Exit Terminal"
              >
                <FiX size={16} />
              </button>
            </div>
          </div>

          {/* Terminal Content Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 relative text-slate-200 scanlines bg-[#030712]/95">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'banner' && (
                  <pre className="text-[10px] sm:text-xs text-cyan-400 font-bold leading-none select-none mb-2 overflow-x-auto whitespace-pre">
                    {item.content}
                  </pre>
                )}

                {item.type === 'command' && (
                  <div className="text-cyan-300 font-bold flex items-center gap-1.5">
                    <span>{item.content}</span>
                  </div>
                )}

                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono mt-1 pl-2 border-l-2 border-cyan-500/30">
                    {item.content}
                  </pre>
                )}

                {item.type === 'error' && (
                  <div className="text-red-400 font-semibold pl-2 border-l-2 border-red-500">
                    {item.content}
                  </div>
                )}
              </div>
            ))}

            {/* Live Prompt Line */}
            <div className="flex items-center gap-2 pt-2 text-cyan-400">
              <span className="text-emerald-400 font-bold select-none">guest@shenbaga-cyber-os</span>
              <span className="text-slate-500 select-none">:</span>
              <span className="text-cyan-400 font-bold select-none">~$</span>
              <div className="flex-1 relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleCommand}
                  className="w-full bg-transparent text-slate-100 outline-none border-none font-mono caret-cyan-400 text-xs sm:text-sm p-0 m-0"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer Quick Bar */}
          <div className="px-4 py-2 bg-[#080d1a] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="text-cyan-500/80 hidden sm:inline">QUICK CODES:</span>
              {['help', 'whoami', 'skills', 'projects', 'achievements', 'contact', 'resume', 'clear'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      soundFx.playClick(650);
                      executeCommand(cmd);
                    }}
                    className="px-2 py-0.5 rounded bg-slate-800/60 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-500/40 border border-slate-700/50 transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                )
              )}
            </div>
            <span className="text-[10px] text-slate-500 hidden md:inline">PRESS ESC / TYPE EXIT</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
