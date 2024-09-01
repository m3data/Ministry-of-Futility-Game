window.sceneContent = {
  title: 'The workshop of change',
  location: 'Basement',
  sceneDescription: 'You come down to the basement and find a quiet spot in a corner to plan your workshop.',
  context: 'You sit down to plan the design thinking workshop. The agenda is set, the materials are prepared, and the participants are invited. There\'s chatter in the underground movement about the potential impact of your workshop.',
  choices: [
    { text: 'Proceed with the workshop', target: 'workshop-success', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Explore the basement for hidden secrets', target: 'basement', actions: ['increaseWisdom'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
  ]
};
