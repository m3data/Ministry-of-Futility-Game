window.sceneContent = {
  title: 'The cycle continues',
  location: 'Department of Circular Logic',
  sceneDescription: 'You\'ve been promoted to Assistant to the Deputy Vice Chair of Circular Logic, a position of great responsibility and even greater confusion.',
  context: 'Your days are filled with meetings about meetings and reports about reports, all leading to no discernible outcome. You pause for a moment to contemplate the futility of your existence here with the Ministry.',
  choices: [
    { text: 'Continue your career in circular logic', target: 'circular-logic-entropy', actions: ['increaseFutility'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Visit the Basement to contemplate', target: 'basement-first-timer', actions: ['increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
