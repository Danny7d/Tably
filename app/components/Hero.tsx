'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import Container from './Container';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating blobs */}
      <div className="blob bg-plum-400 w-[28rem] h-[28rem] top-16 -right-48 animate-blob" />
      <div className="blob bg-plum-300 w-[22rem] h-[22rem] bottom-20 -left-40 animate-blob" style={{ animationDelay: '3s' }} />
      <div className="blob bg-gold-400 w-[18rem] h-[18rem] top-1/2 left-1/3 animate-blob" style={{ animationDelay: '6s' }} />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            Now in open beta — try it free
          </motion.div>

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
            <Button variant="primary" size="lg" href="/login">
              Start Free
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
                  <div className="text-xs font-medium text-charcoal-400 mb-1.5">Today&apos;s Orders</div>
                  <div className="text-2xl font-bold text-charcoal-900">247</div>
                  <div className="text-xs font-medium text-sage-600 mt-1.5 flex items-center gap-1">
                    <span className="inline-block w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-sage-500" />
                    +12% from yesterday
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-soft border border-cream-300/40">
                  <div className="text-xs font-medium text-charcoal-400 mb-1.5">Revenue</div>
                  <div className="text-2xl font-bold text-charcoal-900">429,420 ETB</div>
                  <div className="text-xs font-medium text-sage-600 mt-1.5 flex items-center gap-1">
                    <span className="inline-block w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-sage-500" />
                    +8% from yesterday
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-soft border border-cream-300/40">
                  <div className="text-xs font-medium text-charcoal-400 mb-1.5">Active Tables</div>
                  <div className="text-2xl font-bold text-charcoal-900">18</div>
                  <div className="text-xs font-medium text-charcoal-400 mt-1.5">of 24 total</div>
                </div>
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-soft border border-cream-300/40">
                <div className="text-xs font-medium text-charcoal-400 mb-4">Recent Orders</div>
                <div className="space-y-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-cream-100/60 transition-colors border-b border-cream-200/40 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-plum-100 rounded-xl flex items-center justify-center">
                          <span className="text-xs font-bold text-plum-600">T{i}</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-charcoal-900">Table {i}</div>
                          <div className="text-xs text-charcoal-400">Order #{1000 + i}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-charcoal-900">{(i * 815).toLocaleString()} ETB</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
