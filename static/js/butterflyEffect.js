// Ministry of Futility
// Copyright (C) 2024 Mathew Mytka - m3metix
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 // This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 // You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.

function butterflyEffect() {
    const chance = Math.random();
    if (chance < 0.01) { // 1% chance to trigger the effect
        triggerUnexpectedOutcome();
    }
}

function triggerUnexpectedOutcome() {
    alert("A small action you have taken has led to a surprising consequence! Keep playing to see how it unfolds.");
    
    // Example: Increase wisdom as an unexpected outcome
    window.state.increaseWisdom(5);
    
    // You could also navigate to a different scene, increase futility, or trigger any other effect.
    // window.state.go('UnexpectedScene');
}