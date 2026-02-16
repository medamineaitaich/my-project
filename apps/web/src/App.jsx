import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import BrandsPage from '@/pages/BrandsPage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import LegalCompliancePage from '@/pages/LegalCompliancePage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import CookiesPage from '@/pages/CookiesPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import { SEO, COMPANY } from '@/lib/constants.js';

function App() {
  return (
    <Router>
      <Helmet>
        <title>{SEO.defaultTitle}</title>
        <meta name="description" content={SEO.defaultDescription} />
        
        {/* OpenGraph tags */}
        <meta property="og:site_name" content={COMPANY.name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@medaitllc" />
        
        {/* Additional meta tags */}
        <meta name="author" content={COMPANY.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SEO.siteUrl} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/legal-compliance" element={<LegalCompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;