import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://arpanconsultancy.in"),
  title: {
    default: "Arpan Consultancy | Tax, GST, EXIM, Licensing & Business Setup",
    template: "%s | Arpan Consultancy",
  },
  description:
    "Arpan Consultancy provides GST, Income Tax, Company Registration, EXIM/RCMC, Industrial NOCs, and audit support from Gaur City, Greater Noida West.",
  openGraph: {
    title: "Arpan Consultancy",
    description:
      "A multi-disciplinary consultancy for tax, compliance, licensing, and export services in Delhi-NCR.",
    url: "https://arpanconsultancy.in",
    siteName: "Arpan Consultancy",
    type: "website",
  },
  alternates: {
    canonical: "https://arpanconsultancy.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
