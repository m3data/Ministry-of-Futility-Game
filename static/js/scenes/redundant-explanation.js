window.sceneContent = {
  title: 'Trying to understand redundancy',
  location: 'Office of Redundant Redundancies',
  sceneDescription: 'The clerks take turns explaining their job, each repeating exactly what the previous one said. This goes on and on in a monotonous cycle that makes your brain hurt.',
  context: 'You try to follow along, but the redundancy of their explanations only adds to the confusion. You wonder if there\'s any point to their work or if it\'s all just a bureaucratic exercise in futility.',
  choices: [
    { text: 'Interrupt and offer to help', target: 'redundant-help', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Patiently wait for them to finish', target: 'patience', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Escape while they\'re distracted', target: 'lobby', actions: ['increaseFutility', 'decreaseWisdom'] },
  ]
};
