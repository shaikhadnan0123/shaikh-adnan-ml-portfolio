/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
  id?: string;
}

// Map to cache dynamically created motion components to ensure they are not created during render
const motionComponentCache = new Map<React.ElementType, any>();

const getMotionComponent = (as: React.ElementType) => {
  if (!motionComponentCache.has(as)) {
    motionComponentCache.set(as, motion.create(as as React.ComponentType<any>));
  }
  return motionComponentCache.get(as);
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  id,
}) => {
  const motionComponent = getMotionComponent(as);

  return React.createElement(
    motionComponent,
    {
      id,
      className,
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: '50px', amount: 0 },
      transition: {
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    children
  );
};
