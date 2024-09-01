window.sceneContent = {
  title: 'Map to nowhere',
  location: 'Ministry Reception',
  sceneDescription: 'You ask the receptionist for directions to the Department of Human Resourcing Resources.',
  context: 'The receptionist hands you a map that appears to be for an entirely different building. "Good luck," they say, turning back to their computer.',
  choices: [
    { text: 'Return to the lobby', target: 'lobby', actions: ['increaseFutility'] },
    { text: 'Quit your job', target: 'null', actions: ['quitGame'] },
  ]
};
