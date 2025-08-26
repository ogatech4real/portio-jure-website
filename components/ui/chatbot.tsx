"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Listen for custom events to open chatbot
  useEffect(() => {
    const handleOpenChatbot = (event: CustomEvent) => {
      setIsOpen(true);
      if (event.detail?.type === 'consultation') {
        // Add a welcome message for consultation
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          content: "Hello! 👋 I'm delighted to help you schedule a free consultation with our legal team. What's your name, and what legal matter would you like to discuss?",
          role: 'assistant',
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
    };

    window.addEventListener('openChatbot', handleOpenChatbot as EventListener);
    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot as EventListener);
    };
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Since we're using static export, simulate API response
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const data = {
        message: `Hello! 👋 I'm the Portio & Jure Virtual Legal Assistant. Thank you for your message: "${inputValue}"

I'm here to help you with information about our legal services! For immediate assistance with your legal matters, please:

✅ Call us at (+237) 679 693 543
✅ Email info@portiojurelawfirm.org  
✅ Chat on WhatsApp: (+237) 679 693 543
✅ Visit our office: Opposite Court Junction, Buea

Our experienced legal team specializes in:
• Corporate & Commercial Law
• Family & Divorce Law  
• Property & Real Estate
• Criminal Defense
• Employment & Labour Law
• Intellectual Property Law

How else can I help direct you to the right legal services?`,
        timestamp: new Date().toISOString(),
      };
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I apologize for any technical difficulties. For immediate assistance, please:

✅ Call us at (+237) 679 693 543
✅ Email info@portiojurelawfirm.org
✅ Chat on WhatsApp: (+237) 679 693 543

Our experienced legal team is ready to assist you with all your legal needs!`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "Hello! 👋 I'm the Virtual Legal Assistant for Portio & Jure Legal Partners. How can I help you today?",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-navy-primary hover:bg-navy-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          size="sm"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle size={24} />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gold-secondary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] md:max-w-96 h-[500px] max-h-[calc(100vh-8rem)]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white dark:bg-card rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-navy-primary text-white p-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gold-secondary rounded-full flex items-center justify-center">
                      <Bot size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Legal Assistant</h3>
                      <p className="text-xs text-gray-300">Portio & Jure Legal Partners</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleChat}
                    className="text-white hover:bg-white/10 h-8 w-8 p-0"
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-gold-secondary text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === 'assistant' && (
                            <Bot size={16} className="mt-1 flex-shrink-0 text-navy-primary dark:text-gold-secondary" />
                          )}
                          {message.role === 'user' && (
                            <User size={16} className="mt-1 flex-shrink-0" />
                          )}
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot size={16} className="text-navy-primary dark:text-gold-secondary" />
                          <div className="flex space-x-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border-gray-300 dark:border-gray-600 focus:border-gold-secondary focus:ring-gold-secondary"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gold-secondary hover:bg-gold-secondary/90 text-white rounded-xl px-4"
                  >
                    <Send size={16} />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Powered by AI • For legal advice, consult our attorneys
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Responsive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-4 bottom-24 z-40 md:hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white dark:bg-card rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 h-[70vh] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-navy-primary text-white p-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gold-secondary rounded-full flex items-center justify-center">
                      <Bot size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Legal Assistant</h3>
                      <p className="text-xs text-gray-300">Portio & Jure Legal Partners</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleChat}
                    className="text-white hover:bg-white/10 h-8 w-8 p-0"
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-gold-secondary text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.role === 'assistant' && (
                            <Bot size={16} className="mt-1 flex-shrink-0 text-navy-primary dark:text-gold-secondary" />
                          )}
                          {message.role === 'user' && (
                            <User size={16} className="mt-1 flex-shrink-0" />
                          )}
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 max-w-[85%]">
                        <div className="flex items-center space-x-2">
                          <Bot size={16} className="text-navy-primary dark:text-gold-secondary" />
                          <div className="flex space-x-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border-gray-300 dark:border-gray-600 focus:border-gold-secondary focus:ring-gold-secondary"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gold-secondary hover:bg-gold-secondary/90 text-white rounded-xl px-4"
                  >
                    <Send size={16} />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Powered by AI • For legal advice, consult our attorneys
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}