import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Anchor, Hammer, Factory, Building2, Truck, Settings } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <HeroBanner 
        title="Precision Demolition, Concrete Cutting & Underwater Cutting Specialists."
        subtitle="Safe, precise, and technically advanced demolition and cutting services for complex structural, industrial, and marine environments."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Divider stripe */}
      <div style={{ height: '6px', background: 'linear-gradient(90deg, var(--safety-yellow), var(--safety-orange))' }} />

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="intro-content">
            <p className="text-accent" style={{ fontWeight: '700', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              UAE-Based Specialists
            </p>
            <h2 className="text-primary" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
              10+ Years of Professional Team Experience
            </h2>
            <p className="text-secondary" style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Quadrill Demolition LLC delivers safe, precise, and technically advanced demolition, concrete cutting, and underwater cutting services across the UAE and international markets — from complex structural removal to specialized marine cutting operations.
            </p>
            <ul style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                <ShieldCheck size={20} className="text-accent" /> Strict compliance to international standards
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                <ShieldCheck size={20} className="text-accent" /> Trusted partner for marine infrastructure
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                <ShieldCheck size={20} className="text-accent" /> Uncompromising safety standards
              </li>
            </ul>
            <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
          </div>
          <div className="intro-image" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Demolition and Construction site" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '420px' }}
            />
          </div>
        </div>
      </section>


      {/* Services Preview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Advanced solutions for industrial, commercial, marine, and oil & gas projects.</p>
          </div>
          
          <div className="grid-3">
            <ServiceCard 
              icon={Hammer}
              title="Controlled Demolition"
              description="Safe and precise dismantling of structures using engineered methods. Low-impact and vibration-controlled."
            />
            <ServiceCard 
              icon={Settings}
              title="Concrete Cutting"
              description="High-precision concrete cutting using advanced machinery for structural modifications and heavy-duty removal."
            />
            <ServiceCard 
              icon={Settings}
              title="Wire Sawing"
              description="Specialized cutting for large, thick, or heavily reinforced concrete and steel structures."
            />
            <ServiceCard 
              icon={Settings}
              title="Core Drilling"
              description="Precise circular openings in concrete and asphalt for MEP installations and utility penetrations."
            />
            <ServiceCard 
              icon={Anchor}
              title="Underwater Cutting"
              description="Advanced underwater concrete cutting for marine and offshore structures like quay walls and jetties."
            />
            <ServiceCard 
              icon={Settings}
              title="Hydro Demolition"
              description="High-pressure water jetting for precise and non-vibratory removal of damaged or deteriorated concrete."
            />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'var(--white)' }}>Why Choose Quadrill</h2>
            <p style={{ color: 'var(--light-grey)' }}>We deliver safe, efficient, and technically advanced solutions.</p>
          </div>
          
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
              <ShieldCheck size={48} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--white)' }}>Safety Compliance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--light-grey)' }}>Zero-incident mindset with international HSE standards.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
              <Truck size={48} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--white)' }}>Advanced Equipment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--light-grey)' }}>State-of-the-art machinery including robotics and diamond wire saws.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
              <Anchor size={48} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--white)' }}>Underwater Expertise</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--light-grey)' }}>Specialist capability for complex marine and offshore cutting.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
              <Building2 size={48} className="text-accent" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--white)' }}>Experienced Team</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--light-grey)' }}>Over a decade of global project execution and technical knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Providing specialized solutions across multiple sectors.</p>
          </div>
          
          <div className="grid-4" style={{ gap: '1rem' }}>
            {[
              { icon: Building2, name: 'Construction' },
              { icon: Anchor, name: 'Marine & Ports' },
              { icon: Factory, name: 'Oil & Gas' },
              { icon: Factory, name: 'Industrial Plants' },
              { icon: Building2, name: 'Infrastructure' },
              { icon: Truck, name: 'Roads & Highways' },
              { icon: Building2, name: 'Airports' },
              { icon: Building2, name: 'Government' },
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', 
                  backgroundColor: 'var(--white)', padding: '1.5rem', 
                  borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)',
                  fontWeight: '600'
                }}>
                  <Icon className="text-primary" />
                  {industry.name}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--safety-yellow) 0%, var(--safety-orange) 100%)',
        textAlign: 'center', color: 'var(--charcoal)'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--charcoal)' }}>
            Need a safe and reliable demolition partner?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '500' }}>
            Contact our engineering team today to discuss your project requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--charcoal)', color: 'var(--white)' }}>
              Request a Quote
            </Link>
            <a href="tel:+971502340364" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid var(--charcoal)' }}>
              Call +971 50 234 0364
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
