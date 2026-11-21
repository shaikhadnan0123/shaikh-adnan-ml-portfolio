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
        className={`rounded-full border border-white/10 hover:border-[#f1903a]/60 text-[#efece7] font-mono uppercase text-xs tracking-wider transition-all duration-200 hover:bg-white/[0.05] active:scale-95 px-6 py-2.5 inline-block text-center select-none ${className}`}
      >
        {label}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-white/10 hover:border-[#f1903a]/60 text-[#efece7] font-mono uppercase text-xs tracking-wider transition-all duration-200 hover:bg-white/[0.05] active:scale-95 px-6 py-2.5 select-none ${className}`}
    >
      {label}
    </button>
  );
};
