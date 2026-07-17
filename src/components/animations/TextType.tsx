'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextTypeProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDuration?: number;
  once?: boolean;
}

export const TextType = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 0.01,
  staggerDuration = 0.03,
  once = true
}: TextTypeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
      transition: { duration },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block whitespace-pre-wrap ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
