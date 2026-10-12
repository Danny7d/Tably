import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default:
      "Tably — QR Table Ordering & Restaurant Management in Addis Ababa",
    template: "%s | Tably",
  },
  description:
    "Tably is a restaurant ordering and management system for Addis Ababa and Ethiopia. QR table ordering, kitchen display, waiter tools, and analytics — no guest app required.",
  keywords: [
    "QR table ordering Addis Ababa",
    "restaurant ordering system Ethiopia",
    "QR code menu Addis",
    "kitchen display system Ethiopia",
    "restaurant management software Addis Ababa",
    "QR ordering restaurant",
    "waiter dashboard",
    "restaurant SaaS Ethiopia",
    "digital menu Addis Ababa",
    "Tably restaurant",
  ],
  authors: [{ name: "Tably", url: "https://tably.site" }],
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
  alternates: {
    canonical: "https://tably.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tably.site",
    title: "Tably — QR Table Ordering for Restaurants in Addis Ababa",
    description:
      "QR table ordering, kitchen display, and staff tools for restaurants in Ethiopia. Guests scan, order goes to the kitchen. No app download.",
    siteName: "Tably",
    images: [
      {
        url: "https://tably.site/tably-main-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tably — Restaurant ordering system for Addis Ababa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tably — QR Table Ordering for Restaurants in Addis Ababa",
    description:
      "QR ordering, kitchen display, and analytics for restaurants in Ethiopia. Built in Addis Ababa.",
    images: ["https://tably.site/tably-main-logo.jpg"],
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
