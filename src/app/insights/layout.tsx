import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Insights | Financial Strategy',
  description: 'Read the latest financial updates, tax regulations, and strategic capital insights from the best CA firm in Thane and Mumbai.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
