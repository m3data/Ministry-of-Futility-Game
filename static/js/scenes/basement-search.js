window.sceneContent = {
  title: 'The search for the Deputy Vice Chair',
  location: 'Ministry Basement',
  sceneDescription: 'You need your form 27B/6A search the basement for the Deputy Vice Chair of the Committee of Workplace Relations. After hours of wandering through the labyrinthine corridors, you stumble upon a locked door with a sign that reads, "Authorised Personnel Only."',
  context: 'You wonder what secrets lie behind the door and if the Deputy Vice Chair is hiding in the shadows. The basement is a place of mystery and intrigue, and you\'re determined to find the truth.',
  choices: [
    { text: 'Try to open the door', target: 'door-opening', actions: ['increaseFutility'] },
    { text: 'Go back to the folder', target: 'meaningful-change', actions: ['increaseWisdom'] },
  ]
};
