window.sceneContent = {
  title: 'Reviewing Your Memoirs',
  location: 'Ministry Garden',
  sceneDescription: 'You sit in the garden, surrounded by the quiet beauty of nature contained within the uncurated garden. The sun filters through the leaves, casting weird shadows on the ground.',
  context: 'You take a moment to review your memoirs, reflecting on the journey that brought you to this point. These reflections capture the essence of your journey through the Ministry of Futility.',
  choices: [
    { text: 'Proceed to write your book', target: 'book-writing', actions: ['increaseWisdom'] },
    { text: 'Visit the Basement to contemplate', target: 'basement-first-timer', actions: ['increaseWisdom'] },
    { text: 'Speak to the garden gnome', target: 'gnome-wisdom', actions: ['increaseWisdom', 'increaseWoo'] },
  ]
};
