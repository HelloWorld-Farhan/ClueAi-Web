import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Terminal,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
} from 'lucide-react';
import { APP_VERSION, APP_VERSION_TAG, DOWNLOAD_LINKS } from '../config/version';

interface BottomFloatingDockProps {
  onPrev?: () => void;
  onNext?: () => void;
  onTogglePlay?: (isPlaying: boolean) => void;
  onOpenOptions?: () => void;
  onGoToDownload?: () => void;
}

export function BottomFloatingDock({
  onPrev,
  onNext,
  onTogglePlay,
  onOpenOptions,
  onGoToDownload,
}: BottomFloatingDockProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [now, setNow] = useState(new Date());
  const [showInfoPopover, setShowInfoPopover] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const downloadMenuRef = useRef<HTMLDivElement>(null);
  const infoPopoverRef = useRef<HTMLDivElement>(null);

  // Real-time live 24-hour clock - stops ticking when paused
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Keyboard Navigation: Left key -> Left page, Right key -> Right page (works in both fullscreen & normal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev?.();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext?.();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Space bar toggles pause/play
        e.preventDefault();
        setIsPlaying((prev) => {
          const nextState = !prev;
          onTogglePlay?.(nextState);
          return nextState;
        });
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setShowInfoPopover(false);
        setShowDownloadMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, onTogglePlay]);

  // Click outside listener for popovers
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        downloadMenuRef.current &&
        !downloadMenuRef.current.contains(e.target as Node)
      ) {
        setShowDownloadMenu(false);
      }
      if (
        infoPopoverRef.current &&
        !infoPopoverRef.current.contains(e.target as Node)
      ) {
        setShowInfoPopover(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <footer className="fixed bottom-6 left-0 w-full z-40 px-6 flex items-center justify-between pointer-events-none select-none">
      {/* Bottom Left: Live Audience / Active User Status Pill */}
      <div className="relative pointer-events-auto" ref={infoPopoverRef}>
        <div
          className="flex items-center space-x-2.5 bg-[#141416]/95 border border-neutral-800/80 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md hover:border-[#00E85D]/50 transition-all cursor-pointer"
          data-purpose="live-status-pill"
          onClick={() => setShowInfoPopover(!showInfoPopover)}
        >
          {/* Neon pulsing dot */}
          <div className="w-5 h-5 rounded-full bg-[#00E85D]/20 flex items-center justify-center border border-[#00E85D]/50 shadow-[0_0_10px_rgba(0,232,93,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
          </div>
          <span className="text-xs text-neutral-200 font-medium tracking-tight">Just you watching right now</span>
          <span
            className="text-neutral-400 hover:text-[#00E85D] transition-colors text-xs ml-0.5"
            title="Click for Stealth Status Info"
          >
            ⓘ
          </span>
        </div>

        {/* Info Popover Anchored Above Left Pill */}
        <AnimatePresence>
          {showInfoPopover && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-12 left-0 w-80 bg-[#0f0f13] border border-neutral-800 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,232,93,0.15)] z-50 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-neutral-800/80 pb-2 mb-3">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#00E85D]" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Stealth Session Guard
                  </span>
                </div>
                <button
                  onClick={() => setShowInfoPopover(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2 text-[11px] text-neutral-300">
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-500 font-mono">Current Audience:</span>
                  <span className="text-white font-mono font-bold">1 Viewer (You)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-500 font-mono">Screen Share Bypass:</span>
                  <span className="text-[#00E85D] font-mono font-bold">100% Active</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-500 font-mono">Remote Telemetry:</span>
                  <span className="text-[#00E85D] font-mono font-bold">0 Bytes (Zero)</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-500 font-mono">Local Storage:</span>
                  <span className="text-neutral-200 font-mono">AES-256 Encrypted</span>
                </div>
              </div>

              <p className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-800/80 leading-relaxed">
                Your session is completely isolated. No video, audio, or telemetry leaves your machine.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Center: Player / Real-Time Floating Dock */}
      <div
        className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center bg-[#141416]/95 border border-neutral-800/90 px-3.5 py-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,232,93,0.15)] backdrop-blur-xl space-x-4 hover:border-[#00E85D]/50 transition-all duration-300 group"
        data-purpose="timeline-dock"
      >
        {/* Date Indicator Circle */}
        <div className="relative flex flex-col items-center justify-center w-9 h-9 rounded-full border border-[#00E85D] bg-black/80 shadow-[0_0_12px_rgba(0,232,93,0.4)] shrink-0 py-0.5">
          <span className="text-[11px] font-black leading-tight text-white tracking-tight">{day}</span>
          <span className="text-[7px] text-[#00E85D] font-extrabold tracking-widest uppercase leading-none mt-0.5">
            {month}
          </span>
        </div>

        {/* Real-Time 24-Hour Clock with Pause Indicator */}
        <div className="flex items-center space-x-2 text-xs font-medium">
          <span className="text-neutral-400 hidden sm:inline">
            {isPlaying ? 'Live 24H' : 'Clock Paused'}
          </span>
          <span
            className={`font-mono font-bold tracking-wider transition-colors ${
              isPlaying
                ? 'text-[#00E85D] drop-shadow-[0_0_8px_rgba(0,232,93,0.6)]'
                : 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
            }`}
          >
            {hours} <span className={isPlaying ? 'animate-pulse' : ''}>·</span> {minutes}{' '}
            <span className={isPlaying ? 'animate-pulse' : ''}>·</span> {seconds}
          </span>
        </div>

        <div className="h-4 w-[1px] bg-neutral-800" />

        {/* Controls: Prev, Pause/Play, Next */}
        <div className="flex items-center space-x-1.5 text-neutral-300">
          {/* Previous (ArrowLeft shortcut) */}
          <button
            onClick={onPrev}
            className="hover:text-white p-1 rounded-full transition hover:bg-neutral-800/60 cursor-pointer active:scale-95"
            title="Previous Page (Left Arrow Key)"
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

          {/* Pause / Play (Space shortcut) */}
          <button
            onClick={() => {
              const nextState = !isPlaying;
              setIsPlaying(nextState);
              onTogglePlay?.(nextState);
            }}
            className={`w-7 h-7 rounded-md flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90 ${
              isPlaying
                ? 'bg-neutral-800/90 hover:bg-[#00E85D] text-white hover:text-black'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-400 hover:text-black'
            }`}
            title={isPlaying ? 'Pause Live Clock & Drift (Space)' : 'Resume Live Clock & Drift (Space)'}
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

          {/* Next (ArrowRight shortcut) */}
          <button
            onClick={onNext}
            className="hover:text-white p-1 rounded-full transition hover:bg-neutral-800/60 cursor-pointer active:scale-95"
            title="Next Page (Right Arrow Key)"
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

        {/* Fullscreen and Three-Dot Multiple Download Options */}
        <div className="flex items-center space-x-1 text-neutral-400 relative" ref={downloadMenuRef}>
          {/* Fullscreen / Focus Mode Toggle */}
          <button
            onClick={toggleFullscreen}
            className="hover:text-[#00E85D] p-1.5 transition cursor-pointer"
            title="Toggle Fullscreen (F)"
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

          {/* Three Dots Button: Opens Multiple Download Options Menu */}
          <button
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            className={`p-1.5 transition cursor-pointer rounded-full ${
              showDownloadMenu ? 'text-[#00E85D] bg-neutral-800' : 'hover:text-[#00E85D]'
            }`}
            title="Multiple Download Options & Tools"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>

          {/* Elevated Multiple Download Options Popover */}
          <AnimatePresence>
            {showDownloadMenu && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-12 right-0 w-72 bg-[#0e0e12] border border-neutral-800 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(0,232,93,0.2)] z-50 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5 mb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E85D] font-bold">
                      Direct Downloads · {APP_VERSION_TAG}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDownloadMenu(false)}
                    className="text-neutral-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  {/* Windows Option */}
                  <a
                    href={DOWNLOAD_LINKS.windowsExeDirect}
                    download={`ClueAI-v${APP_VERSION}.exe`}
                    className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/80 hover:bg-[#00E85D]/15 border border-neutral-800/80 hover:border-[#00E85D]/50 transition group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-base">🪟</span>
                      <div>
                        <span className="text-xs font-bold text-white group-hover:text-[#00E85D] block">
                          Windows Installer (.exe)
                        </span>
                        <span className="text-[9px] text-neutral-400 font-mono">10 &amp; 11 (64-bit)</span>
                      </div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#00E85D]" />
                  </a>

                  {/* macOS Option */}
                  <a
                    href={DOWNLOAD_LINKS.macDmgDirect}
                    download={`ClueAI-${APP_VERSION}-mac.dmg`}
                    className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/80 hover:bg-[#00E85D]/15 border border-neutral-800/80 hover:border-[#00E85D]/50 transition group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-base">🍎</span>
                      <div>
                        <span className="text-xs font-bold text-white group-hover:text-[#00E85D] block">
                          macOS Universal (.dmg)
                        </span>
                        <span className="text-[9px] text-neutral-400 font-mono">Apple Silicon &amp; Intel</span>
                      </div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#00E85D]" />
                  </a>

                  {/* Linux Option */}
                  <a
                    href={DOWNLOAD_LINKS.linuxAppImageDirect}
                    download={`ClueAI-${APP_VERSION}-linux.AppImage`}
                    className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 transition group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-base">🐧</span>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Linux AppImage
                        </span>
                        <span className="text-[9px] text-neutral-400 font-mono">x64 Portable</span>
                      </div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                  </a>

                  {/* Copy PowerShell One-Liner */}
                  <button
                    onClick={() => copyToClipboard('quick-ps', DOWNLOAD_LINKS.windowsPsScript)}
                    className="w-full flex items-center justify-between p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/80 transition text-left cursor-pointer"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-base">⚡</span>
                      <div>
                        <span className="text-xs font-bold text-neutral-200 block">
                          PowerShell Script
                        </span>
                        <span className="text-[9px] text-neutral-400 font-mono">One-line instant terminal launch</span>
                      </div>
                    </div>
                    {copiedKey === 'quick-ps' ? (
                      <Check className="w-3.5 h-3.5 text-[#00E85D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                  </button>
                </div>

                {/* Bottom link to full downloads page */}
                <button
                  onClick={() => {
                    setShowDownloadMenu(false);
                    onGoToDownload?.();
                  }}
                  className="w-full mt-3 pt-2.5 border-t border-neutral-800/80 text-[11px] font-mono text-[#00E85D] hover:underline flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Open Full Download Hub</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Empty right placeholder */}
      <div className="w-40 hidden sm:block" />
    </footer>
  );
}
