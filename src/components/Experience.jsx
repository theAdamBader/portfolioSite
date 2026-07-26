import React, { useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';
import LogEntry from './LogEntry';

const entries = [
  {
    version: 'June 2022 — Present',
    title: 'Database Administrator',
    company: 'HCA Healthcare UK',
    desc: 'Optimised cross-departmental data management and reporting accuracy using advanced SQL functions and VBA programming. Automated manual data entry into Meditech via Boston Workstation, significantly reducing labour costs and processing times.',
  },
  {
    version: 'Nov 2020 – June 2022',
    title: 'Ward Clerk',
    company: 'HCA Healthcare UK',
    desc: 'Formulated a monthly nurse records system that boosted information retrieval by 10% across three medical wards. Accelerated patient check-in times by introducing Meditech keyboard shortcuts and managed over 50 daily high-volume emergency calls during peak pandemic.',
  },
  {
    version: 'Mar 2020 – Aug 2022',
    title: 'Freelance Web Developer',
    company: 'N/A',
    desc: 'Designed modern wireframes in Adobe XD and built a fully responsive portfolio website to maintain a client\'s online presence during COVID-19. Utilised a technical stack of HTML, CSS, JavaScript, SCSS, and SVG to implement custom interactive features like animated text rotation paths. Integrated external libraries including Swiper.JS to optimise website functionality and significantly enhance the overall user experience.',
  },
  {
    version: 'Aug 2018 - Mar 2019',
    title: 'Dental Receptionist',
    company: 'Imperial College London Dental Centre',
    desc: 'Experienced Dental Receptionist skilled in managing patient bookings and records via the SOE system, handling clinic communications, and designing custom Excel spreadsheets for financial tracking and invoice management.',
  },
  {
    version: 'Jun 2016 - Jan 2017',
    title: 'Receptionist',
    company: 'Kings College London',
    desc: 'Leveraged strong data management skills to modernise operations by replacing a paper based system with a custom Excel parcel tracking system now used across all residences, while managing safety compliance and client relations, both Kings College students and NHS staff.',
  },
  {
    version: 'Sept 2015 – June 2018',
    title: 'BSc Computer Science',
    company: 'Goldsmiths, University of London',
    desc: 'Graduated with a BSc in Computer Games and Programming Skills while engaging in Hacksmiths and Peer Assisted Learning (PAL) societies. Led the development of a website and a platform game that secured a first. Built three additional major final-year projects, specialising two in machine learning and one in mobile VR via Google VR.',
  },
  {
    version: 'Aug 2013 - Jun 2015',
    title: 'Customer Service Team Leader',
    company: 'Kings College London',
    desc: 'Goal oriented Retail Team Leader who maximised team performance by delegating tasks and establishing sales targets, while systematically overseeing high-security financial auditing, safe compliance, and complex customer data resolutions.',
  }
];

const VISIBLE_COUNT = 3;

export default function Experience() {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const hasMore = entries.length > VISIBLE_COUNT;
  const visibleEntries = expanded ? entries : entries.slice(0, VISIBLE_COUNT);

  return (
    <section id="experience" style={{ background: colors.secondaryBackground, borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, padding: '110px 28px', transition: 'background .3s ease, border-color .3s ease' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 56, maxWidth: 640 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, marginBottom: 10, display: 'block' }}>// changelog</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', marginTop: 0 }}>Where I've worked</h2>
          <p style={{ color: colors.inkSoft, marginTop: 14, fontSize: '1.05rem' }}>A running log of roles, in the order they happened.</p>
        </Reveal>

        <div style={{ borderLeft: `2px solid ${colors.line}`, marginLeft: 6 }}>
          {visibleEntries.map((entry) => (
            <LogEntry
              key={entry.version + entry.title}
              version={entry.version}
              title={entry.title}
              company={entry.company}
              desc={entry.desc}
            />
          ))}
        </div>

        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <button
              onClick={() => setExpanded((e) => !e)}
              style={{
                background: 'none',
                border: `1.5px solid ${colors.line}`,
                color: colors.ink,
                padding: '12px 28px',
                borderRadius: 999,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color .2s, transform .2s, background .2s',
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
              {expanded ? 'Show less ↑' : `Show more (${entries.length - VISIBLE_COUNT}) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
