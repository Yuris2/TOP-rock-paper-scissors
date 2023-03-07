let playerChoice;

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

const choose = (playerInput) => {
  playerChoice = playerInput;
}

const runGame = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "Draw"
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
    return "Win! "+playerSelection+" beats "+computerSelection+ "!"
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
    return "Loss... "+computerSelection+" beats "+playerSelection+ "!"
  }
}


const game = () => {
  let player = 0
  let computer = 0
  while (true) {
    let currentMatch = runGame(playerChoice, getComputerChoice())
   if (currentMatch.includes("Win")) {
      player ++
    } else if (currentMatch.includes("Loss")) {
      computer ++
    }
    /*if (player == 5) {
      return "Player Wins!"
      break
  } else if (computer == 5) {
      return "Computer Wins!"
      break 
  } */
}

}

console.log(game())