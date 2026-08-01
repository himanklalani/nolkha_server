import { FileText, Building, LineChart, Globe, Building2, TrendingUp, Landmark, ShieldCheck, Scale, Briefcase } from "lucide-react";
import { WalletIcon, VideoStreamingIcon } from "@/components/ui/Icons";

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  shortDescription: string;
  fullDescription: string;
  audience?: string[];
  regulatoryFramework?: string[];
  executionTimeline?: { title: string; description: string }[];
  deliverables?: string[];
  calculatorConfig?: {
    type: string;
    title: string;
  };
}

export const services: Service[] = [
  {
    id: "tax-consulting",
    title: "Tax Consulting",
    slug: "tax-consulting",
    icon: WalletIcon,
    shortDescription: "Clear, compliant tax strategies that minimize liabilities and avoid surprises.",
    fullDescription: "Tax laws change constantly. We build tax strategies that keep your business compliant while minimizing liabilities. Whether you are an individual, a startup, or an enterprise, we manage your filings, handle notices, and structure your transactions to keep more capital in your business.",
    audience: ["Startups", "Enterprises", "HNIs"],
    regulatoryFramework: [
      "Income Tax Act 1961",
      "Sec 147/148 Reassessment Defense",
      "Capital Gains Sec 54/54F Optimization"
    ],
    executionTimeline: [
      { title: "Diagnostic Audit", description: "Comprehensive review of past returns, capital structures, and potential exposure areas." },
      { title: "Strategy Formulation", description: "Engineering a bespoke tax architecture minimizing leakage via legal exemptions and deductions." },
      { title: "Statutory Execution", description: "Flawless filing of returns, response to departmental notices, and active representation." },
      { title: "Continuous Optimization", description: "Quarterly reviews adjusting for new finance bill amendments and shifting business models." }
    ],
    deliverables: [
      "Annual Tax Architecture Report",
      "Tax Audit Form 3CD",
      "Dispute Defense Portfolio"
    ],
    calculatorConfig: {
      type: "tax-optimization",
      title: "Tax Liability & Optimization Estimator"
    }
  },
  {
    id: "auditing-assurance",
    title: "Auditing & Assurance",
    slug: "auditing-assurance",
    icon: FileText,
    shortDescription: "Rigorous statutory and internal audits that build stakeholder trust.",
    fullDescription: "An audit shouldn't just be a compliance exercise. Our statutory and internal audits identify financial risks, improve internal controls, and give investors confidence in your numbers. We focus on accuracy so you can focus on growth.",
    audience: ["Enterprises", "Startups"]
  },
  {
    id: "company-registration",
    title: "Company Registration",
    slug: "company-registration",
    icon: Building,
    shortDescription: "Fast, error-free business incorporation and regulatory setup.",
    fullDescription: "Starting a business involves complex paperwork. We handle company registration, GST setup, and MSME certification. We ensure your legal structure fits your long-term goals, so you start on a solid foundation without regulatory delays.",
    audience: ["Startups", "Cross-Border"]
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    slug: "financial-advisory",
    icon: VideoStreamingIcon,
    shortDescription: "Strategic capital planning, valuations, and due diligence for scaling businesses.",
    fullDescription: "When you are raising capital or acquiring another firm, the numbers must add up. We provide objective business valuations, financial due diligence, and capital structuring advice to help you negotiate from a position of strength.",
    audience: ["Startups", "Enterprises"]
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    icon: LineChart,
    shortDescription: "Enterprise-grade financial leadership and outsourced accounting for growing startups.",
    fullDescription: "Scaling companies often outgrow their bookkeepers before they can afford a full-time CFO. We step in to manage your entire financial operation. From cash flow forecasting and investor reporting to unit economics analysis, we provide the high-level strategy and execution needed to propel your growth.",
    audience: ["Startups"]
  },
  {
    id: "international-tax",
    title: "International Tax & Transfer Pricing",
    slug: "international-tax",
    icon: Globe,
    shortDescription: "Cross-border structuring, FEMA compliance, and Transfer Pricing mitigation.",
    fullDescription: "Expanding globally introduces severe regulatory complexities. We structure cross-border taxation, manage Transfer Pricing (TP) documentation, and handle all RBI/FEMA filings. We ensure your international capital movements are perfectly compliant and optimized for tax efficiency.",
    audience: ["Enterprises", "Cross-Border"]
  },
  {
    id: "real-estate-advisory",
    title: "Real Estate Advisory",
    slug: "real-estate-advisory",
    icon: Building2,
    shortDescription: "Property tax structuring, RERA compliance, and capital gains optimization.",
    fullDescription: "Real estate transactions carry immense tax implications. We structure property acquisitions, manage capital gains exemptions, and ensure complete RERA compliance for developers and investors. We protect your real estate yields from unnecessary tax erosion.",
    audience: ["Enterprises", "HNIs"]
  },
  {
    id: "portfolio-management",
    title: "Stock Portfolio Management",
    slug: "portfolio-management",
    icon: TrendingUp,
    shortDescription: "HNI wealth preservation, stock tax optimization, and equity structuring.",
    fullDescription: "Generating wealth is only half the equation; preserving it requires precision. We analyze your equity portfolios to optimize short-term and long-term capital gains, manage dividend taxation, and structure your investments to maximize compounding capital over decades.",
    audience: ["HNIs"]
  },
  {
    id: "loan-syndication",
    title: "Loan Syndication",
    slug: "loan-syndication",
    icon: Landmark,
    shortDescription: "Securing enterprise capital, debt restructuring, and project finance.",
    fullDescription: "Scaling operations require significant capital infusion. We prepare comprehensive project reports, negotiate with financial institutions, and secure optimal debt financing. From working capital limits to massive project loans, we engineer your debt structure for sustainable growth.",
    audience: ["Enterprises", "Startups"]
  },
  {
    id: "gst-audit-representation",
    title: "GST Audit & Representation",
    slug: "gst-audit-representation",
    icon: ShieldCheck,
    shortDescription: "Aggressive defense against GST notices and comprehensive ITC reconciliation.",
    fullDescription: "The GST department uses aggressive AI to flag Input Tax Credit (ITC) mismatches. As the premier GST consultants in Thane, we provide pre-emptive forensic audits and fierce representation during departmental scrutiny to protect your working capital.",
    audience: ["Enterprises", "Startups"]
  },
  {
    id: "fema-cross-border-structuring",
    title: "FEMA & Cross-Border Structuring",
    slug: "fema-cross-border-structuring",
    icon: Globe,
    shortDescription: "Flawless RBI compliance for foreign direct investment (FDI) and overseas ventures.",
    fullDescription: "Tech startups and international conglomerates face massive penalties for minor FEMA violations. We engineer bulletproof Form FC-GPR filings, precise valuation certificates, and overseas direct investment (ODI) structuring for scaling companies in Mumbai.",
    audience: ["Startups", "Enterprises", "Cross-Border"]
  },
  {
    id: "startup-accounting-cfo",
    title: "Startup Accounting & CFO",
    slug: "startup-accounting-cfo",
    icon: LineChart,
    shortDescription: "Venture-ready financial architecture, cap table management, and burn rate analysis.",
    fullDescription: "Venture Capitalists demand immaculate financials. We provide comprehensive outsourced accounting and Virtual CFO services specifically tailored for high-growth startups. We manage everything from ESOP structuring to sophisticated unit economics modeling.",
    audience: ["Startups"]
  },
  {
    id: "real-estate-reit-structuring",
    title: "Private REIT Structuring",
    slug: "real-estate-reit-structuring",
    icon: Building2,
    shortDescription: "Tax-efficient real estate holding structures for developers and HNI investors.",
    fullDescription: "Holding commercial real estate in standard entities is highly tax-inefficient. We engineer sophisticated private REITs and special purpose vehicles (SPVs) that optimize rental yield taxation and maximize capital gains exemptions.",
    audience: ["Enterprises", "HNIs"]
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions Advisory",
    slug: "mergers-acquisitions",
    icon: Briefcase,
    shortDescription: "Forensic due diligence, valuation modeling, and post-merger integration strategy.",
    fullDescription: "Acquisitions require absolute certainty. Our M&A desk conducts exhaustive financial due diligence to uncover hidden liabilities, builds definitive valuation models, and structures the deal to maximize tax advantages for both the buyer and seller.",
    audience: ["Enterprises", "Cross-Border"]
  },
  {
    id: "corporate-secretarial",
    title: "Corporate Secretarial Services",
    slug: "corporate-secretarial",
    icon: Scale,
    shortDescription: "MCA compliance, board meeting administration, and authorized capital restructuring.",
    fullDescription: "We handle the entire spectrum of Ministry of Corporate Affairs (MCA) compliance. From filing annual returns and managing board resolutions to complex authorized capital restructuring and share allotments, we ensure your entity remains in perfect standing.",
    audience: ["Enterprises", "Startups"]
  }
];
