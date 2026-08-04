'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import { HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface HomeFAQProps {
  faqs: FAQ[];
}

export default function HomeFAQ({ faqs }: HomeFAQProps) {
  return (
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
      <div className="max-w-3xl mx-auto space-y-5 mt-12">
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
    </motion.div>
  );
}
