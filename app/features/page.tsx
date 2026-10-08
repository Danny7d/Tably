'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
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
    </div>
  );
}
