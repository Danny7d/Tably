import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Section from '../components/Section';
import Button from '../components/Button';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'QR Table Ordering for Restaurants in Addis Ababa',
  description:
    'How QR table ordering works for restaurants in Addis Ababa: guests scan, order goes to the kitchen, staff keep control. Tably kitchen display and waiter tools included.',
  keywords: [
    'QR table ordering Addis Ababa',
    'QR menu restaurant Ethiopia',
    'digital ordering system Addis',
    'kitchen display Addis Ababa',
    'restaurant QR code ordering',
  ],
  alternates: {
    canonical: 'https://tably.site/qr-ordering-addis',
  },
  openGraph: {
    title: 'QR Table Ordering for Restaurants in Addis Ababa | Tably',
    description:
      'Guests order from a QR at the table. Orders go straight to the kitchen. Built for busy restaurants in Ethiopia.',
    url: 'https://tably.site/qr-ordering-addis',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'QR Table Ordering for Restaurants in Addis Ababa',
  description:
    'QR table ordering system for restaurants in Addis Ababa, Ethiopia — with kitchen display and waiter tools.',
  url: 'https://tably.site/qr-ordering-addis',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Tably',
    url: 'https://tably.site',
  },
  about: {
    '@type': 'SoftwareApplication',
    name: 'Tably',
    applicationCategory: 'BusinessApplication',
  },
};

export default function QrOrderingAddisPage() {
  return (
    <div className="min-h-screen selection:bg-navy-100 selection:text-navy-900">
      <JsonLd data={jsonLd} />
      <Navbar />

      <Section background="navy" className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden noise-bg rounded-b-[2.5rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative z-10 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur px-4 py-1.5 text-sm font-medium text-cream-100 mb-6">
            For restaurants in Addis Ababa & Ethiopia
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-heading tracking-tight leading-tight">
            QR table ordering that fits a <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">busy Addis floor</span>
          </h1>
          <p className="text-lg text-cream-200/85 mb-8 leading-relaxed">
            Guests scan a code at the table, place the order themselves, and the kitchen gets a
            clear ticket in sequence. Waiters can still take orders in the same system when someone
            does not want to scan. No guest app to download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href="/contact?subject=Book%20a%20demo">
              Book a demo
            </Button>
            <Button variant="secondary" size="lg" href="/pricing" className="bg-transparent text-white border border-white/40 hover:bg-white/10">
              See pricing
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-14 lg:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-charcoal-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">
                What problems this solves
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Long waits just to place an order when the floor is full</li>
                <li>Tickets mixed up between table and kitchen</li>
                <li>Items ordered when they are already out of stock</li>
                <li>Hard to see what is open across tables in real time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">How it works</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>You set up your menu and table QR codes in Tably</li>
                <li>Guests scan, browse, and send the order from their phone</li>
                <li>The kitchen sees the ticket on a display (placed → preparing → ready)</li>
                <li>Staff can update availability and track status from one place</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">
                Built for how restaurants here actually work
              </h2>
              <p>
                Tably is built and sold from Addis Ababa. Pricing is in ETB. Support is local
                (Telegram and phone). Waiters stay in the loop — QR is optional for guests who
                prefer a human.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">Next step</h2>
              <p className="mb-4">
                A short visit or live walkthrough is usually enough to see if it fits your menu and
                floor. No long contract required to start a conversation.
              </p>
              <p className="text-sm text-charcoal-400">
                Telegram:{' '}
                <a
                  href="https://t.me/TablyContact"
                  className="text-navy-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @TablyContact
                </a>
                {' · '}
                Phone:{' '}
                <a href="tel:+251937505084" className="text-navy-600 hover:underline">
                  +251 93 750 5084
                </a>
                {' · '}
                <Link href="/contact" className="text-navy-600 hover:underline">
                  Contact form
                </Link>
              </p>
            </section>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
