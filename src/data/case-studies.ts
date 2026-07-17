import { ShowcaseCardProps } from "@/components/ui/ShowcaseCard";

export const caseStudies: ShowcaseCardProps[] = [
  {
    title: "Commercial Property Tax Restructuring",
    subtitle: "Real Estate Advisory · Mumbai",
    tags: ["Tax Planning", "Compliance"],
    challengeText: "A mid-sized developer faced massive capital gains tax after liquidating a commercial portfolio. They considered standard reinvestment bonds, but the lock-in periods would freeze their operating cash flow for years.",
    approachText: "We audited their subsidiary structure and moved the assets into a new holding company prior to the sale. We utilized specific exemptions under Section 47 to ensure the transfer was tax-neutral.",
    outcomeText: "The client saved over ₹12 crore in capital gains. They kept their cash liquid and acquired three new land parcels the following quarter.",
    ctaUrl: "/services/real-estate-advisory",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "HNI Equity Transition",
    subtitle: "Portfolio Management · Delhi",
    tags: ["Wealth Management", "HNI"],
    challengeText: "A family office held a concentrated position in legacy banking stocks. They wanted to diversify into tech and renewables, but the unrealized capital gains tax made selling prohibitive.",
    approachText: "We designed a staggered divestment plan spread across three financial years. We paired the profitable sales with strategic loss-harvesting from underperforming real estate trusts in their broader portfolio.",
    outcomeText: "The transition achieved target diversification. The effective tax rate on the capital gains was kept below 4 percent.",
    ctaUrl: "/services/portfolio-management",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Series B Debt Financing",
    subtitle: "Loan Syndication · Bangalore",
    tags: ["Debt", "Startups"],
    challengeText: "A fast-growing SaaS company needed working capital to expand operations. Venture debt providers offered terrible terms because the startup lacked physical collateral.",
    approachText: "We restructured their revenue recognition model to highlight predictable recurring cash flows. We then presented this updated financial model to three tier-one private banks and initiated a competitive bidding process.",
    outcomeText: "The company secured ₹25 crore in collateral-free debt. The interest rate was 300 basis points lower than the venture debt term sheets.",
    ctaUrl: "/services/loan-syndication",
    coverImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Supply Chain GST Defense",
    subtitle: "Auditing & Assurance · Pune",
    tags: ["GST", "Audit Defense"],
    challengeText: "The state GST department flagged a manufacturing firm for mismatched input tax credits. The authorities threatened to freeze the company bank accounts if a ₹5 crore demand was not settled immediately.",
    approachText: "We stopped the account freeze by filing an immediate appeal. We then cross-referenced two years of purchase invoices with the vendor returns and proved that the mismatch was caused by suppliers filing late rather than client fraud.",
    outcomeText: "The tribunal dropped the penalty entirely. The firm recovered their input tax credits within three months.",
    ctaUrl: "/services/auditing-assurance",
    coverImage: "https://images.unsplash.com/photo-1587293852726-0d628a506764?q=80&w=800&auto=format&fit=crop"
  }
];
