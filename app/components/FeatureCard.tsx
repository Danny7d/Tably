'use client';

import { motion } from 'framer-motion';
import { QrCode, Utensils, Users, BarChart3, LayoutDashboard, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  QrCode,
  Utensils,
  Users,
  BarChart3,
  LayoutDashboard,
  Smartphone,
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const IconComponent = iconMap[icon] || LayoutDashboard;

  const iconStyles: Record<string, { bg: string; glow: string }> = {
    QrCode: { bg: 'bg-gradient-to-br from-plum-500 to-plum-400', glow: 'shadow-plum-500/25' },
    Utensils: { bg: 'bg-gradient-to-br from-sage-500 to-sage-400', glow: 'shadow-sage-500/25' },
    Users: { bg: 'bg-gradient-to-br from-gold-500 to-gold-400', glow: 'shadow-gold-500/25' },
    BarChart3: { bg: 'bg-gradient-to-br from-plum-400 to-rose-400', glow: 'shadow-plum-400/25' },
    LayoutDashboard: { bg: 'bg-gradient-to-br from-plum-600 to-plum-400', glow: 'shadow-plum-500/25' },
    Smartphone: { bg: 'bg-gradient-to-br from-plum-300 to-plum-500', glow: 'shadow-plum-400/25' },
  };

  const style = iconStyles[icon] || iconStyles.LayoutDashboard;

  return (
    <Card className="p-7 h-full">
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`w-14 h-14 ${style.bg} rounded-2xl flex items-center justify-center mb-5 shadow-lg ${style.glow}`}
      >
        <IconComponent className="text-white" size={26} />
      </motion.div>
      <h3 className="text-xl font-bold text-charcoal-900 mb-2.5 font-heading">{title}</h3>
      <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{description}</p>
    </Card>
  );
};

export default FeatureCard;
