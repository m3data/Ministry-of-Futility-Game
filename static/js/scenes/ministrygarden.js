window.sceneContent = {
  title: 'The garden of contemplation',
  location: 'Ministry Garden',
  sceneDescription: 'You step outside into the neglected garden of the Ministry, a stark contrast to the sterile interior. The garden is a place of quiet reflection and escape from the oppressive bureaucracy inside.',
  context: 'You stroll around the unkempt garden and decide to sit on the grass.',
  choices: [
    { text: 'Go to the basement to contemplate', target: 'basementfirstTimer', actions: ['increaseWisdom'] },
    { text: 'Question the meaning of it all', target: 'existentialCrisis', actions: ['increaseFutility'] },
  ]
};
