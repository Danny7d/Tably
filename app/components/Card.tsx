'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } } : {}}
      className={`bg-[#FEFCF9] rounded-2xl shadow-card border border-cream-300/60 hover:shadow-elevated hover:border-plum-200/40 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
