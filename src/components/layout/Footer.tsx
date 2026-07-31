'use client';

import Link from "next/link";
import { ArrowUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden mt-auto z-10 rounded-t-[3rem] border-t border-black/5 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">
        
        {/* Navigation & Branding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-32">
          
          <div className="md:col-span-4">
            <Link href="/" className="text-3xl font-serif text-secondary tracking-tight block mb-6">
              Nolkha & Co.
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-sans font-medium">
              Elite Chartered Accountancy and Corporate Financial Strategy for scaling enterprises and high-net-worth portfolios.
            </p>
            <div className="text-muted/60 text-xs font-mono uppercase tracking-widest">
              Est. 2005 · Thane, MH
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-serif text-secondary mb-6 text-sm uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">Services</Link></li>
              <li><Link href="/industries" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">Industries</Link></li>
              <li><Link href="/about" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">Firm Profile</Link></li>
              <li><Link href="/insights" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">News & Updates</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif text-secondary mb-6 text-sm uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted text-sm font-sans font-medium">Wagle Estate, Thane</li>
              <li className="text-muted text-sm font-sans font-medium">+91 99999 99999</li>
              <li className="text-muted text-sm font-sans font-medium">contact@nolkhaca.com</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif text-secondary mb-6 text-sm uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">Privacy Protocol</Link></li>
              <li><Link href="/terms" className="text-muted hover:text-primary transition-colors text-sm font-sans font-medium">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Massive Interactive Doormat CTA */}
        <div className="border-t border-black/5 pt-24 pb-24 group cursor-pointer relative overflow-hidden">
          <Link href="/contact" className="block relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="overflow-hidden">
                <motion.h2 
                  className="text-[10vw] leading-[0.8] font-serif text-secondary tracking-tighter group-hover:text-primary transition-colors duration-700"
                >
                  Let's Talk.
                </motion.h2>
              </div>
              
              <div className="w-24 h-24 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-700 transform group-hover:scale-110 shadow-sm">
                <ArrowRight className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-700 -rotate-45 group-hover:rotate-0" />
              </div>
            </div>
            <p className="mt-8 text-xl text-muted font-sans font-medium max-w-xl group-hover:text-primary/70 transition-colors duration-700">
              Initiate a confidential dialogue regarding your enterprise structuring, tax mitigation, or capital strategy.
            </p>
          </Link>

          {/* High-performance subtle hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted/60 text-xs font-sans font-bold">
            © {new Date().getFullYear()} Nolkha & Co. All rights reserved.
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted/60 group-hover:text-primary transition-colors font-sans font-bold">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:border-black/20 group-hover:bg-black/5">
              <ArrowUp className="w-3 h-3 text-muted/60 group-hover:text-primary transition-colors" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
