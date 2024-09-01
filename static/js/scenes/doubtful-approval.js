window.sceneContent = {
  title: 'A Trap Uncovered',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You begin to suspect that the Committee\'s approval was just another bureaucratic trap. As you implement changes, you encounter resistance at every turn, and soon, all your efforts are undone. You\'re left wondering if real change is even possible in the Ministry.',
  context: 'The Committee\'s approval was just a bureaucratic trick to keep you busy. Your proposal is shelved, and you\'re demoted to your previous position in the Office of Perpetual Planning.',
  choices: [
    { text: 'Resign in frustration', target: 'end', actions: ['increaseWisdom'] },
    { text: 'Continue fighting the system', target: 'underground-movement', actions: ['increaseFutility'] },
  ]
};
