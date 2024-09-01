window.sceneContent = {
  title: 'The risks of rebellion',
  location: 'Work Cubicle',
  sceneDescription: 'You sit in your cubicle, contemplating the risks of joining the underground movement. The consequences of your actions weigh heavily on your mind. You wonder if the potential rewards are worth the risks.',
  context: 'You consider the potential consequences of organising the design thinking workshop in the basement. The Ministry is known for its harsh punishments for those who challenge the status quo.',
  choices: [
    { text: 'Proceed with the workshop', target: 'workshop-planning', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Continue to question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
