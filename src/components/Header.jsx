import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'HSE', path: '/hse' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header-container">
      {/* Top Bar for B2B Contact Info */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <Phone size={16} />
            <span>+971 50 234 0364</span>
          </div>
          <div className="top-bar-item">
            <Mail size={16} />
            <span>info@quadrilldemolition.com</span>
          </div>
          <div className="top-bar-trust">
            <span className="badge">10+ Years Team Experience | UAE Based</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav-wrapper">
        <div className="container main-nav">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-text">
              QUADRILL <span className="text-accent">DEMOLITION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-primary btn-block" onClick={closeMenu}>
              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
