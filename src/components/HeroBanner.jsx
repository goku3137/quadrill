import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = ({ 
  title, 
  subtitle, 
  imageSrc, 
  primaryCtaText = "Request a Quote",
  primaryCtaLink = "/contact",
  secondaryCtaText = "View Services",
  secondaryCtaLink = "/services",
  showCtas = true
}) => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${imageSrc || '/images/hero-bg.jpg'})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        
        {showCtas && (
          <div className="hero-actions">
            <Link to={primaryCtaLink} className="btn btn-primary">
              {primaryCtaText}
            </Link>
            <Link to={secondaryCtaLink} className="btn btn-secondary">
              {secondaryCtaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
