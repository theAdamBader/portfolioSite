import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';
import ProjectCard from './ownStudy/ProjectCard';
import ProjectPage from './ownStudy/ProjectPage';

// Import project data factories
import { ConwaysGame } from './ownStudy/ConwaysGame';
import { RichardWebsite } from './ownStudy/Website';

export default function PersonalWork() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  const projects = [
    ConwaysGame(colors),
    RichardWebsite(colors),
  ];

  return (
    <section id="personalWork" style={{ background: colors.secondaryBackground, borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, padding: '110px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 56, maxWidth: 640 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: colors.primary,
              marginBottom: 10,
              display: 'block',
            }}
          >
            // personal projects
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
              marginTop: 0,
            }}
          >
            Personal projects
          </h2>
          <p style={{ color: colors.inkSoft, marginTop: 14, fontSize: '1.05rem' }}>
            A few projects I worked on my spare time
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 26, alignItems: 'start' }}>
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              gradient={p.gradient}
              badge={p.badge}
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              textColor={p.textColor}
              onSeeMore={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectPage key={selected.id} project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
