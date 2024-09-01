function selfReflection() {
    const questions = [
        "How do you think your recent choices have shaped your journey?",
        "What challenges have you overcome?",
        "What wisdom have you gained from your actions?",
        "Do you see patterns in the futility you encounter?",
        "How do you feel about your progress so far?"
    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const reflection = prompt(randomQuestion);

    if (reflection) {
        alert("Your reflection has been noted. It may help you on your journey.");
        window.state.increaseWisdom(5); // Reward for reflection

        // Store the reflection in local storage
        let reflections = JSON.parse(localStorage.getItem('playerReflections')) || [];
        reflections.push({ question: randomQuestion, answer: reflection });
        localStorage.setItem('playerReflections', JSON.stringify(reflections));
    } else {
        alert("It's important to reflect on your actions. Try again next time.");
    }
}