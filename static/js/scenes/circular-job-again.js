window.sceneContent = {
  title: 'The cycle continues',
  location: 'Department of Circular Logic',
  sceneDescription: 'You\'re assigned to write another report, this time on the importance of circular logic in the Ministry and the public service in general. The report is due by the end of the day, and it must be at least 42 pages long.',
  context: 'You pause for a moment, contemplating the futility of your task. The cycle of circular logic continues, and you\'re caught in its endless loop.',
  choices: [
    { text: 'Write the report', target: 'report-writing-take-two', actions: ['decreaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
    { text: 'Quit in frustration', target: 'null', actions: ['quitGame'] },
  ]
};
