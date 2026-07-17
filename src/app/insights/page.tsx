"use client";

import { motion, Variants } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ShowcaseCard } from "@/components/ui/ShowcaseCard";
import { caseStudies } from "@/data/case-studies";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fluidReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  },
};

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      
      {/* 1. Hero Section from Original Blog Page */}
      <section className="pt-10 pb-20 px-6 max-w-5xl mx-auto text-center">
        <Eyebrow align="center">Intelligence</Eyebrow>
        <h1 className="mb-6 text-5xl md:text-7xl tracking-tight leading-[1.05]">
          <TextReveal text="Financial intelligence from the ground up" /><span className="text-accent">.</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-xl text-muted text-balance max-w-3xl mx-auto leading-relaxed"
        >
          Direct perspectives on tax regulations, business structuring, and corporate compliance. No noise. Just signal.
        </motion.p>
      </section>

      {/* 2. Original Blog Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto mb-20 border-b border-black/5">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-32"
        >
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id} 
              variants={itemVariants}
              className={`p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 backdrop-blur-md group ${index === 0 ? 'md:col-span-12' : 'md:col-span-6'}`}
            >
              <div className="bg-white/80 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 md:p-14 h-full flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2">
                <div className="flex items-center text-xs tracking-widest font-bold uppercase text-secondary mb-8">
                  <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</span>
                  <span className="mx-4 w-1 h-1 bg-accent rounded-full"></span>
                  <span>{blog.author}</span>
                </div>
                
                <h2 className={`font-extrabold tracking-tight mb-6 group-hover:text-primary transition-colors ${index === 0 ? 'text-4xl md:text-5xl max-w-3xl' : 'text-3xl'}`}>
                  {blog.title}<span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                </h2>
                
                <p className={`text-muted flex-1 leading-relaxed ${index === 0 ? 'text-xl max-w-3xl mb-12' : 'text-lg mb-8'}`}>
                  {blog.excerpt}
                </p>
                
                <Link href={`/insights/${blog.slug}`} className="mt-auto inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-primary/90 w-max group-hover:bg-accent group-hover:text-black">
                  Read Dispatch
                  <span className="w-8 h-8 ml-3 bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 3. New Case Studies Showcase Grid */}
      <section className="relative overflow-hidden pt-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" animate="visible" variants={fluidReveal}
            className="mb-20 flex flex-col items-start max-w-3xl"
          >
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-primary mb-6">
              Strategic Outcomes.
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              Real world application of our structuring models. See how we protect capital and enforce compliance for high growth enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fluidReveal}
              >
                <ShowcaseCard {...study} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
