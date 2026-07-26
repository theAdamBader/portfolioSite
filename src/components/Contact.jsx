import React, { useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';

const contactLinks = [
  ['email', 'adam.bader25@gmail.com', 'mailto:adam.bader25@gmail.com'],
  ['location', 'London, UK'],
];

const fields = [
  ['name', 'text', 'Your name'],
  ['email', 'email', 'you@company.com'],
];

const FORM_ENDPOINT = 'https://formspree.io/f/mojgyqgv';

export default function Contact() {
  const { colors } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const panelBg = '#171519';
  const panelInputBg = '#232028';
  const panelBorder = '#35313D';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const buttonLabel =
    status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : status === 'error' ? 'Something went wrong — try again' : 'Send message';

  return (
    <section id="contact" style={{ padding: '110px 28px' }}>
      <div
        style={{
          background: panelBg,
          color: colors.paper === '#121016' ? '#F3F1F6' : '#FDFBF5',
          borderRadius: 24,
          padding: window.innerWidth > 900 ? '70px 50px' : '50px 26px',
          maxWidth: 1140,
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 900 ? '1fr 1fr' : '1fr', gap: 60 }}>
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: 500,
                color: colors.primary,
                background: 'rgba(46,196,182,0.15)',
                padding: '6px 14px',
                borderRadius: 999,
                marginBottom: 22,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: colors.primary, animation: 'pulse 1.6s infinite' }} />
              Open to new roles &amp; contracts
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', marginBottom: 16 }}>Let's talk about your data.</h2>
            <p style={{ color: '#B8B3C2', maxWidth: 420, marginBottom: 30 }}>
              Whether it's a migration, a performance problem, or building out a DBA function from scratch — I'd like to hear about it.
            </p>
            <div>
              {contactLinks.map(([k, v, href]) => (
                <a key={k} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5, color: '#fff', fontSize: '1rem' }}>
                  <span style={{ color: colors.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>{k}</span> {v}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {fields.map(([field, type, placeholder]) => (
              <div key={field} style={{ marginBottom: 18 }}>
                <label htmlFor={field} style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary, marginBottom: 6 }}>
                  {field}
                </label>
                <input
                  id={field}
                  type={type}
                  placeholder={placeholder}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  style={{
                    width: '100%',
                    background: panelInputBg,
                    border: `1px solid ${panelBorder}`,
                    color: '#fff',
                    padding: '12px 14px',
                    borderRadius: 10,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                  }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="message" style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: colors.primary, marginBottom: 6 }}>
                message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  minHeight: 90,
                  background: panelInputBg,
                  border: `1px solid ${panelBorder}`,
                  color: '#fff',
                  padding: '12px 14px',
                  borderRadius: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  resize: 'vertical',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: status === 'sent' ? colors.primary : status === 'error' ? '#E5484D' : colors.primary,
                color: status === 'sent' ? colors.ink : '#fff',
                border: 'none',
                width: '100%',
                padding: 14,
                borderRadius: 10,
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: status === 'sending' ? 'wait' : 'pointer',
                fontFamily: "'Inter', sans-serif",
                opacity: status === 'sending' ? 0.75 : 1,
              }}
            >
              {buttonLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
