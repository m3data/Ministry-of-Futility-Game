window.sceneContent = {
  title: 'To return or not',
  location: 'Unknown',
  sceneDescription: 'You\'ve taken some time off, reflecting on life, spending time with family and friends and binge watching Trapflix.',
  context: 'As your sabbatical comes to an end, you find yourself at a crossroads. The Ministry of Futility seems like a distant memory, yet its pull remains strong. You wonder if you\'ve truly found yourself or if you\'re just running from the inevitable.',
  choices: [
    { text: 'Return to the Ministry with renewed purpose', target: 'ministry-return', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Decide life in the Ministry would be futile', target: 'game-over', actions: [] },
  ]
};
