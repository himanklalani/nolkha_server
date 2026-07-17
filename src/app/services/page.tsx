'use client';

import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { ExpandableDrawer } from "@/components/ui/ExpandableDrawer";
import { HoverFillButton } from "@/components/animations/HoverFillButton";
import { Eyebrow } from "@/components/ui/Eyebrow";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease: [0.32, 0.72, 0, 1] }
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <Eyebrow align="center" color="primary">Capabilities</Eyebrow>
        </div>
        <h1 className="mb-6 text-5xl md:text-7xl tracking-tight leading-[1.05]">
          <TextReveal text="Financial strategy for every stage of growth" /><span className="text-accent">.</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-xl text-muted text-balance max-w-3xl mx-auto"
        >
          From company registration to complex tax structuring, we provide the architectural expertise necessary to dominate India's financial landscape.
        </motion.p>
      </section>

      {/* Z-Axis Cascade */}
      <section className="py-16 px-6 max-w-6xl mx-auto mb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className={`p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 backdrop-blur-md group ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="bg-white/80 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 md:p-12 h-full flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-8 shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary transition-colors">{service.title}<span className="text-accent">.</span></h2>
                <p className="text-muted mb-10 flex-1 leading-relaxed text-lg">{service.shortDescription}</p>
                
                <div className="mt-auto self-start">
                  <Link href={`/services/${service.slug}`}>
                    <HoverFillButton withArrow={true} fillColor="bg-primary">
                      View Details
                    </HoverFillButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expandable Drawers FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-t border-black/5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted">Clarification on our operational models and engagement structure.</p>
        </div>
        
        <div className="flex flex-col">
          <ExpandableDrawer title="Do you handle enterprise-level international taxation?" defaultOpen={true}>
            Yes. We specialize in cross-border tax structuring, Transfer Pricing (TP) regulations, and FEMA compliance for multinationals operating in India.
          </ExpandableDrawer>
          <ExpandableDrawer title="What is your standard onboarding timeline?">
            Our typical onboarding sequence takes 48-72 hours. This includes a complete audit of your current financial architecture, establishing secure communication channels, and deploying our initial strategic roadmap.
          </ExpandableDrawer>
          <ExpandableDrawer title="Do I get direct access to the partners?">
            Absolutely. At Nolkha & Co, you are never handed off to a junior associate for critical strategy. Our partners lead every engagement, ensuring high-velocity decision-making.
          </ExpandableDrawer>
        </div>
      </section>
    </>
  );
}
