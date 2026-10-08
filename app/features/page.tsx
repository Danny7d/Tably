'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import JsonLd from '../components/JsonLd';
import { Check } from 'lucide-react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tably',
  applicationCategory: 'BusinessApplication',
  featureList: ['QR Ordering', 'Kitchen Display System', 'Waiter Dashboard', 'Analytics', 'Staff Management'],
};

export default function Features() {
  const featureSections = [
    {
      title: 'QR Ordering',
      description: 'Eliminate wait times and increase order accuracy with QR code-based ordering.',
      icon: 'QrCode',
      details: [
        'Customers scan QR codes at their table',
        'Browse digital menu with photos and descriptions',
        'Customize orders with modifiers and special requests',
        'Pay directly through the platform',
        'Real-time order updates',
      ],
    },
    {
      title: 'Kitchen Display System',
      description: 'Streamline kitchen operations with intelligent order routing and timing.',
      icon: 'LayoutDashboard',
      details: [
        'Automatic order routing to appropriate stations',
        'Preparation time tracking and alerts',
        'Visual queue management',
        'Order modification handling',
        'Performance analytics',
      ],
    },
    {
      title: 'Waiter Dashboard',
      description: 'Empower your staff with mobile tools for efficient table management.',
      icon: 'Smartphone',
      details: [
        'Real-time table status updates',
        'Order management and modifications',
        'Payment processing',
        'Customer communication',
        'Shift management',
      ],
    },
    {
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive business intelligence.',
      icon: 'BarChart3',
      details: [
        'Revenue and sales tracking',
        'Menu performance analysis',
        'Customer behavior insights',
        'Peak hour optimization',
        'Staff performance metrics',
      ],
    },
    {
      title: 'Staff Management',
      description: 'Simplify scheduling, time tracking, and team coordination.',
      icon: 'Users',
      details: [
        'Shift scheduling and management',
        'Time tracking and attendance',
        'Role-based permissions',
        'Performance reviews',
        'Communication tools',
      ],
    },
    {
      title: 'Multi-Branch Support',
      description: 'Manage multiple locations from a single centralized platform.',
      icon: 'Building2',
      details: [
        'Centralized menu management',
        'Location-specific pricing',
        'Cross-location reporting',
        'Staff transfer capabilities',
        'Unified inventory tracking',
      ],
    },
    {
      title: 'Restaurant Branding',
      description: 'Customize the platform to match your restaurant\'s identity.',
      icon: 'Settings',
      details: [
        'Custom logo and colors',
        'Branded digital menus',
        'Personalized QR codes',
        'Custom receipt templates',
        'White-label options',
      ],
    },
    {
      title: 'Platform Management',
      description: 'Complete control over your restaurant operations ecosystem.',
      icon: 'Shield',
      details: [
        'User and role management',
        'Security and access controls',
        'API integrations',
        'Audit logs',
        'Compliance tools',
      ],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <JsonLd data={jsonLd} />
      <Navbar />
      
      {/* Hero */}
      <Section background="ivory" className="relative pt-36 pb-20 overflow-hidden noise-bg border-b border-cream-300/40">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="blob bg-plum-300/30 w-[30rem] h-[30rem] top-10 -right-20 animate-blob" />
        <div className="blob bg-gold-200/30 w-[24rem] h-[24rem] bottom-10 -left-20 animate-blob" style={{ animationDelay: '2s' }} />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
              Platform Features
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Powerful features for <span className="text-gradient">modern restaurants</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              Everything you need to streamline operations, increase revenue, and deliver exceptional customer experiences.
            </p>
            <div className="flex justify-center items-center">
              <Button variant="primary" size="lg" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Features List */}
      {featureSections.map((section, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <Section 
            key={section.title} 
            background={index % 2 === 0 ? 'white' : 'ivory'}
            className="border-b border-cream-300/30 last:border-0 relative overflow-hidden"
          >
            {isOdd && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-plum-50/40 rounded-full blur-3xl pointer-events-none" />
            )}
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={isOdd ? 'lg:order-last' : ''}>
                  <FeatureCard {...section} />
                </div>
                <div className={`${isOdd ? 'lg:order-first' : ''} space-y-6`}>
                  <h2 className="text-3xl font-extrabold text-charcoal-900 font-heading tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-charcoal-500 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="w-12 h-1.5 bg-gradient-button rounded-full" />
                  <ul className="space-y-3.5 pt-2">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex items-start text-[0.9375rem] text-charcoal-600 leading-relaxed">
                        <span className="shrink-0 w-5 h-5 bg-plum-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="text-plum-600" size={12} />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Container>
          </Section>
        );
      })}

      {/* CTA */}
      <Section background="white" className="py-12 lg:py-20 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-12 md:p-20 shadow-glow-plum/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-gold-400),transparent_50%)] opacity-30 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-plum-400/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 font-heading tracking-tight leading-tight">
                Ready to transform your restaurant?
              </h2>
              <p className="text-lg text-cream-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Get started today and see the difference Tably can make.
              </p>
              <div className="flex justify-center items-center">
                <Button variant="secondary" size="lg" href="/contact" className="bg-white text-plum-900 border-0 hover:bg-cream-100">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
