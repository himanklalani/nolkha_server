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
    audience: ["Enterprises", "Startups"],
    regulatoryFramework: [
      "Companies Act 2013 (Sec 139-148)",
      "Standards on Auditing (SA 200-799)",
      "CARO 2020 Compliance"
    ],
    executionTimeline: [
      { title: "Risk Assessment", description: "Evaluation of internal financial controls (IFC) and enterprise risk matrix." },
      { title: "Audit Planning", description: "Establishing materiality thresholds and comprehensive audit sampling strategies." },
      { title: "Fieldwork & Vouching", description: "Rigorous substantive testing, ledger scrutiny, and third-party balance confirmations." },
      { title: "Final Reporting", description: "Issuance of Independent Auditor's Report with required statutory disclosures." }
    ],
    deliverables: [
      "Independent Auditor's Report",
      "Internal Financial Controls (IFC) Matrix",
      "CARO 2020 Annexure"
    ],
    calculatorConfig: {
      type: "audit-readiness",
      title: "Statutory Audit Readiness Assessment"
    }
  },
  {
    id: "company-registration",
    title: "Company Registration",
    slug: "company-registration",
    icon: Building,
    shortDescription: "Fast, error-free business incorporation and regulatory setup.",
    fullDescription: "Starting a business involves complex paperwork. We handle company registration, GST setup, and MSME certification. We ensure your legal structure fits your long-term goals, so you start on a solid foundation without regulatory delays.",
    audience: ["Startups", "Cross-Border"],
    regulatoryFramework: [
      "Companies Act 2013",
      "MCA SPICe+ Framework",
      "FDI Guidelines (if foreign equity)"
    ],
    executionTimeline: [
      { title: "Entity Selection", description: "Strategic consulting to choose between Pvt Ltd, LLP, or OPC based on capital and liability goals." },
      { title: "Name & DSC Approval", description: "Securing Digital Signature Certificates (DSC) and unique name reservation via MCA RUN." },
      { title: "Drafting Charters", description: "Bespoke drafting of Memorandum (MoA) and Articles of Association (AoA) tailored to founder rights." },
      { title: "Incorporation & PAN/TAN", description: "Filing SPICe+ forms resulting in immediate issuance of Certificate of Incorporation, PAN, and TAN." }
    ],
    deliverables: [
      "Certificate of Incorporation (CoI)",
      "Stamped MoA & AoA",
      "Statutory Bank Account Resolution"
    ],
    calculatorConfig: {
      type: "entity-selector",
      title: "Corporate Entity Selection Matrix"
    }
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    slug: "financial-advisory",
    icon: VideoStreamingIcon,
    shortDescription: "Strategic capital planning, valuations, and due diligence for scaling businesses.",
    fullDescription: "When you are raising capital or acquiring another firm, the numbers must add up. We provide objective business valuations, financial due diligence, and capital structuring advice to help you negotiate from a position of strength.",
    audience: ["Startups", "Enterprises"],
    regulatoryFramework: [
      "IBBI Valuation Standards",
      "Income Tax Act Rule 11UA",
      "FEMA Pricing Guidelines"
    ],
    executionTimeline: [
      { title: "Data Room Compilation", description: "Gathering historical financials, cap tables, and projected revenue models." },
      { title: "Financial Modeling", description: "Building robust Discounted Cash Flow (DCF) or Comparable Company Analysis (CCA) models." },
      { title: "Due Diligence (FDD)", description: "Identifying hidden liabilities, contingent risks, and normalizing EBITDA adjustments." },
      { title: "Final Valuation", description: "Issuing a certified valuation report compliant with Income Tax and FEMA regulations." }
    ],
    deliverables: [
      "Certified Valuation Report (Rule 11UA)",
      "Financial Due Diligence (FDD) Dossier",
      "Pitch Deck Financial Audit"
    ],
    calculatorConfig: {
      type: "valuation-estimator",
      title: "Enterprise Valuation Multiples Estimator"
    }
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    icon: LineChart,
    shortDescription: "Enterprise-grade financial leadership and outsourced accounting for growing startups.",
    fullDescription: "Scaling companies often outgrow their bookkeepers before they can afford a full-time CFO. We step in to manage your entire financial operation. From cash flow forecasting and investor reporting to unit economics analysis, we provide the high-level strategy and execution needed to propel your growth.",
    audience: ["Startups"],
    regulatoryFramework: [
      "GAAP / Ind AS Framework",
      "Investor MIS Reporting Standards",
      "Statutory Withholding Compliances"
    ],
    executionTimeline: [
      { title: "Financial Health Check", description: "Auditing current accounting software, chart of accounts, and historical burn rate." },
      { title: "System Implementation", description: "Setting up automated payroll, expense tracking, and cloud accounting integrations." },
      { title: "Budgeting & Forecasting", description: "Building a rolling 12-month cash flow forecast and department-wise budgets." },
      { title: "Board Reporting", description: "Delivering monthly Management Information System (MIS) reports to founders and VCs." }
    ],
    deliverables: [
      "Monthly Financial MIS",
      "Rolling Cash Flow Forecast",
      "Investor Board Decks"
    ],
    calculatorConfig: {
      type: "burn-rate",
      title: "Startup Burn Rate & Runway Calculator"
    }
  },
  {
    id: "international-tax",
    title: "International Tax & Transfer Pricing",
    slug: "international-tax",
    icon: Globe,
    shortDescription: "Cross-border structuring, FEMA compliance, and Transfer Pricing mitigation.",
    fullDescription: "Expanding globally introduces severe regulatory complexities. We structure cross-border taxation, manage Transfer Pricing (TP) documentation, and handle all RBI/FEMA filings. We ensure your international capital movements are perfectly compliant and optimized for tax efficiency.",
    audience: ["Enterprises", "Cross-Border"],
    regulatoryFramework: [
      "Income Tax Act Sec 92-92F",
      "OECD Transfer Pricing Guidelines",
      "Double Tax Avoidance Agreements (DTAA)"
    ],
    executionTimeline: [
      { title: "Transaction Mapping", description: "Identifying all related-party cross-border transactions and royalty structures." },
      { title: "FAR Analysis", description: "Conducting Functions, Assets, and Risks (FAR) analysis for tested parties." },
      { title: "Benchmarking Study", description: "Selecting the most appropriate method (e.g., TNMM, CUP) and finding comparable arms-length prices." },
      { title: "Documentation & Filing", description: "Issuing Form 3CEB and maintaining master file and country-by-country (CbCR) reports." }
    ],
    deliverables: [
      "Form 3CEB Transfer Pricing Study",
      "DTAA Applicability Memorandum",
      "Form 15CA/CB for Foreign Remittance"
    ],
    calculatorConfig: {
      type: "withholding-tax",
      title: "DTAA Withholding Tax Estimator"
    }
  },
  {
    id: "real-estate-advisory",
    title: "Real Estate Advisory",
    slug: "real-estate-advisory",
    icon: Building2,
    shortDescription: "Property tax structuring, RERA compliance, and capital gains optimization.",
    fullDescription: "Real estate transactions carry immense tax implications. We structure property acquisitions, manage capital gains exemptions, and ensure complete RERA compliance for developers and investors. We protect your real estate yields from unnecessary tax erosion.",
    audience: ["Enterprises", "HNIs"],
    regulatoryFramework: [
      "Real Estate (Regulation and Development) Act 2016",
      "Income Tax Act Sec 54, 54EC, 54F",
      "State Stamp Duty Acts"
    ],
    executionTimeline: [
      { title: "Deal Structuring", description: "Analyzing Joint Development Agreements (JDA) and revenue sharing models for tax leakage." },
      { title: "RERA Registration", description: "Preparing promoter profiles, project estimates, and CA certificates for RERA designated accounts." },
      { title: "Capital Gains Planning", description: "Structuring reinvestments into 54EC bonds or new residential assets to nullify long-term tax." },
      { title: "Ongoing Compliance", description: "Filing quarterly RERA updates and managing proportionate withdrawal certificates." }
    ],
    deliverables: [
      "Form 3 RERA CA Certificate",
      "Capital Gains Exemption Roadmap",
      "JDA Tax Impact Assessment"
    ],
    calculatorConfig: {
      type: "capital-gains",
      title: "Property Capital Gains & Bond Allocator"
    }
  },
  {
    id: "portfolio-management",
    title: "Stock Portfolio Management",
    slug: "portfolio-management",
    icon: TrendingUp,
    shortDescription: "HNI wealth preservation, stock tax optimization, and equity structuring.",
    fullDescription: "Generating wealth is only half the equation; preserving it requires precision. We analyze your equity portfolios to optimize short-term and long-term capital gains, manage dividend taxation, and structure your investments to maximize compounding capital over decades.",
    audience: ["HNIs"],
    regulatoryFramework: [
      "Sec 111A (Short Term Capital Gains)",
      "Sec 112A (Long Term Capital Gains)",
      "Dividend Distribution Tax Rules"
    ],
    executionTimeline: [
      { title: "Portfolio Audit", description: "Consolidating demat accounts, mutual funds, and unlisted equity into a single tax view." },
      { title: "Tax Loss Harvesting", description: "Strategically booking unrealized losses to offset realized short-term gains before financial year-end." },
      { title: "LTCG Optimization", description: "Managing the ₹1.25 Lakh exemption limit and grandfathering clauses under Sec 112A." },
      { title: "Filing & Advance Tax", description: "Calculating and depositing precise quarterly advance tax to avoid Sec 234B/C interest penalties." }
    ],
    deliverables: [
      "Quarterly Tax Harvesting Report",
      "Advance Tax Computation Sheet",
      "Family Office Wealth Structuring Plan"
    ],
    calculatorConfig: {
      type: "tax-harvesting",
      title: "HNI Tax Loss Harvesting Calculator"
    }
  },
  {
    id: "loan-syndication",
    title: "Loan Syndication",
    slug: "loan-syndication",
    icon: Landmark,
    shortDescription: "Securing enterprise capital, debt restructuring, and project finance.",
    fullDescription: "Scaling operations require significant capital infusion. We prepare comprehensive project reports, negotiate with financial institutions, and secure optimal debt financing. From working capital limits to massive project loans, we engineer your debt structure for sustainable growth.",
    audience: ["Enterprises", "Startups"],
    regulatoryFramework: [
      "RBI Credit Risk Norms",
      "Base Rate & MCLR Guidelines",
      "SARFAESI Act 2002 (Awareness)"
    ],
    executionTimeline: [
      { title: "Credit Assessment", description: "Analyzing existing Debt Service Coverage Ratio (DSCR), leverage, and working capital cycle." },
      { title: "Project Report Preparation", description: "Drafting a Detailed Project Report (DPR) and CMA data projections for bank appraisal." },
      { title: "Banker Negotiation", description: "Presenting to consortiums or NBFCs to secure the lowest interest rates and favorable collateral terms." },
      { title: "Disbursement & Compliance", description: "Ensuring end-use of funds compliance and issuing CA utilization certificates." }
    ],
    deliverables: [
      "Detailed Project Report (DPR)",
      "CMA Data Projections",
      "Fund Utilization Certificate"
    ],
    calculatorConfig: {
      type: "debt-capacity",
      title: "Debt Capacity & EMI Simulator"
    }
  },
  {
    id: "gst-audit-representation",
    title: "GST Audit & Representation",
    slug: "gst-audit-representation",
    icon: ShieldCheck,
    shortDescription: "Aggressive defense against GST notices and comprehensive ITC reconciliation.",
    fullDescription: "The GST department uses aggressive AI to flag Input Tax Credit (ITC) mismatches. As the premier GST consultants in Thane, we provide pre-emptive forensic audits and fierce representation during departmental scrutiny to protect your working capital.",
    audience: ["Enterprises", "Startups"],
    regulatoryFramework: [
      "CGST / SGST Act 2017 (Sec 65/73/74)",
      "Rule 36(4) ITC Claim Restrictions",
      "E-Invoicing Mandates"
    ],
    executionTimeline: [
      { title: "Data Reconciliation", description: "Running automated mismatches between GSTR-1, GSTR-2A/2B, and GSTR-3B." },
      { title: "Pre-Audit Scrubbing", description: "Reversing ineligible ITC and discharging interest liabilities voluntarily to avoid penalties." },
      { title: "Notice Assessment", description: "Deconstructing ASMT-10 or Show Cause Notices (SCN) issued by the GST intelligence wing." },
      { title: "Legal Representation", description: "Drafting robust legal replies relying on latest tribunal/high court precedents and appearing before officers." }
    ],
    deliverables: [
      "GSTR-9 & 9C Reconciliation Statement",
      "ITC Mismatch Forensic Report",
      "Show Cause Notice (SCN) Legal Reply"
    ],
    calculatorConfig: {
      type: "itc-risk",
      title: "ITC Mismatch Penalty Risk Scorecard"
    }
  },
  {
    id: "fema-cross-border-structuring",
    title: "FEMA & Cross-Border Structuring",
    slug: "fema-cross-border-structuring",
    icon: Globe,
    shortDescription: "Flawless RBI compliance for foreign direct investment (FDI) and overseas ventures.",
    fullDescription: "Tech startups and international conglomerates face massive penalties for minor FEMA violations. We engineer bulletproof Form FC-GPR filings, precise valuation certificates, and overseas direct investment (ODI) structuring for scaling companies in Mumbai.",
    audience: ["Startups", "Enterprises", "Cross-Border"],
    regulatoryFramework: [
      "Foreign Exchange Management Act (FEMA) 1999",
      "Consolidated FDI Policy",
      "Overseas Direct Investment (ODI) Rules"
    ],
    executionTimeline: [
      { title: "Inbound/Outbound Route Check", description: "Determining if the investment falls under the Automatic Route or requires strict Government Approval." },
      { title: "Valuation Certification", description: "Issuing a CA/Merchant Banker certificate confirming shares are issued at or above fair value." },
      { title: "Banking Channels (AD Category I)", description: "Coordinating with the Authorized Dealer bank to obtain the FIRC and KYC documents." },
      { title: "RBI Reporting", description: "Filing the Single Master Form (SMF) for FC-GPR or FC-TRS within the strict 30-day window." }
    ],
    deliverables: [
      "Form FC-GPR / FC-TRS Filing Dossier",
      "FEMA Pricing Guidelines Valuation",
      "Annual FLA Return"
    ],
    calculatorConfig: {
      type: "fdi-compliance",
      title: "FDI Automatic Route Checker"
    }
  },
  {
    id: "startup-accounting-cfo",
    title: "Startup Accounting & CFO",
    slug: "startup-accounting-cfo",
    icon: LineChart,
    shortDescription: "Venture-ready financial architecture, cap table management, and burn rate analysis.",
    fullDescription: "Venture Capitalists demand immaculate financials. We provide comprehensive outsourced accounting and Virtual CFO services specifically tailored for high-growth startups. We manage everything from ESOP structuring to sophisticated unit economics modeling.",
    audience: ["Startups"],
    regulatoryFramework: [
      "Companies Act 2013 (Sec 62(1)(b) ESOPs)",
      "DPIIT Startup India Regulations",
      "Section 80-IAC Tax Exemption"
    ],
    executionTimeline: [
      { title: "DPIIT Recognition", description: "Filing the application to secure Startup India status and pushing for Section 80-IAC tax holidays." },
      { title: "Cap Table Structuring", description: "Modeling founder equity, angel dilution, and creating a mathematically sound ESOP pool." },
      { title: "Convertible Note Issuance", description: "Drafting and recording CCDs or CCPS ensuring compliance with FEMA (if foreign angels) and MCA." },
      { title: "Venture Metrics Tracking", description: "Establishing dashboards for CAC, LTV, Gross Margin, and Runway calculations." }
    ],
    deliverables: [
      "DPIIT Registration File",
      "ESOP Valuation Certificate",
      "Startup Unit Economics Dashboard"
    ],
    calculatorConfig: {
      type: "cap-table",
      title: "Cap Table Dilution & ESOP Calculator"
    }
  },
  {
    id: "real-estate-reit-structuring",
    title: "Private REIT Structuring",
    slug: "real-estate-reit-structuring",
    icon: Building2,
    shortDescription: "Tax-efficient real estate holding structures for developers and HNI investors.",
    fullDescription: "Holding commercial real estate in standard entities is highly tax-inefficient. We engineer sophisticated private REITs and special purpose vehicles (SPVs) that optimize rental yield taxation and maximize capital gains exemptions.",
    audience: ["Enterprises", "HNIs"],
    regulatoryFramework: [
      "SEBI (REIT) Regulations 2014",
      "Income Tax Act Sec 115UA (Passthrough Status)",
      "Trusts Act 1882"
    ],
    executionTimeline: [
      { title: "Asset Yield Analysis", description: "Evaluating the commercial rental yields and estimating current tax leakage under standard corporate rates." },
      { title: "Trust / SPV Formation", description: "Drafting the trust deed and incorporating the Special Purpose Vehicle to hold the underlying assets." },
      { title: "Asset Transfer & Stamp Duty", description: "Navigating state stamp duty laws to transfer properties into the trust with minimal transaction cost." },
      { title: "Passthrough Taxation Setup", description: "Registering the structure to ensure dividends and interest pass tax-free to the unitholders." }
    ],
    deliverables: [
      "REIT / SPV Incorporation Blueprint",
      "Rental Yield Tax Arbitrage Model",
      "Trust Deed & Governance Framework"
    ],
    calculatorConfig: {
      type: "reit-yield",
      title: "Commercial Property Passthrough Tax Calculator"
    }
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions Advisory",
    slug: "mergers-acquisitions",
    icon: Briefcase,
    shortDescription: "Forensic due diligence, valuation modeling, and post-merger integration strategy.",
    fullDescription: "Acquisitions require absolute certainty. Our M&A desk conducts exhaustive financial due diligence to uncover hidden liabilities, builds definitive valuation models, and structures the deal to maximize tax advantages for both the buyer and seller.",
    audience: ["Enterprises", "Cross-Border"],
    regulatoryFramework: [
      "Companies Act 2013 (Sec 230-232)",
      "Income Tax Act (Sec 47 Exempt Transfers)",
      "Competition Commission of India (CCI) Thresholds"
    ],
    executionTimeline: [
      { title: "Term Sheet & Deal Structuring", description: "Advising on Asset Sale (Slump Sale) vs. Share Purchase vs. Demerger for optimal tax neutrality." },
      { title: "Financial & Tax Due Diligence", description: "Deploying forensic accountants to verify historical EBITDA and uncover unrecorded contingent liabilities." },
      { title: "NCLT Petition Preparation", description: "Drafting the Scheme of Arrangement and coordinating with legal counsel for NCLT approval." },
      { title: "Post-Merger Integration", description: "Consolidating chart of accounts, migrating ERP data, and harmonizing accounting policies." }
    ],
    deliverables: [
      "M&A Tax Due Diligence Report",
      "Scheme of Arrangement (Financial Sections)",
      "Slump Sale Valuation Certificate"
    ],
    calculatorConfig: {
      type: "ma-matrix",
      title: "M&A Deal Structure & Tax Liability Matrix"
    }
  },
  {
    id: "corporate-secretarial",
    title: "Corporate Secretarial Services",
    slug: "corporate-secretarial",
    icon: Scale,
    shortDescription: "MCA compliance, board meeting administration, and authorized capital restructuring.",
    fullDescription: "We handle the entire spectrum of Ministry of Corporate Affairs (MCA) compliance. From filing annual returns and managing board resolutions to complex authorized capital restructuring and share allotments, we ensure your entity remains in perfect standing.",
    audience: ["Enterprises", "Startups"],
    regulatoryFramework: [
      "Companies Act 2013",
      "Secretarial Standards (SS-1, SS-2)",
      "Director KYC & XBRL Filing Rules"
    ],
    executionTimeline: [
      { title: "Statutory Health Check", description: "Auditing past MCA filings, director DIN statuses, and identifying late filing penalties." },
      { title: "Meeting Administration", description: "Drafting notices, agendas, and precise minutes for Board Meetings and Annual General Meetings (AGM)." },
      { title: "Capital Restructuring", description: "Managing the legal process for increasing Authorized Capital or issuing Rights/Bonus shares." },
      { title: "Annual Filings", description: "Flawless compilation and filing of AOC-4 (Financials) and MGT-7 (Annual Return)." }
    ],
    deliverables: [
      "Statutory Registers Maintenance",
      "Board & AGM Minutes Archive",
      "XBRL / AOC-4 Annual Return Dossier"
    ],
    calculatorConfig: {
      type: "mca-penalty",
      title: "MCA Late Filing Fee Estimator"
    }
  }
];
