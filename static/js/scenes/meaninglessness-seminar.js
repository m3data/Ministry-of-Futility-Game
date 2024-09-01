window.sceneContent = {
  title: 'Death by PowerPoint',
  location: 'Department of Existential Dread',
  sceneDescription: 'You sit through a full day of PowerPoint presentations about the futility of finding meaning in the workplace. The slides are filled with bullet points and poorly chosen clip art and stock images, and the presenters drone on in monotone voices.',
  context: 'You walk out of the seminar feeling oddly motivated to do nothing.',
  choices: [
    { text: 'Return to your department with renewed lack of purpose', target: 'dread-embracing', actions: ['increaseFutility', 'increaseWisdom'] },
    { text: 'Question everything and start a bureaucratic revolution', target: 'revolution', actions: ['increaseWisdom', 'increaseFutility'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
