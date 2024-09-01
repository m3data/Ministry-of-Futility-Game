window.sceneContent = {
  title: 'Labrynth of futility',
  location: 'Department of Existential Dread',
  sceneDescription: 'You embark on a quest to find meaning in the Department of Existential Dread.',
  context: 'Your quest for purpose leads you through a maze of departments, each more pointless than the last. Finally, you find yourself back where you started, having learned that the real purpose was embracing the futility you experienced along the way.',
  choices: [
    { text: 'Accept your fate and return to work', target: 'recursive-despair', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Go to the garden and review your memoirs', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
