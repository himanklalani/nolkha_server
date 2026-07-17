'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide global footer on the contact page since it has its own parallax reveal footer
  if (pathname === '/contact') {
    return null;
  }
  
  return <Footer />;
}
