import BlurText from '../animations/BlurText';
import ScrollFloat from '../animations/ScrollFloat';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <ScrollFloat
          containerClassName="about-heading-wrap"
          textClassName="about-heading-text"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Who I Am
        </ScrollFloat>

        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-image-container">
              <div className="about-image-glow" />
              <img
                src="https://imgs.search.brave.com/x5GMB7o3tVz7If38-1tidB1e520SkIxbyU6QCKvoTK8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbWFsZS12/aWRlby1lZGl0b3It/aWxsdXN0cmF0aW9u/LXN2Zy1kb3dubG9h/ZC1wbmctODM0MTUx/NC5wbmc"
                alt="Caesar Animated"
                className="about-image-element"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1, borderRadius: '20px' }}
              />
              <div className="about-image-border" />
            </div>
          </div>

          <div className="about-text-col">
            <div className="about-glass-card">
              <div className="about-text-badge">THE EDITOR</div>

              <BlurText
                text="They say great editors are born, not made."
                delay={80}
                animateBy="words"
                direction="top"
                className="about-hook"
              />

              <BlurText
                text="I'm Caesar — and like Julius, I came to conquer. Not kingdoms, but timelines. Every frame I touch becomes a story. Every cut, a heartbeat."
                delay={60}
                animateBy="words"
                direction="top"
                className="about-body"
              />

              <BlurText
                text="It's not me praising myself — this is what people say. Maybe you'll feel the same after we work together."
                delay={60}
                animateBy="words"
                direction="top"
                className="about-body"
              />

              <BlurText
                text="I don't lack opportunities. But I love helping rising creators. Being a creator is hard — the multitasking, the grind, the pressure to stand out."
                delay={60}
                animateBy="words"
                direction="top"
                className="about-body"
              />

              <div className="about-highlight-wrap">
                <BlurText
                  text="That's exactly why I'm here."
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="about-highlight"
                />
              </div>

              <BlurText
                text="So if you need any type of edit — reels, lyrics, cinematic, motion — just remember: Caesar is here with you. Don't you worry."
                delay={60}
                animateBy="words"
                direction="top"
                className="about-closer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
