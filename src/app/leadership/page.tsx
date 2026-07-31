import { ArrowRight, Mail, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { ScrollOpacityText } from "@/components/animations/ScrollOpacityText";

export const metadata = {
  title: 'Our Leadership | Nolkha & Co',
  description: 'Meet the partners and senior leadership at Nolkha & Co. Expertise across Audit, Direct Tax, FEMA, and Corporate Structuring.',
};

export default function LeadershipPage() {
  return (
    <main className="bg-background min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Partners & Leadership</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tighter leading-[0.95] mb-8">
          Institutional<br />Pedigree.
        </h1>
        
        <div className="max-w-2xl ml-auto border-l border-black/10 pl-8">
          <p className="text-xl text-muted font-sans leading-relaxed font-medium">
            At Nolkha & Co, our most valuable asset isn't our software or our office space. It is the raw intellectual capital and operational experience of our partners.
          </p>
        </div>
      </section>

      {/* Massive Scroll Opacity Statement */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto flex items-center justify-center border-t border-black/5 mt-8">
        <ScrollOpacityText 
          text="Enterprise clients demand direct access to high-level decision makers. We reject the traditional model of junior handoffs. When you engage our firm for critical structuring, you work directly with partners who have spent decades engineering capital efficiency."
          className="text-3xl md:text-5xl lg:text-5xl font-serif tracking-tight leading-[1.1] text-secondary text-center"
        />
      </section>

      {/* Managing Partner Profile */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-black/5">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-[40%] shrink-0 sticky top-32">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 border border-black/10 relative group">
               {/* Replace with actual partner image */}
               <div className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop')" }}
               />
            </div>
          </div>
          
          <div className="w-full lg:w-[60%] pt-8 lg:pt-16">
            <h2 className="text-5xl md:text-6xl font-serif text-secondary tracking-tight mb-2">CA Nolkha</h2>
            <p className="text-lg uppercase tracking-widest text-muted font-bold font-sans mb-8 pb-8 border-b border-black/10">Founder & Managing Partner</p>
            
            <div className="prose prose-lg prose-p:font-sans prose-p:text-muted prose-p:leading-relaxed max-w-none">
              <p>
                As the founding partner of Nolkha & Co., he brings decades of specialized experience in statutory compliance, highly complex corporate tax structuring, and strategic financial advisory. 
              </p>
              <p>
                Recognizing a gap in the mid-market advisory space where growing enterprises were often underserved by massive conglomerates but outgrowing their local accountants, he established this firm to provide "Big 4" level strategic insights with boutique agility.
              </p>
              
              <div className="my-12 p-8 bg-black/5 rounded-2xl border border-black/5">
                <h3 className="text-xl font-serif text-secondary mb-6 tracking-tight">Core Competencies</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 font-sans text-muted">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Direct Tax Strategy</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Statutory Audits</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> FEMA Structuring</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Startup Advisory</li>
                </ul>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="mailto:contact@nolkhaca.com" className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all">
                  <LinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors / Future Expansion */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5">
         <div className="flex items-center gap-4 mb-16">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.2em] uppercase text-muted font-bold font-sans">Practice Heads</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <div key={i} className="group border border-black/5 rounded-2xl overflow-hidden hover:border-black/20 transition-colors bg-white">
                <div className="aspect-square bg-black/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted/30 font-sans">
                    [Partner Photo {i}]
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-secondary mb-1">Senior Partner</h3>
                  <p className="text-sm uppercase tracking-widest text-muted font-bold font-sans mb-4">Practice Head</p>
                  <p className="text-muted font-sans line-clamp-3">
                    A dedicated practice head bringing specialized expertise in their respective domain, from indirect tax litigation to international transfer pricing.
                  </p>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t border-black/5 flex flex-col items-center text-center">
        <h2 className="text-4xl font-serif text-secondary tracking-tight mb-8">
          Discuss your mandate directly with a Partner.
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-4 group/link">
          <span className="font-sans uppercase tracking-[0.2em] text-sm font-bold text-secondary">Initiate Dialogue</span>
          <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all duration-500 group-hover/link:bg-secondary group-hover/link:border-secondary">
            <ArrowRight className="w-5 h-5 text-secondary group-hover/link:text-white transition-colors" />
          </div>
        </Link>
      </section>
    </main>
  );
}
