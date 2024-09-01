window.sceneContent = {
  title: 'The confines of monotony',
  location: 'Work Cubicle',
  sceneDescription: 'You return to your cubicle, feeling the weight of the bureaucracy pressing down on you. The hum of the fluorescent lights and the clatter of keyboards surround you. You wonder if there\'s more to life than this endless cycle of meaningless tasks.',
  context: 'You sit at your desk, staring at the blank screen of your computer. The minutes tick by, and you feel a sense of futility creeping in.',
  choices: [
    { text: 'Request a transfer to another department', target: 'departmental-transfer', actions: ['increaseFutility'] },
    { text: 'Review your memoirs in the garden', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
