import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Eye, Target, TrendingUp, Globe } from 'lucide-react';
import heroImg from '../assets/projects-hero-premium.webp';
import { Lightbulb, Shield } from 'lucide-react';

const Vision = () => {
  return (
    <div className="page-vision">
      <HeroBanner 
        title="Vision & Mission"
        subtitle="Driving the future of the demolition and construction industry with precision, innovation, and unwavering safety."
        imageSrc={heroImg}
        showCtas={false}
      />

      <section className="section">
        <div className="container">
          <div className="vision-statement" style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
            borderTop: '5px solid var(--safety-yellow)'
          }}>
            <Target size={64} className="text-primary" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Setting the Global Standard
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              To establish Quadrill Demolition LLC as the leading authority in demolition, concrete cutting, and underwater cutting across the UAE and global markets. We strive to set new industry benchmarks by combining advanced technology, highly experienced manpower, and uncompromising safety standards.
            </p>
            <p className="text-secondary" style={{ fontSize: '1.25rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
              Our vision is to deliver world-class demolition and cutting solutions for complex structural, industrial, and marine environments. Through continuous innovation, global project expertise, and more than a decade of specialized experience, we aim to expand our capabilities, strengthen client trust, and become the preferred partner for high-precision demolition and underwater cutting operations worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white">
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div style={{ padding: '2rem' }}>
              <Globe size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--white)' }}>Global Markets</h3>
              <p style={{ color: 'var(--light-grey)' }}>Expanding our capabilities across borders, bringing UAE-based expertise to international projects.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <Lightbulb size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--white)' }}>Continuous Innovation</h3>
              <p style={{ color: 'var(--light-grey)' }}>Adopting the latest technology, including robotics and advanced diamond cutting tools.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <Shield size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--white)' }}>Uncompromising Safety</h3>
              <p style={{ color: 'var(--light-grey)' }}>A commitment to zero incidents and strict adherence to international safety standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
