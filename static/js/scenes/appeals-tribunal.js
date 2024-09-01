window.sceneContent = {
  title: 'The tribunal of futility',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'You appeal the decision to transfer you to the Department of Existential Dread, hoping for a different outcome.',
  context: 'Your appeal is denied by the Tribunal of Futility. They inform you that the decision is final, resitance is futile and that you\'re now officially a member of the Department of Existential Dread.',
  choices: [
    { text: 'Accept your fate', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Refuse and leave', target: 'null', actions: ['quitGame'] },
    { text: 'Work in secret to undermine the system', target: 'join-underground-movement', actions: ['increaseWisdom', 'decreaseFutility'] },
  ]
};
