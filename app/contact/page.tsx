'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store the message
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

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
              Connect With Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-charcoal-900 mb-4 font-heading tracking-tight">Contact Information</h2>
                <p className="text-charcoal-500 leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 border border-cream-300/40 hover:border-plum-200/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-plum-50 text-plum-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900 mb-1 font-heading text-sm uppercase tracking-wider">Email</h3>
                    <p className="text-charcoal-500 text-[0.9375rem]">contact@tably.site</p>
                    <p className="text-charcoal-400 text-xs">support@tably.site</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 border border-cream-300/40 hover:border-gold-200/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900 mb-1 font-heading text-sm uppercase tracking-wider">Phone</h3>
                    <p className="text-charcoal-500 text-[0.9375rem]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100/50 border border-cream-300/40 hover:border-rose-200/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-900 mb-1 font-heading text-sm uppercase tracking-wider">Office</h3>
                    <p className="text-charcoal-500 text-[0.9375rem] leading-relaxed">
                      123 Innovation Drive<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <Card className="p-8 lg:p-10 border border-cream-300/60 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-premium"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-premium"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-premium"
                      placeholder="Your restaurant name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="input-premium resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full mt-2" type="submit">
                    <span>Send Message</span>
                    <Send size={16} />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
