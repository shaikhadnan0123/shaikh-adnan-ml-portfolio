import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  label = 'Live Project',
  href,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full border-2 border-[#E5E8CE] text-[#E5E8CE] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#E5E8CE]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base inline-block text-center select-none ${className}`}
      >
        {label}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#E5E8CE] text-[#E5E8CE] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#E5E8CE]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base select-none ${className}`}
    >
      {label}
    </button>
  );
};
