import React from 'react';
import { ThemeProvider, useTheme } from './hooks/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Work from './components/Work';
import PersonalWork from './components/PersonalWork';
import UniWork from './components/UniWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PageContent() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.paper,
        color: colors.ink,
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.6,
        minHeight: '100vh',
        transition: 'background .3s ease, color .3s ease',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1);} 50% { opacity:.4; transform:scale(1.3);} }
        a { text-decoration: none; color: inherit; }
        input:focus, textarea:focus { outline: none; border-color: ${colors.primary} !important; }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
      `}</style>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <PersonalWork />
      <UniWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <PageContent />
    </ThemeProvider>
  );
}
