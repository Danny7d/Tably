import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Tably Restaurant Management Software Company',
  description: 'Learn about Tably - the restaurant management software company revolutionizing restaurant operations with QR ordering systems, kitchen displays, and analytics in Ethiopia.',
  keywords: ['restaurant software company', 'restaurant management software about', 'Tably company mission', 'restaurant technology company Ethiopia', 'QR ordering system company'],
  alternates: {
    canonical: 'https://tably.site/about',
  },
  openGraph: {
    title: 'About Us - Tably Restaurant Management Software',
    description: 'Learn about Tably - the restaurant management software company revolutionizing restaurant operations with QR ordering and analytics.',
    url: 'https://tably.site/about',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Tably',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
