window.sceneContent = {
  title: 'The Committee on Perpetual Planning',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You accept the recommendation and find yourself in the Committee on Perpetual Planning. The clerks are busy scheduling meetings about planning meetings, and the whiteboards are filled with color-coded timelines, post-it notes and flowcharts. The hum of the fluorescent lights fills the air.',
  context: 'Your first task is to schedule a meeting to discuss the agenda for a future meeting about scheduling strategies to design and plan new policies.',
  choices: [
    { text: 'Start scheduling', target: 'scheduling-nightmare', actions: ['increaseFutility'] },
    { text: 'Suggest actually doing something meaningful', target: 'action-suggestion', actions: ['increaseFutility', 'increaseWisdom'] },
  ]
};
