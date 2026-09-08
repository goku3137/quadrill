import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Briefcase, UserCheck, HeartHandshake, FileText } from 'lucide-react';
import heroImg from '../assets/hse-ppe-premium.webp';

const Careers = () => {
  const handleCareersSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Job Application: ${data.position} - ${data.name}`;
    const body = `Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Position: ${data.position}
Experience: ${data.experience} years

* IMPORTANT: Please attach your CV to this email before sending. *`;

    window.location.href = `mailto:info@quadrilldemolition.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="page-careers bg-light">
      <HeroBanner 
        title="Join Our Team"
        subtitle="Build your career with a team committed to safety, precision, and high-quality execution."
        imageSrc={heroImg}
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
            <form onSubmit={handleCareersSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" className="form-control" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Position Applied For *</label>
                <select name="position" className="form-control" required>
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
                <input type="number" name="experience" className="form-control" placeholder="e.g. 5" required />
              </div>
              <div className="form-group" style={{ backgroundColor: 'var(--light-grey)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', fontWeight: '500', marginBottom: '0.5rem' }}>
                  <FileText size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.25rem' }} /> 
                  Important: CV Attachment
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--concrete-grey)' }}>
                  This application will open your email client. You must manually attach your CV to the email before sending.
                </p>
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
