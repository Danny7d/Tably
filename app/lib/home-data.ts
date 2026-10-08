export const features = [
  {
    title: 'QR Ordering',
    description: 'Let customers order directly from their table. No app download required.',
    icon: 'QrCode',
  },
  {
    title: 'Kitchen Display',
    description: 'Real-time order routing to kitchen displays with automated timing.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Waiter Dashboard',
    description: 'Equip your staff with mobile tools to manage tables and orders efficiently.',
    icon: 'Smartphone',
  },
  {
    title: 'Branch Management',
    description: 'Manage multiple locations from a single centralized dashboard.',
    icon: 'BarChart3',
  },
  {
    title: 'Analytics',
    description: 'Deep insights into sales, performance, and customer behavior.',
    icon: 'BarChart3',
  },
  {
    title: 'Staff Management',
    description: 'Schedule shifts, track performance, and manage your team.',
    icon: 'Users',
  },
];

export const howItWorks = [
  { step: 1, title: 'Create restaurant', description: 'Set up your restaurant profile in minutes' },
  { step: 2, title: 'Invite your team', description: 'Add staff and assign roles' },
  { step: 3, title: 'Generate QR codes', description: 'Create unique codes for each table' },
  { step: 4, title: 'Customers order', description: 'Guests scan and order instantly' },
  { step: 5, title: 'Kitchen prepares', description: 'Orders route to kitchen displays' },
  { step: 6, title: 'Waiters serve', description: 'Staff deliver with real-time updates' },
  { step: 7, title: 'Track analytics', description: 'Monitor performance and grow' },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Owner',
    company: 'Golden Dragon',
    content: 'Tably transformed our operations. Orders are up 40% and our staff loves the simplicity.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Manager',
    company: 'Bella Italia',
    content: 'The analytics alone are worth it. We finally understand our peak hours and menu performance.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Director',
    company: 'Urban Kitchen Group',
    content: 'Managing 5 locations used to be a nightmare. Now I have everything in one dashboard.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How long does it take to get started?',
    answer: 'Within 24 hours. Our team will help you set up your menu, generate QR codes, and train your staff.',
  },
  {
    question: 'Do customers need to download an app?',
    answer: 'No! Tably works entirely through the browser. Customers simply scan a QR code and can order immediately without any app installation.',
  },
  {
    question: 'Can I use my existing menu?',
    answer: 'Absolutely. We can import your existing menu or help you create a new one. Our system supports categories, modifiers, and custom pricing.',
  },
  {
    question: 'What hardware do I need?',
    answer: 'Tably works on any device with a web browser. For kitchen displays, we recommend tablets, but you can also use existing POS hardware.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use bank-level encryption, regular security audits, and comply with all major data protection regulations including GDPR.',
  },
  {
    question: 'Can I manage multiple locations?',
    answer: 'Yes. Our Growth and Enterprise plans support multi-location management with centralized control and location-specific reporting.',
  },
];

import { plans as pricingPlans } from './pricing-data';

export const plans = pricingPlans.map((plan) => ({
  name: plan.name,
  price: plan.monthlyPrice ? `${plan.monthlyPrice.toLocaleString()} ETB` : 'Custom',
  description: plan.description,
  popular: plan.popular,
  features: plan.features,
}));
