import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #1A2A1A 7%, #789575 37%, #5A7A58 72%, #6B8F69 100%)',
    boxShadow: '0px 4px 4px rgba(120, 149, 117, 0.25), inset 4px 4px 12px #5A7A58',
    outline: '2px solid #E5E8CE',
    outlineOffset: '-3px',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={`rounded-full text-[#E5E8CE] font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      Contact Me
    </button>
  );
};
