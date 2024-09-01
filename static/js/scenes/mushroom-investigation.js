window.sceneContent = {
  title: 'The woo woo mushroom',
  location: 'Ministry Garden',
  sceneDescription: 'You investigate the mushroom, which seems to be glowing with an otherworldly light. As you reach out to touch it, you feel a sense of calm and clarity wash over you.',
  context: 'The gnome looks up at you with a knowing smile. "Ah, you\'ve found the woo woo mushroom. It\'s said to grant wisdom to those who seek it. Are you prepared for the insights you seek?"... You are slightly perplexed... did the gnome actually said that? You think to yourself...am I hallucinating...?',
  choices: [
    { text: 'Pick the mushroom', target: 'mushroom-picking', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Return to your cubicle', target: 'work-cubicle-woo-choice', actions: ['increaseFutility'] },
    { text: 'Freak out and run away', target: 'end', actions: ['increaseFutility', 'decreaseWisdom', 'decreaseWoo'] },
  ]
};
