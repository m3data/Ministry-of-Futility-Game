import re
import json

def escape_quotes(text):
    return text.replace("'", "\\'").replace('"', "'")

def parse_plot_md(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    scene_blocks = re.split(r'^##\s+', content, flags=re.MULTILINE)[1:]

    scenes = []
    for block in scene_blocks:
        lines = block.strip().split('\n')
        scene_id = lines[0].strip().lower().replace(' ', '-')
        scene_data = {
            "id": scene_id,
            "title": "",
            "location": "",
            "sceneDescription": "",
            "context": "",
            "choices": []
        }

        current_section = None
        for line in lines[1:]:
            if line.startswith('title:'):
                scene_data['title'] = escape_quotes(line.split(';')[1].strip())
            elif line.startswith('location:'):
                scene_data['location'] = escape_quotes(line.split(';')[1].strip())
            elif line.startswith('scene description:'):
                scene_data['sceneDescription'] = escape_quotes(line.split(';')[1].strip())
            elif line.startswith('context:'):
                scene_data['context'] = escape_quotes(line.split(';')[1].strip())
            elif line.startswith('Choices:'):
                current_section = 'choices'
            elif current_section == 'choices' and line.strip().startswith('-'):
                choice_parts = line.strip()[1:].split(':', 1)
                if len(choice_parts) < 2:
                    print(f"Warning: Malformed choice in scene {scene_id}: {line}")
                    continue
                
                choice_text = escape_quotes(choice_parts[0].strip())
                target_and_actions = choice_parts[1].strip().split(';')
                target = target_and_actions[0].strip()
                actions = [action.strip() for action in target_and_actions[1].split(',')] if len(target_and_actions) > 1 else []
                
                choice_data = {
                    "text": choice_text,
                    "target": target.lower().replace(' ', '-') if target != "None" else "quit-game",
                    "requiredAttributes": [
                        {"name": "wisdom", "value": 0},
                        {"name": "creativity", "value": 0},
                        {"name": "gullibility", "value": 0},
                        {"name": "compliance", "value": 0}
                    ],
                    "attributeChanges": [
                        {"name": "wisdom", "amount": 0},
                        {"name": "creativity", "amount": 0},
                        {"name": "gullibility", "amount": 0},
                        {"name": "compliance", "amount": 0}
                    ],
                    "coreMetrics": [
                        {"type": "woo", "value": 0},
                        {"type": "futility", "value": 0}
                    ]
                }

                for action in actions:
                    if action == "increaseWisdom":
                        choice_data["attributeChanges"][0]["amount"] = 1
                    elif action == "decreaseWisdom":
                        choice_data["attributeChanges"][0]["amount"] = -1
                    elif action == "increaseWoo":
                        choice_data["coreMetrics"][0]["value"] = 1
                    elif action == "decreaseWoo":
                        choice_data["coreMetrics"][0]["value"] = -1
                    elif action == "increaseFutility":
                        choice_data["coreMetrics"][1]["value"] = 1
                    elif action == "decreaseFutility":
                        choice_data["coreMetrics"][1]["value"] = -1
                    elif action == "quitGame":
                        choice_data['target'] = "quit-game"

                scene_data['choices'].append(choice_data)

        scenes.append(scene_data)

    return scenes

def convert_to_json(scenes, output_file):
    with open(output_file, 'w') as file:
        json.dump(scenes, file, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    input_file = "Plot.md"
    output_file = "plot.json"
    
    scenes = parse_plot_md(input_file)
    convert_to_json(scenes, output_file)
    print(f"Conversion complete. JSON data written to {output_file}")