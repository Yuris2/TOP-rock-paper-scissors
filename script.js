
const getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3 + 1)
    if (x == 1 ) {
        return "Rock"
    }
    else if (x==2) {
        return "Paper"
    }
    else if (x == 3 ){
        return "Scissors"
    }
}

let yourChoice = prompt ("Choose")

const runGame = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw"
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
        return "Win" +playerSelection + " "+computerSelection
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
        return "Loss"+playerSelection+ " "+computerSelection
      }
  }
