window.sceneContent = {
  title: 'The wisdom of the gnome',
  location: 'Ministry Garden',
  sceneDescription: 'You approach the garden gnome, a small statue nestled among the flowers and some sweetly scented mulch. It seems to radiate a sense of calm and wisdom.',
  context: 'You imagine the gnome looking up at you with its unblinking eyes and saying to you... "Ah, another lost soul seeking guidance in this futile wilderness. What wisdom do you seek?"',
  choices: [
    { text: 'Ask the gnome for advice', target: 'gnome-advice', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Return to your cubicle', target: 'work-cubicle', actions: ['increaseFutility'] },
  ]
};
