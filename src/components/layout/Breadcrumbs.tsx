"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show on home page
  if (pathname === "/") return null;
  
  const paths = pathname.split("/").filter(Boolean);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="md:hidden absolute top-[100px] left-6 z-40 flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono text-muted"
    >
      <Link href="/" className="hover:text-primary transition-colors">Home</Link>
      {paths.map((path, idx) => {
        const isLast = idx === paths.length - 1;
        const href = "/" + paths.slice(0, idx + 1).join("/");
        return (
          <div key={path} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-muted/50" />
            {isLast ? (
              <span className="text-primary font-bold">{path.replace(/-/g, " ")}</span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {path.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
