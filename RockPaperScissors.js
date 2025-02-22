

const choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    PlayerDisplay.textContent = `PLAYER: ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    ResultDisplay.textContent = result;

    ResultDisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "YOU WIN!":
            ResultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            ResultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;  
    }

    if(playerScore === 5){
        ResultDisplay.textContent = "YOU ARE THE WINNER!";
    }

    else if(computerScore === 5){
        ResultDisplay.textContent = "YOU ARE SUCH A LOSER!";
    }

} 

function reset(){
     playerScore = 0;
     computerScore = 0;
    
     playerScoreDisplay.textContent = playerScore;
     computerScoreDisplay.textContent = computerScore;
}