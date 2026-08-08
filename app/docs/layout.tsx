import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Tably Restaurant Software | QR Ordering & Kitchen Display Guides',
  description: 'Complete documentation for Tably restaurant management software. Learn QR ordering systems, kitchen display setup, waiter dashboards, and restaurant analytics.',
  keywords: ['restaurant software documentation', 'QR ordering system guide', 'kitchen display system tutorial', 'waiter dashboard help', 'restaurant analytics documentation'],
  alternates: {
    canonical: 'https://tably.site/docs',
  },
  openGraph: {
    title: 'Documentation - Tably Restaurant Software',
    description: 'Complete documentation for Tably restaurant management software with QR ordering and kitchen display guides.',
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
