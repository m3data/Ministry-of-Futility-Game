window.sceneContent = {
  title: 'A Secret Movement Begins',
  location: 'Basement',
  sceneDescription: 'You decide to work in secret to undermine the system. You join the Human-Centered Design Underground, a group dedicated to bringing real human-centered design principles to the Ministry. Your first act is to organise a design thinking workshop in the basement.',
  context: '',
  choices: [
    { text: 'Reflect on your journey', target: 'memoir-garden-review', actions: ['increaseWisdom'] },
    { text: 'Proceed with the workshop', target: 'workshop-planning', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Go to your cubicle to contemplate the risks of your actions', target: 'cubicle-risk-assessment', actions: ['increaseFutility', 'decreaseWisdom'] },
  ]
};
