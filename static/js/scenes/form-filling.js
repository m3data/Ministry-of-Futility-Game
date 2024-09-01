window.sceneContent = {
  title: 'The dreaded Form 27B/6',
  location: 'Ministry Reception',
  sceneDescription: 'You sit down at a small table and begin filling out Form 27B/6. A maze of checkboxes and obscure questions that seem to have no relevance to your job. The instructions are written in a tiny font at the bottom of the page.',
  context: 'You spend what feels like hours filling out Form 27B/6. Just as you finish the third copy, you realise you\'ve been using the wrong color ink, which is pretty darn annoying because it only states this instruction at the end of the form.',
  choices: [
    { text: 'Start over', target: 'form-filling-again', actions: ['increaseFutility'] },
    { text: 'Ask for help', target: 'help-request', actions: ['increaseWisdom', 'decreaseFutility'] },
    { text: 'Give up and explore on your own', target: 'lobby', actions: ['increaseFutility', 'increaseWisdom'] },
  ]
};
