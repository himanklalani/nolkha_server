import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Building2, Landmark, Code, Activity, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industry Focus | Nolkha & Co",
  description: "Specialized financial structuring and tax strategies for Real Estate, Tech Startups, Manufacturing, and Healthcare.",
};

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
    icon: Landmark,
    name: "Manufacturing & Supply Chain",
    description: "Margin compression is a reality. We analyze supply chain tax incidence, optimize GST credit structures, and provide deep-dive costing audits to defend your bottom line.",
  },
  {
    icon: Activity,
    name: "Healthcare & Pharmaceuticals",
    description: "High regulatory friction demands extreme rigor. We manage complex equipment depreciation schedules, compliance audits, and strategic M&A structuring for clinics and regional hospitals.",
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24 flex flex-col items-center">
          <Eyebrow align="center" color="primary">Sectors</Eyebrow>
          <h1 className="mb-8 max-w-4xl">Industry-specific financial leverage.</h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            Generic accounting fails at scale. We pair fundamental financial rigor with deep, sector-specific operational knowledge to identify levers your competitors miss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {industries.map((industry, index) => (
            <div key={index} className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 group">
              <div className="bg-surface rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-12 h-full flex flex-col transition-colors duration-500 group-hover:bg-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl mb-6">{industry.name}</h3>
                <p className="text-muted leading-relaxed text-lg mb-10 flex-1">
                  {industry.description}
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                  Discuss Strategy <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-500 ease-spring group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-2 bg-black/5 rounded-[3rem] ring-1 ring-black/5">
          <div className="bg-accent rounded-[calc(3rem-0.5rem)] p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] transform-gpu -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <h2 className="text-white mb-6 text-4xl relative z-10">Don't see your sector?</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Our fundamental frameworks scale across any industry. Let's discuss how we can structure your specific operational model.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary-light shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative z-10" withTrailingIcon asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
