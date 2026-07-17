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
  title: "Nolkha & Co | Chartered Accountants in Thane",
  description: "Your trusted Chartered Accountants in Thane and Mumbai. Providing comprehensive auditing, tax consulting, and financial advisory services.",
};

import { Navbar } from "@/components/layout/Navbar";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${serifFont.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background bg-subtle-grid relative" suppressHydrationWarning>
        <div className="absolute inset-0 bg-linen-texture pointer-events-none -z-10" />
        <SmoothScroll>
          <Navbar />
          <Breadcrumbs />
          <main className="flex-1 flex flex-col">{children}</main>
          <ConditionalFooter />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
