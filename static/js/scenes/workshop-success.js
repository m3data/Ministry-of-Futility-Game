window.sceneContent = {
  title: 'The dawn of a new era',
  location: 'Basement',
  sceneDescription: 'The design thinking workshop is a resounding success, inspiring participants to think differently about their work and the Ministry. The movement gains momentum, and your efforts are recognised by the Ministry.',
  context: 'You\'re hailed as a visionary in the Ministry, your work has inspired a new way of thinking and working. You\'re offered a promotion to Deputy Minister of Human-Centered Design, overseeing all design initiatives in the public service.',
  choices: [
    { text: 'Accept the promotion', target: 'human-centred-design-success', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Question the meaning of it all', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Head to the garden to review your memoirs', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
