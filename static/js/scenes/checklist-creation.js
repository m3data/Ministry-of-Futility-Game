window.sceneContent = {
  title: 'The checklist paradox',
  location: 'Office of Redundant Redundancies',
  sceneDescription: 'You get onto creating the checklist for checklist creation. The clerks watch in awe as you navigate the labyrinth of redundancy with ease. The checklist is a masterpiece of redundancy, a work of art in the world of bureaucratic futility.',
  context: 'Upon completion, you\'re told that there\'s already a checklist for that, and you\'ll need to start over using the existing formatting system for checklists to maintain compliance with the rules of the Department of Auditing of Inspecting.',
  choices: [
    { text: 'Start over', target: 'checklist-creation', actions: ['increaseFutility'] },
    { text: 'Question the need for so many checklists', target: 'efficiency-suggestion', actions: ['decreaseFutility', 'increaseWisdom'] },
  ]
};
