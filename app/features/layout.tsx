import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Tably Restaurant Ordering System | QR Ordering & Kitchen Display',
  description: 'Complete restaurant operations suite: QR code ordering, kitchen display systems, waiter dashboards, restaurant analytics, and staff management. Modern restaurant software.',
  keywords: ['restaurant ordering system features', 'QR code ordering features', 'kitchen display system features', 'waiter ordering system', 'restaurant analytics features', 'restaurant management software features', 'Ethiopia restaurant software'],
  alternates: {
    canonical: 'https://tably.site/features',
  },
  openGraph: {
    title: 'Features - Tably Restaurant Ordering System',
    description: 'Complete restaurant operations suite with QR ordering, kitchen display systems, waiter dashboards, and analytics.',
    url: 'https://tably.site/features',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tably Features',
      },
    ],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
