/**
 * MEDAIT LLC Company Constants
 * @fileoverview Central configuration for company data, navigation, brands, and services
 */

/**
 * @typedef {Object} Brand
 * @property {string} name - Brand name
 * @property {string} url - Brand website URL
 * @property {string} description - Brand description
 * @property {string} focusArea - Primary focus area
 * @property {string} tagline - Brand tagline
 */

/**
 * @typedef {Object} Service
 * @property {string} name - Service name
 * @property {string} description - Service description
 * @property {string[]} features - List of service features
 * @property {string} icon - Lucide icon name
 */

/**
 * @typedef {Object} NavigationLink
 * @property {string} label - Link label
 * @property {string} path - Link path
 */

// Company Information
export const COMPANY = {
  name: 'MEDAIT LLC',
  legalName: 'MEDAIT LLC',
  tagline: 'Digital Commerce & Media Company',
  founded: 2026,
  jurisdiction: 'New Mexico, USA',
  businessType: 'E-commerce & AdMedia Company',
  
  address: {
    street: '1209 MOUNTAIN ROAD PL NE STE R',
    city: 'Albuquerque',
    state: 'NM',
    zip: '87110',
    country: 'USA'
  },
  
  contact: {
    phone: '+1 (202) 773-7432',
    email: 'CONTACT@MEDAITLLC.COM',
    supportEmail: 'CONTACT@MEDAITLLC.COM'
  },
  
  social: {
    linkedin: 'https://linkedin.com/company/medait-llc',
    twitter: 'https://twitter.com/medaitllc'
  }
};

// Brand Colors
export const COLORS = {
  primary: '#2E7D32',      // Green
  secondary: '#5D4037',    // Brown
  light: '#F1F8E9',        // Light Green
  dark: '#1B1B1B',         // Dark
  white: '#FFFFFF',
  accent: '#4CAF50'        // Lighter green for accents
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Brands', path: '/brands' },
  { label: 'Services', path: '/services' },
  { label: 'Legal & Compliance', path: '/legal-compliance' },
  { label: 'Contact', path: '/contact' }
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Brands', path: '/brands' },
    { label: 'Services', path: '/services' },
    { label: 'Legal & Compliance', path: '/legal-compliance' }
  ],
  legal: [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Cookie Policy', path: '/cookies' }
  ],
  contact: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Support', path: '/contact' }
  ]
};

// Brands Data
export const BRANDS = [
  {
    name: 'AnfaWord.site',
    url: 'https://anfaword.site',
    description: 'Professional WordPress development and technical services for businesses and content creators.',
    focusArea: 'WordPress Services',
    tagline: 'Expert WordPress Solutions',
    services: [
      'Custom WordPress Development',
      'Theme Customization',
      'Plugin Development',
      'Site Optimization',
      'Technical Support'
    ]
  },
  {
    name: 'LikeParents.com',
    url: 'https://likeparents.com',
    description: 'A comprehensive parenting blog offering advice, tips, and resources for modern families.',
    focusArea: 'Media & Publishing',
    tagline: 'Parenting Wisdom & Resources',
    services: [
      'Parenting Articles & Guides',
      'Product Reviews',
      'Family Activity Ideas',
      'Educational Resources',
      'Community Support'
    ]
  },
  {
    name: 'AnfaStyles.shop',
    url: 'https://anfastyles.shop',
    description: 'Eco-friendly print-on-demand apparel featuring nature, permaculture, and sustainability themes.',
    focusArea: 'E-commerce',
    tagline: 'Nature-Inspired Sustainable Fashion',
    services: [
      'Eco-Friendly Apparel',
      'Nature-Themed Designs',
      'Permaculture Graphics',
      'Sustainable Materials',
      'Print-on-Demand Service'
    ]
  }
];

// Services Data
export const SERVICES = [
  {
    name: 'WordPress Development & Technical Services',
    description: 'Custom WordPress solutions, theme development, plugin creation, and ongoing technical support.',
    icon: 'Code2',
    features: [
      'Custom theme and plugin development',
      'WordPress site optimization',
      'Security hardening and maintenance',
      'Migration and hosting setup',
      'Technical consulting and support'
    ]
  },
  {
    name: 'Digital Media & Content Publishing',
    description: 'Content creation, editorial management, and digital publishing for blogs and media properties.',
    icon: 'FileText',
    features: [
      'Content strategy and planning',
      'Editorial management',
      'SEO optimization',
      'Multi-platform publishing',
      'Analytics and performance tracking'
    ]
  },
  {
    name: 'E-commerce Operations & Brand Management',
    description: 'End-to-end e-commerce management including product development, marketing, and customer service.',
    icon: 'ShoppingCart',
    features: [
      'Online store setup and management',
      'Product catalog development',
      'Order fulfillment coordination',
      'Customer service management',
      'Sales analytics and reporting'
    ]
  },
  {
    name: 'Print-on-Demand Product Development',
    description: 'Design, production, and fulfillment of custom print-on-demand products with eco-friendly focus.',
    icon: 'Shirt',
    features: [
      'Custom design creation',
      'Product mockup development',
      'Supplier coordination',
      'Quality control',
      'Sustainable material sourcing'
    ]
  },
  {
    name: 'Online Business Infrastructure Management',
    description: 'Comprehensive management of digital business operations, from hosting to automation.',
    icon: 'Server',
    features: [
      'Hosting and domain management',
      'Email and communication setup',
      'Business automation',
      'Security and backup systems',
      'Performance monitoring'
    ]
  }
];

// How We Work Process
export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Assess',
    description: 'We analyze your needs, goals, and current infrastructure to create a tailored strategy.',
    icon: 'Search'
  },
  {
    step: 2,
    title: 'Build',
    description: 'Our team develops and implements solutions using best practices and proven technologies.',
    icon: 'Hammer'
  },
  {
    step: 3,
    title: 'Operate',
    description: 'We manage, maintain, and optimize your digital assets for long-term success.',
    icon: 'Zap'
  }
];

// Company Values
export const VALUES = [
  {
    title: 'Sustainability',
    description: 'We prioritize eco-friendly practices and promote environmental awareness through our brands.'
  },
  {
    title: 'Quality',
    description: 'Every project receives meticulous attention to detail and professional execution.'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of digital trends and continuously improve our services and offerings.'
  },
  {
    title: 'Transparency',
    description: 'Clear communication and honest business practices guide all our relationships.'
  }
];

// Why Choose MEDAIT LLC
export const WHY_MEDAIT = [
  'Registered LLC with proven track record since 2022',
  'Multi-brand portfolio demonstrating diverse expertise',
  'Comprehensive digital services under one roof',
  'Focus on sustainable and eco-friendly business practices',
  'Professional team with technical and creative capabilities',
  'Commitment to quality and customer satisfaction'
];

// SEO Metadata
export const SEO = {
  defaultTitle: 'MEDAIT LLC | Digital Commerce & Media Company',
  titleTemplate: '%s | MEDAIT LLC',
  defaultDescription: 'MEDAIT LLC is a New Mexico-based digital commerce and media company operating WordPress services, parenting media, and eco-friendly e-commerce brands.',
  siteUrl: 'https://medaitllc.com',
  ogImage: '/og-image.jpg'
};
