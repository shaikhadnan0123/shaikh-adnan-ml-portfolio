import React, { useState, useEffect, useRef } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Calculate distance to the bounding box edges
      let dx = 0;
      if (clientX < rect.left) {
        dx = rect.left - clientX;
      } else if (clientX > rect.right) {
        dx = clientX - rect.right;
      }

      let dy = 0;
      if (clientY < rect.top) {
        dy = rect.top - clientY;
      } else if (clientY > rect.bottom) {
        dy = clientY - rect.bottom;
      }

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < padding) {
        // Calculate offsets relative to the element's center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = (clientX - centerX) / strength;
        const offsetY = (clientY - centerY) / strength;

        setPosition({ x: offsetX, y: offsetY });
        setIsActive(true);
      } else {
        setPosition({ x: 0, y: 0 });
        setIsActive(false);
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isActive ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={ref} style={style} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};
