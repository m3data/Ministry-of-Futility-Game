window.sceneContent = {
  title: 'True accomplishment',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You start scheduling meetings about planning meetings, and the cycle of futility continues. The clerks are impressed by your dedication to the cause of perpetual planning, and you quickly rise through the ranks of the Department on Perpetual Planning.',
  context: 'You fall into an infinite loop of scheduling meetings about meetings. Weeks and months pass, but no actual real work seems to get accomplished. Your superiors are thrilled with your busyness and productivity.',
  choices: [
    { text: 'Continue your career in perpetual planning', target: 'perpetual-planning', actions: ['increaseFutility'] },
    { text: 'Break the cycle and suggest action', target: 'action-suggestion', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
