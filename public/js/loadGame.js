import { updateGameState } from './gameState.js';

export function loadGame() {
    const savedState = localStorage.getItem('ministryOfFutilityGameState');
    if (savedState) {
        updateGameState(JSON.parse(savedState));
        return true;
    }
    return false;
}