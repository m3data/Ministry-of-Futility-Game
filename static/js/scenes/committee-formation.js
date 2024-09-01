window.sceneContent = {
  title: 'The formation of a committee to address the shutdown',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You and your collegue suggest forming a committee to address the shutdown of perpetual planning operations. The idea is met with cautious optimism, and the clerks begin discussing the logistics of forming a committee. The room is filled with the sound of pens scratching on paper, sharpies writing on post-its and the murmur of futility.',
  context: '',
  choices: [
    { text: 'Proceed with forming the committee', target: 'committee-formation-success', actions: ['increaseWisdom'] },
    { text: 'Suggest a different approach', target: 'real-action', actions: ['increaseWisdom'] },
    { text: 'Go to the basement to contemplate', target: 'basement', actions: ['increaseWisdom'] },
  ]
};
