'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href,
  target,
  type = 'button'
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-button text-white shadow-glow-plum/40 hover:shadow-glow-plum hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-cream-50 text-charcoal-900 border border-cream-400 hover:border-plum-200 hover:bg-white shadow-soft hover:shadow-card',
    outline: 'bg-transparent text-plum-600 border-2 border-plum-200 hover:bg-plum-50 hover:border-plum-400',
  };
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-1.5',
    md: 'px-7 py-3.5 text-[0.9375rem] gap-2',
    lg: 'px-9 py-4.5 text-base gap-2.5',
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex"
      >
        <Link 
          href={href} 
          target={target}
          className={combinedClass}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClass}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
