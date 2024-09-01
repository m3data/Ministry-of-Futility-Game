window.sceneContent = {
  title: 'The forbidden word',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You suggest actually doing something meaningful to the Committee on Perpetual Planning. The clerks are shocked by the audacity of your suggestion, but one of them secretly nods in agreement. The idea of taking action is revolutionary in the world of perpetual planning.',
  context: 'Yo impressed the right bureacrat! You\'re immediately promoted to head the newly formed Department of Theoretical Action Implementation Planning.',
  choices: [
    { text: 'Accept the promotion', target: 'theoretical-action', actions: ['increaseFutility'] },
    { text: 'Decline and return to perpetual planning', target: 'perpetual-planning', actions: ['decreaseFutility', 'increaseWisdom'] },
  ]
};
