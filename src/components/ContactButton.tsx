import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-[#efece7] text-[#121110] hover:bg-[#f1903a] font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-mono shadow-lg hover:shadow-[0_0_25px_rgba(241,144,58,0.35)] ${className}`}
    >
      Let&apos;s Work Together
    </button>
  );
};
