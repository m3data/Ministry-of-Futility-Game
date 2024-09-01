window.sceneContent = {
  title: 'The secrets of the basement',
  location: 'Ministry Basement',
  sceneDescription: 'You venture into the basement, where you discover a hidden archive of forgotten projects and abandoned initiatives. Among the dust and cobwebs, you find a folder labeled "Project: Meaningful Change."',
  context: 'You\'re drawn to the folder and wonder what secrets it holds. The basement is a place of mystery and intrigue, a stark contrast to the sterile corridors of the Ministry.',
  choices: [
    { text: 'Investigate the folder', target: 'meaningful-change', actions: ['increaseWisdom'] },
    { text: 'Proceed with the workshop', target: 'workshop-success', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Try to find the Deputy Vice Chair of the Committee of Workplace Relations', target: 'basement-search', actions: ['increaseFutility'] },
  ]
};
