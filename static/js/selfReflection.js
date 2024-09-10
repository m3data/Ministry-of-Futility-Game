// Ministry of Futility
// Copyright (C) 2024 Mathew Mytka - m3metix
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 // This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 // You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
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