"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  practiceArea: z.string().min(1, 'Please select a practice area'),
  urgency: z.string().min(1, 'Please select urgency level'),
  message: z.string().min(10, 'Please provide more details about your legal matter'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    details: [
      'Opposite Court Junction',
      'Buea - South West Region',
      'Cameroon',
      'P.O. Box: 526'
    ],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      '+237 679 693 543',
      '+237 243 265 817',
    ],
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: [
      'info@portiojurelawfirm.org',
      'contact@portiojurelawfirm.org',
    ],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Emergency Only',
    ],
  },
];

const practiceAreas = [
  'Corporate & Commercial Law',
  'Family & Divorce Law',
  'Property & Real Estate',
  'Criminal Defense',
  'Employment & Labour Law',
  'Intellectual Property Law',
  'Other',
];

const urgencyLevels = [
  'Low - General inquiry',
  'Medium - Need consultation within a week',
  'High - Need consultation within 2-3 days',
  'Urgent - Emergency legal matter',
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
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
              Contact <span className="text-gold-secondary">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your legal matters? Get in touch with our experienced 
              legal professionals for expert guidance and representation.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white dark:bg-card">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-serif font-bold text-navy-primary dark:text-white mb-4">
                    Schedule a Consultation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we&apos;ll get back to you within 24 hours to 
                    schedule your consultation.
                  </p>
                </div>

                {isSubmitted && (
                  <motion.div
                    className="bg-emerald-accent/10 border border-emerald-accent/20 rounded-lg p-4 mb-6 flex items-center space-x-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-accent" />
                    <div>
                      <p className="text-emerald-accent font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm text-emerald-accent/80">We&apos;ll contact you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <Input
                        {...register('firstName')}
                        placeholder="John"
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <Input
                        {...register('lastName')}
                        placeholder="Doe"
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        {...register('email')}
                        placeholder="john.doe@email.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        {...register('phone')}
                        placeholder="+237 6XX XXX XXX"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Practice Area *
                      </label>
                      <Select onValueChange={(value) => setValue('practiceArea', value)}>
                        <SelectTrigger className={errors.practiceArea ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select a practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          {practiceAreas.map((area, index) => (
                            <SelectItem key={index} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.practiceArea && (
                        <p className="text-red-500 text-sm mt-1">{errors.practiceArea.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Urgency Level *
                      </label>
                      <Select onValueChange={(value) => setValue('urgency', value)}>
                        <SelectTrigger className={errors.urgency ? 'border-red-500' : ''}>
                          <SelectValue placeholder="How urgent is this?" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level, index) => (
                            <SelectItem key={index} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.urgency && (
                        <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Please describe your legal matter in detail..."
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold-secondary hover:bg-gold-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                    Prefer to chat directly?
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-emerald-accent text-emerald-accent hover:bg-emerald-accent hover:text-white"
                    onClick={() => {
                      const message = encodeURIComponent(
                        "Hello! I'm interested in your legal services and would like to schedule a consultation."
                      );
                      window.open(`https://wa.me/237679693543?text=${message}`, '_blank');
                    }}
                  >
                    Continue on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-white dark:bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gold-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-navy-primary dark:text-white mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Google Maps */}
            <Card className="bg-white dark:bg-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6734507296375!2d9.266897314747317!3d4.159374346516754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061a6c7c2b86745%3A0x4e4c4e0c1b86745!2sBuea%2C%20Cameroon!5e0!3m2!1sen!2s!4v1642579800000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Portio & Jure Legal Partners Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-navy-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-300 mb-6">
                  For urgent legal matters, don&apos;t hesitate to contact us directly.
                </p>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white text-white hover:bg-white hover:text-navy-primary"
                    onClick={() => window.open('tel:+237679693543')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: +237 679 693 543
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white text-white hover:bg-white hover:text-navy-primary"
                    onClick={() => window.open('mailto:info@portiojurelawfirm.org')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us Directly
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}