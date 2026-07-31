'use client';

import { useParams } from "next/navigation";
import { newsData } from "@/data/news";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const article = newsData.find(n => n.slug === slug);
  
  if (!article) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 max-w-[1000px] mx-auto text-center">
        <Link href="/insights" className="inline-flex items-center gap-3 text-muted hover:text-secondary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold">Back to Intelligence</span>
        </Link>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="px-4 py-1.5 rounded-full border border-black/10 text-xs uppercase tracking-widest font-bold text-secondary bg-white/50">
            {article.category}
          </span>
          <span className="text-xs uppercase tracking-widest font-bold text-muted">
            {article.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-black/20 hidden md:block" />
          <span className="text-xs uppercase tracking-widest font-bold text-muted hidden md:block">
            {article.readTime}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tighter leading-[1.05] mb-8">
          {article.title}
        </h1>
      </section>

      {/* Cover Image */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-black/5"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${article.coverImage})` }}
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="max-w-[800px] mx-auto px-6">
        <div 
          className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-secondary prose-headings:tracking-tight prose-headings:mb-6 prose-p:text-muted prose-p:font-sans prose-p:leading-relaxed prose-p:mb-8 prose-a:text-secondary prose-a:font-bold prose-a:border-b prose-a:border-secondary/30 hover:prose-a:border-secondary prose-a:transition-colors prose-a:no-underline max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content || article.excerpt }}
        />
        
        <div className="mt-24 pt-12 border-t border-black/5 text-center">
          <h3 className="font-serif text-3xl text-secondary mb-6">Require strategic implementation?</h3>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-secondary px-8 font-bold text-white transition-all hover:scale-105">
            <span className="text-sm font-sans tracking-[0.1em] uppercase">Schedule a Consultation</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
