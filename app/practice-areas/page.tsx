"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Building, Heart, Home, Shield, Briefcase, Lightbulb, Plane, Ship, FileText, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const practiceAreas = [
  {
    id: 'work-permit',
    title: 'Work Permit',
    icon: FileText,
    description: 'Expert guidance on work permits, residence permits, and employment authorization for foreign nationals in Cameroon.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Work Permit Applications',
      'Residence Permit Processing',
      'Employment Authorization',
      'Visa Extensions',
      'Corporate Immigration Support',
      'Compliance Documentation',
      'Permit Renewals',
      'Legal Status Adjustments',
    ],
    approach: 'We streamline the complex work permit process, ensuring compliance with Cameroonian immigration laws while minimizing delays and maximizing approval chances for our clients.',
    experience: 'Successfully processed over 300 work permit applications with a 98% approval rate, serving multinational corporations and individual professionals.',
    keyBenefits: [
      'Fast-track processing expertise',
      'Government liaison services',
      'Multilingual documentation support',
      'Ongoing compliance monitoring',
    ],
  },
  {
    id: 'oil-gas-energy',
    title: 'Oil, Gas, Energy And Mining',
    icon: Building,
    description: 'Comprehensive legal services for energy sector investments, mining operations, and natural resource development.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Energy Project Development',
      'Mining Concession Applications',
      'Joint Venture Agreements',
      'Environmental Compliance',
      'Regulatory Advisory',
      'Contract Negotiations',
      'Petroleum Licensing',
      'Infrastructure Development',
    ],
    approach: 'We provide strategic legal counsel for complex energy and mining projects, ensuring regulatory compliance while protecting our clients\' investments in Cameroon\'s natural resource sector.',
    experience: 'Advised on energy projects worth over 50 billion CFA francs, including major oil and gas developments and mining concessions across Cameroon.',
    keyBenefits: [
      'Deep regulatory knowledge',
      'Government relations expertise',
      'Environmental law specialization',
      'International project experience',
    ],
  },
  {
    id: 'banking-finance',
    title: 'Banking And Finance',
    icon: Briefcase,
    description: 'Sophisticated financial law services for banking institutions, fintech companies, and investment transactions.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Banking Regulations',
      'Securities Law',
      'Project Finance',
      'Fintech Compliance',
      'Investment Structuring',
      'Capital Markets',
      'Islamic Finance',
      'Cross-border Transactions',
    ],
    approach: 'We navigate the complex financial regulatory landscape, providing innovative legal solutions that enable our clients to achieve their financial objectives while maintaining full compliance.',
    experience: 'Structured financial transactions exceeding 100 billion CFA francs and advised leading banks and financial institutions across Central Africa.',
    keyBenefits: [
      'CEMAC regulatory expertise',
      'Fintech innovation support',
      'Risk management strategies',
      'Capital optimization solutions',
    ],
  },
  {
    id: 'labour-employment',
    title: 'Labour And Employment',
    icon: Heart,
    description: 'Comprehensive employment law services protecting both employers and employees in workplace matters.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Employment Contracts',
      'Workplace Disputes',
      'Labor Union Relations',
      'Termination Procedures',
      'Discrimination Claims',
      'Compensation Structures',
      'Workplace Safety Compliance',
      'Executive Employment Agreements',
    ],
    approach: 'We balance the interests of employers and employees, creating fair workplace solutions that promote productivity while protecting rights and ensuring legal compliance.',
    experience: 'Successfully resolved over 200 employment disputes and advised multinational companies on workforce management across diverse industries.',
    keyBenefits: [
      'Bilingual legal expertise',
      'Cultural sensitivity training',
      'Preventive legal strategies',
      'Alternative dispute resolution',
    ],
  },
  {
    id: 'government-procurement',
    title: 'Government Procurement And Contracts',
    icon: Shield,
    description: 'Expert representation in government contracting, public procurement processes, and regulatory compliance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Tender Preparation',
      'Contract Negotiations',
      'Compliance Advisory',
      'Dispute Resolution',
      'Regulatory Guidance',
      'Public-Private Partnerships',
      'Bid Protest Defense',
      'Performance Bond Issues',
    ],
    approach: 'We guide clients through complex government procurement processes, ensuring compliance with public contracting laws while maximizing competitive advantages.',
    experience: 'Secured government contracts worth over 75 billion CFA francs and successfully defended numerous bid protests and contract disputes.',
    keyBenefits: [
      'Government relations network',
      'Procurement law specialization',
      'Risk mitigation strategies',
      'Performance optimization',
    ],
  },
  {
    id: 'doing-business-africa',
    title: 'Doing Business In Africa',
    icon: Globe,
    description: 'Strategic legal counsel for international businesses expanding into African markets and cross-border transactions.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Market Entry Strategies',
      'Cross-Border Transactions',
      'Regulatory Compliance',
      'Joint Ventures',
      'Investment Protection',
      'Cultural Legal Advisory',
      'Tax Optimization',
      'Regional Trade Agreements',
    ],
    approach: 'We leverage our deep understanding of African business culture and legal systems to help international clients successfully establish and expand their operations across the continent.',
    experience: 'Facilitated over 150 successful market entries for international companies, with combined investments exceeding 200 billion CFA francs.',
    keyBenefits: [
      'Pan-African legal network',
      'Cultural competency training',
      'Multi-jurisdictional expertise',
      'Investment protection strategies',
    ],
  },
  {
    id: 'immigration',
    title: 'Immigration',
    icon: Plane,
    description: 'Comprehensive immigration services for individuals and businesses navigating Cameroon\'s immigration system.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Visa Applications',
      'Citizenship Procedures',
      'Family Reunification',
      'Business Immigration',
      'Deportation Defense',
      'Status Adjustments',
      'Asylum Applications',
      'Investment Visas',
    ],
    approach: 'We provide compassionate and effective immigration services, helping individuals and families navigate complex immigration laws while pursuing their dreams in Cameroon.',
    experience: 'Successfully handled over 500 immigration cases with a 95% success rate, including complex asylum and citizenship applications.',
    keyBenefits: [
      'Multilingual support services',
      'Family-focused approach',
      'Emergency processing expertise',
      'Long-term residency planning',
    ],
  },
  {
    id: 'trademarks-patents',
    title: 'Trademarks And Patents',
    icon: Lightbulb,
    description: 'Protecting intellectual property rights through trademark registration, patent applications, and IP enforcement.',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Trademark Registration',
      'Patent Applications',
      'IP Portfolio Management',
      'Infringement Actions',
      'Licensing Agreements',
      'Brand Protection',
      'Copyright Registration',
      'Trade Secret Protection',
    ],
    approach: 'We help innovators and businesses protect their intellectual property assets through strategic registration, enforcement, and licensing strategies that maximize commercial value.',
    experience: 'Successfully registered over 400 trademarks and patents while handling numerous IP enforcement cases across diverse industries.',
    keyBenefits: [
      'OAPI expertise',
      'International filing strategies',
      'Brand monitoring services',
      'IP valuation and licensing',
    ],
  },
  {
    id: 'aviation-site',
    title: 'Aviation And Site Acquisition',
    icon: Plane,
    description: 'Specialized legal services for aviation industry and strategic site acquisition for business development.',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Aviation Regulations',
      'Aircraft Transactions',
      'Site Acquisition',
      'Zoning Compliance',
      'Lease Negotiations',
      'Development Permits',
      'Airport Operations Law',
      'Aviation Insurance',
    ],
    approach: 'We provide specialized expertise in aviation law and strategic site acquisition, helping clients navigate complex regulatory requirements while securing optimal locations for their operations.',
    experience: 'Advised on aviation projects worth over 25 billion CFA francs and facilitated strategic site acquisitions for major infrastructure developments.',
    keyBenefits: [
      'ICAO compliance expertise',
      'Strategic location analysis',
      'Regulatory approval facilitation',
      'Risk assessment and mitigation',
    ],
  },
  {
    id: 'maritime',
    title: 'Maritime',
    icon: Ship,
    description: 'Comprehensive maritime law services covering shipping, port operations, and marine commercial transactions.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    services: [
      'Shipping Contracts',
      'Port Operations',
      'Marine Insurance',
      'Vessel Registration',
      'Maritime Disputes',
      'Cargo Claims',
      'Admiralty Law',
      'Offshore Operations',
    ],
    approach: 'We provide comprehensive maritime legal services, leveraging Cameroon\'s strategic coastal position to help clients navigate complex shipping and marine commercial law.',
    experience: 'Handled maritime disputes worth over 30 billion CFA francs and advised major shipping companies on port operations and vessel transactions.',
    keyBenefits: [
      'Port authority relations',
      'International maritime law',
      'Cargo dispute resolution',
      'Vessel financing expertise',
    ],
  },
];

export default function PracticeAreas() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedArea(expandedArea === id ? null : id);
  };

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
              Our <span className="text-gold-secondary">Practice Areas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal services across multiple practice areas, 
              delivered with expertise and dedication to achieving the best outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              const isExpanded = expandedArea === area.id;

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="lg:col-span-1"
                >
                  <Card className="h-full bg-white dark:bg-card hover:shadow-xl transition-all duration-300 overflow-hidden practice-area-card group">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden practice-area-image">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-navy-primary/20 to-transparent transition-all duration-500 group-hover:from-navy-primary/60 group-hover:via-navy-primary/10"></div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-gold-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-gold-secondary/30">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl font-serif font-bold text-white mb-2 transition-all duration-300 group-hover:text-gold-secondary transform group-hover:translate-y-[-2px]">
                          {area.title}
                        </h2>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {area.description}
                      </p>

                      <Button
                        onClick={() => toggleExpanded(area.id)}
                        variant="outline"
                        className="w-full mb-4"
                      >
                        {isExpanded ? 'Show Less' : 'Learn More'}
                        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                      </Button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div>
                              <h3 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-3">
                                Our Services
                              </h3>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {area.services.map((service, serviceIndex) => (
                                  <li key={serviceIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-gold-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-3">
                                Our Approach
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                {area.approach}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-3">
                                Experience & Results
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                {area.experience}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-3">
                                Key Benefits
                              </h3>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {area.keyBenefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-emerald-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button className="flex-1 bg-gold-secondary hover:bg-gold-secondary/90" asChild>
                                  <a href="/contact">
                                    Schedule Consultation
                                  </a>
                                </Button>
                                <Button variant="outline" className="flex-1" asChild>
                                  <a href="https://wa.me/237679693543" target="_blank">
                                    Chat on WhatsApp
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Our Track Record
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to excellence across all practice areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Cases Handled', description: 'Across all practice areas' },
              { number: '95%', label: 'Success Rate', description: 'Client satisfaction guaranteed' },
              { number: '500B+', label: 'CFA Value', description: 'In transactions facilitated' },
              { number: '15+', label: 'Years Experience', description: 'Serving clients in Cameroon' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-gold-secondary mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-primary dark:text-white mb-6">
              Need Expert Legal Assistance?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t navigate complex legal challenges alone. Our experienced team across all practice areas 
              is ready to provide the expert guidance and representation you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-white hover:opacity-90" asChild>
                <a href="/contact">
                  Schedule Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-primary" asChild>
                <a href="https://wa.me/237679693543" target="_blank">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}