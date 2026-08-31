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
  title: 'Tably - Modern Restaurant Operations Platform | QR Ordering & Kitchen Display',
  description: 'Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics. The all-in-one platform for modern restaurants, cafes, and food businesses.',
  keywords: ['restaurant management', 'QR ordering', 'kitchen display system', 'restaurant analytics', 'POS system', 'digital menu', 'table management', 'restaurant software'],
  alternates: {
    canonical: 'https://tably.site',
  },
  openGraph: {
    title: 'Tably - Modern Restaurant Operations Platform',
    description: 'Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics.',
    url: 'https://tably.site',
    siteName: 'Tably',
    images: [
      {
        url: 'https://tably.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tably Restaurant Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tably - Modern Restaurant Operations Platform',
    description: 'Streamline your restaurant operations with QR ordering, kitchen display systems, and powerful analytics.',
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
  description: 'Modern restaurant operations platform with QR ordering, kitchen display systems, and powerful analytics.',
  url: 'https://tably.site',
  author: {
    '@type': 'Organization',
    name: 'Tably',
    url: 'https://tably.site',
  },
};

export default function Home() {

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <JsonLd data={jsonLd} />
      <Navbar />
      
      <Hero />

      {/* Features */}
      <Section background="white" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-plum-100/30 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <HomeFeatures features={features} />
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="ivory" className="relative overflow-hidden">
        <div className="blob bg-gold-200/40 w-80 h-80 top-1/4 -right-20 animate-blob" style={{ animationDelay: '1s' }} />
        <Container className="relative z-10">
          <HomeHowItWorks howItWorks={howItWorks} />
        </Container>
      </Section>

      {/* Pricing Preview */}
      <Section background="white" className="relative overflow-hidden">
        <div className="blob bg-plum-100/40 w-96 h-96 -bottom-20 -left-20 animate-blob" style={{ animationDelay: '4s' }} />
        <Container className="relative z-10">
          <HomePricing plans={plans} />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="ivory" className="relative overflow-hidden">
        <div className="blob bg-gold-100/30 w-80 h-80 top-10 left-10 animate-blob" />
        <Container className="relative z-10">
          <HomeTestimonials testimonials={testimonials} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white" className="relative overflow-hidden">
        <Container className="relative z-10">
          <HomeFAQ faqs={faqs} />
        </Container>
      </Section>

      {/* FAQ -> CTA transition */}
      <div className="section-divider" />

      {/* CTA */}
      <Section background="white" className="py-12 lg:py-20 relative overflow-hidden">
        <Container>
          <HomeCTA />
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
