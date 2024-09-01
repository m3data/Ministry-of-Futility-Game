window.sceneContent = {
  title: 'The legacy of human-centered design',
  location: 'Department of Human-Centered Design',
  sceneDescription: 'Your work has revolutionised the Ministry, making it a model of human-centered designin the public service. You\'re promoted to Minister of Human-Centered Design, overseeing all design initiatives in the public service.',
  context: 'You take some timepause and reflect honestly about your legacy. It becomes abundently clear it is actually one of meaningless change, lots of post-its and plenty of prototypes, design artifacts and workshops.',
  choices: [
    { text: 'Accept your role as Minister of Human-Centered Design', target: 'minister-ending', actions: ['decreaseWisdom'] },
    { text: 'Question the meaning of it all', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
