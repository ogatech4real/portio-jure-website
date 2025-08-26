"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Our Team', href: '/team' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-navy-primary/95 backdrop-blur-lg shadow-lg'
            : 'bg-white dark:bg-navy-primary'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/Micarelawv.png"
                  alt="Portio Jure Legal Partners"
                  className="h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(199,160,8,0.6)]"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-serif font-bold text-navy-primary dark:text-white">
                  Portio Jure
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Legal Partners</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gold-secondary ${
                    pathname === item.href
                      ? 'text-gold-secondary'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  // Trigger chatbot opening with consultation greeting
                  const chatbotEvent = new CustomEvent('openChatbot', { 
                    detail: { type: 'consultation' } 
                  });
                  window.dispatchEvent(chatbotEvent);
                }}
              >
                Free Consultation
              </Button>
              <Button className="bg-gold-secondary hover:bg-gold-secondary/90" asChild>
                <Link href="https://wa.me/237679693543" target="_blank">
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white dark:bg-navy-primary border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? 'text-gold-secondary bg-gold-secondary/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-gold-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    // Trigger chatbot opening with consultation greeting
                    const chatbotEvent = new CustomEvent('openChatbot', { 
                      detail: { type: 'consultation' } 
                    });
                    window.dispatchEvent(chatbotEvent);
                    setIsOpen(false);
                  }}
                >
                  Free Consultation
                </Button>
                <Button className="w-full bg-gold-secondary hover:bg-gold-secondary/90" asChild>
                  <Link href="https://wa.me/237679693543" target="_blank">
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
  );
}