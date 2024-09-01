window.sceneContent = {
  title: 'The triumph of futility',
  location: 'Department of Existential Dread',
  sceneDescription: 'Your work in rEvolutionary Suppression has made the Ministry a model of inefficiency and stagnation. You\'re hailed as a visionary in the field of suppression. Helping to make the Ministry a shining example of futility and stagnation.',
  context: 'You\'re offered a promotion to Minister of rEvolutionary Suppression, overseeing all efforts to stifle real change in the public service.',
  choices: [
    { text: 'Accept the promotion', target: 'minister-ending', actions: ['decreaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
    { text: 'Review your memoirs in the garden', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
