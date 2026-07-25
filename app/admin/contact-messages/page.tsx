'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Mail, Trash2, RefreshCw } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const response = await fetch(`/api/contact/messages/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  useEffect(() => {
    fetchMessages().catch(console.error);
  }, []);

  return (
    <div className="min-h-screen selection:bg-plum-100 selection:text-plum-900">
      <Navbar />
      
      {/* Hero */}
      <Section background="ivory" className="relative pt-36 pb-20 overflow-hidden noise-bg border-b border-cream-300/40">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-plum-50 border border-plum-200/60 text-plum-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
              <Mail size={16} />
              Admin Dashboard
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 font-heading tracking-tight leading-[1.1]">
              Contact <span className="text-gradient">Messages</span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              View and manage messages from your contact form.
            </p>
            <Button 
              variant="primary" 
              onClick={fetchMessages}
              className="inline-flex items-center gap-2"
            >
              <RefreshCw size={16} />
              Refresh
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Messages List */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          {loading ? (
            <div className="text-center py-20">
              <div className="text-charcoal-400">Loading messages...</div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-20">
              <Mail size={48} className="text-charcoal-300 mx-auto mb-4" />
              <p className="text-charcoal-400">No messages yet</p>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-6 border border-cream-300/60 shadow-card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-charcoal-900 font-heading">{msg.name}</h3>
                        <p className="text-sm text-charcoal-400">{msg.email}</p>
                        {msg.company && <p className="text-sm text-charcoal-500">{msg.company}</p>}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-charcoal-400">
                          {new Date(msg.timestamp).toLocaleString()}
                        </span>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="bg-rose-50 text-rose-600 hover:bg-rose-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                          title="Delete message"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="bg-cream-50 rounded-xl p-4 border border-cream-200/40">
                      <p className="text-charcoal-700 leading-relaxed">{msg.message}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
