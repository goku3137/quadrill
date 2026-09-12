import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { Hammer, Factory, Anchor, Building2, HardHat, TriangleRight } from 'lucide-react';

import commercialDemoImg from '../assets/concrete-beam-crane-lift.webp';
import siteClearanceImg from '../assets/concrete-pit-construction.webp';
import heavyConstImg from '../assets/wall-saw-cutting-concrete.webp';
import marineImg from '../assets/core-drilling-close-up.webp';
import implosionImg from '../assets/stitch-drilling-holes.webp';
import wireSawingImg from '../assets/wire-saw-large-cylinder.webp';

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
    { icon: Hammer, title: "Commercial Demolition", desc: "Tactical dismantling of multi-story structures using heavy robotics.", img: commercialDemoImg },
    { icon: Factory, title: "Site Clearance", desc: "Comprehensive debris removal and grading for large-scale developments.", img: siteClearanceImg },
    { icon: Building2, title: "Heavy Construction", desc: "Structural modifications and heavy-duty concrete cutting.", img: heavyConstImg },
    { icon: Anchor, title: "Marine Demolition", desc: "Specialized underwater cutting for offshore platforms.", img: marineImg },
    { icon: HardHat, title: "Controlled Implosion", desc: "Engineered explosive demolition for rapid, safe collapse.", img: implosionImg },
    { icon: TriangleRight, title: "Wire Sawing", desc: "Diamond wire technology for slicing infinite depths.", img: wireSawingImg }
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
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight uppercase"
          >
            ENGINEERED FOR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-800 drop-shadow-[0_0_15px_rgba(255,42,42,0.5)]">
              DESTRUCTION
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed font-sans"
          >
            Precision demolition, concrete cutting, and structural dismantling for complex industrial and marine environments. Experience the ultimate in destructive power and precision.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center font-sans">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:shadow-[0_0_30px_rgba(255,42,42,0.7)] hover:bg-red-500 hover:-translate-y-1 transition-all duration-300"
            >
              Initiate Project
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded hover:bg-white/10 transition-all duration-300"
            >
              Explore Capabilities
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
          <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">OUR CAPABILITIES</h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">Advanced solutions engineered for extreme precision and zero compromises.</p>
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
              className="group relative bg-brand-card backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-brand-red/50 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Image Header for Card */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-all duration-500">
                  <service.icon size={24} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h3 className="font-serif text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="font-sans text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust / Stats Section */}
      <section className="relative w-full py-32 border-t border-b border-white/10 bg-black/30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-24 font-sans"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "Zero", label: "Safety Incidents" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Readiness" }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <h3 className="font-serif text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-brand-red font-bold tracking-widest uppercase text-sm md:text-base">{stat.label}</p>
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
          <div className="bg-brand-card backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 hover:border-brand-red/30 transition-colors duration-500">
            <p className="font-serif text-2xl md:text-4xl font-light italic leading-relaxed text-gray-300 mb-8">
              "Quadrill's approach to complex demolition is unmatched. Their precision cutting and rigorous safety standards kept our urban project ahead of schedule and risk-free."
            </p>
            <p className="font-sans text-brand-red font-bold tracking-wider">— Director of Infrastructure, UAE</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
