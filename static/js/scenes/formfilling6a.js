window.sceneContent = {
  title: 'The dreaded Form 27B/6A',
  location: 'Ministry Reception',
  sceneDescription: 'You sit down at a small table and begin filling out Form 27B/6A. The questions are even more obscure than the previous form, and the instructions are written in an even smaller font.',
  context: 'You start over with Form 27B/6A, the new and improved version. This time, you make sure to use the correct color ink and fill out all three copies with precision. You get it stamped by the Department of Human Resourcing Resources, countersigned by the Vice Deputy Assistant to the Assistant Deputy Vice Minister, and then bring it back to the receptionist.',
  choices: [
    { text: 'Return to the reception desk', target: 'receptionwithform6a', actions: ['increaseWisdom'] },
    { text: 'Rip up the form and leave', target: 'None', actions: ['quitGame'] },
  ]
};
