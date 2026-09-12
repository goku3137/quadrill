import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users } from 'lucide-react';
import aboutHeroImg from '../assets/home-intro-premium.webp';
import teamImg from '../assets/vertical-core-drill-setup.webp';

const About = () => {
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

  return (
    <div className="w-full bg-brand-dark overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark/60 z-10" />
          <img src={aboutHeroImg} alt="About Us Hero" className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen" />
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="relative z-20 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
            Who <span className="text-brand-red">We Are</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            A decade of relentless precision, engineering excellence, and structural dominance in the UAE.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-5xl font-black mb-8 uppercase">The Quadrill <span className="text-brand-red">Standard</span></h2>
            <div className="space-y-6 font-sans text-gray-400 text-lg leading-relaxed">
              <p>
                Established with a vision to redefine the demolition and concrete cutting landscape, Quadrill Demolition LLC is built on an uncompromising foundation of safety, precision, and technological superiority.
              </p>
              <p>
                For over 10 years, our core team of engineers, operators, and safety specialists have executed some of the most complex structural modifications and dismantling projects across the United Arab Emirates and beyond. From deep underwater marine cutting to the tactical deconstruction of urban high-rises, we deliver where others cannot.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-brand-red pl-6">
                <h4 className="font-serif text-3xl font-black text-white mb-2">10+</h4>
                <p className="font-sans text-brand-red font-bold text-sm uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="border-l-2 border-brand-red pl-6">
                <h4 className="font-serif text-3xl font-black text-white mb-2">100%</h4>
                <p className="font-sans text-brand-red font-bold text-sm uppercase tracking-widest">Safety Compliance</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeInUp} className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,42,42,0.1)]">
            <img src={teamImg} alt="Engineering Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-black uppercase">Our Core <span className="text-brand-red">Pillars</span></h2>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Target, title: "Precision", desc: "Surgical accuracy in every cut, utilizing laser-guided and diamond-wire technology." },
              { icon: Shield, title: "Safety First", desc: "An unyielding commitment to HSE protocols, ensuring zero incidents on all our sites." },
              { icon: Eye, title: "Visionary", desc: "Constantly adopting the latest global demolition technologies and robotics." },
              { icon: Users, title: "Expertise", desc: "A highly trained, veteran team capable of solving complex engineering challenges." }
            ].map((val, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-brand-dark border border-white/5 p-8 rounded-2xl hover:border-brand-red/40 transition-colors">
                <val.icon className="text-brand-red mb-6" size={40} />
                <h3 className="font-serif text-xl font-bold mb-4 uppercase">{val.title}</h3>
                <p className="font-sans text-gray-400">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
