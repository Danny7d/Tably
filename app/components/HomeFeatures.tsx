'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface HomeFeaturesProps {
  features: Feature[];
}

export default function HomeFeatures({ features }: HomeFeaturesProps) {
  return (
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
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
    </motion.div>
  );
}
