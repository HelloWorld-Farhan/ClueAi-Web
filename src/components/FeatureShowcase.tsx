import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mic, Cpu, Code2, Scissors, RefreshCw, FileText, Bell, Sparkles, Zap, Lock, Terminal } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Hardware-Level Stealth Protection",
      description: "Operates with OS-level content protection (WDA_EXCLUDEFROMCAPTURE). Completely invisible when sharing your entire screen or individual windows in Zoom, Teams, Google Meet, Discord, and OBS.",
      tag: "100% Undetected",
      accent: "from-emerald-500/20 to-cyan-500/10",
      border: "hover:border-emerald-500/50",
      textColor: "text-emerald-400"
    },
    {
      icon: Mic,
      title: "Sub-50ms Live Voice Transcription",
      description: "Dual-stream audio engine captures both your interviewer's audio and your microphone concurrently with Whisper AI, generating a continuous live transcript with zero audio lag.",
      tag: "Dual Audio Stream",
      accent: "from-cyan-500/20 to-blue-500/10",
      border: "hover:border-cyan-500/50",
      textColor: "text-cyan-400"
    },
    {
      icon: Cpu,
      title: "Universal Multi-LLM Reasoning Engine",
      description: "Switch models on the fly during your interview: Gemini 2.0 Flash for lightning answers, Claude 3.5 Sonnet for deep architectural reasoning, GPT-4o, and DeepSeek-R1 for complex algorithmic proofs.",
      tag: "5 LLM Providers",
      accent: "from-blue-500/20 to-indigo-500/10",
      border: "hover:border-blue-500/50",
      textColor: "text-blue-400"
    },
    {
      icon: Code2,
      title: "Interactive Code Sandbox & Playground",
      description: "Full-featured code playground with syntax highlighting for Python, TypeScript, JavaScript, C++, and Go. Get production-ready, clean code with time and space complexity automatically analyzed.",
      tag: "Multi-Language",
      accent: "from-indigo-500/20 to-purple-500/10",
      border: "hover:border-indigo-500/50",
      textColor: "text-indigo-400"
    },
    {
      icon: Scissors,
      title: "Smart Screen Snipping & Visual OCR",
      description: "Draw a quick bounding box around any diagram, system architecture graphic, or LeetCode description. Clue AI uses multimodal vision to solve and explain the problem immediately.",
      tag: "Multimodal Vision",
      accent: "from-purple-500/20 to-pink-500/10",
      border: "hover:border-purple-500/50",
      textColor: "text-purple-400"
    },
    {
      icon: RefreshCw,
      title: "Silent Zero-Terminal In-App Updater",
      description: "Features a modern dual-progress-bar interface that downloads delta updates in the background and applies them headlessly with zero flashing terminal or command-prompt popups.",
      tag: "Instant v5.9.9 Engine",
      accent: "from-cyan-500/20 to-emerald-500/10",
      border: "hover:border-cyan-500/50",
      textColor: "text-cyan-400"
    },
    {
      icon: FileText,
      title: "Automatic Session Notes & PDF Export",
      description: "Never worry about taking notes while talking. Clue AI logs questions asked, generated code, and algorithm summaries with 1-click export to Markdown or styled PDF.",
      tag: "Local SQLite Cache",
      accent: "from-sky-500/20 to-blue-500/10",
      border: "hover:border-sky-500/50",
      textColor: "text-sky-400"
    },
    {
      icon: Bell,
      title: "Google Apps Script Cloud Notifications",
      description: "Automated webhook integration ensures your verified inboxes receive release notes, performance updates, and interview prep digests straight from the cloud engine.",
      tag: "Cloud Broadcast",
      accent: "from-amber-500/20 to-orange-500/10",
      border: "hover:border-amber-500/50",
      textColor: "text-amber-400"
    }
  ];

  return (
    <section id="features" className="relative w-full py-28 bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
            <Zap size={13} className="text-cyan-400" />
            <span>Built for High-Stakes Technical Interviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Everything You Need to Land Your Dream Offer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered from the ground up for software engineers, engineering managers, and technical architects navigating challenging coding rounds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-b ${f.accent} bg-slate-950/60 border border-white/10 ${f.border} transition-all duration-300 shadow-xl flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon size={22} className={f.textColor} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <Sparkles size={12} className={f.textColor} />
                  <span>Fully integrated in v5.9.9</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

