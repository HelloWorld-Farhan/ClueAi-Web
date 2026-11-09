import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { APP_VERSION_TAG } from '../config/version';

export type AwardType = 'ui' | 'ux' | 'stealth' | 'special';

interface AwardDetails {
  id: AwardType;
  badgeTitle: string;
  badgeSub: string;
  badgeStatus: string;
  title: string;
  category: string;
  year: string;
  issuer: string;
  summary: string;
  highlights: string[];
  sealColor: string;
}

export const AWARDS_DATA: Record<AwardType, AwardDetails> = {
  ui: {
    id: 'ui',
    badgeTitle: 'BEST UI',
    badgeSub: 'DESIGN',
    badgeStatus: 'AWARDED',
    title: 'Best UI Design Excellence',
    category: 'Developer Tools & Micro-HUD Architecture',
    year: '2024 / 2025',
    issuer: 'Global Interface & Ergonomics Consortium',
    summary:
      'Awarded for the revolutionary 42px compact stealth micro-UI, smooth celestial curve geometry, and low-distraction dark mode designed specifically for zero cognitive load during live coding interviews.',
    highlights: [
      '42px Ultra-Compact HUD dimension with 1ms toggle',
      'Zero Screen-Share Leak frame architecture',
      'Emerald High-Contrast Ambient HUD typography',
      'Framer Motion 60fps micro-animations & layout stability',
    ],
    sealColor: '#00E85D',
  },
  ux: {
    id: 'ux',
    badgeTitle: 'BEST UX',
    badgeSub: 'DESIGN',
    badgeStatus: 'AWARDED',
    title: 'Best UX & Micro-Interaction Flow',
    category: 'Real-time AI Copilot & Voice Systems',
    year: '2024 / 2025',
    issuer: 'Modern Software Ergonomics Forum',
    summary:
      'Recognized for sub-50ms instant response latency, global 1ms hotkey hide/reveal (Ctrl + \\), speech-gated teleprompter scrolling, and zero cognitive load during high-pressure coding challenges.',
    highlights: [
      'Sub-50ms Whisper STT dual-channel audio streaming',
      'Global 1ms hotkey instant stealth toggle (Ctrl + \\)',
      'Hands-free voice-activated teleprompter scrolling',
      'Automatic resume priority context matching',
    ],
    sealColor: '#00E85D',
  },
  stealth: {
    id: 'stealth',
    badgeTitle: 'STEALTH',
    badgeSub: 'INVISIBILITY',
    badgeStatus: 'PASSED',
    title: 'Stealth Invisibility & Zero-Leak Certification',
    category: 'Application Security & Screen Capture Bypass',
    year: '2024 / 2025',
    issuer: 'Independent Security & Privacy Audit Lab',
    summary:
      'Officially verified for 100% bypass of Zoom, Google Meet, Microsoft Teams, and OBS screen capture hooks. Zero GPU texture hooks, hidden window attributes, and zero client-side telemetry.',
    highlights: [
      'OBS, Zoom & Teams Display Capture bypass certified',
      'Zero GPU framebuffer interception or window enumeration',
      '100% Local SQLite storage with zero remote telemetry',
      'Stealth process signature and silent in-place updater',
    ],
    sealColor: '#00E85D',
  },
  special: {
    id: 'special',
    badgeTitle: 'SPECIAL',
    badgeSub: 'KUDOS',
    badgeStatus: 'AWARDED',
    title: 'Special Innovation Community Choice',
    category: 'Developer Productivity & Multi-Model Intelligence',
    year: '2024 / 2025',
    issuer: 'Tech Interview Community & Open-Source Choice',
    summary:
      'Awarded highest developer sentiment for multi-LLM consensus (Claude 3.5 Sonnet, Gemini 2.0 Flash, GPT-4o, DeepSeek-R1) and instant in-app Python 3 & TypeScript test-runner execution.',
    highlights: [
      'Multi-LLM real-time consensus matrix',
      'In-app Python 3 & TypeScript live code sandbox',
      'Vision OCR problem snipper for LeetCode & HackerRank',
      '10,000+ mock & technical interviews successfully powered',
    ],
    sealColor: '#00E85D',
  },
};

interface AwardModalProps {
  awardType: AwardType | null;
  onClose: () => void;
}

export function AwardModal({ awardType, onClose }: AwardModalProps) {
  useEffect(() => {
    if (!awardType) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [awardType, onClose]);

  if (!awardType) return null;
  const award = AWARDS_DATA[awardType];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg bg-[#0d0d0f] border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,232,93,0.15)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Emerald Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#00E85D]/15 blur-3xl pointer-events-none rounded-full" />

          {/* Header Row */}
          <div className="flex items-start justify-between relative z-10 mb-5">
            <div className="flex items-center space-x-3">
              {/* Minimalist Clue AI Logo Emblem */}
              <div className="w-10 h-10 rounded-full border border-[#00E85D]/70 bg-black/90 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,232,93,0.3)]">
                <img src="/logo.png" alt="Clue AI" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00E85D] uppercase font-bold">
                    OFFICIAL RECOGNITION · {award.year}
                  </span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 font-mono px-1.5 py-0.5 rounded">
                    {APP_VERSION_TAG}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight mt-0.5">
                  {award.title}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-neutral-800/60 transition cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Issuer & Category Banner */}
          <div className="bg-neutral-950/80 border border-neutral-900 rounded-xl p-3.5 mb-5 flex items-center justify-between text-xs">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-mono">Issuing Body</span>
              <span className="text-neutral-200 font-semibold">{award.issuer}</span>
            </div>
            <div className="text-right">
              <span className="text-neutral-500 block text-[10px] uppercase font-mono">Category</span>
              <span className="text-[#00E85D] font-mono font-medium">{award.category}</span>
            </div>
          </div>

          {/* Summary Prose */}
          <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
            {award.summary}
          </div>

          {/* Verified Highlights Checklist */}
          <div className="space-y-2 mb-6">
            <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase font-semibold block">
              Verified Audit Criteria
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {award.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-2 bg-black/50 border border-neutral-800/80 rounded-lg p-2.5 text-xs text-neutral-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E85D] shrink-0 mt-0.5" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00E85D]" />
              <span className="text-[11px] font-mono text-neutral-400">Cryptographically Signed Verification</span>
            </div>
            <button
              onClick={onClose}
              className="bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-xs px-4 py-2 rounded-lg transition shadow-[0_0_15px_rgba(0,232,93,0.35)] cursor-pointer"
            >
              Acknowledged
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

