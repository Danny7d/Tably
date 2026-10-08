'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-cream-100">
      <div className="container-custom py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-charcoal-900 mb-7 leading-[1.08] font-heading tracking-tight"
          >
            Run your restaurant.
            <br />
            <span className="text-gradient">Not your paperwork.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-charcoal-400 mb-11 max-w-2xl mx-auto leading-relaxed"
          >
            Tably is the modern operations platform that helps restaurants streamline ordering,
            manage staff, and track analytics. All in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 relative animate-float"
        >
          {/* Glow behind mockup */}
          <div className="absolute inset-x-10 -inset-y-6 bg-plum-400/10 rounded-[2rem] blur-3xl" />

          <div className="relative glass rounded-3xl shadow-elevated border border-cream-300/50 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-cream-100 border-b border-cream-300/60 px-5 py-3.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400/80" />
              <div className="w-3 h-3 rounded-full bg-gold-400/80" />
              <div className="w-3 h-3 rounded-full bg-sage-400/80" />
              <div className="ml-4 flex-1 max-w-xs">
                <div className="h-5 bg-cream-200 rounded-lg" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 lg:p-7 bg-gradient-to-br from-white to-cream-100">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-soft border border-cream-300/40">
