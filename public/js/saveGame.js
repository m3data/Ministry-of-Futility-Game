import { gameState } from './gameState.js';

export function saveGame() {
    localStorage.setItem('ministryOfFutilityGameState', JSON.stringify(gameState));
}