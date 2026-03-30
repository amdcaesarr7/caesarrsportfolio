import ScrollFloat from '../animations/ScrollFloat';
import MagneticButton from '../interactive/MagneticButton';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <ScrollFloat
          containerClassName="contact-heading-wrap"
          textClassName="contact-heading-text"
          animationDuration={1.2}
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
        >
          Get Connected
        </ScrollFloat>

        <p className="contact-subtitle">
          Got a project? Let's make it cinematic.
        </p>

        <div className="contact-grid">
          
          {/* Email */}
          <a href="mailto:caesar.anwarr791@gmail.com" className="contact-card interactive">
            <div className="contact-card-bg"></div>
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">caesar.anwarr791@gmail.com</span>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+919323591887" className="contact-card interactive">
            <div className="contact-card-bg"></div>
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 9323591887</span>
            </div>
          </a>

          {/* Instagram Main */}
          <a href="https://instagram.com/caesar.anwar" target="_blank" rel="noopener noreferrer" className="contact-card interactive">
            <div className="contact-card-bg"></div>
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Instagram</span>
              <span className="contact-value">@caesar.anwar</span>
            </div>
          </a>

          {/* Instagram Creators (Archived) */}
          <a href="https://instagram.com/edits.tuned" target="_blank" rel="noopener noreferrer" className="contact-card interactive archived">
            <div className="contact-card-bg"></div>
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <div className="archived-badge">ARCHIVED</div>
            </div>
            <div className="contact-info">
              <span className="contact-label">Creator Prints</span>
              <span className="contact-value">@edits.tuned</span>
            </div>
          </a>

        </div>

        <div className="contact-cta-wrapper">
          <p className="contact-cta-text">Want a website like this?</p>
          <MagneticButton>
            <a href="mailto:caesar.anwarr791@gmail.com" className="contact-cta-btn interactive">
              <span>Contact Me</span>
              <div className="btn-glow"></div>
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
