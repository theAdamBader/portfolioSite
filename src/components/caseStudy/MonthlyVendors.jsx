import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';

export const MonthlyVendors = (colors) => ({
  id: 'migration',
  gradient: `linear-gradient(135deg, ${colors.primary}, #f174dd)`,
  badge: 'SELECT * FROM [dbo].[Monthly_Vendor_List]',
  title: 'Monthly Vendor Workload Reduction',
  desc: 'The Problem: A manual, monthly Excel macro process for importing vendor lists from file to Excel to uploading into a table. The process took approx. 30–45 minutes. \n\nThe Solution: Transitioned the workflow to a SQL-driven VBA process by querying the source database directly. Using WHERE and CTEs for a more accurate data and slashing the workload by over 90%.',
  tags: ['SQL', 'SQL Server', 'VBA Excel'],
  code: `WITH CTE1 AS(
  SELECT
    Substring([VendorID], 2, Len([VendorID])) AS [VendorID], [QueryID], [Response]
  FROM
    [livemdb].[dbo].[DMisVendorQueries]
  WHERE
    [QueryID] = 'VENDOVER'
),
CTE2 AS(
  SELECT
    Substring([VendorID], 2, Len([VendorID])) AS [VendorID], [QueryID], [Response]
  FROM
    [livemdb].[dbo].[DMisVendorQueries]
  WHERE
    [QueryID] = 'VENDVAT'
),
CTE3 AS(
  SELECT
    Substring([VendorID], 2, Len([VendorID])) AS [VendorID], [Mnemonic], [Active], [VendorType], [TermsDescription]
  FROM
    VMDT
  WHERE
    (VendorType LIKE '%ONE%OFF%PURCHASE%'
    OR VendorType LIKE 'MEDICAL%CON%'
    OR VendorType LIKE '%REFUND%'
    OR VendorType LIKE 'SHAREHOLD%'
    OR VendorType LIKE 'GENERAL%SUPPL%'
    OR VendorType LIKE 'SELF%EMPLO%')
)
SELECT
  Concat('A', T1.[Vendor Number]) AS [Vendor ID],
  T1.[Vendor Name] AS [Vendor Name],
  CTE3.[Mnemonic],
  CTE3.[Active],
  DateOfCompletion,
  CTE3.[VendorType] AS [Nature of Business],
  T1.[Address] AS [Address 1],
  T1.[Address2] AS [Address 2],
  T1.[Post Code],
  T1.[Email Address],
  T1.[Bank Account] AS [Pay Type],
  T1.[Bank Name] AS [Bank Title],
  T1.[Account Name] AS [Account Name],
  T1.[Account Number],
  T1.[Sort Code],
  CTE3.[TermsDescription] AS [Payment Terms],
  Isnull(CTE1.[Response], 'N') AS ['Based Overseas],
  Isnull(CTE2.[Response], 'N') AS [UK VAT]
FROM
  VR AS T1
LEFT JOIN
  CTE1 ON T1.[Vendor Number] = CTE1.VENDORID COLLATE SQL_Latin1_General_CP1_CI_AS
LEFT JOIN
  CTE2 ON T1.[Vendor Number] = CTE2.VENDORID COLLATE SQL_Latin1_General_CP1_CI_AS
RIGHT JOIN
  CTE3 ON T1.[Vendor Number] = CTE3.VENDORID COLLATE SQL_Latin1_General_CP1_CI_AS
WHERE
  DateOfCompletion > EOMONTH(GETDATE(), -4) AND DateOfCompletion <= EOMONTH(GETDATE(), -1)`,
  details: [
    'Process Automation & Optimisation: Re-engineered a legacy 45 minute monthly vendor listing process into a fully automated 2 minute workflow by replacing slow Excel macros with optimised database queries.',
    'SQL & VBA Integration: Discovered backend source tables and embedded SQL queries within Excel VBA to filter thousands of rows server side using WHERE clauses, entirely eliminating a 20 minute data import bottleneck.',
    'Advanced Data Modeling: Developed three Common Table Expressions (CTEs) to join core vendor records with newly requested VAT registration and international location tables using VENDORID keys.',
    'End to End Pipeline Automation: Programmed a streamlined two-button user interface in Excel that instantly executes data extraction, appends records to a master archive file, and automatically drafts outbound emails with attachments.',
    'Business Impact: Delivered a 93% reduction in monthly processing time, eliminated manual data cleansing, and expanded reporting scope to support international compliance tracking.',
  ],
});
