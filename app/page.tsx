import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import Container from './components/Container';
import HomeFeatures from './components/HomeFeatures';
import HomeHowItWorks from './components/HomeHowItWorks';
import HomePricing from './components/HomePricing';
import HomeTestimonials from './components/HomeTestimonials';
import HomeFAQ from './components/HomeFAQ';
import HomeCTA from './components/HomeCTA';
import JsonLd from './components/JsonLd';
import { features, howItWorks, testimonials, faqs, plans } from './lib/home-data';

export const metadata: Metadata = {
  title: 'Tably — QR Table Ordering & Restaurant Management in Addis Ababa',
  description:
    'QR table ordering, kitchen display, and staff tools for restaurants in Addis Ababa and Ethiopia. Guests scan at the table; orders go straight to the kitchen. No guest app required.',
  keywords: [
    'QR table ordering Addis Ababa',
    'restaurant ordering system Ethiopia',
    'kitchen display system',
    'QR menu Addis',
    'restaurant management software Ethiopia',
    'digital menu restaurant',
    'Tably',
  ],
  alternates: {
    canonical: 'https://tably.site',
  },
  openGraph: {
    title: 'Tably — QR Table Ordering for Restaurants in Addis Ababa',
    description:
      'Streamline ordering with QR at the table, kitchen display, and live tracking. Built for restaurants in Ethiopia.',
    url: 'https://tably.site',
    siteName: 'Tably',
    images: [
      {
        url: 'https://tably.site/tably-main-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Tably Restaurant Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tably — QR Table Ordering for Restaurants in Addis Ababa',
    description:
      'QR ordering, kitchen display, and analytics for restaurants in Ethiopia.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tably',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '8999',
    priceCurrency: 'ETB',
    description: 'Starting at 8,999 ETB/month',
  },
  description:
    'QR table ordering, kitchen display, waiter tools, and analytics for restaurants in Addis Ababa, Ethiopia.',
  url: 'https://tably.site',
  author: {
    '@type': 'Organization',
    name: 'Tably',
    url: 'https://tably.site',
  },
  areaServed: [
    { '@type': 'City', name: 'Addis Ababa' },
    { '@type': 'Country', name: 'Ethiopia' },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <JsonLd data={jsonLd} />
      <Navbar />

      <Hero />

      <Section background="white" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-plum-100/30 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <HomeFeatures features={features} />
        </Container>
      </Section>

      <Section background="ivory" className="relative overflow-hidden">
        <div className="blob bg-plum-200/40 w-80 h-80 top-1/4 -right-20 animate-blob" style={{ animationDelay: '1s' }} />
        <Container className="relative z-10">
          <HomeHowItWorks howItWorks={howItWorks} />
        </Container>
      </Section>

      <Section background="white" className="relative overflow-hidden">
        <div className="blob bg-plum-100/40 w-96 h-96 -bottom-20 -left-20 animate-blob" style={{ animationDelay: '4s' }} />
        <Container className="relative z-10">
          <HomePricing plans={plans} />
        </Container>
      </Section>

      <Section background="ivory" className="relative overflow-hidden">
        <div className="blob bg-plum-100/30 w-80 h-80 top-10 left-10 animate-blob" />
        <Container className="relative z-10">
          <HomeTestimonials testimonials={testimonials} />
        </Container>
      </Section>

      <Section background="white" className="relative overflow-hidden">
        <Container className="relative z-10">
          <HomeFAQ faqs={faqs} />
        </Container>
      </Section>

      <div className="section-divider" />

      <Section background="white" className="py-12 lg:py-20 relative overflow-hidden">
        <Container>
          <HomeCTA />
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
