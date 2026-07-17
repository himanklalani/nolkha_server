import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Building2, TrendingUp } from "lucide-react";
import { FlexGridPillars } from "@/components/ui/FlexGridPillars";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollOpacityText } from "@/components/animations/ScrollOpacityText";

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
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-6xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-20 max-w-4xl">
        <Eyebrow align="left" color="primary">Service Architecture</Eyebrow>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-secondary mb-8">
          {service.title}<span className="text-accent">.</span>
        </h1>
        <p className="text-2xl text-muted text-balance leading-relaxed border-l-2 border-black/10 pl-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Sticky Side-Navigation Index */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-40 flex flex-col space-y-6 border-l border-black/10 pl-6">
            <div className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Index</div>
            <a href="#overview" className="text-sm font-bold text-secondary hover:text-accent transition-colors">01. Service Overview</a>
            <a href="#compliance" className="text-sm font-bold text-muted hover:text-accent transition-colors">02. Regulatory Framework</a>
            <a href="#advisory" className="text-sm font-bold text-muted hover:text-accent transition-colors">03. Advisory Scope</a>
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
          <section id="compliance" className="scroll-mt-40 min-h-[80vh] flex flex-col justify-center border-t border-black/10 pt-24">
             <Eyebrow align="left" color="primary" className="mb-8">Regulatory Framework</Eyebrow>
             <ScrollOpacityText 
               text={`The ${service.title.toLowerCase()} landscape is defined by extreme regulatory scrutiny and dynamic legislative shifts. Our institutional framework ensures perfect statutory adherence while simultaneously leveraging systemic efficiencies to preserve operational liquidity. We do not just file; we engineer.`}
               className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.3] text-secondary"
             />
          </section>

          {/* Section 3: CTA */}
          <section id="advisory" className="scroll-mt-40 border-t border-black/10 pt-24 pb-12 flex flex-col items-start gap-8">
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
  );
}
