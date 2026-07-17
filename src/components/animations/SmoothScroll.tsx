'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();
  const pathname = usePathname();

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);
  
  useEffect(() => {
    if (!lenis) return;
    
    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    
    // Sync GSAP ticker with Lenis requestAnimationFrame
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => { 
      gsap.ticker.remove(lenis?.raf);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
