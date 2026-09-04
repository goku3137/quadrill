import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { CheckCircle } from 'lucide-react';

const Projects = () => {
  const categories = ['All', 'Demolition', 'Concrete Cutting', 'Marine', 'Industrial', 'Infrastructure'];
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { title: "Industrial Facility Demolition", category: "Demolition", location: "Abu Dhabi, UAE", desc: "Complete structural dismantling of an old factory." },
    { title: "Marine Concrete Cutting Project", category: "Marine", location: "Dubai, UAE", desc: "Underwater wire sawing of quay wall sections." },
    { title: "Bridge Expansion Joint Cutting", category: "Infrastructure", location: "Sharjah, UAE", desc: "Precision floor sawing on a major highway bridge." },
    { title: "Refinery Structural Modification", category: "Industrial", location: "Ruwais, UAE", desc: "Vibration-free core drilling in a live plant." },
    { title: "High-Rise Core Wall Sawing", category: "Concrete Cutting", location: "Dubai, UAE", desc: "Creating large elevator shaft openings." },
    { title: "Port Jetty Demolition", category: "Marine", location: "Fujairah, UAE", desc: "Hydro demolition and pile breaking." }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="page-projects">
      <HeroBanner 
        title="Our Projects"
        subtitle="Proven capability across industrial, commercial, and marine sectors."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section bg-light">
        <div className="container">
          {/* Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`btn ${activeFilter === cat ? 'btn-primary' : ''}`}
                onClick={() => setActiveFilter(cat)}
                style={{
                  backgroundColor: activeFilter !== cat ? 'var(--white)' : '',
                  color: activeFilter !== cat ? 'var(--charcoal)' : '',
                  border: activeFilter !== cat ? '1px solid #e5e7eb' : ''
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--concrete-grey)' }}>
              No projects found in this category.
            </div>
          ) : (
            <div className="grid-3">
              {filteredProjects.map((proj, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ height: '200px', backgroundColor: 'var(--charcoal)' }}>
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + idx}?auto=format&fit=crop&w=400`} alt="Project placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--safety-orange)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      {proj.category}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--charcoal)' }}>{proj.title}</h3>
                    <div style={{ color: 'var(--concrete-grey)', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <CheckCircle size={14} className="text-primary" /> {proj.location}
                    </div>
                    <p style={{ color: 'var(--concrete-grey)', fontSize: '0.9rem' }}>{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

