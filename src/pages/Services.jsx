import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Hammer, Factory, Anchor, Building2, HardHat, TriangleRight, Droplets, Zap } from 'lucide-react';

import commercialDemoImg from '../assets/srv-commercial-demo.jpg';
import siteClearanceImg from '../assets/srv-site-clearance.jpg';
import heavyConstImg from '../assets/srv-heavy-cutting.jpg';
import marineImg from '../assets/srv-marine-cutting.jpg';
import implosionImg from '../assets/srv-implosion.jpg';
import wireSawingImg from '../assets/srv-wire-sawing.jpg';
import hydroImg from '../assets/srv-hydro-demo.jpg';
import coreImg from '../assets/core-drilling-close-up.webp';

import servicesHeroImg from '../assets/services-hero-premium.webp';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
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
    { icon: Hammer, title: "Controlled Demolition", desc: "Safe and precise dismantling of structures using engineered methods. Ideal for industrial, commercial, and infrastructure projects requiring vibration-controlled and low-impact demolition.", img: commercialDemoImg },
    { icon: Building2, title: "Concrete Cutting", desc: "High-precision concrete cutting using advanced machinery for structural modifications, openings, and heavy-duty removal. Suitable for construction, renovation, and industrial applications.", img: heavyConstImg },
    { icon: Hammer, title: "Wall Sawing", desc: "Accurate cutting of reinforced concrete walls for doors, windows, shafts, and structural openings. Ensures clean, straight, and vibration-controlled cuts.", img: commercialDemoImg },
    { icon: TriangleRight, title: "Wire Sawing", desc: "Specialized cutting for large, thick, or heavily reinforced concrete and steel structures. Ideal for bridges, columns, beams, foundations, and marine structures.", img: wireSawingImg },
    { icon: Hammer, title: "Floor Sawing", desc: "Efficient cutting of concrete slabs, pavements, and industrial floors. Used for expansion joints, utility trenches, and controlled slab removal.", img: siteClearanceImg },
    { icon: Zap, title: "Core Drilling", desc: "Precise circular openings in concrete and asphalt for MEP installations, anchor placements, utility penetrations, and structural adjustments.", img: coreImg },
    { icon: Anchor, title: "Underwater Cutting", desc: "Advanced underwater concrete cutting for marine and offshore structures. Suitable for quay walls, jetties, bridge foundations, port infrastructure, and underwater demolition works.", img: marineImg },
    { icon: Factory, title: "Structural Dismantling", desc: "Systematic dismantling of steel, concrete, and composite structures using engineered sequencing. Ensures safe removal of beams, slabs, columns, and heavy structural components.", img: siteClearanceImg },
    { icon: Factory, title: "Industrial Demolition", desc: "Complete demolition solutions for factories, plants, warehouses, and industrial facilities. Includes machinery removal, foundation breaking, and structural dismantling with strict safety compliance.", img: commercialDemoImg },
    { icon: Anchor, title: "Marine & Quay Wall Cutting", desc: "Specialized cutting solutions for marine infrastructure such as quay walls, breakwaters, jetties, and underwater structural components.", img: marineImg },
    { icon: HardHat, title: "Concrete Breaking & Removal", desc: "Controlled breaking and removal using hydraulic breakers, robotic demolition machines, and cutting tools. Ideal for renovation, repair, and structural modification projects.", img: heavyConstImg },
    { icon: HardHat, title: "Pile Trimming / Breaking", desc: "Professional pile trimming and breaking for construction foundations. Ensures accurate leveling and preparation of piles using safe and efficient breaking methods.", img: heavyConstImg },
    { icon: Droplets, title: "Water Jetting / Hydro Demolition", desc: "High-pressure water jetting for precise and non-vibratory removal of damaged or deteriorated concrete. Hydro demolition protects structural integrity, avoids micro-cracks, and is ideal for bridges, tunnels, marine structures, and repair works requiring clean, controlled concrete removal.", img: hydroImg },
    { icon: Factory, title: "Surface Preparation & Grinding", desc: "Industrial-grade grinding and surface preparation for concrete floors and slabs. Provides smooth, level surfaces ready for coatings, flooring, or new installations.", img: siteClearanceImg },
    { icon: HardHat, title: "Technical Engineering Support", desc: "Complete engineering documentation including method statements, risk assessments, lifting plans, and project execution strategies. Ensures compliance with international safety and engineering standards.", img: implosionImg }
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
            Our <span className="text-brand-blue">Capabilities</span>
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
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
              variants={fadeInUp}
              className="group relative bg-brand-card backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-colors duration-500 flex flex-col sm:flex-row h-full"
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
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
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
