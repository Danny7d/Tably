'use client';

import { motion } from 'framer-motion';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export default function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-sm font-medium ${!isAnnual ? 'text-charcoal-900' : 'text-charcoal-400'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-16 h-8 bg-cream-200 rounded-full transition-colors duration-300"
        aria-label={isAnnual ? 'Switch to monthly pricing' : 'Switch to annual pricing'}
      >
        <motion.div
          className="absolute top-1 w-6 h-6 bg-plum-600 rounded-full shadow-soft"
          animate={{ x: isAnnual ? 32 : 4 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
      <span className={`text-sm font-medium ${isAnnual ? 'text-charcoal-900' : 'text-charcoal-400'}`}>
        Annual
      </span>
      {isAnnual && (
        <span className="bg-sage-100 text-sage-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          Save 17%
        </span>
      )}
    </div>
  );
}
