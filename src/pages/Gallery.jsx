import React from 'react';
import HeroBanner from '../components/HeroBanner';
import heroImg from '../assets/project-gallery-10.webp';

const Gallery = () => {
  return (
    <div className="page-gallery">
      <HeroBanner 
        title="Project & Equipment Gallery"
        subtitle="Visual proof of our technical capability and execution."
        imageSrc={heroImg}
      />

      <section className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--gray)' }}>Visual showcase coming soon.</p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
