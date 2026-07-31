'use client';

import { newsData } from "@/data/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Tax Updates", "Corporate Law", "Market Insights", "Firm News"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = newsData.find(n => n.featured) || newsData[0];
  
  const filteredNews = activeCategory === "All" 
    ? newsData.filter(n => n.id !== featuredArticle.id)
    : newsData.filter(n => n.category === activeCategory && n.id !== featuredArticle.id);

  return (
    <main className="bg-background min-h-screen pb-32">
      
      {/* Editorial Header */}
      <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tighter leading-[0.95]">
          Market<br />Updates.
        </h1>
      </section>

      {/* Featured Article (The Massive Hero) */}
      <section className="max-w-[1400px] mx-auto px-6 py-8">
        <Link href={`/insights/${featuredArticle.slug}`} className="group block relative overflow-hidden rounded-3xl bg-black/5 border border-black/5">
          <div className="flex flex-col lg:flex-row h-full min-h-[60vh]">
            
            {/* Image Side */}
            <div className="w-full lg:w-3/5 relative overflow-hidden h-[40vh] lg:h-auto">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredArticle.coverImage})` }}
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000 group-hover:bg-black/0" />
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-2/5 bg-surface p-10 md:p-16 flex flex-col justify-center relative">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full border border-black/10 text-xs uppercase tracking-widest font-bold text-secondary">
                  {featuredArticle.category}
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-muted">
                  {featuredArticle.date}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-secondary tracking-tight leading-[1.1] mb-6 group-hover:text-primary transition-colors duration-500">
                {featuredArticle.title}
              </h2>
              
              <p className="text-lg text-muted font-sans font-medium leading-relaxed mb-12">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-4">
                <span className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-secondary group-hover:text-primary transition-colors">Read Briefing</span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

          </div>
        </Link>
      </section>

      {/* Sticky Filter & Grid Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
        
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-1/4 relative">
          <div className="lg:sticky lg:top-32 space-y-2">
            <h3 className="font-serif text-2xl text-secondary mb-8">Categories</h3>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`block w-full text-left py-3 border-b border-black/5 transition-colors duration-300 ${
                  activeCategory === cat 
                    ? "text-primary font-bold border-black/20" 
                    : "text-muted hover:text-secondary"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.1em] font-sans">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Feed */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filteredNews.length > 0 ? filteredNews.map((news) => (
              <Link href={`/insights/${news.slug}`} key={news.id} className="group flex flex-col h-full">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-black/5 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${news.coverImage})` }}
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                    {news.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-black/20" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted">
                    {news.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif text-secondary tracking-tight leading-[1.2] mb-4 group-hover:text-primary transition-colors duration-300">
                  {news.title}
                </h3>
                
                <p className="text-muted font-sans font-medium line-clamp-3 mb-8">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-sans text-muted/60 font-bold uppercase tracking-widest">{news.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                </div>
              </Link>
            )) : (
              <div className="col-span-full py-24 text-center border border-black/5 rounded-3xl bg-black/5">
                <p className="text-xl text-muted font-sans">No intelligence briefings found in this category.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 text-sm uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors"
                >
                  View All Updates
                </button>
              </div>
            )}
          </div>
        </div>

      </section>

    </main>
  );
}
