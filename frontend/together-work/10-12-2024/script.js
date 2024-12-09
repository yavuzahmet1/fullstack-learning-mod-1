const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const showPicture = document.querySelector(".show");

function playGame(playerChoice) {

    const computerChoise = choices[Math.floor(Math.random() * 3)];
    console.log(playerChoice);
    console.log(computerChoise);
    let result = "";

    if (playerChoice === computerChoise) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoise === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoise === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoise === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoise}`;
    resultDisplay.textContent = `RESULT : ${result}`;
}

playGame();

let counter = 0;

const interval1 = setInterval(() => {
    let rnd = choices[Math.floor(Math.random() * 3)];

    showPicture.innerHTML = `<img class="showScreen" src=./img/${rnd}.jpg>`

    if (counter === 7) clearInterval(interval1);

}, 50);