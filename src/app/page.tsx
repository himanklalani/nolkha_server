'use client';

import { services } from "@/data/services";
import { newsData } from "@/data/news";
import Link from "next/link";
import { ArrowUpRight, Building2, Code, Bitcoin, Wallet, Landmark, Activity, Truck, Plane, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const containerRef = useRef(null);

  // 1. Image Reveal Scroll Setup
  const revealRef = useRef(null);
  const { scrollYProgress: revealProgress } = useScroll({
    target: revealRef,
    offset: ["start end", "center center"]
  });
  const clipPath = useTransform(revealProgress, [0, 1], ["inset(30% 30% 30% 30% round 32px)", "inset(0% 0% 0% 0% round 0px)"]);
  const scale = useTransform(revealProgress, [0, 1], [1.2, 1]);

  // 2. Horizontal Scroll Setup
  const horizontalRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setScrollWidth(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  // Move the track left exactly by the overflowing amount
  const xTransform = useTransform(horizontalProgress, [0, 1], [0, -scrollWidth]);

  // 3. Parallax Stats Setup
  const statsRef = useRef(null);
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(statsProgress, (p) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 0;
    return 200 - (p * 400);
  });
  const y2 = useTransform(statsProgress, (p) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 0;
    return -100 + (p * 200);
  });

  return (
    <div ref={containerRef} className="bg-background relative">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white mb-0">
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-white">
          <video 
            src="/videos/hero-ambient.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </div>

        <div className="relative z-30 text-center flex flex-col items-center mt-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-secondary tracking-tighter leading-[0.9] mb-6">
              Nolkha & Co.
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted font-sans tracking-[0.3em] uppercase text-xs md:text-sm text-center"
          >
            The Architecture of Wealth <br className="md:hidden" /><span className="hidden md:inline">·</span> Premier CA in Thane & Mumbai
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-muted/50"
          >
            <span>Trending:</span>
            <Link href="/services/tax-consulting" className="hover:text-secondary transition-colors">Tax Strategy</Link>
            <span>·</span>
            <Link href="/services/mergers-acquisitions" className="hover:text-secondary transition-colors">M&A Advisory</Link>
            <span>·</span>
            <Link href="/services/virtual-cfo" className="hover:text-secondary transition-colors">Virtual CFO</Link>
          </motion.div>
        </div>

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

      {/* ─── 2. CINEMATIC IMAGE REVEAL (Philosophy) ─── */}
      <section ref={revealRef} className="h-[150vh] relative bg-background border-t border-black/5">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* The Revealing Image */}
          <motion.div 
            style={{ clipPath }}
            className="absolute inset-0 w-full h-full bg-black/5 overflow-hidden z-10"
          >
            {/* Fallback pattern while waiting for AI image */}

            
            <motion.div 
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
              // The user will generate 'philosophy-reveal.jpg'
              // The user generated 'philosophy-reveal.jpeg'
              style={{ scale, backgroundImage: "url('/images/philosophy-reveal.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10" />
          </motion.div>

          {/* Typography overlaid on the image */}
          <motion.div 
            style={{ opacity: revealProgress }}
            className="relative z-30 max-w-4xl px-6 text-center drop-shadow-2xl"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent drop-shadow-md" />
              <span className="text-xs tracking-[0.3em] uppercase text-white font-bold font-sans drop-shadow-md">Our Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.1] drop-shadow-xl">
              We engineer structures that anticipate the future.
            </h2>
            <p className="mt-6 text-white/90 font-sans max-w-2xl mx-auto text-lg leading-relaxed font-medium drop-shadow-md">
              Recognized as the best Chartered Accountants in Thane and Mumbai, we provide institutional-grade <Link href="/services/financial-advisory" className="text-white border-b border-white/40 hover:border-white transition-colors">financial strategy</Link>, <Link href="/services/auditing-assurance" className="text-white border-b border-white/40 hover:border-white transition-colors">statutory audit</Link>, and <Link href="/services/tax-consulting" className="text-white border-b border-white/40 hover:border-white transition-colors">tax optimization</Link> to scaling enterprises and high-net-worth individuals.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ─── 3. HORIZONTAL SCROLL GALLERY (Services) ─── */}
      <section ref={horizontalRef} className="h-[400vh] relative bg-background border-t border-black/5">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          
          <div className="px-6 md:px-12 mb-12 max-w-[1400px] mx-auto w-full">
            <h2 className="text-5xl md:text-7xl font-serif text-secondary tracking-tighter">Capabilities.</h2>
          </div>

          {/* The Horizontal Track */}
          <motion.div 
            ref={trackRef}
            style={{ x: xTransform }}
            className="flex gap-8 px-6 md:px-12 w-max items-center"
          >
            {/* Intro Card */}
            <div className="w-[80vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex flex-col justify-center pr-12 md:pr-24">
              <p className="text-2xl md:text-4xl text-muted font-serif leading-relaxed">
                From complex entity registration to multi-state tax structuring, we provide the financial architecture scaling enterprises need to dominate.
              </p>
              <div className="mt-12">
                <Link href="/services" className="group flex items-center gap-4">
                  <span className="text-sm uppercase tracking-[0.2em] font-bold text-secondary">View All Services</span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Gallery Cards (Only taking the top 4 services for the showcase) */}
            {services.slice(0, 4).map((service, i) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <div className="group w-[80vw] md:w-[45vw] h-[60vh] md:h-[70vh] rounded-[2rem] bg-black/5 overflow-hidden relative cursor-pointer border border-black/5">
                  <div className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url('/images/grid-${(i % 3) + 1}.jpeg')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <div className="text-white/60 font-serif text-lg mb-2">0{i + 1}</div>
                      <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">{service.title}</h3>
                      <p className="text-white/80 font-sans text-lg line-clamp-2 md:w-3/4">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Outro Card */}
            <div className="w-[20vw] h-[60vh] flex items-center justify-center">
              <div className="w-full h-px bg-black/20 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black/20" />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ─── 4. MASSIVE PARALLAX STATISTICS ─── */}
      <section ref={statsRef} className="py-48 md:py-64 px-6 overflow-hidden border-t border-black/5 relative">

        
        <div className="max-w-[1400px] mx-auto relative flex flex-col md:flex-row items-center justify-between gap-24 md:gap-0">
          
          <motion.div style={{ y: y1 }} className="flex flex-col">
            <h2 className="text-[60px] sm:text-[80px] md:text-[140px] lg:text-[180px] font-serif text-secondary tracking-tighter leading-[0.9] opacity-90">
              ₹500<span className="text-accent">Cr+</span>
            </h2>
            <p className="text-base md:text-xl font-sans text-muted tracking-widest uppercase mt-4">Capital Structured</p>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col items-end text-right">
            <h2 className="text-[80px] sm:text-[100px] md:text-[160px] lg:text-[200px] font-serif text-secondary tracking-tighter leading-[0.9] opacity-10">
              50<span className="text-accent">+</span>
            </h2>
            <p className="text-base md:text-xl font-sans text-muted tracking-widest uppercase mt-4">Enterprises Scaled</p>
          </motion.div>

        </div>
      </section>

      {/* ─── NEW: 5. INDUSTRY FOCUS MATRIX ─── */}
      <section className="py-32 px-6 bg-black/[0.02] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Sectors</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary tracking-tight">Industry Expertise.</h2>
            </div>
            <Link href="/industries" className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-bold text-secondary">
              View All Sectors <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Fintech & Web3", icon: Bitcoin },
              { name: "Asset Management", icon: Wallet },
              { name: "Real Estate", icon: Building2 },
              { name: "Tech & Startups", icon: Code },
              { name: "Manufacturing", icon: Landmark },
              { name: "Healthcare", icon: Activity },
              { name: "Logistics", icon: Truck },
              { name: "Aviation", icon: Plane }
            ].map((industry, i) => (
              <Link href="/industries" key={i}>
                <div className="group p-8 bg-white border border-black/5 hover:border-black/20 rounded-2xl transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-12 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <industry.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-secondary">{industry.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW: 6. THOUGHT LEADERSHIP ─── */}
      <section className="py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Insights</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary tracking-tight">Intellectual Capital.</h2>
            </div>
            <Link href="/news" className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-bold text-secondary">
              View All Insights <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news) => (
              <Link href={`/news/${news.slug}`} key={news.id} className="group flex flex-col">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border border-black/5">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${news.coverImage})` }} />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">{news.category}</span>
                  <span className="text-xs font-sans text-muted">{news.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-secondary tracking-tight leading-snug mb-3 group-hover:text-accent transition-colors">{news.title}</h3>
                <p className="text-muted font-sans text-sm line-clamp-2 leading-relaxed">{news.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW: 7. LEADERSHIP PREVIEW ─── */}
      <section className="pt-32 pb-48 px-6 bg-secondary text-white rounded-t-[3rem] md:rounded-t-[5rem] relative z-0">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold font-sans">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.1] max-w-4xl mb-12">
            Institutional strategy driven by partners with Big 4 pedigree.
          </h2>
          <Link href="/leadership" className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-secondary rounded-full hover:scale-105 transition-transform duration-500">
            <span className="text-sm font-bold uppercase tracking-widest font-sans">Meet The Partners</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* ─── 8. THE "CURTAIN REVEAL" CTA ─── */}
      {/* This section uses a negative top margin to overlap the previous dark section, creating a layered card effect */}
      <section className="relative z-10 -mt-24 bg-primary min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
        {/* Actual AI CTA background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
          style={{ backgroundImage: "url('/images/cta-bg.jpeg')" }}
        />
        
        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[0.95] mb-12">
            Secure your<br />financial architecture.
          </h2>
          
          <Link href="/contact" className="group relative inline-flex h-20 items-center justify-center overflow-hidden rounded-full bg-white px-12 font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/30" />
            </div>
            <span className="text-lg md:text-xl font-sans tracking-[0.1em] uppercase">Schedule Confidential Consultation</span>
            <ArrowUpRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <p className="mt-12 text-white/60 font-sans text-xs md:text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-white/30" />
            ICAI Registered Firm <span className="hidden md:inline">·</span> Established in Thane
            <span className="w-8 h-px bg-white/30" />
          </p>
        </div>
      </section>

    </div>
  );
}
