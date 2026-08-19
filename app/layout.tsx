import type { Metadata } from "next";
import { Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./lib/metadata";
import JsonLd from "./components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  ...siteMetadata,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tably',
  description: 'Modern restaurant operations platform with QR ordering, kitchen display systems, and powerful analytics.',
  url: 'https://tably.site',
  logo: 'https://tably.site/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+251937505084',
    contactType: 'sales',
    email: 'contact@tably.site',
  },
  sameAs: [
    'https://twitter.com/tably',
    'https://linkedin.com/company/tably',
    'https://facebook.com/tably',
  ],
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tably',
  url: 'https://tably.site',
  description: 'Modern restaurant operations platform',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tably.site/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
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
        <JsonLd data={webSiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
