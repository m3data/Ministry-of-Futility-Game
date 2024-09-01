window.sceneContent = {
  title: 'The wisdom of the gnome',
  location: 'Ministry Garden',
  sceneDescription: 'You sit down on the overgrown grass, hoping to gain some insight into your journey through the Ministry of Futility.',
  context: 'You notice a slight glisting on the top of a mushroom growing from the mulch beside the gnome.',
  choices: [
    { text: 'Investigate the mushroom', target: 'mushroom-investigation', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Go back to your cubicle', target: 'work-cubicle-psychadelia', actions: ['increaseFutility'] },
  ]
};
