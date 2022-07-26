let playerWins = 0;
let computerWins = 0;
const options = ["rock", "paper", "scissors"];
var rounds = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getUserChoice() {
  let input = prompt("Rock, Paper, or Scissors?");
  while (input == null) {
    input = prompt("Please enter Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type rock, paper, or scissors. spelling is important but capitalization is not important."
    );
    while (input == null) {
      input = prompt("Please enter Rock, Paper, or Scissors2");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function validateInput(choice) {
  return options.includes(choice);
}

function playRound() {
  const computerSelection = getComputerChoice()
  const userChoice = getUserChoice();
  if (userChoice == computerSelection) {
    return "Tie"
  }
  else if (
    (userChoice == "rock" && computerSelection == "scissors") ||
    (userChoice == "scissors" && computerSelection == "paper") ||
    (userChoice =="paper" && computerSelection=="rock")
  ) {
    return "win";
  }
  else {
    return "lost";
  }
}

function game() {
  var keepGoing = true;
  var result;
  while (keepGoing) {
    console.log("round: " + (rounds + 1));
    result = playRound();
    console.log(result);

    if (result == "win") {
      rounds++;
      playerWins++;
    } else if (result == "lost") {
      rounds++;
      computerWins++;
    } else if (result == "tie") {
      rounds++;
    }
    if (rounds == 5) {
      keepGoing = false;
    }
    console.log("Player rounds won: " + playerWins);
    console.log("Computer rounds won: " + computerWins);
  }
  if (playerWins > computerWins) {
    console.log("You won the game");
  } else if (computerWins > playerWins) {
    console.log("better luck next time");
  } else {
    console.log("Tie Game");
  }
  console.log("Player rounds won: " + playerWins);
  console.log("Computer rounds won: " + computerWins);
}

game();
