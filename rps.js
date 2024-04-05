function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return "Rock";
    }
    else if (randNum === 1) {
        return "Paper";
    }
    return "Scissors";
}

function playSingleRound(playerSelection, computerSelection) {
    let lowerCaseInput = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (lowerCaseInput === computerChoice) {
        return "Tie!"
    }
    else {
        if (lowerCaseInput === "rock" && computerChoice === "scissors") {
            return "You Win!";
        }
        if (lowerCaseInput === "paper" && computerChoice === "rock") {
            return "You Win!";
        }
        if (lowerCaseInput === "scissors" && computerChoice === "paper") {
            return "You Win!";
        }
        if (lowerCaseInput === "rock" && computerChoice === "paper") {
            return "You Lose!";
        }
        if (lowerCaseInput === "paper" && computerChoice === "scissors") {
            return "You Lose!";
        }
        if (lowerCaseInput === "scissors" && computerChoice === "rock") {
            return "You Lose!";
        }
    }
}

function playGame() {
    let currentResult = "Tie!";
    while (currentResult === "Tie!") {
        let userInput = prompt("Enter your choice: ");
        userInput = userInput ? userInput.toLowerCase() : ""; 
        if (["rock", "paper", "scissors"].includes(userInput)) {
            currentResult = playSingleRound(userInput, getComputerChoice());
            console.log(currentResult);
        }
        else {
            console.log("Invalid Input. Enter again.");
        }
    }
}
playGame();
