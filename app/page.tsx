'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import Container from './components/Container';
import Card from './components/Card';
import FeatureCard from './components/FeatureCard';
import Button from './components/Button';
import { ChevronRight, Star, Check, HelpCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'QR Ordering',
      description: 'Let customers order directly from their table. No app download required.',
      icon: 'QrCode',
    },
    {
      title: 'Kitchen Display',
      description: 'Real-time order routing to kitchen displays with automated timing.',
      icon: 'LayoutDashboard',
    },
    {
      title: 'Waiter Dashboard',
      description: 'Equip your staff with mobile tools to manage tables and orders efficiently.',
      icon: 'Smartphone',
    },
    {
      title: 'Branch Management',
      description: 'Manage multiple locations from a single centralized dashboard.',
      icon: 'BarChart3',
    },
    {
      title: 'Analytics',
      description: 'Deep insights into sales, performance, and customer behavior.',
      icon: 'BarChart3',
    },
    {
      title: 'Staff Management',
      description: 'Schedule shifts, track performance, and manage your team.',
      icon: 'Users',
    },
  ];

  const howItWorks = [
    { step: 1, title: 'Create restaurant', description: 'Set up your restaurant profile in minutes' },
    { step: 2, title: 'Invite your team', description: 'Add staff and assign roles' },
    { step: 3, title: 'Generate QR codes', description: 'Create unique codes for each table' },
    { step: 4, title: 'Customers order', description: 'Guests scan and order instantly' },
    { step: 5, title: 'Kitchen prepares', description: 'Orders route to kitchen displays' },
    { step: 6, title: 'Waiters serve', description: 'Staff deliver with real-time updates' },
    { step: 7, title: 'Track analytics', description: 'Monitor performance and grow' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Owner',
      company: 'Golden Dragon',
      content: 'Tably transformed our operations. Orders are up 40% and our staff loves the simplicity.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Manager',
      company: 'Bella Italia',
      content: 'The analytics alone are worth it. We finally understand our peak hours and menu performance.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Director',
      company: 'Urban Kitchen Group',
      content: 'Managing 5 locations used to be a nightmare. Now I have everything in one dashboard.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to get started?',
      answer: 'Most restaurants are up and running within 24 hours. Our team will help you set up your menu, generate QR codes, and train your staff.',
    },
    {
      question: 'Do customers need to download an app?',
      answer: 'No! Tably works entirely through the browser. Customers simply scan a QR code and can order immediately without any app installation.',
    },
    {
      question: 'Can I use my existing menu?',
      answer: 'Absolutely. We can import your existing menu or help you create a new one. Our system supports categories, modifiers, and custom pricing.',
    },
    {
      question: 'What hardware do I need?',
      answer: 'Tably works on any device with a web browser. For kitchen displays, we recommend tablets, but you can also use existing POS hardware.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-level encryption, regular security audits, and comply with all major data protection regulations including GDPR.',
    },
    {
      question: 'Can I manage multiple locations?',
      answer: 'Yes. Our Growth and Enterprise plans support multi-location management with centralized control and location-specific reporting.',
    },
  ];

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      <Hero />

      {/* Trusted By */}
      <Section background="ivory" className="py-12 lg:py-16 border-y border-cream-300/40 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-widest mb-8">
              Trusted by modern restaurants
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14">
              {['Restaurant A', 'Restaurant B', 'Restaurant C', 'Restaurant D', 'Restaurant E'].map((name, i) => (
                <div 
                  key={i} 
                  className="px-6 py-3 rounded-2xl bg-cream-50 border border-cream-300/40 text-sm font-bold text-charcoal-500 shadow-soft hover:shadow-card hover:border-plum-200/50 hover:text-plum-600 transition-all duration-300 cursor-default"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Features */}
      <Section background="white" className="relative overflow-hidden">
        {/* Glow decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-plum-100/30 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Everything you need to run your restaurant
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              From ordering to analytics, Tably provides a complete suite of tools for modern restaurant operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="ivory" className="relative overflow-hidden">
        {/* Floating blobs */}
        <div className="blob bg-gold-200/40 w-80 h-80 top-1/4 -right-20 animate-blob" style={{ animationDelay: '1s' }} />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              How it works
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              Get started in minutes, not days
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Connected Vertical Timeline Line */}
            <div className="absolute left-[21px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-plum-300 via-gold-300 to-cream-300" />
            
            <div className="space-y-8 relative">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start group"
                >
                  <div className="shrink-0 w-11 h-11 bg-cream-50 border-2 border-plum-500 rounded-full flex items-center justify-center text-plum-600 font-extrabold text-sm z-10 shadow-soft group-hover:bg-plum-500 group-hover:text-white transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1 ml-5 pt-1.5">
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1 group-hover:text-plum-600 transition-colors duration-300 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Preview */}
      <Section background="white" className="relative overflow-hidden">
        <div className="blob bg-plum-100/40 w-96 h-96 -bottom-20 -left-20 animate-blob" style={{ animationDelay: '4s' }} />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              Start free, scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {[
              { name: 'Starter', price: '$49', description: 'Perfect for small restaurants', features: ['1 Location', 'Up to 50 orders/day', 'Basic analytics', 'Email support'] },
              { name: 'Growth', price: '$149', description: 'For growing restaurants', popular: true, features: ['3 Locations', 'Unlimited orders', 'Advanced analytics', 'Priority support', 'Custom branding'] },
              { name: 'Enterprise', price: 'Custom', description: 'For restaurant groups', features: ['Unlimited locations', 'White-label solution', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee'] },
            ].map((plan, index) => {
              const isPopular = plan.popular;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={`p-8 w-full flex flex-col justify-between ${
                    isPopular 
                      ? 'border-2 border-plum-400 shadow-glow-plum/20 relative scale-[1.02] md:scale-[1.03]' 
                      : 'border border-cream-300/60 shadow-card'
                  }`}>
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-charcoal-900 text-xs font-bold px-4 py-1 rounded-full shadow-soft uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-extrabold text-charcoal-900 mb-2 font-heading">{plan.name}</h3>
                      <p className="text-charcoal-500 text-sm mb-6 leading-relaxed">{plan.description}</p>
                      <div className="text-4xl font-extrabold text-charcoal-900 mb-6 tracking-tight">
                        {plan.price}
                        {plan.price !== 'Custom' && <span className="text-base font-normal text-charcoal-400">/month</span>}
                      </div>
                      <div className="w-full h-px bg-cream-300/60 mb-6" />
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start text-[0.9375rem] text-charcoal-500 leading-relaxed">
                            <span className="shrink-0 w-5 h-5 bg-plum-50 rounded-full flex items-center justify-center mr-2.5 mt-0.5">
                              <Check className="text-plum-600" size={13} />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full mt-auto" href="/pricing">
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/pricing" className="text-plum-600 font-bold hover:text-plum-700 hover:gap-2 inline-flex items-center group transition-all duration-300 text-[0.9375rem]">
              View detailed pricing
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="ivory" className="relative overflow-hidden">
        <div className="blob bg-gold-100/30 w-80 h-80 top-10 left-10 animate-blob" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Loved by restaurant owners
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              See what our customers have to say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative faint quotes */}
                  <span className="absolute right-6 top-4 text-8xl font-serif text-cream-300/30 pointer-events-none select-none">“</span>
                  
                  <div className="relative z-10">
                    <div className="flex gap-1.5 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-gold-500 fill-gold-500" size={16} />
                      ))}
                    </div>
                    <p className="text-charcoal-500 leading-relaxed italic mb-6 text-[0.9375rem]">"{testimonial.content}"</p>
                  </div>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-cream-300/40 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plum-500 to-gold-400 flex items-center justify-center text-white font-extrabold text-sm mr-3 shadow-soft">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-charcoal-900 text-sm font-heading">{testimonial.name}</div>
                      <div className="text-xs text-charcoal-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white" className="relative overflow-hidden">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Tably
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-7 border-l-4 border-l-plum-500 shadow-soft">
                  <div className="flex gap-3 items-start">
                    <HelpCircle className="text-plum-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-lg font-bold text-charcoal-900 mb-2 font-heading">{faq.question}</h3>
                      <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ -> CTA transition */}
      <div className="section-divider" />

      {/* CTA */}
      <Section background="white" className="py-12 lg:py-20 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-12 md:p-20 shadow-glow-plum/30"
          >
            {/* Radial glow background mesh inside CTA */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-gold-400),transparent_50%)] opacity-30 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-plum-400/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 font-heading tracking-tight leading-tight">
                Ready to modernize your restaurant?
              </h2>
              <p className="text-lg text-cream-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join thousands of restaurants already using Tably to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" href="/login" className="bg-white text-plum-900 border-0 hover:bg-cream-100">
                  Start Free
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
