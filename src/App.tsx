import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ArcHorizonShowcase } from './components/ArcHorizonShowcase';
import { AmbientQuoteSection } from './components/AmbientQuoteSection';
import { DownloadHub } from './components/DownloadHub';
import { BottomFloatingDock } from './components/BottomFloatingDock';
import { Footer } from './components/Footer';
import { FeedbackModal } from './components/FeedbackModal';
import { FeatureModal, FeatureKey } from './components/FeatureModal';
import { LegalModal, LegalTab } from './components/LegalModal';

export function App() {
  // Pure black focus entrance: Navbar & Dock smoothly bloom after headline reveals
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);
  // Starts with Clue AI Ambient as front view by default
  const [activeView, setActiveView] = useState<'arc' | 'ambient' | 'download'>('ambient');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('license');

  // Modern Scroll Progress Engine
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle URL hash changes for #license, #privacy, and #downloads
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#license') {
        setLegalTab('license');
        setLegalModalOpen(true);
      } else if (hash === '#privacy') {
        setLegalTab('privacy');
        setLegalModalOpen(true);
      } else if (hash === '#downloads' || hash === '#download') {
        setActiveView('download');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleScrollToDownload = () => {
    setIsEntranceComplete(true);
    setActiveView('download');
    setTimeout(() => {
      const el = document.getElementById('downloads');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white font-sans overflow-x-hidden relative">
      {/* Modern High-End Top Scroll Indicator Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E85D] via-emerald-400 to-[#00E85D] origin-left z-[100] pointer-events-none shadow-[0_0_8px_#00E85D]"
        style={{ scaleX }}
      />

      {/* Top Fixed Header with Smooth Cinematic Entrance */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full relative z-50"
      >
        <Navbar
          activeView={activeView}
          setActiveView={(view) => {
            setIsEntranceComplete(true);
            setActiveView(view);
          }}
          onOpenFeedback={() => setFeedbackOpen(true)}
        />
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {activeView === 'arc' && (
          <div className="animate-fadeIn">
            <ArcHorizonShowcase
              onGoToDownload={handleScrollToDownload}
              onOpenFeedback={() => setFeedbackOpen(true)}
            />
          </div>
        )}

        {activeView === 'ambient' && (
          <div className="animate-fadeIn">
            {/* Top Hero with Pure Black Origin & Unblur Entrance */}
            <AmbientQuoteSection
              onActionClick={handleScrollToDownload}
              onEntranceComplete={() => setIsEntranceComplete(true)}
            />

            {/* Seamless Flow on Scroll: Arc Horizon Feature Showcase with Modern Scroll Blur */}
            <motion.div
              initial={{ opacity: 0, y: 45, filter: 'blur(16px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-neutral-900/60 mt-6"
            >
              <ArcHorizonShowcase
                onGoToDownload={handleScrollToDownload}
                onOpenFeedback={() => setFeedbackOpen(true)}
              />
            </motion.div>

            {/* Seamless Flow on Scroll: Antigravity-Style Download Hub with Modern Scroll Blur */}
            <motion.div
              initial={{ opacity: 0, y: 45, filter: 'blur(16px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-neutral-900/80 mt-12"
            >
              <DownloadHub />
            </motion.div>
          </div>
        )}

        {activeView === 'download' && (
          <div className="animate-fadeIn pt-6">
            <DownloadHub />
          </div>
        )}

        {/* When in Arc mode, also show the Download Hub underneath */}
        {activeView === 'arc' && (
          <div className="border-t border-neutral-900/80 mt-10">
            <DownloadHub />
          </div>
        )}
      </main>

      {/* Fixed Bottom Timeline Dock & Live Pulse Pill with Smooth Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isEntranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-40"
      >
        <BottomFloatingDock
          onPrev={() => {
            setIsEntranceComplete(true);
            setActiveView((prev) => (prev === 'arc' ? 'download' : prev === 'ambient' ? 'arc' : 'ambient'));
          }}
          onNext={() => {
            setIsEntranceComplete(true);
            setActiveView((prev) => (prev === 'arc' ? 'ambient' : prev === 'ambient' ? 'download' : 'arc'));
          }}
          onOpenOptions={() => setFeedbackOpen(true)}
          onGoToDownload={handleScrollToDownload}
        />
      </motion.div>

      {/* Page Footer */}
      <Footer
        onOpenFeedback={() => setFeedbackOpen(true)}
        onSelectFeature={(key) => setSelectedFeature(key)}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setLegalModalOpen(true);
        }}
      />

      {/* Google Apps Script Feedback Popup */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

      {/* Interactive Feature Simulation Modal */}
      <FeatureModal
        featureKey={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onGoToDownload={handleScrollToDownload}
      />

      {/* Interactive MIT License & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalTab}
        onClose={() => {
          setLegalModalOpen(false);
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
      />
    </div>
  );
}

export default App;
