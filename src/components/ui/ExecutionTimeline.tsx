'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from './Eyebrow';

interface ExecutionTimelineProps {
  timeline: { title: string; description: string }[];
}

export function ExecutionTimeline({ timeline }: ExecutionTimelineProps) {
  return (
    <div className="w-full relative">
      <Eyebrow align="left" color="primary" className="mb-12">Execution Protocol</Eyebrow>
      
      <div className="relative border-l border-black/10 ml-4 md:ml-6 pb-8">
        {timeline.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="mb-12 relative pl-8 md:pl-12 last:mb-0"
          >
            {/* Timeline Node */}
            <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_rgba(252,251,249,1)]" />
            
            {/* Step Content */}
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest text-primary/60 mb-2">PHASE 0{index + 1}</span>
              <h3 className="text-2xl md:text-3xl font-serif text-secondary mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed text-sm md:text-base max-w-2xl">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Background Image Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none grayscale mix-blend-multiply rounded-3xl overflow-hidden hidden lg:block">
        <img src="/images/timeline-bg.png" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
