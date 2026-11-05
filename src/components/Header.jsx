import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'HSE', path: '/hse' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden lg:block bg-black border-b border-white/5 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} /> <span>+971 50 234 0364</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} /> <span>info@quadrilldemolition.com</span>
            </div>
          </div>
          <div className="text-brand-blue font-bold tracking-wider">
            10+ YEARS TEAM EXPERIENCE | UAE BASED
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group flex-shrink-0">
          <img src="/logo-icon.png" alt="Quadrill Logo" className="h-9 md:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col justify-center items-start text-left">
            <span className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter leading-none group-hover:text-brand-blue transition-colors duration-300">QUADRILL</span>
            <span className="font-sans text-[9px] md:text-[10px] font-bold text-brand-blue tracking-[0.2em] uppercase mt-0.5">Demolition</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <ul className="flex gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="/Quadrill_Demolition_Brochure.pdf"
              download="Quadrill_Demolition_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white text-xs xl:text-sm font-bold tracking-widest uppercase rounded border border-white/20 hover:border-brand-blue transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Download size={15} className="text-brand-blue" />
              <span>Brochure</span>
            </a>
            <Link
              to="/contact"
              className="px-5 xl:px-6 py-3 bg-brand-blue text-brand-dark text-xs xl:text-sm font-black tracking-widest uppercase rounded shadow-[0_0_15px_rgba(198,170,124,0.35)] hover:shadow-[0_0_25px_rgba(198,170,124,0.55)] hover:bg-brand-gold-hover transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Request Quote
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen bg-brand-dark border-l border-white/10 p-8 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col gap-8 -z-10`}
      >
        <div className="mt-20 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-xl font-bold tracking-wider ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="/Quadrill_Demolition_Brochure.pdf"
              download="Quadrill_Demolition_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="px-6 py-4 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold tracking-widest uppercase rounded border border-white/20 hover:border-brand-blue"
            >
              <Download size={18} className="text-brand-blue" />
              <span>Download Brochure</span>
            </a>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-4 text-center bg-brand-blue text-brand-dark font-black tracking-widest uppercase rounded shadow-[0_0_15px_rgba(198,170,124,0.35)] hover:bg-brand-gold-hover"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
