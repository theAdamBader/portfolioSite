import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '', style = {}, as: Tag = 'div' }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity .7s ease, transform .7s ease',
      }}
    >
      {children}
    </Tag>
  );
}
