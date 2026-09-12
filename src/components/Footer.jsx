import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-black tracking-widest flex gap-2 items-center">
            <span className="text-white">QUADRILL</span>
            <span className="text-brand-red">DEMOLITION</span>
          </Link>
          <p className="text-gray-400 font-sans leading-relaxed">
            Leading the UAE in advanced concrete cutting, controlled demolition, and specialized structural dismantling for complex projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-4 font-sans text-gray-400">
            <li><Link to="/about" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Capabilities</Link></li>
            <li><Link to="/projects" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Portfolio</Link></li>
            <li><Link to="/hse" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Safety (HSE)</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 uppercase tracking-wider">Specialties</h4>
          <ul className="flex flex-col gap-4 font-sans text-gray-400">
            <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Commercial Demolition</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Wire & Wall Sawing</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Core Drilling</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center gap-2"><ChevronRight size={16}/> Marine Cutting</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 uppercase tracking-wider">Connect</h4>
          <ul className="flex flex-col gap-4 font-sans text-gray-400">
            <li className="flex items-start gap-4">
              <MapPin className="text-brand-red flex-shrink-0 mt-1" size={20} />
              <span>Quadrill Demolition LLC<br/>Industrial Area 11, Sharjah, UAE</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-brand-red flex-shrink-0" size={20} />
              <span>+971 50 234 0364</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-brand-red flex-shrink-0" size={20} />
              <span>info@quadrilldemolition.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
        <p>&copy; {new Date().getFullYear()} Quadrill Demolition LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
