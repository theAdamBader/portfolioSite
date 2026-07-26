import React, { useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Tag from './Tag';

export default function StackCard({ iconBg, iconColor = '#fff', icon, title, desc, tags }) {
  const { colors } = useTheme();
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: colors.card,
        border: `1px solid ${hover ? 'transparent' : colors.line}`,
        borderRadius: 14,
        padding: 26,
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hover ? '0 16px 30px rgba(0,0,0,0.12)' : 'none',
        transition: 'transform .25s, box-shadow .25s, border-color .25s, background .3s ease',
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          color: iconColor,
          fontFamily: "'Space Grotesk', sans-serif",
          background: iconBg,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: '0.92rem', color: colors.inkSoft, marginBottom: 14 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}
