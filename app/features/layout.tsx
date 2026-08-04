import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Tably Restaurant Management | Complete Restaurant Operations Suite',
  description: 'Explore Tably\'s powerful features: QR ordering, kitchen display systems, waiter dashboards, analytics, staff management, and more for modern restaurants in Ethiopia.',
  keywords: ['restaurant features', 'QR ordering features', 'kitchen display features', 'restaurant analytics', 'staff management', 'restaurant software Ethiopia features', 'QR menu Ethiopian restaurants'],
  alternates: {
    canonical: 'https://tably.site/features',
  },
  openGraph: {
    title: 'Features - Tably Restaurant Management',
    description: 'Explore Tably\'s powerful features for modern restaurant operations in Ethiopia.',
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
