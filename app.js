console.log("Rock Paper Scissors!");

const getComputerChoice = () => {
  const gameChoices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * gameChoices.length);

  console.log(gameChoices[randomNum]);
};

playerChoice = prompt("Make your choice");
console.log(playerChoice.toLowerCase());

const playRound = (playerChoice, computerChoice) => {
  // playerChoice should be case-sensitive...
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
