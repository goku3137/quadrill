import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import { 
  Building2, Anchor, Droplets, Factory, Zap, 
  Truck, Home, Plane, ShieldAlert, Train, Wrench
} from 'lucide-react';


const IndustryCard = ({ icon: Icon, title, description }) => (
  <div style={{ 
    backgroundColor: 'var(--white)', 
    padding: '2rem', 
    borderRadius: 'var(--radius-md)', 
    boxShadow: 'var(--shadow-card)',
    transition: 'var(--transition)',
    border: '1px solid #e5e7eb'
  }} className="hover-lift">
    <Icon size={40} className="text-primary" style={{ marginBottom: '1.25rem' }} />
    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--charcoal)' }}>{title}</h3>
    <p className="text-secondary">{description}</p>
  </div>
);

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construction & Infrastructure",
      description: "We support major construction and infrastructure projects with precise demolition, concrete cutting, core drilling, and structural modification services. Ideal for buildings, bridges, tunnels, and large civil works."
    },
    {
      icon: Anchor,
      title: "Marine & Port Facilities",
      description: "Specialized underwater cutting, quay wall cutting, and marine demolition for ports, harbors, jetties, breakwaters, and offshore structures. Our team is trained for complex marine environments."
    },
    {
      icon: Droplets,
      title: "Oil & Gas",
      description: "Safe and controlled demolition for refineries, pipelines, offshore platforms, and industrial plants. We provide cutting and dismantling solutions that meet strict safety and compliance standards."
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing Plants",
      description: "Complete demolition and dismantling of factories, warehouses, production lines, and heavy industrial facilities. Includes machinery removal, foundation breaking, and structural dismantling."
    },
    {
      icon: Zap,
      title: "Power & Energy Sector",
      description: "Demolition and cutting services for power plants, substations, cooling towers, and energy infrastructure. Our team ensures safe execution in high-risk environments."
    },
    {
      icon: Truck,
      title: "Roads & Highways",
      description: "Floor sawing, slab cutting, core drilling, and controlled demolition for road expansions, utility trenches, pavement removal, and bridge deck modifications."
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Precision cutting and controlled demolition for malls, offices, hotels, and high-rise buildings. Ideal for renovation, expansion, and structural adjustments."
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Concrete cutting, wall sawing, floor sawing, and selective demolition for villas, apartments, and residential complexes. Ensures clean, safe, and low-disturbance execution."
    },
    {
      icon: Anchor,
      title: "Marine & Offshore Engineering",
      description: "Underwater cutting, hydro demolition, and structural removal for offshore platforms, underwater foundations, and marine engineering works."
    },
    {
      icon: ShieldAlert,
      title: "Government & Municipal Projects",
      description: "Support for public infrastructure including water treatment plants, transportation hubs, municipal buildings, and utility networks."
    },
    {
      icon: Train,
      title: "Rail & Metro Projects",
      description: "Precision cutting and controlled demolition for tunnels, stations, platforms, and rail infrastructure requiring vibration-controlled operations."
    },
    {
      icon: Plane,
      title: "Airports & Aviation Facilities",
      description: "Concrete cutting, slab removal, and structural demolition for runways, taxiways, terminals, and aviation support buildings."
    },
    {
      icon: Wrench,
      title: "Utilities & MEP Contractors",
      description: "Core drilling, wall sawing, and floor sawing for electrical, plumbing, HVAC, and utility installations in commercial and industrial environments."
    }
  ];

  return (
    <div className="page-industries bg-light">
      <HeroBanner 
        title="Industries Served"
        subtitle="Specialized demolition and cutting solutions across multiple complex sectors."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise by Sector</h2>
            <p>From marine ports to high-rise construction, we deliver precise results.</p>
          </div>
          
          <div className="grid-3">
            {industries.map((ind, index) => (
              <IndustryCard key={index} {...ind} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '2rem', marginBottom: '1rem' }}>
            Operating in Your Sector?
          </h2>
          <p style={{ color: 'var(--light-grey)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Contact our team to discuss your specific project requirements and get a tailored quotation.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
