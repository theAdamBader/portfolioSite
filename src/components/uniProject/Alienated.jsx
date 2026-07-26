import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';

export const Alienated = (colors) => ({
  id: 'alienated',
  gradient: `linear-gradient(135deg, ${colors.secondaryInk}, #410101)`,
  badge: 'UNITY TEAM PROJECT',
  title: 'Alienated',
  desc: 'Alienated is a 2D platformer developed as a team project in which the player takes on the role of an antagonist rejected by their own race, the Hebi Clan. The playable demo features a mid-level, where players battle through enemies and defeat a boss. \n\nThe game was developed in Unity using C# scripts and sprite animations, with pixel art characters created in Adobe Illustrator. The game includes melee, ranged, and boss enemies, each with unique behaviours.',
  tags: ['Adobe Illustrator', 'C#', 'Unity'],
  video: 'Jj00vn3YQi4',
  details: [
    'Alienated is a 2D platform game developed as a team project. The game places the player in the role of an antagonist who has been rejected and alienated by their own race, known as the Hebi Clan. Unlike traditional platform games where the player is the hero, the narrative follows the protagonist\'s descent into revenge as they begin a killing spree against members of their own clan.',
    'The playable demonstration showcases the first level of the game, where the player progresses through the environment by defeating enemy henchmen before facing a mid-range boss. Since this is only the introductory level, the atmosphere is less dark than the later levels were intended to be, as the game\'s story would gradually become more intense if development had continued.',
    'The game\'s characters were designed in Adobe Illustrator using a 32-bit pixel art style. Each character was given unique animations for movement, attacking, and jumping. To achieve smooth and visually appealing gameplay, each animation consisted of approximately three to four frames. This approach balanced visual quality with the classic pixel-art aesthetic.',
    'The environment was created using a static level design that was imported into Unity as a background image applied to a plane. Environmental objects also used static textures, providing a simple yet effective visual style that complemented the game\'s pixel-art characters.',
    'The technical implementation was completed in Unity, utilising the engine\'s built-in sprite animation system alongside multiple C# scripts. Separate scripts managed core gameplay systems, including player movement, combat mechanics, collision detection, health management, and enemy behaviour. The game features three distinct enemy types: melee enemies that attack at close range, ranged enemies that attack from a distance, and a mid-range boss with more advanced combat mechanics. Together, these systems created a functional prototype that demonstrated the game\'s core gameplay, visual style, and narrative concept.',
  ],
});
