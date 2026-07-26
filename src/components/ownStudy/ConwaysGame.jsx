import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import cgol1 from './img/1.gif';
import cgol2 from './img/2.gif';
import cgol3 from './img/3.gif';

export const ConwaysGame = (colors) => ({
  id: 'conways',
  gradient: `linear-gradient(135deg, ${colors.primary}, #bb3a3a)`,
  badge: 'THE GAME OF LIFE',
  title: 'Conway\'s Game of Life',
  desc: 'The Problem: Implement Conway\'s Game of Life by creating an interactive cellular automaton that simulates cell evolution based on neighboring cells and user-selected rule sets. \n\nThe Solution: Developed an interactive Processing application using a two-dimensional array, implementing Conway\'s rules with mouse-driven cell creation, keyboard-controlled simulation modes, and timed generation updates.',
  tags: ['Processing', 'Java'],
  images: [
    { src: cgol1, title: 'Underpopulated' },
    { src: cgol2, title: 'Overcrowded' },
    { src: cgol3, title: 'Survival/Creation of Life' },
  ],
  details: [
    'Cellular Automaton: Developed Conway\'s Game of Life in Processing using a two-dimensional array to represent live and dead cells on an interactive grid.',
    'Rule-Based Simulation: Implemented Conway\'s evolution rules by evaluating each cell\'s eight neighboring cells to determine underpopulation, overcrowding, survival, and reproduction across generations.',
    'Interactive Controls: Added mouse-driven cell creation and keyboard shortcuts to pause, clear the grid, and execute different simulation scenarios for rule testing and visualisation.',
    'State Management: Utilized a secondary buffer array to preserve the current generation while calculating the next, preventing data corruption during iteration.',
    'Timed Iteration: Implemented a timer-based update mechanism using \'millis()\' to control simulation speed and provide smooth, consistent generation updates.',
    'Learning Outcome: Strengthened knowledge of grid-based algorithms, multidimensional arrays, event-driven programming, double buffering, and simulation design through the implementation of an interactive cellular automaton.',
  ],

  code: `/* CONWAY'S GAME OF LIFE*/
// Start with a blank canvas that has no life cells, allowing the user to add life cells by mouse click/drag on the grid, and then you can press the following to unpause:
// Press 1: Underpopulation 
// Press 2: Overcrowding
// Press 3: Survival/Creation of Life
// Press C: To clear the grid and start anew
// Press SPACE: To pause the sketch

// Size of cells
int cellSize = 15;
int gridSize = 25;

// Creating a state for each scenario
int state = 0;

// Variables for timer
int interval = 100; // For every 100 milliseconds, it would iterate to its next state
int lastRecordedTime = 0;

// Colours for dead and alive cells
color alive = color(0); // Alive cells are black
color dead = color(255); // Dead cells are white

// Array of cells
int[][] cells; 

// Buffer to record the state of the cells 
int[][] cellsBuffer; 

// Pause function to start true, in order to draw cells
boolean pause = true;

void setup() {
  
  size (1200, 600);
  background(255); // Fill in white in case cells don't cover all dead cells

  // Instantiate arrays 
  cells = new int[width/cellSize][height/cellSize];
  cellsBuffer = new int[width/cellSize][height/cellSize];
}


void draw() {
  
  // Draws a grid
  for (int x = 0; x < width/cellSize; x++) {
    for (int y = 0; y < height/cellSize; y++) {
      if (cells[x][y] == 1) {
        fill(alive); // If alive, colour black
      } else {
        fill(dead); // If dead, colour white
      }
      rect (x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }

  // Iterates the timer
  if (millis() - lastRecordedTime > interval) {
    if (!pause) {
      iteration();
      lastRecordedTime = millis();
    }
  }

  // Create  new cells manually on pause
  if (pause && mousePressed) {
    
    // Map and avoids out of bound errors when adding cells
    int xCellOver = int(map(mouseX, 0, width, 0, width/cellSize));
    xCellOver = constrain(xCellOver, 0, width/cellSize - 1);
    
    int yCellOver = int(map(mouseY, 0, height, 0, height/cellSize));
    yCellOver = constrain(yCellOver, 0, height/cellSize - 1);

    // Check against cells in buffer
    if (cellsBuffer[xCellOver][yCellOver] == 1) { // If cell is alive then a dead cell would cover the live cell
      cells[xCellOver][yCellOver] = 0; // Cell dies
      fill(dead); // Fills dead cell's colour
      
    } else { 
      cells[xCellOver][yCellOver] = 1; // Else the cell lives
      fill(alive); // Fill alive cell's colour
    }
  } 
  
  // Created a string within setup
  PFont font= createFont("Georgia", 64);
  String states = "Scenario: " + state; // Change the scenario depending on the keyPressed function
  String pausing = "Pause";
  
  fill(0, 255, 100);
  textFont (font);
  textSize(64);
  text (states, 10, 50);
  if(pause == true){ // If pause is true then add pause text to the sketch
  text (pausing, 1000, 50);}
}

void iteration() { // When the clock ticks
  // Save cells to buffer so it keeps the other intacted and interactable
  for (int x = 0; x < width/cellSize; x++) {
    for (int y = 0; y < height/cellSize; y++) {
      cellsBuffer[x][y] = cells[x][y];
    }
  }

  // Visit each cell:
  for (int x = 0; x < width/cellSize; x++) {
    for (int y = 0; y < height/cellSize; y++) {
      // Will visit all the neighbours of each cell
      int neighbours = 0; // Counts the neighbours
      for (int col = x - 1; col <= x + 1; col++) {
        for (int row= y - 1; row <= y + 1; row++) {  
          if (((col >= 0) && (col < width/cellSize)) && ((row >= 0) && (row < height/cellSize))) { // Checks that it is not out of bounds
            if (!((col == x) && (row == y))) { // If col and row are not equal to x and y then it will make sure to check against self
              if (cellsBuffer[col][row] == 1) {
                neighbours ++; // it checks "alive" neighbours and count them
              }
            }
          }
        }
      }

      // Checks the neigbours then it will apply the rules when key pressed
      if (state == 1 && cellsBuffer[x][y] == 1) { // Underpopulation
        if (neighbours < 2) { 
          cells[x][y] = 0; // Dies if less than 2
        }
      }
      if (state == 2 && cellsBuffer[x][y] == 1) { // Overcrowding
        if (neighbours > 3) { 
          cells[x][y] = 0; // Dies if more than 3
        }
      }
      if (state == 3 && cellsBuffer[x][y] == 1) {// Survival/Creation of Life
        if (neighbours < 2 || neighbours > 3) { 
          cells[x][y] = 0; // Dies if it has 2 or 3 neighbours
        }
      } else {     
        if (neighbours == 3 ) {
          cells[x][y] = 1; // Only if it has 3 neighbours then cell stays alive
        }
      }
    }
  }
} 

void keyPressed() {

  // Each key represents a state
  if (key == '1') {
    pause = false;
    state = 1;
  }

  if (key == '2') {
    pause = false;
    state = 2;
  }
  
  if (key == '3') {
    pause = false;
    state = 3;
  }
  
  // Pauses the sketch 
  if (key == ' ') {
    pause = true;
  }

 // Clears the sketch (scenario 5) and pauses it
 if (key == 'c' || key == 'C') { // Clear all
    state = 0;
    pause = true;
    for (int x=0; x<width/cellSize; x++) {
      for (int y=0; y<height/cellSize; y++) {
        cells[x][y] = 0; // Kills all live cells by reverting all back to zero
      }
    }
  }
}`,
});
