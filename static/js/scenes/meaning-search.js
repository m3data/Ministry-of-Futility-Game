window.sceneContent = {
  title: 'The quest for purpose',
  location: 'Department of Existential Dread',
  sceneDescription: 'You embark on a quest to find meaning in the Department of Existential Dread. The journey is filled with bureaucratic obstacles and philosophical conundrums.',
  context: 'Your attempts to find meaning are flagged as disruptive behavior. You\'re sentenced to attend a seminar on "Embracing Meaninglessness in the Workplace."',
  choices: [
    { text: 'Attend the seminar', target: 'meaninglessness-seminar', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Rebel and search for a purpose', target: 'purpose-quest', actions: ['increaseWisdom', 'decreaseFutility'] },
  ]
};
