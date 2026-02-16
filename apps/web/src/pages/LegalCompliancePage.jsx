import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, MapPin, Mail, Phone, Shield, FileCheck } from 'lucide-react';
import { COMPANY, BRANDS } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';

const LegalCompliancePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Legal & Compliance | MEDAIT LLC</title>
        <meta name="description" content="MEDAIT LLC legal information, business registration details, compliance notes, and official contact information. Registered in New Mexico, USA." />
        <meta property="og:title" content="Legal & Compliance | MEDAIT LLC" />
        <meta property="og:description" content="MEDAIT LLC legal information, business registration details, compliance notes, and official contact information. Registered in New Mexico, USA." />
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
            <div className="w-16 h-16 bg-medait-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-medait-dark mb-6">
              Legal & Compliance
            </h1>
            <p className="text-xl text-gray-700">
              Transparency and compliance are fundamental to our business operations.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Business Registration */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-medait-primary" />
                  <h2 className="text-2xl font-bold text-medait-dark">
                    Business Registration
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-600 block mb-1">
                      Legal Name
                    </span>
                    <span className="text-lg text-medait-dark font-semibold">
                      {COMPANY.legalName}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600 block mb-1">
                      Business Type
                    </span>
                    <span className="text-lg text-medait-dark">
                      Limited Liability Company (LLC)
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600 block mb-1">
                      Registration Jurisdiction
                    </span>
                    <span className="text-lg text-medait-dark">
                      {COMPANY.jurisdiction}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600 block mb-1">
                      Year Founded
                    </span>
                    <span className="text-lg text-medait-dark">
                      {COMPANY.founded}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-600 block mb-1">
                      Business Classification
                    </span>
                    <span className="text-lg text-medait-dark">
                      {COMPANY.businessType}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <Card className="h-full bg-medait-primary text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    Official Contact Information
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold block mb-1">
                          Registered Address
                        </span>
                        <span className="text-base">
                          {COMPANY.address.street}<br />
                          {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                          {COMPANY.address.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold block mb-1">
                          Phone
                        </span>
                        <span className="text-base">
                          {COMPANY.contact.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold block mb-1">
                          Email
                        </span>
                        <span className="text-base">
                          {COMPANY.contact.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Compliance Notes */}
      <Section background="light">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-medait-primary" />
                <h2 className="text-2xl font-bold text-medait-dark">
                  Compliance & Regulatory Notes
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  MEDAIT LLC is a properly registered Limited Liability Company in the state of New Mexico, United States. We maintain full compliance with all applicable federal, state, and local regulations governing our business operations.
                </p>
                <div>
                  <h3 className="font-bold text-medait-dark mb-2">Business Operations</h3>
                  <p>
                    Our business operations encompass e-commerce, digital media publishing, and professional services. We adhere to industry best practices and maintain appropriate business licenses and permits as required by law.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-medait-dark mb-2">Data Protection</h3>
                  <p>
                    We are committed to protecting the privacy and security of our customers' information. Our data handling practices comply with applicable privacy laws and regulations. For detailed information, please review our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-medait-dark mb-2">Consumer Protection</h3>
                  <p>
                    We maintain transparent business practices and honor all consumer protection laws. Our Terms of Service clearly outline the rights and responsibilities of all parties in business transactions.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-medait-dark mb-2">Intellectual Property</h3>
                  <p>
                    MEDAIT LLC respects intellectual property rights and expects others to do the same. We maintain proper ownership and licensing for all content, designs, and materials used in our business operations.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Brand Ownership */}
      <Section>
        <Container>
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark mb-4">
              Brand Ownership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The following brands are owned and operated by MEDAIT LLC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, transition: { delay: index * 0.1, duration: 0.6 } }}
              >
                <Card hover className="text-center">
                  <h3 className="text-xl font-bold text-medait-dark mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-medait-primary font-semibold mb-3">
                    {brand.focusArea}
                  </p>
                  <p className="text-sm text-gray-600">
                    Owned and operated by<br />
                    <span className="font-semibold text-medait-dark">{COMPANY.name}</span>
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact for Legal Inquiries */}
      <Section background="light">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-medait-dark text-white">
              <h2 className="text-2xl font-bold mb-4">
                Legal Inquiries
              </h2>
              <p className="mb-6">
                For legal matters, compliance questions, or official business inquiries, please contact us at:
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  {COMPANY.contact.email}
                </p>
                <p>
                  {COMPANY.contact.phone}
                </p>
              </div>
              <p className="mt-6 text-sm text-gray-300">
                Please allow 2-3 business days for a response to legal inquiries.
              </p>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default LegalCompliancePage;