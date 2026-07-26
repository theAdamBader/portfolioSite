import React from 'react';
import { useTheme } from '../hooks/ThemeContext';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Projects', '#personalWork'],
  ['UniDays', '#uniWork'],
];

export default function Header() {
  const { colors } = useTheme();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.mode === 'dark' ? 'rgba(18,16,22,0.85)' : 'rgba(253,251,245,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colors.line}`,
        transition: 'background .3s ease, border-color .3s ease',
      }}
    >
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 28px', maxWidth: 1140, margin: '0 auto' }}>
         <a href='#top'
          onClick={(e) => {
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: colors.primary, display: 'inline-block' }} />
            Adam Bader
          </div>
        </a>
        <ul style={{ display: window.innerWidth > 900 ? 'flex' : 'none', gap: 34, fontSize: '0.95rem', fontWeight: 500, listStyle: 'none' }}>
          {navLinks.map(([label, href]) => (
            <li key={label}>
              <a href={href} style={{ color: colors.inkSoft }}>{label}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <ThemeToggle />
          <a
            href="#contact"
            style={{ background: colors.ink, color: colors.paper, padding: '10px 20px', borderRadius: 999, fontSize: '0.9rem', fontWeight: 600 }}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
