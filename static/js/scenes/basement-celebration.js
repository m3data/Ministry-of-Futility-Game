window.sceneContent = {
  title: 'The celebration in the basement',
  location: 'Basement',
  sceneDescription: 'You gather your team in the basement to celebrate. The mood is jubilant as you raise a toast to the future of the Ministry. The basement echoes with laughter and the clinking of glasses. Your collegue says, "This is just the beginning. We have the power to bring real change to the Ministry."',
  context: 'The celebration is a moment of triumph in the face of futility. You receive an email from the Committee on Institutional Change congratulating you on your success. Then another moments later saying the project is on hold due to budget constraints but you\'ve been offered a promotion to Minister of Perpetual Planning.',
  choices: [
    { text: 'Reflect on your journey', target: 'memoir-garden-review', actions: ['increaseWisdom'] },
    { text: 'Accept the promotion', target: 'minister-ending', actions: ['decreaseWisdom'] },
  ]
};
