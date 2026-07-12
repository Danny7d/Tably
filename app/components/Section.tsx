import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary-light' | 'ivory';
  id?: string;
}

const Section = ({ children, className = '', background = 'white', id }: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-cream-200/60',
    'primary-light': 'bg-plum-50/50',
    ivory: 'bg-cream-100',
  };

  return (
    <section id={id} className={`py-20 lg:py-28 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
