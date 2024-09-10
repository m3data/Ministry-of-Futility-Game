window.sceneContent = {
  title: 'Recursive despair',
  location: 'Department of Existential Dread',
  sceneDescription: 'You embrace the existential dread of the Department, accepting the futility of your job and the seeming meaninglessness of your existence.',
  context: 'You spend your days contemplating the futility of contemplating futility. Your productivity reports are entirely blank, which is edging you further on the leaderboards to make you the department\'s top performer.',
  choices: [
    { text: 'Continue your career in existential dread', target: 'recursive-despair', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Seek transfer to a less philosophical department', target: 'departmental-transfer', actions: ['increaseFutility'] },
  ]
};
