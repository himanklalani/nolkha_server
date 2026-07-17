'use client';

import { Mail, MapPin, Phone, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { useLenis } from 'lenis/react';
import { TextReveal } from "@/components/animations/TextReveal";
import Link from "next/link";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    objective: "",
    scale: "",
    name: "",
    email: "",
    phone: "",
    context: ""
  });

  const [activeObjective, setActiveObjective] = useState<string | null>(null);
  const [activeScale, setActiveScale] = useState<string | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nolkha & Co",
    "url": "https://www.nolkhaca.com/contact"
  };

  const objectives = [
    "Tax Optimization & Strategy",
    "Statutory Audit & Assurance",
    "Entity Structuring & Setup",
    "M&A / Advisory Services"
  ];

  const scales = [
    "Early-Stage Startup",
    "Mid-Market Enterprise",
    "International Corporation",
    "High Net-Worth Individual"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", { ...formData, objective: activeObjective, scale: activeScale });
    alert("Transmission Secured. We will contact you shortly.");
  };

  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main ref={containerRef} className="relative min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background optimized for zero lag (relies on layout.tsx linen texture) */}

      {/* CINEMATIC FOOTER REVEAL (Fixed behind content) */}
      <div className="fixed bottom-0 left-0 w-full h-screen -z-20 flex flex-col items-center justify-center pointer-events-none overflow-hidden bg-black">
        <video 
          src="/videos/contact-footer.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
        
        {/* Main Branding (Perfectly Centered) */}
        <div className="relative z-10 text-center pointer-events-auto flex flex-col items-center">
          <Link href="/">
            <h2 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-4 transition-opacity duration-500 hover:opacity-80">
              Nolkha & Co.
            </h2>
          </Link>
          <p className="text-white/50 font-sans tracking-[0.3em] uppercase text-xs md:text-sm text-center ml-[0.3em]">
            Architecture for the future
          </p>
        </div>

        {/* Navigation Links (Small, Absolute Bottom) */}
        <div className="absolute bottom-12 left-0 w-full z-10 flex flex-col items-center gap-6 pointer-events-auto">
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <span className="font-serif text-base text-white tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
              Back To Top
            </span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex flex-col items-center justify-center transition-colors duration-500 group-hover:border-white">
              <ArrowUp className="w-3 h-3 text-white mb-0.5" />
              <ArrowDown className="w-3 h-3 text-white/50" />
            </div>
          </button>

          <div className="flex gap-8 mt-4">
            <Link href="/news" className="group">
              <span className="font-serif text-base text-white/50 tracking-tight transition-colors duration-500 group-hover:text-white">
                News
              </span>
            </Link>
            <Link href="/" className="group">
              <span className="font-serif text-base text-white tracking-tight transition-opacity duration-500 group-hover:opacity-70">
                Next Page [ Company ]
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (Opaque Light background, mb-[100vh] reveals footer) */}
      <section className="relative min-h-screen bg-surface/95 backdrop-blur-xl text-secondary overflow-hidden pt-24 pb-32 mb-[100vh] rounded-b-[3rem] border-b border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
        
        {/* Vertical Grid Lines (Dark for light mode) */}
        <div className="absolute inset-0 flex justify-between px-6 md:px-24 max-w-[1600px] mx-auto opacity-[0.03] pointer-events-none">
          <div className="w-px h-full bg-black" />
          <div className="w-px h-full bg-black hidden md:block" />
          <div className="w-px h-full bg-black hidden lg:block" />
          <div className="w-px h-full bg-black" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-40 pt-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-secondary/20" />
                    <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold">Contact</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-serif text-secondary mb-8 tracking-tight leading-[0.95]">
                    Initiate<br />Dialogue.
                  </h1>
                  
                  <p className="text-lg text-muted mb-16 leading-relaxed max-w-md font-sans">
                    Request a strategic consultation. Our partners typically analyze your parameters and respond within one business day to initiate proceedings.
                  </p>

                  <div className="space-y-8 border-t border-black/10 pt-10">
                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                        <MapPin className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs uppercase tracking-[0.2em] text-muted font-serif">Office Location</h4>
                        <p className="text-secondary font-sans text-sm leading-relaxed">Wagle Estate, Thane<br/>Maharashtra, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                        <Phone className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs uppercase tracking-[0.2em] text-muted font-serif">Direct Line</h4>
                        <p className="text-secondary font-sans text-sm leading-relaxed">+91 99999 99999</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                        <Mail className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs uppercase tracking-[0.2em] text-muted font-serif">Encrypted Comm</h4>
                        <p className="text-secondary font-sans text-sm leading-relaxed">contact@nolkhaca.com</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column (Scrolling Form) */}
            <div className="lg:col-span-7 pt-10 lg:pt-32 pb-32">
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-16"
              >
                
                {/* Objective Section */}
                <div className="space-y-8 relative">
                  <div className="absolute -left-6 lg:-left-12 top-0 h-full w-px bg-black/5 hidden md:block" />
                  <h3 className="text-3xl font-serif text-secondary tracking-tight">01. Primary Objective</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {objectives.map((obj) => (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => setActiveObjective(obj)}
                        className={`flex items-center gap-4 p-5 border transition-all duration-500 text-left ${
                          activeObjective === obj 
                            ? 'border-secondary bg-black/5' 
                            : 'border-black/10 bg-white/50 hover:border-black/20 hover:bg-black/5'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border shrink-0 transition-all duration-300 flex items-center justify-center ${
                          activeObjective === obj ? 'border-secondary' : 'border-black/20'
                        }`}>
                          {activeObjective === obj && <div className="w-2.5 h-2.5 bg-secondary rounded-full" />}
                        </div>
                        <span className={`font-sans text-sm ${activeObjective === obj ? 'text-secondary' : 'text-muted'}`}>
                          {obj}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scale Section */}
                <div className="space-y-8 relative">
                  <div className="absolute -left-6 lg:-left-12 top-0 h-full w-px bg-black/5 hidden md:block" />
                  <h3 className="text-3xl font-serif text-secondary tracking-tight">02. Operational Scale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scales.map((scale) => (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => setActiveScale(scale)}
                        className={`flex items-center gap-4 p-5 border transition-all duration-500 text-left ${
                          activeScale === scale 
                            ? 'border-secondary bg-black/5' 
                            : 'border-black/10 bg-white/50 hover:border-black/20 hover:bg-black/5'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border shrink-0 transition-all duration-300 flex items-center justify-center ${
                          activeScale === scale ? 'border-secondary' : 'border-black/20'
                        }`}>
                          {activeScale === scale && <div className="w-2.5 h-2.5 bg-secondary rounded-full" />}
                        </div>
                        <span className={`font-sans text-sm ${activeScale === scale ? 'text-secondary' : 'text-muted'}`}>
                          {scale}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-8 relative">
                  <div className="absolute -left-6 lg:-left-12 top-0 h-full w-px bg-black/5 hidden md:block" />
                  <h3 className="text-3xl font-serif text-secondary tracking-tight">03. Entity Parameters</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] font-serif text-muted ml-1">Entity / Name</label>
                        <input id="name" type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Acme Corp / Jane Doe" className="w-full h-14 px-5 bg-white/50 border border-black/10 focus:border-secondary outline-none transition-colors text-secondary font-sans placeholder:text-black/30" />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] font-serif text-muted ml-1">Direct Phone</label>
                        <input id="phone" type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 00000 00000" className="w-full h-14 px-5 bg-white/50 border border-black/10 focus:border-secondary outline-none transition-colors text-secondary font-sans placeholder:text-black/30" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] font-serif text-muted ml-1">Primary Email</label>
                      <input id="email" type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="contact@example.com" className="w-full h-14 px-5 bg-white/50 border border-black/10 focus:border-secondary outline-none transition-colors text-secondary font-sans placeholder:text-black/30" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="context" className="text-xs uppercase tracking-[0.2em] font-serif text-muted ml-1">Operational Context (Optional)</label>
                      <textarea id="context" rows={4} value={formData.context} onChange={e => setFormData({...formData, context: e.target.value})} placeholder="Briefly describe your requirements..." className="w-full p-5 bg-white/50 border border-black/10 focus:border-secondary outline-none transition-colors text-secondary font-sans resize-none placeholder:text-black/30"></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button type="submit" className="w-full group relative overflow-hidden bg-secondary text-white h-20 flex items-center justify-between px-8 transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                    <span className="relative z-10 font-serif text-2xl tracking-tight">Initiate Transmission</span>
                    <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                      <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-45" />
                    </div>
                  </button>
                </div>

              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
