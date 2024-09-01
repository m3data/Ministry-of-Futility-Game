window.sceneContent = {
  title: 'The heresy of efficiency and effectiveness',
  location: 'Office of Redundant Redundancies',
  sceneDescription: 'You suggest streamlining the checklist creation process to make it more effective in helping people actually do meaningful work.',
  context: 'Your suggestion to streamline processes so the department can devote more time to helping the public they are meant to serve is met with shear horror by your superiors. You\'re immediately sent to the Bureau of Counterproductive Measures for rehabilitation.',
  choices: [
    { text: 'Go to rehabilitation', target: 'counterproductive-measures', actions: ['increaseFutility'] },
    { text: 'Refuse and risk termination', target: 'termination-risk', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
