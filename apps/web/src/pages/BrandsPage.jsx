import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BRANDS, SEO } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import BrandCard from '@/components/BrandCard.jsx';

const BrandsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Our Brands | MEDAIT LLC</title>
        <meta name="description" content="Explore MEDAIT LLC's portfolio of digital brands: AnfaWord.site (WordPress Services), LikeParents.com (Parenting Media), and AnfaStyles.shop (Eco-Friendly Apparel)." />
        <meta property="og:title" content="Our Brands | MEDAIT LLC" />
        <meta property="og:description" content="Explore MEDAIT LLC's portfolio of digital brands: AnfaWord.site (WordPress Services), LikeParents.com (Parenting Media), and AnfaStyles.shop (Eco-Friendly Apparel)." />
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
              Our Brands
            </h1>
            <p className="text-xl text-gray-700">
              Each brand in our portfolio represents our commitment to excellence, sustainability, and professional service in its respective market.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Brands Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, transition: { delay: index * 0.15, duration: 0.6 } }}
              >
                <BrandCard brand={brand} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed Brand Information */}
      <Section background="light">
        <Container>
          <div className="space-y-16">
            {/* AnfaWord.site */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <div className="inline-block bg-medait-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  WordPress Services
                </div>
                <h2 className="text-3xl font-bold text-medait-dark mb-4">
                  AnfaWord.site
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {BRANDS[0].description}
                </p>
                <div className="space-y-3">
                  <h3 className="font-bold text-medait-dark">Services Include:</h3>
                  <ul className="space-y-2">
                    {BRANDS[0].services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-medait-primary mt-1">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-medait-primary to-[#256029] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose AnfaWord.site?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Expert WordPress developers with years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Custom solutions tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Ongoing support and maintenance packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Focus on performance, security, and SEO</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm italic">
                  Operated by MEDAIT LLC
                </p>
              </div>
            </motion.div>

            {/* LikeParents.com */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="order-2 lg:order-1 bg-gradient-to-br from-medait-brown to-[#4a342a] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What Makes Us Different?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Evidence-based parenting advice and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Honest product reviews from real parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Supportive community for modern families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Regular updates with fresh, relevant content</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm italic">
                  Operated by MEDAIT LLC
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-medait-brown text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Media & Publishing
                </div>
                <h2 className="text-3xl font-bold text-medait-dark mb-4">
                  LikeParents.com
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {BRANDS[1].description}
                </p>
                <div className="space-y-3">
                  <h3 className="font-bold text-medait-dark">Content Categories:</h3>
                  <ul className="space-y-2">
                    {BRANDS[1].services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-medait-brown mt-1">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AnfaStyles.shop */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <div className="inline-block bg-medait-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  E-commerce
                </div>
                <h2 className="text-3xl font-bold text-medait-dark mb-4">
                  AnfaStyles.shop
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {BRANDS[2].description}
                </p>
                <div className="space-y-3">
                  <h3 className="font-bold text-medait-dark">Product Features:</h3>
                  <ul className="space-y-2">
                    {BRANDS[2].services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-medait-primary mt-1">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-medait-primary to-[#256029] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Eco-friendly materials and sustainable production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Unique designs celebrating nature and permaculture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Print-on-demand model reduces waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Quality products that make a statement</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm italic">
                  Operated by MEDAIT LLC
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BrandsPage;