window.sceneContent = {
  title: 'The forbidden door',
  location: 'Ministry Basement',
  sceneDescription: 'You try to open the locked door, but it\'s sealed shut. You try to force it open, but it won\'t budge. You hear footsteps approaching from the other side.',
  context: 'A security guard appears and asks for your credentials. You don\'t have any, and argue that you\'re authorised personnel and were sent to find the Deputy Vice Chair of the Committee of Workplace Relations. The guard looks at you with suspicion.',
  choices: [
    { text: 'Try to convince the guard', target: 'guard-convince', actions: ['increaseFutility'] },
    { text: 'Return to the folder', target: 'meaningful-change', actions: ['increaseWisdom'] },
  ]
};
