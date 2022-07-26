
//global variables
let playerWins = 0;
let computerWins = 0;
const options = ["rock", "paper", "scissors"];
var rounds = 0;

//randomly returns element of options array
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

//takes in user input, also handles null and incorrect values
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

//validates user input, taking in input and returning true if options contains input, false if not
function validateInput(choice) {
  return options.includes(choice);
}

//plays one round, returning tie, win, or loss based on evaluation
function playRound() {
  const computerSelection = getComputerChoice()
  const userChoice = getUserChoice();
  if (userChoice == computerSelection) {
    return "tie"
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

//runs 5 instances of playRound
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
