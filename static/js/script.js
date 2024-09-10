// Ministry of Futility
// Copyright (C) 2024 Mathew Mytka - m3metix
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 // This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 // You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
 
(function () {
    // Game state
    let futilityLevel = 0;
    const maxFutility = 100;
    let butterflyEffectTriggered = false;
    let wisdomLevel = 0;
    const maxWisdom = 100;
    let wooLevel = 0;
    const maxWoo = 100;
    let scenesVisited = 0;

    // Simple state management
    window.state = {
        go: function(sceneName) {
            if (futilityLevel >= maxFutility) {
                this.gameOver();  // Trigger game over if futility is full
            } else {
                loadScene(sceneName);
                attachEventListeners();
            }
        },
        increaseWisdom: function(amount) {
            wisdomLevel += amount;
            if (wisdomLevel > maxWisdom) wisdomLevel = maxWisdom;
            updateWisdomMeter();
        },
        increaseWoo: function(amount) {
            wooLevel += amount;
            if (wooLevel > maxWoo) wooLevel = maxWoo;
            updateWooMeter();  // Update the Woo meter UI
        },
        increaseFutility: function(amount) {
            futilityLevel += amount;
            if (futilityLevel > maxFutility) futilityLevel = maxFutility;
            updateFutilityMeter();  // Update the UI
        },
        gameOver: function() {
            loadScene('futile-ending');  // Load the Futile Ending scene
    
            // Attach event listener to restart button based on text content
            setTimeout(() => {
                const buttons = document.querySelectorAll('button');
                buttons.forEach(button => {
                    if (button.textContent.trim().toLowerCase() === 'play again?') {
                        button.addEventListener('click', () => {
                            this.resetGame();
                            this.go('start');  // Restart at the starting scene
                        });
                    }
                });
            }, 100); // Slight delay to ensure the scene is fully loaded
        },
        resetGame: function() {
            futilityLevel = 0;
            wisdomLevel = 0;
            wooLevel = 0;  // Reset Woo meter
            scenesVisited = 0;  // Reset the scenes visited counter
            updateFutilityMeter();
            updateWisdomMeter();
            updateWooMeter();
        }
    };

    // Glitch transition function
    function triggerGlitchTransition(callback) {
        const glitchOverlay = document.getElementById('glitch-overlay');
        glitchOverlay.classList.remove('hidden');
        glitchOverlay.classList.add('glitch-active');

        setTimeout(() => {
            glitchOverlay.classList.remove('glitch-active');
            glitchOverlay.classList.add('hidden');
            callback(); // Proceed with the scene transition
        }, 400); // Duration of the glitch effect
    }

    // Update the futility meter
    function updateFutilityMeter() {
        document.getElementById('futility-meter').style.width = `${futilityLevel}%`;
    }

    // Update the wisdom meter
    function updateWisdomMeter() {
        document.getElementById('wisdom-meter').style.width = `${wisdomLevel}%`;
    }

    // Update the Woo meter
    function updateWooMeter() {
        document.getElementById('woo-meter').style.width = `${wooLevel}%`;
    }
    
    // Template function to generate HTML for each scene
    function generateSceneHTML(title, context, choices, location, sceneDescription) {
        let html = `<h2 id="location-title">${location}</h2>`;
        html += `<p id="scene-description" class="scene-description">${sceneDescription}</p>`;
        html += `<h2>${title}</h2>`;
        html += `<p>${context}</p>`;
        html += `<div class="choices">`;
        choices.forEach(choice => {
            html += `<button class="fade-in" data-actions='${JSON.stringify(choice.actions)}' data-target="${choice.target}">${choice.text}</button>`;
        });
        html += `</div>`;
        return html;
    }

// The loadScene function is responsible for loading the scene script and updating the UI
function loadScene(sceneName) {
    console.log("Loading scene:", sceneName);

    // Load the scene script
    const sceneScript = document.createElement('script');
    sceneScript.src = `static/js/scenes/${sceneName.toLowerCase().replace(/\s+/g, '-')}.js`;
    sceneScript.onload = () => {
        console.log("Scene loaded:", sceneName);

        if (window.sceneContent) {
            const { title, context, choices, location, sceneDescription } = window.sceneContent;
            // Display only the scene description initially
            const sceneHTML = `
            <h2 id="location-title">${location}</h2>
            <p id="scene-description" class="scene-description">${sceneDescription}</p>
            <button id="next-button" class="fade-in">Next</button>
            `;
            document.getElementById('story').innerHTML = sceneHTML;

            // Attach event listener to the Next button
            document.getElementById('next-button').addEventListener('click', () => {
            displayStoryContent(title, context, choices);
            });

            window.sceneContent = null;
            scenesVisited += 1;
            if (scenesVisited % 13 === 0) {
            selfReflection();
            }
        }
    };
    document.head.appendChild(sceneScript);
}
function displayStoryContent(title, context, choices) {
  const storyHTML = `
    <h2>${title}</h2>
    <p>${context}</p>
    <div class="choices">
      ${choices.map(choice => `
        <button class="fade-in" data-actions='${JSON.stringify(choice.actions)}' data-target="${choice.target}">
          ${choice.text}
        </button>
      `).join('')}
    </div>
  `;
  document.getElementById('story').innerHTML = storyHTML;
  attachEventListeners();
}
    // Handle button clicks
    function handleButtonClick(actions, target) {
        console.log('Button clicked:', actions, target); // Debugging line
        
        // Execute each action in the list of actions
        if (Array.isArray(actions)) {
            // Separate quitGame logic to avoid interference
            if (actions.includes('quitGame')) {
                // Set futility level to max and force UI update
                futilityLevel = maxFutility;
                updateFutilityMeter();  // Ensure UI reflects the max futility level
                
                // Add a short delay to ensure the meter visually updates before transitioning to game over
                setTimeout(() => window.state.gameOver(), 500);  // Trigger game over after a short delay
                return;  // Exit early to avoid further processing
            }
            
            actions.forEach(act => {
                if (act === 'resetGame') {
                    window.state.resetGame();  // Call state function to reset the game
                } else
                if (act === 'increaseFutility') {
                    window.state.increaseFutility(2);  // Call state function to update futility
                } else if (act === 'decreaseFutility') {
                    window.state.increaseFutility(-1); // Call state function to decrease futility
                } else if (act === 'increaseWisdom') {
                    window.state.increaseWisdom(2); // Call state function to update wisdom
                } else if (act === 'decreaseWisdom') {
                    window.state.increaseWisdom(-2); // Call state function to decrease wisdom
                } else if (act === 'increaseWoo') {
                    window.state.increaseWoo(2); // Call state function to increase Woo
                } else if (act === 'decreaseWoo') {
                    window.state.increaseWoo(-2); // Call state function to decrease Woo
                } else if (act === 'reviewMemoirs') {
                    reviewMemoirs();  // Triggers the review of self-reflections as memoirs
                } else {
                    console.log('Unhandled action:', act);
                }
            });
        }

        // Trigger the butterfly effect after a player makes a choice
        butterflyEffect();
    
        // Then, navigate to the target scene
        if (target) {
            window.state.go(target);
        } else {
            console.log('No target defined for this button.');
        }
    }

    // Attach event listeners to buttons
    function attachEventListeners() {
        console.log("Attaching event listeners"); // Debugging line
        document.querySelectorAll('button[data-target]').forEach(button => {
            const actions = JSON.parse(button.getAttribute('data-actions')); // Parse actions as an array
            const target = button.getAttribute('data-target');
            console.log("Button actions:", actions);  // Log button actions
            console.log("Button target:", target);  // Log button targets
            button.addEventListener('click', function() {
                handleButtonClick(actions, target);
            });
        });
    }

    // Initialize the game
    function initGame() {
        window.state.go("start"); // Start the game with the Start scene
    }

    // Run initialization when the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGame);
    } else {
        initGame();
    }
})();