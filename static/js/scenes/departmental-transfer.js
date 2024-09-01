window.sceneContent = {
  title: 'A fresh start?',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'You consider a transfer to another department, hoping for a fresh start away from the counterproductive measures of the Bureau.',
  context: 'You request a transfer to the the woo woo Department of Human-Centered Design. Your request is denied, and you\'re instead transferred to the Department of Existential Dread.',
  choices: [
    { text: 'Accept the transfer', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Appeal the decision', target: 'appeals-tribunal', actions: ['increaseFutility'] },
    { text: 'Quit in frustration', target: 'null', actions: ['quitGame'] },
  ]
};
