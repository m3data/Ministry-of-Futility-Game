window.sceneContent = {
  title: 'The failed persuasion',
  location: 'Ministry Basement',
  sceneDescription: 'You try to convince the guard that you\'re authorised personnel and need to find the Deputy Vice Chair of the Committee of Workplace Relations. The guard remains unconvinced.',
  context: 'The guard shakes their head and escorts you out of the area. You\'re left standing in the one of the basement corridors, wondering what secrets lie behind the locked door.',
  choices: [
    { text: 'Return to the folder', target: 'meaningful-change', actions: ['increaseWisdom'] },
    { text: 'Return to the lobby to figure out WTF you\'re doing here', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
