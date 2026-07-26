import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

export default function Footer() {
  const { colors } = useTheme();
  return (
    <footer style={{ textAlign: 'center', padding: '40px 20px', color: colors.inkSoft, fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
      © 2026 Adam Bader — Database Administrator. Built with care, indexed for speed.
    </footer>
  );
}
