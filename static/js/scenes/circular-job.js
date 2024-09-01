window.sceneContent = {
  title: 'The endless cycle',
  location: 'Department of Circular Logic',
  sceneDescription: 'Congratulations! You\'re now an employee of the Department of Circular Logic, tasked with finding out what the department actually does without revealing it. The corridors seem to shift and change as you walk through them, making it impossible to find your way back to wherever it is you\'ve come from.',
  context: 'You\'ve been promoted to Senior Analyst of Purpose Obfuscation. Your first task is to write a report explaining why your job is necessary without revealing what your job actually is in any meaningful detail.',
  choices: [
    { text: 'Write the report', target: 'report-writing', actions: ['decreaseWisdom'] },
    { text: 'Quit in frustration', target: 'null', actions: ['quitGame'] },
    { text: 'Ask for clarification', target: 'circular-confusion-again', actions: ['increaseWisdom'] },
  ]
};
