import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HackathonShowcaseModal } from './components/HackathonShowcaseModal';
import { FloatingLedgerBadge } from './components/FloatingLedgerBadge';
import { AnimatedBackground } from './components/AnimatedBackground';

function PortfolioContent() {
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Dynamic Animated Motion Background */}
      <AnimatedBackground />

      {/* Sticky Navbar with Light/Dark Mode Switch */}
      <Navbar onOpenLedger={() => setIsLedgerOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        <Hero onOpenLedger={() => setIsLedgerOpen(true)} />
        <About onOpenLedger={() => setIsLedgerOpen(true)} />
        <Skills />
        <Projects />
        <Achievements onOpenLedger={() => setIsLedgerOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenLedger={() => setIsLedgerOpen(true)} />

      {/* Floating Interactive Badge */}
      <FloatingLedgerBadge onOpenLedger={() => setIsLedgerOpen(true)} />

      {/* 8+ Hackathons & 2+ Startup Victories Modal Ledger */}
      <HackathonShowcaseModal 
        isOpen={isLedgerOpen} 
        onClose={() => setIsLedgerOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
