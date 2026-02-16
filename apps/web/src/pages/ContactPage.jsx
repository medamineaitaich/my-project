import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';
import Button from '@/components/Button.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MEDAIT LLC</title>
        <meta name="description" content="Get in touch with MEDAIT LLC. Contact us for inquiries about our services, brands, or business opportunities." />
        <meta property="og:title" content="Contact Us | MEDAIT LLC" />
        <meta property="og:description" content="Get in touch with MEDAIT LLC. Contact us for inquiries about our services, brands, or business opportunities." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <Section background="light">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-medait-dark mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700">
              We'd love to hear from you. Get in touch with our team for inquiries, support, or collaboration opportunities.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Information & Form */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="on-dark"
            >
              <h2 className="text-3xl font-bold text-medait-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our services, want to discuss a project, or just want to say hello, we're here to help.
              </p>

              <div className="space-y-6">
                <Card hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-medait-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-medait-dark mb-1">Email</h3>
                      <a 
                        href={`mailto:${COMPANY.contact.email}`}
                        className="text-medait-primary hover:underline"
                      >
                        {COMPANY.contact.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-medait-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-medait-dark mb-1">Phone</h3>
                      <a 
                        href={`tel:${COMPANY.contact.phone}`}
                        className="text-medait-primary hover:underline"
                      >
                        {COMPANY.contact.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-medait-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-medait-dark mb-1">Address</h3>
                      <p className="text-gray-700">
                        {COMPANY.address.street}<br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                        {COMPANY.address.country}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-medait-dark mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medait-primary focus:border-transparent bg-white text-gray-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medait-primary focus:border-transparent bg-white text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medait-primary focus:border-transparent bg-white text-gray-900"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medait-primary focus:border-transparent resize-none bg-white text-gray-900"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Business Hours */}
      <Section background="light">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="text-center">
              <h2 className="text-2xl font-bold text-medait-dark mb-4">
                Business Hours
              </h2>
              <p className="text-gray-700 mb-4">
                We typically respond to inquiries within 1-2 business days.
              </p>
              <div className="text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM MST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
