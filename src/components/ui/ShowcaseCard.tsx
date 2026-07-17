"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface ShowcaseCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  challengeText: string;
  approachText: string;
  outcomeText: string;
  ctaLabel?: string;
  ctaUrl?: string;
  coverImage?: string;
}

export function ShowcaseCard({
  title,
  subtitle,
  tags,
  challengeText,
  approachText,
  outcomeText,
  ctaLabel = "Read Analysis",
  ctaUrl = "#",
  coverImage,
}: ShowcaseCardProps) {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      className="flex flex-col bg-surface rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full min-w-[300px] max-w-[400px] w-full"
    >
      {/* Top Bar Accent */}
      <div className="h-[3px] w-full bg-accent shrink-0" />
      
      {/* Media */}
      {coverImage && (
        <div className="w-full h-48 md:h-52 relative shrink-0 bg-black/5 overflow-hidden">
          <Image 
            src={coverImage} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col p-6 md:p-8 flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-secondary mb-1 tracking-tight">{title}</h3>
        <span className="text-[13px] text-muted mb-4">{subtitle}</span>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="h-px w-full bg-black/10 mb-6" />

        {/* Challenge / Approach / Outcome */}
        <div className="flex flex-col gap-5 flex-1 mb-8">
          {challengeText && (
            <div className="border-l-2 border-black/10 pl-4">
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted mb-1.5">Challenge</div>
              <p className="text-[13px] leading-relaxed text-secondary">{challengeText}</p>
            </div>
          )}
          {approachText && (
            <div className="border-l-2 border-black/10 pl-4">
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted mb-1.5">Approach</div>
              <p className="text-[13px] leading-relaxed text-secondary">{approachText}</p>
            </div>
          )}
          {outcomeText && (
            <div className="border-l-2 border-black/10 pl-4">
              <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted mb-1.5">Outcome</div>
              <p className="text-[13px] leading-relaxed text-secondary">{outcomeText}</p>
            </div>
          )}
        </div>

        <div className="h-px w-full bg-black/10 mb-5 mt-auto" />

        {/* CTA */}
        <Link href={ctaUrl} className="inline-flex items-center self-end gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
