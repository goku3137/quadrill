import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, AlertTriangle, Crosshair, Wind, Waves, Anchor, Recycle, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/hse-hero-new.jpg';
import ppeImg from '../assets/hse-ppe-new.jpg';

const HseStep = ({ number, icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="relative p-6 bg-brand-card backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg hover:border-brand-blue/50 transition-colors duration-300 group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black group-hover:text-brand-blue transition-colors duration-300 font-serif">
      {number}
    </div>
    <div className="flex items-start gap-4 relative z-10">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-white mb-2 uppercase tracking-wide">{title}</h3>
        <p className="font-sans text-gray-400 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const HSE = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-brand-dark overflow-hidden pt-24 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10 mb-24">
        <div className="absolute inset-0 z-0 bg-brand-dark/80" />
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url(${heroImg})` }} />
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="relative z-20 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
            Health & <span className="text-brand-blue">Safety</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Uncompromised safety across all project environments. Zero incidents mindset.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-block px-8 py-4 font-sans font-bold uppercase tracking-wider text-white bg-brand-blue border-brand-blue border-2 hover:bg-transparent transition-colors duration-300 rounded">
              Discuss Safety Requirements
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Policy Section */}
      <section className="py-24 relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-sans font-semibold text-sm mb-6 border border-brand-blue/20">
              <ShieldCheck size={18} /> Safety Commitment
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-6 leading-tight uppercase">
              Safety is our <span className="text-brand-blue">First Policy</span>
            </h2>
            <div className="space-y-6 font-sans text-lg text-gray-400 mb-8">
              <p>
                Quadrill Demolition LLC follows a strict health and safety policy to protect employees, clients, and the public. All operations are carried out with full compliance to international HSE standards and regulatory requirements.
              </p>
              <p>
                Our team brings over 10 years of global experience in high-risk demolition, concrete cutting, and underwater cutting works. We ensure full compliance through strict risk assessments, proper PPE use, equipment inspections, and continuous safety training.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "10+ Years High-Risk Experience",
                "Strict RAMS Compliance",
                "Continuous Global Standard Training"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-sans font-medium text-gray-300">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold uppercase tracking-wider text-brand-dark bg-white hover:bg-brand-blue hover:text-white transition-colors duration-300 rounded shadow-md">
              Contact HSE Manager
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue rounded-3xl transform rotate-3 scale-105 opacity-20 filter blur-xl"></div>
            <img src={ppeImg} alt="Construction Safety PPE" className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[500px]" />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-black text-white mb-4 uppercase"
            >
              HSE Process & <span className="text-brand-blue">Protocols</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-xl text-gray-400"
            >
              Our comprehensive step-by-step approach to ensuring zero incidents across all our specialized demolition and cutting operations.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HseStep delay={0.1} number="01" icon={AlertTriangle} title="Risk Assessment" desc="Every project begins with detailed risk assessments and method statements to identify hazards and control risks." />
            <HseStep delay={0.2} number="02" icon={HardHat} title="Training & Competency" desc="All staff undergo continuous safety training. Our team has more than 10 years of global experience handling high-risk equipment." />
            <HseStep delay={0.3} number="03" icon={ShieldCheck} title="Mandatory PPE" desc="Enforced on all sites: helmets, gloves, goggles, safety boots, harnesses, and specialized gear for underwater operations." />
            
            <HseStep delay={0.1} number="04" icon={Crosshair} title="Equipment Inspection" desc="All machinery undergoes regular inspection, maintenance, and certification before any operation." />
            <HseStep delay={0.2} number="05" icon={Wind} title="Emergency Response" desc="Customized emergency plans covering evacuation, rescue operations, underwater safety, and first-aid readiness." />
            <HseStep delay={0.3} number="06" icon={Recycle} title="Environment Protection" desc="Minimizing impact through dust control, noise reduction, waste management, and eco-friendly practices." />
            
            <HseStep delay={0.1} number="07" icon={ShieldCheck} title="Worksite Control" desc="Proper barricading, signposting, and controlled safety zones for cutting and demolition operations." />
            <HseStep delay={0.2} number="08" icon={Waves} title="Marine Safety" desc="Specialized protocols for underwater cutting: diver safety, visibility control, and communication systems." />
            <HseStep delay={0.3} number="09" icon={Anchor} title="Lifting & Rigging" desc="Strict supervision and certified rigging practices for the safe removal and lifting of heavy concrete blocks." />
            
            <HseStep delay={0.1} number="10" icon={AlertTriangle} title="Hazardous Materials" desc="Safe identification, containment, and management of hazardous materials found during demolition works." />
            <HseStep delay={0.2} number="11" icon={ShieldCheck} title="Monitor & Report" desc="Continuous site monitoring, daily safety briefings, and comprehensive reporting of all HSE metrics." />
            <HseStep delay={0.3} number="12" icon={HardHat} title="Working at Heights" desc="Mandatory fall protection, harness use, and edge protection protocols when working at heights or near open pits." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue/10 rounded-2xl mb-8 border border-brand-blue/30">
              <ShieldCheck size={40} className="text-brand-blue" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-6 uppercase">
              Discuss Your Project Safety Requirements
            </h2>
            <p className="font-sans text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our HSE Manager and engineering team are ready to review your site conditions and provide a compliant, safety-first execution plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-wider text-white bg-brand-blue border-2 border-brand-blue hover:bg-transparent transition-colors duration-300 rounded">
                Contact Our HSE Team
              </Link>
              <a href="tel:+971502340364" className="w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-wider text-white border-2 border-white/20 hover:border-white transition-colors duration-300 rounded">
                Call +971 50 234 0364
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HSE;
