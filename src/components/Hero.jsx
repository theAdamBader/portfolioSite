import React from 'react';
import { useTheme } from '../hooks/ThemeContext';
import TerminalConsole from './TerminalConsole';

export default function Hero() {
  const { colors } = useTheme();

  return (
    <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '80px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: window.innerWidth > 900 ? '1.1fr 0.9fr' : '1fr', gap: 60, alignItems: 'center', width: '100%' }}>
        <div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              fontWeight: 500,
              color: colors.primary,
              background: 'rgba(46,196,182,0.1)',
              padding: '6px 14px',
              borderRadius: 999,
              marginBottom: 22,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: colors.primary, animation: 'pulse 1.6s infinite' }} />
            Available for new projects
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              marginBottom: 22,
            }}
          >
            Keeping your data{' '}
            <span style={{ position: 'relative', color: colors.primary }}>
              up
              <span style={{ position: 'absolute', left: 0, right: 0, bottom: 6, height: 12, background: colors.tertiary, zIndex: -1, opacity: 0.6 }} />
            </span>
            , accurate, and <span style={{ color: colors.primary }}>fast</span>.
          </h1>
          <p style={{ fontSize: '1.15rem', color: colors.inkSoft, maxWidth: 480, marginBottom: 34 }}>
            I'm Adam Bader, a Database Administrator who designs, tunes, and safeguards the systems that keep applications running when it matters most.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#work" style={{ padding: '14px 26px', borderRadius: 999, fontWeight: 600, fontSize: '0.95rem', background: colors.primary, color: '#fff' }}>
              View my work
            </a>
            <a href="#contact" style={{ padding: '14px 26px', borderRadius: 999, fontWeight: 600, fontSize: '0.95rem', border: `1.5px solid ${colors.ink}` }}>
              Get in touch
            </a>
          </div>
        </div>
        <TerminalConsole />
      </div>
    </section>
  );
}
