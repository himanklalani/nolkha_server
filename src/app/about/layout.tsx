import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firm Profile | Best CA in Thane',
  description: 'Nolkha & Co is recognized as a premier Chartered Accountancy firm in Thane and Mumbai. Learn about our leadership, philosophy, and institutional-grade financial strategies.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
