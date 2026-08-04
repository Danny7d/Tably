import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Tably Restaurant Management Platform',
  description: 'Learn about Tably\'s mission to revolutionize restaurant operations with modern technology. Our story, values, and commitment to helping restaurants succeed in Ethiopia and beyond.',
  keywords: ['about Tably', 'restaurant management company', 'Tably mission', 'restaurant technology', 'restaurant software Ethiopia company'],
  alternates: {
    canonical: 'https://tably.site/about',
  },
  openGraph: {
    title: 'About Us - Tably Restaurant Management',
    description: 'Learn about Tably\'s mission to revolutionize restaurant operations with modern technology in Ethiopia.',
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
