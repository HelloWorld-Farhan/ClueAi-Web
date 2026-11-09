import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_VERSION_TAG } from '../config/version';

interface IntroPreloaderProps {
  onComplete: () => void;
}

const TOP_WORDS = ['This', 'is', 'no'];
const MID_WORD = 'substitute';
const BOT_WORDS = ['for', 'hard', 'code'];

export function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total animation sequence: words finish in ~1.2s, message at 1.4s, hold, then smoothly fade overlay
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2400);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2900);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-4 select-none cursor-pointer"
          onClick={handleSkip}
        >
          {/* Subtle glowing brand badge on top */}
          <motion.div
            initial={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center space-x-2.5 mb-8 px-4 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 shadow-[0_0_20px_rgba(0,232,93,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
            <span className="text-xs font-mono font-bold text-neutral-300 tracking-wider">
              CLUE AI <span className="text-[#00E85D]">·</span> UNDETECTED COPILOT
            </span>
          </motion.div>

          {/* Focal headline: EXACT same 3-line format as the main screen */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.93] select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              {TOP_WORDS.map((word, i) => (
                <motion.span
                  key={`pre-top-${word}`}
                  initial={{ opacity: 0, filter: 'blur(16px)', y: 22, scale: 0.95 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3 md:mr-5"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, filter: 'blur(16px)', y: 22, scale: 0.95 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {MID_WORD}
              </motion.span>
              <br />
              {BOT_WORDS.map((word, i) => (
                <motion.span
                  key={`pre-bot-${word}`}
                  initial={{ opacity: 0, filter: 'blur(16px)', y: 22, scale: 0.95 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3 md:mr-5 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Clue AI Technical Interview Copilot Core Message */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.95, duration: 0.5, ease: 'easeOut' }}
              className="mt-6 md:mt-8 max-w-2xl mx-auto space-y-1.5 px-4"
            >
              <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,232,93,0.35)]">
                The Undetected AI Copilot for Technical Interviews
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wide">
                Zero Screen Share Detection <span className="text-[#00E85D]">·</span> Real-Time Whisper STT <span className="text-[#00E85D]">·</span> Multi-LLM LeetCode Solver
              </p>
            </motion.div>
          </div>

          {/* Bottom subtle enter hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute bottom-10 text-[11px] font-mono text-neutral-500 tracking-widest uppercase"
          >
            Click anywhere to enter · Clue AI {APP_VERSION_TAG}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
