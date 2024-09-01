window.sceneContent = {
  title: 'The meeting about the shutdown',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You organise a meeting with your peers to discuss the shutdown of perpetual planning operations. The mood is somber as everyone contemplates the implications of the sudden change. The clerks are in a state of shock, unsure of what to do next.',
  context: 'As the meeting progresses, you connect with one of your colleagues who shares your frustration with the perpetual planning operations. Together, you begin to brainstorm ideas for implementing real change in the Ministry.',
  choices: [
    { text: 'Take action to implement real change', target: 'real-action', actions: ['increaseWisdom'] },
    { text: 'Suggest forming a committee to address the shutdown', target: 'committee-formation', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Go to the basement to contemplate', target: 'basement', actions: ['increaseWisdom'] },
  ]
};
