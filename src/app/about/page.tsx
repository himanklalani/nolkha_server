'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MapPin, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { BlockTextReveal } from "@/components/animations/BlockTextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextType } from "@/components/animations/TextType";
import { ScrollOpacityText } from "@/components/animations/ScrollOpacityText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 max-w-6xl mx-auto overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] transform-gpu pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}>
              <Eyebrow align="left" color="primary">Firm Profile</Eyebrow>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-8">
              <TextType text="Built on accuracy. Driven by your growth." delay={0.5} duration={0.02} staggerDuration={0.02} />
            </h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="w-full md:w-1/2"
          >
            <p className="text-xl text-muted text-balance leading-relaxed mb-8">
              We established Nolkha & Co to provide scaling businesses and individuals with financial strategies that go beyond basic compliance. We are engineers of capital efficiency.
            </p>
              <Button size="lg" variant="accent" withTrailingIcon asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
          </motion.div>
        </div>
      </section>

      {/* Dense Regulatory Text Scrubbing Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto min-h-[120vh] flex items-center border-t border-black/5">
        <div>
          <Eyebrow align="left" color="accent" className="mb-8">Regulatory Philosophy</Eyebrow>
          <ScrollOpacityText 
            text="In an era of hyper-vigilant compliance and shifting capital gains frameworks, defensive accounting is no longer sufficient. We engineer robust corporate structures that anticipate regulatory audits rather than merely responding to them. By deploying continuous stress-testing across your financial architecture, we insulate your enterprise from statutory friction while legally maximizing your capital retention."
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-secondary"
          />
        </div>
      </section>

      {/* Asymmetrical Bento Grid */}
      <section className="py-24 px-6 bg-surface border-y border-black/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 mix-blend-multiply pointer-events-none" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10"
        >
          {/* Mission - Full Width Span */}
          <motion.div variants={itemVariants} className="md:col-span-12">
            <div className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 backdrop-blur-md">
              <div className="bg-white/80 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Our Mission<span className="text-accent">.</span></h3>
                  <p className="text-lg text-muted leading-relaxed">
                    To deliver proactive financial structuring and auditing that prevents problems before they occur. We aim to be the last CA firm you ever need to hire, acting as your ultimate financial shield.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Approach - Half Span */}
          <motion.div variants={itemVariants} className="md:col-span-7">
            <div className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 backdrop-blur-md h-full">
              <div className="bg-white/80 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 h-full flex flex-col justify-center">
                <Users className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Direct Access<span className="text-accent">.</span></h3>
                <p className="text-muted leading-relaxed">
                  You work directly with experienced partners. No junior handoffs for critical decisions. We believe in brutal transparency and high-velocity communication.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location - Half Span */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 backdrop-blur-md h-full">
              <div className="bg-white/80 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 h-full flex flex-col justify-center">
                <MapPin className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Thane HQ<span className="text-accent">.</span></h3>
                <p className="text-muted leading-relaxed">
                  Headquartered in Wagle Estate, Thane. We serve local enterprises, manufacturers, and technology startups across the MMR footprint.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
