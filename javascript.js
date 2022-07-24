function getComputerChoice() {
   const computerOptions = ['Rock', 'Paper', 'Scissors'];
   return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "you win, opponent chose scissors";
    }
    else if (computerSelection == "paper") {
      return "you lost, opponent chose paper";
    } else {
      return "tie";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return "you win, opponent chose paper";
    } else if (computerSelection == "rock") {
      return "you lost, opponent chose rock";
    } else {
      return "tie";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "you win, opponent chose rock";
    } else if (computerSelection == "scissors") {
      return "you lost, opponent chose scissors";
    } else {
      return "tie";
    }
  }
}

function game() {
   
}

const computerSelection = getComputerChoice().toLowerCase()
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(playRound(computerSelection, playerSelection));