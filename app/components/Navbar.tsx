'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'Docs', href: '/docs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-card border-b border-cream-300/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Tably Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img src="/tably-horizontal-icon.jpg" alt="Tably" className="h-8 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-plum-600 bg-plum-50'
                    : 'text-charcoal-500 hover:text-charcoal-900 hover:bg-cream-200/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?subject=Book%20a%20demo"
              className="bg-gradient-button text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-glow-plum/30 hover:shadow-glow-plum hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Menu */}
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
                    className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-plum-600 bg-plum-50'
                        : 'text-charcoal-600 hover:text-plum-600 hover:bg-cream-200/40'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-3 border-t border-cream-300/60 space-y-3">
                <Link
                  href="/contact?subject=Book%20a%20demo"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-button text-white px-6 py-3.5 rounded-xl text-center font-semibold shadow-glow-plum/30 transition-all duration-300"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
