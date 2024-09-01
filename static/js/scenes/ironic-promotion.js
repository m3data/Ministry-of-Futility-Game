window.sceneContent = {
  title: 'The irony of it all',
  location: 'Department of Existential Dread',
  sceneDescription: 'You accept the promotion to Deputy Minister of rEvolutionary Suppression. It\'s a position that goes against everything you believe in and the irony is not lost on you. Despite this you decide to make the best of it.',
  context: 'You\'re now in charge of stifling any real change or actual innovation in the Ministry. Your days are filled with meetings about meetings, and your productivity reports are a testament to the futility of your work.',
  choices: [
    { text: 'Continue your work in rEvolutionary Suppression', target: 'suppression-success', actions: ['increaseFutility'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
    { text: 'Give up and leave the Ministry', target: 'null', actions: ['quitGame'] },
  ]
};
