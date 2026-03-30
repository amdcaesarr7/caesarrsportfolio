import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollFloat from '../animations/ScrollFloat';
import LightRays from '../animations/LightRays';
import './WorkSection.css';

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
            {[1, 2, 3].map((num) => (
              <div key={`reel-${num}`} className="video-container interactive">
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
                <div className="video-placeholder">
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span className="video-note">Reel {num}</span>
                </div>
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
            {[1, 2, 3].map((num) => (
              <div key={`lyrics-${num}`} className="video-container interactive">
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
                <div className="video-placeholder lyrics-placeholder">
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span className="video-note">Lyrics Video {num}</span>
                </div>
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
