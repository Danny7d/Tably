'use client';

import { motion } from 'framer-motion';

export default function HomeHowItWorks({ howItWorks }: { howItWorks: Array<{ step: number; title: string; description: string }> }) {
  return (
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
      <div className="relative max-w-2xl mx-auto mt-12">
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
    </motion.div>
  );
}
