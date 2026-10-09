'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface HomeTestimonialsProps {
  testimonials: Testimonial[];
}

export default function HomeTestimonials({ testimonials }: HomeTestimonialsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 max-w-3xl mx-auto"
    >
      <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">
        Built for real restaurant floors
      </h2>
      <p className="text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
        Designed with independent restaurants and multi-location operators in mind — from QR order to kitchen ticket to analytics.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <span className="absolute right-6 top-4 text-8xl font-serif text-cream-300/30 pointer-events-none select-none">"</span>
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
                  <div className="text-xs text-charcoal-400">{testimonial.role} · {testimonial.company}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
