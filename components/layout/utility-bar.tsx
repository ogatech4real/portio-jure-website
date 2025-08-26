"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const phoneTexts = [
  "📞 (+237) 243 265 817",
  "📞 (+237) 679 693 543",
];

const addressTexts = [
  "📍 Opp. Court Junction, Buea SW Reg",
  "📍 P.O. Box: 526, Buea, Cameroon",
];

export function UtilityBar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedPhone, setDisplayedPhone] = useState('');
  const [displayedAddress, setDisplayedAddress] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhone = phoneTexts[currentTextIndex];
    const currentAddress = addressTexts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping && (displayedPhone.length < currentPhone.length || displayedAddress.length < currentAddress.length)) {
      // Typing animation
      timeoutId = setTimeout(() => {
        if (displayedPhone.length < currentPhone.length) {
          setDisplayedPhone(currentPhone.slice(0, displayedPhone.length + 1));
        }
        if (displayedAddress.length < currentAddress.length) {
          setDisplayedAddress(currentAddress.slice(0, displayedAddress.length + 1));
        }
      }, 80); // Typing speed
    } else if (isTyping && displayedPhone.length === currentPhone.length && displayedAddress.length === currentAddress.length) {
      // Finished typing, wait before starting next text
      setIsTyping(false);
      timeoutId = setTimeout(() => {
        setDisplayedPhone('');
        setDisplayedAddress('');
        setCurrentTextIndex((prev) => (prev + 1) % phoneTexts.length);
        setIsTyping(true);
      }, Math.random() * 3000 + 5000); // 5-8 second pause
    }

    return () => clearTimeout(timeoutId);
  }, [displayedPhone, displayedAddress, currentTextIndex, isTyping]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy-primary text-white py-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Phone Number - Left Column */}
          <div className="text-left">
            <motion.div
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block">
                {displayedPhone.split('').map((char, index) => (
                  <motion.span
                    key={`${currentTextIndex}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.1,
                      delay: index * 0.08
                    }}
                    className={char === '📞' ? 'text-gold-secondary' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </div>

          {/* Address - Center Column */}
          <div className="text-center">
            <motion.div
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block">
                {displayedAddress.split('').map((char, index) => (
                  <motion.span
                    key={`${currentTextIndex}-address-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.1,
                      delay: index * 0.08
                    }}
                    className={char === '📍' ? 'text-gold-secondary' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </div>

          {/* Theme Toggle - Right Column */}
          <div className="text-right">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}