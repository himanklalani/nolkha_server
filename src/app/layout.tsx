import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const primaryFont = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nolkha & Co. | Best CA in Thane & Mumbai",
    default: "Nolkha & Co. | Best CA in Thane & Mumbai",
  },
  description: "Elite Chartered Accountancy firm in Thane and Mumbai. Specializing in corporate financial strategy, statutory audit, tax optimization, and entity structuring.",
  keywords: ["Best CA in Thane", "Top CA in Mumbai", "Chartered Accountants Thane", "Financial Strategy", "Tax Optimization", "Statutory Audit"],
  openGraph: {
    title: "Nolkha & Co. | Chartered Accountants",
    description: "Elite Chartered Accountancy firm in Thane and Mumbai.",
    url: "https://www.nolkhaca.com",
    siteName: "Nolkha & Co.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nolkha & Co. - Elite Chartered Accountancy",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolkha & Co. | Chartered Accountants",
    description: "Elite Chartered Accountancy firm in Thane and Mumbai.",
    images: ["/images/og-image.jpg"],
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { CookieConsent } from "@/components/ui/CookieConsent";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Nolkha & Co.",
  "image": "https://www.nolkhaca.com/images/og-image.jpg",
  "url": "https://www.nolkhaca.com",
  "telephone": "+919999999999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wagle Estate",
    "addressLocality": "Thane",
    "addressRegion": "MH",
    "postalCode": "400604",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1963,
    "longitude": 72.9554
  },
  "areaServed": ["Thane", "Mumbai", "Maharashtra"],
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${serifFont.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background bg-subtle-grid relative" suppressHydrationWarning>
        <JsonLd schema={localBusinessSchema} />
        <div className="absolute inset-0 bg-linen-texture pointer-events-none -z-10" />
        <SmoothScroll>
          <Navbar />
          <Breadcrumbs />
          <main className="flex-1 flex flex-col">{children}</main>
          <ConditionalFooter />
          <WhatsAppButton />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
