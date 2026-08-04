'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import JsonLd from '../components/JsonLd';
import { Target, Eye, Heart, Users } from 'lucide-react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tably',
  description: 'Modern restaurant operations platform',
  url: 'https://tably.site',
  logo: 'https://tably.site/logo.png',
};

export default function About() {
  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <JsonLd data={jsonLd} />
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
              Our Journey
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              About <span className="text-gradient">Tably</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're on a mission to modernize restaurant operations and help businesses thrive in the digital age.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Mission */}
      <Section background="white" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-50/50 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 font-heading tracking-tight">Our Mission</h2>
            <p className="text-lg sm:text-xl text-charcoal-500 leading-relaxed font-medium">
              To empower restaurants of all sizes with modern, intuitive tools that streamline operations, 
              increase revenue, and deliver exceptional customer experiences. We believe technology should 
              work for you, not against you.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="ivory" className="relative overflow-hidden border-y border-cream-300/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 font-heading tracking-tight">Our Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Simplicity', description: 'Complex problems, simple solutions', bg: 'bg-plum-50', text: 'text-plum-600' },
              { icon: Eye, title: 'Transparency', description: 'No hidden fees, no surprises', bg: 'bg-gold-50', text: 'text-gold-600' },
              { icon: Heart, title: 'Customer First', description: 'Your success is our success', bg: 'bg-rose-50', text: 'text-rose-500' },
              { icon: Users, title: 'Community', description: 'Building together, growing together', bg: 'bg-sage-50', text: 'text-sage-600' },
            ].map((value, index) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="p-7 text-center h-full flex flex-col items-center">
                    <div className={`w-12 h-12 ${value.bg} ${value.text} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2.5 font-heading">{value.title}</h3>
                    <p className="text-charcoal-500 text-[0.9375rem] leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-1.5 bg-gradient-button rounded-full mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 font-heading tracking-tight">Our Story</h2>
            </div>
            <div className="prose prose-lg text-charcoal-500 space-y-6 leading-relaxed max-w-none text-[0.9688rem] md:text-base">
              <p className="first-letter:text-4xl first-letter:font-extrabold first-letter:text-plum-500 first-letter:mr-2 first-letter:float-left">
                Tably was born from a simple observation: restaurant technology was stuck in the past. 
                While every other industry had embraced modern, cloud-based solutions, restaurants were 
                still struggling with outdated POS systems, paper orders, and fragmented tools.
              </p>
              <p>
                Founded in 2024, we set out to change that. We assembled a team of restaurant industry 
                veterans and technology experts who understood the unique challenges of running a restaurant 
                in the digital age.
              </p>
              <p className="border-l-4 border-l-gold-400 pl-4 py-1 italic font-medium text-charcoal-700 bg-cream-50/50 rounded-r-xl">
                Today, Tably powers thousands of restaurants worldwide, helping them serve millions of 
                customers more efficiently. But we're just getting started. Our vision is a world where 
                every restaurant, regardless of size, has access to enterprise-grade technology that 
                helps them thrive.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Team */}
      <Section background="ivory" className="relative overflow-hidden border-t border-cream-300/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 animate-fade-in"
          >
            <div className="w-12 h-1.5 bg-gradient-gold rounded-full mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 font-heading tracking-tight">Leadership Team</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Alex Johnson', role: 'CEO & Co-founder', bio: 'Former restaurant operator with 15 years of industry experience' },
              { name: 'Sarah Chen', role: 'CTO & Co-founder', bio: 'Tech veteran from Stripe and Google, passionate about UX' },
              { name: 'Marcus Williams', role: 'COO', bio: 'Operations expert who scaled multiple restaurant chains' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-7 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-gradient-to-br from-plum-100 to-plum-50 border-2 border-plum-200/50 rounded-full mx-auto mb-5 flex items-center justify-center text-plum-600 text-xl font-extrabold shadow-soft">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1 font-heading">{member.name}</h3>
                    <p className="text-plum-600 font-semibold text-sm mb-4">{member.role}</p>
                  </div>
                  <p className="text-[0.875rem] text-charcoal-500 leading-relaxed border-t border-cream-300/40 pt-4 mt-auto">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white" className="py-12 lg:py-20 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-12 md:p-20 shadow-glow-plum/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-gold-400),transparent_50%)] opacity-30 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-plum-400/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 font-heading tracking-tight leading-tight">
                Join our journey
              </h2>
              <p className="text-lg text-cream-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                We're always looking for talented people who share our vision.
              </p>
              <Button variant="secondary" size="lg" href="/contact" className="bg-white text-plum-900 border-0 hover:bg-cream-100">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
