import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';

export const performanceProject = (colors) => ({
  id: 'performance',
  gradient: `linear-gradient(135deg, ${colors.primary}, #87cf56)`,
  badge: '[dbo].[ProperCase]([Address])',
  title: 'Built Proper Case Function',
  desc: 'The Problem: Meditech Expanse required Proper Case instead of UPPER case, but SQL Server had no built-in conversion function. The team had no automated way to format the data before it moved from SQL to Excel and into Meditech. \n\nThe Solution: Developed a reusable SQL scalar function to convert text into Proper Case based on prior experience building a similar solution in Navicat. The function standardised descriptions, site names, and other text fields, ensuring data consistency and compatibility with Meditech Expanse while eliminating manual formatting.',
  tags: ['SQL', 'SQL Server'],
  details: [
    'Problem Identification: Identified a data formatting issue during the Meditech Magic to Meditech Expanse migration, where text fields transitioned from UPPER case to Proper Case, causing compatibility issues in the SQL → Excel → Meditech data pipeline.',
    'Solution Development: Leveraged prior experience developing a similar solution in Navicat to design and implement a reusable SQL scalar function that converts text to Proper Case.',
    'Reusable SQL Function: Built a centralized function that could be applied across descriptions, site names, and other text fields, eliminating the need for manual formatting or duplicate logic.',
    'Data Standardization: Integrated the function into existing SQL processes to ensure consistent formatting before data was exported to Excel and imported into Meditech Expanse.',
    'Business Impact: Enabled a smooth migration to Meditech Expanse by automating Proper Case conversion, improving data consistency, reducing manual effort, and providing a reusable solution for future data imports.',
  ],
  code: `CREATE FUNCTION [dbo].[ProperCase] (@input NVARCHAR(MAX))
RETURNS NVARCHAR(MAX)
AS
BEGIN
    DECLARE @output NVARCHAR(MAX) = '';
    DECLARE @i INT = 1;
    DECLARE @len INT = LEN(@input);
    DECLARE @ch NCHAR(1);
    DECLARE @makeUpper BIT = 1;

    WHILE @i <= @len
    BEGIN
        SET @ch = SUBSTRING(@input, @i, 1);

        IF @makeUpper = 1
            SET @output += UPPER(@ch);
        ELSE
            SET @output += LOWER(@ch);

        IF @ch = ' '
            SET @makeUpper = 1;
        ELSE
            SET @makeUpper = 0;

        SET @i += 1;
    END

    RETURN @output;
END;`,
});
