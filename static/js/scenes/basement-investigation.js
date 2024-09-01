window.sceneContent = {
  title: 'The hidden truth',
  location: 'Ministry Basement',
  sceneDescription: 'You follow the sound of chatter to a hidden room in the basement. Inside, you find a group of empassioned employees discussing a secret project to bring real change to the Ministry and the broader public service. They invite you to join them.',
  context: 'You\'re intrigued. You engae in deep conversation with the group, learning about their vision for a more human-centered and meaningful Ministry. You\'re inspired by their passion and dedication.',
  choices: [
    { text: 'Join the underground movement', target: 'join-underground-movement', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Return to your cubicle', target: 'work-cubicle', actions: ['increaseFutility'] },
    { text: 'Acsend to the garden', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
