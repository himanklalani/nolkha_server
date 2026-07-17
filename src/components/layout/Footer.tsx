import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary block mb-4">
            Nolkha & Co<span className="text-accent">.</span>
          </Link>
          <p className="text-slate-600 mb-6 max-w-sm leading-relaxed">
            Your trusted Chartered Accountants in Thane and Mumbai. We provide clear, compliant financial strategies for scaling businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-secondary mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-slate-600 hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/insights" className="text-slate-600 hover:text-primary transition-colors">Insights</Link></li>
            <li><Link href="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-secondary mb-4 text-lg">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/privacy" className="text-slate-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-slate-600 hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Nolkha & Co. All rights reserved.
      </div>
    </footer>
  );
}
