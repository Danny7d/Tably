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
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <JsonLd data={jsonLd} />
      <Navbar />

      <Section background="white" className="pt-32 pb-16 lg:pt-40">
        <Container className="max-w-3xl">
          <p className="text-sm font-medium text-plum-600 mb-4">
            For restaurants in Addis Ababa & Ethiopia
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-tight">
            QR table ordering that fits a busy Addis floor
          </h1>
          <p className="text-lg text-charcoal-500 mb-8 leading-relaxed">
            Guests scan a code at the table, place the order themselves, and the kitchen gets a
            clear ticket in sequence. Waiters can still take orders in the same system when someone
            does not want to scan. No guest app to download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button variant="primary" size="lg" href="/contact?subject=Book%20a%20demo">
              Book a demo
            </Button>
            <Button variant="secondary" size="lg" href="/pricing">
              See pricing
            </Button>
          </div>

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
                  className="text-plum-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @TablyContact
                </a>
                {' · '}
                Phone:{' '}
                <a href="tel:+251937505084" className="text-plum-600 hover:underline">
                  +251 93 750 5084
                </a>
                {' · '}
                <Link href="/contact" className="text-plum-600 hover:underline">
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
