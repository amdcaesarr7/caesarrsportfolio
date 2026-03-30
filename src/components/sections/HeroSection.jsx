import { useEffect, useRef } from 'react';
import Beams from '../animations/Beams';
import TextType from '../animations/TextType';
import MagneticButton from '../interactive/MagneticButton';
import './HeroSection.css';

const HeroSection = () => {
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const el = scrollIndicatorRef.current;
    if (!el) return;
    let dir = 1, pos = 0;
    const animate = () => {
      pos += dir * 0.5;
      if (pos > 12) dir = -1;
      if (pos < 0) dir = 1;
      el.style.transform = `translateX(-50%) translateY(${pos}px)`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-beams-bg">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#d4af37"
          speed={1.5}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            opacity: 0.1 + Math.random() * 0.3,
          }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">VIDEO EDITOR & CREATOR</div>
        <h1 className="hero-title">
          <span className="hero-title-welcome">Welcome to Caesar's</span>
          <span className="hero-title-typed">
            <TextType
              text={["Portfolio", "Works", "Repertoire", "Skillset", "Collection", "Assets"]}
              typingSpeed={75}
              pauseDuration={2000}
              deletingSpeed={50}
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="hero-type-text"
            />
          </span>
        </h1>
        <p className="hero-subtitle">Crafting visual stories that captivate, engage, and inspire.</p>

        <MagneticButton className="hero-cta-wrap">
          <a href="#work" className="hero-cta interactive">
            <span>Explore My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </MagneticButton>
      </div>

      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
