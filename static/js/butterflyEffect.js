function butterflyEffect() {
    const chance = Math.random();
    if (chance < 0.01) { // 1% chance to trigger the effect
        triggerUnexpectedOutcome();
    }
}

function triggerUnexpectedOutcome() {
    alert("A small action you have taken has led to a surprising consequence! Keep playing to see how it unfolds.");
    
    // Example: Increase wisdom as an unexpected outcome
    window.state.increaseWisdom(5);
    
    // You could also navigate to a different scene, increase futility, or trigger any other effect.
    // window.state.go('UnexpectedScene');
}