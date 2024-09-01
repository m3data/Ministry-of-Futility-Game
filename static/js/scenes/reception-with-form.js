window.sceneContent = {
  title: 'The receptionist\'s response (again)',
  location: 'Ministry Reception',
  sceneDescription: 'You return to the reception desk with Form 27B/6 in triplicate, hoping you\'ve finally completed the task correctly.',
  context: 'The receptionist looks at your forms and shakes their head. "You filled out the wrong form. We have a new version now that better aligns with the workplace rules defined by the Deputy Vice Chair of the Committee of Workplace Relations. You need Form 27B/6A, not Form 27B/6. You\'ll have to start over."',
  choices: [
    { text: 'Fill out the correct form', target: 'form-filling-6a', actions: ['increaseFutility'] },
    { text: 'Ask for directions to the Department of Human Resourcing Resources', target: 'directions', actions: ['increaseWisdom'] },
    { text: 'Give up and explore on your own', target: 'lobby', actions: ['increaseFutility'] },
    { text: 'Tell the receptionist you quit', target: 'null', actions: ['quitGame'] },
  ]
};
