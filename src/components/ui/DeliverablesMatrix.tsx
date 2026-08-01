'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from './Eyebrow';
import { CheckCircle2 } from 'lucide-react';

interface DeliverablesMatrixProps {
  deliverables: string[];
}

export function DeliverablesMatrix({ deliverables }: DeliverablesMatrixProps) {
  return (
    <div className="w-full relative group rounded-[2rem] overflow-hidden bg-secondary text-background">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105">
        <img src="/images/deliverables-bg.png" alt="Deliverables Background" className="w-full h-full object-cover" />
      </div>
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/40" />

      <div className="relative z-20 p-8 md:p-12 lg:p-16">
        <Eyebrow align="left" color="accent" className="mb-8">Concrete Deliverables</Eyebrow>
        
        <h3 className="text-3xl md:text-5xl font-serif mb-12 tracking-tight">
          What You Receive.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {deliverables.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 border-t border-white/10 pt-6"
            >
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <p className="text-lg md:text-xl font-medium tracking-tight text-white/90 leading-tight">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
