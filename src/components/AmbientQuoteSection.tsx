import React from 'react';
import { motion } from 'framer-motion';
import { APP_VERSION_TAG } from '../config/version';

interface AmbientQuoteSectionProps {
  onActionClick: () => void;
}

interface ClueFeatureQuote {
  col: string;
  row: string;
  sizeClass: string;
  text: string;
  pill?: string;
}

const CLUE_FEATURES: ClueFeatureQuote[] = [
  // Top Row
  {
    col: 'col-start-1 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-xs md:text-sm font-medium tracking-tight text-neutral-500/50',
    text: 'Stealth Invisibility · OBS & Zoom screen share bypass',
    pill: 'STEALTH',
  },
  {
    col: 'col-start-2 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-sm md:text-base font-semibold text-neutral-400/50',
    text: 'Whisper STT · <50ms dual-channel audio stream',
  },
  {
    col: 'col-start-3 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-base md:text-xl font-bold text-neutral-400/50 leading-snug',
    text: 'Multi-LLM Matrix · Gemini 2.0, Claude 3.5 Sonnet, GPT-4o',
  },
  {
    col: 'col-start-4 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-sm md:text-lg font-medium text-neutral-400/40',
    text: 'DeepSeek-R1 · Real-time Chain-of-Thought reasoning',
  },
  {
    col: 'col-start-5 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-xs md:text-sm text-neutral-500/50',
    text: 'Zero Telemetry · 100% Client-Side SQLite encryption',
  },
  {
    col: 'col-start-6 col-span-1',
    row: 'row-start-1',
    sizeClass: 'text-2xl md:text-4xl font-extrabold text-neutral-500/35 uppercase tracking-tighter',
    text: 'UNDETECTED',
  },

  // Upper Middle Row
  {
    col: 'col-start-1 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-sm md:text-base font-semibold text-neutral-400/50 leading-snug max-w-xs',
    text: 'Voice-Activated Teleprompter · Hands-free speech-gated scrolling',
  },
  {
    col: 'col-start-2 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-xl md:text-3xl font-extrabold text-neutral-400/45 tracking-tight',
    text: 'LeetCode Hard in 12s',
  },
  {
    col: 'col-start-3 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-base md:text-xl font-bold text-neutral-300/50',
    text: 'In-App Code Sandbox · Python 3 & TypeScript test-runner',
  },
  {
    col: 'col-start-4 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-sm md:text-base text-neutral-400/45',
    text: 'Dual-Resume Priority Engine · Matches job specs',
  },
  {
    col: 'col-start-5 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-xs md:text-sm font-medium text-neutral-400/45',
    text: 'Global Hotkey Ctrl + \\ · Instant 1ms stealth toggle',
  },
  {
    col: 'col-start-6 col-span-1',
    row: 'row-start-2',
    sizeClass: 'text-sm md:text-base font-medium text-neutral-400/50 leading-tight',
    text: 'Vision OCR Snipper · Instant diagram & IDE problem capture',
  },

  // Mid Row (Sides of Hero)
  {
    col: 'col-start-1 col-span-1',
    row: 'row-start-3',
    sizeClass: 'text-2xl md:text-3xl font-black text-neutral-300/50 leading-none',
    text: '42px Compact Dimension',
  },
  {
    col: 'col-start-2 col-span-1',
    row: 'row-start-3',
    sizeClass: 'text-xs md:text-sm font-semibold text-neutral-400/50',
    text: 'Multi-Inbox Cloud Sync · Automated Google Apps Script alerts',
  },
  {
    col: 'col-start-5 col-span-1',
    row: 'row-start-3',
    sizeClass: 'text-xs md:text-sm font-medium text-neutral-400/45',
    text: 'Silent Dual Updater · Zero terminal flash on relaunch',
  },
  {
    col: 'col-start-6 col-span-1',
    row: 'row-start-3',
    sizeClass: 'text-lg md:text-2xl font-black text-neutral-300/55 leading-tight',
    text: 'Ace Every Interview Undetected',
  },

  // Lower Mid Row
  {
    col: 'col-start-1 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-sm md:text-base font-semibold text-neutral-400/50',
    text: 'Transparent Borderless HUD · Floats over all IDEs',
  },
  {
    col: 'col-start-2 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-lg md:text-xl font-bold text-neutral-400/45',
    text: 'Session History & PDF Export',
  },
  {
    col: 'col-start-3 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-xs md:text-sm text-neutral-500/50',
    text: 'Anti-Collision Mutex · Single instance launch guard',
  },
  {
    col: 'col-start-4 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-base md:text-lg font-bold text-neutral-400/40',
    text: 'Offline Voice VAD Filter',
  },
  {
    col: 'col-start-5 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-xs md:text-sm text-neutral-500/50',
    text: 'Cross-Platform Windows, macOS Universal & Linux',
  },
  {
    col: 'col-start-6 col-span-1',
    row: 'row-start-4',
    sizeClass: 'text-xl md:text-3xl font-black text-neutral-400/50',
    text: 'The AI is my secret pair programmer',
  },

  // Bottom Row
  {
    col: 'col-start-1 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-xs text-neutral-500/60 leading-tight',
    text: 'Real-time Waveform Audio Visualizer with live decibel response',
  },
  {
    col: 'col-start-2 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-sm md:text-base font-bold text-neutral-500/50',
    text: 'Zero Lag Relaunch Architecture',
  },
  {
    col: 'col-start-3 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-xs md:text-sm text-neutral-500/45',
    text: 'Human-Like Voice Cadence & Conversational Answers',
  },
  {
    col: 'col-start-4 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-xs md:text-sm text-neutral-500/50',
    text: 'High-Priority Resume Context Matching',
  },
  {
    col: 'col-start-5 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-xs text-neutral-500/50',
    text: 'Instant Diagnostic Logs & Telemetry-Free Privacy',
  },
  {
    col: 'col-start-6 col-span-1',
    row: 'row-start-5',
    sizeClass: 'text-2xl md:text-4xl font-extrabold text-neutral-400/40',
    text: `${APP_VERSION_TAG.toUpperCase()} ACTIVE`,
  },
];

export function AmbientQuoteSection({ onActionClick }: AmbientQuoteSectionProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20">
      {/* Ambient Quotes Grid / Layer with Framer Motion & Glow on Hover */}
      <div
        className="absolute inset-0 pointer-events-none grid grid-cols-6 grid-rows-5 gap-3 p-8 overflow-hidden"
        data-purpose="ambient-quote-cloud"
      >
        {CLUE_FEATURES.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0.6 }}
            animate={{
              y: [0, (idx % 2 === 0 ? -4 : 4), 0],
              opacity: [0.55, 0.75, 0.55],
            }}
            transition={{
              duration: 5 + (idx % 5),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.08,
              opacity: 1,
              zIndex: 30,
              transition: { duration: 0.2 },
            }}
            className={`${item.col} ${item.row} ${item.sizeClass} pointer-events-auto cursor-pointer p-2.5 rounded-xl border border-transparent hover:border-[#00E85D]/60 hover:bg-[#00E85D]/[0.08] hover:text-white transition-all duration-200 select-none group relative`}
            style={{
              textShadow: '0 0 1px transparent',
            }}
          >
            <span className="group-hover:text-[#00E85D] group-hover:drop-shadow-[0_0_12px_rgba(0,232,93,0.85)] transition-all">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* BEGIN: Hero Focus Quote (Exact from code.html) */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pointer-events-auto"
        data-purpose="hero-quote-container"
      >
        {/* Dominant Foreground Quote with Per-Word Blur Animation */}
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.93] select-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
          {['This', 'is', 'no'].map((w, i) => (
            <motion.span
              key={`top-${w}`}
              initial={{ opacity: 0, filter: 'blur(14px)', y: 15 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3 md:mr-5"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, filter: 'blur(14px)', y: 15 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            substitute
          </motion.span>
          <br />
          {['for', 'hard', 'code'].map((w, i) => (
            <motion.span
              key={`bot-${w}`}
              initial={{ opacity: 0, filter: 'blur(14px)', y: 15 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3 md:mr-5 last:mr-0"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        {/* Neon Green Action CTA Button (Exact from code.html) */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onActionClick}
            className="neon-glow-btn inline-flex items-center space-x-2 bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-sm sm:text-base px-6 py-3 rounded-full cursor-pointer transition transform hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(0,232,93,0.6)]"
          >
            {/* Person / Speaker Icon */}
            <svg
              className="w-5 h-5 stroke-black fill-none"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Who said that? / Get Clue AI</span>
          </button>
        </div>
      </div>
      {/* END: Hero Focus Quote */}
    </section>
  );
}
