"use client";

import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = [
  'All',
  'Corporate Law',
  'Family Law',
  'Real Estate',
  'Criminal Law',
  'Employment Law',
  'IP Law',
];

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Corporate Governance in Cameroon: A Comprehensive Guide',
    excerpt: 'Explore the essential principles of corporate governance and their implementation in Cameroonian business law.',
    author: 'John Portio',
    date: '2024-01-15',
    category: 'Corporate Law',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Protecting Your Family: Essential Estate Planning Documents',
    excerpt: 'Learn about the critical legal documents every family needs to secure their future and protect their loved ones.',
    author: 'Jane Jure',
    date: '2024-01-10',
    category: 'Family Law',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Real Estate Investment Laws: What Foreign Investors Need to Know',
    excerpt: 'A detailed overview of property investment regulations and legal requirements for international investors in Cameroon.',
    author: 'Michael Osei',
    date: '2024-01-05',
    category: 'Real Estate',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Employment Contracts: Key Terms and Employee Rights',
    excerpt: 'Understanding your rights and obligations in employment relationships under Cameroonian labor law.',
    author: 'Jane Jure',
    date: '2024-01-02',
    category: 'Employment Law',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Intellectual Property Protection for Tech Startups',
    excerpt: 'How emerging technology companies can protect their innovations and intellectual assets effectively.',
    author: 'Michael Osei',
    date: '2023-12-28',
    category: 'IP Law',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'Criminal Defense Rights: What Every Citizen Should Know',
    excerpt: 'Understanding your constitutional rights and the criminal justice process in Cameroon.',
    author: 'Jane Jure',
    date: '2023-12-25',
    category: 'Criminal Law',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    featured: false,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-primary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Legal <span className="text-gold-secondary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest legal developments, expert analysis, 
              and practical guidance from our experienced legal team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white dark:bg-background border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-gold-secondary hover:bg-gold-secondary/90" : ""}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-card hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-gold-secondary text-sm font-medium bg-gold-secondary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-primary dark:text-white mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-fit bg-gold-secondary hover:bg-gold-secondary/90">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expert insights and practical guidance on various areas of law.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-white dark:bg-card hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-secondary/90 text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-navy-primary dark:text-white mb-3 leading-tight group-hover:text-gold-secondary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                      
                      <Button variant="ghost" size="sm" className="text-gold-secondary hover:text-gold-secondary/80">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest legal insights, case studies, 
              and important updates from Portio Jure Legal Partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900"
              />
              <Button className="gold-gradient text-white hover:opacity-90 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}