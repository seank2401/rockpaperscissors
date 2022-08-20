//global variables for computer options and rounds won
const options = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

//selectors
const modal = document.getElementById("modalContainer");
const overlay = document.getElementById("overlay");
const displayRoundResult = document.querySelector("#roundResult");
const button = document.querySelectorAll(".playbtn");
const closeModalButton = document.querySelector("[data-close-button]");
const updatePlayerWins = document.querySelector("#playerScore");
const updateComputerWins = document.querySelector("#computerScore");
const modalUpdate = document.querySelector(".modal");

//modal listeners
closeModalButton.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", resetGame);

//iterates through array-like list of buttons and calls playround function on button click
button.forEach((e) =>
  e.addEventListener("click", (event) =>
    playRound(event.currentTarget.id, getComputerChoice())
  )
);

//FUNCTIONS

//takes in clicked div id and random computer input
//displays round result and increments round win totals
function playRound(userChoice, computerSelection) {
  if (userChoice == computerSelection) {
    displayRoundResult.innerHTML = "Tie!";
  } else if (
    (userChoice == "rock" && computerSelection == "scissors") ||
    (userChoice == "scissors" && computerSelection == "paper") ||
    (userChoice == "paper" && computerSelection == "rock")
  ) {
    playerWins++;
    updatePlayerWins.innerHTML = "Player Score: " + playerWins;
    displayRoundResult.innerHTML = "Round Won!";
  } else {
    computerWins++;
    updateComputerWins.innerHTML = "Computer Score: " + computerWins;
    displayRoundResult.innerHTML = "Round Lost!";
  }
  checkGame();
}

function checkGame() {
  if (playerWins == 5 || computerWins == 5) {
    displayRoundResult.innerHTML = "Game Over";
    displayWinnerInModal();
    openModal();
  }
}

function displayWinnerInModal() {
  playerWins > computerWins
    ? (modalUpdate.innerHTML = "You Won!")
    : (modalUpdate.innerHTML = "You Lost!");
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  displayRoundResult.innerHTML = "Game Reset";
  updateComputerWins.innerHTML = "Computer Score: ";
  updatePlayerWins.innerHTML = "Player Score: ";
}

//randomly returns element of options array
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}
