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
    description: 'Assign roles, track performance, and keep your floor and kitchen in sync.',
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

/**
 * Early-stage social proof. Prefer honest framing over invented customers.
 * Replace with real quotes as soon as you have them.
 */
export const testimonials = [
  {
    name: 'Built for busy floors',
    role: 'Independent restaurants',
    company: 'Addis Ababa & beyond',
    content:
      'QR ordering, kitchen display, and staff tools in one place — so your team spends less time chasing tickets and more time serving guests.',
    rating: 5,
  },
  {
    name: 'Multi-location ready',
    role: 'Restaurant groups',
    company: 'One dashboard',
    content:
      'Run several branches from a single account. Menus, staff, and analytics stay organized per location without juggling separate systems.',
    rating: 5,
  },
  {
    name: 'No guest app required',
    role: 'Your customers',
    company: 'Browser only',
    content:
      'Guests scan a table QR and order in the browser. No downloads, no friction — just a faster path from seat to kitchen.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How long does it take to get started?',
    answer:
      'Most restaurants are live within 24 hours. We help you set up your menu, generate table QR codes, and walk your staff through the kitchen and waiter tools.',
  },
  {
    question: 'Do customers need to download an app?',
    answer:
      'No. Tably works entirely in the browser. Customers scan a QR code at the table and order immediately — no app install.',
  },
  {
    question: 'Can I use my existing menu?',
    answer:
      'Yes. We can import your existing menu or help you build one. Categories, modifiers, and custom pricing are supported.',
  },
  {
    question: 'What hardware do I need?',
    answer:
      'Any device with a web browser. Kitchen displays work well on tablets; you can also use existing screens or POS hardware.',
  },
  {
    question: 'Who is Tably for?',
    answer:
      'Independent restaurants that want QR table ordering and a clear kitchen flow, and multi-location groups that need one dashboard for branches, staff, and analytics.',
  },
  {
    question: 'Can I manage multiple locations?',
    answer:
      'Yes. Growth and Enterprise plans support multi-location management with centralized control and location-specific reporting.',
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
