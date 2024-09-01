window.sceneContent = {
  title: 'Insights of the woo woo mushroom',
  location: 'Ministry Garden',
  sceneDescription: 'You eat the woo woo mushroom, not knowing what to expect. You decide to stay sitting in the garden.',
  context: 'Time passes, and you start to feel overwhelmed with futility and a sense of clarity at the same time. The walls and plants are speaking to you. The woo woo spirits of the Ministry. The mushroom has granted you insights into the true nature of the Ministry and your place within it.',
  choices: [
    { text: 'Stay in the garden and contemplate', target: 'garden-woo-woo-contemplation', actions: ['increaseWisdom', 'increaseWoo'] },
    { text: 'Go back to your cubicle', target: 'work-cubicle-psychadelia', actions: ['increaseFutility'] },
  ]
};
