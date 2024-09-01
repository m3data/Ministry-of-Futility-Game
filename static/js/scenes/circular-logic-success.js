window.sceneContent = {
  title: 'The art of obfuscation',
  location: 'Department of Circular Logic',
  sceneDescription: 'You\'ve mastered the art of circular logic, becoming the gold standard of bureaucratic obfuscation. Your reports are now considered the pinnacle of meaningless complexity.',
  context: 'You\'re offered a promotion to Assistant to the Director of Circular Logic, overseeing all circular departments in the Ministry.',
  choices: [
    { text: 'Write a memoir about your journey', target: 'book-writing', actions: ['decreaseWisdom'] },
    { text: 'Accept your promotion', target: 'assistant-to-the-director-of-circular-logic', actions: ['decreaseWisdom'] },
    { text: 'Visit the Basement to contemplate', target: 'basement-first-timer', actions: ['increaseWisdom'] },
  ]
};
