import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('exit'), 1800);
    const timer2 = setTimeout(() => onComplete(), 2400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={phase === 'exit' ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (phase === 'exit') onComplete();
        }}
        className="fixed inset-0 z-[9998] bg-[#1A2A1A] flex flex-col items-center justify-center select-none"
      >
        {/* Ambient glow */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#789575]/20 blur-[120px] pointer-events-none" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[#5A7A58]/15 blur-[100px] pointer-events-none translate-x-20 translate-y-10" />

        {/* Name animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10 flex flex-col items-center gap-4"
        >
          <motion.h1
            className="hero-heading font-black uppercase text-[clamp(2rem,8vw,80px)] leading-none tracking-tight"
            initial={{ letterSpacing: '0.3em', opacity: 0 }}
            animate={{ letterSpacing: '0em', opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Shaikh Adnan
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[#E5E8CE] text-xs sm:text-sm uppercase tracking-[0.3em] font-light"
          >
            Machine Learning Engineer
          </motion.p>

          {/* Loading bar */}
          <motion.div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #789575, #5A7A58, #E5E8CE)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.3, duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
