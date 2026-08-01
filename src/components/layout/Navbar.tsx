"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NavHoverPill } from './NavHoverPill';
import { ArrowRight, Wallet, FileText, Building, TrendingUp, Briefcase } from 'lucide-react';

const megaMenuServices = {
  "Tax & Compliance": [
    { title: "Corporate Tax Consulting", slug: "tax-consulting", icon: Wallet },
    { title: "GST Audit & Representation", slug: "gst-audit-representation", icon: FileText },
    { title: "FEMA & Cross-Border", slug: "fema-cross-border-structuring", icon: Wallet },
    { title: "International Tax & TP", slug: "international-tax", icon: Wallet },
    { title: "Corporate Secretarial", slug: "corporate-secretarial", icon: Building },
  ],
  "Audit & Assurance": [
    { title: "Statutory & Internal Audit", slug: "auditing-assurance", icon: FileText },
    { title: "Due Diligence", slug: "mergers-acquisitions", icon: FileText },
    { title: "Stock Portfolio Audit", slug: "portfolio-management", icon: TrendingUp },
  ],
  "Advisory & Structuring": [
    { title: "Virtual CFO", slug: "virtual-cfo", icon: TrendingUp },
    { title: "Startup Accounting", slug: "startup-accounting-cfo", icon: TrendingUp },
    { title: "Mergers & Acquisitions", slug: "mergers-acquisitions", icon: Briefcase },
    { title: "Real Estate Structuring", slug: "real-estate-reit-structuring", icon: Building },
    { title: "Loan Syndication", slug: "loan-syndication", icon: Building },
  ]
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: 0.3 }
    }
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  };

  const linkVars: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, opacity: 1, 
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } 
    },
    exit: { 
      y: 10, opacity: 0, 
      transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } 
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-max md:min-w-[700px] bg-white/90 backdrop-blur-md z-50 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-4 md:px-6 h-16 flex items-center justify-between transition-colors duration-700 ease-spring"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-primary px-2 z-50 relative">
            Nolkha & Co<span className="text-accent">.</span>
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="hidden md:flex items-center space-x-1 bg-black/5 p-1 rounded-full overflow-hidden relative"
        >
          <NavHoverPill href="/about" label="About" active={pathname.startsWith('/about')} />
          <div 
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="relative"
          >
            <NavHoverPill href="/services" label="Services" active={pathname.startsWith('/services') || isMegaMenuOpen} />
          </div>
          <NavHoverPill href="/industries" label="Industries" active={pathname.startsWith('/industries')} />
          <NavHoverPill href="/leadership" label="Leadership" active={pathname.startsWith('/leadership')} />
          <NavHoverPill href="/insights" label="Insights" active={pathname.startsWith('/insights')} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="hidden md:block"
        >
          <Button size="sm" variant="accent" withTrailingIcon asChild className="h-10 text-xs px-4">
            <Link href="/contact">Consultation</Link>
          </Button>
        </motion.div>

        {/* Mobile Hamburger Morph */}
        <button 
          onClick={toggleMenu}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center group"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-500 ease-spring ${isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-opacity duration-500 ease-spring ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-500 ease-spring ${isOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-1'}`} />
        </button>
      </motion.nav>

      {/* Services Mega Menu Overlay */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-max max-w-5xl bg-white/95 backdrop-blur-md z-40 border border-black/5 shadow-[0_32px_64px_rgba(0,0,0,0.1)] rounded-3xl p-8 hidden md:block overflow-hidden"
          >

            <div className="flex gap-12 relative z-10">
              {Object.entries(megaMenuServices).map(([category, items]) => (
                <div key={category} className="w-64">
                  <h3 className="text-sm font-serif text-secondary mb-6 pb-2 border-b border-black/5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {category}
                  </h3>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className="group flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                            <item.icon className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-sm text-muted font-sans font-medium group-hover:text-secondary transition-colors line-clamp-2 mt-1">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Highlight Block */}
              <div className="w-72 bg-black/5 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 bg-white px-3 py-1 rounded-full border border-black/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-secondary font-sans uppercase tracking-widest">New</span>
                  </div>
                  <h4 className="text-xl font-serif text-secondary mb-2">Startup CFO Desk</h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">Venture-ready financial architecture and cap table management for high-growth tech startups in Mumbai.</p>
                </div>
                <Link href="/services/startup-accounting-cfo" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary mt-6 group">
                  Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Massive Glass Mobile Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col justify-center items-center px-6"
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex flex-col items-center space-y-8 text-center"
            >
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Leadership", href: "/leadership" },
                { name: "Insights", href: "/insights" },
              ].map((link, idx) => (
                <div key={idx} className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <Link 
                      href={link.href} 
                      onClick={toggleMenu}
                      className="text-4xl font-extrabold text-secondary hover:text-primary transition-colors tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              <div className="overflow-hidden pt-8">
                <motion.div variants={linkVars}>
                  <Button size="lg" variant="accent" withTrailingIcon onClick={toggleMenu} asChild>
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
