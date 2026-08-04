'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import JsonLd from '../components/JsonLd';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 2500,
    annualPrice: 2000,
    description: 'Perfect for small restaurants',
    features: [
      '1 Location',
      'Unlimited orders',
      'Basic analytics',
      'Email support',
      'QR code generation',
      'Digital menu',
      'Order management',
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 7500,
    annualPrice: 6000,
    description: 'For growing restaurants',
    popular: true,
    features: [
      '3 Locations',
      'Unlimited orders',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'Kitchen display system',
      'Waiter dashboard',
      'Staff management',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For restaurant groups',
    features: [
      'Unlimited locations',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Training programs',
      'Custom reporting',
      '24/7 phone support',
    ],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  name: 'Tably Pricing Plans',
  description: 'Restaurant management software pricing starting at 2,500 ETB/month',
  priceCurrency: 'ETB',
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

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
              Simple & Fair Plans
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Simple, <span className="text-gradient">transparent pricing</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>

            {/* Toggle */}
            <div className="inline-flex p-1.5 bg-cream-200/80 border border-cream-300/50 rounded-2xl shadow-soft">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  !isAnnual 
                    ? 'bg-plum-500 text-white shadow-soft' 
                    : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
                aria-label="Monthly pricing"
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isAnnual 
                    ? 'bg-plum-500 text-white shadow-soft' 
                    : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
                aria-label="Annual pricing with discount"
              >
                Annual
                <span className={`text-[0.6875rem] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider transition-colors ${
                  isAnnual ? 'bg-gold-400 text-charcoal-900' : 'bg-gold-100 text-gold-700'
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Pricing Cards */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const isPopular = plan.popular;
              const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              const isCustom = currentPrice === null;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      <div className="mb-6">
                        {isCustom ? (
                          <span className="text-4xl font-extrabold text-charcoal-900 tracking-tight">
                            Custom
                          </span>
                        ) : (
                          <>
                            <span className="text-4xl font-extrabold text-charcoal-900 tracking-tight">
                              {currentPrice!.toLocaleString()} ETB
                            </span>
                            <span className="text-base font-normal text-charcoal-400">/month</span>
                            {isAnnual && (
                              <div className="text-xs font-semibold text-sage-600 mt-2 bg-sage-50 px-2.5 py-1 rounded-lg inline-block">
                                Billed annually ({(currentPrice! * 12).toLocaleString()} ETB/year)
                              </div>
                            )}
                          </>
                        )}
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
                    <Button
                      variant={isPopular ? 'primary' : 'secondary'}
                      className="w-full mt-auto"
                      href="/login"
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="ivory" className="relative overflow-hidden border-t border-cream-300/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
              Pricing questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-5">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, and bank transfers. For Enterprise plans, we also offer invoicing.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
              },
            ].map((faq, index) => (
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
                Ready to get started?
              </h2>
              <p className="text-lg text-cream-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Start your free trial today and see the difference Tably can make.
              </p>
              <Button variant="secondary" size="lg" href="https://app.tably.site" className="bg-white text-plum-900 border-0 hover:bg-cream-100">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
