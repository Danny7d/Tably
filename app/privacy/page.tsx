'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';

export default function Privacy() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">Privacy Policy</h1>
            <p className="text-sm font-semibold text-charcoal-400">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </Container>
      </Section>

      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto bg-cream-50/40 border border-cream-300/50 p-8 md:p-12 rounded-[2.5rem] shadow-soft">
            <div className="space-y-10 text-charcoal-500 leading-relaxed text-[0.9688rem] md:text-base">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">1. Information We Collect</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or communicate with us. This includes name, email address, restaurant 
                  information, and payment details.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">2. How We Use Your Information</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, send you technical notices and support messages, and communicate 
                  with you about products, services, and events.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">3. Information Sharing</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  We do not sell your personal information. We may share information with service 
                  providers who perform services on our behalf, when required by law, or with your 
                  consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">4. Data Security</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">5. Your Rights</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  You have the right to access, correct, or delete your personal information. You may 
                  also opt out of certain communications. Contact us to exercise these rights.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-heading">6. Contact Us</h2>
                <div className="w-8 h-1 bg-plum-500/60 rounded-full" />
                <p className="pt-2">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@tably.site" className="text-plum-600 font-semibold hover:underline">
                    privacy@tably.site
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
