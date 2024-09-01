window.sceneContent = {
  title: 'The proposal for change',
  location: '',
  sceneDescription: 'You present the proposal for meaningful change to the committee of institutional change. The members listen intently, their expressions shifting from skepticism to curiosity. The proposal is met with cautious optimism, and the committee agrees to fund the initiative.',
  context: 'You\'re hailed as a visionary in the Ministry, a champion of meaningful change. Your proposal is approved, and you\'re given the resources to bring your vision to life.',
  choices: [
    { text: 'Proceed with the initiative', target: 'workshop-success', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
  ]
};
