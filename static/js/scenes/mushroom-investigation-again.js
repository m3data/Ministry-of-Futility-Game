window.sceneContent = {
  title: 'Surely this could be dangerous?',
  location: 'Ministry Garden',
  sceneDescription: 'You come back the garden under the fading light. The gnome is smiling.',
  context: 'You look down at the gnome, then look at the woo woo mushroom... it\'s like it\'s calling to me. Eat me. Eat me.',
  choices: [
    { text: 'Eat the mushroom', target: 'mushroom-consumption', actions: ['increaseWoo', 'decreaseFutility'] },
    { text: 'Go on sabbatical and find yourself', target: 'sabbatical', actions: ['decreaseFutility'] },
  ]
};
