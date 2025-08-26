"use client";

import { motion } from 'framer-motion';
import { Scale, Target, Eye, Heart, Award, Users, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const timeline = [
  {
    year: '2008',
    title: 'Firm Establishment',
    description: 'Founded by Learned Barrister Kumfa Jude Kwenyui with a vision to bring together outstanding legal minds defined by integrity, resilience, and innovation.',
  },
  {
    year: '2009',
    title: 'Bar Association Incorporation',
    description: 'Successfully incorporated into the Cameroon Bar Association, establishing our foundation as a recognized legal practice.',
  },
  {
    year: '2012',
    title: 'Practice Diversification',
    description: 'Expanded into specialized areas including oil & gas, energy, telecommunications, and environmental law.',
  },
  {
    year: '2015',
    title: 'Regional Recognition',
    description: 'Recognized as one of the most dynamic law firms in Cameroon, serving clients across Africa.',
  },
  {
    year: '2018',
    title: 'Technology Integration',
    description: 'Invested heavily in advanced communication systems and legal research technology to enhance service delivery.',
  },
  {
    year: '2020',
    title: 'Cross-Border Expansion',
    description: 'Established network of associates nationwide and expanded international legal services across Africa.',
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description: 'Launched comprehensive digital platform with AI-powered legal assistant and modern client engagement systems.',
  },
];

const values = [
  {
    icon: Scale,
    title: 'Integrity',
    description: 'Founded on unwavering ethical principles, we maintain the highest standards in all our legal practices and client relationships.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We consistently deliver high-quality legal services, combining deep expertise with continuous learning and innovation.',
  },
  {
    icon: Heart,
    title: 'Resilience',
    description: 'We demonstrate unwavering determination in protecting our clients\' interests, no matter how complex the challenge.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We invest heavily in legal research, technology, and cutting-edge solutions in emerging fields like cybercrime and energy law.',
  },
];

const stats = [
  {
    number: '1000+',
    label: 'Cases Won',
    icon: Award,
  },
  {
    number: '2000+',
    label: 'Happy Clients',
    icon: Users,
  },
  {
    number: '16+',
    label: 'Years Experience',
    icon: Clock,
  },
  {
    number: '98%',
    label: 'Success Rate',
    icon: Target,
  },
];

export default function About() {
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
              About <span className="text-gold-secondary">Portio Jure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The strength of the law — delivering justice through integrity, resilience, and innovation 
              across Cameroon, Africa, and beyond since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-gold-secondary mr-4" />
                <h2 className="text-3xl font-serif font-bold text-navy-primary dark:text-white">
                  Our Foundation
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Portio Jure</strong> — meaning &ldquo;the strength of the law&rdquo; — was founded in 2008 
                by Learned Barrister Kumfa Jude Kwenyui. Our name reflects our core mission: to harness 
                the power of law to protect and advance our clients&apos; interests.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We are a team of Attorneys, Barristers, Solicitors, Notaries, and Academics with decades 
                of trial and advisory experience in both national and international jurisdictions, supported 
                by seasoned administrative staff who ensure excellence in every client&apos;s engagement.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To use the strength of the law to protect the interests of individuals, corporations, 
                multinationals, and government agencies across Cameroon, Africa, and beyond. We combine 
                deep legal expertise with modern innovation to deliver exceptional results while 
                upholding the highest standards of professional integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-gold-secondary mr-4" />
                <h2 className="text-3xl font-serif font-bold text-navy-primary dark:text-white">
                  Our Approach & Reach
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We employ a multi-door courthouse approach, providing efficient, cost-effective solutions 
                through litigation, negotiation, or Alternative Dispute Resolution (ADR) that preserve 
                vital business relationships while resolving disputes.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Leveraging advanced communication systems and a nationwide network of associates, 
                we are uniquely positioned to navigate local and cross-border legal challenges with 
                unmatched efficiency and cultural understanding.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our bilingual expertise in Common Law and Civil Law systems allows us to operate 
                seamlessly across Cameroon&apos;s bi-jural system and within Africa&apos;s complex legal terrain, 
                providing comprehensive solutions for our diverse clientele.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Our Defining Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The foundational principles that define our legal minds and guide every client engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow bg-white dark:bg-card">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gold-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-navy-primary dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Our Legacy of Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over 16 years of consistent excellence, serving clients across Cameroon, Africa, and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-gold-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gold-secondary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg text-gray-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Our Growth & Evolution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From our founding vision to becoming one of Cameroon&apos;s most dynamic law firms.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gold-secondary"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold-secondary rounded-full border-4 border-white dark:border-background shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="bg-soft-gray dark:bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-gold-secondary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-navy-primary dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Knowledge & Innovation Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-navy-primary text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-bold mb-6">
                  Knowledge & Innovation
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  We invest heavily in legal research, continuous learning, and technology. Our extensive 
                  legal library, updated resources, and strong research culture empower us to provide 
                  cutting-edge solutions in emerging fields such as cybercrime, telecommunications, 
                  oil & gas, energy, and environmental law.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}