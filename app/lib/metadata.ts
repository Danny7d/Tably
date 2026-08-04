import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Tably - Modern Restaurant Operations Platform",
  description: "Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics. The all-in-one platform for modern restaurants in Ethiopia and beyond.",
  keywords: ["restaurant management", "QR ordering", "kitchen display system", "restaurant analytics", "POS system", "restaurant software Ethiopia", "QR menu Ethiopian restaurants", "POS alternative Addis Ababa", "restaurant management software Ethiopia"],
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
    title: "Tably - Modern Restaurant Operations Platform",
    description: "Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics.",
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
    title: "Tably - Modern Restaurant Operations Platform in Ethiopia",
    description: "Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics. Serving restaurants in Ethiopia and worldwide.",
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
