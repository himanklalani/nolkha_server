"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Initial Audit & Discovery",
    desc: "Before we touch anything, we run a complete diagnostic on your current capital structure, identifying immediate tax liabilities and compliance gaps."
  },
  {
    title: "Strategic Restructuring",
    desc: "We engineer a new holding structure, utilizing specialized exemptions and staggered divestment models to isolate risk and minimize exposure."
  },
  {
    title: "Capital Infusion",
    desc: "With a clean, predictable financial model, we initiate competitive bidding among tier-one private banks for highly favorable, collateral-free debt financing."
  },
  {
    title: "Proactive Defense",
    desc: "We lock down your input tax credits and establish an airtight, ongoing compliance barrier to prevent state authorities from disrupting your daily operations."
  },
  {
    title: "Wealth Preservation",
    desc: "Finally, we transition realized gains into diversified, tax-neutral vehicles, ensuring your capital remains liquid, rapidly growing, and strictly protected."
  }
];

export function StickySpiralSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress so the 3D rotation doesn't feel jerky
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  const anglePerStep = 60; // Increased spacing to prevent clipping
  
  // Create a piecewise mapping to add a "pause" at each card
  const input = [];
  const output = [];
  const pauseDuration = 0.5; // 50% of the time is paused per step
  
  for (let i = 0; i < steps.length; i++) {
    const center = i;
    const start = Math.max(0, center - pauseDuration / 2);
    const end = Math.min(steps.length - 1, center + pauseDuration / 2);
    
    if (i === 0) {
      input.push(0, end / (steps.length - 1));
      output.push(0, 0);
    } else if (i === steps.length - 1) {
      input.push(start / (steps.length - 1), 1);
      output.push(-i * anglePerStep, -i * anglePerStep);
    } else {
      input.push(start / (steps.length - 1), end / (steps.length - 1));
      output.push(-i * anglePerStep, -i * anglePerStep);
    }
  }

  // The global rotation of the 3D scene with built-in pauses
  const sceneRotateX = useTransform(smoothProgress, input, output);

  return (
    // Increased scroll distance to 600vh so the animations have room to breathe and pause
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#0b0b0b]">
      
      {/* The Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "1200px" }}>
        
        <div className="absolute top-6 md:top-10 text-center z-50 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">The Paradigm.</h2>
            <p className="text-sm md:text-base text-[#a3a3a3] mt-2">Scroll to explore our methodology.</p>
        </div>

        {/* The 3D Anchor - Centered to avoid cropping on smaller laptop screens */}
        <motion.div 
          className="relative w-full max-w-xl h-0 translate-y-8"
          style={{ transformStyle: "preserve-3d", rotateX: sceneRotateX }}
        >
          {steps.map((step, idx) => {
            const cardAngle = idx * anglePerStep;
            
            // Calculate opacity and scale based on the card's world rotation
            const opacity = useTransform(sceneRotateX, (latestSceneAngle) => {
              const worldAngle = latestSceneAngle + cardAngle;
              const distance = Math.abs(worldAngle);
              if (distance >= 60) return 0.15;
              if (distance === 0) return 1;
              return 1 - (distance / 60) * 0.85;
            });

            const scale = useTransform(sceneRotateX, (latestSceneAngle) => {
                const worldAngle = latestSceneAngle + cardAngle;
                const distance = Math.abs(worldAngle);
                if (distance >= 60) return 0.8;
                if (distance === 0) return 1;
                return 1 - (distance / 60) * 0.2;
            });

            return (
              <div 
                key={idx}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[500px]"
                // We rotate the card, then push it outward by 450px to increase the depth radius
                style={{ 
                  transform: `rotateX(${cardAngle}deg) translateZ(450px)`,
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div 
                  style={{ opacity, scale }}
                  className="p-6 md:p-8 rounded-2xl border border-[#242424] bg-[#0a0a0a] transition-all duration-300 hover:border-white/20 hover:bg-black group cursor-pointer relative overflow-hidden shadow-2xl"
                >
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="border-b border-[#242424] pb-4 transition-colors duration-300 group-hover:border-white/20">
                      <h3 className="text-lg md:text-xl font-bold text-[#f5f5f5]">
                        <span className="opacity-50 mr-2 text-white">0{idx + 1}.</span> {step.title}
                      </h3>
                    </div>
                    <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Hover Arrow from Hover-Box */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
        
        {/* Gradients to fade out the top and bottom of the cylinder */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b] z-40 h-full w-full" />
      </div>
    </div>
  );
}
