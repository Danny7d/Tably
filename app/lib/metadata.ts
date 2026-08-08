import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Tably - Restaurant Ordering System & Management Software",
  description: "Modern restaurant operations platform with QR code ordering, kitchen display systems, waiter dashboards, and analytics. Complete restaurant management software for Ethiopian restaurants.",
  keywords: ["restaurant ordering system", "QR code restaurant ordering", "restaurant management software", "restaurant operations software", "kitchen display system", "waiter ordering system", "restaurant analytics software", "restaurant SaaS", "POS alternative", "QR menu system", "restaurant software Ethiopia", "Addis Ababa restaurants"],
  authors: [{ name: "Tably" }],
  creator: "Tably",
  publisher: "Tably",
  icons: {
    icon: [
      {
        url: "https://tably.site/tably-favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "https://tably.site/tably-favicon.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: "https://tably.site/tably-favicon.png",
    apple: "https://tably.site/tably-favicon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tably.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tably.site",
    title: "Tably - Restaurant Ordering System & Management Software",
    description: "Complete restaurant operations platform with QR ordering, kitchen display systems, and analytics for modern restaurants.",
    siteName: "Tably",
    images: [
      {
        url: "https://tably.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tably Restaurant Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tably - Restaurant Ordering System & Management Software",
    description: "QR code ordering, kitchen display systems, and analytics for restaurant operations. Serving restaurants in Ethiopia and worldwide.",
    images: ["https://tably.site/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};
