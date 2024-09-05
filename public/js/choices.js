export function renderChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    if (!choicesContainer) {
      console.error("Choices container not found");
      return;
    }
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.addEventListener('click', () => selectChoice(choice));
      choicesContainer.appendChild(button);
    });
  }
  
  function selectChoice(choice) {
    console.log("Choice selected:", choice);
    // Implement choice selection logic here
  }