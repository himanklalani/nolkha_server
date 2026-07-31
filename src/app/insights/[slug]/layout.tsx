import { Metadata } from 'next';
import { newsData } from '@/data/news';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = newsData.find((n) => n.slug === resolvedParams.slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Nolkha & Co`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
