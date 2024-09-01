window.sceneContent = {
  title: 'The Department of Circular Logic',
  location: 'Department of Circular Logic',
  sceneDescription: 'You enter the Department of Circular Logic, a maze of circular corridors and mirrored walls. The lighting changes subtly as you move through the space, making it difficult to maintain a sense of direction or time.',
  context: 'An employee approaches you. "Welcome! Before I can tell you what we do here, you\'ll need to explain to me what you think we actually do here."',
  choices: [
    { text: 'Try to explain', target: 'circular-explanation', actions: ['increaseFutility'] },
    { text: 'Admit you don\'t know', target: 'circular-confusion', actions: ['increaseWisdom'] },
    { text: 'Leave the department', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
