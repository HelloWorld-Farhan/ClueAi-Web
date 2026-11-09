import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Sparkles, Terminal, Copy, Check, ArrowRight, Zap, Cpu, EyeOff } from 'lucide-react';

interface HeroProps {
  onScrollToDownload: () => void;
  onOpenFeedback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDownload, onOpenFeedback }) => {
  const [copied, setCopied] = useState(false);
  const quickCommand = 'curl.exe -L -o ClueAI.exe https://tinyurl.com/2a2lfo9a; .\\ClueAI.exe';

  const handleCopy = () => {
    navigator.clipboard.writeText(quickCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Arched Celestial Horizon Dome (from code7.html) */}
      <div className="arc-horizon"></div>

      {/* Atmospheric radial ambient light */}
      <div className="absolute top-20 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 w-[450px] h-[250px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Clue AI v5.9.9 Now Live</span>
          <span className="text-white/40">&bull;</span>
          <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
            <EyeOff size={11} /> 100% Stealth Mode
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6 max-w-4xl"
        >
          Ace Every Technical Interview.{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent neon-glow-text">
            Completely Undetected.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8"
        >
          The stealth desktop AI copilot with sub-50ms real-time audio transcription, multi-LLM reasoning (Gemini, Claude, GPT-4o, DeepSeek), instant code execution, and screen snipping OCR.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10"
        >
          <button
            onClick={onScrollToDownload}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base neon-glow-btn flex items-center justify-center gap-2.5 shadow-xl transition-all"
          >
            <Download size={18} />
            <span>Download Clue AI v5.9.9</span>
            <ArrowRight size={16} />
          </button>

          <a
            href="#preview"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span>Explore Interactive Dock</span>
          </a>
        </motion.div>

        {/* Quick Install Terminal Pill (from code.html ambient design) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-xl bg-slate-950/80 border border-white/10 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/40 transition-colors"
        >
          <div className="flex items-center gap-2.5 min-w-0 pl-2">
            <Terminal size={15} className="text-cyan-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono text-slate-300 truncate selection:bg-cyan-500/30">
              {quickCommand}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium flex items-center gap-1.5 shrink-0 transition-all"
            title="Copy command to clipboard"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-300 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs font-medium"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Invisible to Zoom &amp; Meet</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-cyan-400" />
            <span>&lt; 50ms Real-Time Transcription</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={16} className="text-indigo-400" />
            <span>5 Leading LLM Providers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">&starf;&starf;&starf;&starf;&starf;</span>
            <span>Zero-Detection Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

