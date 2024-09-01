window.sceneContent = {
  title: 'The Dawn of a New Ministry',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You begin implementing the changes outlined in the Project: Meaningful Change proposal. The Ministry slowly transforms, slowly become more focused on serving the needs of the public. The clerks are inspired by your leadership and dedication to real change. The Ministry is on the path to becoming a model of meaningful public service delivery. Or so you think...',
  context: 'Your work has made the Ministry a model of human-centered design and efficiency. You\'re offered a promotion to Minister of Human-Centered Design, overseeing all design initiatives in the public service.',
  choices: [
    { text: 'Accept the promotion', target: 'minister-ending', actions: ['decreaseWisdom'] },
    { text: 'Go to the garden to reflect on your journey', target: 'garden-memoir-review', actions: ['increaseWisdom'] },
  ]
};
