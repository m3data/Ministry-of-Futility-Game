window.sceneContent = {
  title: 'The paradox of purpose',
  location: 'Department of Circular Logic',
  sceneDescription: 'You admit that you don\'t know what the Department of Circular Logic does.',
  context: '"Perfect!" the senior looking bureacrat exclaims. "You\'re hired! Your job is to find out what we do here, but remember, once you know, you\'ll be fired."',
  choices: [
    { text: 'Accept the job', target: 'circular-job', actions: ['increaseFutility'] },
    { text: 'Refuse and leave', target: 'lobby', actions: ['decreaseFutility', 'increaseWisdom'] },
  ]
};
