import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MockupBanner } from "@/components/layout/MockupBanner";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "St. Mary's Orthodox Christian Church | Endicott, NY",
    template: "%s | St. Mary's Orthodox Christian Church",
  },
  description:
    "Welcome to St. Mary's Orthodox Christian Church in Endicott, NY. Join us for Sunday Divine Liturgy at 10:00 AM. Part of the American Carpatho-Russian Orthodox Diocese.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://stmarysendicott.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-church-cream text-church-charcoal">
        <MockupBanner />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
