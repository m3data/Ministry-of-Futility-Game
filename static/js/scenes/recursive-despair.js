window.sceneContent = {
  title: 'Endless Contemplation',
  location: 'Department of Existential Dread',
  sceneDescription: 'You\'re lost in a sea of existential dread...',
  context: 'You spend your days lost in thought. Contemplating the futility of your job, your personal life, and existence itself. The more you think about it, the more you realise that everything is meaningless. Your productivity reports are a blank canvas and reflection of the void within. A void you feel working in a hollowed out public service filled with consultants while your peers that actually care about human-centred public service delivery are wrapped in red tape and spend their days checking boxes and reviewing post-it notes from the last workshop.',
  choices: [
    { text: 'Continue your contemplation', target: 'recursive-despair', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Seek a way out of the Department', target: 'escape-attempt', actions: ['increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
