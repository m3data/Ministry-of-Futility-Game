window.sceneContent = {
  title: 'Back to the grind',
  location: 'Ministry Entrance',
  sceneDescription: 'You stand before the imposing doors of the Ministry, feeling a mix of dread and determination.',
  context: 'Your sabbatical has given you new perspective, but as you prepare to re-enter the world of bureaucracy, you wonder if you can truly make a difference this time.',
  choices: [
    { text: 'Enter with a plan for change', target: 'change-agent', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Slip back into old habits', target: 'futility-embrace', actions: ['increaseFutility'] },
    { text: 'Turn around and leave for good', target: 'wise-end', actions: ['increaseWisdom'] },
  ]
};
