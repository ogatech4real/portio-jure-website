"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Quote, Scale, Users, Award, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const practiceAreas = [
  {
    id: 'work-permit',
    title: 'Work Permit',
    description: 'Expert guidance on work permits, residence permits, and employment authorization for foreign nationals in Cameroon.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Work Permit Applications',
      'Residence Permit Processing',
      'Employment Authorization',
      'Visa Extensions',
      'Corporate Immigration Support',
      'Compliance Documentation'
    ]
  },
  {
    id: 'oil-gas-energy',
    title: 'Oil, Gas, Energy And Mining',
    description: 'Comprehensive legal services for energy sector investments, mining operations, and natural resource development.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Energy Project Development',
      'Mining Concession Applications',
      'Joint Venture Agreements',
      'Environmental Compliance',
      'Regulatory Advisory',
      'Contract Negotiations'
    ]
  },
  {
    id: 'banking-finance',
    title: 'Banking And Finance',
    description: 'Sophisticated financial law services for banking institutions, fintech companies, and investment transactions.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Banking Regulations',
      'Securities Law',
      'Project Finance',
      'Fintech Compliance',
      'Investment Structuring',
      'Capital Markets'
    ]
  },
  {
    id: 'labour-employment',
    title: 'Labour And Employment',
    description: 'Comprehensive employment law services protecting both employers and employees in workplace matters.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Employment Contracts',
      'Workplace Disputes',
      'Labor Union Relations',
      'Termination Procedures',
      'Discrimination Claims',
      'Compensation Structures'
    ]
  },
  {
    id: 'government-procurement',
    title: 'Government Procurement And Contracts',
    description: 'Expert representation in government contracting, public procurement processes, and regulatory compliance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Tender Preparation',
      'Contract Negotiations',
      'Compliance Advisory',
      'Dispute Resolution',
      'Regulatory Guidance',
      'Public-Private Partnerships'
    ]
  },
  {
    id: 'doing-business-africa',
    title: 'Doing Business In Africa',
    description: 'Strategic legal counsel for international businesses expanding into African markets and cross-border transactions.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Market Entry Strategies',
      'Cross-Border Transactions',
      'Regulatory Compliance',
      'Joint Ventures',
      'Investment Protection',
      'Cultural Legal Advisory'
    ]
  },
  {
    id: 'immigration',
    title: 'Immigration',
    description: 'Comprehensive immigration services for individuals and businesses navigating Cameroon\'s immigration system.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Visa Applications',
      'Citizenship Procedures',
      'Family Reunification',
      'Business Immigration',
      'Deportation Defense',
      'Status Adjustments'
    ]
  },
  {
    id: 'trademarks-patents',
    title: 'Trademarks And Patents',
    description: 'Protecting intellectual property rights through trademark registration, patent applications, and IP enforcement.',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Trademark Registration',
      'Patent Applications',
      'IP Portfolio Management',
      'Infringement Actions',
      'Licensing Agreements',
      'Brand Protection'
    ]
  },
  {
    id: 'aviation-site',
    title: 'Aviation And Site Acquisition',
    description: 'Specialized legal services for aviation industry and strategic site acquisition for business development.',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Aviation Regulations',
      'Aircraft Transactions',
      'Site Acquisition',
      'Zoning Compliance',
      'Lease Negotiations',
      'Development Permits'
    ]
  },
  {
    id: 'maritime',
    title: 'Maritime',
    description: 'Comprehensive maritime law services covering shipping, port operations, and marine commercial transactions.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Shipping Contracts',
      'Port Operations',
      'Marine Insurance',
      'Vessel Registration',
      'Maritime Disputes',
      'Cargo Claims'
    ]
  },
];

const whyChooseUs = [
  {
    icon: Scale,
    title: 'Proven Track Record',
    description: 'Over 500 successful cases handled with a 95% success rate in our practice areas.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly qualified attorneys with decades of combined experience in Cameroonian and international law.',
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized as one of the leading law firms in Central Africa for client satisfaction.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock legal support for urgent matters and emergency consultations.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mbong',
    role: 'Business Owner',
    content: 'Portio & Jure helped me navigate complex commercial law issues with professionalism and expertise. Their team is simply outstanding.',
    rating: 5,
  },
  {
    name: 'Dr. Emmanuel Tabi',
    role: 'Medical Professional',
    content: 'The family law team handled my divorce case with compassion and achieved the best possible outcome. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Grace Nkomo',
    role: 'Real Estate Investor',
    content: 'Their property law expertise saved me from a costly mistake. Professional, knowledgeable, and always available.',
    rating: 5,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(practiceAreas[0].id);

  return (
    <>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fallback background - behind everything */}
        <div className="absolute inset-0 bg-navy-primary bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center z-0"></div>
        
        {/* Background Video with Error Handling - on top of fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          preload="metadata"
          onError={(e) => {
            console.log('Video failed to load, using fallback');
            e.currentTarget.style.display = 'none';
          }}
          onLoadStart={() => {
            console.log('Video loading started');
          }}
          onCanPlay={() => {
            console.log('Video can play');
          }}
        >
          <source src="/MiraHeroVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Navy Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/80 via-navy-primary/60 to-navy-primary/80 z-10"></div>
        
        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-20"></div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trusted Legal Excellence,{' '}
              <span className="text-gold-secondary">Modern Solutions</span>
              <br />
              in Cameroon & Beyond
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivering justice through integrity, innovation, and relentless advocacy. 
              Your premier legal partner for comprehensive legal solutions.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="gold-gradient text-white hover:opacity-90 text-lg px-8 py-4 shadow-2xl" asChild>
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/80 text-white hover:bg-white hover:text-navy-primary text-lg px-8 py-4 backdrop-blur-sm bg-white/10 shadow-2xl" asChild>
                <Link href="https://wa.me/237679693543" target="_blank">
                  Chat on WhatsApp
                </Link>
              </Button>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white/70 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized legal expertise across diverse practice areas, delivering world-class solutions for complex legal challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Tab Navigation */}
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2 h-auto p-2 bg-soft-gray dark:bg-gray-800 rounded-xl mb-8">
                {practiceAreas.map((area, index) => (
                  <TabsTrigger
                    key={area.id}
                    value={area.id}
                    className="text-xs sm:text-sm font-medium px-3 py-3 rounded-lg transition-all duration-300 data-[state=active]:bg-gold-secondary data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gold-secondary/10 text-center leading-tight"
                  >
                    {area.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab Content */}
              {practiceAreas.map((area, index) => (
                <TabsContent key={area.id} value={area.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Image Section */}
                    <motion.div
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-serif font-bold mb-2">
                          {area.title}
                        </h3>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-navy-primary dark:text-white mb-4">
                          {area.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {area.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-4">
                          Our Services Include:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {area.services.map((service, serviceIndex) => (
                            <motion.div
                              key={serviceIndex}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 + serviceIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gold-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {service}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-gold-secondary hover:bg-gold-secondary/90" asChild>
                          <Link href="/contact">
                            Schedule Consultation
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/practice-areas">
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Why Choose Portio & Jure?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine traditional legal expertise with modern innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gold-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-navy-primary dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our legal services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-gold-secondary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-secondary fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation and let our experienced legal team help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-white hover:opacity-90 text-lg px-8 py-3" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}