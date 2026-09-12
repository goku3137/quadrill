import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Factory, Anchor, Building2, HardHat, TriangleRight, Droplets, Zap } from 'lucide-react';

import commercialDemoImg from '../assets/concrete-beam-crane-lift.webp';
import siteClearanceImg from '../assets/concrete-pit-construction.webp';
import heavyConstImg from '../assets/wall-saw-cutting-concrete.webp';
import marineImg from '../assets/core-drilling-close-up.webp';
import implosionImg from '../assets/stitch-drilling-holes.webp';
import wireSawingImg from '../assets/wire-saw-large-cylinder.webp';
import hydroImg from '../assets/floor-saw-cutting-2.webp';
import coreImg from '../assets/core-drilling-worker.webp';

import servicesHeroImg from '../assets/services-hero-premium.webp';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const allServices = [
    { icon: Hammer, title: "Commercial Demolition", desc: "Tactical dismantling of multi-story structures using heavy robotics and vibration-controlled techniques.", img: commercialDemoImg },
    { icon: Factory, title: "Site Clearance & Remediation", desc: "Comprehensive debris removal, grading, and environmental remediation for large-scale developments.", img: siteClearanceImg },
    { icon: Building2, title: "Heavy Concrete Cutting", desc: "Structural modifications and heavy-duty concrete cutting for complex industrial sites.", img: heavyConstImg },
    { icon: Anchor, title: "Marine & Underwater Cutting", desc: "Specialized underwater cutting and dismantling for offshore platforms and port infrastructure.", img: marineImg },
    { icon: HardHat, title: "Controlled Implosion", desc: "Engineered explosive demolition for rapid, safe structural collapse in dense urban environments.", img: implosionImg },
    { icon: TriangleRight, title: "Diamond Wire Sawing", desc: "Advanced diamond wire technology for slicing through infinite depths of heavily reinforced concrete.", img: wireSawingImg },
    { icon: Droplets, title: "Hydro Demolition", desc: "High-pressure water jetting for precise, non-vibratory concrete removal while preserving rebar.", img: hydroImg },
    { icon: Zap, title: "Precision Core Drilling", desc: "Flawless circular penetrations through reinforced concrete and asphalt for MEP and utility routing.", img: coreImg }
  ];

  return (
    <div className="w-full bg-brand-dark overflow-hidden pt-24 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10 mb-24">
        <div className="absolute inset-0 z-0 bg-brand-dark/80" />
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url(${servicesHeroImg})` }} />
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="relative z-20 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
            Our <span className="text-brand-red">Capabilities</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Engineered solutions for the most complex demolition and structural modification challenges.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {allServices.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group relative bg-brand-card backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-brand-red/50 transition-colors duration-500 flex flex-col sm:flex-row h-full"
            >
              {/* Image Section */}
              <div className="relative sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 sm:w-3/5 flex flex-col relative z-20">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="font-sans text-gray-400 leading-relaxed flex-grow">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
