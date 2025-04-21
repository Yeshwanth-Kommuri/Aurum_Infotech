
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-aurum-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-aurum-gold">Aurum</span> Infotech
            </h3>
            <p className="mb-4 text-gray-300">
              Empowering Innovation. Delivering Excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-aurum-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aurum-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aurum-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/aurum-infotech/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-aurum-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aurum-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aurum-gold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aurum-gold">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>8825 Preakness Dr Florence</p>
              <p>KY 41042, USA</p>
              <p>Phone: +1 (828) 548-3268</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aurum Infotech. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="#" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="ml-4 bg-aurum-gold/20 hover:bg-aurum-gold/30 p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-aurum-gold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
