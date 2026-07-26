import React from 'react';
import { useTheme } from '../hooks/ThemeContext';
import Reveal from './Reveal';
import StackCard from './StackCard';

export default function Skills() {
  const { colors } = useTheme();

  return (
    <section id="skills" style={{ padding: '110px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal style={{ marginBottom: 56, maxWidth: 640 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: colors.primary, marginBottom: 10, display: 'block' }}>// stack</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', marginTop: 0 }}>Tools of the trade</h2>
          <p style={{ color: colors.inkSoft, marginTop: 14, fontSize: '1.05rem' }}>
            The engines, platforms, and disciplines I use to keep data reliable and teams unblocked. It's as the saying goes, "A jack of all trades is a master of none, but oftentimes better than a master of one."
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 20 }}>
          <StackCard iconBg={colors.sqlColour} iconColor={colors.ink} icon="SQL" title="Relational Databases" desc="Schema design, indexing strategy, and query tuning across large production workloads." tags={['MySQL', 'SQL Server']} />
          <StackCard iconBg={colors.pyColour} iconColor={colors.ink} icon="PY" title="Personal Exploration" desc="Using Python within VS Code to build data models, and extend Power BI's visualisation capabilities." tags={['Power BI', 'VS Code']} />
          <StackCard iconBg={colors.cSharpColour} iconColor={colors.ink} icon="C#" title="Event & Review Use" desc="GameJams and code reviews for personal purposes. Continuing the first language I've used." tags={['Unity', 'Godot']} />
          <StackCard iconBg={colors.cloudColour} iconColor={colors.ink} icon="☁" title="Cloud & Infrastructure" desc="Provisioning and managing managed database services alongside infrastructure-as-code." tags={['Azure SQL', 'Terraform']} />
          <StackCard iconBg={colors.gitColour} iconColor={colors.ink} icon="◐" title="Backup & Recovery" desc="Tested, automated backup strategies and disaster recovery plans that hold up under pressure." tags={['Git', 'GitHub']} />
          <StackCard iconBg={colors.monAlertColour} iconColor={colors.ink} icon="◱" title="Monitoring & Alerting" desc="Dashboards and alerts tuned to catch real problems early, without drowning teams in noise." tags={['Trello']} />
        </div>
      </div>
    </section>
  );
}
