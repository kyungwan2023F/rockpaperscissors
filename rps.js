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
        resultDisplay.textContent = "Tie!";
    }
    else {
        if (lowerCaseInput === "rock" && computerChoice === "scissors") {
            humanScore++;
            resultDisplay.textContent = "You Win!";
        }
        if (lowerCaseInput === "paper" && computerChoice === "rock") {
            humanScore++;
            resultDisplay.textContent = "You Win!";
        }
        if (lowerCaseInput === "scissors" && computerChoice === "paper") {
            humanScore++;
            resultDisplay.textContent = "You Win!";
        }
        if (lowerCaseInput === "rock" && computerChoice === "paper") {
            computerScore++;
            resultDisplay.textContent = "You Lose!";
        }
        if (lowerCaseInput === "paper" && computerChoice === "scissors") {
            computerScore++;
            resultDisplay.textContent = "You Lose!";
        }
        if (lowerCaseInput === "scissors" && computerChoice === "rock") {
            computerScore++;
            resultDisplay.textContent = "You Lose!";
        }
    }
    scoreBoard.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore;
    if (humanScore === 5) {
        matchWinner.textContent = "You Win the Game!";
    }
    else if (computerScore === 5) {
        matchWinner.textContent = "You Lost the Game!";
    }
    if (matchWinner.textContent) {
        document.body.appendChild(matchWinner);
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
let humanScore = 0;
let computerScore = 0;
const scoreBoard = document.createElement("div");
document.body.appendChild(scoreBoard);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", function() {
    playSingleRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
    playSingleRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function() {
    playSingleRound("scissors", getComputerChoice());
});

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const resultDisplay = document.createElement("div");
document.body.appendChild(resultDisplay);

const matchWinner = document.createElement("div");



