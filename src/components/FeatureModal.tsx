import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Shield,
  Mic,
  Cpu,
  Code2,
  RefreshCw,
  Tag,
  FileCode,
  CheckCircle2,
  Download,
  ExternalLink,
} from 'lucide-react';
import { APP_VERSION, APP_VERSION_TAG, CREATOR, DOWNLOAD_LINKS } from '../config/version';

export type FeatureKey = 'stealth' | 'whisper' | 'llm' | 'sandbox' | 'updater' | 'releases' | 'data';

interface FeatureModalProps {
  featureKey: FeatureKey | null;
  onClose: () => void;
  onGoToDownload: () => void;
}

export function FeatureModal({ featureKey, onClose, onGoToDownload }: FeatureModalProps) {
  useEffect(() => {
    if (!featureKey) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [featureKey, onClose]);

  if (!featureKey) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[125] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative z-10 w-full max-w-xl bg-[#0e0e11] border border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,232,93,0.15)] max-h-[90vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Emerald Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#00E85D]/15 blur-3xl pointer-events-none rounded-full" />

          {/* Header Row */}
          <div className="flex items-start justify-between relative z-10 mb-4">
            <div className="flex items-center space-x-3">
              {/* Minimalist Clue AI Logo Emblem */}
              <div className="w-10 h-10 rounded-full border border-[#00E85D]/70 bg-black/90 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,232,93,0.3)]">
                <img src="/logo.png" alt="Clue AI" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00E85D] uppercase font-bold">
                    CORE CAPABILITY · ARCHITECTURE
                  </span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 font-mono px-1.5 py-0.5 rounded">
                    {APP_VERSION_TAG}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight mt-0.5">
                  {featureKey === 'stealth' && 'Stealth Shield Engine'}
                  {featureKey === 'whisper' && 'Sub-50ms Whisper STT'}
                  {featureKey === 'llm' && 'Multi-LLM Consensus Matrix'}
                  {featureKey === 'sandbox' && 'In-App Code Sandbox'}
                  {featureKey === 'updater' && 'Silent Dual-Stage Updater'}
                  {featureKey === 'releases' && `Clue AI ${APP_VERSION_TAG} Release`}
                  {featureKey === 'data' && 'Zero-Telemetry SQLite Data'}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-neutral-800/60 transition cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Inner Video / Simulation Animation Container */}
          <div className="w-full bg-black/90 border border-neutral-800/90 rounded-xl p-4 mb-5 overflow-hidden relative">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-900 text-[10px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00E85D] animate-ping" />
                <span className="text-neutral-300 font-bold uppercase tracking-wider">Live Vector Simulation</span>
              </span>
              <span className="text-neutral-500">60 FPS Hardware Rendered</span>
            </div>

            {/* Simulation 1: Stealth Shield */}
            {featureKey === 'stealth' && (
              <div className="space-y-3 py-1">
                <div className="grid grid-cols-2 gap-3 text-[10px] font-mono">
                  {/* Zoom/OBS View */}
                  <div className="bg-neutral-950 p-3 rounded-lg border border-red-500/20 relative">
                    <span className="text-red-400 font-bold block mb-1">OBS / Zoom Capture Stream</span>
                    <div className="h-20 bg-neutral-900/90 rounded flex items-center justify-center text-center p-2">
                      <span className="text-neutral-500 text-[9px]">Clean IDE Screen · 0 Overlays Visible</span>
                    </div>
                    <span className="text-[8px] text-emerald-400 block mt-1 font-bold">✔ ZERO LEAK VERIFIED</span>
                  </div>
                  {/* Candidate Real Desktop */}
                  <div className="bg-neutral-950 p-3 rounded-lg border border-emerald-500/30 relative">
                    <span className="text-emerald-400 font-bold block mb-1">Your Monitor (Stealth HUD)</span>
                    <div className="h-20 bg-neutral-900/90 rounded border border-[#00E85D]/40 flex flex-col items-center justify-center p-2 relative shadow-[0_0_15px_rgba(0,232,93,0.15)]">
                      <span className="text-[#00E85D] text-[9px] font-bold">Clue AI Floating Pill Active</span>
                      <span className="text-neutral-400 text-[8px] mt-1">42px Compact · Ctrl + \</span>
                    </div>
                    <span className="text-[8px] text-[#00E85D] block mt-1 font-bold">100% INVISIBLE TO CAPTURE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Simulation 2: Whisper STT */}
            {featureKey === 'whisper' && (
              <div className="space-y-3 py-1">
                <div className="h-16 flex items-end justify-center gap-1.5 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                  {[25, 60, 85, 45, 95, 100, 70, 90, 50, 80, 40, 65, 85, 55].map((h, i) => (
                    <span
                      key={i}
                      className="w-1.5 bg-[#00E85D] rounded-full origin-bottom"
                      style={{
                        height: `${h}%`,
                        animation: `pulse 1.${(i % 6) + 1}s ease-in-out infinite alternate`,
                      }}
                    />
                  ))}
                </div>
                <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-900 font-mono text-[10px]">
                  <span className="text-neutral-500">&gt; Live Transcription (&lt;50ms latency):</span>
                  <p className="text-white font-medium mt-1">
                    "Interviewer: Can you optimize the time complexity to O(N) using a two-pointer pass?"
                  </p>
                </div>
              </div>
            )}

            {/* Simulation 3: Multi-LLM */}
            {featureKey === 'llm' && (
              <div className="space-y-2 py-1 font-mono text-[10px]">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-neutral-950 p-2 rounded border border-neutral-800">
                    <span className="text-blue-400 font-bold block text-[9px]">Claude 3.5 Sonnet</span>
                    <span className="text-neutral-400 text-[8px]">O(N) Logic Analysis</span>
                  </div>
                  <div className="bg-neutral-950 p-2 rounded border border-neutral-800">
                    <span className="text-emerald-400 font-bold block text-[9px]">Gemini 2.0 Flash</span>
                    <span className="text-neutral-400 text-[8px]">Speed &amp; Python Sandbox</span>
                  </div>
                  <div className="bg-neutral-950 p-2 rounded border border-neutral-800">
                    <span className="text-purple-400 font-bold block text-[9px]">GPT-4o / DeepSeek</span>
                    <span className="text-neutral-400 text-[8px]">Edge-Case Validation</span>
                  </div>
                </div>
                <div className="bg-neutral-950 p-2 rounded border border-[#00E85D]/30 text-emerald-300 text-[9px]">
                  <span className="text-white font-bold">Consensus Output:</span> Perfect O(N) Hash Table Solution generated in 0.8s
                </div>
              </div>
            )}

            {/* Simulation 4: Code Sandbox */}
            {featureKey === 'sandbox' && (
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 font-mono text-[10px] space-y-1">
                <div className="flex justify-between text-neutral-500 border-b border-neutral-900 pb-1 text-[9px]">
                  <span>Isolated V8 / Pyodide Sandbox</span>
                  <span className="text-[#00E85D]">Zero Process Footprint</span>
                </div>
                <p className="text-neutral-300"><span className="text-[#00E85D]">&gt;</span> python test_solution.py</p>
                <p className="text-neutral-400 pl-2">Case 1: nums = [2,7,11,15], target = 9 -&gt; [0,1] <span className="text-[#00E85D]">✔ PASS (0.4ms)</span></p>
                <p className="text-neutral-400 pl-2">Case 2: nums = [3,2,4], target = 6 -&gt; [1,2] <span className="text-[#00E85D]">✔ PASS (0.3ms)</span></p>
                <p className="text-emerald-400 font-bold pt-1">ALL 12 TESTS PASSED · 100% SUCCESS</p>
              </div>
            )}

            {/* Simulation 5: Silent Updater */}
            {featureKey === 'updater' && (
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 font-mono text-[10px] space-y-2">
                <div className="flex justify-between text-[9px] text-neutral-400">
                  <span>Binary Payload Hash Check (SHA-256)</span>
                  <span className="text-[#00E85D]">Verified</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00E85D] h-full w-full shadow-[0_0_10px_rgba(0,232,93,0.8)]" />
                </div>
                <p className="text-neutral-300 text-[9px]">
                  Zero CMD / PowerShell popups. Silent in-place binary swap with automatic background verification.
                </p>
              </div>
            )}

            {/* Simulation 6: Releases */}
            {featureKey === 'releases' && (
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 font-mono text-[10px] space-y-1.5">
                <div className="flex justify-between text-white font-bold text-[11px]">
                  <span>Clue AI {APP_VERSION_TAG} Stable Release</span>
                  <span className="text-[#00E85D]">Production Ready</span>
                </div>
                <ul className="text-neutral-400 space-y-1 text-[9px]">
                  <li>✔ Real-time 24H clock &amp; dynamic calendar sync</li>
                  <li>✔ Direct OS one-click downloads for Windows (.exe) &amp; macOS (.dmg)</li>
                  <li>✔ Whisper dual-channel streaming with noise gate filter</li>
                  <li>✔ Zero telemetry, 100% encrypted SQLite local storage</li>
                </ul>
              </div>
            )}

            {/* Simulation 7: Data (JSON) */}
            {featureKey === 'data' && (
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 font-mono text-[9px] text-neutral-300 space-y-1">
                <p className="text-neutral-500">// Local SQLite Client Storage (AES-256-GCM)</p>
                <p>&#123;</p>
                <p className="pl-4">"version": "{APP_VERSION}",</p>
                <p className="pl-4">"telemetry": false,</p>
                <p className="pl-4">"remote_logging": null,</p>
                <p className="pl-4">"storage": "local_sqlite_encrypted"</p>
                <p>&#125;</p>
              </div>
            )}
          </div>

          {/* Technical Architecture Prose */}
          <div className="text-xs text-neutral-300 leading-relaxed mb-5">
            {featureKey === 'stealth' &&
              'The Stealth Shield utilizes OS-level display affinity attributes and custom render targets to render Clue AI outside standard desktop screen-recording hooks. Tested against Zoom, Google Meet, MS Teams, and OBS.'}
            {featureKey === 'whisper' &&
              'Continuous low-latency audio capture stream using a localized Whisper neural network. Employs voice activity detection (VAD) to filter ambient noise and transcribe technical questions under 50ms.'}
            {featureKey === 'llm' &&
              'Multi-LLM engine queries Claude 3.5 Sonnet, Gemini 2.0 Flash, GPT-4o, and DeepSeek-R1 simultaneously, ranking solutions by computational complexity (Big-O) and code conciseness.'}
            {featureKey === 'sandbox' &&
              'Sandboxed code runtime executes submitted Python and TypeScript algorithms against built-in test suites in under 2ms, confirming correctness before you present.'}
            {featureKey === 'updater' &&
              'Dual-stage silent updater downloads cryptographically signed release binaries in the background without terminal flashes or intrusive relaunch dialogs.'}
            {featureKey === 'releases' &&
              'Official compiled binaries are available with SHA-256 integrity checksums for Windows 10/11 x64, macOS Universal (Apple Silicon & Intel), and Linux AppImage.'}
            {featureKey === 'data' &&
              'Clue AI collects zero user telemetry, zero analytics, and zero audio recordings. All session histories are stored strictly on your local disk in an encrypted SQLite database.'}
          </div>

          {/* Footer CTAs */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
            <a
              href={CREATOR.desktopRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono transition"
            >
              <span>GitHub Software Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onGoToDownload();
                }}
                className="bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-xs px-4 py-2 rounded-lg transition shadow-[0_0_15px_rgba(0,232,93,0.35)] cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Clue AI</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

