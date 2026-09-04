import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Vision from './pages/Vision';
import Management from './pages/Management';
import Industries from './pages/Industries';
import Equipment from './pages/Equipment';
import Projects from './pages/Projects';
import HSE from './pages/HSE';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scrolls to top whenever the route changes, but skips if there's a hash anchor
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Let the browser handle hash scrolling after a short delay
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/management" element={<Management />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hse" element={<HSE />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
