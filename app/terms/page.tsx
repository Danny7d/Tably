'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';

export default function Terms() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      <Section background="ivory" className="relative pt-36 pb-20 overflow-hidden noise-bg border-b border-cream-300/40">
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="blob bg-plum-300/20 w-[30rem] h-[30rem] top-10 -right-20 animate-blob" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">Terms of Service</h1>
            <p className="text-sm font-semibold text-charcoal-400">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </Container>
      </Section>

      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto bg-cream-50/40 border border-cream-300/50 p-8 md:p-12 rounded-[2.5rem] shadow-soft">
            <div className="space-y-10 text-charcoal-500 leading-relaxed text-[0.9688rem] md:text-base">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">1. Acceptance of Terms</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  By accessing or using Tably services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">2. Description of Service</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  Tably provides a restaurant operations platform including QR ordering, kitchen display 
                  systems, analytics, and related services. We reserve the right to modify or discontinue 
                  any service at any time.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">3. User Responsibilities</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  You are responsible for maintaining the confidentiality of your account information and 
                  for all activities that occur under your account. You agree to notify us immediately of 
                  any unauthorized use.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">4. Payment Terms</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  Paid subscriptions are billed in advance on a monthly or annual basis. You agree to pay 
                  all charges incurred under your account. Refunds are provided in accordance with our 
                  refund policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">5. Intellectual Property</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  All content, features, and functionality of the Tably platform are owned by Tably and 
                  are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">6. Termination</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  We may terminate or suspend your account at any time for violation of these terms or 
                  for any other reason at our sole discretion. Upon termination, your right to use the 
                  service will immediately cease.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">7. Limitation of Liability</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  Tably shall not be liable for any indirect, incidental, special, or consequential 
                  damages resulting from the use or inability to use our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">8. Contact</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  For questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@tably.site" className="text-plum-600 font-semibold hover:underline">
                    legal@tably.site
                  </a>
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
