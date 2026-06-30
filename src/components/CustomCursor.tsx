import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const trailX = useSpring(0, { stiffness: 120, damping: 25 });
  const trailY = useSpring(0, { stiffness: 120, damping: 25 });

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const hasFineMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasFineMouse) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hover state on interactive elements
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
      return interactiveElements;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners and re-add on DOM changes
    let elements = addHoverListeners();
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      elements = addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Add the custom cursor class to body
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-active');
      observer.disconnect();
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, trailX, trailY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer trail ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed top-0 left-0 rounded-full border border-[#B600A8]/40 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Inner dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          backgroundColor: isHovering ? '#B600A8' : '#D7E2EA',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};
