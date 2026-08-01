'use client';

import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 250, damping: 25 },
  },
};

export function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  // We split by words ONLY. Splitting by characters destroys browser kerning logic.
  const words = text.split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 -mb-2">
          <motion.span variants={child} className="inline-block origin-bottom">
            {word}
          </motion.span>
          {/* Add non-breaking space after each word except the last */}
          {i !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
