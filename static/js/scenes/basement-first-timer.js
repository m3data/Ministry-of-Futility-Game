window.sceneContent = {
  title: 'The basement of contemplation',
  location: 'Ministry Basement',
  sceneDescription: 'You descend into the basement for the first time, feeling a sense of unease. The dimly lit corridors stretch out before you, filled with the echoes of forgotten projects and abandoned initiatives. You hear chatter in the distance and wonder what secrets lie hidden in the shadows.',
  context: 'You take a deep breath and walk towards the sound of voices.',
  choices: [
    { text: 'Find out what\'s happening', target: 'basement-investigation', actions: ['increaseWisdom'] },
    { text: 'Return to your cubicle', target: 'work-cubicle', actions: ['increaseFutility'] },
    { text: 'Acsend to the garden and review your memoirs', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
