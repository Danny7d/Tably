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

  return (
    <Card className="p-7 h-full text-center">
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="w-14 h-14 bg-gradient-to-br from-navy-600 to-navy-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-navy-500/25 mx-auto"
      >
        <IconComponent className="text-white" size={26} />
      </motion.div>
      <h3 className="text-xl font-bold text-charcoal-900 mb-2.5 font-heading">{title}</h3>
      <p className="text-charcoal-500 leading-relaxed text-[0.9375rem]">{description}</p>
    </Card>
  );
};

export default FeatureCard;
