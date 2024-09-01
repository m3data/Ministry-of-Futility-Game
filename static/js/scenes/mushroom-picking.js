window.sceneContent = {
  title: 'The wisdom of the woo woo mushroom',
  location: 'Ministry Garden',
  sceneDescription: 'You pick the woo woo mushroom, feeling a sense of enlightenment wash over you. The gnome nods approvingly, as if it knew all along that you would find the mushroom.',
  context: 'You hold the mushroom in your hand, feeling its woo woo flow through you.',
  choices: [
    { text: 'Eat the mushroom', target: 'mushroom-consumption', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Return to your cubicle', target: 'work-cubicle-psychadelia', actions: ['increaseFutility'] },
  ]
};
