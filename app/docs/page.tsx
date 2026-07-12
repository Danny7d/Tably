'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import { BookOpen, Users, Utensils, BarChart3, Settings, LayoutDashboard, Search, ChevronRight } from 'lucide-react';

export default function Docs() {
  const docSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides to get you up and running',
      icon: BookOpen,
      articles: [
        { title: 'Introduction to Tably', description: 'Learn the basics of Tably platform' },
        { title: 'Account Setup', description: 'Create and configure your account' },
        { title: 'First Steps', description: 'What to do after signing up' },
      ],
    },
    {
      title: 'Restaurant Setup',
      description: 'Configure your restaurant profile and settings',
      icon: Settings,
      articles: [
        { title: 'Creating Your Restaurant', description: 'Set up your restaurant profile' },
        { title: 'Menu Management', description: 'Add and organize your menu items' },
        { title: 'Table Configuration', description: 'Set up your restaurant layout' },
        { title: 'QR Code Generation', description: 'Create QR codes for your tables' },
      ],
    },
    {
      title: 'Orders',
      description: 'Manage and track customer orders',
      icon: Utensils,
      articles: [
        { title: 'Order Flow', description: 'Understanding the order lifecycle' },
        { title: 'Order Management', description: 'View and modify orders' },
        { title: 'Payment Processing', description: 'Handle payments and refunds' },
      ],
    },
    {
      title: 'Kitchen',
      description: 'Kitchen display system and operations',
      icon: LayoutDashboard,
      articles: [
        { title: 'Kitchen Display Setup', description: 'Configure KDS for your kitchen' },
        { title: 'Order Routing', description: 'How orders route to stations' },
        { title: 'Kitchen Workflow', description: 'Best practices for kitchen operations' },
      ],
    },
    {
      title: 'Analytics',
      description: 'Track performance and gain insights',
      icon: BarChart3,
      articles: [
        { title: 'Dashboard Overview', description: 'Navigate the analytics dashboard' },
        { title: 'Sales Reports', description: 'Track revenue and sales metrics' },
        { title: 'Customer Insights', description: 'Understand your customers' },
        { title: 'Performance Metrics', description: 'Monitor KPIs and goals' },
      ],
    },
    {
      title: 'Platform',
      description: 'Advanced platform configuration',
      icon: Users,
      articles: [
        { title: 'User Management', description: 'Add and manage users' },
        { title: 'Role Permissions', description: 'Configure access controls' },
        { title: 'Multi-Location Setup', description: 'Manage multiple restaurants' },
        { title: 'API Integration', description: 'Connect with other systems' },
      ],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      {/* Hero */}
      <Section background="ivory" className="relative pt-36 pb-20 overflow-hidden noise-bg border-b border-cream-300/40">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="blob bg-plum-300/30 w-[30rem] h-[30rem] top-10 -right-20 animate-blob" />
        <div className="blob bg-gold-200/30 w-[24rem] h-[24rem] bottom-10 -left-20 animate-blob" style={{ animationDelay: '2s' }} />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
              Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Documentation
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know to get the most out of Tably.
            </p>
            
            {/* Search Input */}
            <div className="max-w-md mx-auto relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 group-focus-within:text-plum-500 transition-colors">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search documentation..."
                className="input-premium pl-11 shadow-soft"
              />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Documentation Sections */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => {
              const IconComp = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="p-8 h-full flex flex-col justify-between border border-cream-300/50 hover:border-plum-200">
                    <div>
                      <div className="w-12 h-12 bg-plum-50 text-plum-600 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                        <IconComp size={22} />
                      </div>
                      <h2 className="text-xl font-bold text-charcoal-900 mb-2 font-heading tracking-tight">{section.title}</h2>
                      <p className="text-charcoal-500 text-[0.9375rem] leading-relaxed mb-6">{section.description}</p>
                      
                      <div className="w-full h-px bg-cream-300/60 mb-5" />
                      
                      <ul className="space-y-4">
                        {section.articles.map((article) => (
                          <li key={article.title}>
                            <Link
                              href="#"
                              className="group block transition-all"
                            >
                              <div className="font-bold text-sm text-charcoal-800 group-hover:text-plum-600 flex items-center gap-1 transition-colors">
                                {article.title}
                                <ChevronRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-plum-500" />
                              </div>
                              <div className="text-xs text-charcoal-400 mt-1 leading-relaxed">{article.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section background="ivory" className="relative overflow-hidden border-t border-cream-300/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-charcoal-900 mb-8 font-heading tracking-tight">
              Quick links
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'API Reference', href: '#' },
                { label: 'Changelog', href: '#' },
                { label: 'Status', href: '#' },
                { label: 'Support', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2.5 bg-white rounded-xl text-charcoal-600 font-bold text-sm border border-cream-400 hover:border-plum-200 hover:bg-cream-50 hover:text-plum-600 shadow-soft transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
