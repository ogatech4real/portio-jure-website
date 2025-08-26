"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import Link from 'next/link';

const practiceAreas = [
  'Corporate & Commercial Law',
  'Family & Divorce Law',
  'Property & Real Estate',
  'Criminal Defense',
  'Employment & Labour Law',
  'Intellectual Property Law',
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Our Team', href: '/team' },
  { name: 'Legal Insights', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Book Consultation', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/Micarelawv.png"
                  alt="Portio Jure Legal Partners"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <h3 className="text-xl font-serif font-bold">Portio Jure</h3>
                  <p className="text-sm text-gray-300">Legal Partners</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Delivering justice through integrity, innovation, and relentless advocacy in 
                Cameroon and internationally. Your trusted legal partner for over a decade.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-gold-secondary transition-colors"
                >
                  <Facebook size={18} />
                </Link>
                <Link 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-gold-secondary transition-colors"
                >
                  <Twitter size={18} />
                </Link>
                <Link 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-gold-secondary transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Practice Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6">Practice Areas</h3>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <Link 
                      href="/practice-areas"
                      className="text-gray-300 hover:text-gold-secondary transition-colors text-sm"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-gold-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Opposite Court Junction</p>
                    <p>Buea - South West Region</p>
                    <p>Cameroon</p>
                    <p className="mt-1">P.O. Box: 526</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-secondary flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>(+237) 679 693 543</p>
                    <p>(+237) 243 265 817</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-secondary flex-shrink-0" />
                  <p className="text-sm text-gray-300">info@portiojurelawfirm.org</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gold-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                    <p>Sun: Emergency Only</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Portio Jure Legal Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-gold-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}