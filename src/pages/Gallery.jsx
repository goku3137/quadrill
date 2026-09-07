import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { X } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = ['All', 'Demolition', 'Concrete Cutting', 'Underwater Cutting', 'Equipment', 'HSE'];
  
  // Placeholder images mapped to categories
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800`,
    category: categories[(i % 5) + 1]
  }));

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="page-gallery">
      <HeroBanner 
        title="Project & Equipment Gallery"
        subtitle="Visual proof of our technical capability and execution."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`btn ${activeTab === cat ? 'btn-primary' : ''}`} 
                onClick={() => setActiveTab(cat)}
                style={{ 
                  backgroundColor: activeTab !== cat ? 'var(--white)' : '',
                  color: activeTab !== cat ? 'var(--charcoal)' : '',
                  border: activeTab !== cat ? '1px solid #e5e7eb' : ''
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {filteredImages.map((img) => (
              <div 
                key={img.id} 
                onClick={() => setLightboxImg(img.url)}
                style={{ 
                  height: '250px', 
                  borderRadius: 'var(--radius-md)', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  position: 'relative',
                  backgroundColor: 'var(--charcoal)'
                }}
                className="hover-lift"
              >
                <img src={img.url} alt={`Gallery ${img.category}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '0.5rem', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.8rem' }}>
                  {img.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem'
        }} onClick={() => setLightboxImg(null)}>
          <button style={{
            position: 'absolute', top: '2rem', right: '2rem',
            background: 'none', border: 'none', color: 'white', cursor: 'pointer'
          }} onClick={() => setLightboxImg(null)}>
            <X size={40} />
          </button>
          <img src={lightboxImg} alt="Lightbox" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
