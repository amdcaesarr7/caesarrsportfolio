# caesarrsportfolio
Caesar's Premium Portfolio Walkthrough
The portfolio website has been fully structured, styled, and animated according to the Apple-grade premium design specifications. All animations and interactive features have been integrated into a Vite + React application.

Development Server
The local development server is currently running. You can view the live site at: http://localhost:5173/

Features & Implementation
1. Interactive Core (src/components/interactive/)
These elements provide the premium feel across the entire site:

BlobCursor: A soft, glowing gold gradient blob that smoothly follows the mouse cursor with an eased lerp calculation.
CustomCursor: A minimal dot and expanding ring that replaces the default system arrow. It scales up dynamically when hovering over interactive elements.
ScrollProgress: A thin gradient bar fixed at the very top of the viewport, filling from left to right as you scroll down the page.
MagneticButton: A wrapper component applied to CTA buttons and navigation links. It creates a subtle magnetic pull toward the cursor.
NOTE

All cursor/pointer effects automatically disable themselves on touch devices (mobile/tablets) to ensure native scrolling performance.

2. The Animation Engine (src/components/animations/)
Five high-end animation components have been integrated:

Beams (Three.js & React Three Fiber): Renders the subtly animated, cinematic light rays in the background of the Hero section.
LightRays (OGL WebGL Shader): Computes real-time volumetric light rays that pulse and react to mouse movement above your video containers.
TextType (GSAP): Powers the typing and deleting cycle in the Hero section (Portfolio → Works → Repertoire →...).
BlurText (Framer Motion): Recreates the Apple-style blurred-text reveal on scroll for your bio.
ScrollFloat (GSAP ScrollTrigger): Drives the character-by-character float-in animation for section headings.
3. Page Structure (src/components/sections/)
Hero Section (#hero)
The entry point features the Three.js Beams background, floating CSS particles, and the GSAP typing animation. It includes a magnetic CTA button and an animated scroll indicator.

About Section (#about)
The "Who I Am" section layout is ready.

Left Column: Contains the placeholder for your animated image featuring an ambient rotating dual-color glow ring.
Right Column: Your bio is housed inside a glassmorphism card. The copy has been formatted with proper hierarchy (Hook → Body → Highlight → Closer) and reveals using the BlurText effect as the user scrolls.
Work Section (#work)
The video showcase is divided into Reels and Lyrics Videos.

Video Containers: Six placeholder containers (9:16 aspect ratio) are built with hover 3D lift effects.
Lighting: Each container features a WebGL LightRays instance customized by color (gold for Reels, cool blue for Lyrics).
Analytics Strip: A frosted glass panel at the bottom uses GSAP to animate the numbers counting up to their final values (99%, 99%, 50+) when scrolled into view.
Contact Section (#contact)
The "Get Connected" footer section.

Glassmorphism contact cards for Email, Phone, and Instagram.
The @edits.tuned account is styled specifically as "Archived" with reduced opacity and a specialized badge.
A magnetic CTA button with a hidden gradient glow that reveals on hover.
Next Steps for You (Caesar)
Add Your Videos:
Save your .mp4 files into the public/ directory or src/assets/.
Update the placeholder divs in src/components/sections/WorkSection.jsx to <video> tags referencing your files.
Add Your Animated Image:
Replace the glowing placeholder div in src/components/sections/AboutSection.jsx with your <img src="..." /> or <video src="..." />.
Deploy:
Whenever you are ready, you can build the site with npm run build and deploy the dist folder to Vercel, Netlify, or GitHub Pages.
