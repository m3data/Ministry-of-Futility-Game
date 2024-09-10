// Ministry of Futility
// Copyright (C) 2024 Mathew Mytka - m3metix
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 // This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 // You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
function reviewMemoirs() {
    const reflections = JSON.parse(localStorage.getItem('playerReflections')) || [];
    if (reflections.length > 0) {
        let memoirText = "Your Memoirs:\n\n";
        reflections.forEach((reflection, index) => {
            memoirText += `Reflection ${index + 1}:\n`;
            memoirText += `Question: ${reflection.question}\n`;
            memoirText += `Your Response: ${reflection.answer}\n\n`;
        });
        alert(memoirText);
    } else {
        alert("It seems you haven't reflected on anything yet. How will you write your book?");
    }
}