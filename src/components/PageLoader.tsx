import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('exit'), 1400);
    const timer2 = setTimeout(() => onComplete(), 1900);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={phase === 'exit' ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9998] bg-[#121110] flex flex-col items-center justify-center select-none"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute w-[350px] h-[350px] rounded-full bg-[#f1903a]/15 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-3 text-center"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#f1903a]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8a857e]">
              INITIALIZING ENVIRONMENT
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-4xl text-[#efece7] tracking-tight">
            Shaikh Adnan
          </h1>

          <p className="font-mono text-xs text-[#8a857e] uppercase tracking-wider">
            Machine Learning Engineer · AI Developer
          </p>

          {/* Ember loading progress bar */}
          <div className="mt-6 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f1903a] to-[#2dd4bf]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
