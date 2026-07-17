import { FileText, Building, LineChart, Globe, Building2, TrendingUp, Landmark } from "lucide-react";
import { WalletIcon, VideoStreamingIcon } from "@/components/ui/Icons";

export const services = [
  {
    id: "tax-consulting",
    title: "Tax Consulting",
    slug: "tax-consulting",
    icon: WalletIcon,
    shortDescription: "Clear, compliant tax strategies that minimize liabilities and avoid surprises.",
    fullDescription: "Tax laws change constantly. We build tax strategies that keep your business compliant while minimizing liabilities. Whether you are an individual, a startup, or an enterprise, we manage your filings, handle notices, and structure your transactions to keep more capital in your business."
  },
  {
    id: "auditing-assurance",
    title: "Auditing & Assurance",
    slug: "auditing-assurance",
    icon: FileText,
    shortDescription: "Rigorous statutory and internal audits that build stakeholder trust.",
    fullDescription: "An audit shouldn't just be a compliance exercise. Our statutory and internal audits identify financial risks, improve internal controls, and give investors confidence in your numbers. We focus on accuracy so you can focus on growth."
  },
  {
    id: "company-registration",
    title: "Company Registration",
    slug: "company-registration",
    icon: Building,
    shortDescription: "Fast, error-free business incorporation and regulatory setup.",
    fullDescription: "Starting a business involves complex paperwork. We handle company registration, GST setup, and MSME certification. We ensure your legal structure fits your long-term goals, so you start on a solid foundation without regulatory delays."
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    slug: "financial-advisory",
    icon: VideoStreamingIcon,
    shortDescription: "Strategic capital planning, valuations, and due diligence for scaling businesses.",
    fullDescription: "When you are raising capital or acquiring another firm, the numbers must add up. We provide objective business valuations, financial due diligence, and capital structuring advice to help you negotiate from a position of strength."
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    icon: LineChart,
    shortDescription: "Enterprise-grade financial leadership and outsourced accounting for growing startups.",
    fullDescription: "Scaling companies often outgrow their bookkeepers before they can afford a full-time CFO. We step in to manage your entire financial operation. From cash flow forecasting and investor reporting to unit economics analysis, we provide the high-level strategy and execution needed to propel your growth."
  },
  {
    id: "international-tax",
    title: "International Tax & Transfer Pricing",
    slug: "international-tax",
    icon: Globe,
    shortDescription: "Cross-border structuring, FEMA compliance, and Transfer Pricing mitigation.",
    fullDescription: "Expanding globally introduces severe regulatory complexities. We engineer robust cross-border tax structures, manage Transfer Pricing (TP) documentation, and handle all RBI/FEMA filings. We ensure your international capital movements are perfectly compliant and optimized for tax efficiency."
  },
  {
    id: "real-estate-advisory",
    title: "Real Estate Advisory",
    slug: "real-estate-advisory",
    icon: Building2,
    shortDescription: "Property tax structuring, RERA compliance, and capital gains optimization.",
    fullDescription: "Real estate transactions carry immense tax implications. We structure property acquisitions, manage capital gains exemptions, and ensure complete RERA compliance for developers and investors. We protect your real estate yields from unnecessary tax erosion."
  },
  {
    id: "portfolio-management",
    title: "Stock Portfolio Management",
    slug: "portfolio-management",
    icon: TrendingUp,
    shortDescription: "HNI wealth preservation, stock tax optimization, and equity structuring.",
    fullDescription: "Generating wealth is only half the equation; preserving it requires precision. We analyze your equity portfolios to optimize short-term and long-term capital gains, manage dividend taxation, and structure your investments to maximize compounding capital over decades."
  },
  {
    id: "loan-syndication",
    title: "Loan Syndication",
    slug: "loan-syndication",
    icon: Landmark,
    shortDescription: "Securing enterprise capital, debt restructuring, and project finance.",
    fullDescription: "Scaling operations require robust capital infusion. We prepare comprehensive project reports, negotiate with financial institutions, and secure optimal debt financing. From working capital limits to massive project loans, we engineer your debt structure for sustainable growth."
  }
];
