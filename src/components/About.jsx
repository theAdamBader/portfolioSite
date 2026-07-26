import React from 'react';
import mainImg from '.././assets/selfie/selfie1.jpg';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';

const stats = [
  ['4+ years', 'Databases Experience'],
  ['10+ years', 'Coding Experience'],
  ['20+ years', 'Work Experience'],
  ['30+ years', 'Gaming Experience'],
];

export default function About() {
  const { colors } = useTheme();

  return (
    <section id="about" style={{ background: colors.secondaryBackground, borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, padding: '110px 28px', transition: 'background .3s ease, border-color .3s ease' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: window.innerWidth > 900 ? '0.9fr 1.1fr' : '1fr', gap: 70, alignItems: 'start' }}>
        <Reveal
          style={{
            aspectRatio: '1/1.1',
            maxWidth: window.innerWidth > 900 ? 'none' : 280,
            borderRadius: 18,
            overflow: 'hidden',
          }}
        >
          <img
            src={mainImg}
            alt="Adam Bader"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        </Reveal>
        <Reveal>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, marginBottom: 10, display: 'block' }}>// about</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1rem, 2.4vw, 2rem)', marginTop: 0 }}>
            The person behind the screen
          </h2>
          <p style={{ color: colors.inkSoft, marginBottom: 18, fontSize: '1.03rem' }}>
            I’ve spent the last four years making sure that our databases are up to date and taking projects that I manged to complete and run, with the success of reducing workload by 40% to 60%. Collaborating with different departments to ensure the sites’ data are imported within the hospital’s software using an automated system, Boston Workstation to reduce manual labour by more than 70%.
          </p>
          <p style={{ color: colors.inkSoft, marginBottom: 18, fontSize: '1.03rem' }}>
            In my free time, I enjoy playing video and board games that involve problem solving and roleplaying. Furthermore, I like to keep up to date with the latest tech, AI & machine learning and practicing those so that I am in tune with the latest. 
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 36 }}>
            {stats.map(([num, label]) => (
              <div key={label} style={{ background: colors.paper, border: `1px solid ${colors.line}`, borderRadius: 12, padding: 18, transition: 'background .3s ease, border-color .3s ease' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: colors.primary }}>{num}</div>
                <div style={{ fontSize: '0.82rem', color: colors.inkSoft, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
