import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Tably Restaurant Management | Help Guides and Tutorials',
  description: 'Access comprehensive documentation for Tably restaurant management platform. Learn how to use QR ordering, kitchen displays, analytics, and all features. Perfect for restaurants in Ethiopia.',
  keywords: ['Tably documentation', 'restaurant software help', 'QR ordering guide', 'kitchen display tutorial', 'restaurant software Ethiopia documentation'],
  alternates: {
    canonical: 'https://tably.site/docs',
  },
  openGraph: {
    title: 'Documentation - Tably Restaurant Management',
    description: 'Access comprehensive documentation for Tably restaurant management platform. Serving restaurants in Ethiopia.',
    url: 'https://tably.site/docs',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tably Documentation',
      },
    ],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
