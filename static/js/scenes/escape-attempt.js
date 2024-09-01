window.sceneContent = {
  title: 'Breaking Free',
  location: 'Department of Existential Dread',
  sceneDescription: 'You\'ve had enough of the Department of Existential Dread and its endless cycle of futility. You make a break for the exit, determined to find a way out of the Ministry.',
  context: 'As you step out, a wave of clarity washes over you. The world outside may be just as absurd, but at least you’re free to find your own meaning. Right?',
  choices: [
    { text: 'Continue your journey', target: 'lobby', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Resign and leave the Ministry', target: 'null', actions: ['quitGame'] },
  ]
};
