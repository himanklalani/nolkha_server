export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: "Tax Updates" | "Corporate Law" | "Market Insights" | "Firm News";
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "budget-2025-capital-gains-restructuring",
    title: "Navigating the 2025 Capital Gains Tax Restructuring for HNIs",
    excerpt: "The latest fiscal budget introduces critical adjustments to long-term capital gains exemptions. We break down what this means for high-net-worth real estate portfolios and equity holdings.",
    content: `
      <h2>The Shift in Capital Gains Regimes</h2>
      <p>The recent fiscal budget has fundamentally altered how long-term capital gains (LTCG) are calculated, directly impacting high-net-worth individuals holding significant real estate and equity portfolios. While the headline tax rates appear stable, the underlying indexation benefits have been covertly restructured.</p>
      
      <h2>Real Estate Implications</h2>
      <p>For investors heavily leveraged in commercial and residential properties, the removal of certain indexation benefits means nominal gains will be taxed more aggressively. This makes standard property flipping significantly less lucrative. As the premier <a href="/services/real-estate-advisory" class="text-secondary font-bold hover:underline">Real Estate Advisory</a> firm in Thane, we are actively shifting our clients toward <a href="/services/real-estate-reit-structuring" class="text-secondary font-bold hover:underline">Private REIT Structuring</a> to insulate their capital yields.</p>
      
      <h2>Equity and Portfolio Strategy</h2>
      <p>Your equity portfolios are not immune. The new threshold for unlisted shares demands a complete re-evaluation of your private equity holdings. If you are an angel investor or startup founder, optimizing your equity structure via our <a href="/services/portfolio-management" class="text-secondary font-bold hover:underline">Stock Portfolio Management</a> division is no longer optional—it is a critical defensive measure.</p>
      
      <h2>Immediate Action Items</h2>
      <p>Do not wait until the financial year-end. Connect with our <a href="/services/tax-consulting" class="text-secondary font-bold hover:underline">Tax Consulting</a> experts today to restructure your holdings before the new financial quarter locks in your tax liabilities.</p>
    `,
    category: "Tax Updates",
    date: "March 15, 2025",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "2",
    slug: "rbi-fema-cross-border-compliance",
    title: "RBI Tightens FEMA Compliance for Tech Startups Raising Foreign Capital",
    excerpt: "Startups receiving Series A/B funding from foreign VCs face new rigorous reporting requirements. Ensure your cap table is compliant before your next term sheet.",
    content: `
      <h2>The New Reality of Foreign Direct Investment (FDI)</h2>
      <p>The Reserve Bank of India (RBI) has quietly escalated its scrutiny on inward remittances, specifically targeting technology startups raising venture capital from foreign entities. The days of relaxed compliance grace periods are over. If your startup is closing a Series A or B round, the Foreign Exchange Management Act (FEMA) compliance must be flawless.</p>
      
      <h2>Common Pitfalls in Valuation Certificates</h2>
      <p>The most frequent trigger for an RBI notice is a mismatched or poorly substantiated valuation certificate. When issuing shares to foreign investors, the pricing guidelines strictly dictate that the valuation must be conducted by a registered merchant banker or a chartered accountant using internationally accepted methodology. Our <a href="/services/financial-advisory" class="text-secondary font-bold hover:underline">Financial Advisory</a> and <a href="/services/fema-cross-border-structuring" class="text-secondary font-bold hover:underline">FEMA & Cross-Border Structuring</a> teams specialize in providing bulletproof valuation reports that sail through RBI scrutiny.</p>
      
      <h2>Form FC-GPR Timelines</h2>
      <p>You have exactly 30 days from the date of share allotment to file Form FC-GPR. Missing this deadline triggers severe compounding penalties that can spook future investors. We highly recommend utilizing our <a href="/services/virtual-cfo" class="text-secondary font-bold hover:underline">Virtual CFO Services</a> to ensure all regulatory timelines are aggressively managed while you focus on scaling your product.</p>
    `,
    category: "Corporate Law",
    date: "February 28, 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "manufacturing-gst-audits",
    title: "Defending Against the Recent Surge in Manufacturing GST Audits",
    excerpt: "Tax authorities have initiated a statewide audit drive targeting supply chain mismatches. Here is how our forensic accounting team prepares manufacturers for unexpected notices.",
    content: `
      <h2>The State-Wide Audit Drive</h2>
      <p>Over the past quarter, the GST Department has launched a highly coordinated audit drive specifically targeting mid-sized manufacturers across Maharashtra, with a heavy focus on the Thane and Navi Mumbai industrial belts. Authorities are relying on deep data analytics to flag input tax credit (ITC) mismatches between GSTR-2A/2B and GSTR-3B.</p>
      
      <h2>The Supply Chain Vulnerability</h2>
      <p>Your compliance is now tied to your vendors' discipline. If a supplier defaults on their filing, your legitimate ITC is reversed, severely impacting your working capital. As the best CA in Thane for manufacturers, our <a href="/services/gst-audit-representation" class="text-secondary font-bold hover:underline">GST Audit & Representation</a> division is actively helping clients build forensic supply chain reconciliations.</p>
      
      <h2>How We Protect You</h2>
      <p>Pre-emptive defense is the only strategy. Our team conducts rigorous internal <a href="/services/auditing-assurance" class="text-secondary font-bold hover:underline">Auditing & Assurance</a> protocols to identify and rectify discrepancies *before* the departmental notice arrives. If you do receive a notice, our litigation experts handle the representation entirely, shielding you from bureaucratic friction.</p>
    `,
    category: "Tax Updates",
    date: "February 12, 2025",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1587293852726-0d628a506764?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    slug: "nolkha-co-expands-m-a-advisory",
    title: "Nolkha & Co. Expands M&A Financial Due Diligence Division",
    excerpt: "To meet the growing demand from our enterprise clients, we are scaling our Mergers and Acquisitions advisory desk with three new senior partners.",
    content: `
      <h2>Scaling Our Institutional Capacity</h2>
      <p>We are thrilled to announce a significant expansion of our <a href="/services/mergers-acquisitions" class="text-secondary font-bold hover:underline">Mergers & Acquisitions Advisory</a> division. As the premier chartered accountancy firm in Mumbai and Thane, we are seeing unprecedented consolidation across the technology, pharmaceuticals, and manufacturing sectors.</p>
      
      <h2>What This Means for Our Clients</h2>
      <p>With the addition of three senior partners specializing in forensic due diligence and post-merger integration, we are drastically reducing turnaround times for complex deal structuring. Whether you are acquiring a competitor or preparing your company for a buyout, our expanded <a href="/services/financial-advisory" class="text-secondary font-bold hover:underline">Financial Advisory</a> desk offers Fortune 500-level analytical depth.</p>
      
      <p>If you are exploring strategic acquisitions in Q3, contact our M&A desk today for a confidential preliminary consultation.</p>
    `,
    category: "Firm News",
    date: "January 20, 2025",
    readTime: "3 min read",
    coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    slug: "startup-incorporation-mistakes",
    title: "Three Expensive Mistakes Founders Make During Incorporation",
    excerpt: "Picking the wrong entity type on day one usually costs about ten times more to fix in year three.",
    content: `
      <h2>1. Defaulting to a Private Limited Company Too Early</h2>
      <p>A Private Limited Company is great if you are raising venture capital next month. If you are bootstrapping a service business, the compliance overhead will eat you alive. You have to conduct board meetings, file annual returns, and get your accounts audited regardless of your revenue. An LLP gives you the exact same liability protection but cuts compliance burden significantly. Discuss your exact needs with our <a href="/services/company-registration" class="text-secondary font-bold hover:underline">Company Registration</a> experts before filing.</p>
      
      <h2>2. Unequal Equity Splits Without a Vesting Schedule</h2>
      <p>Two founders start a company. They split it 50/50. Six months later, one gets a high-paying corporate job and stops working. But they still own half the company. We see this constantly. If you don't put a vesting schedule in your founders' agreement, you are setting a time bomb. Our <a href="/services/startup-accounting-cfo" class="text-secondary font-bold hover:underline">Startup Accounting & CFO</a> division can help structure clean, VC-friendly cap tables.</p>
      
      <h2>3. Ignoring the Authorized Capital Trap</h2>
      <p>When you register a company, government fees are tied to your authorized capital. Founders often set this number incredibly high, thinking it makes them look bigger, and end up paying lakhs in unnecessary stamp duty upfront. Start small. You can always increase it later via our <a href="/services/corporate-secretarial" class="text-secondary font-bold hover:underline">Corporate Secretarial Services</a>.</p>
    `,
    category: "Market Insights",
    date: "January 05, 2025",
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop"
  }
];
