import { renderChoices } from './choices.js';
import { gameState, updateGameState } from './gameState.js';
import { applyChoiceEffects, checkRequirements } from './mechanics.js';
import { saveGame } from './saveGame.js';
import { loadGame } from './loadGame.js';

let scenes;

async function initGame() {
  console.log("Initializing game...");
  try {
    const response = await fetch('/plot.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    scenes = await response.json();
    console.log("Scenes loaded:", scenes);
    if (!loadGame()) {
      startNewGame();
    }
  } catch (error) {
    console.error('Failed to initialize game:', error);
  }
}

function startNewGame() {
  console.log("Starting new game...");
  const startScene = scenes.find(scene => scene.id === 'start');
  renderScene(startScene);
}

function renderScene(scene) {
    console.log("Rendering scene:", scene);
    if (scene) {
      // Update game state and UI
      gameState.currentScene = scene;
      updateMeters();
      
      // Update scene content
      document.getElementById('scene-title').textContent = scene.title || '';
      document.getElementById('scene-info').innerHTML = `
        <p>${scene.sceneDescription || ''}</p>
        <button id="next-button">Next >>></button>
      `;
      
      document.getElementById('next-button').addEventListener('click', showSceneContext);
      
      // Hide choices initially
      document.getElementById('scene-context').style.display = 'none';
    } else {
      console.error('Attempted to render an undefined scene');
    }
  }
  
  function showSceneContext() {
    const scene = gameState.currentScene;
    document.getElementById('scene-context').style.display = 'block';
    document.getElementById('scene-context').innerHTML = `
      <p>${scene.context || ''}</p>
      <div id="choices"></div>
    `;
    if (scene.choices && scene.choices.length > 0) {
      renderChoices(scene.choices);
    } else {
      console.log("No choices available for this scene");
    }
  }