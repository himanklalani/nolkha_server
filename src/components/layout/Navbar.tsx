"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NavHoverPill } from './NavHoverPill';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const menuVars = {
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

  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  };

  const linkVars = {
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
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-max md:min-w-[700px] bg-white/80 backdrop-blur-xl z-50 border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-full px-4 md:px-6 h-16 flex items-center justify-between transition-colors duration-700 ease-spring"
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
          className="hidden md:flex items-center space-x-1 bg-black/5 p-1 rounded-full overflow-hidden"
        >
          <NavHoverPill href="/about" label="About" active={pathname.startsWith('/about')} />
          <NavHoverPill href="/services" label="Services" active={pathname.startsWith('/services')} />
          <NavHoverPill href="/industries" label="Industries" active={pathname.startsWith('/industries')} />
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

      {/* Massive Glass Mobile Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-3xl flex flex-col justify-center items-center px-6"
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
                { name: "Careers", href: "/careers" },
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
