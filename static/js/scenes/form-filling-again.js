window.sceneContent = {
  title: 'The dreaded Form 27B/6 (again)',
  location: 'Ministry Reception',
  sceneDescription: 'You start over with Form 27B/6, this time using the correct color ink.',
  context: 'It\'s quicker the second time aroung but it still feels like hours going through Form 27B/6. You get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back to the receptionist.',
  choices: [
    { text: 'Return to the reception desk', target: 'reception-with-form', actions: ['increaseWisdom'] },
    { text: 'Give up and explore on your own', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
