import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started - Tably Restaurant Management Software | Contact Sales',
  description: 'Contact Tably to get started with restaurant management software. Request onboarding, ask about pricing, or book a demo for QR ordering systems and kitchen displays.',
  keywords: ['restaurant software contact', 'get started restaurant management', 'QR ordering system sales', 'kitchen display system demo', 'restaurant software Ethiopia contact'],
  alternates: {
    canonical: 'https://tably.site/contact',
  },
  openGraph: {
    title: 'Get Started - Tably Restaurant Management Software',
    description: 'Contact Tably to get started with restaurant management software. Request onboarding, pricing, or a demo.',
    url: 'https://tably.site/contact',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Tably',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
