import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import Section from '@/components/Section.jsx';
import Card from '@/components/Card.jsx';

const PrivacyPage = () => {
  const effectiveDate = 'February 15, 2026';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for MEDAIT LLC",
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
        <title>Privacy Policy | MEDAIT LLC</title>
        <meta name="description" content="Privacy Policy for MEDAIT LLC. Learn how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy | MEDAIT LLC" />
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Effective Date: {effectiveDate}
            </p>

            <Card>
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">1. Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    MEDAIT LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites or use our services, including AnfaWord.site, LikeParents.com, and AnfaStyles.shop.
                  </p>
                  <p className="text-gray-700">
                    By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.1 Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Communication preferences</li>
                    <li>Information provided in forms, surveys, or customer support interactions</li>
                  </ul>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you visit our websites, we may automatically collect certain information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, click patterns)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Referral sources and search terms</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the collected information for various purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To process transactions and send related information</li>
                    <li>To send administrative information, updates, and security alerts</li>
                    <li>To respond to customer service requests and support needs</li>
                    <li>To personalize user experience and deliver targeted content</li>
                    <li>To monitor and analyze usage patterns and trends</li>
                    <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                    <li>To send marketing communications (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">4.1 Service Providers</h3>
                  <p className="text-gray-700 mb-4">
                    We may share information with third-party service providers who perform services on our behalf, such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Payment processing</li>
                    <li>Email delivery and marketing automation</li>
                    <li>Web hosting and analytics</li>
                    <li>Customer support tools</li>
                    <li>Print-on-demand fulfillment partners</li>
                  </ul>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">4.2 Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    We may disclose information if required by law or in response to valid requests by public authorities.
                  </p>

                  <h3 className="text-xl font-bold text-medait-dark mb-3 mt-6">4.3 Business Transfers</h3>
                  <p className="text-gray-700">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">5. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Secure payment processing through PCI-compliant providers</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">6. Your Privacy Rights</h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Object:</strong> Object to certain processing of your information</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us using the information provided at the end of this policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience. For detailed information about our use of cookies, please see our Cookie Policy.
                  </p>
                  <p className="text-gray-700">
                    You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">8. Third-Party Links</h2>
                  <p className="text-gray-700">
                    Our websites may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700">
                    Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">10. Data Retention</h2>
                  <p className="text-gray-700">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When information is no longer needed, we will securely delete or anonymize it.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date." Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-medait-dark mb-4">12. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPage;