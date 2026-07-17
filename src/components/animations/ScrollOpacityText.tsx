"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollOpacityTextProps {
  text: string;
  className?: string;
}

export function ScrollOpacityText({ text, className = "" }: ScrollOpacityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  // Map scroll progress to a percentage for the CSS mask
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background Text (15% Opacity) */}
      <p className="opacity-15 w-full">
        {text}
      </p>

      {/* Foreground Text (100% Opacity) masked by scroll progress */}
      <motion.p 
        className="absolute top-0 left-0 w-full h-full text-secondary will-change-transform"
        style={{
          clipPath: useTransform(maskSize, (val) => `polygon(0 0, 100% 0, 100% ${val}, 0 ${val})`),
        }}
      >
        {text}
      </motion.p>
    </div>
  );
}
