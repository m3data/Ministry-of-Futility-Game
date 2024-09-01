window.sceneContent = {
  title: 'The report to nowhere',
  location: 'Department of Circular Logic',
  sceneDescription: 'You sit down to write the report on the necessity of your job without revealing what your job actually is. The words flow easily, but adding real substance to the content remains elusive.',
  context: 'After hours of writing, you produce a 41-page report that says absolutely nothing of substance. Your supervisor is delighted and immediately shreds the document.',
  choices: [
    { text: 'Continue working', target: 'circular-job-again', actions: ['increaseFutility'] },
    { text: 'Quit in frustration', target: 'null', actions: ['quitGame'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
  ]
};
