window.sceneContent = {
  title: 'The futility of it all',
  location: 'Ministry Hallway',
  sceneDescription: 'As you stroll the dreary hallways of the Ministry you\'re struck by a sudden sense of futility, questioning the purpose of your work and your life in general. The corridors of the Ministry seem to stretch on endlessly, a maze of bureaucracy and confusion.',
  context: 'As you ponder the meaning of your work and your life in general, you\'re approached by a representative from the Department of Existential Dread. "You look like a perfect candidate for our team!"',
  choices: [
    { text: 'Join the Department of Existential Dread', target: 'existential-department', actions: ['increaseFutility'] },
    { text: 'Flee the building', target: 'wise-end', actions: ['None'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
