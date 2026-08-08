import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Tably Restaurant Management Software | Affordable Plans',
  description: 'Simple, transparent pricing for restaurant ordering systems and management software. Starting at 5,500 ETB/month. QR ordering, kitchen display, analytics included.',
  keywords: ['restaurant software pricing', 'QR ordering system cost', 'kitchen display system pricing', 'restaurant management software price', 'restaurant SaaS pricing', 'POS alternative cost Ethiopia', 'Addis Ababa restaurant software'],
  alternates: {
    canonical: 'https://tably.site/pricing',
  },
  openGraph: {
    title: 'Pricing - Tably Restaurant Management Software',
    description: 'Affordable pricing for restaurant ordering systems and management software. Starting at 5,500 ETB/month with QR ordering and kitchen display.',
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
