import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';
import ProjectCard from './caseStudy/ProjectCard';
import ProjectPage from './caseStudy/ProjectPage';

// Import project data factories
import { MonthlyVendors } from './caseStudy/MonthlyVendors';
import { performanceProject } from './caseStudy/ProperCase';
import { backupProject } from './caseStudy/Templates';

export default function Work() {
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
    MonthlyVendors(colors),
    performanceProject(colors),
    backupProject(colors),    
  ];

  return (
    <section id="work" style={{ background: colors.primaryBackground, padding: '110px 28px' }}>
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
            // case studies
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
              marginTop: 0,
            }}
          >
            Selected work
          </h2>
          <p style={{ color: colors.inkSoft, marginTop: 14, fontSize: '1.05rem' }}>
            A few projects where database decisions had real business impact.
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
