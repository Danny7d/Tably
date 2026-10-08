'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Demo', href: '/demo' },
  { name: 'Docs', href: '/docs' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-cream-300/60"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} className="text-2xl font-bold text-gradient-plum">Tably</motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium rounded-xl text-charcoal-500 hover:text-charcoal-900 hover:bg-cream-200/60 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-gradient-button text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-glow-plum/30 hover:shadow-glow-plum hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-cream-100 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-cream-300/60 overflow-hidden"
          >
            <div className="container-custom py-5 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-xl font-medium text-charcoal-600 hover:text-plum-600 hover:bg-cream-200/40 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-3 border-t border-cream-300/60 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-button text-white px-6 py-3.5 rounded-xl text-center font-semibold shadow-glow-plum/30 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
