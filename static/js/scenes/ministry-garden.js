window.sceneContent = {
  title: 'The garden of contemplation',
  location: 'Ministry Garden',
  sceneDescription: 'You step outside into the neglected garden of the Ministry, a stark contrast to the sterile interior. A place of quiet reflection and escape from the oppressive bureaucracy inside.',
  context: 'You stroll around the unkempt garden and decide to sit on the grass. The sun filters through the leaves of the gnarled old tree, casting dappled shadows on the ground. You feel a sense of peace and clarity that is rare in the Ministry.',
  choices: [
    { text: 'Go to the basement to contemplate further', target: 'basement-first-timer', actions: ['increaseWisdom'] },
    { text: 'Question the meaning of it all', target: 'existential-crisis', actions: ['increaseFutility'] },
  ]
};
