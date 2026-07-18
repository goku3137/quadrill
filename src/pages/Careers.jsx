import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Briefcase, UserCheck, HeartHandshake, FileText } from 'lucide-react';

const Careers = () => {
  return (
    <div className="page-careers bg-light">
      <HeroBanner 
        title="Join Our Team"
        subtitle="Build your career with a team committed to safety, precision, and high-quality execution."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
        showCtas={false}
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          <div>
            <h2 className="text-primary" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Opportunities for Skilled Professionals</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Quadrill Demolition LLC is a growing company built on more than 10 years of global experience in demolition, concrete cutting, and underwater cutting. Although officially established in 2026, our strength comes from skilled professionals who bring deep industry knowledge and technical excellence.
            </p>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We offer career opportunities for experienced technicians, operators, engineers, and supervisors. Our projects span industrial, commercial, marine, and infrastructure sectors, providing a dynamic and challenging work environment.
            </p>
            
            <div className="grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <UserCheck size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>Training & Development</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--concrete-grey)' }}>Continuous training and advanced equipment certification.</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <HeartHandshake size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>Work Culture</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--concrete-grey)' }}>Built on teamwork, integrity, and safety-first professionalism.</p>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--charcoal)' }}>Submit Your CV</h3>
            <form>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Position Applied For *</label>
                <select className="form-control" required>
                  <option value="">Select a position</option>
                  <option value="Demolition Expert">Demolition Expert</option>
                  <option value="Concrete Cutter">Concrete Cutter</option>
                  <option value="Underwater Cutter">Underwater Cutter</option>
                  <option value="Heavy Equipment Operator">Heavy Equipment Operator</option>
                  <option value="HSE Officer">HSE Officer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Years of Experience *</label>
                <input type="number" className="form-control" placeholder="e.g. 5" required />
              </div>
              <div className="form-group">
                <label>Upload CV (PDF, DOCX) *</label>
                <input type="file" className="form-control" required style={{ padding: '0.5rem' }} />
              </div>
              <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1rem' }}>
                <FileText size={18} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle' }} /> 
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
