import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  color?: 'primary' | 'accent' | 'white';
}

export const Eyebrow = ({ children, align = 'left', color = 'primary' }: EyebrowProps) => {
  const textClass = color === 'primary' ? 'text-primary' : color === 'accent' ? 'text-accent' : 'text-white/60';

  return (
    <div className={`mb-6 ${align === 'center' ? 'flex justify-center' : 'flex justify-start'}`}>
      <div className={`font-mono text-[10px] uppercase tracking-[0.3em] font-bold ${textClass}`}>
        <span className="opacity-40 mr-2">[</span>
        {children}
        <span className="opacity-40 ml-2">]</span>
      </div>
    </div>
  );
};
