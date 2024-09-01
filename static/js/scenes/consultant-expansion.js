window.sceneContent = {
  title: 'The Rise of Consultants',
  location: 'Ministry of Futility',
  sceneDescription: 'As your recommendation to expand the consultant role is implemented, the Ministry begins hiring more consultants than actual staff. The consultants soon outnumber the Ministry employees, creating a new layer of inefficiency as they start consulting each other without realising it. Meetings multiply exponentially, reports become even more convoluted, PowerPoints on cloud storage outnumber every other file type and nothing ever gets done. Meanwhile, you sit back and watch the chaos unfold.',
  context: 'It suddenly becomes clear to you that you are part of the problem.',
  choices: [
    { text: 'Suggest cutting down on consultants', target: 'consultant-reduction', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Embrace the absurdity', target: 'consultant-absurdity', actions: ['increaseFutility', 'decreaseWisdom'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
