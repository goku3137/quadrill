import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
          <div className="text-brand-red font-bold tracking-wider">
            10+ YEARS TEAM EXPERIENCE | UAE BASED
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu} className="text-2xl font-black tracking-widest flex gap-2 items-center">
          <span className="text-white">QUADRILL</span>
          <span className="text-brand-red">DEMOLITION</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
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
          <Link
            to="/contact"
            className="px-6 py-3 bg-brand-red text-white text-sm font-bold tracking-widest uppercase rounded shadow-[0_0_15px_rgba(255,42,42,0.4)] hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] hover:bg-red-500 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Request Quote
          </Link>
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
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 px-6 py-4 text-center bg-brand-red text-white font-bold tracking-widest uppercase rounded shadow-[0_0_15px_rgba(255,42,42,0.4)]"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
