'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Container from './components/Container';
import Button from './components/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      <Section background="white" className="pt-40 pb-28 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
        <div className="blob bg-plum-100/60 w-[30rem] h-[30rem] top-1/4 left-1/2 -translate-x-1/2 blur-[100px]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* 404 Gradient Number */}
            <h1 className="text-9xl font-extrabold text-gradient-plum tracking-tighter mb-4 drop-shadow-sm select-none">
              404
            </h1>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Page not found
            </h2>
            
            <p className="text-lg text-charcoal-500 mb-10 leading-relaxed max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" href="/">
                <Home size={18} />
                <span>Back to Home</span>
              </Button>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4.5 rounded-2xl border-2 border-plum-200 text-plum-600 font-bold text-base hover:bg-plum-50 hover:border-plum-400 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={18} />
                <span>Go Back</span>
              </button>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
