'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MapPin, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { BlockTextReveal } from "@/components/animations/BlockTextReveal";
import { TextType } from "@/components/animations/TextType";
import { ScrollOpacityText } from "@/components/animations/ScrollOpacityText";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Firm Profile</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tighter leading-[0.95] mb-8">
          The Last Firm<br />You'll Need.
        </h1>
        
        <div className="max-w-2xl ml-auto border-l border-black/10 pl-8">
          <p className="text-xl text-muted font-sans leading-relaxed font-medium">
            We established Nolkha & Co to provide scaling businesses and high-net-worth individuals with financial strategies that go far beyond basic compliance. Recognized as the <Link href="/services" className="text-secondary border-b border-secondary/30 hover:border-secondary transition-colors">best CA in Thane</Link> and a premier advisory firm in Mumbai, we are engineers of capital efficiency.
          </p>
        </div>
      </section>

      {/* Massive Scroll Opacity Statement */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto flex items-center justify-center border-t border-black/5 mt-8">
        <ScrollOpacityText 
          text="In an era of strict compliance and shifting capital gains frameworks, defensive accounting is no longer sufficient. We engineer corporate structures that anticipate regulatory audits rather than merely responding to them. By stress-testing your financial architecture, we insulate your enterprise from statutory friction while legally maximizing your capital retention."
          className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-secondary text-center"
        />
      </section>

      {/* Editorial Core Values Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 border-t border-black/5">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Our Architecture</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="space-y-8 group">
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
              <Target className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-secondary mb-4 tracking-tight">The Mission</h3>
              <p className="text-muted leading-relaxed font-sans text-lg">
                To deliver proactive financial structuring that prevents liabilities before they compound. We act as your ultimate financial shield, protecting both corporate capital and personal wealth.
              </p>
            </div>
          </div>

          {/* Defense */}
          <div className="space-y-8 group">
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
              <ShieldCheck className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-secondary mb-4 tracking-tight">Direct Access</h3>
              <p className="text-muted leading-relaxed font-sans text-lg">
                You work directly with experienced partners. No junior handoffs for critical decisions. We believe in brutal transparency and high-velocity communication.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-8 group">
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
              <MapPin className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-secondary mb-4 tracking-tight">Thane HQ</h3>
              <p className="text-muted leading-relaxed font-sans text-lg">
                Headquartered in Wagle Estate, Thane. As the top CA in Mumbai Metropolitan Region (MMR), we serve local enterprises, manufacturers, and technology startups across the footprint, delivering unmatched <Link href="/services" className="text-secondary hover:underline">statutory audit</Link> and tax consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 border-t border-black/5">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 bg-black/5">
              {/* Founder Image Placeholder - Please replace with actual photo */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop')" }}
              />
            </div>

          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted font-bold font-sans">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary tracking-tight">
              Absolute compliance. Maximum efficiency.
            </h2>
            <p className="text-lg text-muted font-sans font-medium leading-relaxed">
              "A standard accounting firm files your taxes and tells you what happened last year. We engineer your corporate structure to dictate what happens next year. Our mandate is to provide scaling enterprises with the aggressive capital preservation strategies usually reserved for Fortune 500 companies."
            </p>
            <div>
              <p className="font-serif text-xl text-secondary font-bold">Mr. Nolkha</p>
              <p className="text-sm uppercase tracking-widest text-muted font-bold font-sans">Managing Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Partner */}
      <section className="py-16 px-6 border-t border-black/5 flex flex-col items-center text-center">
        <h2 className="text-4xl font-serif text-secondary tracking-tight mb-8">
          Secure your financial architecture.
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-4 group/link">
          <span className="font-sans uppercase tracking-[0.2em] text-sm font-bold text-secondary">Schedule Confidential Consultation</span>
          <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all duration-500 group-hover/link:bg-secondary group-hover/link:border-secondary">
            <ArrowRight className="w-5 h-5 text-secondary group-hover/link:text-white transition-colors" />
          </div>
        </Link>
      </section>

    </main>
  );
}
