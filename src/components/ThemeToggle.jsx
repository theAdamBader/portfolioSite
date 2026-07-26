import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function ThemeToggle() {
  const { mode, colors, toggle } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: `1px solid ${colors.line}`,
        background: colors.card,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background .2s, border-color .2s, transform .2s',
        flexShrink: 0,
      }}
      // onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
      // onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {isDark ? (
        // sun icon
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={colors.toggleColour} strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="1.5" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.5" />
          <line x1="4.2" y1="4.2" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.8" y2="19.8" />
          <line x1="1.5" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.5" y2="12" />
          <line x1="4.2" y1="19.8" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.8" y2="4.2" />
        </svg>
      ) : (
        // moon icon
        <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.indigo} stroke="none">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}
