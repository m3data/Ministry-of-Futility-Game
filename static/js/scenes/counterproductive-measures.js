window.sceneContent = {
  title: 'The Bureau of Counterproductive Measures',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'You enter the Bureau of Counterproductive Measures, a room designed to hinder productivity. The chairs are slightly too high for the desks, the desks are angled just enough to make writing uncomfortable, and the computers are positioned to cause neck strain.',
  context: 'You enter the Bureau of Counterproductive Measures. A frazzled-looking manager runs up to you. "Thank goodness you\'re here! We need your help with Operation Clarity."',
  choices: [
    { text: 'Ask about Operation Clarity', target: 'operation-clarity', actions: ['increaseWisdom'] },
    { text: 'Offer to help immediately', target: 'counterproductive-help', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Back away slowly', target: 'lobby', actions: ['increaseFutility', 'decreaseWisdom'] },
  ]
};
