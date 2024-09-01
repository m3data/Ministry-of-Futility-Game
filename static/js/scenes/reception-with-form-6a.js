window.sceneContent = {
  title: 'The receptionist\'s response (again)',
  location: 'Ministry Reception',
  sceneDescription: 'You return to the reception desk with Form 27B/6A in triplicate, hoping you\'ve finally completed the task correctly.',
  context: 'The receptionist looks at your forms and nods approvingly. "Finally, you\'ve got it right. Now, you just need to get it stamped by the Deputy Vice Chair of the Committee of Workplace Relations. They\'re in the basement, down the hall, through the door marked \'Authorised Personnel Only.\' Good luck."',
  choices: [
    { text: 'Head to the basement to find the Deputy Vice Chair', target: 'basement', actions: ['increaseWisdom'] },
    { text: 'Give up now', target: 'null', actions: ['quitGame'] },
  ]
};
