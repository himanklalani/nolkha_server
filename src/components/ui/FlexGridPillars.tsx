"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import Image from "next/image";

interface Pillar {
  title: string;
  description: string;
  icon: ReactNode;
  bgImage?: string;
}

export function FlexGridPillars({ pillars }: { pillars: Pillar[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 min-h-[450px]">
      {pillars.map((pillar, idx) => {
        const isActive = hoveredIdx === idx;
        
        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            className="relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[300px] md:min-h-full group"
          >
            {/* Absolute Background Layer (Stark Color) */}
            <div className="absolute inset-0 bg-surface border border-black/10 transition-colors duration-500 z-0" />
            
            {/* Absolute Media Hook Layer (GPU Accelerated) */}
            {pillar.bgImage && (
              <motion.div 
                className="absolute inset-0 z-0 will-change-transform will-change-opacity"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.05,
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay for text legibility */}
                <Image src={pillar.bgImage} alt={pillar.title} fill className="object-cover" />
              </motion.div>
            )}

            {/* Top Icon */}
            <div className={clsx(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative z-10",
              isActive ? (pillar.bgImage ? "bg-white/10 text-white" : "bg-primary/10 text-primary") : "bg-black/10 text-secondary/60"
            )}>
              {pillar.icon}
            </div>

            {/* Content */}
            <div className="mt-8 relative z-10">
              <h3 className={clsx(
                "text-2xl font-bold tracking-tight mb-4 transition-colors duration-500",
                isActive ? (pillar.bgImage ? "text-white" : "text-secondary") : "text-secondary/70"
              )}>
                {pillar.title}
              </h3>
              
              <motion.div
                initial={false}
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  y: isActive ? 0 : 10,
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <p className={clsx(
                  "text-lg leading-relaxed transition-colors duration-500",
                  isActive && pillar.bgImage ? "text-white/80" : "text-muted"
                )}>
                  {pillar.description}
                </p>
              </motion.div>
            </div>
            
            {/* Decorative background number */}
            <div className={clsx(
              "absolute -bottom-10 -right-4 text-[150px] font-extrabold pointer-events-none select-none z-0 transition-colors duration-500",
              isActive && pillar.bgImage ? "text-white/5" : "text-black/5"
            )}>
              {idx + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}
