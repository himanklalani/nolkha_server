'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlockTextRevealProps {
  children: React.ReactNode;
  className?: string;
  blockColor?: string;
  delay?: number;
}

export const BlockTextReveal = ({
  children,
  className = "",
  blockColor = "bg-primary",
  delay = 0
}: BlockTextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative overflow-hidden inline-flex ${className}`}>
      {/* The Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: delay + 0.4 }}
      >
        {children}
      </motion.div>

      {/* The Block */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isInView ? { x: ["-100%", "0%", "101%"] } : { x: "-100%" }}
        transition={{ 
          duration: 0.8, 
          times: [0, 0.5, 1], 
          ease: [0.32, 0.72, 0, 1],
          delay: delay 
        }}
        className={`absolute inset-0 z-10 w-full h-full ${blockColor}`}
      />
    </div>
  );
};
