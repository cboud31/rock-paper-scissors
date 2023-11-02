console.log("Rock Paper Scissors!");

const getComputerChoice = () => {
  const gameChoices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * gameChoices.length);

  return gameChoices[randomNum];
};

let playerInput = prompt("Make your choice");
let computerSelection = getComputerChoice();

const playRound = (playerChoice, computerChoice) => {
  let result = null;
  let playerInput =
    playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
  console.log("CPU picks: " + computerChoice);
  // Return early if no propmet is given?

  if (playerInput === "Rock") {
    console.log(`You chose ${playerInput}`);
  } else if (playerInput === "Paper") {
    console.log(`You chose ${playerInput}`);
  } else if (playerInput === "Scissors") {
    console.log(`You chose ${playerInput}`);
  }
  // else invalid selecton?

  /****/
  // player = 'rock' && computer = 'paper'        --> You lose
  // player = 'rock' && computer = 'scissors'     --> You win
  // player = 'rock' && computer = 'rock'         --> It's a tie
  /****/
  // player = 'paper' && computer = 'paper'       --> It's a tie
  // player = 'paper' && computer = 'scissors'    --> You lose
  // player = 'paper' && computer = 'rock'        --> You win
  /****/
  // player = 'scissors' && computer = 'paper'    --> You win
  // player = 'scissors' && computer = 'scissors' --> It's a tie
  // player = 'scissors' && computer = 'rock'     --> You lose
};

playRound(playerInput, computerSelection);
