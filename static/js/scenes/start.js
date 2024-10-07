window.sceneContent = {
  title: 'Your arrival at the Ministry of Futility',
  location: 'Ministry Entrance',
  sceneDescription: 'You arrive at the entrance of the Ministry of Futility for your first day of work. The building looms before you, a monument to the brutalism of bureaucracy. You pause, take a deep breath, and step inside through the imposing doors.',
  context: 'The lobby is vast and disorienting, with harsh lighting and a sense of unease. You see a reception desk in the distance and corridors leading off in different directions. The air is filled with the sound of shuffling papers and the distant hum of computers.',
  choices: [
    { text: 'Enter the lobby', target: 'lobby', actions: ['increaseWisdom'] },
    { text: 'Turn back and leave', target: 'null', actions: ['quitGame'] },
  ]
};
