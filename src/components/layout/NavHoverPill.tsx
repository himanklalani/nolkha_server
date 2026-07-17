'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';

export function NavHoverPill({ href, label, active }: { href: string; label: string; active?: boolean }) {
  const pillRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const hoverLabelRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const layout = () => {
      const pill = pillRef.current;
      const circle = circleRef.current;
      const labelEl = labelRef.current;
      const hoverLabelEl = hoverLabelRef.current;

      if (!pill || !circle || !labelEl || !hoverLabelEl) return;

      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      
      // Calculate circle size to cover the pill
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      gsap.set(labelEl, { y: 0 });
      gsap.set(hoverLabelEl, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      const ease = 'power3.easeOut';
      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);
      tl.to(labelEl, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
      
      gsap.set(hoverLabelEl, { y: Math.ceil(h + 50), opacity: 0 });
      tl.to(hoverLabelEl, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);

      tlRef.current = tl;
    };

    layout();
    window.addEventListener('resize', layout);
    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener('resize', layout);
  }, [label]);

  const handleEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.4,
      ease: 'power3.easeOut',
      overwrite: 'auto'
    });
  };

  const handleLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.3,
      ease: 'power3.easeOut',
      overwrite: 'auto'
    });
  };

  return (
    <Link
      href={href}
      ref={pillRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative inline-flex items-center justify-center px-5 py-2 h-10 rounded-full overflow-hidden text-sm font-semibold transition-colors ${active ? 'bg-white shadow-sm' : ''}`}
    >
      <span
        ref={circleRef}
        className="absolute left-1/2 bottom-0 rounded-full bg-white z-0 pointer-events-none will-change-transform"
      />
      <span className="relative z-10 flex flex-col items-center justify-center h-full">
        <span ref={labelRef} className="block text-secondary will-change-transform">
          {label}
        </span>
        <span ref={hoverLabelRef} className="absolute left-0 top-0 text-primary whitespace-nowrap will-change-transform opacity-0">
          {label}
        </span>
      </span>
    </Link>
  );
}
