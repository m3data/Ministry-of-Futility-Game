window.sceneContent = {
  title: 'Purpose obfuscation',
  location: 'Department of Circular Logic',
  sceneDescription: 'You attempt to explain what you think the Department of Circular Logic does.',
  context: 'You make a wild guess about the department\'s purpose. The employee nods enthusiastically. "Exactly! But now that you know what we do, you can\'t work here. We only employ people who don\'t really know what we do, or at the least, pretend they don\'t."',
  choices: [
    { text: 'Leave in frustration', target: 'lobby', actions: ['increaseFutility'] },
    { text: 'Admit you don\'t know', target: 'circular-confusion', actions: ['increaseWisdom'] },
  ]
};
