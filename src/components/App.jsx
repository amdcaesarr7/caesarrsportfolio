import { useEffect, useState } from 'react';
import BlobCursor from './components/interactive/BlobCursor';
import CustomCursor from './components/interactive/CustomCursor';
import ScrollProgress from './components/interactive/ScrollProgress';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import WorkSection from './components/sections/WorkSection';
import ContactSection from './components/sections/ContactSection';
import MagneticButton from './components/interactive/MagneticButton';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Page transition fade-in
    document.body.style.opacity = '1';

    // Intersection observer for navbar active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BlobCursor />
      <CustomCursor />
      <ScrollProgress />

      <nav className="floating-nav">
        <ul className="nav-list">
          <li>
            <MagneticButton strength={0.2}>
              <a href="#hero" className={`nav-link interactive ${activeSection === 'hero' ? 'active' : ''}`}>
                Home
              </a>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton strength={0.2}>
              <a href="#about" className={`nav-link interactive ${activeSection === 'about' ? 'active' : ''}`}>
                Who I Am
              </a>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton strength={0.2}>
              <a href="#work" className={`nav-link interactive ${activeSection === 'work' ? 'active' : ''}`}>
                What I Do
              </a>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton strength={0.2}>
              <a href="#contact" className={`nav-link interactive ${activeSection === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </MagneticButton>
          </li>
        </ul>
      </nav>

      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
