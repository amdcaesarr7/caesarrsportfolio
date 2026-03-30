import { useRef, useEffect, useState } from 'react';

const MagneticButton = ({ children, strength = 0.3, className = '', ...props }) => {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const noTouch = !('ontouchstart' in window);
    setIsDesktop(hasHover && noTouch);
  }, []);

  useEffect(() => {
    if (!isDesktop || !ref.current) return;
    const el = ref.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };

    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [isDesktop, strength]);

  return (
    <div
      ref={ref}
      data-magnetic
      className={className}
      style={{ display: 'inline-block', transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', cursor: 'pointer' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
