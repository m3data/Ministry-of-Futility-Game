import { gameState, updateGameState } from './gameState.js';

export function applyChoiceEffects(choice) {
    // Update attributes
    choice.attributeChanges.forEach(change => {
        gameState.attributes[change.name] += change.amount;
    });

    // Update core metrics
    choice.coreMetrics.forEach(metric => {
        gameState.coreMetrics[metric.type] += metric.value;
    });

    // Update inventory
    if (choice.inventoryChanges) {
        if (choice.inventoryChanges.addItem) {
            gameState.inventory.push(choice.inventoryChanges.addItem);
        }
        if (choice.inventoryChanges.removeItem) {
            const index = gameState.inventory.findIndex(item => item.name === choice.inventoryChanges.removeItem);
            if (index !== -1) {
                gameState.inventory.splice(index, 1);
            }
        }
    }

    updateGameState(gameState);
}

export function checkRequirements(choice) {
    return choice.requiredAttributes.every(req => gameState.attributes[req.name] >= req.value);
}