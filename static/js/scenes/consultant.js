window.sceneContent = {
  title: 'Consulting the consultants',
  location: 'Ministry of Futility',
  sceneDescription: 'You\'ve become a consultant, advising the Ministry on how to be uplift capability. The irony is not lost on you.',
  context: 'Your days are filled with meetings, reports, and more meetings. You\'re paid handsomely for your services, but you just can\'t shake the feeling that you\'re just another cog in the bureaucratic machine and a trimtab that reinforces the consultancy-government-complex.',
  choices: [
    { text: 'Recommend your own termination', target: 'consultant-termination', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Suggest hiring more consultants', target: 'consultant-expansion', actions: ['decreaseFutility', 'increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
