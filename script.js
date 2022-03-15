let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a new target number:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

function getGuess(guess, number) {
  return Math.abs(guess - number);
}

//Guesses which guess is closer to the target
const compareGuesses = (human, computer, target) => {
  if (getGuess(human, target) <= getGuess(computer, target)) {
    return true;
  } else if (getGuess(target, human) > getGuess(target, computer)) {
    return false;
  }
};

//Adds the score
const updateScore = (winner) => {
  if (winner === "human") {
    console.log(humanScore++);
  } else if (winner === "computer") {
    console.log(computerScore++);
  }
};

//Determines the current round number
const advanceRound = () => {
  currentRoundNumber = currentRoundNumber++;
};
