import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function LogEntry({ version, title, company, desc }) {
  const { colors } = useTheme();
  return (
    <div style={{ position: 'relative', padding: '0 0 46px 34px' }}>
      <div
        style={{
          position: 'absolute',
          left: -7,
          top: 2,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: colors.paper,
          border: `2.5px solid ${colors.primary}`,
        }}
      />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, marginBottom: 6, display: 'block' }}>
        {version}
      </span>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', marginBottom: 4 }}>{title}</h3>
      <span style={{ color: colors.primary, fontWeight: 600, fontSize: '0.95rem', marginBottom: 10, display: 'block' }}>{company}</span>
      <p style={{ color: colors.inkSoft, fontSize: '0.98rem', maxWidth: 640 }}>{desc}</p>
    </div>
  );
}
