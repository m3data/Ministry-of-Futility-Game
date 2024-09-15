window.sceneContent = {
  title: 'The woo woo embrace',
  location: 'Ministry Garden',
  sceneDescription: 'You embrace the woo woo energy of the garden, feeling a sense of connection to the universe and the absurdity of the Ministry. The gnome nods approvingly, as if it knows you\'ve found your place in the world.',
  context: 'You\'re filled with a sense of peace and clarity, knowing that you\'ve found your true path. You are ready to face the challenges of the Ministry with a new perspective.',
  choices: [
    { text: 'Seek out the Deputy Vice Chair of the Committee of Workplace Relations', target: 'basement-search', actions: ['increaseWisdom'] },
    { text: 'Return to your cubicle', target: 'work-cubicle-psychadelia', actions: ['increaseFutility'] },
    { text: 'Leave the Ministry and start a new life', target: 'wise-end', actions: ['increaseWisdom'] },
  ]
};
