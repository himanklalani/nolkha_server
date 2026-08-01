import { services } from "@/data/services";
import { newsData } from "@/data/news";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, FileText, Building2 } from "lucide-react";
import { FlexGridPillars } from "@/components/ui/FlexGridPillars";
import { ScrollOpacityText } from "@/components/animations/ScrollOpacityText";
import { ExecutionTimeline } from "@/components/ui/ExecutionTimeline";
import { DeliverablesMatrix } from "@/components/ui/DeliverablesMatrix";
import { TaxOptimizationCalculator } from "@/components/calculators/TaxOptimizationCalculator";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Nolkha & Co`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      {/* Editorial Hero Header with Abstract Image/Video Background */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/services-hero.png" alt="Hero Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-20 max-w-4xl">
            <Eyebrow align="left" color="primary">Service Architecture</Eyebrow>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-secondary mb-8">
              {service.title}<span className="text-accent">.</span>
            </h1>
            <p className="text-2xl text-muted text-balance leading-relaxed border-l-2 border-black/10 pl-6 mb-8">
              {service.shortDescription}
            </p>

            {/* Regulatory Framework Tags */}
            {service.regulatoryFramework && (
              <div className="flex flex-wrap gap-3 mt-8">
                {service.regulatoryFramework.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-black/10 text-[10px] uppercase tracking-widest font-bold text-muted bg-white/50 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 max-w-6xl mx-auto pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Side-Navigation Index */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-40 flex flex-col space-y-6 border-l border-black/10 pl-6">
              <div className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Index</div>
              <a href="#overview" className="text-sm font-bold text-secondary hover:text-accent transition-colors">01. Service Overview</a>
              <a href="#compliance" className="text-sm font-bold text-muted hover:text-accent transition-colors">02. Regulatory Framework</a>
              {service.executionTimeline && (
                <a href="#execution" className="text-sm font-bold text-muted hover:text-accent transition-colors">03. Execution Protocol</a>
              )}
              {service.deliverables && (
                <a href="#deliverables" className="text-sm font-bold text-muted hover:text-accent transition-colors">04. Deliverables</a>
              )}
              {service.calculatorConfig && (
                <a href="#diagnostic" className="text-sm font-bold text-muted hover:text-accent transition-colors">05. Diagnostic Tool</a>
              )}
              <a href="#advisory" className="text-sm font-bold text-muted hover:text-accent transition-colors">06. Advisory Scope</a>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-3/4 flex flex-col gap-32">
            
            {/* Section 1: Overview Flex-Grid */}
            <section id="overview" className="scroll-mt-40">
              <FlexGridPillars 
                pillars={[
                  {
                    title: "Strategic Overview",
                    description: service.fullDescription,
                    icon: <Icon className="w-5 h-5" />,
                    bgImage: "/images/grid-1.jpeg",
                  },
                  {
                    title: "Operational Deliverables",
                    description: "Comprehensive architecture mapping. Direct partner-level engagement and rapid execution. Total regulatory compliance and risk mitigation.",
                    icon: <FileText className="w-5 h-5" />,
                    bgImage: "/images/grid-2.jpeg",
                  },
                  {
                    title: "Advisory Scope",
                    description: "Structured for mid-market enterprises, international corporations, and high-net-worth individuals requiring capital efficiency.",
                    icon: <Building2 className="w-5 h-5" />,
                    bgImage: "/images/grid-3.jpeg",
                  }
                ]}
              />
            </section>

            {/* Section 2: Regulatory Framework Scrubbing */}
            <section id="compliance" className="scroll-mt-40 min-h-[60vh] flex flex-col justify-center border-t border-black/10 pt-24">
               <Eyebrow align="left" color="primary" className="mb-8">Regulatory Framework</Eyebrow>
               <ScrollOpacityText 
                 text={`The ${service.title.toLowerCase()} landscape is defined by extreme regulatory scrutiny and dynamic legislative shifts. Our institutional framework ensures perfect statutory adherence while simultaneously leveraging systemic efficiencies to preserve operational liquidity. We do not just file; we engineer.`}
                 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.3] text-secondary"
               />
            </section>

            {/* Section 3: Execution Timeline */}
            {service.executionTimeline && (
              <section id="execution" className="scroll-mt-40 border-t border-black/10 pt-24">
                <ExecutionTimeline timeline={service.executionTimeline} />
              </section>
            )}

            {/* Section 4: Concrete Deliverables */}
            {service.deliverables && (
              <section id="deliverables" className="scroll-mt-40 border-t border-black/10 pt-24">
                <DeliverablesMatrix deliverables={service.deliverables} />
              </section>
            )}

            {/* Section 5: Interactive Diagnostic Tool */}
            {service.calculatorConfig && (
              <section id="diagnostic" className="scroll-mt-40 border-t border-black/10 pt-24">
                <Eyebrow align="left" color="primary" className="mb-12">Diagnostic Tool</Eyebrow>
                {service.calculatorConfig.type === 'tax-optimization' ? (
                  <TaxOptimizationCalculator />
                ) : (
                  <div className="w-full bg-black/5 rounded-[3rem] p-12 md:p-20 border border-black/10 flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/deliverables-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
                    
                    <div className="w-20 h-20 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif text-secondary tracking-tight relative z-10">
                      Diagnostic Tool Under Calibration
                    </h3>
                    
                    <p className="text-muted font-sans text-lg max-w-xl relative z-10">
                      The interactive <strong>{service.calculatorConfig.title}</strong> is currently being calibrated with the latest statutory data. This advanced diagnostic module is available exclusively during partner-level strategy sessions.
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Section 6: Related Insights */}
            <section id="insights" className="scroll-mt-40 border-t border-black/10 pt-24">
               <Eyebrow align="left" color="primary" className="mb-12">Related Intelligence</Eyebrow>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {newsData.slice(0, 2).map((news) => (
                   <Link href={`/insights/${news.slug}`} key={news.id} className="group block bg-black/5 rounded-3xl p-8 border border-black/5 hover:bg-black/10 transition-colors">
                     <div className="flex items-center gap-3 mb-4">
                       <span className="text-[10px] uppercase tracking-widest font-bold text-primary">{news.category}</span>
                       <span className="w-1 h-1 rounded-full bg-black/20" />
                       <span className="text-[10px] uppercase tracking-widest font-bold text-muted">{news.readTime}</span>
                     </div>
                     <h3 className="text-2xl font-serif text-secondary tracking-tight mb-4 group-hover:text-primary transition-colors">{news.title}</h3>
                     <div className="flex items-center gap-2 mt-8 text-secondary">
                       <span className="text-xs uppercase tracking-widest font-bold">Read Briefing</span>
                       <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                     </div>
                   </Link>
                 ))}
               </div>
            </section>

            {/* Section 7: CTA */}
            <section id="advisory" className="scroll-mt-40 border-t border-black/10 pt-24 flex flex-col items-start gap-8">
              <h3 className="text-3xl font-bold text-secondary">Initiate the Engagement</h3>
              <div className="w-full max-w-md bg-black/5 p-8 rounded-[2rem] ring-1 ring-black/5">
                <h4 className="text-sm uppercase tracking-widest font-bold text-secondary mb-6">Partner-Level Consultation</h4>
                <Button size="lg" className="w-full bg-[#0a0a0a] border border-[#242424] hover:border-white/20 text-white hover:bg-black rounded-2xl transition-all h-14" asChild>
                  <Link href={`/contact?service=${service.slug}`}>
                    Secure a Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
