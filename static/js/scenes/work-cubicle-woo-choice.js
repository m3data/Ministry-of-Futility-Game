window.sceneContent = {
  title: 'The return to futility',
  location: 'Work Cubicle',
  sceneDescription: 'You return to your cubicle...',
  context: 'You sit at your desk, staring at the screen, feeling the futility of your existence. The mushroom\'s glow fades from your mind, replaced by the harsh reality of the Ministry.',
  choices: [
    { text: 'Return to the garden to explore the mushroom', target: 'mushroom-investigation-again', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Continue your work', target: 'work-cubicle-existential-dread', actions: ['increaseFutility'] },
  ]
};
