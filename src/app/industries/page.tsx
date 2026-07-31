'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExpandableDrawer } from "@/components/ui/ExpandableDrawer";
import { Building2, Landmark, Code, Activity, ArrowRight, Bitcoin, Wallet, Plane, Truck } from "lucide-react";
import { IndustryMarquee } from "@/components/ui/IndustryMarquee";

const industries = [
  {
    icon: Building2,
    name: "Real Estate & Infrastructure",
    description: "Complex capital structures and multi-year project accounting require precision. We engineer tax-efficient vehicles for developers, REITs, and construction firms, ensuring RERA compliance and optimized working capital.",
  },
  {
    icon: Code,
    name: "Technology & Startups",
    description: "Rapid scaling breaks generic accounting. We implement robust reporting frameworks, manage ESOP valuations, and handle cross-border compliance so founders can focus strictly on product and market share.",
  },
  {
    icon: Bitcoin,
    name: "Fintech & Web3",
    description: "Operating in regulatory grey areas requires bulletproof structuring. We manage complex virtual digital asset (VDA) taxation, FEMA compliance for cross-border tokenomics, and RBI reporting for payment aggregators.",
  },
  {
    icon: Wallet,
    name: "Asset & Wealth Management",
    description: "Preserving intergenerational wealth requires sophisticated tax architecture. We set up private family offices, manage portfolio capital gains optimization, and handle complex succession planning.",
  },
  {
    icon: Landmark,
    name: "Manufacturing & Supply Chain",
    description: "Margin compression is a reality. We analyze supply chain tax incidence, optimize GST credit structures, and provide deep-dive costing audits to defend your bottom line.",
  },
  {
    icon: Activity,
    name: "Healthcare & Pharmaceuticals",
    description: "High regulatory friction demands extreme rigor. We manage complex equipment depreciation schedules, compliance audits, and strategic M&A structuring for clinics and regional hospitals.",
  },
  {
    icon: Truck,
    name: "Logistics & E-Commerce",
    description: "High-volume, low-margin operations demand perfect reconciliation. We automate massive GST ITC matchings and structure multi-state warehousing models to maximize your tax efficiency.",
  },
  {
    icon: Plane,
    name: "Aviation & Hospitality",
    description: "Capital intensive industries require aggressive depreciation modeling and debt structuring. We handle complex cross-border leasing taxation and massive capital asset audits.",
  }
];

export default function IndustriesPage() {
  return (
    <main className="bg-background min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Sectors</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tighter leading-[0.95] mb-8">
          Deep Sector<br />Knowledge.
        </h1>
        
        <div className="max-w-2xl ml-auto border-l border-black/10 pl-8">
          <p className="text-xl text-muted font-sans leading-relaxed font-medium">
            Generic accounting fails at scale. We pair fundamental financial rigor with deep, sector-specific operational knowledge to identify levers your competitors miss.
          </p>
        </div>
      </section>

      {/* Interactive Accordion Section */}
      <section className="max-w-5xl mx-auto px-6 mt-8">
        <div className="border-t border-black/10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <ExpandableDrawer 
                key={index} 
                title={industry.name}
                defaultOpen={index === 0}
              >
                <div className="flex flex-col md:flex-row gap-12 pt-4 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-black/5 flex items-center justify-center border border-black/5">
                    <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xl text-muted leading-relaxed font-sans font-medium mb-8">
                      {industry.description}
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 group/link">
                      <span className="font-serif uppercase tracking-[0.1em] text-sm font-bold text-secondary">Discuss Strategy</span>
                      <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center transition-all duration-500 group-hover/link:bg-secondary group-hover/link:border-secondary">
                        <ArrowRight className="w-4 h-4 text-secondary group-hover/link:text-white transition-colors" />
                      </div>
                    </Link>
                  </div>
                </div>
              </ExpandableDrawer>
            );
          })}
        </div>
      </section>

      {/* Dynamic Marquee Integration */}
      <section className="mt-20 mb-12 overflow-hidden">
        <IndustryMarquee />
      </section>

      {/* High-End CTA Block */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-2 bg-black/5 rounded-[3rem] ring-1 ring-black/5 relative overflow-hidden group">
          <div className="bg-secondary rounded-[calc(3rem-0.5rem)] p-16 md:p-24 text-center text-white relative overflow-hidden transition-colors duration-700">
            {/* Ambient Lighting */}

            <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] transform-gpu pointer-events-none group-hover:bg-white/20 transition-colors duration-1000" />
            
            <h2 className="text-white mb-6 text-5xl md:text-6xl font-serif tracking-tight relative z-10">
              Don't see your sector?
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-sans">
              Our fundamental frameworks scale across any industry. Let's discuss how we can structure your specific operational model.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 relative z-10 px-8 h-16 rounded-full" withTrailingIcon asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
