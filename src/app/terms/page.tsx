import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and Conditions of use for Nolkha & Co.',
};

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-bold font-sans">Legal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-secondary tracking-tighter leading-[0.95] mb-16">
          Terms of<br />Service.
        </h1>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-secondary prose-p:text-muted prose-p:font-sans prose-p:leading-relaxed max-w-none">
          <h2>1. Engagement & Scope of Services</h2>
          <p>
            These Terms of Service ("Terms") govern your access to the Nolkha & Co. digital platform. However, the actual provision of professional chartered accountancy services (Audit, Tax, Advisory) is strictly governed by a separate, formal <strong>Letter of Engagement (LOE)</strong>. The information provided on this platform does not constitute the formation of a professional client-CPA relationship until an LOE is fully executed.
          </p>

          <h2>2. Professional Obligations & ICAI Compliance</h2>
          <p>
            As a registered firm with the Institute of Chartered Accountants of India (ICAI), Nolkha & Co. operates strictly within the ICAI Code of Ethics. We maintain absolute professional independence, integrity, and objectivity. We reserve the right to decline any engagement or immediately terminate an existing engagement if we determine that it compromises our ethical standing or violates statutory laws.
          </p>

          <h2>3. Informational Purposes Only</h2>
          <p>
            The content, insights, and structural methodologies discussed on this website (including blogs, industry pages, and service descriptions) are provided for general informational purposes only. They do not constitute binding legal, tax, or financial advice. Tax codes and FEMA regulations are highly volatile. You must not act upon the information on this site without seeking specific, tailored professional counsel.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            While we engineer the financial architecture, the ultimate responsibility for the accuracy and completeness of financial records rests with the client's management. Nolkha & Co. shall not be held liable for statutory penalties resulting from the client's failure to provide accurate data, concealed transactions, or delayed submissions of required documentation.
          </p>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            All proprietary methodologies, tax structuring frameworks, Excel/financial models, and digital content displayed on this website are the exclusive intellectual property of Nolkha & Co. Clients are granted a limited right to use the specific deliverables provided to them for their internal business purposes, but may not distribute our proprietary models or advisory memos to third parties without written consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Indian law, the aggregate liability of Nolkha & Co., its partners, and employees, for any claim arising out of the use of this website or the provision of generalized information, shall be limited to zero. For engaged clients, liability is strictly limited as per the terms explicitly defined in the executed Letter of Engagement, typically capped at the professional fees paid for the specific service module in dispute. We categorically exclude liability for indirect, consequential, or reputational damages.
          </p>

          <h2>7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of the Republic of India. Any disputes arising from the use of this website or the engagement of our services shall be subject to the exclusive jurisdiction of the competent courts located in Thane, Maharashtra.
          </p>

          <h2>8. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time without prior individual notice to reflect changes in regulatory environments or firm policies. The most current version will always be posted on this page.
          </p>
          
          <p className="text-sm mt-12 opacity-50 border-t border-black/10 pt-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
