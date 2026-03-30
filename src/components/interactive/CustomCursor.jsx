import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const check = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const noTouch = !('ontouchstart' in window);
      setIsDesktop(hasHover && noTouch);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-magnetic], .interactive').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let raf;
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = posRef.current.x + 'px';
        ringRef.current.style.top = posRef.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const dotStyle = {
    position: 'fixed', top: 0, left: 0, width: '6px', height: '6px',
    background: '#d4af37', borderRadius: '50%', pointerEvents: 'none',
    zIndex: 99999, transform: 'translate(-50%, -50%)', transition: 'width 0.2s, height 0.2s',
    ...(isHovering && { width: '10px', height: '10px' })
  };

  const ringStyle = {
    position: 'fixed', top: 0, left: 0,
    width: isHovering ? '50px' : '36px', height: isHovering ? '50px' : '36px',
    border: `1.5px solid rgba(212,175,55,${isHovering ? 0.6 : 0.3})`,
    borderRadius: '50%', pointerEvents: 'none', zIndex: 99998,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
};

export default CustomCursor;
