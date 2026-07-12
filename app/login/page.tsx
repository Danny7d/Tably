'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import { LogIn, ArrowRight } from 'lucide-react';

export default function Login() {
  useEffect(() => {
    window.location.href = 'https://app.tably.site/admin/login';
  }, []);

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      <Section background="white" className="pt-40 pb-28 relative overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
        <div className="blob bg-plum-100/60 w-[24rem] h-[24rem] top-1/4 left-1/2 -translate-x-1/2 blur-[100px]" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-xl mx-auto"
          >
            {/* Pulsating Icon Circle */}
            <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              {/* Pulsing ring outer */}
              <div className="absolute inset-0 bg-plum-500/10 rounded-full animate-ping" />
              {/* Pulsing ring inner */}
              <div className="absolute -inset-2 bg-plum-100/50 rounded-full animate-pulse" />
              {/* Icon base */}
              <div className="relative w-20 h-20 bg-cream-50 border border-plum-200/60 text-plum-600 rounded-full flex items-center justify-center shadow-elevated">
                <LogIn className="animate-pulse" size={32} />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Redirecting to login...
            </h1>
            
            <p className="text-lg text-charcoal-500 mb-10 leading-relaxed">
              Taking you to the Tably application login page.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cream-100 border border-cream-300/40 shadow-soft hover:shadow-card hover:border-plum-200 transition-all duration-300"
            >
              <a href="https://app.tably.site/admin/login" className="text-plum-600 font-bold text-sm hover:underline">
                Click here if not redirected
              </a>
              <ArrowRight className="text-plum-500 animate-pulse" size={16} />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
