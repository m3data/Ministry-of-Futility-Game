# Ministry of Futility

## Overview

The **Ministry of Futility** is a text-based adventure game that immerses players in a world of inefficiency and pointless bureaucracy. The game is built using Twine-like functionality but with custom HTML, JavaScript, and CSS. The narrative unfolds as players make decisions and navigate through various departments within the Ministry, each scene pushing the boundaries of absurdity.

### Background and Inspiration
After listening to a brilliant podcast episode on [Future Fossils](https://open.spotify.com/episode/55Wv7k25fFErdpjt04JZ2G?si=6448923c29544e13) and pondering the nature of bureaucracy, I was inspired to create a game that explores the absurdity of modern institutions. The Ministry of Futility is a reflection of the Kafkaesque nightmare that many people face when dealing with complex systems and processes. By engaging with the game, players can experience the frustration and futility of navigating a bureaucratic maze, all while enjoying a darkly humorous narrative. The game's brutalist design and minimalist aesthetic is meant to further enhance the sense of alienation and absurdity that permeates the experience. Monty Python, Terry Gilliam, Hitchhikers Guide to the Galaxy and Franz Kafka were all sources of inspiration. But even more so the very real experiences of dealing with government agencies and corporate bureaucracies in my life and work.

### Gameplay
Players start the game as a new employee at the Ministry of Futility, tasked with navigating the convoluted bureaucracy and absurd processes of the organisation. As they progress through the game, players will encounter various departments, each with its own unique challenges and obstacles. By making choices and interacting with the narrative, players will uncover the dark secrets of the Ministry, find a way to tap into the Woo and ultimately decide the fate of the organisation.

### Design and Development
This game is in a pre-alpha stage of development and needs lots of playtesting to reveal bugs and get suggestions for feature improvements. The game is built using HTML, CSS, and JavaScript, with a focus on creating an interactive narrative experience. The game uses a modular structure to load scenes dynamically, allowing for easy expansion and modification of the narrative. The brutalist design of the game reflects the themes of the narrative, with stark, minimalist visuals and a focus on text-based interactions.

### Future Development
The Ministry of Futility is an ongoing project. There's some plans to expand the narrative, add new mechanics, new scenes and choices, and improve the overall gameplay experience. Future updates will include more departments to explore, additional NPCs to interact with, and a deeper dive into the mysteries of the Ministry. The game will also be optimised for mobile devices and potentially other platforms, making it accessible to a wider audience. The goal is to create a compelling and engaging experience that challenges players to think critically about bureaucracy, inefficiency, and the nature of power and control.

### Key Features

- **Interactive Narrative**: Players engage with the story by making choices that lead to different outcomes.
- **Dynamic Scene Loading**: Scenes are dynamically loaded using JavaScript, enabling a modular and scalable game structure.
- **Custom Styling**: The game uses a unique brutalist design to reflect the themes of the narrative.

## How to Use the `Plot.md` File

The `Plot.md` file serves as the single source of truth for the game’s narrative. Each scene, its title, context, and choices are defined in this markdown file. The content of `Plot.md` is then processed by a Python script to generate corresponding JavaScript files, which are used to display each scene in the game.

### Structure of `Plot.md`

The `Plot.md` file is structured as follows:

- **Scenes**: Defined using `## Scene Name`, where `Scene Name` is the name of the scene.
- **Title**: Each scene has a `title`, which is a brief descriptor of the scene.
- **Location**: The `location` is the fictional location where the scene takes place. Some scenes may not have a location and can represent the player's internal thoughts or actions, or simply be a transition scene.
- **Mood**: The `mood` sets the tone of the scene, such as "Mysterious and Dusty" etc.
- **Context**: The `context` provides the narrative text, including any dialogue or description.
- **Choices**: Each scene offers multiple `choices`, where each choice links to a different `target` scene.
- **Actions**: Optional actions that can be performed in a scene such as `increaseFutility` or `decreaseFutility`. A delimiter `;` is used to separate `actions` from the `target`.

### Structure of scene:
```
## Scene Name
title: ;Scene Title;
location: ;Location in the Ministry;
scene description: ;A scene description;
context: ;Scene context and associated dialogue;

Choices:
- Description of the choice 1: Target Scene of Choice 1; actionOne
- Description of the choice 2: Target Scene of Choice 2; actionOne, actionTwo, actionThree
- Description of the choice 3: Target Scene of Choice 3; actionOne, actionTwo
```

#### Example

```markdown
## Basement Archive
title: ;The secrets of the basement;
location: ;Basement Archive;
mood: ;Mysterious and dusty;
context: ;You venture into the basement, where you discover a hidden archive of forgotten projects and abandoned initiatives. Among the dust and cobwebs, you find a folder labeled "Project: Meaningful Change.";

Choices:
- Investigate the folder: Folder Investigation; increaseWisdom
- Proceed with the workshop: Workshop; increaseWisdom
- Try to find the Deputy Vice Chair of the Committee of Workplace Relations: Find Deputy; increaseFutility
```

### Processing `Plot.md`

After editing the `Plot.md` file, run the provided Python script to generate or update the corresponding JavaScript files:

```bash
python3 plot-updates.py
```

### How It Works

1. **Edit**: Make changes to the story in `Plot.md`. Any new scenes or modifications will be reflected in the generated game.
2. **Generate**: Run the Python script to update the scene files in `static/js/scenes/`.
3. **Test**: Load the game in a browser to see your changes in action.

### Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests. When contributing, please ensure your changes are well documented and tested.

---

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Ministry-of-Futility.git
   cd Ministry-of-Futility
   ```

2. **Install Python Dependencies** (if any):
   ```bash
   pip install -r requirements.txt  # Here if I add dependencies later
   ```

3. **Edit the Plot**:
   - Modify `Plot.md` to update or extend the story.

4. **Generate Scene Files**:
   ```bash
   python3 plot-updates.py
   ```

5. **Run the Game**:
   - Open `index.html` in a web browser to play the game.

---

## License

//TODO: Add license information
