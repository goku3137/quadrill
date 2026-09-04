import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';

import { ShieldCheck, HardHat, AlertTriangle, Crosshair, Wind, Waves, Anchor, Recycle } from 'lucide-react';

const HseStep = ({ number, icon: Icon, title, desc }) => (
  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
    <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--safety-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--charcoal)', position: 'relative' }}>
      {number}
      <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', backgroundColor: 'var(--charcoal)', color: 'var(--white)', borderRadius: '50%', padding: '4px' }}>
        <Icon size={16} />
      </div>
    </div>
    <div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--concrete-grey)' }}>{desc}</p>
    </div>
  </div>
);

const HSE = () => {
  return (
    <div className="page-hse">
      <HeroBanner 
        title="Health, Safety & Environment"
        subtitle="Uncompromised safety across all project environments. Zero incidents mindset."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
        primaryCtaText="Discuss Safety Requirements"
      />

      <section className="section bg-light">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <ShieldCheck size={48} className="text-accent" />
              <h2 style={{ fontSize: '2rem', color: 'var(--charcoal)' }}>Safety First Policy</h2>
            </div>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Quadrill Demolition LLC follows a strict health and safety policy to protect employees, clients, and the public. All operations are carried out with full compliance to international HSE standards and regulatory requirements.
            </p>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Our team brings over 10 years of global experience in high-risk demolition, concrete cutting, and underwater cutting works. We ensure full compliance through strict risk assessments, proper PPE use, equipment inspections, and continuous safety training.
            </p>
            <a href="/contact" className="btn btn-secondary">Contact HSE Manager</a>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="https://images.unsplash.com/photo-1582214400192-36c1e55b4be3?auto=format&fit=crop&w=800" alt="Construction Safety PPE" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>HSE Process & Protocols</h2>
            <p>Our step-by-step approach to ensuring zero incidents.</p>
          </div>
          
          <div className="grid-2">
            <div>
              <HseStep number="1" icon={AlertTriangle} title="Risk Assessment (RAMS)" desc="Every project begins with detailed risk assessments and method statements to identify hazards and control risks." />
              <HseStep number="2" icon={HardHat} title="Training & Competency" desc="All staff undergo continuous safety training. Our team has more than 10 years of global experience handling high-risk equipment." />
              <HseStep number="3" icon={ShieldCheck} title="Mandatory PPE" desc="Enforced on all sites: helmets, gloves, goggles, safety boots, harnesses, and specialized gear for underwater operations." />
              <HseStep number="4" icon={Crosshair} title="Equipment Inspection" desc="All machinery undergoes regular inspection, maintenance, and certification before any operation." />
            </div>
            <div>
              <HseStep number="5" icon={Wind} title="Emergency Response" desc="Customized emergency plans covering evacuation, rescue operations, underwater safety, and first-aid readiness." />
              <HseStep number="6" icon={Recycle} title="Environmental Protection" desc="Minimizing impact through dust control, noise reduction, waste management, and eco-friendly practices." />
              <HseStep number="7" icon={ShieldCheck} title="Worksite Control" desc="Proper barricading, signposting, and controlled safety zones for cutting and demolition operations." />
              <HseStep number="8" icon={Waves} title="Marine Safety" desc="Specialized protocols for underwater cutting: diver safety, visibility control, and communication systems." />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--steel-blue) 100%)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <ShieldCheck size={56} color="var(--safety-yellow)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: 'var(--white)', fontSize: '2rem', marginBottom: '1rem' }}>
            Discuss Your Project Safety Requirements
          </h2>
          <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Our HSE Manager and engineering team are ready to review your site conditions and provide a compliant, safety-first execution plan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Contact Our HSE Team</Link>
            <a href="tel:+971502340364" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid var(--white)', color: 'var(--white)' }}>
              Call +971 50 234 0364
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSE;
