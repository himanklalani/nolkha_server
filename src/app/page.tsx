"use client";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { useRef } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StickySpiralSteps } from "@/components/ui/StickySpiralSteps";
import { HoverFillButton } from "@/components/animations/HoverFillButton";
import { IndustryMarquee } from "@/components/ui/IndustryMarquee";

const fluidReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Nolkha & Co",
    "image": "https://www.nolkhaca.com/logo.png",
    "@id": "https://www.nolkhaca.com",
    "url": "https://www.nolkhaca.com",
    "telephone": "+919999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wagle Estate",
      "addressLocality": "Thane",
      "addressRegion": "MH",
      "postalCode": "400604",
      "addressCountry": "IN"
    }
  };

  return (
    <div ref={containerRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ─── NEW HERO: Bright Cinematic "Genesis" ─── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white mb-24">
        {/* Cinematic Bright Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-white">
          <video 
            src="/videos/hero-ambient.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply z-10"
          />
          {/* Gradient overlay to seamlessly fade the bottom into the page content */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </div>

        {/* Hero Typography */}
        <div className="relative z-30 text-center flex flex-col items-center mt-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-secondary tracking-tighter leading-[0.9] mb-6">
              Structure.<br />Growth.
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted font-sans tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            The Architecture of Wealth
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 z-30 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-black/20 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-secondary"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── NEW: PINNED STORY MODE SEQUENCE ─── */}
      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-32 pt-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left: Pinned Context */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-40">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-black/10" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold">Our Pillars</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary tracking-tight leading-tight mb-8">
                Building the<br />Foundation.
              </h2>
              <p className="text-lg text-muted leading-relaxed font-sans">
                We handle the regulatory complexity so enterprises can focus on what matters — scale, robust structuring, and sustained generational growth.
              </p>
              
              <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-8">
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-serif font-bold text-secondary">₹500Cr+</div>
                  <div className="text-sm font-sans text-muted">Capital Structured</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-serif font-bold text-secondary">50+</div>
                  <div className="text-sm font-sans text-muted">Enterprises Scaled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Narrative Cards */}
          <div className="lg:w-2/3 space-y-8 lg:space-y-16 lg:pt-32">
            {[
              { num: "01", title: "Structure.", desc: "Every great enterprise requires a flawless structural foundation. We engineer tax-optimized entity setups that protect assets and maximize future valuations." },
              { num: "02", title: "Compliance.", desc: "Regulatory adherence isn't a hurdle—it's a competitive advantage. We secure flawless audit records for rapid-scaling startups and international corporations alike." },
              { num: "03", title: "Growth.", desc: "We move beyond reactive filing into proactive strategy. Our advisory partners identify capital leverage opportunities that standard firms simply miss." }
            ].map((pillar, i) => (
              <motion.div 
                key={pillar.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="p-8 md:p-12 bg-surface rounded-3xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8"
              >
                <div className="text-2xl font-serif text-muted/50">{pillar.num}</div>
                <div>
                  <h3 className="text-3xl font-serif text-secondary mb-4">{pillar.title}</h3>
                  <p className="text-lg text-muted leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The 3D Sticky Spiral Steps - Our Methodology */}
      <StickySpiralSteps />

      {/* Services Section - The Asymmetrical Bento */}
      <section className="py-32 md:py-48 border-t border-black/5 relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fluidReveal}
            className="mb-20 flex flex-col items-center text-center"
          >
            <h2 className="mb-6 max-w-4xl text-5xl md:text-6xl">
              <TextReveal text="Structural alignment for your financial future." />
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <motion.div variants={fluidReveal} className="md:col-span-8 group">
              <div className="p-2 bg-black/5 rounded-3xl ring-1 ring-black/5 h-full transition-all duration-700 ease-spring group-hover:bg-primary/5 group-hover:ring-primary/10">
                <div className="bg-surface rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 md:p-14 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10">
                    <Icon0 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-4xl mb-6 text-secondary">{services[0].title}</h3>
                  <p className="text-xl text-muted mb-12 flex-1 max-w-2xl">{services[0].shortDescription}</p>
                  <Link href={`/services/${services[0].slug}`} className="inline-flex items-center text-primary font-bold text-lg hover:text-accent transition-colors">
                    View Details <ArrowRight className="w-6 h-6 ml-2 transition-transform duration-500 ease-spring group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fluidReveal} className="md:col-span-4 group">
              <div className="p-2 bg-black/5 rounded-3xl ring-1 ring-black/5 h-full transition-all duration-700 ease-spring group-hover:bg-primary/5 group-hover:ring-primary/10">
                <div className="bg-surface rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 md:p-12 h-full flex flex-col bg-gradient-to-b from-surface to-slate-50/50">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <Icon1 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl mb-4 text-secondary">{services[1].title}</h3>
                  <p className="text-lg text-muted mb-12 flex-1">{services[1].shortDescription}</p>
                  <Link href={`/services/${services[1].slug}`} className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                    View Details <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-500 ease-spring group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {services.slice(2).map((service, index, arr) => {
              const ServiceIcon = service.icon;
              const isLastOdd = index === arr.length - 1 && index % 2 === 0;
              return (
              <motion.div key={service.id} variants={fluidReveal} className={isLastOdd ? "md:col-span-12 group cursor-pointer" : "md:col-span-6 group cursor-pointer"}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <motion.div whileTap={{ scale: 0.98 }} className="p-2 bg-black/5 rounded-3xl ring-1 ring-black/5 h-full transition-all duration-700 ease-spring group-hover:bg-primary/5 group-hover:ring-primary/10">
                    <div className="bg-surface rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 h-full flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden">
                      <div className="w-16 h-16 shrink-0 rounded-full bg-primary/5 flex items-center justify-center border border-black/5 transition-transform duration-500 group-hover:scale-110">
                        <ServiceIcon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-2xl mb-3 text-secondary">{service.title}</h3>
                        <p className="text-muted leading-relaxed">{service.shortDescription}</p>
                      </div>
                      <div className="absolute top-8 right-8 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 transition-all duration-500 ease-spring group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-primary -rotate-45" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* The Z-Axis Cascade - Client Impact */}
      <section className="py-32 md:py-48 border-t border-black/5 relative overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h2 className="mb-20 max-w-3xl text-5xl md:text-6xl">
            <TextReveal text="Proven leverage for enterprises." />
          </h2>
          
          <div className="relative w-full max-w-4xl mx-auto h-[600px] md:h-[500px]">
            {/* Z-Axis Cards */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-[90%] md:w-[60%] p-2 bg-black/5 rounded-3xl ring-1 ring-black/5 -rotate-3 z-10 hover:z-30 transition-z duration-300"
            >
              <div className="bg-surface/95 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 text-left">
                <div className="text-4xl text-accent font-bold mb-4">40%</div>
                <h3 className="text-xl mb-2">Reduction in Tax Liabilities</h3>
                <p className="text-muted">Through proactive restructuring, we optimized a manufacturing client's multi-state supply chain.</p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute top-[20%] right-0 w-[90%] md:w-[60%] p-2 bg-black/5 rounded-3xl ring-1 ring-black/5 rotate-2 z-20 hover:z-30 transition-z duration-300 shadow-2xl"
            >
              <div className="bg-surface/95 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 text-left">
                <div className="text-4xl text-primary font-bold mb-4">Zero</div>
                <h3 className="text-xl mb-2">Compliance Penalties</h3>
                <p className="text-muted">Secured flawless audit records for 15+ rapid-scaling tech startups across India over the past 5 years.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Conversion Section - Double-Bezel Drenched CTA */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="p-2 md:p-3 bg-black/5 rounded-3xl ring-1 ring-black/5 shadow-2xl overflow-hidden">
            <div className="bg-primary rounded-2xl p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              
              <div className="flex-1 relative z-10">
                <h2 className="text-white mb-8 text-5xl md:text-6xl leading-[1.1] tracking-tight">
                  Secure your financial trajectory.
                </h2>
                <ul className="space-y-6 mb-12">
                  {[
                    "Dedicated partner-led engagement model",
                    "Proactive tax strategies, not reactive filing",
                    "Transparent, flat-fee advisory options",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 bg-white/20 p-1.5 rounded-full mr-4 shrink-0 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 font-medium text-lg md:text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 w-full lg:w-auto flex shrink-0">
                <Button size="lg" variant="accent" withTrailingIcon className="w-full md:w-auto h-16 text-lg px-8 rounded-full shadow-[0_20px_40px_rgba(217,119,6,0.4)]" asChild>
                  <Link href="/contact">Initiate Consultation</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
