import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Eye, EyeOff, Sparkles, Terminal, Code2, Scissors, BrainCircuit, RefreshCw, Volume2, CheckCircle2 } from 'lucide-react';

export const InteractiveDockPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'answer' | 'code' | 'complexity'>('answer');
  const [selectedModel, setSelectedModel] = useState<'gemini' | 'claude' | 'gpt4o' | 'deepseek'>('gemini');
  const [stealthActive, setStealthActive] = useState(true);

  const models = [
    { id: 'gemini', name: 'Gemini 2.0 Flash', badge: 'Ultra-Fast' },
    { id: 'claude', name: 'Claude 3.5 Sonnet', badge: 'Reasoning' },
    { id: 'gpt4o', name: 'GPT-4o', badge: 'Multimodal' },
    { id: 'deepseek', name: 'DeepSeek-R1', badge: 'Math/Code' },
  ];

  return (
    <section id="preview" className="relative w-full py-24 bg-[#02050e] border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Test Drive the Floating Copilot Dock
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            This is the exact UI that hovers discreetly at the top of your screen during live interviews. Click around to see how Clue AI generates instant solutions.
          </p>
        </div>

        {/* The Mock Clue AI Docked Window */}
        <div className="w-full max-w-4xl mx-auto bg-slate-950/90 rounded-3xl border border-cyan-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-2xl">
          {/* Top Floating Dock Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
            {/* Left: Live Audio Waveform & Status */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                <Mic size={17} className="animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Live Microphone Active</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                {/* Audio Bars animation */}
                <div className="flex items-center gap-0.5 mt-1">
                  {[12, 24, 18, 30, 14, 28, 20, 10, 26, 16, 22].map((h, i) => (
                    <motion.span
                      key={i}
                      animate={{ height: [6, h, 6] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
                      className="w-1 bg-cyan-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Model Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-white/10">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedModel === m.id
                      ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {m.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Right: Stealth Toggle */}
            <button
              onClick={() => setStealthActive(!stealthActive)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                stealthActive
                  ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-500/20'
                  : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
              }`}
            >
              {stealthActive ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{stealthActive ? 'Stealth ON' : 'Stealth OFF'}</span>
            </button>
          </div>

          {/* Interviewer Question Stream */}
          <div className="p-4 sm:p-5 bg-black/40 border-b border-white/5 flex items-start gap-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold px-2 py-1 rounded bg-white/5 border border-white/5 shrink-0 mt-0.5">
              Live Speech
            </span>
            <p className="text-xs sm:text-sm text-cyan-200 font-mono font-medium">
              "Could you write an optimal LRU Cache implementation with O(1) time complexity for both get and put operations?"
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="px-5 pt-3 border-b border-white/10 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('answer')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'answer'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <BrainCircuit size={14} />
              <span>Explanation &amp; Strategy</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Code2 size={14} />
              <span>Python Code Sandbox</span>
            </button>
            <button
              onClick={() => setActiveTab('complexity')}
              className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'complexity'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 size={14} />
              <span>Complexity Analysis</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-5 sm:p-6 min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === 'answer' && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
                >
                  <p className="font-semibold text-white">
                    🎯 <strong className="text-cyan-300">Optimal Data Structure:</strong> Hash Map + Doubly Linked List.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                    <li>
                      <strong className="text-white">Hash Map</strong> provides <code className="text-cyan-300 font-mono">O(1)</code> lookup for keys by storing references to Doubly Linked List nodes.
                    </li>
                    <li>
                      <strong className="text-white">Doubly Linked List</strong> enables <code className="text-cyan-300 font-mono">O(1)</code> removal and insertion at the head (Most Recently Used) and tail (Least Recently Used).
                    </li>
                    <li>
                      When capacity is exceeded, evict the node right before the dummy tail node in <code className="text-cyan-300 font-mono">O(1)</code> time.
                    </li>
                  </ul>
                </motion.div>
              )}

              {activeTab === 'code' && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black/90 p-4 rounded-xl border border-white/10 font-mono text-[11px] sm:text-xs text-slate-200 overflow-x-auto"
                >
                  <pre>{`class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {} # key -> node
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1`}</pre>
                </motion.div>
              )}

              {activeTab === 'complexity' && (
                <motion.div
                  key="complexity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
                >
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Time Complexity</span>
                    <div className="text-xl font-mono font-bold text-white mt-1">O(1) Strictly</div>
                    <p className="text-slate-400 mt-1">Both <code className="text-cyan-300">get(key)</code> and <code className="text-cyan-300">put(key, val)</code> run in amortized constant time.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20">
                    <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">Space Complexity</span>
                    <div className="text-xl font-mono font-bold text-white mt-1">O(Capacity)</div>
                    <p className="text-slate-400 mt-1">Directly proportional to maximum allowed items in cache.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

