import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | CA in Thane',
  description: 'Contact Nolkha & Co in Wagle Estate, Thane. Schedule a confidential consultation for elite tax advisory and corporate financial structuring in Mumbai.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
