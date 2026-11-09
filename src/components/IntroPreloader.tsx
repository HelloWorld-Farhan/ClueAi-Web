import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_VERSION_TAG } from '../config/version';

interface IntroPreloaderProps {
  onComplete: () => void;
}

const WORDS = ['This', 'is', 'no', 'substitute', 'for', 'hard', 'code'];

export function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total animation sequence: words finish in ~1.5s, pause 0.8s, then smoothly transition
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)', transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-6 select-none cursor-pointer"
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

          {/* Focal headline with per-word blur and reveal */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] leading-[0.95] flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2">
              {WORDS.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    filter: 'blur(18px)',
                    y: 28,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.2 + index * 0.13,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Bottom subtle progress hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute bottom-10 text-[11px] font-mono text-neutral-500 tracking-widest uppercase"
          >
            Click anywhere to enter · Clue AI {APP_VERSION_TAG}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
