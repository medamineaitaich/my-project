import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Hammer, Zap, Circle } from "lucide-react";
import { SERVICES, WORK_PROCESS } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import Card from '@/components/Card.jsx';

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Services | MEDAIT LLC</title>
        <meta name="description" content="MEDAIT LLC offers WordPress development, digital media publishing, e-commerce operations, print-on-demand services, and online business infrastructure management." />
        <meta property="og:title" content="Services | MEDAIT LLC" />
        <meta property="og:description" content="MEDAIT LLC offers WordPress development, digital media publishing, e-commerce operations, print-on-demand services, and online business infrastructure management." />
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
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Comprehensive digital solutions powered by expertise, innovation, and a commitment to excellence.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, transition: { delay: index * 0.1, duration: 0.6 } }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section background="light">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven three-step process ensures successful project delivery and long-term value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORK_PROCESS.map((step, index) => {
              const STEP_ICON_MAP = {
  Search,
  Hammer,
  Zap,
};

const IconComponent = STEP_ICON_MAP[step.icon] || Circle;

              
              return (
                <motion.div
                  key={step.step}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={{ ...fadeInUp, transition: { delay: index * 0.15, duration: 0.6 } }}
                >
                  <Card hover className="text-center h-full">
                    <div className="w-16 h-16 bg-medait-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-medait-primary mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-medait-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Service Details */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-br from-medait-primary to-[#256029] text-white">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p className="text-gray-100">
                    Years of experience across multiple digital disciplines, from technical development to creative content.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Integration</h3>
                  <p className="text-gray-100">
                    Seamless coordination across services, ensuring all aspects of your digital presence work together.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                  <p className="text-gray-100">
                    Eco-conscious practices and long-term thinking guide our approach to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Support</h3>
                  <p className="text-gray-100">
                    Ongoing maintenance, updates, and technical support to keep your digital assets performing optimally.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today to discuss your project requirements and learn how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-medait-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#256029] transition-colors w-full sm:w-auto">
                  Contact Us
                </button>
              </a>
              <a href="/brands">
                <button className="border-2 border-medait-primary text-medait-primary px-8 py-4 rounded-lg font-semibold hover:bg-medait-primary hover:text-white transition-colors w-full sm:w-auto">
                  View Our Brands
                </button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;