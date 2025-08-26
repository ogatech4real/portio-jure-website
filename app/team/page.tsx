"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Award, GraduationCap, MapPin, Scale, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const team = [
  {
    id: 1,
    name: 'Barrister Kumfa Jude Kwenyui',
    role: 'Managing Partner & Founder',
    specialization: 'Corporate Law, Energy & Mining, Government Contracts',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'j.kwenyui@portiojurelawfirm.org',
    phone: '+237 679 693 543',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Court of Cameroon',
    education: [
      'LL.B - University of Buea',
      'Barrister at Law - Cameroon Bar Association',
      'Advanced Corporate Law Certification',
    ],
    experience: '16+ years',
    languages: ['English', 'French'],
    achievements: [
      'Founded Portio Jure Legal Partners in 2008',
      'Successfully handled over 500 complex legal cases',
      'Expert in energy sector and government procurement',
      'Recognized leader in Cameroonian legal community',
    ],
    bio: 'Learned Barrister Kumfa Jude Kwenyui founded Portio Jure in 2008 with a vision to bring together outstanding legal minds defined by integrity, resilience, and innovation. As Managing Partner, he has built the firm into one of Cameroon\'s most dynamic law practices, specializing in complex corporate transactions and government contracts.',
    testimonial: {
      quote: "Barrister Kwenyui's leadership and legal expertise have been instrumental in our company's success in Cameroon.",
      client: "International Energy Corporation"
    }
  },
  {
    id: 2,
    name: 'Barrister Sichui John Kameni',
    role: 'Senior Partner',
    specialization: 'Cross-Border Transactions, Banking & Finance',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 's.kameni@portiojurelawfirm.org',
    phone: '+237 243 265 817',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    education: [
      'LL.B - University of Yaoundé I',
      'LL.M in International Law',
      'Nigerian Bar Association Certification',
    ],
    experience: '14+ years',
    languages: ['English', 'French'],
    achievements: [
      'Dual jurisdiction expertise in Cameroon and Nigeria',
      'Handled cross-border transactions worth over 50 billion CFA',
      'Expert in CEMAC banking regulations',
      'Published author on West African commercial law',
    ],
    bio: 'Barrister Sichui John Kameni brings invaluable dual-jurisdiction expertise to Portio Jure, qualified to practice in both Cameroon and Nigeria. His specialization in cross-border transactions and banking law makes him essential for clients operating across West Africa.',
    testimonial: {
      quote: "Barrister Kameni's dual jurisdiction expertise was crucial for our expansion across West Africa.",
      client: "Regional Banking Group"
    }
  },
  {
    id: 3,
    name: 'Barrister Kumfa Emmanuel',
    role: 'Senior Associate',
    specialization: 'Corporate Law, Immigration & Work Permits',
    image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'e.kumfa@portiojurelawfirm.org',
    phone: '+237 679 693 544',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    education: [
      'LL.B - University of Buea',
      'Immigration Law Specialization',
      'Nigerian Bar Association Certification',
    ],
    experience: '12+ years',
    languages: ['English', 'French'],
    achievements: [
      'Successfully processed over 300 work permit applications',
      'Expert in corporate immigration compliance',
      'Dual jurisdiction practice in Cameroon and Nigeria',
      '98% success rate in immigration cases',
    ],
    bio: 'Barrister Kumfa Emmanuel specializes in corporate law and immigration matters, with particular expertise in work permits and business immigration. His dual jurisdiction qualification allows him to serve clients across Cameroon and Nigeria effectively.',
    testimonial: {
      quote: "Barrister Emmanuel's expertise in work permits made our international expansion seamless.",
      client: "Multinational Technology Company"
    }
  },
  {
    id: 4,
    name: 'Barrister Nkwelle Mesape',
    role: 'Associate',
    specialization: 'Labour & Employment Law, Dispute Resolution',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'n.mesape@portiojurelawfirm.org',
    phone: '+237 679 693 545',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Court of Cameroon',
    education: [
      'LL.B - University of Douala',
      'Labour Law Specialization',
      'Alternative Dispute Resolution Certification',
    ],
    experience: '10+ years',
    languages: ['English', 'French'],
    achievements: [
      'Successfully resolved over 200 employment disputes',
      'Expert in Cameroonian labour law',
      'Certified mediator and arbitrator',
      'Advocate for workplace rights and compliance',
    ],
    bio: 'Barrister Nkwelle Mesape is a dedicated employment law specialist with extensive experience in labour disputes and workplace compliance. Her expertise in alternative dispute resolution helps clients resolve conflicts efficiently while preserving business relationships.',
    testimonial: {
      quote: "Barrister Mesape's mediation skills helped us resolve a complex labour dispute amicably.",
      client: "Manufacturing Company CEO"
    }
  },
  {
    id: 5,
    name: 'Barrister Fombon Jerry',
    role: 'Associate',
    specialization: 'Real Estate Law, Property Transactions',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'f.jerry@portiojurelawfirm.org',
    phone: '+237 679 693 546',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Court of Cameroon',
    education: [
      'LL.B - University of Buea',
      'Real Estate Law Specialization',
      'Property Development Certification',
    ],
    experience: '9+ years',
    languages: ['English', 'French'],
    achievements: [
      'Handled property transactions worth over 20 billion CFA',
      'Expert in Cameroonian land law and regulations',
      'Specialist in commercial real estate development',
      'Advisor to major property developers',
    ],
    bio: 'Barrister Fombon Jerry specializes in real estate law and property transactions, providing comprehensive legal services for both residential and commercial property matters. His expertise covers the full spectrum of property law in Cameroon.',
    testimonial: {
      quote: "Barrister Jerry's expertise in property law was essential for our real estate development project.",
      client: "Property Development Group"
    }
  },
  {
    id: 6,
    name: 'Barrister Njeng Humphrey',
    role: 'Associate',
    specialization: 'Maritime Law, International Trade',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'n.humphrey@portiojurelawfirm.org',
    phone: '+237 679 693 547',
    linkedin: '#',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    education: [
      'LL.B - University of Yaoundé I',
      'Maritime Law Specialization',
      'International Trade Law Certification',
    ],
    experience: '11+ years',
    languages: ['English', 'French'],
    achievements: [
      'Expert in maritime and shipping law',
      'Handled major port operations disputes',
      'Dual jurisdiction practice expertise',
      'Advisor to shipping companies and port authorities',
    ],
    bio: 'Barrister Njeng Humphrey brings specialized expertise in maritime law and international trade, serving clients in Cameroon\'s strategic coastal operations. His dual jurisdiction qualification enhances his ability to handle complex cross-border maritime matters.',
    testimonial: {
      quote: "Barrister Humphrey's maritime law expertise was crucial for our shipping operations.",
      client: "International Shipping Company"
    }
  }
];

const supportStaff = [
  {
    name: 'Barrister Taminang Gilbert',
    role: 'Associate Barrister',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    specialization: 'Corporate Law & Compliance'
  },
  {
    name: 'Barrister Nyamboli Lum Wendy Epse Yezeh',
    role: 'Associate Barrister',
    credentials: 'Barrister and Solicitor of the Supreme Court of Cameroon',
    specialization: 'Family Law & Civil Litigation'
  },
  {
    name: 'Barrister Kinge Thompson Molonge',
    role: 'Associate Barrister',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    specialization: 'Criminal Defense & Constitutional Law'
  },
  {
    name: 'Barrister Nganje Shedill Molea',
    role: 'Associate Barrister',
    credentials: 'Barrister and Solicitor of the Supreme Courts of Cameroon and Nigeria',
    specialization: 'Intellectual Property & Technology Law'
  },
  {
    name: 'Barrister William Netonge Nguve',
    role: 'Associate Barrister',
    credentials: 'Barrister and Solicitor, Supreme Courts of Cameroon and Nigeria',
    specialization: 'Aviation Law & Regulatory Affairs'
  },
  {
    name: 'Pupil Barrister Sona Ngoh',
    role: 'Pupil Barrister',
    credentials: 'Advocate in Training of the Cameroonian Bar',
    specialization: 'Legal Research & Case Preparation'
  },
  {
    name: 'Mr. Besakeh Gabriel Besibang',
    role: 'Legal Collaborator',
    credentials: 'Legal Research Specialist',
    specialization: 'Legal Research & Documentation'
  },
  {
    name: 'Dzekem Sadrine',
    role: 'Legal Collaborator',
    credentials: 'Legal Assistant',
    specialization: 'Case Management & Client Relations'
  },
  {
    name: 'Acho Mi-Careme Atuh Epse Kumfa',
    role: 'Finance Analyst',
    credentials: 'Financial Management Specialist',
    specialization: 'Financial Analysis & Compliance'
  },
  {
    name: 'Catherine Menyoli Nyanyongo',
    role: 'Administrative Assistant',
    credentials: 'Administrative Support Specialist',
    specialization: 'Office Management & Client Services'
  },
  {
    name: 'Kumfa Michael Besakeh',
    role: 'Legal Collaborator',
    credentials: 'Legal Research Assistant',
    specialization: 'Legal Research & Case Support'
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

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
              Our <span className="text-gold-secondary">Expert Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet our experienced legal professionals who bring together outstanding legal minds 
              defined by integrity, resilience, and innovation to serve clients across Cameroon, Africa, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Senior Team Grid */}
      <section className="py-20 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Senior Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our senior partners and associates bring decades of combined experience in both national and international jurisdictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-card hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gold-secondary"
                        />
                        <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gold-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-navy-primary dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gold-secondary font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{member.credentials}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{member.specialization}</p>
                      
                      <div className="flex items-center justify-center space-x-3 mb-6">
                        <a href={`mailto:${member.email}`} className="p-2 bg-navy-primary text-white rounded-full hover:bg-gold-secondary transition-colors">
                          <Mail size={16} />
                        </a>
                        <a href={`tel:${member.phone}`} className="p-2 bg-navy-primary text-white rounded-full hover:bg-gold-secondary transition-colors">
                          <Phone size={16} />
                        </a>
                        <a href={member.linkedin} className="p-2 bg-navy-primary text-white rounded-full hover:bg-gold-secondary transition-colors">
                          <Linkedin size={16} />
                        </a>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => setSelectedMember(member)}
                          >
                            View Full Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          {selectedMember && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-serif text-navy-primary dark:text-white">
                                  {selectedMember.name} - {selectedMember.role}
                                </DialogTitle>
                              </DialogHeader>
                              
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                                <div className="lg:col-span-1">
                                  <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-48 h-48 mx-auto rounded-lg object-cover border-2 border-gold-secondary"
                                  />
                                  
                                  <div className="mt-6 space-y-4">
                                    <div>
                                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2 flex items-center">
                                        <Scale className="h-4 w-4 mr-2 text-gold-secondary" />
                                        Credentials
                                      </h4>
                                      <p className="text-sm text-gray-600 dark:text-gray-300">{selectedMember.credentials}</p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2 flex items-center">
                                        <MapPin className="h-4 w-4 mr-2 text-gold-secondary" />
                                        Experience
                                      </h4>
                                      <p className="text-sm text-gray-600 dark:text-gray-300">{selectedMember.experience}</p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Languages</h4>
                                      <p className="text-sm text-gray-600 dark:text-gray-300">{selectedMember.languages.join(', ')}</p>
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                      <a href={`mailto:${selectedMember.email}`} className="p-2 bg-gold-secondary text-white rounded-full hover:opacity-80 transition-opacity">
                                        <Mail size={16} />
                                      </a>
                                      <a href={`tel:${selectedMember.phone}`} className="p-2 bg-navy-primary text-white rounded-full hover:opacity-80 transition-opacity">
                                        <Phone size={16} />
                                      </a>
                                      <a href={selectedMember.linkedin} className="p-2 bg-navy-primary text-white rounded-full hover:opacity-80 transition-opacity">
                                        <Linkedin size={16} />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="lg:col-span-2 space-y-6">
                                  <div>
                                    <h4 className="font-semibold text-navy-primary dark:text-white mb-3">About</h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-semibold text-navy-primary dark:text-white mb-3 flex items-center">
                                      <GraduationCap className="h-5 w-5 mr-2 text-gold-secondary" />
                                      Education & Qualifications
                                    </h4>
                                    <ul className="space-y-2">
                                      {selectedMember.education.map((edu, index) => (
                                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                          <div className="w-1.5 h-1.5 bg-gold-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                          {edu}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-semibold text-navy-primary dark:text-white mb-3 flex items-center">
                                      <Award className="h-5 w-5 mr-2 text-gold-secondary" />
                                      Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                      {selectedMember.achievements.map((achievement, index) => (
                                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                          <div className="w-1.5 h-1.5 bg-gold-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                          {achievement}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-soft-gray dark:bg-gray-800 rounded-lg p-4">
                                    <h4 className="font-semibold text-navy-primary dark:text-white mb-3">Client Testimonial</h4>
                                    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-2">
                                      &ldquo;{selectedMember.testimonial.quote}&rdquo;
                                    </blockquote>
                                    <cite className="text-sm text-gold-secondary font-medium">
                                      - {selectedMember.testimonial.client}
                                    </cite>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team & Associates */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-primary dark:text-white mb-4">
              Associates & Support Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of associates, legal collaborators, and administrative professionals 
              who ensure excellence in every client engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full bg-white dark:bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        {member.role.includes('Barrister') ? (
                          <Scale className="h-6 w-6 text-white" />
                        ) : member.role.includes('Legal') ? (
                          <Briefcase className="h-6 w-6 text-white" />
                        ) : (
                          <Users className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-serif font-semibold text-navy-primary dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gold-secondary font-medium text-sm mb-2">{member.role}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{member.credentials}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.specialization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-20 bg-navy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Team Strength
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse team of legal professionals committed to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '17+', label: 'Legal Professionals', description: 'Barristers, Solicitors & Associates' },
              { number: '8+', label: 'Dual Jurisdiction', description: 'Qualified in Cameroon & Nigeria' },
              { number: '150+', label: 'Years Combined', description: 'Total team experience' },
              { number: '2000+', label: 'Cases Handled', description: 'Across all practice areas' },
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
      <section className="py-20 bg-soft-gray dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-primary dark:text-white mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experienced legal professionals are here to provide the expert guidance 
              and representation you need for your legal matters across Cameroon, Africa, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-white hover:opacity-90" asChild>
                <a href="/contact">
                  Schedule Consultation
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