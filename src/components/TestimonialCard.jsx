import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function TestimonialCard({ quote, initials, name, role }) {
  const { colors } = useTheme();
  return (
    <div style={{ background: colors.card, border: `1px solid ${colors.line}`, borderRadius: 14, padding: 28, transition: 'background .3s ease, border-color .3s ease' }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.4rem', color: colors.tertiary, lineHeight: 1, marginBottom: 6 }}>"</div>
      <p style={{ color: colors.ink, fontSize: '0.98rem', marginBottom: 20 }}>{quote}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: colors.indigo,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.85rem',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {initials}
        </div>
        <div>
          <strong style={{ display: 'block', fontSize: '0.9rem' }}>{name}</strong>
          <span style={{ fontSize: '0.8rem', color: colors.inkSoft }}>{role}</span>
        </div>
      </div>
    </div>
  );
}
