window.sceneContent = {
  title: 'The reception desk',
  location: 'Ministry Reception',
  sceneDescription: 'You approach the reception desk, where a bored-looking receptionist is typing away at a computer. The desk is cluttered with papers and outdated office supplies.',
  context: 'The receptionist glances up at you with a look of mild annoyance. "Can I help you?" they ask, their tone conveying a sense of indifference.',
  choices: [
    { text: 'Ask about your job assignment', target: 'job-assignment', actions: ['increaseWisdom'] },
    { text: 'Ask for directions', target: 'directions', actions: ['increaseFutility'] },
    { text: 'Leave the reception desk', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
