import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import CodePanel from '../CodePanel';

export default function ProjectPage({ project, onClose }) {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 260);
  }

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: colors.paper,
        opacity: visible ? 1 : 0,
        transition: 'opacity .28s ease',
        overflowY: 'auto',
      }}
    >
      {/* top bar — single back control, top right */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '18px 28px',
          background: colors.mode === 'dark' ? 'rgba(18,16,22,0.85)' : 'rgba(253,251,245,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <button
          onClick={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: colors.card,
            border: `1px solid ${colors.line}`,
            color: colors.ink,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '9px 18px',
            borderRadius: 999,
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
          ← Back
        </button>
      </div>

      {/* A4-like content sheet */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 24px 100px' }}>
        <div
          style={{
            width: '100%',
            maxWidth: 720,
            background: colors.card,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 30px 70px rgba(0,0,0,0.18)',
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            opacity: visible ? 1 : 0,
            transition: 'transform .32s cubic-bezier(.2,.8,.2,1), opacity .3s ease',
          }}
        >
          <div
            style={{
              minHeight: 260,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              color: project.textColor || '#fff',
              fontSize: '1.1rem',
              fontWeight: 600,
              background: project.gradient,
              padding: '0 24px',
              textAlign: 'center',
            }}
          >
            {project.badge}
          </div>

          <div style={{ padding: '44px 44px 56px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, display: 'block', marginBottom: 14 }}>
              // title
            </span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginTop: -10, color: colors.ink }}>
              {project.title}
            </h1>

            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, display: 'block', marginBottom: 14 }}>
              // video
            </span>

            {project.video && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  borderRadius: 12,
                  overflow: 'hidden',
                  marginBottom: 32,
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${project.video}`}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>
            )}

            {project.details && (
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary, display: 'block', marginBottom: 14 }}>
                  // details
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {project.details.map((d, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 12,
                        marginBottom: 14,
                        color: colors.inkSoft,
                        fontSize: '1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {/* <span style={{ color: colors.secondary, flexShrink: 0 }}>▸</span> */}
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleClose}
              style={{
                background: colors.ink,
                color: colors.paper,
                border: 'none',
                padding: '13px 26px',
                borderRadius: 999,
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              ← Back to Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
