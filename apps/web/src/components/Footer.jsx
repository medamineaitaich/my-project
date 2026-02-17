import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY, FOOTER_LINKS, BRANDS } from '@/lib/constants.js';
import Container from '@/components/Container.jsx';
import logo from '@/assets/Medait-footer-logo.png';

/**
 * Footer component with company info and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medait-dark text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo image */}
              <img
                src={logo}
                alt={`${COMPANY.name} logo`}
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-bold block">{COMPANY.name}</span>
                <span className="text-xs text-gray-400">{COMPANY.tagline}</span>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              A New Mexico-based digital commerce and media company.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.contact.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Brands</h3>
            <ul className="space-y-2">
              {BRANDS.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {COMPANY.name}. All rights reserved.</p>
            <p>Registered in {COMPANY.jurisdiction}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
