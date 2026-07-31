import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capabilities & Services | Top CA in Mumbai',
  description: 'Explore our elite financial services including statutory audit, tax optimization, and entity structuring. Serving Thane and Mumbai Metropolitan Region.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
