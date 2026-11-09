import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Terminal, Copy, Check, Apple, Monitor, Laptop, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DownloadHub: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'windows' | 'mac' | 'linux'>('windows');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const winPowerShellCmd = `curl.exe -L --retry 10 --retry-delay 2 --retry-all-errors -C - -o ClueAI.exe https://tinyurl.com/2a2lfo9a; .\\ClueAI.exe`;
  const winCmd = `curl.exe -L --retry 10 --retry-delay 2 --retry-all-errors -C - -o ClueAI.exe https://tinyurl.com/2a2lfo9a && ClueAI.exe`;
  
  const macTerminalCmd = `curl -L -o ClueAI.dmg https://github.com/HelloWorld-Farhan/ClueAi/releases/download/v5.9.9/ClueAI-v5.9.9.dmg && hdiutil attach ClueAI.dmg`;
  const macDirectUrl = `https://github.com/HelloWorld-Farhan/ClueAi/releases/download/v5.9.9/ClueAI-v5.9.9.dmg`;

  const linuxCmd = `curl -L -o ClueAI.AppImage https://github.com/HelloWorld-Farhan/ClueAi/releases/download/v5.9.9/ClueAI-v5.9.9.AppImage && chmod +x ClueAI.AppImage && ./ClueAI.AppImage`;

  return (
    <section id="downloads" className="relative w-full py-28 bg-[#02050e] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
            <Download size={13} className="text-cyan-400" />
            <span>Multi-Platform Distribution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Download Clue AI v5.9.9
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Choose your operating system. Install via direct standalone package or run a 1-line copyable terminal command for instant setup.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-white/10 max-w-md mx-auto mb-10 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setActivePlatform('windows')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activePlatform === 'windows'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor size={16} />
            <span>Windows</span>
          </button>

          <button
            onClick={() => setActivePlatform('mac')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activePlatform === 'mac'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Apple size={16} />
            <span>macOS</span>
          </button>

          <button
            onClick={() => setActivePlatform('linux')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activePlatform === 'linux'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Laptop size={16} />
            <span>Linux</span>
          </button>
        </div>

        {/* Tab Cards Content */}
        <div className="bg-slate-950/90 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            {activePlatform === 'windows' && (
              <motion.div
                key="windows"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">Windows (x64)</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                        Official Release v5.9.9
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Compatible with Windows 10 &amp; Windows 11 (64-bit). Full Hardware-accelerated stealth mode.
                    </p>
                  </div>
                  <a
                    href="https://tinyurl.com/2a2lfo9a"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm neon-glow-btn flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download size={16} />
                    <span>Download Installer (.exe)</span>
                  </a>
                </div>

                {/* Commands */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Terminal size={14} className="text-cyan-400" />
                        <span>Windows PowerShell (Recommended One-Line Setup)</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">Works without browser</span>
                    </div>
                    <div className="bg-black/90 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 group">
                      <code className="text-xs font-mono text-cyan-200 truncate select-all">{winPowerShellCmd}</code>
                      <button
                        onClick={() => copyToClipboard(winPowerShellCmd, 'ps')}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                        title="Copy PowerShell Command"
                      >
                        {copiedKey === 'ps' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Terminal size={14} className="text-slate-400" />
                        <span>Command Prompt (CMD One-Line Setup)</span>
                      </span>
                    </div>
                    <div className="bg-black/90 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 group">
                      <code className="text-xs font-mono text-slate-300 truncate select-all">{winCmd}</code>
                      <button
                        onClick={() => copyToClipboard(winCmd, 'cmd')}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                        title="Copy CMD Command"
                      >
                        {copiedKey === 'cmd' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activePlatform === 'mac' && (
              <motion.div
                key="mac"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">macOS (Apple Silicon &amp; Intel)</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                        Universal Build v5.9.9
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Compatible with macOS Sonoma, Ventura, Monterey (M1, M2, M3, M4 &amp; Intel x64).
                    </p>
                  </div>
                  <a
                    href={macDirectUrl}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm neon-glow-btn flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download size={16} />
                    <span>Download Disk Image (.dmg)</span>
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Terminal size={14} className="text-cyan-400" />
                        <span>macOS Terminal One-Line Download &amp; Mount</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">Run in Terminal.app</span>
                    </div>
                    <div className="bg-black/90 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 group">
                      <code className="text-xs font-mono text-cyan-200 truncate select-all">{macTerminalCmd}</code>
                      <button
                        onClick={() => copyToClipboard(macTerminalCmd, 'mac')}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                        title="Copy macOS Command"
                      >
                        {copiedKey === 'mac' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-3">
                    <ShieldCheck size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <p>
                      <strong>macOS Gatekeeper Note:</strong> On first launch, if prompted by macOS security, go to <code className="text-cyan-300 font-mono">System Settings &gt; Privacy &amp; Security</code> and click <em>Open Anyway</em> to allow stealth screen capture permissions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activePlatform === 'linux' && (
              <motion.div
                key="linux"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Linux (Ubuntu / Debian / Fedora / Arch)</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Portable standalone AppImage package with embedded Chromium runtime.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={14} className="text-cyan-400" />
                      <span>Bash One-Line Setup &amp; Launch</span>
                    </span>
                  </div>
                  <div className="bg-black/90 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 group">
                    <code className="text-xs font-mono text-cyan-200 truncate select-all">{linuxCmd}</code>
                    <button
                      onClick={() => copyToClipboard(linuxCmd, 'linux')}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                      title="Copy Linux Command"
                    >
                      {copiedKey === 'linux' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

