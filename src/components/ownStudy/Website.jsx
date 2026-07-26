import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import cgol1 from './img/1.gif';
import cgol2 from './img/2.gif';
import cgol3 from './img/3.gif';

export const RichardWebsite = (colors) => ({
  id: 'website',
  gradient: `linear-gradient(135deg, ${colors.secondary}, #7bbfec)`,
  badge: 'PORTFOLIO SITE',
  title: 'Richard Wajman',
  desc: 'The Problem: Design and develop a unique portfolio website that showcases the client\'s work through an engaging, interactive experience while remaining responsive across desktop and mobile devices. \n\nThe Solution: Designed the UI in Adobe Photoshop and developed a responsive portfolio website using HTML, CSS, Sass, JavaScript, and jQuery, featuring interactive animations, a spotlight navigation effect, and a mobile-friendly experience.',
  tags: ['HTML', 'CSS','Sass','JavaScript','Photoshop'],
  video: 'F110HalDLZk',
  details: [
    'UX Design: Produced wireframes and high-fidelity mock-ups in Adobe Photoshop, collaborating closely with the client to refine the design before development began.',
    'Front-End Development: Built the website using HTML, CSS, Sass, JavaScript, and jQuery, translating the approved designs into a fully responsive and interactive portfolio.',
    'Interactive Experience: Created a custom spotlight navigation effect with animated links, encouraging users to explore the site while highlighting the client\'s skills through unique visual interactions.',
    'Responsive Design: Optimized the website for multiple screen sizes, resolving image scaling issues by separating graphic elements and incorporating SVG components to preserve the intended layout across devices.',
    'Additional Features: Implemented a mobile navigation menu, desktop notification banner, and responsive UI enhancements to provide a seamless user experience across desktop and mobile platforms.',
    'Client Collaboration: Worked iteratively with the client throughout development, incorporating feedback at each stage to ensure the final product aligned with their vision and usability expectations.',
  ],
});
