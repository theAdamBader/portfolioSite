import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';

export const LeVieEstBelle = (colors) => ({
  id: 'LeVieEstBelle',
  gradient: `linear-gradient(135deg, ${colors.tertiary}, #917017)`,
  badge: 'MOBILE VR GAME',
  title: 'Le Vie Est Belle',
  desc: 'La Vie est Belle is a solo-developed mobile Virtual Reality Therapy (VRT) game designed to help reduce stress, anxiety, and depression through immersive gameplay. Built for the Samsung Gear VR platform, players solve puzzles across interconnected worlds accessed through teleporters. The project utilised Unity, Blender, Adobe Photoshop, and the Oculus (OVR) SDK to create a low-poly environment, implement VR interactions, and evaluate the therapeutic potential of immersive virtual reality.',
  tags: ['C#', 'Unity', 'VR'],
  video: 'TsCBVn8ZDws',
  details: [
    'La Vie est Belle is a solo-developed Mobile Virtual Reality Therapy (VRT) game created as my final-year university project. Designed for Android, the game requires a Samsung Gear VR headset and Gear VR controller to provide an immersive experience aimed at reducing stress, anxiety, and depression. Players solve environmental puzzles across two dimensions connected by teleporters to reach the final destination.',
    'The project was designed around the concepts of Place Illusion (PI) and Plausibility Illusion (Psi) to create a believable and immersive virtual environment. User testing involved participants playing the game multiple times to evaluate whether the experience promoted relaxation and reduced feelings of stress and anxiety.',
    'The game was designed using the Mechanics, Dynamics, and Aesthetics (MDA) framework. A low-poly visual style was chosen to create a calming fantasy environment, with 3D assets modelled in Blender and textures created in Adobe Photoshop.',
    'The project was implemented in Unity using the Oculus (OVR) SDK. Custom scripts handled Gear VR controller input, raycast interactions, player navigation, and puzzle mechanics. Shader effects were applied to the teleporters to create the illusion of viewing another dimension, while additional logic ensured teleporters could only be entered from the correct direction, improving both gameplay flow and immersion.',
  ],
});
