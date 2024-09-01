window.sceneContent = {
  title: 'The Department of Existential Dread',
  location: 'Department of Existential Dread',
  sceneDescription: 'You enter the Department, stop and absorb the atmosphere. It is heavy with existential angst and bureaucratic despair. This is a place dedicated to questioning the purpose of your job and why it matters in the grand scheme of the universe. It\'s a paradox wrapped in an enigma, smothered in a thick layer of futility sauce. Delicious!',
  context: 'A senior bureaucrat approaches you and says with a sardonic tone "Welcome to the Department of Existential Dread. Enjoy your stay!"',
  choices: [
    { text: 'Embrace the existential dread', target: 'dread-embracing', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Try to find meaning', target: 'meaning-search', actions: ['increaseFutility', 'increaseWisdom', 'increaseWoo'] },
  ]
};
