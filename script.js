let computerWins = 0;
let playerWins = 0;

const getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3 + 1)
    if (x == 1 ) {
        return "rock"
    }
    else if (x==2) {
        return "paper"
    }
    else if (x == 3 ){
        return "scissors"
    }
}
const runGame = (playerSelection, computerSelection) => {
  let displayResult = document.getElementById('Result');
  let displayComputer = document.getElementById('Computer');
  let playerComputer = document.getElementById('You');

  
  if (playerSelection.toLowerCase() === computerSelection) {
    displayResult.innerHTML = "Result: Draw";
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
    displayResult.innerHTML = "Result: You Win";
    playerWins++;
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
    displayResult.innerHTML = "Result: You Lose :(";
    computerWins++;
  }

  if(computerWins == 5){
    alert("The Computer Wins. Resetting Game")
    computerWins = 0;
    playerWins = 0;
  } else if (playerWins == 5) {
    alert("You Win. Resetting Game")
    computerWins = 0;
    playerWins = 0;
  }

  displayComputer.innerHTML = computerWins;
  playerComputer.innerHTML = playerWins;
}