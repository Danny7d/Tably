import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./lib/metadata";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  ...siteMetadata,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tably",
  description:
    "Restaurant ordering and management platform with QR table ordering, kitchen display, and analytics — serving restaurants in Addis Ababa, Ethiopia.",
  url: "https://tably.site",
  logo: "https://tably.site/tably-favicon.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  areaServed: {
    "@type": "Country",
    name: "Ethiopia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+251-93-750-5084",
    contactType: "sales",
    email: "contact@tably.site",
    availableLanguage: ["English", "Amharic"],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tably",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://tably.site",
  description:
    "QR table ordering, kitchen display system, waiter dashboard, and restaurant analytics for businesses in Addis Ababa and across Ethiopia.",
  offers: {
    "@type": "Offer",
    price: "8999",
    priceCurrency: "ETB",
    description: "Starter plan from 8,999 ETB per month",
  },
  author: {
    "@type": "Organization",
    name: "Tably",
    url: "https://tably.site",
  },
  areaServed: {
    "@type": "City",
    name: "Addis Ababa",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tably",
  url: "https://tably.site",
  description:
    "QR table ordering and restaurant management software for Addis Ababa and Ethiopia",
  publisher: {
    "@type": "Organization",
    name: "Tably",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={softwareJsonLd} />
        <JsonLd data={webSiteJsonLd} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
