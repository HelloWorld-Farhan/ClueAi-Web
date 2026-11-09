import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Check, Copy, ExternalLink, Lock } from 'lucide-react';
import { APP_VERSION_TAG, CREATOR } from '../config/version';

export type LegalTab = 'license' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

const MIT_LICENSE_TEXT = `MIT License

Copyright (c) 2026 ${CREATOR.name}. All Rights Reserved.
Clue AI — The Undetected Realtime Interview Copilot (${APP_VERSION_TAG})
Repository: ${CREATOR.desktopRepo}
Portfolio: ${CREATOR.website}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export function LegalModal({ isOpen, initialTab = 'license', onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyLicense = () => {
    navigator.clipboard.writeText(MIT_LICENSE_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[88vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-900 bg-neutral-950/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[#00E85D]">
                  {activeTab === 'license' ? (
                    <FileText className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>{activeTab === 'license' ? 'Official MIT License' : 'Privacy & Zero-Telemetry Architecture'}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-[#00E85D] border border-[#00E85D]/30">
                      {APP_VERSION_TAG}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Engineered by{' '}
                    <a
                      href={CREATOR.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00E85D] underline underline-offset-2 transition-colors font-medium"
                    >
                      {CREATOR.name}
                    </a>
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Segmented Tab Switcher */}
            <div className="flex items-center px-6 pt-3 pb-2 border-b border-neutral-900/80 bg-neutral-950 gap-2">
              <button
                onClick={() => {
                  setActiveTab('license');
                  window.history.replaceState(null, '', '#license');
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'license'
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>MIT License</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('privacy');
                  window.history.replaceState(null, '', '#privacy');
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy &amp; Zero-Telemetry</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {activeTab === 'license' ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Standard Open-Source License Terms
                    </span>
                    <button
                      onClick={copyLicense}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00E85D]" />
                          <span className="text-[#00E85D] font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy License</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 font-mono text-xs text-neutral-300 whitespace-pre-wrap select-all leading-relaxed overflow-x-auto">
                    {MIT_LICENSE_TEXT}
                  </pre>

                  <div className="mt-4 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                    <span>Verified GitHub Desktop Repository</span>
                    <a
                      href={CREATOR.desktopRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00E85D] hover:underline inline-flex items-center gap-1 font-mono font-medium"
                    >
                      <span>HelloWorld-Farhan/ClueAi</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Top Guarantee Pill */}
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#00E85D] mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm">
                        Absolute Zero-Telemetry Guarantee
                      </p>
                      <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Clue AI is engineered from the ground up for total confidentiality during technical interviews and pair programming. No analytics, tracking pixels, or remote telemetry servers exist in this software.
                      </p>
                    </div>
                  </div>

                  {/* Section 1: Local Storage */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <Lock className="w-4 h-4 text-sky-400" />
                      <span>100% Client-Side Local SQLite Storage</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      All your interview transcripts, code snippets, problem bookmarks, and custom prompts are stored strictly in an encrypted SQLite database on your local filesystem (<code className="text-neutral-200">%APPDATA%/ClueAI</code> on Windows, <code className="text-neutral-200">~/.clueai</code> on macOS/Linux). No data ever leaves your computer.
                    </p>
                  </div>

                  {/* Section 2: Audio Ephemerality */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <span className="text-sm">🎙️</span>
                      <span>Ephemeral Whisper STT Audio Processing</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Microphone and system audio streams are captured in short volatile memory buffers (<span className="text-neutral-200">&lt;50ms</span>) for real-time speech transcription. Audio buffers are wiped from RAM immediately after transcription. No audio files are ever written to disk or recorded.
                    </p>
                  </div>

                  {/* Section 3: Stealth Display Occlusion */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <span className="text-sm">👁️</span>
                      <span>OS-Level Display Occlusion Invisibility</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Clue AI applies hardware-level window display flags (<code className="text-neutral-200">WDA_EXCLUDEFROMCAPTURE</code> on Windows, non-sharing window levels on macOS). When you share your entire desktop or browser on Zoom, Google Meet, Microsoft Teams, Discord, or OBS, Clue AI is 100% invisible to interviewers and screen capture feeds.
                    </p>
                  </div>

                  {/* Section 4: Direct LLM Connections */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <span className="text-sm">⚡</span>
                      <span>Direct Encrypted LLM API Calls</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      API requests to Gemini 2.0, Claude 3.5 Sonnet, GPT-4o, and DeepSeek-R1 connect directly via end-to-end encrypted TLS to the respective AI providers using your own API credentials. Clue AI operates with no intermediary cloud proxy or man-in-the-middle server.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 border-t border-neutral-900 bg-neutral-950 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00E85D]" />
                <span>Legally Certified · Open Source Under MIT</span>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-1.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
