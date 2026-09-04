import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container grid-4 footer-top">
        {/* Company Info */}
        <div className="footer-col">
          <div className="footer-logo">
            QUADRILL <span className="text-accent">DEMOLITION</span>
          </div>
          <p className="footer-about">
            UAE-based specialists in controlled demolition, concrete cutting, and underwater cutting with over 10 years of professional team experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about"><ChevronRight size={14} /> About Us</Link></li>
            <li><Link to="/vision"><ChevronRight size={14} /> Vision</Link></li>
            <li><Link to="/management"><ChevronRight size={14} /> Management Message</Link></li>
            <li><Link to="/careers"><ChevronRight size={14} /> Careers</Link></li>
            <li><Link to="/contact"><ChevronRight size={14} /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#demolition"><ChevronRight size={14} /> Controlled Demolition</Link></li>
            <li><Link to="/services#concrete-cutting"><ChevronRight size={14} /> Concrete Cutting</Link></li>
            <li><Link to="/services#marine"><ChevronRight size={14} /> Underwater Cutting</Link></li>
            <li><Link to="/services#marine"><ChevronRight size={14} /> Hydro Demolition</Link></li>
            <li><Link to="/services#demolition"><ChevronRight size={14} /> Structural Dismantling</Link></li>
          </ul>
        </div>


        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Information</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <MapPin size={18} className="text-accent" />
              <span>Head Office<br/>Mohammed Bin Zayed City<br/>Abu Dhabi, UAE</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="text-accent" />
              <span>+971 50 234 0364</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="text-accent" />
              <span>info@quadrilldemolition.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Quadrill Demolition LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
