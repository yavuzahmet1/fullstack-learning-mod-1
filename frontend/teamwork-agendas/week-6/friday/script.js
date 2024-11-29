let game = {
    minNum: 1,
    maxNum: 100,
    count: 1,
    secret: Math.floor(Math.random() * 100 + 1),
    guessE: document.getElementById("guess"),
    reset: document.getElementById("reset"),
    resultE: document.getElementById("result"),
    sendE: document.getElementById("send")
};

function update(message, color = "black", fontSize = "35px") {
    game.resultE.style.color = color;
    game.resultE.style.fontSize = fontSize;
    game.resultE.innerHTML = message;
}

game.sendE.onclick = function () {
    let n = parseInt(game.guessE.value);

    if (isNaN(n) || n > 100 || n < 1) {
        update("please, enter a valid number", "white", "35px")
        return;
    }
    if (game.count === 10) {
        update(`OOPS! The correct answer was ${game.secret}`, "brown", "35px")
    }

    if (n === game.secret) {
        update(`CONGRATS! successfully guessed answerd in ${game.count} tries`, "gold", "35px");
        return;
    }
    else if (n > game.secret) {
        game.maxNum = n
        update(`Guess a smaller number from ${game.minNum} to ${game.maxNum}. You habve`);
        count++;
    }
}