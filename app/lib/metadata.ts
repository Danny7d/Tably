import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Tably - Modern Restaurant Operations Platform",
  description: "Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics. The all-in-one platform for modern restaurants.",
  keywords: ["restaurant management", "QR ordering", "kitchen display system", "restaurant analytics", "POS system"],
  authors: [{ name: "Tably" }],
  creator: "Tably",
  publisher: "Tably",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Tably - Modern Restaurant Operations Platform",
    description: "Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics.",
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
    google: "your-google-verification-code",
  },
};
