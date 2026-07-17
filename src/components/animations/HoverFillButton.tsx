'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HoverFillButtonProps {
  children: React.ReactNode;
  className?: string;
  fillColor?: string;
  textColor?: string;
  withArrow?: boolean;
}

export const HoverFillButton = ({
  children,
  className = "",
  fillColor = "bg-primary",
  textColor = "text-secondary",
  withArrow = false,
}: HoverFillButtonProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`relative overflow-hidden inline-flex items-center justify-center rounded-full border border-border/80 px-8 py-3.5 bg-surface/50 backdrop-blur-sm font-semibold group cursor-pointer transition-shadow hover:shadow-lg ${textColor} ${className}`}
    >
      <motion.div 
        className={`absolute inset-0 z-0 ${fillColor}`}
        variants={{
          initial: { y: "100%", borderRadius: "50% 50% 0 0" },
          hover: { y: "0%", borderRadius: "0% 0% 0 0" }
        }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      />
      <span className={`relative z-10 flex items-center transition-colors duration-500 group-hover:text-white`}>
        {children}
        {withArrow && (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        )}
      </span>
    </motion.div>
  );
};
