window.sceneContent = {
  title: 'The Office of Redundant Redundancies',
  location: 'Office of Redundant Redundancies',
  sceneDescription: 'You enter the Office of Redundant Redundancies, a place where redundancy is the norm. The walls are lined with memos, each one more redundant than the last. The clerks greet you in unison, their voices echoing in the sterile environment.',
  context: '"Welcome, welcome, welcome to the Office of Redundant Redundancies!"',
  choices: [
    { text: 'Ask about their work', target: 'redundant-explanation', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Offer to help', target: 'redundant-help', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Leave immediately', target: 'lobby', actions: ['increaseFutility', 'decreaseWisdom'] },
  ]
};
