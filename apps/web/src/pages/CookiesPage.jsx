import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';

const CookiesPage = () => {
  const effectiveDate = 'February 15, 2026';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "description": "Cookie Policy for MEDAIT LLC",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY.name,
      "url": "https://medaitllc.com"
    },
    "datePublished": effectiveDate,
    "dateModified": effectiveDate
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | MEDAIT LLC</title>
        <meta name="description" content="Cookie Policy for MEDAIT LLC. Learn about how we use cookies and similar tracking technologies on our websites." />
        <meta property="og:title" content="Cookie Policy | MEDAIT LLC" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Section background="light">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-medait-dark mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Effective Date: {effectiveDate}
            </p>

            <Card>
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">1. What Are Cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p className="text-gray-700">
                    This Cookie Policy explains how MEDAIT LLC and its brands (AnfaWord.site, LikeParents.com, and AnfaStyles.shop) use cookies and similar tracking technologies on our websites.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.1 Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for our websites to function properly. They enable core functionality such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Security and authentication</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                    <li>Shopping cart functionality (for e-commerce sites)</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>Duration:</strong> Session cookies (deleted when you close your browser) or persistent cookies (remain for a specified period)
                  </p>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.2 Performance and Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies help us understand how visitors interact with our websites by collecting and reporting information anonymously:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Pages visited and time spent on each page</li>
                    <li>Click patterns and navigation paths</li>
                    <li>Error messages encountered</li>
                    <li>Device and browser information</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>Examples:</strong> Google Analytics, internal analytics tools
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Duration:</strong> Typically 1-2 years
                  </p>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.3 Functionality Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies allow our websites to remember choices you make and provide enhanced features:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Language preferences</li>
                    <li>Region or location settings</li>
                    <li>Display preferences (text size, contrast)</li>
                    <li>Previously entered information in forms</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>Duration:</strong> Varies, typically 30 days to 2 years
                  </p>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.4 Targeting and Advertising Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are used to deliver advertisements relevant to you and your interests:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Track visits across websites</li>
                    <li>Build a profile of your interests</li>
                    <li>Deliver targeted advertising</li>
                    <li>Measure advertising campaign effectiveness</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>Examples:</strong> Google Ads, Facebook Pixel, advertising networks
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Duration:</strong> Typically 30 days to 2 years
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">3. Third-Party Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Some cookies on our websites are placed by third-party services. These may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Analytics providers:</strong> Google Analytics, to help us understand website usage</li>
                    <li><strong>Social media platforms:</strong> Facebook, Twitter, LinkedIn for social sharing features</li>
                    <li><strong>Advertising networks:</strong> To deliver targeted advertisements</li>
                    <li><strong>Payment processors:</strong> For secure transaction processing</li>
                    <li><strong>Content delivery networks:</strong> To optimize website performance</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We do not control these third-party cookies. Please refer to the respective third parties' privacy policies for more information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">4. How We Use Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies for various purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To improve user experience and website functionality</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To personalize content and advertisements</li>
                    <li>To remember your preferences and settings</li>
                    <li>To enable social media features</li>
                    <li>To detect and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">5. Managing Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    You have several options for managing cookies:
                  </p>
                  
                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">5.1 Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>View and delete cookies</li>
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Clear cookies when you close your browser</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">5.2 Opt-Out Tools</h3>
                  <p className="text-gray-700 mb-4">
                    You can opt out of certain types of cookies:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                    <li><strong>Advertising cookies:</strong> Visit the Network Advertising Initiative or Digital Advertising Alliance opt-out pages</li>
                  </ul>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">5.3 Impact of Disabling Cookies</h3>
                  <p className="text-gray-700">
                    Please note that disabling cookies may affect the functionality of our websites. Some features may not work properly, and you may not be able to access certain areas or services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">6. Do Not Track Signals</h2>
                  <p className="text-gray-700">
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we are monitoring developments in this area.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">7. Updates to This Cookie Policy</h2>
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the updated policy on this page with a new effective date.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">8. More Information</h2>
                  <p className="text-gray-700 mb-4">
                    For more information about how we handle your personal data, please see our Privacy Policy.
                  </p>
                  <p className="text-gray-700">
                    For general information about cookies, you can visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-medait-primary hover:underline">www.allaboutcookies.org</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">9. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-medait-light p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>MEDAIT LLC</strong><br />
                      {COMPANY.address.street}<br />
                      {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                      Email: {COMPANY.contact.email}<br />
                      Phone: {COMPANY.contact.phone}
                    </p>
                  </div>
                </section>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default CookiesPage;