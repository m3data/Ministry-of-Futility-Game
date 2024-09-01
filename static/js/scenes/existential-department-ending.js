window.sceneContent = {
  title: 'The Final Embrace of Dread',
  location: 'Department of Existential Dread',
  sceneDescription: 'You\'ve almost fully embraced the existential dread of the Department, you\'re on the edge of a breakthrough, a moment of clarity that could change everything.',
  context: 'After months of questioning the purpose of your job, you come to the final realisation: there is no purpose. Embracing this truth, you accept your role in the Department of Existential Dread fully. From now on, your days are filled with deep contemplation of futility, and your productivity reports are the envy of the entire Ministry—because they are completely blank.',
  choices: [
    { text: 'Contemplate your existence', target: 'recursive-despair', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Seek a way out of the Department', target: 'escape-attempt', actions: ['increaseWisdom'] },
  ]
};
