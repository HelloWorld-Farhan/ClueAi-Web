import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { ArcHorizonShowcase } from './components/ArcHorizonShowcase';
import { AmbientQuoteSection } from './components/AmbientQuoteSection';
import { DownloadHub } from './components/DownloadHub';
import { BottomFloatingDock } from './components/BottomFloatingDock';
import { Footer } from './components/Footer';
import { FeedbackModal } from './components/FeedbackModal';
import { FeatureModal, FeatureKey } from './components/FeatureModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  // Initialize Lenis + GSAP ScrollTrigger synchronized smooth scroll engine
  const lenisRef = useSmoothScroll();

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

  // Switch view with instant top scroll reset and synchronized entrance animation
  const handleViewChange = (view: 'arc' | 'ambient' | 'download') => {
    setIsEntranceComplete(true);
    setActiveView(view);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);
  };

  const handleScrollToDownload = () => {
    handleViewChange('download');
  };

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
        handleViewChange('download');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
          setActiveView={handleViewChange}
          onOpenFeedback={() => setFeedbackOpen(true)}
        />
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        <AnimatePresence mode="wait">
          {activeView === 'arc' && (
            <motion.div
              key="arc-view"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArcHorizonShowcase
                onGoToDownload={handleScrollToDownload}
                onOpenFeedback={() => setFeedbackOpen(true)}
              />
              <div className="border-t border-neutral-900/80 mt-10">
                <DownloadHub />
              </div>
            </motion.div>
          )}

          {activeView === 'ambient' && (
            <motion.div
              key="ambient-view"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Hero with Pure Black Origin & Unblur Entrance */}
              <AmbientQuoteSection
                onActionClick={handleScrollToDownload}
                onEntranceComplete={() => setIsEntranceComplete(true)}
              />

              {/* Seamless Flow on Scroll: Arc Horizon Feature Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-neutral-900/60 mt-6"
              >
                <ArcHorizonShowcase
                  onGoToDownload={handleScrollToDownload}
                  onOpenFeedback={() => setFeedbackOpen(true)}
                />
              </motion.div>

              {/* Seamless Flow on Scroll: Antigravity-Style Download Hub */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-neutral-900/80 mt-12"
              >
                <DownloadHub />
              </motion.div>
            </motion.div>
          )}

          {activeView === 'download' && (
            <motion.div
              key="download-view"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 sm:pt-4"
            >
              <DownloadHub />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Timeline Dock & Live Pulse Pill */}
      <BottomFloatingDock
        onPrev={() => {
          const next = activeView === 'arc' ? 'download' : activeView === 'ambient' ? 'arc' : 'ambient';
          handleViewChange(next);
        }}
        onNext={() => {
          const next = activeView === 'arc' ? 'ambient' : activeView === 'ambient' ? 'download' : 'arc';
          handleViewChange(next);
        }}
        onOpenOptions={() => setFeedbackOpen(true)}
        onGoToDownload={handleScrollToDownload}
      />

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
