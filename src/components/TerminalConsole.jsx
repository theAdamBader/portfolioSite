import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/ThemeContext';

function CodeRain({ show }) {
  const { colors } = useTheme();
  const columns = React.useMemo(() => {
    const chars = '01';
    return Array.from({ length: 16 }).map((_, i) => {
      const length = 14 + Math.floor(Math.random() * 10);
      const text = Array.from({ length })
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('\n');
      const palette = [colors.secondary, colors.tertiary, colors.primary, '#E6E1EC'];
      return {
        id: i,
        text,
        left: (i / 16) * 100,
        duration: 2.6 + Math.random() * 2.6,
        delay: Math.random() * -4,
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: 0.35 + Math.random() * 0.4,
        fontSize: 10 + Math.random() * 4,
      };
    });
  }, [colors]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: '-24px -34px',
        overflow: 'hidden',
        borderRadius: 20,
        zIndex: -1,
        opacity: show ? 1 : 0,
        transition: 'opacity .6s ease',
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes codeFall {
          0% { transform: translateY(-110%); }
          100% { transform: translateY(110%); }
        }
      `}</style>
      {columns.map((c) => (
        <div
          key={c.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${c.left}%`,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: c.fontSize,
            lineHeight: 1.3,
            color: c.color,
            opacity: c.opacity,
            whiteSpace: 'pre',
            textShadow: `0 0 6px ${c.color}`,
            animation: `codeFall ${c.duration}s linear infinite`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}

export default function TerminalConsole() {
  const { colors } = useTheme();
  const query = "SELECT * FROM [Developer] WHERE [Name] = 'Adam Bader';";
  const [typed, setTyped] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout;
    const start = setTimeout(function tick() {
      if (i < query.length) {
        setTyped(query.slice(0, i + 1));
        i++;
        timeout = setTimeout(tick, 32);
      } else {
        timeout = setTimeout(() => setShowResults(true), 300);
      }
    }, 500);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!showResults) return;
    const t = setTimeout(() => setShowCharacter(true), 500);
    return () => clearTimeout(t);
  }, [showResults]);

  const rows = [
    ['name', 'Adam Bader', true],
    ['role', 'Database Administrator', true],
    ['dba_years_experience', '4+', true],
    ['work_experience', '20+', true],
    ['degree', 'BSc Games Programming', true],
  ];

  return (
    <div style={{ position: 'relative' }}>
      <CodeRain show={showCharacter} />
      <div
        style={{
          position: 'relative',
          background: '#151318',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(23,21,25,0.25)',
          transform: 'rotate(1.2deg)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 18px',
            background: '#1F1C24',
            borderBottom: '1px solid #2C2833',
          }}
        >
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ marginLeft: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8A8494' }}>
            psql — adam@production
          </span>
        </div>
        <div style={{ padding: '22px 20px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.88rem', color: '#E6E1EC', minHeight: 270 }}>
          <div>
            {typed}
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: '1.1em',
                background: colors.primary,
                verticalAlign: 'text-bottom',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </div>
          <table
            style={{
              width: '100%',
              marginTop: 16,
              borderCollapse: 'collapse',
              fontSize: '0.82rem',
              opacity: showResults ? 1 : 0,
              transform: showResults ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity .5s, transform .5s',
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: 'left', color: '#8A8494', fontWeight: 500, padding: '6px 10px', borderBottom: '1px solid #2C2833' }}>header</th>
                <th style={{ textAlign: 'left', color: '#8A8494', fontWeight: 500, padding: '6px 10px', borderBottom: '1px solid #2C2833' }}>data</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, v, hl]) => (
                <tr key={k}>
                  <td style={{ padding: '7px 10px', borderBottom: '1px solid #24202B', color: '#E6E1EC' }}>{k}</td>
                  <td style={{ padding: '7px 10px', borderBottom: '1px solid #24202B', color: hl ? colors.primary : '#E6E1EC', fontWeight: hl ? 600 : 400 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
