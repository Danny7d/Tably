import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Tably Restaurant Management | Affordable Plans for Every Restaurant',
  description: 'Simple, transparent pricing for restaurants of all sizes. Starting at 2,500 ETB/month. Features include QR ordering, kitchen display, analytics, and more. Serving restaurants across Ethiopia.',
  keywords: ['restaurant pricing', 'QR menu pricing', 'kitchen display system cost', 'restaurant software pricing', 'Tably plans', 'restaurant software Ethiopia pricing', 'POS alternative Ethiopia cost'],
  alternates: {
    canonical: 'https://tably.site/pricing',
  },
  openGraph: {
    title: 'Pricing - Tably Restaurant Management',
    description: 'Simple, transparent pricing for restaurants of all sizes. Starting at 2,500 ETB/month. Serving restaurants across Ethiopia.',
    url: 'https://tably.site/pricing',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tably Pricing Plans',
      },
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
