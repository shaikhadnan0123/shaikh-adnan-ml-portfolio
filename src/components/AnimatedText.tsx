import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Distribute the character fade-in ranges along the scroll progress (0 to 1)
  // We add an overlap window of 0.15 for smooth transitions between characters
  const start = index / total;
  const end = Math.min(1, start + 0.15);
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  // Handle spaces correctly using a non-breaking space
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{displayChar}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 select-none"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={paragraphRef} className={`${className} relative flex flex-wrap justify-center`}>
      {characters.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
