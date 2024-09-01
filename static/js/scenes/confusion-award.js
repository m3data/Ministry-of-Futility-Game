window.sceneContent = {
  title: 'The pinnacle of confusion',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'You accept the Order of Bureaucratic Confusion, a plaque that reads, "For outstanding achievement in the field of miscommunication." You hang it proudly in your office, where nobody can read it due to the poor choice on font size and just general bad design.',
  context: 'Your work has made the Ministry a model of confusion and inefficiency. You\'re offered a promotion to Minister of Miscommunication, overseeing all communications in the public service.',
  choices: [
    { text: 'Accept the promotion', target: 'minister-ending', actions: ['decreaseWisdom'] },
    { text: 'Question the meaning of it all', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Join the underground movement to improve things at the Ministry', target: 'join-underground-movement', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Review your memoirs and prepare for quiet quitting', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
