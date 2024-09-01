window.sceneContent = {
  title: 'Reviving Meaningful Change',
  location: 'Office of Perpetual Planning',
  sceneDescription: 'You decide to revive the Project: Meaningful Change initiative, inspired by the contents of the folder you found in the basement. You gather a small team of like-minded individuals you met in the basement and begin working on the project in secret and crafting an on point proposal for meaningful change. The clerks are too busy with their futile perpetual planning operations to notice your efforts.',
  context: 'You have created a proposal for meaningful change that could transform the Ministry. The time has come to decide how to proceed.',
  choices: [
    { text: 'Take the proposal to the Committee on Institutional Change', target: 'committee-on-change', actions: ['decreaseWisdom'] },
    { text: 'Keep working in secret', target: 'underground-success', actions: ['increaseFutility', 'increaseWisdom'] },
  ]
};
