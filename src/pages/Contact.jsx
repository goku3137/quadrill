import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, content }) => (
  <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
    <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--light-grey)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={24} className="text-primary" />
    </div>
    <div>
      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--charcoal)' }}>{title}</h4>
      <div style={{ color: 'var(--concrete-grey)', lineHeight: '1.6' }}>{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="page-contact bg-light">
      <HeroBanner 
        title="Contact Us"
        subtitle="Reach out to our engineering team for project discussions or quotations."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
        showCtas={false}
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          {/* Contact Form */}
          <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>Request a Quote</h3>
            <p className="text-secondary" style={{ marginBottom: '2rem' }}>Fill out the form below and we will get back to you promptly.</p>
            
            <form>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" className="form-control" required />
                </div>
              </div>
              <div className="form-group">
                <label>Service Required *</label>
                <select className="form-control" required>
                  <option value="">Select a service</option>
                  <option value="Demolition">Controlled Demolition</option>
                  <option value="Concrete Cutting">Concrete Cutting / Core Drilling</option>
                  <option value="Underwater Cutting">Underwater Cutting / Marine</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Location</label>
                <input type="text" className="form-control" placeholder="e.g. Abu Dhabi, Dubai" />
              </div>
              <div className="form-group">
                <label>Message / Project Details *</label>
                <textarea className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--charcoal)' }}>Get in Touch</h3>
              
              <ContactInfoCard 
                icon={MapPin}
                title="Head Office"
                content={<>Mohammed Bin Zayed City<br/>Abu Dhabi, United Arab Emirates</>}
              />
              
              <ContactInfoCard 
                icon={Phone}
                title="Phone"
                content={<><a href="tel:+971502340364">+971 50 234 0364</a><br/><span style={{ fontSize: '0.85rem' }}>Amal JK – Customer Relation Officer</span></>}
              />
              
              <ContactInfoCard 
                icon={Mail}
                title="Email"
                content={<a href="mailto:info@quadrilldemolition.com">info@quadrilldemolition.com</a>}
              />
              
              <ContactInfoCard 
                icon={Clock}
                title="Business Hours"
                content={<>Monday - Saturday: 8:00 AM - 6:00 PM<br/>Sunday: Closed</>}
              />
            </div>
            
            {/* Google Maps Embed */}
            <div style={{ height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                title="Quadrill Demolition Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.2!2d54.5!3d24.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4a0000000001%3A0x1!2sMohammed+Bin+Zayed+City%2C+Abu+Dhabi%2C+UAE!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
