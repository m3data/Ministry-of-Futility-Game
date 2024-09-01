window.sceneContent = {
  title: 'The lobby of the Ministry of Futility',
  location: 'Ministry Lobby',
  sceneDescription: 'You now stand in the lobby, surrounded by the oppressive atmosphere of bureaucracy. The reception desk is ahead, and corridors lead off in different directions.',
  context: 'You slowly move toward the bored-looking receptionist that is sitting behind a desk, barely acknowledging your presence. There are three corridors leading off in different directions, each labeled with a sign.',
  choices: [
    { text: 'Approach the receptionist', target: 'reception', actions: [] },
    { text: 'Take the corridor labeled Department of Circular Logic', target: 'circular-logic', actions: ['increaseWisdom'] },
    { text: 'Take the corridor labeled Bureau of Counterproductive Measures', target: 'counterproductive-measures', actions: ['increaseFutility'] },
    { text: 'Take the corridor labeled Office of Redundant Redundancies', target: 'redundant-redundancies', actions: ['increaseWisdom'] },
  ]
};
