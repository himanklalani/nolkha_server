import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Protocol',
  description: 'Privacy Policy and Data Protection Protocol for Nolkha & Co.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Legal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-secondary tracking-tighter leading-[0.95] mb-16">
          Privacy<br />Protocol.
        </h1>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-secondary prose-p:text-muted prose-p:font-sans prose-p:leading-relaxed max-w-none">
          <h2>1. Introduction & Legal Framework</h2>
          <p>
            Nolkha & Co. ("we," "our," or "the Firm") is a practicing Chartered Accountancy firm governed by the regulations of the Institute of Chartered Accountants of India (ICAI). We place the highest priority on the confidentiality and security of our clients' financial and personal data. This Privacy Protocol is formulated in compliance with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).
          </p>

          <h2>2. Information Collection</h2>
          <p>
            To execute our professional mandates (including statutory audits, tax advisory, and corporate structuring), we collect both standard and Sensitive Personal Data or Information (SPDI). This includes, but is not limited to:
          </p>
          <ul>
            <li><strong>Financial Data:</strong> Bank statements, investment portfolios, balance sheets, and audit trails.</li>
            <li><strong>Statutory Identification:</strong> PAN, Aadhaar, GSTIN, DIN, and passports for NRI/FEMA compliance.</li>
            <li><strong>Corporate Data:</strong> Cap tables, ESOP structures, board minutes, and intellectual property valuations.</li>
            <li><strong>Digital Data:</strong> IP addresses, browser types, and usage data collected via our website's analytics architecture.</li>
          </ul>

          <h2>3. Purpose and Utilization of Data</h2>
          <p>
            Your data is strictly utilized for the execution of authorized professional services. We do not monetize your data. The primary purposes include:
          </p>
          <ul>
            <li>Filing returns with the Income Tax Department, Ministry of Corporate Affairs (MCA), Goods and Services Tax Network (GSTN), and the Reserve Bank of India (RBI).</li>
            <li>Conducting forensic, internal, and statutory audits.</li>
            <li>Engineering corporate structures and advising on cross-border transactions.</li>
            <li>Fulfilling mandatory KYC/AML (Anti-Money Laundering) obligations required by Indian law.</li>
          </ul>

          <h2>4. Data Disclosure & Sharing</h2>
          <p>
            As bound by the ICAI Code of Ethics, your information is strictly confidential. We only disclose information under the following circumstances:
          </p>
          <ul>
            <li><strong>Statutory Authorities:</strong> When required for compliance filings or requested via legal summons by regulatory bodies (e.g., IT Dept, ED, SEBI).</li>
            <li><strong>Authorized Third Parties:</strong> To secure cloud hosting providers and secure legal counsel, strictly under rigorous Non-Disclosure Agreements (NDAs).</li>
          </ul>
          <p>We absolutely do not sell, trade, or otherwise transfer your identifiable information to outside marketing or data-broker entities.</p>

          <h2>5. Data Retention</h2>
          <p>
            In accordance with the Companies Act, 2013, and standard auditing practices, we retain financial and audit workpapers for a minimum period of eight (8) years from the end of the relevant financial year, or longer if mandated by ongoing litigation or specific regulatory requirements.
          </p>

          <h2>6. Institutional-Grade Security</h2>
          <p>
            We deploy robust administrative, technical, and physical security measures. This includes end-to-end encryption for document transfers, multi-factor authentication (MFA) for internal systems, and restricted physical access to physical ledgers. However, no electronic transmission over the internet can be guaranteed as 100% secure.
          </p>

          <h2>7. Cookie Protocol</h2>
          <p>
            Our digital platform utilizes cookies to optimize user experience and analyze traffic. You have complete control over non-essential cookies via our Cookie Preferences module (accessible upon your first visit). Disabling Functional or Analytics cookies will not restrict your access to the site's primary content.
          </p>

          <h2>8. Client Rights & Contact Protocols</h2>
          <p>
            Under the SPDI Rules, you have the right to review the information you have provided and request corrections for inaccurate or deficient data. To exercise these rights, or if you require clarification regarding this Privacy Protocol, please initiate a dialogue with our Data Compliance Officer:
          </p>
          <p>
            <strong>Email:</strong> compliance@nolkhaca.com<br/>
            <strong>Office:</strong> Wagle Estate, Thane, Maharashtra, India
          </p>
          
          <p className="text-sm mt-12 opacity-50 border-t border-black/10 pt-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
