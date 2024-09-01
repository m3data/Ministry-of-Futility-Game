window.sceneContent = {
  title: 'The underground movement',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'You join the Human-Centered Design Underground, a secret group dedicated to bringing real human-centered design principles to the Ministry.',
  context: 'Your first ritual of initiation is to organise a design thinking workshop in the basement.',
  choices: [
    { text: 'Organise the workshop', target: 'workshop-planning', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Go to your cubicle to contemplate the risks of your actions', target: 'cubicle-risk-assessment', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
  ]
};
