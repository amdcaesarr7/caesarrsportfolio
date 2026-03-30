import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollFloat from '../animations/ScrollFloat';
import LightRays from '../animations/LightRays';
import './WorkSection.css';

// Reel Videos
import reel1 from '../../assets/reel1.mp4';
import reel2 from '../../assets/reel2.mp4';
import reel3 from '../../assets/reel3.mp4';

// Lyrics Videos
import lyrics1 from '../../assets/lyrics1.mp4';
import lyrics2 from '../../assets/lyrics2.mp4';
import lyrics3 from '../../assets/lyrics3.mp4';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ endValue, suffix, label }) => {
  const numberRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el || !containerRef.current) return;

    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: endValue,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, [endValue]);

  return (
    <div className="stat-card" ref={containerRef}>
      <div className="stat-number-wrap">
        <span ref={numberRef} className="stat-number">0</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        
        {/* Reels Showcase */}
        <div className="work-showcase">
          <ScrollFloat
            containerClassName="work-heading-wrap"
            textClassName="work-heading-text"
            animationDuration={1}
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
          >
            My Edits
          </ScrollFloat>
          
          <div className="video-grid">
            {[reel1, reel2, reel3].map((src, index) => (
              <div key={`reel-${index}`} className="video-container interactive">
                <div className="video-light-rays">
                  <LightRays
                    raysOrigin="top-center"
                    raysColor="#d4af37"
                    raysSpeed={1.2}
                    lightSpread={0.8}
                    rayLength={1.5}
                    pulsating={true}
                    mouseInfluence={0.15}
                  />
                </div>
                <video 
                  src={src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lyrics Videos Showcase */}
        <div className="work-showcase secondary-showcase">
          <ScrollFloat
            containerClassName="work-heading-wrap"
            textClassName="work-heading-text lyrics-heading"
            animationDuration={1}
            scrollStart="top bottom-=10%"
            scrollEnd="bottom center"
          >
            Lyrics Videos
          </ScrollFloat>
          
          <div className="video-grid">
            {[lyrics1, lyrics2, lyrics3].map((src, index) => (
              <div key={`lyrics-${index}`} className="video-container interactive">
                <div className="video-light-rays">
                  <LightRays
                    raysOrigin="top-center"
                    raysColor="#82b4f5"
                    raysSpeed={1.5}
                    lightSpread={0.9}
                    rayLength={1.5}
                    pulsating={true}
                    mouseInfluence={0.15}
                  />
                </div>
                <video 
                  src={src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Strip */}
        <div className="analytics-strip">
          <StatItem endValue={99} suffix="%" label="Audience Retention" />
          <StatItem endValue={99} suffix="%" label="Viral Rate" />
          <StatItem endValue={50} suffix="+" label="Projects Delivered" />
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
