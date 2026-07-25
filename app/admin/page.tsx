'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';
import { Mail } from 'lucide-react';

export default function Admin() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      <Section background="ivory" className="relative pt-36 pb-20 overflow-hidden noise-bg border-b border-cream-300/40">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
              <Mail size={16} />
              Admin Panel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Admin <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              Manage your contact form submissions and messages.
            </p>
            <Button variant="primary" size="lg" href="/admin/contact-messages">
              <Mail size={18} className="mr-2" />
              View Contact Messages
            </Button>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
