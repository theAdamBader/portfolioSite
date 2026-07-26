import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function Tag({ children }) {
  const { colors } = useTheme();
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.74rem',
        padding: '4px 10px',
        borderRadius: 6,
        background: colors.paper,
        border: `1px solid ${colors.line}`,
        color: colors.inkSoft,
        transition: 'background .3s ease, border-color .3s ease, color .3s ease',
      }}
    >
      {children}
    </span>
  );
}
