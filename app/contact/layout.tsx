import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Tably Restaurant Management | Get Support and Sales Help',
  description: 'Contact Tably for sales inquiries, support, or general questions. Reach our team at contact@tably.site or support@tably.site. We\'re here to help your restaurant succeed in Ethiopia.',
  keywords: ['contact Tably', 'restaurant software support', 'Tably sales', 'restaurant management help', 'restaurant software Ethiopia contact'],
  alternates: {
    canonical: 'https://tably.site/contact',
  },
  openGraph: {
    title: 'Contact Us - Tably Restaurant Management',
    description: 'Contact Tably for sales inquiries, support, or general questions. Serving restaurants in Ethiopia.',
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
