import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Quote } from 'lucide-react';

const MessageCard = ({ role, title, message }) => (
  <div style={{ 
    backgroundColor: 'var(--white)', 
    padding: '2.5rem', 
    borderRadius: 'var(--radius-md)', 
    boxShadow: 'var(--shadow-card)',
    position: 'relative'
  }}>
    <Quote size={40} color="var(--light-grey)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.5 }} />
    <h3 className="text-primary" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{role}</h3>
    <div style={{ color: 'var(--safety-orange)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{title}</div>
    <p className="text-secondary" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>"{message}"</p>
  </div>
);

const Management = () => {
  const messages = [
    {
      role: "CEO's Message",
      title: "Chief Executive Officer",
      message: "Quadrill Demolition LLC may be newly registered in 2026, but the expertise behind our company is built on more than a decade of global experience in demolition, concrete cutting, and underwater cutting. Our leadership and technical teams have executed complex structural and marine projects across international markets, giving us the capability to deliver world-class solutions from day one. Our vision is to establish Quadrill Demolition LLC as a regional and global leader in high-precision demolition and cutting services, driven by innovation, safety, and engineering excellence."
    },
    {
      role: "Managing Director's Message",
      title: "Managing Director (MD)",
      message: "Although Quadrill Demolition LLC is a newly established entity, our foundation is exceptionally strong. The professionals who lead and operate this company bring 10+ years of proven experience in global demolition and underwater cutting projects. As Managing Director, my focus is on transforming this deep expertise into consistent operational excellence, superior client satisfaction, and sustainable long-term growth. We are committed to delivering safe, efficient, and technically advanced solutions that meet international standards."
    },
    {
      role: "COO's Message",
      title: "Chief Operating Officer (COO)",
      message: "Operational strength is built on experience — and our team carries over a decade of hands-on expertise in executing demolition, concrete cutting, and underwater cutting works worldwide. Even though Quadrill Demolition LLC was registered in 2026, our operational capability reflects years of global project execution, advanced machinery handling, and strict safety compliance. My responsibility is to ensure seamless coordination, timely delivery, and precision-driven performance across all project environments."
    },
    {
      role: "CFO's Message",
      title: "Chief Financial Officer (CFO)",
      message: "Quadrill Demolition LLC enters the market with a unique advantage: a newly registered company supported by a team with 10+ years of international project experience. This combination allows us to make strong, strategic financial decisions from the start. As CFO, I ensure that our investments, budgeting, and financial planning support long-term stability, operational efficiency, and continuous technological advancement. Transparency and responsible financial management remain central to our commitment to clients and stakeholders."
    },
    {
      role: "Business Head's Message",
      title: "Head of Business",
      message: "Our business strength comes from the people who built this company. While Quadrill Demolition LLC was established in 2026, our team has more than a decade of global experience in demolition, concrete cutting, and underwater cutting. This deep industry knowledge allows us to understand evolving client needs and deliver advanced, reliable solutions. My role is to expand our market presence, strengthen client relationships, and position Quadrill Demolition LLC as the preferred partner for complex structural and marine demolition works."
    },
    {
      role: "CRM's Message",
      title: "Client Relations Manager (CRM)",
      message: "Quadrill Demolition LLC may be new in registration, but our client service philosophy is shaped by 10+ years of international experience working with diverse industries and project environments. As CRM, my focus is on delivering a smooth, transparent, and responsive experience from inquiry to project completion. We ensure clear communication, timely updates, and dedicated support — building long-term relationships based on trust, reliability, and exceptional service quality."
    },
    {
      role: "HSE Manager's Message",
      title: "Health, Safety & Environment Manager",
      message: "At Quadrill Demolition LLC, safety is the core of every operation we perform. Although the company was registered in 2026, our team brings over 10 years of global experience in high-risk demolition, concrete cutting, and underwater cutting works. My role is to ensure full compliance with international HSE standards through strict risk assessments, proper PPE use, equipment inspections, and continuous safety training. Our commitment is simple — zero incidents and uncompromised safety across all project environments."
    }
  ];

  return (
    <div className="page-management bg-light">
      <HeroBanner 
        title="Management Message"
        subtitle="Led by industry veterans with over 10 years of global project experience."
        imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {messages.map((msg, index) => (
              <MessageCard key={index} {...msg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
