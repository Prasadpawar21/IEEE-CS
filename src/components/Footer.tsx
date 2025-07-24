import React from 'react';
import { Brain, Mail, MapPin, Phone, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ieee-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-ieee-blue-600 rounded-lg">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold">IEEE CIS</div>
                <div className="text-sm text-ieee-gray-400">PCCOE Chapter</div>
              </div>
            </div>
            <p className="text-ieee-gray-400 text-sm max-w-xs">
              Empowering Intelligence. Enabling Innovation. Building the future of computational intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Events', 'Team', 'Projects', 'Resources'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-ieee-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-ieee-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-ieee-gray-400">
                  <div>Pimpri Chinchwad College of Engineering</div>
                  <div>Sector 26, Pradhikaran, Nigdi</div>
                  <div>Pune, Maharashtra 411044</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ieee-blue-400" />
                <a href="mailto:ieee.cis@pccoepune.org" className="text-sm text-ieee-gray-400 hover:text-white transition-colors">
                  ieee.cis@pccoepune.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ieee-blue-400" />
                <span className="text-sm text-ieee-gray-400">+91 20 2765 3168</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-ieee-gray-800 rounded-lg hover:bg-ieee-blue-600 transition-colors group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-ieee-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ieee-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-ieee-gray-400 mb-4 sm:mb-0">
            © 2025 IEEE CIS PCCOE Student Chapter. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-ieee-gray-500">Powered by</span>
            <div className="text-sm font-medium text-ieee-blue-400">IEEE</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;