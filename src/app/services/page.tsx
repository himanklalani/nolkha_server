'use client';

import { services } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-[200vh]">
      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted font-bold font-sans">Core Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tighter leading-[0.95]">
              Structural<br />Alignment.
            </h1>
          </div>
          
          <div className="max-w-md">
            <p className="text-lg text-muted font-sans leading-relaxed font-medium">
              We engineer the financial architecture necessary to dominate your market. Scroll to explore our core practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Stacking Cards Container */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 relative pb-32">
        <div className="flex flex-col gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Calculate a staggered top offset. We use a CSS variable trick or just inline style
            // We'll use a smaller gap (12px) for mobile to save vertical space, and 20px for desktop.
            const stickyTop = `calc(80px + ${index * 8}px)`;

            return (
              <div 
                key={service.id}
                className="sticky shadow-[0_-10px_40px_rgba(0,0,0,0.03)] rounded-3xl lg:rounded-[3rem] bg-white border border-black/5 overflow-hidden group"
                style={{ top: stickyTop }}
              >

                
                <div className="p-6 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-6 lg:gap-24 relative z-10">
                  
                  {/* Left Column (Icon & Title) */}
                  <div className="w-full lg:w-1/3">
                    <div className="flex items-center gap-4 lg:block">
                      <div className="w-12 h-12 lg:w-20 lg:h-20 shrink-0 rounded-2xl bg-black/5 flex items-center justify-center border border-black/5 lg:mb-12">
                        <Icon className="w-6 h-6 lg:w-10 lg:h-10 text-secondary" />
                      </div>
                      <h2 className="text-2xl md:text-5xl font-serif text-secondary tracking-tight leading-[1.1] lg:mb-6">
                        {service.title}
                      </h2>
                    </div>
                    
                    <div className="hidden lg:block text-[6rem] leading-none font-serif text-black/[0.03] absolute -top-4 -left-4 pointer-events-none select-none">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Right Column (Content) */}
                  <div className="w-full lg:w-2/3 flex flex-col justify-center">
                    <p className="text-base md:text-2xl text-muted font-sans font-medium leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    
                    <p className="hidden md:block text-lg text-muted/80 font-sans leading-relaxed mb-12">
                      {service.fullDescription}
                    </p>
                    
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-4 group/btn w-max">
                      <span className="font-sans uppercase tracking-[0.2em] text-sm font-bold text-secondary">Analyze Protocol</span>
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-secondary group-hover/btn:border-secondary">
                        <ArrowUpRight className="w-5 h-5 text-secondary group-hover/btn:text-white transition-colors" />
                      </div>
                    </Link>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="max-w-[1400px] mx-auto px-6 pb-24 relative z-20">
        <div className="border border-black/5 rounded-3xl p-8 bg-black/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="flex items-center gap-12">
            <div>
              <div className="text-2xl font-serif font-bold text-secondary tracking-tight">₹500Cr+</div>
              <div className="text-xs uppercase tracking-widest text-muted font-bold font-sans mt-1">Capital Structured</div>
            </div>
            <div className="w-px h-12 bg-black/10 hidden md:block" />
            <div>
              <div className="text-2xl font-serif font-bold text-secondary tracking-tight">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted font-bold font-sans mt-1">Enterprises Scaled</div>
            </div>
          </div>
          
          <Link href="/contact" className="group flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold group-hover:text-primary transition-colors">Start a Project</span>
            <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
