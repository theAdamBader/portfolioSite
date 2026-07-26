import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import oldICT from './img/oldICtemplate.png';
import newICT from './img/newICtemplate.png';

export const backupProject = (colors) => ({
  id: 'revampTemplates',
  gradient: `linear-gradient(135deg, ${colors.quaternary}, #37417c)`,
  badge: 'NEW TEMPLATES',
  title: 'Revamped Templates',
  desc: 'The Problem: Legacy Excel request templates suffered from complex layouts, broken formulas due to uncontrolled copy-pasting, and bypassed validation rules (e.g., character limits ignored despite red-font warnings), allowing other departments to submit faulty data. \n\nThe Solution: Standardised and rebuilt the Vendor Request Template by implementing VBA validation constraints and dynamic character placeholders. Additionally, added a VBA automation for automated, timestamped file saving and PDF generation and, a TypeScript reset routine button.',
  tags: ['TypeScript', 'VBA', 'Excel'],
  details: [
    'Template Redesign: Rebuilt legacy Item Amendment, Item Creation, and Vendor Request templates with a simplified, user-friendly layout to improve usability and reduce user errors.',
    'Data Validation: Implemented VBA validation to enforce character limits and restrict invalid special characters, preventing users from bypassing business rules and ensuring consistent data quality.',
    'Workbook Protection: Eliminated formula overwrites caused by Excel copy-paste behavior by redesigning workbook logic and safeguarding calculated fields from accidental modification.',
    'Workflow Automation: Developed three automation buttons—one using TypeScript to clear input fields, and two using VBA to save timestamped Excel files and generate one-page PDFs while automatically opening the save location for quick submission.',
    'Business Impact: Standardised request templates across multiple processes, reduced invalid submissions, protected workbook integrity, and significantly improved the efficiency and reliability of the request submission workflow.',
    'More Information: I will happily discuss more about the projects, if interested.',
  ],

  images: [
  { src: oldICT, title: 'Old IC template' },
  { src: newICT, title: 'New IC template' },
  ],

  code: `// nightly verification job
  async function verifyBackup(backupId) {
    const restored = await restoreToSandbox(backupId);
    const checksum = await computeChecksum(restored);
    
    if (checksum !== expectedChecksum(backupId)) {
      await alertOnCall('Backup checksum mismatch', backupId);
      return false;
    }
    return true;
  }`,
});
