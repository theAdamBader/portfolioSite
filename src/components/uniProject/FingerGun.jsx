import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';

export const FingerGun = (colors) => ({
  id: 'fingerGun',
  gradient: `linear-gradient(135deg, ${colors.secondaryInk}, #052523)`,
  badge: 'UNITY SOLO ML PROJECT',
  title: 'Finger Gun',
  desc: 'Leap Motion VR Project was developed in Unity using custom 3D objects, Photoshop textures, and Leap Motion hand-tracking assets. The environment was created with Unity\'s Terrain tools, while hand gestures were recognised using a Leap Motion controller, Processing, and Wekinator\'s machine learning capabilities. \n\nThe project combined JavaScript and C# scripts to implement gameplay features such as shooting, health, and collision detection.',
  tags: ['C#', 'JS', 'Machine Learning', 'Unity'],
  video: 'AcHfdyaP2CY',
  details: [
    'The project was designed and developed using Unity, with most of the game assets created from Unity\'s built-in 3D objects. The primary enemy character was constructed from five sphere objects, consisting of a body, a surrounding ring, an eyeball, and two additional spheres that formed the eye shape. Custom textures for the enemy and other game elements were created in Adobe Photoshop and exported as PNG files before being imported into Unity\'s texture assets. The hand models used within the project were provided by the Leap Motion SDK, allowing the player\'s real hand movements to be represented within the game.',
    'The game environment was created using Unity\'s Terrain Tool, which enabled the rapid creation of natural landscapes, including mountains and vegetation. Terrain textures were designed in Photoshop and painted onto the terrain within Unity to create a simple but visually effective environment.',
    'The implementation of the project required both specialised hardware and multiple software applications. A Leap Motion Controller was used to capture and track the player\'s hand gestures in real time. Gesture recognition was implemented using Processing in conjunction with Wekinator, a machine learning tool that records user-defined gesture features and classifies them using the k-nearest neighbour (KNN) algorithm. Communication between Processing, Wekinator, and Unity was achieved using the Open Sound Control (OSC) protocol, allowing gesture data to be transmitted and interpreted by the game in real time.',
    'The Unity project utilised a combination of JavaScript and C# scripts. JavaScript was primarily used to handle OSC communication and trigger gameplay actions such as firing bullets, while C# scripts managed core gameplay systems, including player health, collision detection, game logic, and other mechanics. The integration of machine learning, gesture recognition, and Unity scripting demonstrated the successful implementation of an interactive gesture-controlled gaming experience.',
  ],
});
