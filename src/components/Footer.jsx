import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Customized E-Learning',
    'Ready Made E-Learning Content',
    'Gamification and Simulation',
    'VILT / ILT Training Content',
    'AR & VR Development'
  ];

  const quickLinks = [
    { name: 'Refunds & Cancellations', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/virtual-interactive-solutionz-pvt-ltd', label: 'LinkedIn' },
    { icon: <FiInstagram className="w-5 h-5" />, href: 'https://www.instagram.com/vi_solutionz?igsh=d3pnbWx2cTkya2Fv', label: 'Instagram' },
    { icon: <FiFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=100083089311003&mibextid=ZbWKwL', label: 'Facebook' },
    { icon: <FiTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-50 text-gray-300">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Visolutionz
            </div>
            <p className="text-sm leading-relaxed">
              Learn and lead, succeed indeed — custom solutions guaranteed!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/#services" className="hover:text-primary-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@visolutionz.com" className="hover:text-primary-400 transition-colors">
                  info@visolutionz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiPhone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+916296349395" className="hover:text-primary-400 transition-colors">
                  +91 6296 349 395
                </a>
              </li>
              <li className="text-xs">
                <strong>Working Hours:</strong><br />
                10:00 AM - 7:00 PM (IST)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            <p>
              Copyright © {currentYear}{' '}
              <span className="text-primary-400 font-semibold">
                Virtual Interactive Solutionz
              </span>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
