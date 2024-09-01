window.sceneContent = {
  title: 'In pursuit of clarity?',
  location: 'Bureau of Counterproductive Measures',
  sceneDescription: 'The manager explains, "Operation Clarity is our new public comms initiative. The goal, make all public communications as clear as possible from the Ministry"',
  context: 'You\'re tasked with making sure that all communications from your department are as clear as possible, while also ensuring that they are completely misaligned with communications from other departments. The challenge is daunting, but you\'re determined to make it work.',
  choices: [
    { text: 'Offer to help', target: 'counterproductive-help', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Suggest making communications aligned across all government departments', target: 'clarity-suggestion', actions: ['increaseFutility'] },
    { text: 'Leave the bureau', target: 'lobby', actions: ['increaseFutility'] },
  ]
};
