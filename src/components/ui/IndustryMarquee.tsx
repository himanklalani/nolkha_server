"use client";

import { Building2, Code2, Factory, HeartPulse, Landmark, ShoppingBag, Truck, Zap } from "lucide-react";
import React from "react";

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "SaaS & Tech", icon: Code2 },
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Fintech", icon: Landmark },
  { name: "E-Commerce", icon: ShoppingBag },
  { name: "Logistics", icon: Truck },
  { name: "Energy", icon: Zap },
];

export function IndustryMarquee() {
  // Duplicate for seamless looping
  const items = [...industries, ...industries, ...industries];

  return (
    <div className="w-full overflow-hidden bg-[#0a0a0a] border-y border-[#242424] py-6 relative">
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max" style={{ animation: "ticker 40s linear infinite" }}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-8 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <item.icon className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap">
              {item.name}
            </span>
            {/* Minimal dot separator */}
            <span className="w-1 h-1 rounded-full bg-white/20 ml-8"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
