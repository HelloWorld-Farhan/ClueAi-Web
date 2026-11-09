import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send, CheckCircle2, MessageSquarePlus, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyWqhztb7GbVlghFBJeusoJ-YcYx-9WPsADg9JbUXTOY-QKTpjR1ivKNyJP3iJ3wzpgKw/exec';

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState<string>('Feature Request');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const categories = [
    'Feature Request',
    'Bug Report',
    'Performance & Speed',
    'Stealth Mode',
    'General Review',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comments.trim()) {
      setErrorMsg('Please enter your feedback or comments.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    try {
      const payload = {
        type: 'feedback',
        source: 'clueai_website',
        name: name.trim() || 'Anonymous User',
        email: email.trim() || 'not_provided@clueai.com',
        rating: rating,
        category: category,
        comments: comments.trim(),
        timestamp: new Date().toISOString(),
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00E85D', '#ffffff', '#38bdf8'],
      });

      setLoading(false);
      setSubmitted(true);
    } catch (err: any) {
      setLoading(false);
      setErrorMsg('Failed to deliver feedback. Please try again or reach out directly.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setComments('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,232,93,0.15)] text-white overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-black border border-[#00E85D]/60 flex items-center justify-center text-[#00E85D] shadow-[0_0_12px_rgba(0,232,93,0.3)]">
                  <MessageSquarePlus size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Send Direct Feedback</h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Google Apps Script Cloud Webhook Active
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    How would you rate Clue AI?
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                          rating >= star
                            ? 'text-[#00E85D] scale-110 drop-shadow-[0_0_8px_rgba(0,232,93,0.6)]'
                            : 'text-neutral-700 hover:text-neutral-500'
                        }`}
                      >
                        <Star size={24} fill={rating >= star ? '#00E85D' : 'none'} />
                      </button>
                    ))}
                    <span className="text-xs font-mono font-bold text-[#00E85D] ml-2">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          category === cat
                            ? 'bg-[#00E85D] text-black font-bold shadow-md shadow-[#00E85D]/20'
                            : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Developer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#00E85D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#00E85D] transition-colors"
                    />
                  </div>
                </div>

                {/* Feedback comment */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Feedback, Feature Request or Bug Report <span className="text-[#00E85D]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Tell us what you'd like improved, any bugs encountered, or features you want next..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#00E85D] transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[#00E85D] hover:bg-[#05f566] text-black font-extrabold text-xs sm:text-sm neon-glow-btn flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin text-black" />
                      <span>Transmitting to Cloud Webhook...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} className="text-black" />
                      <span>Submit Direct Feedback</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#00E85D]/20 border border-[#00E85D]/60 text-[#00E85D] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,232,93,0.3)] animate-pulse">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Delivered Straight to Engineering</h3>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you! Your feedback has been received via our Google Apps Script cloud webhook.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
