import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Anchor, Settings, Zap, Droplets, HardHat } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const demolitionServices = [
    {
      icon: Hammer,
      title: "Controlled Demolition",
      description: "Safe and precise dismantling of structures using engineered methods. Ideal for industrial, commercial, and infrastructure projects requiring vibration-controlled and low-impact demolition.",
      applications: "Industrial, Commercial, Infrastructure"
    },
    {
      icon: HardHat,
      title: "Structural Dismantling",
      description: "Systematic dismantling of steel, concrete, and composite structures using engineered sequencing. Ensures safe removal of beams, slabs, columns, and heavy structural components.",
      applications: "High-Rise, Bridges, Industrial Plants"
    },
    {
      icon: Zap,
      title: "Industrial Demolition",
      description: "Complete demolition solutions for factories, plants, warehouses, and industrial facilities. Includes machinery removal, foundation breaking, and structural dismantling.",
      applications: "Factories, Refineries, Power Plants"
    },
    {
      icon: Hammer,
      title: "Concrete Breaking & Removal",
      description: "Controlled breaking and removal using hydraulic breakers, robotic demolition machines, and cutting tools. Ideal for renovation and repair.",
      applications: "Renovation, Structural Adjustments"
    }
  ];

  const cuttingServices = [
    {
      icon: Settings,
      title: "Concrete Cutting",
      description: "High-precision concrete cutting using advanced machinery for structural modifications, openings, and heavy-duty removal. Suitable for construction and renovation.",
      applications: "Construction, Renovation"
    },
    {
      icon: Settings,
      title: "Wall Sawing",
      description: "Accurate cutting of reinforced concrete walls for doors, windows, shafts, and structural openings. Ensures clean, straight, and vibration-controlled cuts.",
      applications: "Residential, Commercial Buildings"
    },
    {
      icon: Settings,
      title: "Wire Sawing",
      description: "Specialized cutting for large, thick, or heavily reinforced concrete and steel structures. Ideal for bridges, columns, beams, foundations, and marine structures.",
      applications: "Bridges, Foundations, Heavy Civil Works"
    },
    {
      icon: Settings,
      title: "Floor Sawing",
      description: "Efficient cutting of concrete slabs, pavements, and industrial floors. Used for expansion joints, utility trenches, and controlled slab removal.",
      applications: "Roads, Airports, Warehouses"
    },
    {
      icon: Settings,
      title: "Core Drilling",
      description: "Precise circular openings in concrete and asphalt for MEP installations, anchor placements, utility penetrations, and structural adjustments.",
      applications: "MEP Installations, Utility Networks"
    },
    {
      icon: Settings,
      title: "Pile Trimming / Breaking",
      description: "Professional pile trimming and breaking for construction foundations. Ensures accurate leveling and preparation of piles using safe methods.",
      applications: "Foundations, Infrastructure"
    }
  ];

  const specializedServices = [
    {
      icon: Anchor,
      title: "Underwater Cutting",
      description: "Advanced underwater concrete cutting for marine and offshore structures. Suitable for quay walls, jetties, bridge foundations, port infrastructure, and underwater demolition works.",
      applications: "Quay Walls, Jetties, Ports, Bridges"
    },
    {
      icon: Anchor,
      title: "Marine & Quay Wall Cutting",
      description: "Specialized cutting solutions for marine infrastructure such as quay walls, breakwaters, jetties, and underwater structural components.",
      applications: "Marine Infrastructure, Offshore Platforms"
    },
    {
      icon: Droplets,
      title: "Hydro Demolition (Water Jetting)",
      description: "High-pressure water jetting for precise and non-vibratory removal of damaged or deteriorated concrete. Protects structural integrity and avoids micro-cracks.",
      applications: "Bridges, Tunnels, Marine Structures"
    },
    {
      icon: HardHat,
      title: "Surface Preparation & Grinding",
      description: "Industrial-grade grinding and surface preparation for concrete floors and slabs. Provides smooth, level surfaces ready for coatings or flooring.",
      applications: "Industrial Floors, Commercial Slabs"
    },
    {
      icon: HardHat,
      title: "Technical Engineering Support",
      description: "Complete engineering documentation including method statements, risk assessments, lifting plans, and project execution strategies.",
      applications: "All High-Risk Projects"
    }
  ];

  return (
    <div className="page-services">
      <HeroBanner 
        title="Our Services"
        subtitle="Engineered precision in every cut. Delivering advanced solutions across demolition, concrete cutting, and marine works."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Underwater Cutting Highlight */}
      <section className="section bg-dark text-white">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--safety-yellow)', color: 'var(--charcoal)', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              <Anchor size={16} /> SPECIALIST CAPABILITY
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--white)' }}>Underwater Concrete Cutting</h2>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Quadrill Demolition LLC is one of the few contractors in the UAE equipped with the advanced technology and specialist diving expertise required for underwater concrete cutting and marine demolition.
            </p>
            <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              We provide precise cutting solutions for complex marine environments, including quay walls, jetties, bridge foundations, offshore platforms, and port infrastructure—executed safely and efficiently.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Quote for Marine Works</Link>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '4px solid rgba(255,255,255,0.1)' }}>
            <img 
              src="https://images.unsplash.com/photo-1616422285623-138d6df1b34c?auto=format&fit=crop&q=80&w=800" 
              alt="Underwater Marine Operations" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '350px' }}
            />
          </div>
        </div>
      </section>

      {/* Demolition Services */}
      <section className="section bg-light" id="demolition">
        <div className="container">
          <div className="section-header">
            <h2>Demolition Services</h2>
            <p>Controlled, safe, and efficient dismantling for structures of all sizes.</p>
          </div>
          <div className="grid-3">
            {demolitionServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-secondary">Request a Quote for Demolition</Link>
          </div>
        </div>
      </section>

      {/* Concrete Cutting Services */}
      <section className="section" id="concrete-cutting">
        <div className="container">
          <div className="section-header">
            <h2>Concrete Cutting & Drilling</h2>
            <p>High-precision cutting utilizing diamond tools and advanced machinery.</p>
          </div>
          <div className="grid-3">
            {cuttingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-secondary">Request a Quote for Concrete Cutting</Link>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section bg-light" id="marine">
        <div className="container">
          <div className="section-header">
            <h2>Marine & Specialized Works</h2>
            <p>Advanced surface preparation, hydro demolition, and engineering support.</p>
          </div>
          <div className="grid-3">
            {specializedServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-secondary">Request a Quote for Specialized Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
