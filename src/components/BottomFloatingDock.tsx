import React, { useState, useEffect } from 'react';

interface BottomFloatingDockProps {
  onPrev?: () => void;
  onNext?: () => void;
  onTogglePlay?: () => void;
  onOpenOptions?: () => void;
}

export function BottomFloatingDock({
  onPrev,
  onNext,
  onTogglePlay,
  onOpenOptions,
}: BottomFloatingDockProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(2 * 3600 + 11 * 60 + 57);

  // Active ticking countdown simulator with Framer pulses
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <footer className="fixed bottom-6 left-0 w-full z-40 px-6 flex items-center justify-between pointer-events-none select-none">
      {/* Bottom Left: Live Audience / Active User Status Pill */}
      <div
        className="pointer-events-auto flex items-center space-x-2.5 bg-[#141416]/95 border border-neutral-800/80 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md hover:border-[#00E85D]/40 transition-colors"
        data-purpose="live-status-pill"
      >
        {/* Neon pulsing dot / eye icon */}
        <div className="w-5 h-5 rounded-full bg-[#00E85D]/20 flex items-center justify-center border border-[#00E85D]/50 shadow-[0_0_10px_rgba(0,232,93,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
        </div>
        <span className="text-xs text-neutral-200 font-medium tracking-tight">Just you watching right now</span>
        <span
          className="text-neutral-500 hover:text-neutral-300 cursor-pointer text-xs ml-0.5"
          title="Stealth Guard Active • Zero Process Footprint"
        >
          ⓘ
        </span>
      </div>

      {/* Bottom Center: Player / Countdown Floating Dock */}
      <div
        className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center bg-[#141416]/95 border border-neutral-800/90 px-3.5 py-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,232,93,0.15)] backdrop-blur-xl space-x-4 hover:border-[#00E85D]/50 transition-all duration-300 group"
        data-purpose="timeline-dock"
      >
        {/* Date Indicator Circle (Fixed geometry: no vertical collision) */}
        <div className="relative flex flex-col items-center justify-center w-9 h-9 rounded-full border border-[#00E85D] bg-black/80 shadow-[0_0_12px_rgba(0,232,93,0.4)] shrink-0 py-0.5">
          <span className="text-[11px] font-black leading-tight text-white tracking-tight">09</span>
          <span className="text-[7px] text-[#00E85D] font-extrabold tracking-widest uppercase leading-none mt-0.5">
            NOV
          </span>
        </div>

        {/* Dynamic Countdown Label */}
        <div className="flex items-center space-x-2 text-xs text-neutral-300 font-medium">
          <span className="text-neutral-400 hidden sm:inline">New quotes in</span>
          <span className="text-[#00E85D] font-mono font-bold tracking-wider drop-shadow-[0_0_8px_rgba(0,232,93,0.6)]">
            {hours} <span className="animate-pulse">·</span> {minutes} <span className="animate-pulse">·</span> {seconds}
          </span>
        </div>

        <div className="h-4 w-[1px] bg-neutral-800" />

        {/* Controls: Prev, Pause/Play, Next */}
        <div className="flex items-center space-x-1.5 text-neutral-300">
          {/* Previous */}
          <button
            onClick={onPrev}
            className="hover:text-white p-1 rounded-full transition hover:bg-neutral-800/60 cursor-pointer active:scale-95"
            title="Previous Feature Mode"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Pause / Play */}
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              onTogglePlay?.();
            }}
            className="w-7 h-7 rounded-md bg-neutral-800/90 hover:bg-[#00E85D] hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-sm active:scale-90"
            title={isPlaying ? 'Pause Timer' : 'Resume Timer'}
          >
            {isPlaying ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="hover:text-white p-1 rounded-full transition hover:bg-neutral-800/60 cursor-pointer active:scale-95"
            title="Next Feature Mode"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="h-4 w-[1px] bg-neutral-800" />

        {/* Expand and Options */}
        <div className="flex items-center space-x-1 text-neutral-400">
          {/* Fullscreen / Focus Mode */}
          <button
            onClick={toggleFullscreen}
            className="hover:text-[#00E85D] p-1.5 transition cursor-pointer"
            title="Toggle Fullscreen"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* More Options / Feedback */}
          <button
            onClick={onOpenOptions}
            className="hover:text-[#00E85D] p-1.5 transition cursor-pointer"
            title="Open Direct Feedback"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Empty right placeholder to preserve spacing */}
      <div className="w-40 hidden sm:block" />
    </footer>
  );
}
