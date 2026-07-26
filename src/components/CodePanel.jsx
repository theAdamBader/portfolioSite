import React from 'react';
import { useTheme } from '../hooks/ThemeContext';

const KEYWORDS = [
  'SELECT', 'FROM', 'WHERE', 'CREATE', 'INDEX', 'ON', 'JOIN', 'INNER', 'LEFT',
  'ORDER', 'BY', 'GROUP', 'ALTER', 'TABLE', 'REPLICATION', 'BEGIN', 'END',
  'const', 'function', 'return', 'async', 'await', 'if', 'else', 'import', 'export', 'default',
];

function highlight(line, colors) {
  // Split on word boundaries so we can re-color keywords, strings, and comments
  // without pulling in a full syntax-highlighting library.
  const parts = line.split(/(\s+|[(),;.])/);
  return parts.map((part, i) => {
    if (/^--/.test(part) || /^\/\//.test(part)) {
      return (
        <span key={i} style={{ color: colors.inkSoft, opacity: 0.65 }}>
          {part}
        </span>
      );
    }
    if (/^'.*'$/.test(part) || /^".*"$/.test(part)) {
      return (
        <span key={i} style={{ color: colors.tertiary }}>
          {part}
        </span>
      );
    }
    if (KEYWORDS.includes(part.toUpperCase()) && /^[A-Za-z]+$/.test(part)) {
      return (
        <span key={i} style={{ color: colors.secondary, fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function CodePanel({ filename = 'SqlFunc.jsx', code = '' }) {
  const { colors } = useTheme();
  const lines = code.replace(/^\n/, '').split('\n');

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid ${colors.line}`,
        marginBottom: 32,
      }}
    >
      {/* file tab */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 16px',
          background: colors.mode === 'dark' ? '#1F1C24' : '#EFEBDF',
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: colors.primary, display: 'inline-block' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.inkSoft }}>{filename}</span>
      </div>

      {/* scrollable code body */}
      <div
        style={{
          background: '#151318',
          padding: '18px 20px',
          maxHeight: 220,
          overflowY: 'auto',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.85rem',
          lineHeight: 1.7,
          color: '#E6E1EC',
        }}
      >
        {lines.map((line, i) => (
          <div key={i} style={{ display: 'flex', gap: 16 }}>
            <span style={{ color: '#5B5763', userSelect: 'none', flexShrink: 0, width: 20, textAlign: 'right' }}>{i + 1}</span>
            <span style={{ whiteSpace: 'pre' }}>{highlight(line, colors)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
