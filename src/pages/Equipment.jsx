import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Settings, Zap, HardHat, ShieldCheck } from 'lucide-react';

const EquipmentCard = ({ title, description, highlight }) => (
  <div style={{
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ height: '200px', backgroundColor: 'var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <Settings size={64} color="var(--safety-yellow)" opacity={0.2} />
      <span style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'var(--safety-yellow)', color: 'var(--charcoal)', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
        {highlight || 'Advanced Machinery'}
      </span>
    </div>
    <div style={{ padding: '1.5rem', flexGrow: 1 }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--charcoal)' }}>{title}</h3>
      <p style={{ color: 'var(--concrete-grey)', fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </div>
  </div>
);

const Equipment = () => {
  const equipmentList = [
    {
      title: "Diamond Wire Saw Machines",
      description: "High-capacity cutting machines used for large, thick, or heavily reinforced concrete and steel structures. Ideal for bridges, columns, beams, foundations, and marine structures.",
      highlight: "Heavy Duty Cutting"
    },
    {
      title: "Wall Saw Machines",
      description: "Precision wall-cutting equipment designed for creating openings in reinforced concrete walls. Suitable for doors, windows, shafts, and structural modifications.",
      highlight: "Precision Engineering"
    },
    {
      title: "Floor Saw Machines",
      description: "Heavy-duty floor saws used for slab cutting, pavement removal, expansion joints, and utility trenching in roads, industrial floors, and concrete slabs.",
      highlight: "Slab & Pavement"
    },
    {
      title: "Core Drilling Machines",
      description: "Advanced core drilling rigs capable of producing clean, accurate circular openings in concrete and asphalt for MEP installations, anchors, and utility penetrations.",
      highlight: "MEP Precision"
    },
    {
      title: "Hydraulic Breakers",
      description: "High-impact breakers used for controlled concrete breaking, foundation removal, and heavy demolition works. Suitable for industrial and structural dismantling.",
      highlight: "High Impact"
    },
    {
      title: "Pneumatic Breaking Machines",
      description: "Air-powered breakers used for precise and controlled concrete removal in confined or sensitive environments where vibration control is required.",
      highlight: "Vibration Controlled"
    },
    {
      title: "Excavators with Attachments",
      description: "Versatile excavators equipped with hydraulic hammers for breaking and shovels for debris removal. Essential for demolition, pile trimming, and heavy concrete breaking.",
      highlight: "Versatile Core"
    },
    {
      title: "Underwater Cutting Equipment",
      description: "Specialized underwater cutting tools designed for marine demolition, quay wall cutting, bridge foundation removal, and offshore concrete works.",
      highlight: "Specialist Marine"
    },
    {
      title: "Hydro Demolition Units",
      description: "High-pressure water jetting systems used for non-vibratory removal of damaged or deteriorated concrete. Ideal for bridges, tunnels, marine structures, and repair works.",
      highlight: "Non-Vibratory"
    },
    {
      title: "Robotic Demolition Machines",
      description: "Remote-controlled demolition robots used for safe, precise breaking and removal in confined spaces, hazardous environments, and structurally sensitive areas.",
      highlight: "Remote Controlled"
    },
    {
      title: "100-Ton Mobile Crane",
      description: "Heavy-lifting crane used for structural removal, lifting large concrete sections, and supporting demolition operations requiring safe and controlled lifting.",
      highlight: "Heavy Lifting"
    },
    {
      title: "Trailers & Transport Vehicles",
      description: "Transport units used for moving machinery, debris, and heavy materials to and from project sites, ensuring efficient logistics and project flow.",
      highlight: "Logistics"
    },
    {
      title: "Generators (100/150 KVA)",
      description: "High-capacity generators providing reliable power supply for cutting machines, drilling rigs, and demolition equipment in remote or power-restricted locations.",
      highlight: "Power Supply"
    },
    {
      title: "Surface Grinding Machines",
      description: "Industrial grinding equipment used for leveling, smoothing, and preparing concrete surfaces for coatings, flooring, or structural repair.",
      highlight: "Surface Prep"
    },
    {
      title: "Safety & Support Equipment",
      description: "Includes lifting gear, rigging tools, scaffolding, lighting systems, and PPE to ensure safe and compliant execution of all demolition and cutting operations.",
      highlight: "HSE Compliance"
    }
  ];

  return (
    <div className="page-equipment bg-light">
      <HeroBanner 
        title="Our Equipment"
        subtitle="Advanced machinery and state-of-the-art tools ensuring precision and safety."
        imageSrc="https://images.unsplash.com/photo-1541888087405-eb813d04c40b?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Capacity</h2>
            <p>Our fleet is maintained to international standards to ensure reliable execution.</p>
          </div>
          
          <div className="grid-3">
            {equipmentList.map((eq, index) => (
              <EquipmentCard key={index} {...eq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
