import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-brand-dark overflow-hidden pt-24 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-white/10 mb-24">
        <div className="absolute inset-0 z-0 bg-brand-dark/90" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-red/10 to-transparent opacity-50" />
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="relative z-20 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
            Initiate <span className="text-brand-red">Contact</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Our engineering team is on standby 24/7 to discuss your project requirements.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-5xl font-black mb-8 uppercase">Headquarters</h2>
            <div className="space-y-8 font-sans">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card border border-white/5 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,42,42,0.1)]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-gray-400">Quadrill Demolition LLC<br/>Industrial Area 11, Sharjah<br/>United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card border border-white/5 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,42,42,0.1)]">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone (24/7 Dispatch)</h4>
                  <p className="text-gray-400">+971 50 234 0364</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card border border-white/5 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,42,42,0.1)]">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-gray-400">info@quadrilldemolition.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="bg-brand-card backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h3 className="font-serif text-2xl font-black uppercase mb-8">Request an Estimate</h3>
            <form className="flex flex-col gap-6 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
                <input type="text" placeholder="Last Name" className="bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
              <input type="tel" placeholder="Phone Number" className="bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
              <textarea placeholder="Project Details & Requirements" rows={5} className="bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors resize-none"></textarea>
              <button type="button" className="group flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-red-500 shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] transition-all">
                Send Message <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
