window.sceneContent = {
  title: 'Authoring your destiny',
  location: 'Ministry Garden',
  sceneDescription: 'You sit down to review all your memoirs, capturing the absurdity and futility of your journey through the Ministry. The words flow easily, and you find yourself lost in the narrative of your own making. But you persist and write the final chapter of your book, "50 Shades of Bureaucracy: A Journey Through the Ministry of Futility".',
  context: 'Congratulations! Your book becomes an instant bestseller. You\'re invited back to the Ministry to give a talk, which is promptly scheduled, rescheduled, and ultimately canceled due to an error in the sechduling system built by a large overpaid consulting firm.',
  choices: [
    { text: 'Return to the Ministry as a consultant', target: 'consultant', actions: ['increaseFutility'] },
    { text: 'Enjoy your retirement', target: 'null', actions: ['quitGame'] },
  ]
};
