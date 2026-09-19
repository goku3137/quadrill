import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import { db } from '../firebase';

import projHeroImg from '../assets/projects-hero-premium.webp';
import proj1Img from '../assets/proj-bridge-demo.jpg';
import proj2Img from '../assets/proj-refinery-demo.jpg';
import proj3Img from '../assets/proj-downtown-mod.jpg';
import proj4Img from '../assets/proj-underwater-cut.jpg';

const Projects = () => {
  // --- Admin/Firebase logic commented out for now ---
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  //       const querySnapshot = await getDocs(q);
  //       const projData = [];
  //       querySnapshot.forEach((doc) => {
  //         projData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setProjects(projData);
  //     } catch (error) {
  //       console.error("Error fetching projects: ", error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchProjects();
  // }, []);

  // Hardcoded old projects
  const projects = [
    { id: 1, title: "Dubai Marina Bridge Demolition", category: "Heavy Civil / Marine", imageUrl: proj1Img },
    { id: 2, title: "Abu Dhabi Industrial Refinery Decommissioning", category: "Oil & Gas", imageUrl: proj2Img },
    { id: 3, title: "Downtown Core Structural Modification", category: "Commercial", imageUrl: proj3Img },
    { id: 4, title: "Sharjah Port Underwater Cutting", category: "Marine Infrastructure", imageUrl: proj4Img }
  ];

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
    <div className="w-full bg-brand-dark overflow-hidden pt-24 pb-32 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10 mb-24">
        <div className="absolute inset-0 z-0 bg-brand-dark/80" />
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen grayscale" style={{ backgroundImage: `url(${projHeroImg})` }} />
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="relative z-20 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
            Featured <span className="text-brand-blue">Portfolio</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of engineering dominance and complex structural dismantlement.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((proj) => (
            <motion.div 
              key={proj.id} 
              variants={fadeInUp}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
            >
              <img 
                src={proj.imageUrl} 
                alt={proj.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="font-sans text-brand-blue font-bold uppercase tracking-widest text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {proj.category}
                </p>
                <h3 className="font-serif text-3xl font-black text-white uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {proj.title}
                </h3>
                
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-150">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
