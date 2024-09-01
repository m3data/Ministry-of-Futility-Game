window.sceneContent = {
  title: 'The receptionist\'s response',
  location: 'Ministry Reception',
  sceneDescription: 'You ask the receptionist for help with Form 27B/6, hoping for some guidance.',
  context: 'The receptionist looks at your form and shakes their head. "You filled it out in the wrong color ink. You\'ll have to start over with the correct color. And don\'t forget to get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back here."',
  choices: [
    { text: 'Fill out the form again', target: 'form-filling-again', actions: ['increaseFutility'] },
    { text: 'Give up and explore on your own', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
