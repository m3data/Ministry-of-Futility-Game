export const gameState = {
    currentScene: null,
    attributes: {
        wisdom: 0,
        creativity: 0,
        gullibility: 0,
        compliance: 0
    },
    inventory: [],
    coreMetrics: {
        futility: 0,
        woo: 0
    }
};

export function updateGameState(newState) {
    Object.assign(gameState, newState);
    updateUI();
}

function updateUI() {
    // Update meters
    document.getElementById('futility-meter').style.width = `${gameState.coreMetrics.futility}%`;
    document.getElementById('wisdom-meter').style.width = `${gameState.attributes.wisdom}%`;
    document.getElementById('woo-meter').style.width = `${gameState.coreMetrics.woo}%`;

    // Update attributes display
    const attributesContainer = document.getElementById('player-attributes');
    attributesContainer.innerHTML = '';
    for (const [attr, value] of Object.entries(gameState.attributes)) {
        const attrElement = document.createElement('div');
        attrElement.className = 'attribute';
        attrElement.textContent = `${attr}: ${value}`;
        attributesContainer.appendChild(attrElement);
    }

    // Update inventory display
    const inventoryContainer = document.getElementById('inventory');
    inventoryContainer.innerHTML = '';
    gameState.inventory.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'inventory-item';
        itemElement.textContent = item.name;
        inventoryContainer.appendChild(itemElement);
    });
}