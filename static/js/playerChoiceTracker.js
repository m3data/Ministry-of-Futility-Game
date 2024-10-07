// Ministry of Futility
// Copyright (C) 2024 Mathew Mytka - m3metix
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 // This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 // You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.

// List of scenes to exclude from choice tracking
const excludedScenes = ['start', 'game-intro']; // Add more scene names as needed if they chould be excluded from tracking

// Initialize the choice tracker in localStorage if it doesn't exist
if (!localStorage.getItem('playerChoices')) {
  localStorage.setItem('playerChoices', JSON.stringify({}));
}

// Function to record a player's choice
function recordChoice(sceneName, choiceText) {
  if (excludedScenes.includes(sceneName)) return; // Skip recording for excluded scenes
  
  let choices = JSON.parse(localStorage.getItem('playerChoices'));
  if (!choices[sceneName]) {
    choices[sceneName] = [];
  }
  if (!choices[sceneName].includes(choiceText)) {
    choices[sceneName].push(choiceText);
  }
  localStorage.setItem('playerChoices', JSON.stringify(choices));
}

// Function to check if a choice has been made before
function hasChoiceBeenMade(sceneName, choiceText) {
  if (excludedScenes.includes(sceneName)) return false; // Always return false for excluded scenes
  
  let choices = JSON.parse(localStorage.getItem('playerChoices'));
  return choices[sceneName] && choices[sceneName].includes(choiceText);
}

// Function to filter out previously made choices
function filterChoices(sceneName, choices) {
  if (excludedScenes.includes(sceneName)) return choices; // Return all choices for excluded scenes
  
  return choices.filter(choice => !hasChoiceBeenMade(sceneName, choice.text));
}

// Function to reset all tracked choices (for new game)
function resetChoices() {
  localStorage.setItem('playerChoices', JSON.stringify({}));
}