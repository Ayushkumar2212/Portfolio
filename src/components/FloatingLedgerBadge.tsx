import React, { useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';

interface FloatingLedgerBadgeProps {
  onOpenLedger: () => void;
}

export const FloatingLedgerBadge: React.FC<FloatingLedgerBadgeProps> = ({ onOpenLedger }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 transition-all duration-300">
      <div className="relative group">
        
        {/* Subtle glow aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-cyan-500 opacity-30 group-hover:opacity-60 blur-md transition-opacity" />

        {/* Badge container */}
        <div className="relative flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-xl pl-3.5 pr-2 py-2 gap-2.5 backdrop-blur-md">
          <button
            onClick={onOpenLedger}
            className="flex items-center gap-2 text-left cursor-pointer"
            aria-label="Open 8+ Hackathon and Startup Wins Ledger"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Trophy className="w-4 h-4" />
            </span>
            <div className="pr-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-bold block leading-none">
                Verified Accolades
              </span>
              <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight leading-tight block">
                8+ Hackathons (SIH) & Startup Wins
              </span>
            </div>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-full transition-colors ml-1 cursor-pointer"
            title="Dismiss badge"
            aria-label="Dismiss badge"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
