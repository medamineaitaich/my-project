import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';

const TermsPage = () => {
  const effectiveDate = 'February 15, 2026';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for MEDAIT LLC",
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
        <title>Terms of Service | MEDAIT LLC</title>
        <meta name="description" content="Terms of Service for MEDAIT LLC. Read our terms and conditions governing the use of our services and websites." />
        <meta property="og:title" content="Terms of Service | MEDAIT LLC" />
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Effective Date: {effectiveDate}
            </p>

            <Card>
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing or using any services, websites, or brands operated by MEDAIT LLC (including but not limited to AnfaWord.site, LikeParents.com, and AnfaStyles.shop), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                  <p className="text-gray-700">
                    These terms constitute a legally binding agreement between you and MEDAIT LLC, a Limited Liability Company registered in New Mexico, USA.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">2. Services Provided</h2>
                  <p className="text-gray-700 mb-4">
                    MEDAIT LLC operates multiple digital brands and provides various services including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>WordPress development and technical services</li>
                    <li>Digital media and content publishing</li>
                    <li>E-commerce operations and brand management</li>
                    <li>Print-on-demand product development and sales</li>
                    <li>Online business infrastructure management</li>
                  </ul>
                  <p className="text-gray-700">
                    Specific terms may apply to individual brands and services, which will be clearly communicated on the respective platforms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">3. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide accurate and complete information when required</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services in compliance with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights of MEDAIT LLC and third parties</li>
                    <li>Not engage in any activity that could harm our services or other users</li>
                    <li>Not attempt to gain unauthorized access to our systems or data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">4. Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    All content, designs, logos, trademarks, and materials on our websites and services are the property of MEDAIT LLC or our licensors. This includes but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Website designs and layouts</li>
                    <li>Product designs and graphics</li>
                    <li>Written content and articles</li>
                    <li>Software and code</li>
                    <li>Brand names and logos</li>
                  </ul>
                  <p className="text-gray-700">
                    You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">5. E-commerce Terms</h2>
                  <p className="text-gray-700 mb-4">
                    For purchases made through our e-commerce platforms (such as AnfaStyles.shop):
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>All prices are listed in USD unless otherwise specified</li>
                    <li>We reserve the right to modify prices at any time</li>
                    <li>Orders are subject to acceptance and availability</li>
                    <li>Payment must be received before order processing</li>
                    <li>Shipping times and costs vary by location and product</li>
                    <li>Return and refund policies are specified on individual product pages</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">6. Service Agreements</h2>
                  <p className="text-gray-700 mb-4">
                    For professional services (such as WordPress development):
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Specific project terms will be outlined in individual service agreements</li>
                    <li>Payment terms and schedules will be clearly communicated</li>
                    <li>Project timelines are estimates and may be subject to change</li>
                    <li>Client cooperation and timely feedback are required for project completion</li>
                    <li>Ownership and licensing terms will be specified in project agreements</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">7. Disclaimers and Limitations</h2>
                  <p className="text-gray-700 mb-4">
                    Our services are provided "as is" without warranties of any kind, either express or implied. MEDAIT LLC disclaims all warranties, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Accuracy or completeness of content</li>
                  </ul>
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, MEDAIT LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">8. Indemnification</h2>
                  <p className="text-gray-700">
                    You agree to indemnify and hold harmless MEDAIT LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">9. Modifications to Terms</h2>
                  <p className="text-gray-700">
                    MEDAIT LLC reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">10. Termination</h2>
                  <p className="text-gray-700">
                    We reserve the right to terminate or suspend access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">11. Governing Law</h2>
                  <p className="text-gray-700">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of New Mexico, USA, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of New Mexico.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For questions about these Terms of Service, please contact us:
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

export default TermsPage;