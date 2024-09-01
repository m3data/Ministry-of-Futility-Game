window.sceneContent = {
  title: 'The never-ending cycle',
  location: 'Department of Circular Logic',
  sceneDescription: 'You sit down to write the report on the importance of circular logic. The words flow easily, but the substance of the content still remains elusive.',
  context: 'You spend the entire day writing a 42-page report on the importance of circular logic in the workplace. Just as you finish, your supervisor informs you that the report is now obsolete and needs to be rewritten from scratch.',
  choices: [
    { text: 'Start over', target: 'report-writing-guru', actions: ['decreaseWisdom'] },
    { text: 'Question your life choices', target: 'existential-crisis', actions: ['increaseFutility'] },
    { text: 'Go to the Ministry garden to contemplate', target: 'ministry-garden', actions: ['increaseWisdom'] },
  ]
};
