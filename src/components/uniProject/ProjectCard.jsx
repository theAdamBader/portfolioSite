import React, { useState } from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import Tag from '../Tag';

export default function ProjectCard({ gradient, badge, title, desc, tags, textColor = '#fff', onSeeMore, hideTags = false }) {
  const { colors } = useTheme();
  const [hover, setHover] = useState(false);
  const [cardExpanded, setCardExpanded] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: colors.card,
        border: `1px solid ${colors.line}`,
        borderRadius: 14,
        overflow: 'hidden',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        // transform: hover ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hover ? '0 24px 40px rgba(0,0,0,0.18)' : 'none',
        transition: 'transform .3s, box-shadow .3s, background .3s ease, border-color .3s ease',
      }}
    >
      <div
        onClick={() => setCardExpanded((e) => !e)}
        style={{
          position: 'relative',
          height: 180,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          color: textColor,
          fontSize: '0.85rem',
          fontWeight: 600,
          background: gradient,
          cursor: 'pointer',
        }}
      >
        {badge}
        <span
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: `translateX(-50%) ${cardExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}`,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            transition: 'transform .25s ease',
          }}
        >
          ▾
        </span>
      </div>
      <div
        style={{
          maxHeight: cardExpanded ? 900 : 0,
          overflow: 'hidden',
          transition: 'max-height .35s ease',
          display: 'flex',
          flexDirection: 'column',
          flex: cardExpanded ? 1 : 'none',
        }}
      >
        <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: '0.92rem', color: colors.inkSoft, marginBottom: 14, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{desc}</p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 18,
            marginTop: 'auto',
            opacity: hideTags ? 0 : 1,
            transform: hideTags ? 'translateY(-4px)' : 'translateY(0)',
            pointerEvents: hideTags ? 'none' : 'auto',
            transition: 'opacity .2s ease, transform .2s ease',
          }}
        >
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onSeeMore}
            style={{
              background: 'none',
              border: `1.5px solid ${colors.line}`,
              color: colors.ink,
              padding: '10px 22px',
              borderRadius: 999,
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'border-color .2s, transform .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.line;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            See more
          </button>
        </div>
        </div>
        </div>
      </div>
  );
}
