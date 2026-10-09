'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Demo() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />

      {/* Hero */}
      <Section background="white" className="relative pt-36 pb-16 overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="blob bg-plum-300/30 w-[30rem] h-[30rem] top-10 -right-20 animate-blob" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto animate-fade-up"
          >
            <div className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
              Product tour
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              See Tably in <span className="text-gradient">action</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              From QR table order to kitchen ticket to multi-branch analytics — how Tably runs the floor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact?subject=Book%20a%20demo">
                Book a demo
              </Button>
              <Button variant="secondary" size="lg" href="#tour">
                Watch the tour
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Video Demo */}
      <Section id="tour" background="gray" className="py-12 lg:py-16 relative overflow-hidden border-y border-cream-300/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="aspect-video bg-plum-950 flex flex-col items-center justify-center relative overflow-hidden group shadow-elevated border border-plum-900/50">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%231a1025' width='1920' height='1080'/%3E%3Ctext x='50%25' y='48%25' fill='%23F7F3ED' font-size='48' font-family='system-ui,sans-serif' text-anchor='middle'%3ETably%3C/text%3E%3Ctext x='50%25' y='56%25' fill='%23B8A9C4' font-size='22' font-family='system-ui,sans-serif' text-anchor='middle'%3EProduct tour%3C/text%3E%3C/svg%3E"
              >
                <source src="/tably-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
            <p className="text-center text-sm text-charcoal-400 mt-4">
              ~30 second overview — QR ordering, kitchen, staff tools, and multi-branch control
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* What You'll See */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              What you'll see
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { title: 'QR ordering flow', description: 'Guests scan a table QR and order in the browser — no app download.' },
              { title: 'Kitchen display', description: 'Orders route in real time: confirmed → preparing → ready.' },
              { title: 'Waiter & cashier tools', description: 'Tables, tickets, and bills for staff on phone or tablet.' },
              { title: 'Analytics', description: 'Sales, peak hours, and menu performance at a glance.' },
              { title: 'Multi-location', description: 'One dashboard for branches, staff, and menus.' },
              { title: 'Fast setup', description: 'Most restaurants go live within a day with our help.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-7 h-full flex flex-col items-start border border-cream-300/50 hover:border-plum-200">
                  <span className="shrink-0 w-8 h-8 bg-plum-50 rounded-xl flex items-center justify-center mb-4 text-plum-600">
                    <CheckCircle size={20} />
                  </span>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Demo Process */}
      <Section background="gray" className="relative overflow-hidden border-t border-cream-300/30">
        <div className="blob bg-gold-100/40 w-96 h-96 -bottom-20 -right-20 animate-blob" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
                Prefer a live walkthrough?
              </h2>
              <p className="text-charcoal-500 max-w-xl mx-auto">
                We'll tailor the demo to your restaurant — one location or several.
              </p>
            </div>

            <div className="relative pl-10 md:pl-0 max-w-xl mx-auto">
              <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-plum-300 via-gold-300 to-cream-300" />

              <div className="space-y-8 relative">
                {[
                  { step: 1, title: 'Book a time', description: 'Pick a slot that works for you' },
                  { step: 2, title: 'Discovery', description: 'We learn about your floor and needs' },
                  { step: 3, title: 'Personalized demo', description: 'See Tably on your use case' },
                  { step: 4, title: 'Q&A', description: 'Get your questions answered' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start group">
                    <div className="shrink-0 w-10 h-10 bg-cream-50 border-2 border-plum-500 rounded-full flex items-center justify-center text-plum-600 font-extrabold text-sm z-10 shadow-soft group-hover:bg-plum-500 group-hover:text-white transition-all duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1 ml-5 pt-1">
                      <h3 className="text-lg font-bold text-charcoal-900 mb-1 group-hover:text-plum-600 transition-colors duration-300 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 text-center">
              <Button variant="primary" size="lg" href="/contact?subject=Book%20a%20demo">
                Book a personalized demo
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
