window.sceneContent = {
  title: 'Bureaucratic Groundhog Day',
  location: 'Department of Circular Logic',
  sceneDescription: 'You ask for clarification on your job duties, hoping for some semblance of coherence.',
  context: '"Ah, you\'ve discovered the paradox!" the senior bureaucrat exclaims. "You\'re promoted to Assistant to the Deputy Vice Chair of Circular Logic. Your job is to ensure that nobody ever figures out what we do here and why we actually have such an oversized budget. Good luck!"',
  choices: [
    { text: 'Accept the promotion', target: 'circular-job-promotion', actions: ['increaseFutility'] },
    { text: 'Refuse and leave', target: 'lobby', actions: ['increaseFutility', 'decreaseWisdom'] },
  ]
};
