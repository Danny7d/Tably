'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import Container from './Container';

const ease = [0.16, 1, 0.3, 1] as const;

const tickets = [
  { table: 'Table 4', items: '2 items', time: '02:14', status: 'New', dot: 'bg-orange-500' },
  { table: 'Table 11', items: '5 items', time: '06:40', status: 'Preparing', dot: 'bg-orange-400' },
  { table: 'Table 2', items: '3 items', time: '11:05', status: 'Ready', dot: 'bg-sage-400' },
];

const glassCard =
  'rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]';

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem] bg-navy-950 pt-32 pb-24 lg:rounded-b-[4rem] lg:pt-44 lg:pb-32 noise-bg">
      {/* Atmosphere: navy base, a big orange glow rising from below, a softer amber one behind the headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 38% at 50% 100%, rgba(255,150,50,0.85) 0%, rgba(240,114,31,0.5) 45%, transparent 100%), ' +
            'radial-gradient(130% 75% at 50% 112%, rgba(240,114,31,0.7) 0%, rgba(240,114,31,0.22) 42%, transparent 72%), ' +
            'radial-gradient(60% 45% at 18% 22%, rgba(95,125,176,0.28) 0%, transparent 70%), ' +
            'radial-gradient(45% 35% at 82% 12%, rgba(242,154,23,0.16) 0%, transparent 70%), ' +
            'linear-gradient(180deg, #0D1629 0%, #14213D 55%, #182A4D 100%)',
        }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur px-5 py-2 text-sm font-medium text-cream-100 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_2px_rgba(240,114,31,0.7)]" />
            Built for restaurants in Addis Ababa & Ethiopia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ color: '#ffffff' }}
            className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold mb-7 leading-[1.06] font-heading tracking-tight"
          >
            Run your restaurant.
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              Not your paperwork.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg lg:text-xl text-cream-200/85 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            QR table ordering, kitchen display, and staff tools for independent restaurants
            and multi-location groups in Ethiopia — all in one place. No guest app required.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-sm text-cream-300/80 mb-11 max-w-xl mx-auto"
          >
            For busy floors that need faster tickets — and operators who need one dashboard across branches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg" href="/contact?subject=Book%20a%20demo">
              Book a demo
            </Button>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/[0.06] px-9 py-4 text-base font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15 max-sm:w-full"
            >
              See how it works
            </Link>
          </motion.div>
        </motion.div>

        {/* Product cards: kitchen tickets, revenue, table map */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative mt-16 lg:mt-24 grid gap-5 md:grid-cols-3 md:items-end max-w-5xl mx-auto"
        >
          {/* Kitchen display */}
          <div className={`${glassCard} p-6 md:-rotate-3 md:translate-y-6`}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-cream-300/80">Kitchen display</span>
              <span className="text-xs text-cream-300/70">Live</span>
            </div>
            <div className="space-y-3">
              {tickets.map((t) => (
                <div key={t.table} className="flex items-center justify-between rounded-2xl bg-white/[0.07] px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold text-white">{t.table}</div>
                    <div className="text-xs text-cream-300/75">{t.items} · {t.time}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-cream-100">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue: the accent card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-orange p-7 text-charcoal-900 shadow-[0_40px_90px_-20px_rgba(240,114,31,0.55)] ring-1 ring-inset ring-white/30 max-md:order-first md:-translate-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-900/80">Today&apos;s revenue</span>
              <span className="rounded-full bg-charcoal-900/90 px-2.5 py-1 text-xs font-semibold text-orange-300">+8%</span>
            </div>
            <div className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">429,420</div>
            <div className="text-sm font-semibold text-charcoal-900/80">ETB · 247 orders</div>
            <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="mt-5 h-16 w-full" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#222B35" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#222B35" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 50 L25 42 L50 46 L75 30 L100 35 L125 20 L150 25 L175 9 L200 14 L200 64 L0 64 Z" fill="url(#rev-fill)" />
              <path d="M0 50 L25 42 L50 46 L75 30 L100 35 L125 20 L150 25 L175 9 L200 14" stroke="#222B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          {/* Table map */}
          <div className={`${glassCard} p-6 md:rotate-3 md:translate-y-6`}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-cream-300/80">Floor</span>
              <span className="text-xs text-cream-300/70">18 of 24 active</span>
            </div>
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl ${
                    i < 18
                      ? 'bg-orange-500/90 shadow-[0_0_14px_rgba(240,114,31,0.45)]'
                      : 'bg-white/10 border border-white/10'
                  }`}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 text-xs text-cream-300/80">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-orange-500" />Occupied</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-white/25" />Free</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
