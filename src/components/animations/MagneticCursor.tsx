'use client';

import { useRef, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add custom hover states to clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3, ease: 'power2.out' });
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  useGSAP(() => {
    // Lerp physics on GSAP ticker for the ultimate smooth trailing effect
    gsap.ticker.add(() => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.15; 
      p.cy += (p.y - p.cy) * 0.15;
      gsap.set(cursorRef.current, { x: p.cx, y: p.cy });
    });
  });

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block" 
    />
  );
}
