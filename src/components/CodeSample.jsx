import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function SQL_func({ onClose }) {
  const { colors } = useTheme();

  return (
    <section style={{ padding: '110px 28px', position: 'relative' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
          <button 
            onClick={onClose} 
            style={{
              background: 'transparent',
              border: `1px solid ${colors.line}`,
              color: colors.ink,
              fontSize: '1.2rem',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ✕ <span style={{ fontSize: '0.9rem' }}>Back</span>
          </button>
        </div>

        {/* Your Page Content */}
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.ink }}>SQL Functions Dashboard</h2>
        <p style={{ color: colors.inkSoft }}>Explore custom scripting utilities and operational metrics here.</p>
      </div>
    </section>
  );
}
