window.sceneContent = {
  title: 'The cubicle of confusion',
  location: 'Work Cubicle',
  sceneDescription: 'You return to your cubicle, feeling the weight of the bureaucracy pressing down on you. The hum of the fluorescent lights and the clatter of keyboards surround you. You stare at the screen, wondering if the gnome was real or just a figment of your imagination.',
  context: '',
  choices: [
    { text: 'Return to the garden to explore the mushroom', target: 'mushroom-investigation', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Continue your work', target: 'work-cubicle-existential-dread', actions: ['increaseFutility'] },
  ]
};
