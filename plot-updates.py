# Ministry of Futility
# Copyright (C) 2024 Mathew Mytka - m3metix
# This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 # This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 # You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.

import os
import re

# Directory to save generated JS files
output_dir = "static/js/scenes/"

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Regular expressions to match scenes, titles, context, and choices
scene_re = re.compile(r"^##\s+(.+)$")
title_re = re.compile(r"^title:\s+;(.*);$")
location_re = re.compile(r"^location:\s+;(.*);$")
scene_description_re = re.compile(r"^scene description:\s+;(.*);$")
context_re = re.compile(r"^context:\s+;(.*);$")
choice_re = re.compile(r"-\s+(.*):\s+(.*?)(?:;\s*(.*))?$")

# Initialize variables
current_scene = None
scenes = {}
in_plot_section = False  # Track if we're inside the PLOT_START/PLOT_END section

def normalize_scene_name(scene_name):
    # Lowercase all words and join them with hyphens
    words = scene_name.split()
    normalized_name = '-'.join(word.lower() for word in words)
    return normalized_name

def escape_quotes(text):
    # Escape single quotes for JavaScript
    return text.replace("'", "\\'")

# Read the Plot.md file
with open("Plot.md", "r") as file:
    for i, line in enumerate(file, start=1):
        # Check for PLOT_START and PLOT_END markers
        if line.strip() == "# PLOT_START":
            in_plot_section = True
            continue
        elif line.strip() == "# PLOT_END":
            in_plot_section = False
            continue

        # Only process lines within the PLOT_START/PLOT_END section
        if in_plot_section:
            try:
                # Match a scene
                match = scene_re.match(line)
                if match:
                    current_scene = normalize_scene_name(escape_quotes(match.group(1).strip()))
                    scenes[current_scene] = {
                        "title": "",
                        "location": "",
                        "sceneDescription": "",
                        "context": "",
                        "choices": []
                    }
                    continue

                # Match a title
                match = title_re.match(line)
                if match and current_scene:
                    scenes[current_scene]["title"] = escape_quotes(match.group(1).strip())
                    continue

                # Match a location
                match = location_re.match(line)
                if match and current_scene:
                    scenes[current_scene]["location"] = escape_quotes(match.group(1).strip())
                    continue

                # Match a scene description
                match = scene_description_re.match(line)
                if match and current_scene:
                    scenes[current_scene]["sceneDescription"] = escape_quotes(match.group(1).strip())
                    continue

                # Match a context
                match = context_re.match(line)
                if match and current_scene:
                    scenes[current_scene]["context"] = escape_quotes(match.group(1).strip())
                    continue

                # Match a choice with an optional action
                match = choice_re.match(line)
                if match and current_scene:
                    choice_text = escape_quotes(match.group(1).strip())
                    choice_target = 'null' if match.group(2).strip().lower() == 'none' else normalize_scene_name(match.group(2).strip())
                    choice_actions = [act.strip() for act in match.group(3).split(',')] if match.group(3) else []
                    scenes[current_scene]["choices"].append({
                        "text": choice_text,
                        "target": choice_target,
                        "actions": choice_actions
                    })

            except ValueError as ve:
                print(f"Error processing line {i}: {line.strip()}")
                print(f"ValueError: {ve}")
                raise
            except Exception as e:
                print(f"Unexpected error processing line {i}: {line.strip()}")
                print(f"Exception: {e}")
                raise

# Generate JS files
for scene, data in scenes.items():
    js_file_path = os.path.join(output_dir, f"{normalize_scene_name(scene)}.js")
    existing_code = ""
    
    # Read existing file to preserve custom code
    if os.path.exists(js_file_path):
        with open(js_file_path, "r") as js_file:
            inside_scene_content = False
            for line in js_file:
                if "window.sceneContent" in line:
                    inside_scene_content = True
                if inside_scene_content and line.strip() == "`;":
                    inside_scene_content = False
                    continue
                if not inside_scene_content:
                    existing_code += line
    
    # Prepare new scene content
    js_content = f"window.sceneContent = {{\n"
    js_content += f"  title: '{data['title']}',\n"
    js_content += f"  location: '{data['location']}',\n"
    js_content += f"  sceneDescription: '{data['sceneDescription']}',\n"
    js_content += f"  context: '{data['context']}',\n"
    js_content += f"  choices: [\n"
    for choice in data["choices"]:
        actions = ', '.join([f"'{act}'" for act in choice["actions"]])
        js_content += f"    {{ text: '{choice['text']}', target: '{choice['target']}', actions: [{actions}] }},\n"
    js_content += f"  ]\n"
    js_content += f"}};\n"
    
    # Write the new content plus the preserved code
    with open(js_file_path, "w") as js_file:
        js_file.write(js_content + existing_code)

print("Scene files updated successfully.")