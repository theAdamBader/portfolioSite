import React from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const { colors } = useTheme();

  return (
    <section id="testimonials" style={{ background: colors.card, borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, padding: '110px 28px', transition: 'background .3s ease, border-color .3s ease' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 56, maxWidth: 640 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, marginBottom: 10, display: 'block' }}>// feedback</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)' }}>What people say</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 24 }}>
          <TestimonialCard quote="Adam is the person we call when something is wrong with data at 2am — and the person who made sure it almost never happens." initials="RL" name="Rachel Lin" role="VP Engineering, Northbridge Systems" />
          <TestimonialCard quote="The migration Adam led was the smoothest infrastructure project we've run. No drama, no downtime, just a clean handover." initials="MO" name="Marcus Okafor" role="CTO, Fenwick Retail Group" />
          <TestimonialCard quote="He explains database problems in plain English, which is rarer than it should be. Our whole team trusts his judgment." initials="SP" name="Sara Patel" role="Product Lead, Halden & Co." />
        </div>
      </div>
    </section>
  );
}
