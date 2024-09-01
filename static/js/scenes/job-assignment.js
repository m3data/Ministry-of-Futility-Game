window.sceneContent = {
  title: 'The receptionist\'s response',
  location: 'Ministry Reception',
  sceneDescription: 'The receptionist looks up from their computer, a faint glimmer of interest in their eyes. They seem almost surprised that you\'re asking about your job assignment.',
  context: '"Job assignment?" the receptionist sighs. You\'ll need to fill out Form 27B/6 in triplicate, get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back here so I can stamp it with the seal of futility."',
  choices: [
    { text: 'Fill out Form 27B/6', target: 'form-filling', actions: ['increaseFutility'] },
    { text: 'Ask for directions to the Department of Human Resourcing Resources', target: 'directions', actions: ['increaseWisdom'] },
    { text: 'Give up and explore on your own', target: 'lobby', actions: ['increaseFuility'] },
  ]
};
