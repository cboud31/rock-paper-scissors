const getComputerChoice = () => {
  const gameChoices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * gameChoices.length);

  return gameChoices[randomNum];
};

const playRound = (playerChoice, computerChoice) => {
  let result = null;
  let playerInput =
    playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
  // Return early if no prompt is given?

  if (
    (playerInput === "Rock" && computerChoice === "Scissors") ||
    (playerInput === "Paper" && computerChoice === "Rock") ||
    (playerInput === "Scissors" && computerChoice === "Paper")
  ) {
    result = `You win! ${playerInput} beats ${computerChoice}`;
  } else if (
    (playerInput === "Rock" && computerChoice === "Paper") ||
    (playerInput === "Scissors" && computerChoice === "Rock") ||
    (playerInput === "Paper" && computerChoice === "Scissors")
  ) {
    result = `You lose! ${playerInput} beat by ${computerChoice}.`;
  } else if (playerInput === computerChoice) {
    result = `It's a tie!`;
  }
  return result;
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 6; i++) {
    let playerInput = prompt("Make your choice");
    let computerSelection = getComputerChoice();

    const result = playRound(playerInput, computerSelection);
    console.log(result);

    if (result.includes(`You win!`)) {
      playerScore++;
    } else if (result.includes(`You lose!`)) {
      computerScore++;
    }
  }

  console.log(`Final score is ${playerScore}-${computerScore}`);
};

game();
