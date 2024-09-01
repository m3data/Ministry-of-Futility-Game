window.sceneContent = {
  title: 'The cycle of futility',
  location: 'Work Cubicle',
  sceneDescription: 'You sit at your desk, staring at the screen, post-it notes and half-empty coffee cups littering the desk.',
  context: 'Your mind wanders and you reflect on what you experienced in the Ministry garden... like, what the fuck, a speaking gnome?',
  choices: [
    { text: 'Return to the garden to explore the mushroom', target: 'mushroom-investigation-again', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Go on a sabbatical to find yourself', target: 'sabbatical', actions: ['increaseWisdom', 'decreaseFutility'] },
  ]
};
