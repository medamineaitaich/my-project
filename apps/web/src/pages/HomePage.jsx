import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import { COMPANY, BRANDS, WHY_MEDAIT, SEO } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';
import Button from '@/components/Button.jsx';
import BrandCard from '@/components/BrandCard.jsx';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Home | MEDAIT LLC</title>
        <meta name="description" content={SEO.defaultDescription} />
        <meta property="og:title" content="MEDAIT LLC | Digital Commerce & Media Company" />
        <meta property="og:description" content={SEO.defaultDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MEDAIT LLC | Digital Commerce & Media Company" />
        <meta name="twitter:description" content={SEO.defaultDescription} />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1643267392842-29f8354e236c')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {COMPANY.name} — Digital Commerce & Media Company
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/85">
              Building sustainable digital brands and delivering professional services since {COMPANY.founded}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brands">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Explore Our Brands
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-medait-dark"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Trust Strip */}
      <Section background="light">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-medait-primary" />
              <span className="font-semibold text-medait-dark">
                Registered LLC in {COMPANY.jurisdiction}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-medait-primary" />
              <span className="font-semibold text-medait-dark">
                Established {COMPANY.founded}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-medait-primary" />
              <span className="font-semibold text-medait-dark">
                3 Active Brands
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section>
        <Container>
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark on-dark mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl on-dark mx-auto">
              We operate diverse digital brands and provide comprehensive services across e-commerce, media, and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.1, duration: 0.6 } }}
            >
              <Card hover>
                <div className="w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  E-commerce
                </h3>
                <p className="text-gray-700">
                  We operate AnfaStyles.shop, an eco-friendly print-on-demand store featuring nature and permaculture-themed apparel.
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
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  Media & Publishing
                </h3>
                <p className="text-gray-700">
                  LikeParents.com delivers valuable parenting content, resources, and community support for modern families.
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
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-medait-dark mb-3">
                  WordPress Services
                </h3>
                <p className="text-gray-700">
                  AnfaWord.site provides professional WordPress development, customization, and technical support services.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Brands Preview */}
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
              Our Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each brand represents our commitment to quality, sustainability, and professional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, transition: { delay: index * 0.1, duration: 0.6 } }}
              >
                <BrandCard brand={brand} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/brands">
              <Button variant="primary" size="lg" className="gap-2">
                View All Brands
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Why MEDAIT LLC */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center on-dark">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-medait-dark mb-6">
                Why Choose MEDAIT LLC?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We combine technical expertise, creative vision, and sustainable business practices to deliver exceptional results.
              </p>
              <ul className="space-y-4">
                {WHY_MEDAIT.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-medait-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, transition: { delay: 0.2, duration: 0.6 } }}
            >
              {/* Purple card => force readable text */}
              <Card className="bg-medait-primary text-white">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Ready to Work Together?
                </h3>
                <p className="mb-6 text-white/85">
                  Whether you need WordPress development, content publishing, or e-commerce solutions, we're here to help.
                </p>
                <Link to="/services">
                  <Button
                    variant="secondary"
                    className="bg-white text-medait-primary hover:bg-gray-100 border-white w-full sm:w-auto gap-2"
                  >
                    Explore Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Final CTA (Dark background => force readable text) */}
      <Section background="dark">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto text-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us today to discuss your project or learn more about our services and brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-medait-dark"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;

