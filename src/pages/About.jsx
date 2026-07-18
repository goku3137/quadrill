import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';

const About = () => {
  return (
    <div className="page-about">
      <HeroBanner 
        title="About Us"
        subtitle="10+ Years of Professional Team Experience in High-Precision Demolition"
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
        primaryCtaText="Our Services"
        primaryCtaLink="/services"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Specialists in Demolition, Concrete Cutting, and Underwater Cutting
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Quadrill Demolition LLC is a leading specialist in demolition, concrete cutting, and underwater cutting services across the UAE and international markets. With a highly trained team carrying more than 10 years of professional experience, we deliver safe, precise, and technically advanced solutions for industrial, commercial, marine, and oil & gas projects.
            </p>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Our crew has successfully executed global-scale demolition and concrete cutting works, including complex structural removal, controlled demolition, heavy-duty concrete sawing, core drilling, and specialized underwater cutting operations.
            </p>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
              We are one of the few contractors equipped with the expertise and equipment required for underwater concrete cutting, making us a trusted partner for marine infrastructure, quay walls, bridges, ports, and offshore structures.
            </p>
          </div>
          
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ backgroundColor: 'var(--light-grey)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <Users size={40} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>10+</div>
              <div style={{ fontWeight: '600', color: 'var(--concrete-grey)' }}>Years Team Experience</div>
            </div>
            <div style={{ backgroundColor: 'var(--charcoal)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <Target size={40} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--white)', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ fontWeight: '600', color: 'var(--light-grey)' }}>Safety Commitment</div>
            </div>
            <div style={{ backgroundColor: 'var(--steel-blue)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center', gridColumn: 'span 2' }}>
              <ShieldCheck size={40} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--white)', marginBottom: '0.5rem' }}>International Standards</div>
              <div style={{ fontWeight: '500', color: 'var(--light-grey)' }}>Strict compliance across all project environments</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Commitment</h2>
            <p>Built on technical capability and reliable project delivery.</p>
          </div>
          
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="text-primary" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Engineering Excellence</h3>
              <p className="text-secondary">Every project is executed with strict compliance to international standards, ensuring high-quality results.</p>
            </div>
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="text-primary" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Minimal Disruption</h3>
              <p className="text-secondary">Our precision methods ensure minimal disruption and maximum efficiency in complex environments.</p>
            </div>
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="text-primary" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Consistent Performance</h3>
              <p className="text-secondary">Our reputation is built on technical capability, experienced manpower, and consistent performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
