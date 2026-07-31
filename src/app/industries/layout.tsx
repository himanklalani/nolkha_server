import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | CA in Thane',
  description: 'Providing specialized financial strategy and tax advisory for Real Estate, Technology, Healthcare, and Manufacturing sectors across Thane and Mumbai.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
