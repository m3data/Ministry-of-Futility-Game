window.sceneContent = {
  title: 'A Suggestion Ignored',
  location: 'Ministry of Futility',
  sceneDescription: 'You suggest cutting down on consultants to restore some semblance of order in the Ministry. However, your suggestion is buried in a report that no one reads. The number of consultants continues to grow, and the chaos deepens.',
  context: 'You realise that your efforts to bring about change have been futile. The Ministry is beyond saving.',
  choices: [
    { text: 'Surrender to futility and continue', target: 'consultant-absurdity', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Resign and leave the Ministry', target: 'wise-end', actions: ['None'] },
  ]
};
