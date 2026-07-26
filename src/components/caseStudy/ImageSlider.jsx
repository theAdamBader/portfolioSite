import React, { useState } from 'react';
import { useTheme } from '../../hooks/ThemeContext';

function normalize(images) {
  return images.map((img) => (typeof img === 'string' ? { src: img, title: null } : img));
}

export default function ImageSlider({ images = [] }) {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);

  const slides = normalize(images);
  const hasImages = slides.length > 0;
  const total = slides.length;
  const current = hasImages ? slides[index] : null;

  function prev(e) {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }

  function next(e) {
    e.stopPropagation();
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        marginBottom: 32,
        aspectRatio: '16/9',
        background: colors.mode === 'dark' ? '#1F1C24' : '#EFEBDF',
        border: `1px solid ${colors.line}`,
      }}
    >
      {hasImages ? (
        <img
          src={current.src}
          alt={current.title || `Screenshot ${index + 1} of ${total}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: colors.inkSoft,
            textAlign: 'center',
            padding: 20,
          }}
        >
          Add an `images` array to this project to show screenshots here.
        </div>
      )}

      {hasImages && current.title && (
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(0,0,0,0.55)',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.78rem',
            padding: '5px 12px',
            borderRadius: 999,
          }}
        >
          {current.title}
        </div>
      )}

      {hasImages && total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            style={arrowStyle('left', colors)}
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            style={arrowStyle('right', colors)}
          >
            ›
          </button>

          <div
            style={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              padding: '4px 10px',
              borderRadius: 999,
            }}
          >
            {index + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

function arrowStyle(side, colors) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 10,
    transform: 'translateY(-50%)',
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(0,0,0,0.45)',
    color: '#fff',
    fontSize: '1.3rem',
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}
