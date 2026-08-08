'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

interface HomePricingProps {
  plans: Plan[];
}

export default function HomePricing({ plans }: HomePricingProps) {
  return (
    <>
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
          Start here, scale as you grow
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch mt-12">
        {plans.map((plan, index) => {
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
    </>
  );
}
