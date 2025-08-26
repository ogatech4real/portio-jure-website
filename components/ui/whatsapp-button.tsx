"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your legal services. Could you please provide more information?"
    );
    window.open(`https://wa.me/237679693543?text=${message}`, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 bg-emerald-accent hover:bg-emerald-accent/90 text-white p-4 rounded-full shadow-lg animate-pulse-glow"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <MessageCircle size={24} />
      <span className="sr-only">Contact us on WhatsApp</span>
    </motion.button>
  );
}