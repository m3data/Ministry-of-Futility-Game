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