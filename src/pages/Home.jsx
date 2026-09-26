import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { Hammer, Factory, Anchor, Building2, HardHat, TriangleRight } from 'lucide-react';

import structuralDismantlingImg from '../assets/structural-dismantling-service.jpg';
import floorSawingImg from '../assets/floor-sawing-service.jpg';
import concreteBreakingImg from '../assets/concrete-breaking-service.jpg';
import marineQuayImg from '../assets/marine-quay-wall-service.jpg';
import pileTrimmingImg from '../assets/pile-trimming-service.jpg';
import wireSawingImg from '../assets/wire-sawing-service-updated.jpg';

// 3D Animated Abstract Debris/Structure for the Hero
const FloatingGeometry = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#ff2a2a"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Home = () => {
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

  const services = [
    { icon: Building2, title: "Structural Dismantling", desc: "Systematic dismantling of steel, concrete, and composite structures using engineered sequencing. Ensures safe removal of beams, slabs, columns, and heavy structural components.", img: structuralDismantlingImg },
    { icon: TriangleRight, title: "Floor Sawing", desc: "Efficient cutting of concrete slabs, pavements, and industrial floors. Used for expansion joints, utility trenches, and controlled slab removal.", img: floorSawingImg },
    { icon: Hammer, title: "Concrete Breaking & Removal", desc: "Controlled breaking and removal using hydraulic breakers, robotic demolition machines, and cutting tools. Ideal for renovation, repair, and structural modification projects.", img: concreteBreakingImg },
    { icon: Anchor, title: "Marine & Quay Wall Cutting", desc: "Specialized cutting solutions for marine infrastructure such as quay walls, breakwaters, jetties, and underwater structural components.", img: marineQuayImg },
    { icon: HardHat, title: "Pile Trimming / Breaking", desc: "Professional pile trimming and breaking for construction foundations. Ensures accurate leveling and preparation of piles using safe and efficient breaking methods.", img: pileTrimmingImg },
    { icon: Factory, title: "Wire Sawing", desc: "Specialized cutting for large, thick, or heavily reinforced concrete and steel structures. Ideal for bridges, columns, beams, foundations, and marine structures.", img: wireSawingImg }
  ];

  return (
    <div className="w-full bg-brand-dark overflow-hidden">
      
      {/* 3D Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Environment preset="city" />
            <FloatingGeometry />
          </Canvas>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark z-10" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center max-w-5xl mx-auto px-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight uppercase"
          >
            ENGINEERED FOR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-800 drop-shadow-[0_0_15px_rgba(27,129,229,0.5)]">
              DESTRUCTION
            </span>
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-sm md:text-base tracking-[0.2em] uppercase font-bold text-brand-blue mb-8"
          >
            Precision Demolition, Concrete & Underwater Cutting Specialists
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed font-sans"
          >
            Quadrill Demolition LLC is a UAE-based specialist with 10+ years of professional team experience. We deliver safety, precision, experienced manpower, advanced machinery, underwater cutting capability, and international-standard execution.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center font-sans">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-blue text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(27,129,229,0.4)] hover:shadow-[0_0_30px_rgba(27,129,229,0.7)] hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded hover:bg-white/10 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-32 px-6 bg-brand-dark">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">Our Capabilities</h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">Engineered solutions for the most complex demolition and structural modification challenges.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group relative bg-brand-card backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Image Header for Card */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_0_20px_rgba(27,129,229,0.5)] transition-all duration-500">
                  <service.icon size={24} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h3 className="font-serif text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="font-sans text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative w-full py-32 px-6 bg-brand-dark">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">OUR GALLERY</h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto mb-12">Visual showcase coming soon.</p>
          
          {/* Empty Gallery Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Gallery items will be placed here */}
          </div>
        </motion.div>
      </section>

      {/* Trust / Stats Section */}
      <section className="relative w-full py-32 border-t border-b border-white/10 bg-black/30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24 font-sans"
        >
          {[
            { value: "Zero", label: "Safety Incidents" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Readiness" }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <h3 className="font-serif text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-brand-blue font-bold tracking-widest uppercase text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="bg-brand-card backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 hover:border-brand-blue/30 transition-colors duration-500">
            <h3 className="font-serif text-3xl md:text-5xl font-black text-white mb-6 uppercase">Need a safe and reliable demolition partner?</h3>
            <p className="font-sans text-gray-300 text-lg mb-8">Call us at +971 50 234 0364 or Email info@quadrilldemolition.com</p>
            <Link to="/contact" className="px-8 py-4 bg-brand-blue text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(27,129,229,0.4)] hover:bg-blue-500 transition-all duration-300">
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
