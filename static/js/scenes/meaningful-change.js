window.sceneContent = {
  title: 'The pursuit of purpose',
  location: 'Ministry Basement',
  sceneDescription: 'You open the folder and discover a proposal for transforming the Ministry into a beacon of meaningful change. The project was abandoned years ago due to lack of interest and funding. You\'re inspired to revive the initiative and bring real change to the Ministry.',
  context: 'You\'re filled with a sense of purpose and determination. You decide to talk to the underground movement about the proposal and see if they\'re interested in collaborating.',
  choices: [
    { text: 'Take the proposal to the committee of institutional change', target: 'committee-proposal', actions: ['increaseWisdom'] },
    { text: 'Bring the proposal to the underground movement', target: 'underground-movement', actions: ['increaseWisdom'] },
    { text: 'Give up and return to your cubicle', target: 'work-cubicle', actions: ['increaseFutility'] },
  ]
};
