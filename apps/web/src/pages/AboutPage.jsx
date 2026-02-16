import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Briefcase } from 'lucide-react';
import { COMPANY, VALUES, SEO } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>About Us | MEDAIT LLC</title>
        <meta name="description" content="Learn about MEDAIT LLC's journey from sole proprietorship to a registered LLC, our mission, values, and commitment to sustainable digital commerce." />
        <meta property="og:title" content="About MEDAIT LLC" />
        <meta property="og:description" content="Learn about MEDAIT LLC's journey from sole proprietorship to a registered LLC, our mission, values, and commitment to sustainable digital commerce." />
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
              About {COMPANY.name}
            </h1>
            <p className="text-xl text-gray-700">
              Building sustainable digital brands and delivering professional services with integrity and innovation.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Company Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center on-dark">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-medait-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  MEDAIT LLC began as a vision to create meaningful digital experiences that combine commerce, media, and technology. What started as a sole proprietorship evolved into a registered Limited Liability Company in 2022, marking our commitment to professional growth and sustainable business practices.
                </p>
                <p>
                  Based in New Mexico, USA, we've built a diverse portfolio of digital brands that reflect our core values: sustainability, quality, innovation, and transparency. Each brand we operate serves a unique purpose while maintaining our high standards of excellence.
                </p>
                <p>
                  From WordPress development services to parenting media and eco-friendly e-commerce, our brands demonstrate our versatility and dedication to serving different communities with specialized expertise.
                </p>
                <p>
                  Today, MEDAIT LLC stands as a testament to what's possible when technical skill meets creative vision and environmental consciousness. We continue to grow, innovate, and contribute positively to the digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <Card className="bg-gradient-to-br from-medait-primary to-[#256029] text-white">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Founded</h3>
                    <p className="text-3xl font-bold">{COMPANY.founded}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jurisdiction</h3>
                    <p className="text-xl">{COMPANY.jurisdiction}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Type</h3>
                    <p className="text-xl">{COMPANY.businessType}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Active Brands</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission, Vision, Values */}
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
              Mission, Vision & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our guiding principles shape everything we do and every brand we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.1, duration: 0.6 } }}
            >
              <Card hover>
                <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-medait-primary" />
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To create and operate sustainable digital brands that deliver exceptional value while promoting environmental awareness and professional excellence.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <Card hover>
                <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-medait-primary" />
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be recognized as a leader in sustainable digital commerce, setting standards for quality, innovation, and environmental responsibility.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.3, duration: 0.6 } }}
            >
              <Card hover>
                <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-medait-primary" />
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  Our Values
                </h3>
                <p className="text-gray-700">
                  Sustainability, quality, innovation, and transparency guide every decision we make and every relationship we build.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, transition: { delay: index * 0.1, duration: 0.6 } }}
              >
                <Card className="h-full">
                  <h4 className="text-lg font-bold text-medait-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operating Model */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12 on-dark"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-medait-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-medait-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark mb-4">
                Our Operating Model
              </h2>
              <p className="text-lg text-gray-600">
                A diversified approach to digital business
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              <Card>
                <div className="space-y-6 text-gray-700">
                  <p>
                    MEDAIT LLC operates through a multi-brand strategy, where each brand serves a specific market segment while benefiting from shared infrastructure, expertise, and resources.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-medait-dark mb-2">
                        Brand Portfolio Management
                      </h3>
                      <p>
                        We develop, launch, and operate distinct brands that align with our core competencies. Each brand maintains its unique identity while adhering to our quality standards and values.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-medait-dark mb-2">
                        Service Excellence
                      </h3>
                      <p>
                        Our service brands (like AnfaWord.site) leverage our technical expertise to help other businesses succeed, creating a symbiotic relationship between our product and service offerings.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-medait-dark mb-2">
                        Sustainable Growth
                      </h3>
                      <p>
                        We prioritize sustainable, organic growth over rapid expansion. This approach ensures quality, maintains our values, and builds long-term value for all stakeholders.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-medait-dark mb-2">
                        Continuous Innovation
                      </h3>
                      <p>
                        We stay current with digital trends, technologies, and best practices, continuously improving our brands and services to meet evolving market needs.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
