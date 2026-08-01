'use client';

import { useState, useMemo } from 'react';
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = ["All", "Startups", "Enterprises", "HNIs", "Cross-Border"];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices = useMemo(() => {
    // Simple subsequence fuzzy matcher
    // e.g., 'tx' matches 'tax' because 't' and 'x' appear in order
    const fuzzyMatch = (pattern: string, str: string) => {
      pattern = pattern.toLowerCase();
      str = str.toLowerCase();
      let patternIdx = 0;
      let strIdx = 0;
      while (patternIdx < pattern.length && strIdx < str.length) {
        if (pattern[patternIdx] === str[strIdx]) {
          patternIdx++;
        }
        strIdx++;
      }
      return patternIdx === pattern.length;
    };

    return services.filter(service => {
      // 1. Filter by Search Query (Fuzzy)
      const matchesSearch = 
        searchQuery === "" || 
        fuzzyMatch(searchQuery, service.title) || 
        fuzzyMatch(searchQuery, service.shortDescription);
      
      // 2. Filter by Category
      const matchesFilter = activeFilter === "All" || (service.audience && service.audience.includes(activeFilter));

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <main className="bg-background min-h-[200vh]">
      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
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
              We engineer the financial architecture necessary to dominate your market. Explore our core practice areas.
            </p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center border-t border-black/10 pt-8">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted/50" />
            </div>
            <input
              type="text"
              placeholder="Search practice areas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/5 border border-black/5 rounded-full py-3 pl-10 pr-4 text-sm font-medium text-secondary placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-secondary text-white shadow-lg" 
                    : "bg-white border border-black/10 text-muted hover:bg-black/5 hover:text-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Sticky Stacking Cards Container */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 relative pb-32 min-h-screen">
        <div className="flex flex-col gap-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="text-center py-32"
              >
                <p className="text-2xl text-muted font-serif">No practice areas match your criteria.</p>
              </motion.div>
            ) : (
              filteredServices.map((service, index) => {
                const Icon = service.icon;
                
                // Calculate sticky offset based on the CURRENT filtered index so they always stack perfectly
                const stickyTop = `calc(80px + ${index * 8}px)`;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    key={service.id}
                    className="sticky shadow-[0_-10px_40px_rgba(0,0,0,0.03)] rounded-3xl lg:rounded-[3rem] bg-white border border-black/5 overflow-hidden group"
                    style={{ top: stickyTop }}
                  >
                    
                    <div className="p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-16 relative z-10">
                      
                      {/* Left Column (Icon & Title) */}
                      <div className="w-full lg:w-1/3">
                        <div className="flex items-center gap-4 lg:block">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 rounded-2xl bg-black/5 flex items-center justify-center border border-black/5 lg:mb-8 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors duration-500">
                            <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-secondary group-hover:text-primary transition-colors duration-500" />
                          </div>
                          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-secondary tracking-tight leading-[1.1] lg:mb-4">
                            {service.title}
                          </h2>
                        </div>
                        
                        {/* Tags */}
                        {service.audience && (
                          <div className="flex gap-2 flex-wrap mt-4 lg:mt-6">
                            {service.audience.map(aud => (
                              <span key={aud} className="text-[9px] uppercase tracking-widest font-bold text-muted bg-black/5 px-2 py-1 rounded-sm">
                                {aud}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Column (Content) */}
                      <div className="w-full lg:w-2/3 flex flex-col justify-center">
                        <p className="text-base md:text-xl text-muted font-sans font-medium leading-relaxed mb-4">
                          {service.shortDescription}
                        </p>
                        
                        <p className="hidden md:block text-base text-muted/80 font-sans leading-relaxed mb-8 line-clamp-3">
                          {service.fullDescription}
                        </p>
                        
                        <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-4 group/btn w-max mt-auto">
                          <span className="font-sans uppercase tracking-[0.2em] text-sm font-bold text-secondary">Analyze Protocol</span>
                          <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-secondary group-hover/btn:border-secondary">
                            <ArrowUpRight className="w-5 h-5 text-secondary group-hover/btn:text-white transition-colors" />
                          </div>
                        </Link>
                      </div>
                      
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
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
